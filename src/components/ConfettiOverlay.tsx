import React, { useEffect, useRef, useState } from 'react';

interface ConfettiOverlayProps {
  burstId: number;
}

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  color: string;
  rotation: number;
  vRotation: number;
  tilt: number;
  vTilt: number;
  phase: number;
  shape: 'rect' | 'circle';
}

const CONFETTI_COLORS = [
  '#F7A94B',
  '#F59E0B',
  '#16A34A',
  '#22C55E',
  '#2563EB',
  '#EF4444',
  '#FACC15',
  '#EC4899',
];

export const ConfettiOverlay: React.FC<ConfettiOverlayProps> = ({ burstId }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (burstId <= 0) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    setActive(true);

    let rafId = 0;
    const startTime = performance.now();
    const DURATION_MS = 2350;

    const frameSetupId = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const particles: ConfettiParticle[] = [];
      const count = width < 640 ? 85 : 125;

      for (let i = 0; i < count; i++) {
        // Mix top curtain rain + two side celebratory cannons
        const mode = i % 3;
        let x = Math.random() * width;
        let y = -16 - Math.random() * 80;
        let vx = (Math.random() - 0.5) * 5;
        let vy = 2.5 + Math.random() * 5.5;

        if (mode === 1) {
          x = width * 0.14;
          y = height * 0.42;
          vx = 3 + Math.random() * 9;
          vy = -11 - Math.random() * 7;
        } else if (mode === 2) {
          x = width * 0.86;
          y = height * 0.42;
          vx = -3 - Math.random() * 9;
          vy = -11 - Math.random() * 7;
        }

        particles.push({
          x,
          y,
          vx,
          vy,
          width: 7 + Math.random() * 6,
          height: 5 + Math.random() * 5,
          color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
          rotation: Math.random() * Math.PI * 2,
          vRotation: (Math.random() - 0.5) * 0.18,
          tilt: Math.random() * Math.PI * 2,
          vTilt: 0.08 + Math.random() * 0.12,
          phase: Math.random() * Math.PI * 2,
          shape: i % 5 === 0 ? 'circle' : 'rect',
        });
      }

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / DURATION_MS);

        ctx.clearRect(0, 0, width, height);

        const globalAlpha = progress > 0.65 ? Math.max(0, 1 - (progress - 0.65) / 0.35) : 1;
        ctx.globalAlpha = globalAlpha;

        for (const p of particles) {
          p.vx *= 0.988;
          p.vy = p.vy * 0.992 + 0.24;
          p.phase += 0.08;
          p.x += p.vx + Math.sin(p.phase) * 0.65;
          p.y += p.vy;
          p.rotation += p.vRotation;
          p.tilt += p.vTilt;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.scale(1, Math.cos(p.tilt));
          ctx.fillStyle = p.color;

          if (p.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, p.width * 0.42, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
          }
          ctx.restore();
        }

        if (elapsed < DURATION_MS) {
          rafId = requestAnimationFrame(tick);
        } else {
          setActive(false);
        }
      };

      rafId = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(frameSetupId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [burstId]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
    />
  );
};
