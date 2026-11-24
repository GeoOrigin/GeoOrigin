import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import * as topojson from 'topojson-client';
import worldAtlas from 'world-atlas/countries-110m.json';
import { Maximize2, Minimize2, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import { COUNTRY_BY_ID, Country, getCountryName, getDistanceHeatColor } from '../data/countries';
import { AppLanguage, formatNumberLocale } from '../i18n/translations';

export interface GuessRecord {
  country: Country;
  distanceKm: number;
  bearingDeg: number;
  cardinal: string;
  isCorrect: boolean;
}

interface WorldMapProps {
  guesses: GuessRecord[];
  targetCountryId: string;
  roundFinished: boolean;
  isDark?: boolean;
  lang?: AppLanguage;
  stagedCountryId?: string | null;
  onSelectCountryFromMap: (country: Country) => void;
}

interface MapFeature {
  id: string;
  uniqueKey: string;
  name: string;
  pathD: string;
  centroidSvg: [number, number] | null;
}

const MAP_WIDTH = 960;
const MAP_HEIGHT = 480;
const MIN_ZOOM = 1;
const MAX_ZOOM = 6;

function clampPan(panX: number, panY: number, zoom: number): { x: number; y: number } {
  if (zoom <= 1) return { x: 0, y: 0 };
  const maxOffsetX = ((zoom - 1) * MAP_WIDTH) / 2;
  const maxOffsetY = ((zoom - 1) * MAP_HEIGHT) / 2;
  return {
    x: Math.max(-maxOffsetX, Math.min(maxOffsetX, panX)),
    y: Math.max(-maxOffsetY, Math.min(maxOffsetY, panY)),
  };
}

export const WorldMap: React.FC<WorldMapProps> = ({
  guesses,
  targetCountryId,
  roundFinished,
  isDark = false,
  lang = 'de',
  stagedCountryId = null,
  onSelectCountryFromMap,
}) => {
  const [hoveredCountryId, setHoveredCountryId] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isDraggingVisual, setIsDraggingVisual] = useState<boolean>(false);

  const svgRef = useRef<SVGSVGElement>(null);
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const dragStartRef = useRef<{
    startX: number;
    startY: number;
    origPanX: number;
    origPanY: number;
    moved: boolean;
  } | null>(null);
  const pinchStartRef = useRef<{
    dist: number;
    midClientX: number;
    midClientY: number;
    origZoom: number;
    origPanX: number;
    origPanY: number;
  } | null>(null);
  const suppressClickUntilRef = useRef<number>(0);

  // Reset zoom/pan cleanly when moving to a different invention round
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setHoveredCountryId(null);
  }, [targetCountryId]);

  const { features, graticulePath } = useMemo(() => {
    const topology = worldAtlas as unknown as Parameters<typeof topojson.feature>[0];
    const countriesObj = (worldAtlas as unknown as { objects: { countries: Parameters<typeof topojson.feature>[1] } })
      .objects.countries;
    const geoCollection = topojson.feature(topology, countriesObj) as unknown as GeoJSON.FeatureCollection;

    const projection = geoNaturalEarth1().fitExtent(
      [
        [14, 14],
        [MAP_WIDTH - 14, MAP_HEIGHT - 14],
      ],
      geoCollection
    );
    const pathGen = geoPath(projection);

    const mapped: MapFeature[] = geoCollection.features.map((feat, idx) => {
      const id = String(feat.id ?? '');
      const d = pathGen(feat) || '';
      const centroid = pathGen.centroid(feat);
      const validCentroid =
        Array.isArray(centroid) && !Number.isNaN(centroid[0]) && !Number.isNaN(centroid[1])
          ? ([centroid[0], centroid[1]] as [number, number])
          : null;
      const props = (feat.properties || {}) as { name?: string };
      return {
        id,
        uniqueKey: `${id || 'territory'}-${idx}`,
        name: props.name || id || `territory-${idx}`,
        pathD: d,
        centroidSvg: validCentroid,
      };
    });

    const graticuleLines: string[] = [];
    for (let lon = -150; lon <= 150; lon += 30) {
      const p = pathGen({
        type: 'LineString',
        coordinates: Array.from({ length: 37 }, (_, i) => [lon, -80 + i * (160 / 36)]),
      });
      if (p) graticuleLines.push(p);
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const p = pathGen({
        type: 'LineString',
        coordinates: Array.from({ length: 73 }, (_, i) => [-180 + i * 5, lat]),
      });
      if (p) graticuleLines.push(p);
    }

    return { features: mapped, graticulePath: graticuleLines.join(' ') };
  }, []);

  const guessMap = useMemo(() => {
    const map = new Map<string, GuessRecord>();
    for (const g of guesses) {
      map.set(g.country.id, g);
    }
    return map;
  }, [guesses]);

  const hoveredCountry = hoveredCountryId ? COUNTRY_BY_ID.get(hoveredCountryId) : undefined;
  const hoveredGuess = hoveredCountryId ? guessMap.get(hoveredCountryId) : undefined;
  const stagedCountry = stagedCountryId ? COUNTRY_BY_ID.get(stagedCountryId) : undefined;

  // Helper: convert client coordinates into SVG coordinate space delta for accurate panning
  const clientDeltaToSvgDelta = useCallback((dxClient: number, dyClient: number) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0 || rect.height === 0) {
      return { dx: dxClient, dy: dyClient };
    }
    const scale = Math.min(rect.width / MAP_WIDTH, rect.height / MAP_HEIGHT);
    return {
      dx: dxClient / scale,
      dy: dyClient / scale,
    };
  }, []);

  const zoomAtClientPoint = useCallback(
    (nextZoomRaw: number, clientX?: number, clientY?: number) => {
      const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, +nextZoomRaw.toFixed(2)));
      if (nextZoom <= 1) {
        setZoom(1);
        setPan({ x: 0, y: 0 });
        return;
      }

      const rect = svgRef.current?.getBoundingClientRect();
      if (rect && typeof clientX === 'number' && typeof clientY === 'number') {
        const scale = Math.min(rect.width / MAP_WIDTH, rect.height / MAP_HEIGHT);
        const renderedW = MAP_WIDTH * scale;
        const renderedH = MAP_HEIGHT * scale;
        const offsetX = (rect.width - renderedW) / 2;
        const offsetY = (rect.height - renderedH) / 2;
        const svgPointX = (clientX - rect.left - offsetX) / scale - MAP_WIDTH / 2;
        const svgPointY = (clientY - rect.top - offsetY) / scale - MAP_HEIGHT / 2;

        setZoom((prevZoom) => {
          const factor = nextZoom / prevZoom;
          setPan((prevPan) =>
            clampPan(
              svgPointX - (svgPointX - prevPan.x) * factor,
              svgPointY - (svgPointY - prevPan.y) * factor,
              nextZoom
            )
          );
          return nextZoom;
        });
      } else {
        setZoom((prevZoom) => {
          const factor = nextZoom / prevZoom;
          setPan((prevPan) => clampPan(prevPan.x * factor, prevPan.y * factor, nextZoom));
          return nextZoom;
        });
      }
    },
    []
  );

  const handleZoomStep = (delta: number) => {
    zoomAtClientPoint(zoom + delta);
  };

  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleDoubleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    suppressClickUntilRef.current = Date.now() + 260;
    if (zoom < 2.2) {
      zoomAtClientPoint(2.8, e.clientX, e.clientY);
    } else {
      resetView();
    }
  };

  const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
    if (zoom <= 1 && !e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.2 : 0.84;
    zoomAtClientPoint(zoom * factor, e.clientX, e.clientY);
  };

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointersRef.current.size === 2) {
      // Begin 2-finger pinch-to-zoom
      const pts = Array.from(pointersRef.current.values());
      const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      pinchStartRef.current = {
        dist: Math.max(10, dist),
        midClientX: (pts[0].x + pts[1].x) / 2,
        midClientY: (pts[0].y + pts[1].y) / 2,
        origZoom: zoom,
        origPanX: pan.x,
        origPanY: pan.y,
      };
      dragStartRef.current = null;
      suppressClickUntilRef.current = Date.now() + 350;
      return;
    }

    if (zoom > 1) {
      dragStartRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        origPanX: pan.x,
        origPanY: pan.y,
        moved: false,
      };
    }
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (pointersRef.current.has(e.pointerId)) {
      pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    }

    // Pinch-to-zoom gesture
    if (pointersRef.current.size === 2 && pinchStartRef.current) {
      const pts = Array.from(pointersRef.current.values());
      const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      const midX = (pts[0].x + pts[1].x) / 2;
      const midY = (pts[0].y + pts[1].y) / 2;
      const ratio = dist / pinchStartRef.current.dist;
      const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, +(pinchStartRef.current.origZoom * ratio).toFixed(2)));
      const delta = clientDeltaToSvgDelta(
        midX - pinchStartRef.current.midClientX,
        midY - pinchStartRef.current.midClientY
      );
      const zoomRatio = nextZoom / pinchStartRef.current.origZoom;
      setZoom(nextZoom);
      setPan(
        clampPan(
          pinchStartRef.current.origPanX * zoomRatio + delta.dx,
          pinchStartRef.current.origPanY * zoomRatio + delta.dy,
          nextZoom
        )
      );
      suppressClickUntilRef.current = Date.now() + 350;
      return;
    }

    // Single-pointer panning when zoomed in
    if (dragStartRef.current) {
      const dxClient = e.clientX - dragStartRef.current.startX;
      const dyClient = e.clientY - dragStartRef.current.startY;
      if (Math.hypot(dxClient, dyClient) > 6) {
        dragStartRef.current.moved = true;
        setIsDraggingVisual(true);
        suppressClickUntilRef.current = Date.now() + 250;
      }
      if (dragStartRef.current.moved) {
        const { dx, dy } = clientDeltaToSvgDelta(dxClient, dyClient);
        setPan(
          clampPan(dragStartRef.current.origPanX + dx, dragStartRef.current.origPanY + dy, zoom)
        );
      }
    }
  };

  const handlePointerEnd = (e: React.PointerEvent<SVGSVGElement>) => {
    pointersRef.current.delete(e.pointerId);
    if (pointersRef.current.size < 2) {
      pinchStartRef.current = null;
    }
    if (dragStartRef.current?.moved) {
      suppressClickUntilRef.current = Date.now() + 220;
    }
    dragStartRef.current = null;
    setIsDraggingVisual(false);
  };

  return (
    <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-3 shadow-2xs">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <h2 className="text-xs font-semibold text-[#16191D] dark:text-[#F1F5F9] shrink-0">
            {lang === 'en' ? 'World Map' : 'Weltkarte'}
          </h2>
          <span className="truncate text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
            {hoveredCountry ? (
              hoveredGuess ? (
                `${getCountryName(hoveredCountry, lang)} · ${formatNumberLocale(hoveredGuess.distanceKm, lang)} km (${hoveredGuess.cardinal})`
              ) : lang === 'en' ? (
                `${hoveredCountry.nameEn} (${hoveredCountry.nameDe})`
              ) : (
                `${hoveredCountry.nameDe} (${hoveredCountry.nameEn})`
              )
            ) : stagedCountry && !roundFinished ? (
              <span className="font-semibold text-[#B45309] dark:text-[#FBBF24]">
                {lang === 'en'
                  ? `Selected: ${getCountryName(stagedCountry, lang)}`
                  : `Gewählt: ${getCountryName(stagedCountry, lang)}`}
              </span>
            ) : roundFinished ? (
              lang === 'en' ? 'Origin highlighted' : 'Auflösung markiert'
            ) : lang === 'en' ? (
              'Tap country or double-tap to zoom'
            ) : (
              'Antippen · Doppeltipp zoomt'
            )}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {zoom > 1 && (
            <span className="font-mono-tabular rounded-md bg-[#FAF8F5] dark:bg-[#1F252E] border border-[#E6E2DA] dark:border-[#2E3642] px-1.5 py-0.5 text-[10.5px] font-semibold text-[#6B7280] dark:text-[#CBD5E1]">
              {zoom.toFixed(1)}×
            </span>
          )}
          <button
            type="button"
            onClick={() => handleZoomStep(0.8)}
            disabled={zoom >= MAX_ZOOM}
            aria-label={lang === 'en' ? 'Zoom in map' : 'Karte vergrößern'}
            title={lang === 'en' ? 'Zoom in' : 'Vergrößern'}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E6E2DA] dark:border-[#2E3642] bg-[#FAF8F5] dark:bg-[#1F252E] text-[#16191D] dark:text-[#E2E8F0] transition-colors hover:bg-[#ECEEE8] dark:hover:bg-[#2A313D] disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-[#F59E0B]"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => handleZoomStep(-0.8)}
            disabled={zoom <= MIN_ZOOM}
            aria-label={lang === 'en' ? 'Zoom out map' : 'Karte verkleinern'}
            title={lang === 'en' ? 'Zoom out' : 'Verkleinern'}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E6E2DA] dark:border-[#2E3642] bg-[#FAF8F5] dark:bg-[#1F252E] text-[#16191D] dark:text-[#E2E8F0] transition-colors hover:bg-[#ECEEE8] dark:hover:bg-[#2A313D] disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-[#F59E0B]"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-label={
              isExpanded
                ? lang === 'en'
                  ? 'Compact map height'
                  : 'Karte verkleinern'
                : lang === 'en'
                ? 'Expand map height'
                : 'Karte größer anzeigen'
            }
            title={
              isExpanded
                ? lang === 'en'
                  ? 'Compact map'
                  : 'Kompakte Höhe'
                : lang === 'en'
                ? 'Larger map'
                : 'Größere Karte'
            }
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E6E2DA] dark:border-[#2E3642] bg-[#FAF8F5] dark:bg-[#1F252E] text-[#16191D] dark:text-[#E2E8F0] transition-colors hover:bg-[#ECEEE8] dark:hover:bg-[#2A313D] focus-visible:outline-2 focus-visible:outline-[#F59E0B]"
          >
            {isExpanded ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
          </button>
          {zoom > 1 && (
            <button
              type="button"
              onClick={resetView}
              aria-label={lang === 'en' ? 'Reset map view' : 'Kartenansicht zurücksetzen'}
              className="flex h-8 items-center gap-1 rounded-lg border border-[#E6E2DA] dark:border-[#2E3642] bg-[#FAF8F5] dark:bg-[#1F252E] px-2 text-[11px] font-medium text-[#16191D] dark:text-[#E2E8F0] transition-colors hover:bg-[#ECEEE8] dark:hover:bg-[#2A313D] whitespace-nowrap shrink-0"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-[#E6E2DA] dark:border-[#262B35] bg-[#EEF3F7] dark:bg-[#0F1722]">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          style={{ touchAction: zoom > 1 ? 'none' : 'pan-y' }}
          className={`mx-auto block w-full object-contain select-none transition-[height] duration-200 ${
            isExpanded ? 'h-64 sm:h-76' : 'h-48 sm:h-52'
          } ${
            zoom > 1
              ? isDraggingVisual
                ? 'cursor-grabbing'
                : 'cursor-grab'
              : 'cursor-pointer'
          }`}
          onDoubleClick={handleDoubleClick}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onPointerLeave={() => {
            setHoveredCountryId(null);
            if (dragStartRef.current && !dragStartRef.current.moved) {
              dragStartRef.current = null;
            }
          }}
        >
          <g
            transform={`translate(${MAP_WIDTH / 2 + pan.x}, ${MAP_HEIGHT / 2 + pan.y}) scale(${zoom}) translate(${-MAP_WIDTH / 2}, ${-MAP_HEIGHT / 2})`}
          >
            {/* Ocean / Graticule */}
            <path
              d={graticulePath}
              fill="none"
              stroke={isDark ? '#1B2836' : '#DCE5EE'}
              strokeWidth={0.6 / zoom}
            />

            {/* Country Polygons */}
            {features.map((feat) => {
              const isAntarctica = feat.id === '010' || feat.id === '260';
              if (isAntarctica) {
                return (
                  <path
                    key={feat.uniqueKey}
                    d={feat.pathD}
                    fill={isDark ? '#202731' : '#E5E9EC'}
                    stroke={isDark ? '#121820' : '#FFFFFF'}
                    strokeWidth={0.4 / zoom}
                  />
                );
              }

              const guess = feat.id ? guessMap.get(feat.id) : undefined;
              const isTargetRevealed = roundFinished && feat.id === targetCountryId;
              const isStaged = Boolean(feat.id) && stagedCountryId === feat.id && !roundFinished && !guess;
              const isHovered = Boolean(feat.id) && hoveredCountryId === feat.id;
              const playableCountry = feat.id ? COUNTRY_BY_ID.get(feat.id) : undefined;

              let fill = isDark ? '#2B333F' : '#DFDFD8';
              if (isTargetRevealed) {
                fill = '#16A34A';
              } else if (guess) {
                fill = getDistanceHeatColor(guess.distanceKm, guess.isCorrect);
              } else if (isStaged) {
                fill = '#F59E0B';
              } else if (isHovered && playableCountry && !roundFinished) {
                fill = isDark ? '#3F4B5C' : '#CBD5E1';
              }

              const strokeColor = isTargetRevealed
                ? isDark
                  ? '#DCFCE7'
                  : '#052E16'
                : isStaged
                ? isDark
                  ? '#FEF3C7'
                  : '#78350F'
                : guess
                ? isDark
                  ? '#0F141A'
                  : '#FFFFFF'
                : isHovered
                ? isDark
                  ? '#94A3B8'
                  : '#475569'
                : isDark
                ? '#141A22'
                : '#FFFFFF';

              return (
                <path
                  key={feat.uniqueKey}
                  d={feat.pathD}
                  fill={fill}
                  stroke={strokeColor}
                  strokeWidth={(isTargetRevealed || isStaged ? 1.4 : 0.55) / zoom}
                  className="transition-colors duration-150"
                  onMouseEnter={() => setHoveredCountryId(feat.id || null)}
                  onClick={() => {
                    if (Date.now() < suppressClickUntilRef.current) return;
                    if (!roundFinished && playableCountry && !guess) {
                      onSelectCountryFromMap(playableCountry);
                    }
                  }}
                />
              );
            })}
          </g>
        </svg>
      </div>

      {/* Kompakte Farblegende */}
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#5A6169] dark:text-[#9CA3AF]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-xs bg-[#16A34A]" />
            <span>{lang === 'en' ? 'Hit (0 km)' : 'Treffer (0 km)'}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-xs bg-[#FDBE68]" />
            <span>{lang === 'en' ? 'Close (< 2,000 km)' : 'Nah (< 2.000 km)'}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-xs bg-[#F97316]" />
            <span>{lang === 'en' ? 'Medium (~5,000 km)' : 'Mittel (~5.000 km)'}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-xs bg-[#9A2E0A]" />
            <span>{lang === 'en' ? 'Far (< 10,000 km)' : 'Weit (< 10.000 km)'}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-xs bg-[#DC2626]" />
            <span>{lang === 'en' ? 'Very Far (≥ 10,000 km)' : 'Schlecht (≥ 10.000 km)'}</span>
          </div>
        </div>
        <span className="font-mono-tabular">
          {COUNTRY_BY_ID.size} {lang === 'en' ? 'countries' : 'Länder'}
        </span>
      </div>
    </div>
  );
};
