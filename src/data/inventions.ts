import { AppLanguage } from '../i18n/translations';
import { INVENTIONS_EN } from './inventionsEn';

export type DifficultyTier = 'einfach' | 'mittel' | 'sehr_schwer';

export type InventionCategory =
  | 'Kulinarik & Genuss'
  | 'Alltag & Haushalt'
  | 'Technik & Medizin'
  | 'Spiel & Kultur'
  | 'Kleidung & Design';

export interface Invention {
  id: string;
  name: string;
  countryId: string;
  category: InventionCategory;
  difficulty: DifficultyTier;
  maxPoints: number;
  era: string;
  clueDescription: string;
  hintText?: string;
  resolutionFact: string;
  imageUrl?: string;
  artworkKey: string;
}

export const DIFFICULTY_LABELS: Record<DifficultyTier, string> = {
  einfach: 'Standard',
  mittel: 'Knifflig',
  sehr_schwer: 'Sehr schwer · 2× Punkte',
};

export const DIFFICULTY_LABELS_BY_LANG: Record<AppLanguage, Record<DifficultyTier, string>> = {
  de: DIFFICULTY_LABELS,
  en: {
    einfach: 'Standard',
    mittel: 'Tricky',
    sehr_schwer: 'Very Hard · 2× Points',
  },
};

export const CATEGORY_LABELS_BY_LANG: Record<AppLanguage, Record<InventionCategory, string>> = {
  de: {
    'Kulinarik & Genuss': 'Kulinarik & Genuss',
    'Alltag & Haushalt': 'Alltag & Haushalt',
    'Technik & Medizin': 'Technik & Medizin',
    'Spiel & Kultur': 'Spiel & Kultur',
    'Kleidung & Design': 'Kleidung & Design',
  },
  en: {
    'Kulinarik & Genuss': 'Culinary & Food',
    'Alltag & Haushalt': 'Everyday & Home',
    'Technik & Medizin': 'Tech & Medicine',
    'Spiel & Kultur': 'Games & Culture',
    'Kleidung & Design': 'Clothing & Design',
  },
};

export const INVENTIONS: Invention[] = [
  // === FLAGSHIP DAILY SET (mit Studio-Fotografie) ===
  {
    id: 'pommes-frites',
    name: 'Pommes frites',
    countryId: '056', // Belgien
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'Ende 17. Jahrhundert',
    clueDescription:
      'In heißem Fett zweifach ausgebackene Kartoffelstäbchen, außen knusprig, innen weich – weltweit oft in spitzen Papiertüten serviert.',
    hintText:
      'Entstand an den Ufern der Maas, als Fischer wegen zugefrorener Flüsse nach einem Ersatz für kleine Bratfische suchten.',
    resolutionFact:
      'Entgegen dem englischen Namen „French Fries“ stammen frittierte Kartoffelstäbchen aus Belgien: Im Raum Namur und Lüttich soll man Ende des 17. Jahrhunderts bei zugefrorenen Flüssen Kartoffeln statt kleiner Fische frittiert haben.',
    artworkKey: 'fries',
  },
  {
    id: 'schach',
    name: 'Schach',
    countryId: '356', // Indien
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '6. Jahrhundert',
    clueDescription:
      'Ein strategisches Brettspiel für zwei Personen auf 64 abwechselnd hellen und dunklen Feldern mit König, Dame, Türmen, Läufern, Springern und Bauern.',
    hintText:
      'Das Urspiel hieß „Chaturanga“ und entstand während des goldenen Gupta-Zeitalters nach dem Vorbild einer vierteiligen Armee.',
    resolutionFact:
      'Der Vorläufer „Chaturanga“ entstand im 6. Jahrhundert im Gupta-Reich in Nordindien. Seine Figuren spiegelten die vier Heeresgattungen wider: Infanterie, Kavallerie, Elefanten und Streitwagen.',
    artworkKey: 'chess',
  },
  {
    id: 'croissant',
    name: 'Croissant',
    countryId: '040', // Österreich
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '17. Jahrhundert (Kipferl)',
    clueDescription:
      'Ein halbmondförmiges, luftiges Plundergebäck aus vielen hauchdünnen Teig- und Butterschichten, das heute weltweit auf dem Frühstückstisch steht.',
    hintText:
      'Der direkte Vorläufer trug den Namen „Kipferl“ und gelangte erst im 19. Jahrhundert durch einen Bäcker aus dieser Alpenrepublik nach Paris.',
    resolutionFact:
      'Das berühmte Gebäck gilt als französisch, doch sein direkter Vorläufer ist das Wiener Kipferl aus dem 17. Jahrhundert. Erst der Österreicher August Zang brachte es 1839 mit seiner „Boulangerie Viennoise“ nach Paris.',
    artworkKey: 'croissant',
  },
  {
    id: 'zauberwuerfel',
    name: 'Zauberwürfel',
    countryId: '348', // Ungarn
    category: 'Spiel & Kultur',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1974',
    clueDescription:
      'Ein dreidimensionales mechanisches Drehpuzzle aus 26 beweglichen Teilwürfeln mit sechs verschiedenfarbigen Seitenflächen und über 43 Trillionen Stellungen.',
    hintText:
      'Ein Architekturprofessor an einer technischen Hochschule an der Donau entwarf das Modell 1974 für seinen Geometrie-Unterricht.',
    resolutionFact:
      'Der Architekturprofessor Ernő Rubik konstruierte den Würfel 1974 in Budapest ursprünglich als räumliches Anschauungsmodell für seine Studierenden – bis er merkte, wie schwer das Zurückdrehen war.',
    artworkKey: 'cube',
  },
  {
    id: 'flugschreiber',
    name: 'Flugschreiber (Black Box)',
    countryId: '036', // Australien
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1953–1957',
    clueDescription:
      'Ein extrem stoß-, feuer- und druckfestes Aufzeichnungsgerät für Cockpit-Gespräche und Flugdaten – trotz seines Spitznamens meist leuchtend orange lackiert.',
    hintText:
      'Ein Chemiker in einer Luftfahrt-Forschungsanstalt auf der Südhalbkugel entwickelte den Prototyp ab 1953 nach geheimnisvollen Abstürzen.',
    resolutionFact:
      'Der Chemiker David Warren entwickelte den ersten kombinierten Flugdaten- und Stimmenrekorder ab 1953 in Melbourne nach der rätselhaften Absturzserie des ersten Düsenverkehrsflugzeugs Comet.',
    artworkKey: 'blackbox',
  },

];

// Clean curated full catalog (~72 rich, verified inventions across many countries)
export const FULL_INVENTIONS: Invention[] = [
  // --- TODAY'S 5 STUDIO-PHOTOGRAPHED ITEMS ---
  ...INVENTIONS,
  {
    id: 'kaffee-gebrueht',
    name: 'Gebrühter Kaffee',
    countryId: '887', // Jemen
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '15. Jahrhundert',
    clueDescription:
      'Ein dunkles, koffeinhaltiges Heißgetränk aus gerösteten und gemahlenen Samen einer tropischen Kirsche, das heute Milliarden Menschen morgens trinken.',
    resolutionFact:
      'Die Kaffeepflanze wächst wild in Äthiopien, doch das Rösten der Bohnen und Brühen des Getränks „Qahwa“ wurde ab dem 15. Jahrhundert in Sufi-Klöstern im Jemen entwickelt und über den Hafen Mokka weltberühmt.',
    artworkKey: 'coffee',
  },

  // --- EINFACH (Standard, 100 Pkt) ---
  {
    id: 'jeans',
    name: 'Blue Jeans',
    countryId: '840', // Vereinigte Staaten
    category: 'Kleidung & Design',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1873',
    clueDescription:
      'Eine robuste Arbeitshose aus blau gefärbtem Baumwollköper, deren beanspruchte Taschenecken charakteristisch mit kleinen Metallnieten verstärkt sind.',
    resolutionFact:
      'Zwar stammt das Wort „Denim“ aus Nîmes und „Jeans“ aus Genua, doch das Patent auf die mit Kupfernieten verstärkte blaue Arbeitshose erhielten Levi Strauss und Jacob Davis 1873 in den USA.',
    artworkKey: 'jeans',
  },
  {
    id: 'lego',
    name: 'Klemmbausteine (Lego)',
    countryId: '208', // Dänemark
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1958',
    clueDescription:
      'Präzise gefertigte Kunststoffsteine mit runden Noppen oben und kleinen Röhren im Inneren, die sich in unzähligen Kombinationen zusammenstecken lassen.',
    resolutionFact:
      'Tischlermeister Ole Kirk Christiansen gründete das Unternehmen 1932 in Billund (Dänemark). Das bis heute kompatible Kupplungsprinzip wurde dort 1958 zum Patent angemeldet.',
    artworkKey: 'blocks',
  },
  {
    id: 'gutenberg-presse',
    name: 'Druckpresse mit beweglichen Metalllettern',
    countryId: '276', // Deutschland
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 1450',
    clueDescription:
      'Eine mechanische Spindelpresse, mit der gegossene einzelne Metallbuchstaben immer wieder neu zu ganzen Buchseiten zusammengesetzt und gedruckt werden.',
    resolutionFact:
      'Johannes Gutenberg kombinierte um 1450 in Mainz (Deutschland) Handgießinstrument, Metalllegierung, dickflüssige Druckfarbe und Spindelpresse – und löste so die erste Medienrevolution aus.',
    artworkKey: 'press',
  },
  {
    id: 'kompass',
    name: 'Magnetkompass',
    countryId: '156', // China
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '11. Jahrhundert',
    clueDescription:
      'Ein Navigationsinstrument mit einer frei drehbaren, magnetisierten Nadel, die auch bei Nebel und auf offener See verlässlich nach Norden zeigt.',
    resolutionFact:
      'Schon in der Antike kannte man in China Magneteisenstein-Zeiger; während der Song-Dynastie im 11. Jahrhundert entstand dort der erste seetaugliche Kompass.',
    artworkKey: 'compass',
  },
  {
    id: 'klavier',
    name: 'Klavier (Piano)',
    countryId: '380', // Italien
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 1700',
    clueDescription:
      'Ein Tasteninstrument, bei dem kleine filzbezogene Hämmerchen gegen gespannte Saiten schlagen und je nach Anschlagstärke laute oder leise Töne erzeugen.',
    resolutionFact:
      'Um 1700 baute Bartolomeo Cristofori in Florenz (Italien) das „Gravicembalo col piano e forte“ – wörtlich „leise und laut“ – woraus die Kurzform Piano hervorging.',
    artworkKey: 'piano',
  },
  {
    id: 'taschenmesser',
    name: 'Offiziers- und Taschenmesser',
    countryId: '756', // Schweiz
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1891–1897',
    clueDescription:
      'Ein kompaktes Klappwerkzeug mit markanten roten Griffschalen, das neben Klinge meist auch Korkenzieher, Schere, Ahle und Dosenöffner vereint.',
    resolutionFact:
      'Der Messerschmied Karl Elsener entwickelte ab 1891 in Ibach (Schweiz) das legendäre Soldaten- und Offiziersmesser, das bald weltweit zum Symbol für kompakte Multifunktion wurde.',
    artworkKey: 'knife',
  },
  {
    id: 'sauna',
    name: 'Rauch- und Dampfsauna',
    countryId: '246', // Finnland
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'Antike / Traditionell',
    clueDescription:
      'Ein holzverkleideter Schwitzraum, in dem erhitzte Steine mit Wasser übergossen werden, um bei Temperaturen um 80 bis 100 Grad zu entspannen.',
    resolutionFact:
      'Das Wort „Sauna“ ist einer der wenigen Begriffe aus einer finno-ugrischen Sprache, die in fast alle Weltsprachen übernommen wurden – die Kultur entstand vor Jahrtausenden in Finnland.',
    artworkKey: 'sauna',
  },
  {
    id: 'dynamit',
    name: 'Dynamit',
    countryId: '752', // Schweden
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1867',
    clueDescription:
      'Ein sicher handhabbarer Sprengstoff in Stangenform, bei dem flüssiges Nitroglycerin durch einen porösen Füllstoff gebunden und erst durch einen Zünder ausgelöst wird.',
    resolutionFact:
      'Alfred Nobel entwickelte das Dynamit 1867 in Schweden, nachdem sein jüngerer Bruder bei Experimenten mit ungebundenem Nitroglycerin ums Leben gekommen war. Das Patent finanzierte später den Nobelpreis.',
    artworkKey: 'dynamite',
  },
  {
    id: 'penicillin',
    name: 'Penicillin (Antibiotikum)',
    countryId: '826', // Großbritannien
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1928',
    clueDescription:
      'Ein lebensrettendes Medikament gegen bakterielle Infektionen, das zufällig aus der Wirkung eines unscheinbaren grünen Schimmelpilzes in einer Petrischale entdeckt wurde.',
    resolutionFact:
      'Alexander Fleming bemerkte 1928 in London (Großbritannien), dass ein Schimmelpilz der Gattung Penicillium auf einer vergessenen Bakterienkultur alle Keime in seiner Umgebung abtötete.',
    artworkKey: 'petri',
  },
  {
    id: 'teleskop',
    name: 'Linsen-Teleskop (Fernrohr)',
    countryId: '528', // Niederlande
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1608',
    clueDescription:
      'Ein optisches Rohr mit geschliffenen Glaslinsen an beiden Enden, das weit entfernte Schiffe, Krater auf dem Mond oder fremde Planeten stark vergrößert.',
    resolutionFact:
      'Der Brillenmacher Hans Lippershey reichte 1608 in Middelburg (Niederlande) den ersten dokumentierten Patentantrag für ein Fernrohr ein – ein Jahr bevor Galileo Galilei seines nachbaute.',
    artworkKey: 'telescope',
  },
  {
    id: 'heissluftballon',
    name: 'Heißluftballon',
    countryId: '250', // Frankreich
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1783',
    clueDescription:
      'Eine riesige, unten offene Stoffhülle mit einem geflochtenen Korb darunter, die durch erwärmte Luft im Inneren lautlos in den Himmel aufsteigt.',
    resolutionFact:
      'Die Papierfabrikanten Joseph-Michel und Jacques-Étienne Montgolfier ließen 1783 in Annonay und Paris (Frankreich) den ersten bemannten Heißluftballon der Menschheitsgeschichte starten.',
    artworkKey: 'balloon',
  },
  {
    id: 'tetris',
    name: 'Tetris',
    countryId: '643', // Russland
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1984',
    clueDescription:
      'Ein weltberühmtes Puzzlespiel, bei dem geometrische Blöcke aus je vier Quadraten von oben herabfallen und lückenlose waagerechte Reihen bilden müssen.',
    resolutionFact:
      'Der Computerwissenschaftler Alexei Paschitnow programmierte Tetris 1984 in seiner Freizeit an der Akademie der Wissenschaften in Moskau (Russland / Sowjetunion) auf einem Elektronika-60-Rechner.',
    artworkKey: 'tetris',
  },
  {
    id: 'instant-nudeln',
    name: 'Instant-Nudeln',
    countryId: '392', // Japan
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1958',
    clueDescription:
      'Vorgekochte und getrocknete, wellenförmige Weizennudeln mit Würzpaket, die mit kochendem Wasser übergossen in drei Minuten verzehrfertig sind.',
    resolutionFact:
      'Momofuku Ando entwickelte 1958 in Ikeda bei Osaka (Japan) durch Blitzfrittieren in Palmöl die ersten „Chikin Ramen“ – heute eines der meistverkauften Lebensmittel der Welt.',
    artworkKey: 'noodles',
  },
  {
    id: 'kartoffel',
    name: 'Kultivierte Kartoffel',
    countryId: '604', // Peru
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 8000–5000 v. Chr.',
    clueDescription:
      'Eine stärkereiche unterirdische Knolle, die in Tausenden Sorten wächst und erst Jahrtausende nach ihrer Zucht über die Weltmeere nach Europa kam.',
    resolutionFact:
      'Indigene Gemeinschaften in den Hochanden rund um den Titicacasee (heutiges Peru) domestizierten die wilde Knolle vor über 7.000 Jahren und entwickelten über 3.000 Sorten.',
    artworkKey: 'potato',
  },
  {
    id: 'schokolade-kakao',
    name: 'Kakaogetränk & Schokoladenzubereitung',
    countryId: '484', // Mexiko
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 1900 v. Chr.',
    clueDescription:
      'Eine Zubereitung aus fermentierten, gerösteten und fein vermahlenen Samen einer tropischen Schotenfrucht – früher herb und schaumig getrunken.',
    resolutionFact:
      'Bereits die Olmeken, Maya und Azteken im heutigen Mexiko kultivierten den Kakaobaum, rösteten die Bohnen und nutzten sie sowohl als heiliges Getränk („Xocolatl“) als auch als Zahlungsmittel.',
    artworkKey: 'cacao',
  },
  {
    id: 'bumerang',
    name: 'Rückkehr-Bumerang',
    countryId: '036', // Australien
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'Vor über 10.000 Jahren',
    clueDescription:
      'Ein gekrümmtes, aerodynamisch geformtes Wurfholz mit Tragflächenprofil, das bei geübtem Wurf eine weite Kurve fliegt und zum Werfer zurückkehrt.',
    resolutionFact:
      'Auch wenn alte Wurfhölzer in Europa gefunden wurden, perfektonierten Aborigines in Australien die spezielle Bauweise des geschwungenen Rückkehr-Bumerangs für Jagd, Sport und Musik.',
    artworkKey: 'boomerang',
  },
  {
    id: 'papyrus',
    name: 'Papyrus (Beschreibstoff)',
    countryId: '818', // Ägypten
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 3000 v. Chr.',
    clueDescription:
      'Ein dünner, flexibler Schreibbogen aus kreuzweise gepressten Markstreifen einer hohen Uferpflanze – jahrtausendelang der wichtigste Datenträger der Antike.',
    resolutionFact:
      'Im alten Ägypten wurden die Stängel des entlang des Nils wachsenden Zyperngrases in Streifen geschnitten, kreuzweise gepresst und zu langen Schriftrollen verleimt.',
    artworkKey: 'scroll',
  },
  {
    id: 'krawatte',
    name: 'Krawatte',
    countryId: '191', // Kroatien
    category: 'Kleidung & Design',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '17. Jahrhundert',
    clueDescription:
      'Ein schmales, längliches Stoffband, das um den Hemdkragen geschlungen und vorne zu einem Knoten gebunden wird – heute das klassische Zeichen formeller Kleidung.',
    resolutionFact:
      'Die Bezeichnung leitet sich vom französischen „à la croate“ ab: Im Dreißigjährigen Krieg fielen Söldner aus Kroatien am Hof König Ludwigs XIII. durch ihre markant geknoteten Halstücher auf.',
    artworkKey: 'tie',
  },
  {
    id: 'tulpen-kultivierung',
    name: 'Garten-Tulpenzucht',
    countryId: '792', // Türkei
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '16. Jahrhundert',
    clueDescription:
      'Eine auffällige Zwiebelblume mit kelchförmiger Blüte in leuchtenden Farben, die später in einem europäischen Nachbarland sogar eine Börsenblase auslöste.',
    resolutionFact:
      'Viele denken sofort an Holland, doch die gezielte Zucht der Tulpe („Lale“) entstand im Osmanischen Reich (heutige Türkei). Erst 1554 gelangten Zwiebeln durch einen Gesandten von Istanbul nach Wien und Leiden.',
    artworkKey: 'tulip',
  },
  {
    id: 'insulin',
    name: 'Medizinisches Insulin',
    countryId: '124', // Kanada
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1921',
    clueDescription:
      'Ein lebenswichtiges Hormonpräparat, das den Blutzuckerspiegel reguliert und eine bis dahin tödliche Stoffwechselkrankheit erstmals behandelbar machte.',
    resolutionFact:
      'Frederick Banting und Charles Best isolierten das Hormon 1921 an der Universität Toronto (Kanada) und retteten kurz darauf einem 14-jährigen Jungen das Leben.',
    artworkKey: 'vial',
  },

  // --- MITTEL / KNIFFLIG (Überraschend, 100 Pkt) ---
  {
    id: 'klettverschluss',
    name: 'Klettverschluss (Velcro)',
    countryId: '756', // Schweiz
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1941–1951',
    clueDescription:
      'Ein zweigeteiltes Verschlussband aus feinen Kunststoffhäkchen und weichen Flauschschlaufen, das sich mit charakteristischem Geräusch sekundenschnell öffnen und schließen lässt.',
    resolutionFact:
      'Der Schweizer Ingenieur George de Mestral ärgerte sich 1941 nach einem Spaziergang über hartnäckige Kletten im Fell seines Hundes, betrachtete sie unter dem Mikroskop und erfand den Klettverschluss.',
    artworkKey: 'velcro',
  },
  {
    id: 'shampoo',
    name: 'Shampoo (Haarwäsche)',
    countryId: '356', // Indien
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '18. Jahrhundert (als Champu)',
    clueDescription:
      'Eine pflegende Flüssigkeit aus waschaktiven Substanzen und Extrakten, mit der Kopfhaut und Haare massiert und gereinigt werden.',
    resolutionFact:
      'Das Wort stammt vom Hindi-Begriff „Champu“ (kneten/massieren). In Indien reinigte man Haare bereits mit Waschnuss-Sud und Kräutern, bevor Sake Dean Mahomed die Methode 1814 in Brighton populär machte.',
    artworkKey: 'bottle',
  },
  {
    id: 'kugelschreiber',
    name: 'Moderner Kugelschreiber',
    countryId: '348', // Ungarn
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1938',
    clueDescription:
      'Ein Schreibgerät, bei dem eine winzige Metallkugel in der Spitze sitzt, sich beim Schreiben dreht und zähflüssige, sofort trocknende Tinte aufs Papier überträgt.',
    resolutionFact:
      'Der ungarische Journalist László József Bíró bemerkte, wie schnell Druckerschwärze auf Zeitungspapier trocknete, und ließ 1938 in Budapest den ersten praxistauglichen Kugelschreiber patentieren.',
    artworkKey: 'pen',
  },
  {
    id: 'schneekugel',
    name: 'Schneekugel',
    countryId: '040', // Österreich
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1900',
    clueDescription:
      'Eine mit klarer Flüssigkeit gefüllte Glaskuppel über einer Miniaturszene, in der beim Schütteln feine weiße Flocken langsam zu Boden rieseln.',
    resolutionFact:
      'Der Wiener Chirurgieinstrumenten-Mechaniker Erwin Perzy suchte 1900 nach einer Möglichkeit, das schwache Licht einer Glühbirne heller zu streuen – und erfand dabei zufällig die Schneekugel.',
    artworkKey: 'snowglobe',
  },
  {
    id: 'wischmopp',
    name: 'Wischmopp mit Auswringer',
    countryId: '724', // Spanien
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1956',
    clueDescription:
      'Ein Bodenreinigungsgerät mit langem Stiel und saugfähigem Fransenkopf, der in einem passenden Siebeinsatz im Eimer ohne Bücken ausgewrungen wird.',
    resolutionFact:
      'Der Luftfahrtingenieur Manuel Jalón Corominas beobachtete 1956 in Spanien Putzkräfte beim mühsamen Knien auf dem Boden und entwickelte die „Fregona“ – den modernen Eimer-Mopp.',
    artworkKey: 'mop',
  },
  {
    id: 'tischfussball',
    name: 'Tischfußball (Kicker)',
    countryId: '724', // Spanien
    category: 'Spiel & Kultur',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1937',
    clueDescription:
      'Ein rechteckiger Spieltisch mit acht drehbaren Metallstangen, an denen aufgereihte Spielfiguren einen kleinen Ball ins gegnerische Tor schießen.',
    resolutionFact:
      'Zwar gab es frühe Vorläufer, doch der verletzte spanische Dichter Alejandro Finisterre erfand 1937 in einem Madrider Krankenhaus während des Bürgerkriegs das moderne „Futbolín“ für verwundete Kinder.',
    artworkKey: 'foosball',
  },
  {
    id: 'dreipunktgurt',
    name: 'Dreipunkt-Sicherheitsgurt',
    countryId: '752', // Schweden
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1959',
    clueDescription:
      'Ein schräg über Brust und Becken verlaufendes Gurtband im Fahrzeug, das mit einem Handgriff eingerastet wird und bei Unfällen Millionen Leben gerettet hat.',
    resolutionFact:
      'Der Ingenieur Nils Bohlin entwickelte den modernen V-förmigen Dreipunktgurt 1959 in Schweden für Volvo. Der Hersteller gab das Patent sofort kostenlos für alle Autohersteller weltweit frei.',
    artworkKey: 'seatbelt',
  },
  {
    id: 'schraubenschluessel',
    name: 'Verstellbarer Rollgabelschlüssel',
    countryId: '752', // Schweden
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1892',
    clueDescription:
      'Ein massives Handwerkzeug aus Stahl mit einer kleinen Rändelschnecke, mit der sich die Maulweite stufenlos an verschieden große Muttern anpassen lässt.',
    resolutionFact:
      'Der Erfinder Johan Petter Johansson erhielt 1892 in Enköping (Schweden) das Patent auf den „Skiftnyckel“ – im Englischen nach dem schwedischen Vorbild oft einfach „Swedish wrench“ genannt.',
    artworkKey: 'wrench',
  },
  {
    id: 'stethoskop',
    name: 'Stethoskop',
    countryId: '250', // Frankreich
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1816',
    clueDescription:
      'Ein akustisches Diagnoseinstrument mit zwei Ohrbügeln und einem flachen Bruststück, mit dem Herzschlag und Atemgeräusche abgehört werden.',
    resolutionFact:
      'Der Pariser Arzt René Laënnec erfand das Stethoskop 1816 in Frankreich aus Verlegenheit, weil er einer jungen Patientin nicht direkt mit dem Ohr auf die Brust hören wollte – er rollte einfach ein Papierheft zusammen.',
    artworkKey: 'stethoscope',
  },
  {
    id: 'brailleschrift',
    name: 'Blindenschrift (Braille)',
    countryId: '250', // Frankreich
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1825',
    clueDescription:
      'Ein Schriftsystem aus maximal sechs erhabenen Punkten in einem kleinen Raster, die mit den Fingerkuppen ertastet und flüssig gelesen werden können.',
    resolutionFact:
      'Im Alter von erst 16 Jahren entwickelte der selbst erblindete Louis Braille 1825 in Paris (Frankreich) das geniale 6-Punkt-System, das heute für fast jede Sprache und sogar Notenschrift existiert.',
    artworkKey: 'braille',
  },
  {
    id: 'batterie',
    name: 'Elektrische Batterie (Voltaische Säule)',
    countryId: '380', // Italien
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1800',
    clueDescription:
      'Eine Anordnung aus verschiedenen Metallscheiben und leitenden Zwischenlagen, die erstmals einen kontinuierlichen elektrischen Gleichstrom liefern konnte.',
    resolutionFact:
      'Alessandro Volta stapelte 1800 in Como (Italien) abwechselnd Zink- und Kupferscheiben mit salzwassergetränktem Tuch zur „Voltaschen Säule“ – nach ihm ist die Einheit Volt benannt.',
    artworkKey: 'battery',
  },
  {
    id: 'brille',
    name: 'Sehbrille',
    countryId: '380', // Italien
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 1286',
    clueDescription:
      'Zwei geschliffene Sammellinsen in einer Fassung vor den Augen, die zunächst alterssichtigen Gelehrten und Mönchen wieder scharfes Lesen ermöglichten.',
    resolutionFact:
      'Die früheste dokumentierte Brille entstand um 1286 in Norditalien (vermutlich Pisa oder Venedig), wo venezianische Glasbläser bereits über die nötige Linsentechnik verfügten.',
    artworkKey: 'glasses',
  },
  {
    id: 'aspirin',
    name: 'Aspirin (Acetylsalicylsäure)',
    countryId: '276', // Deutschland
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1897',
    clueDescription:
      'Eine weiße Schmerz- und Fiebertablette, deren Wirkstoff ursprünglich von der Rinde des Weidenbaums inspiriert und chemisch veredelt wurde.',
    resolutionFact:
      '1897 synthetisierte der Chemiker Felix Hoffmann (gemeinsam mit Arthur Eichengrün) in Wuppertal-Elberfeld (Deutschland) erstmals reine, gut verträgliche Acetylsalicylsäure.',
    artworkKey: 'pill',
  },
  {
    id: 'thermoskanne',
    name: 'Isolierkanne (Thermoskanne)',
    countryId: '826', // Großbritannien
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1892',
    clueDescription:
      'Ein doppelwandiges Gefäß mit luftleerem Zwischenraum und verspiegelter Innenfläche, das Getränke stundenlang heiß oder eiskalt hält.',
    resolutionFact:
      'Der schottische Physiker Sir James Dewar erfand das Vakuum-Isoliergefäß 1892 in London (Großbritannien) eigentlich für seine Laborforschung mit flüssigem Wasserstoff und Sauerstoff.',
    artworkKey: 'thermos',
  },
  {
    id: 'korkenzieher',
    name: 'Korkenzieher',
    countryId: '826', // Großbritannien
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1795 (erstes Patent)',
    clueDescription:
      'Eine gehärtete Metallspirale mit Griff oder Hebelarmen, mit der fest sitzende Baumrinden-Stopfen sauber aus Glasflaschen gezogen werden.',
    resolutionFact:
      'Zwar nutzte man zuvor „Stahlwürmer“ zum Reinigen von Gewehrläufen, doch das erste Patent für einen dedizierten Flaschen-Korkenzieher erhielt 1795 der englische Pfarrer Samuel Henshall in Großbritannien.',
    artworkKey: 'corkscrew',
  },
  {
    id: 'kassette',
    name: 'Kompaktkassette (Musikkassette)',
    countryId: '528', // Niederlande
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1963',
    clueDescription:
      'Ein handliches Kunststoffgehäuse mit zwei kleinen Spulen und einem schmalen Magnetband, auf dem man Jahrzehntelang eigene Mixtapes aufnehmen konnte.',
    resolutionFact:
      'Ingenieur Lou Ottens und sein Team bei Philips im niederländischen Eindhoven (und im belgischen Hasselt) präsentierten die „Compact Cassette“ 1963 – mit dem legendären Ziel, dass sie in eine Jackentasche passt.',
    artworkKey: 'cassette',
  },
  {
    id: 'qr-code',
    name: 'QR-Code',
    countryId: '392', // Japan
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1994',
    clueDescription:
      'Eine quadratische Matrix aus schwarzen und weißen Pixeln mit drei markanten Eck-Quadraten, die Tickets, Speisekarten und Zahlungsdaten blitzschnell speichert.',
    resolutionFact:
      'Masahiro Hara entwickelte den „Quick Response“-Code 1994 in Japan beim Zulieferer Denso Wave – angeblich inspiriert vom Brettspiel Go – um Autoteile schneller zu scannen.',
    artworkKey: 'qrcode',
  },
  {
    id: 'emoji',
    name: 'Emoji-Zeichensatz',
    countryId: '392', // Japan
    category: 'Spiel & Kultur',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1999',
    clueDescription:
      'Kleine genormte Bildsymbole für Gesichtsausdrücke, Wetter, Essen und Herzen, die direkt in digitale Textnachrichten eingefügt werden.',
    resolutionFact:
      'Der Designer Shigetaka Kurita entwarf 1999 in Japan die ersten 176 bunten 12×12-Pixel-Bildchen für frühe mobile Internet-Handys („i-mode“). Das Wort setzt sich aus „Bild“ (e) und „Zeichen“ (moji) zusammen.',
    artworkKey: 'emoji',
  },
  {
    id: 'null-ziffer',
    name: 'Die Zahl Null als Rechenziffer',
    countryId: '356', // Indien
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '5.–7. Jahrhundert',
    clueDescription:
      'Ein mathematisches Symbol für „Nichts“, das erst Stellenwertsysteme, moderne Buchhaltung und jede Form von Computer-Logik möglich machte.',
    resolutionFact:
      'Während andere Kulturen nur Platzhalter kannten, definierte der Mathematiker Brahmagupta im 7. Jahrhundert in Indien die Null („Shunya“) erstmals als eigenständige Zahl mit festen Rechenregeln.',
    artworkKey: 'zero',
  },
  {
    id: 'papiergeld',
    name: 'Staatliches Papiergeld',
    countryId: '156', // China
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 1024',
    clueDescription:
      'Bedruckte Scheine aus Pflanzenfasern mit aufgedrucktem Nennwert, die schwere Säcke aus Kupfer- oder Silbermünzen im Alltag ersetzten.',
    resolutionFact:
      'Kaufleute in Sichuan nutzten zunächst private Schuldscheine („Jiaozi“), bis der Staat der Song-Dynastie in China im Jahr 1024 das weltweit erste offizielle Papiergeld herausgab.',
    artworkKey: 'banknote',
  },
  {
    id: 'doener-fladenbrot',
    name: 'Döner im Fladenbrot (Fast-Food-Form)',
    countryId: '276', // Deutschland
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 1972',
    clueDescription:
      'Vom senkrechten Drehspieß geschnittenes Fleisch, serviert in einer aufgeschnittenen warmen Brottasche mit Salat und Soße zum Mitnehmen.',
    resolutionFact:
      'Der vertikale Drehspieß stammt aus dem Osmanischen Reich (Türkei), doch die heute weltweite Streetfood-Variante „im Fladenbrot zum Mitnehmen“ wurde Anfang der 1970er Jahre von türkischen Einwanderern in West-Berlin (Deutschland) erfunden.',
    artworkKey: 'doner',
  },
  {
    id: 'muenzgeld',
    name: 'Geprägte Metallmünzen',
    countryId: '792', // Türkei
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 600 v. Chr.',
    clueDescription:
      'Genormte kleine Metallscheiben aus Gold-Silber-Legierung mit eingeprägtem Herrschersiegel als verlässliches Gewicht- und Wertversprechen.',
    resolutionFact:
      'Im antiken Königreich Lydien – im Westen der heutigen Türkei – wurden um 600 v. Chr. die ersten standardisierten Münzen aus Elektron (einer Gold-Silber-Mischung) geprägt.',
    artworkKey: 'coin',
  },
  {
    id: 'herztransplantation',
    name: 'Erste Herztransplantation (Mensch zu Mensch)',
    countryId: '710', // Südafrika
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1967',
    clueDescription:
      'Ein bahnbrechender chirurgischer Eingriff, bei dem erstmals ein geschädigtes menschliches Herz durch das gesunde Organ eines Spenders ersetzt wurde.',
    resolutionFact:
      'Am 3. Dezember 1967 führte der Chirurg Christiaan Barnard am Groote Schuur Hospital in Kapstadt (Südafrika) die weltweit erste erfolgreiche Herztransplantation von Mensch zu Mensch durch.',
    artworkKey: 'heart',
  },
  {
    id: 'rooibos',
    name: 'Rooibos-Aufguss (Rotbuschtee)',
    countryId: '710', // Südafrika
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'Jahrhundertealt / 1904 kommerziell',
    clueDescription:
      'Ein von Natur aus koffeinfreier, leicht süßlicher, rubinroter Aufguss aus den fermentierten nadelartigen Blättern eines einzigen Bergstrauchs.',
    resolutionFact:
      'Die Pflanze Aspalathus linearis wächst weltweit ausschließlich in den Zederbergen im Westkap (Südafrika), wo schon das Volk der Khoisan ihre Blätter erntete und aufbrühte.',
    artworkKey: 'tea',
  },
  {
    id: 'sms-konzept',
    name: 'SMS (Kurznachrichten im Mobilfunk)',
    countryId: '246', // Finnland
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1984 / 1992',
    clueDescription:
      'Ein Dienst zum Versenden kurzer Textnachrichten von bis zu 160 Zeichen über freie Signalkanäle des Mobilfunknetzes – oft bei einer Pizza erdacht.',
    resolutionFact:
      'Die Idee zu Textnachrichten über das GSM-Netz formulierte der finnische Ingenieur Matti Makkonen 1984 in Kopenhagen – auf Basis von GSM-Normung, an der später auch deutsche und französische Teams mitwirkten.',
    artworkKey: 'sms',
  },
  {
    id: 'algebra',
    name: 'Algebra (als eigenständige Disziplin)',
    countryId: '368', // Irak
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 820',
    clueDescription:
      'Ein Teilgebiet der Mathematik, das Gleichungen mit Unbekannten systematisch durch Umstellen und Ausgleichen („al-dschabr“) löst.',
    resolutionFact:
      'Im „Haus der Weisheit“ in Bagdad (heutiger Irak) verfasste der Gelehrte Al-Chwarizmi um 820 das Lehrbuch „Al-kitab al-muhtasar fi hisab al-gabr...“ – von seinem Namen stammt zudem das Wort Algorithmus.',
    artworkKey: 'math',
  },
  {
    id: 'alphabet-phonetisch',
    name: 'Phonetisches Alphabet',
    countryId: '422', // Libanon
    category: 'Spiel & Kultur',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 1050 v. Chr.',
    clueDescription:
      'Ein kompaktes Schriftsystem aus nur rund 22 abstrakten Zeichen, die nicht ganze Wörter, sondern einzelne Laute wiedergeben – die Wurzel unserer heutigen Buchstaben.',
    resolutionFact:
      'Seeleute und Händler der Phönizier aus Städten wie Byblos, Sidon und Tyros (heutiger Libanon) verbreiteten dieses Lautalphabet über den gesamten Mittelmeerraum bis nach Griechenland.',
    artworkKey: 'alphabet',
  },
  {
    id: 'tempura',
    name: 'Tempura (Ausbacktechnik)',
    countryId: '620', // Portugal
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '16. Jahrhundert',
    clueDescription:
      'Gemüse oder Meeresfrüchte in einem hauchdünnen, eiskalten Teigmantel, die kurz goldknusprig frittiert und oft zu Reis oder Nudeln gereicht werden.',
    resolutionFact:
      'Fast jeder hält Tempura für rein japanisch – tatsächlich brachten Missionare und Händler aus Portugal diese Frittiermethode für die Fastentage („Quatuor Tempora“) im 16. Jahrhundert nach Nagasaki.',
    artworkKey: 'tempura',
  },
  {
    id: 'leuchtturm',
    name: 'Monumentaler Leuchtturm',
    countryId: '818', // Ägypten
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 280 v. Chr.',
    clueDescription:
      'Ein hoher Küstenturm mit einer starken Lichtquelle und Spiegeln an der Spitze, der Schiffe nachts sicher vor Riffen und Untiefen in den Hafen lotst.',
    resolutionFact:
      'Der Pharos von Alexandria im heutigen Ägypten (eines der sieben Weltwunder der Antike) war über 100 Meter hoch und leitete Schiffe mit einem Spiegel- und Feuersystem kilometerweit übers Meer.',
    artworkKey: 'lighthouse',
  },
  {
    id: 'kaugummi-urform',
    name: 'Chicle-Kaugummi (Urform)',
    countryId: '484', // Mexiko
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'Antike / 1860er',
    clueDescription:
      'Eine elastische Kaumasse aus dem eingedickten Milchsaft des Breiapfelbaums, die schon vor Jahrhunderten für frischen Atem und gegen Durst gekaut wurde.',
    resolutionFact:
      'Azteken und Maya im heutigen Mexiko kauten den Naturlatex „Tzictli“ (Chicle). Erst als der exilierte Präsident Santa Anna diesen Rohstoff 1869 einem Erfinder in New York zeigte, entstand daraus der moderne Kaugummi.',
    artworkKey: 'gum',
  },
  {
    id: 'katapult-wecker',
    name: 'Mechanischer Wasser-Wecker',
    countryId: '300', // Griechenland
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 400 v. Chr.',
    clueDescription:
      'Eine frühe Zeitmess-Vorrichtung, die nach Ablauf einer definierten Zeitspanne durch Überdruck ein Pfeifsignal auslöste, um pünktlich zum Unterricht zu wecken.',
    resolutionFact:
      'Der Philosoph Platon soll in seiner Akademie in Athen (Griechenland) eine Wasseruhr konstruiert haben, die morgens Luft durch eine Pfeife presste, damit seine Schüler pünktlich aufstanden.',
    artworkKey: 'alarm',
  },
  {
    id: 'mikrowelle',
    name: 'Mikrowellenherd',
    countryId: '840', // Vereinigte Staaten
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1945',
    clueDescription:
      'Ein Küchengerät, das Speisen ohne heiße Herdplatte blitzschnell erwärmt, indem unsichtbare elektromagnetische Wellen Wassermoleküle in Schwingung versetzen.',
    resolutionFact:
      'Der Ingenieur Percy Spencer bemerkte 1945 bei Radartests in Massachusetts (USA), dass ein Schokoriegel in seiner Hosentasche geschmolzen war – und baute kurz darauf den ersten Mikrowellenofen.',
    artworkKey: 'microwave',
  },
  {
    id: 'gummireifen',
    name: 'Luftgefüllter Gummireifen',
    countryId: '826', // Großbritannien
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1888',
    clueDescription:
      'Ein ringförmiger Schlauchmantel aus Gummi rund um eine Felge, der Erschütterungen auf holprigen Straßen durch komprimierte Luft abfedert.',
    resolutionFact:
      'Der Tierarzt John Boyd Dunlop bastelte 1888 in Belfast (damals Vereinigtes Königreich / Großbritannien) aus einem Gartenschlauch die ersten Luftreifen für das Dreirad seines Sohnes, damit dieser auf Kopfsteinpflaster schneller fuhr.',
    artworkKey: 'tire',
  },
  {
    id: 'muellsack-plastik',
    name: 'Müllsack aus Polyethylen',
    countryId: '124', // Kanada
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1950',
    clueDescription:
      'Ein reißfester, wasserdichter Beutel aus dünner Kunststofffolie, der Abfälle hygienisch verschließt – ursprünglich sogar in auffälligem Grün produziert.',
    resolutionFact:
      'Harry Wasylyk und Larry Hansen entwickelten den grünen Polyethylen-Müllbeutel 1950 in Winnipeg (Kanada) zunächst für ein örtliches Krankenhaus, bevor er jeden Haushalt weltweit eroberte.',
    artworkKey: 'bag',
  },
  {
    id: 'metallbuchdruck',
    name: 'Ältester erhaltener Metall-Lettern-Druck',
    countryId: '410', // Südkorea
    category: 'Spiel & Kultur',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1377',
    clueDescription:
      'Ein über 70 Jahre vor Gutenberg gedrucktes religiöses Werk, das bereits mit einzeln gegossenen beweglichen Metalllettern hergestellt wurde.',
    resolutionFact:
      'Das buddhistische Werk „Jikji“ wurde 1377 im Tempel Heungdeoksa bei Cheongju (heutiges Südkorea) mit gegossenen beweglichen Metalllettern gedruckt und zählt heute zum UNESCO-Weltdokumentenerbe.',
    artworkKey: 'book',
  },
  {
    id: 'karaoke',
    name: 'Karaoke-Maschine',
    countryId: '392', // Japan
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1971',
    clueDescription:
      'Ein Abspielgerät mit Mikrofonen und Bildschirm, das bekannte Popsongs ohne Gesangsspur liefert, während der Text zum Mitsingen mitläuft.',
    resolutionFact:
      'Der Musiker Daisuke Inoue baute 1971 in Kōbe (Japan) die ersten münzbetriebenen „8 Juke“-Geräte für Bar-Gäste, nachdem ein Geschäftsmann Playback-Aufnahmen für eine Reise angefragt hatte. „Kara-oke“ bedeutet „leeres Orchester“.',
    artworkKey: 'mic',
  },
  {
    id: 'windmuehle',
    name: 'Windmühle (vertikale Achse)',
    countryId: '364', // Iran
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 7.–9. Jahrhundert',
    clueDescription:
      'Ein Bauwerk mit segelbespannten Flügeln, das die Kraft starker Winde nutzt, um direkt Mühlsteine zum Getreidemahlen oder Schöpfräder anzutreiben.',
    resolutionFact:
      'Lange vor den bekannten europäischen Turmwindmühlen nutzten Baumeister in der Region Sistan (heutiger Iran) ab dem 7. Jahrhundert vertikale Windmühlen mit Schilfmatten-Segeln zum Mahlen von Korn und Pumpen von Wasser.',
    artworkKey: 'windmill',
  },
  {
    id: 'weihnachtsbaum-kugel',
    name: 'Gläserne Christbaumkugel',
    countryId: '276', // Deutschland
    category: 'Spiel & Kultur',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1847',
    clueDescription:
      'Eine hauchdünne, innen versilberte und bunt lackierte Hohlkugel aus Glas, die an einem kleinen Metallhütchen an Tannenzweigen aufgehängt wird.',
    resolutionFact:
      'Im thüringischen Glasbläserort Lauscha (Deutschland) entstand ab 1847 der gläserne Christbaumschmuck – angeblich als ein armer Glasbläser sich weder echte Äpfel noch Nüsse leisten konnte.',
    artworkKey: 'ornament',
  },
  {
    id: 'skateboard',
    name: 'Skateboard',
    countryId: '840', // Vereinigte Staaten
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 1950er',
    clueDescription:
      'Ein leicht nach oben gebogenes Holzbrett auf zwei Metallachsen und vier kleinen Rollen, das ursprünglich „Asphaltsurfen“ an flauen Wellentagen ermöglichte.',
    resolutionFact:
      'Kalifornische Surfer schraubten in den späten 1950er Jahren (USA) Rollschuhachsen unter schmale Holzbretter, um auch dann auf Wellenbewegungen zu trainieren, wenn das Meer spiegelglatt war.',
    artworkKey: 'skateboard',
  },
  {
    id: 'lutscher',
    name: 'Stiel-Lutscher (Chupa Chups)',
    countryId: '724', // Spanien
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1958',
    clueDescription:
      'Eine runde, harte Zuckerkugel auf einem schmalen weißen Stäbchen – entworfen, damit Kinder keine klebrigen Finger bekommen; das berühmte Logo zeichnete sogar ein berühmter Surrealist.',
    resolutionFact:
      'Enric Bernat erfand 1958 in Barcelona (Spanien) das Erfolgsmodell des modernen Stiel-Lutschers – und engagierte 1969 keinen Geringeren als Salvador Dalí für das blumenförmige Logo.',
    artworkKey: 'lollipop',
  },
  {
    id: 'kettensaege-vorlaeufer',
    name: 'Erste handkurbelbetriebene Kettensäge (Osteotom)',
    countryId: '276', // Deutschland
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1830',
    clueDescription:
      'Ein schmales Schneidinstrument mit einer umlaufenden Gliederkette aus kleinen Sägezähnen – heute in Forstwirtschaft und Gartenbau im Einsatz, ursprünglich jedoch für etwas völlig anderes erfunden.',
    resolutionFact:
      'Kaum zu glauben, aber wahr: Der Orthopäde Bernhard Heine entwickelte 1830 in Würzburg (Deutschland) das „Osteotom“ mit Handkurbel-Kette – als medizinisches Instrument zum präzisen Durchtrennen von Knochen!',
    artworkKey: 'saw',
  },

  // --- SEHR SCHWER · 2× PUNKTE (Max 1 pro Tag, 200 Pkt) ---
  {
    id: 'fuellfederhalter',
    name: 'Füllfederhalter mit Tintenreservoir',
    countryId: '642', // Rumänien
    category: 'Alltag & Haushalt',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1827',
    clueDescription:
      'Ein Stift mit Metallfeder und eingebautem Vorratstank im Schaft, sodass man seitenlang schreiben kann, ohne ständig ins Tintenfass zu tauchen.',
    resolutionFact:
      'Der Erfinder Petrache Poenaru aus Craiova (heutiges Rumänien) erhielt 1827 in Paris das Patent für seinen „Schwanenfeder-Füller ohne Ende“ – das erste echte Tintenreservoir-Schreibgerät.',
    artworkKey: 'fountainpen',
  },
  {
    id: 'fingerabdruck-kriminalistik',
    name: 'Fingerabdruck-System in der Kriminalistik',
    countryId: '032', // Argentinien
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1891–1892',
    clueDescription:
      'Ein forensisches Klassifikationssystem, bei dem die einzigartigen Wirbel und Bögen an menschlichen Fingerkuppen zur Aufklärung von Verbrechen archiviert werden.',
    resolutionFact:
      'Juan Vucetich entwickelte 1891 bei der Polizei in La Plata (Argentinien) das erste praxistaugliche Fingerabdruck-Register („Daktyloskopie“) und löste 1892 damit den weltweit ersten Kriminalfall per Fingerabdruck.',
    artworkKey: 'fingerprint',
  },
  {
    id: 'farbfernsehen-rad',
    name: 'Erstes patentiertes Farbfernseh-System',
    countryId: '484', // Mexiko
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1940',
    clueDescription:
      'Ein elektromechanisches Übertragungsverfahren mit einem schnell rotierenden Dreifarben-Filterrad vor Kamera und Bildröhre, das bewegte Bilder farbig darstellte.',
    resolutionFact:
      'Bereits im Alter von 23 Jahren erfand der Elektroingenieur Guillermo González Camarena 1940 in Mexiko-Stadt (Mexiko) das „chromoskopische Adapter-System“, mit dem er das weltweit erste Farbfernseh-Patent erhielt.',
    artworkKey: 'tv',
  },
  {
    id: 'schiffsschraube',
    name: 'Brauchbare Schiffsschraube (Propeller)',
    countryId: '040', // Österreich
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1827',
    clueDescription:
      'Ein unter Wasser am Heck rotierender Flügelantrieb, der Schiffe viel effizienter und wetterunabhängiger vorantreibt als seitliche Schaufelräder.',
    resolutionFact:
      'Der österreichische Forstmeister und Erfinder Josef Ressel meldete 1827 in Wien (Österreich) das Patent auf eine archimedische Schraube am Schiffsheck an und testete 1829 erfolgreich das Dampfschiff „Civetta“.',
    artworkKey: 'propeller',
  },
  {
    id: 'herzschrittmacher-implantierbar',
    name: 'Implantierbarer Herzschrittmacher',
    countryId: '752', // Schweden
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1958',
    clueDescription:
      'Ein winziges, batteriebetriebenes Elektronikgerät, das unter die Haut eingesetzt wird und durch sanfte elektrische Impulse einen regelmäßigen Herzschlag hält.',
    resolutionFact:
      'Der Ingenieur Rune Elmqvist baute 1958 in Stockholm (Schweden) – anfangs in eine einfache Schuhcreme-Dose gegossen – den ersten vollständig implantierbaren Schrittmacher; Patient Arne Larsson lebte damit noch über 40 Jahre.',
    artworkKey: 'pacemaker',
  },
  {
    id: 'wifi-grundpatent',
    name: 'WLAN-Mehrwege-Signalverfahren (Wi-Fi-Kernpatent)',
    countryId: '036', // Australien
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1992–1996',
    clueDescription:
      'Ein mathematisches Funkverfahren, das reflektierte Funkwellen in Innenräumen sauber bündelt und damit erst schnelle drahtlose Computernetzwerke ermöglichte.',
    resolutionFact:
      'Entstanden aus der Radioastronomie: Dr. John O’Sullivan und sein Team der Forschungsbehörde CSIRO in Sydney (Australien) suchten eigentlich nach explodierenden Schwarzen Löchern und schufen dabei das Schlüsselpatent hinter modernem Wi-Fi.',
    artworkKey: 'wifi',
  },
  {
    id: 'holografie',
    name: 'Holografie',
    countryId: '348', // Ungarn
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1947',
    clueDescription:
      'Ein Verfahren zur Aufzeichnung von Lichtwellen-Interferenzen, sodass dreidimensionale Bilder auf Geldscheinen, Ausweisen oder Kunstwerken frei im Raum zu schweben scheinen.',
    resolutionFact:
      'Der aus Budapest stammende Physiker Dennis Gabor (Dénes Gábor) entwickelte die theoretischen Grundlagen der Holografie 1947 beim Versuch, Elektronenmikroskope schärfer zu machen – wofür er 1971 den Nobelpreis erhielt.',
    artworkKey: 'hologram',
  },
  {
    id: 'u-boot-erstes',
    name: 'Erstes steuerbares Unterseeboot',
    countryId: '528', // Niederlande
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1620',
    clueDescription:
      'Ein wasserdichtes, mit geöltem Leder bespanntes Holzboot, das vollständig abtauchen, stundenlang unter der Wasseroberfläche rudern und wieder auftauchen konnte.',
    resolutionFact:
      'Der niederländische Erfinder Cornelis Drebbel aus Alkmaar (Niederlande) konstruierte 1620 das erste nachweislich funktionierende Tauchboot und führte es unter der Themse sogar König Jakob I. vor.',
    artworkKey: 'submarine',
  },
  {
    id: 'antibabypille-synthese',
    name: 'Synthetisches Hormon der Anti-Baby-Pille',
    countryId: '484', // Mexiko
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1951',
    clueDescription:
      'Ein aus einer wilden Yamswurzel gewonnener synthetischer Wirkstoff (Norethisteron), der eines der gesellschaftlich einflussreichsten Medikamente des 20. Jahrhunderts ermöglichte.',
    resolutionFact:
      'Der junge Chemiker Luis E. Miramontes synthetisierte 1951 in Mexiko-Stadt (Mexiko) im Labor Syntex erstmals Norethisteron – den entscheidenden Wirkstoff der ersten oralen Verhütungspille.',
    artworkKey: 'blisterpack',
  },
  {
    id: 'katheter-urologie',
    name: 'Stahlhochofen für Kohlenstoffstahl (Frühform in Afrika)',
    countryId: '834', // Tansania
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'vor ca. 2000 Jahren',
    clueDescription:
      'Vorgewärmte Lehm-Schmelzöfen mit Gebläserohren, die Temperaturen über 1.800 °C erreichten und lange vor Europa hochwertigen Kohlenstoffstahl schmolzen.',
    resolutionFact:
      'Archäologen entdeckten am Westufer des Victoriasees im heutigen Tansania, dass die Vorfahren des Haya-Volkes bereits vor rund 2.000 Jahren durch vorerhitzte Luftströme echten Kohlenstoffstahl herstellten.',
    artworkKey: 'furnace',
  },
  {
    id: 'katalysator-einfrieren',
    name: 'Gefriertrocknung von Lebensmitteln (Chuño)',
    countryId: '604', // Peru
    category: 'Kulinarik & Genuss',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'Vor über 1.000 Jahren',
    clueDescription:
      'Ein Konservierungsverfahren, bei dem Knollen über Nacht im Höhenfrost gefroren, am Tag in der Sonne getrocknet und so jahrzehntelang haltbar gemacht werden.',
    resolutionFact:
      'Die Inka und frühere Andenkulturen in Peru perfektionierten dieses natürliche Gefriertrocknungsverfahren („Chuño“), um ganze Armeen und Bergdörfer über Jahre mit Vorräten zu versorgen.',
    artworkKey: 'freeze',
  },
  {
    id: 'margarine',
    name: 'Margarine',
    countryId: '250', // Frankreich
    category: 'Kulinarik & Genuss',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1869',
    clueDescription:
      'Ein streichfähiges Speisefett, das als haltbare, günstigere Alternative zu Butter für Seeleute und Soldaten ausgeschrieben und entwickelt wurde.',
    resolutionFact:
      'Kaiser Napoleon III. lobte 1869 einen Preis aus, woraufhin der Chemiker Hippolyte Mège-Mouriès in Frankreich die perlmuttschimmernde Emulsion „Oleomargarine“ (nach dem griechischen Wort für Perle) erfand.',
    artworkKey: 'butter',
  },
  {
    id: 'ct-scanner-mathematik',
    name: 'Mathematisches Prinzip der Computertomografie (CT)',
    countryId: '710', // Südafrika
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1957–1963',
    clueDescription:
      'Ein mathematisches Berechnungsverfahren, das aus vielen dünnen Röntgenaufnahmen rund um den Körper ein detailgenaues dreidimensionales Schnittbild errechnet.',
    resolutionFact:
      'Der Physiker Allan MacLeod Cormack berechnete die mathematischen Grundlagen des CT-Scanners Ende der 1950er Jahre am Groote Schuur Hospital in Kapstadt (Südafrika) und erhielt dafür 1979 den Medizin-Nobelpreis.',
    artworkKey: 'scanner',
  },
  {
    id: 'erste-universitaet',
    name: 'Älteste durchgehend bestehende Universität',
    countryId: '504', // Marokko
    category: 'Spiel & Kultur',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '859',
    clueDescription:
      'Eine von einer vermögenden Frau gestiftete höhere Bildungseinrichtung mit eigener Bibliothek und festen Abschlüssen, die seit fast 1.200 Jahren ununterbrochen lehrt.',
    resolutionFact:
      'Fatima al-Fihri gründete im Jahr 859 die Universität al-Qarawiyyin in Fès (Marokko). Sie gilt laut UNESCO und Guinness-Buch als die älteste bis heute durchgehend betriebene Hochschule der Welt.',
    artworkKey: 'university',
  },
  {
    id: 'katalysator-eishaus',
    name: 'Natürliche Klimaanlage & Eisspeicher (Windturm / Yakhchal)',
    countryId: '364', // Iran
    category: 'Alltag & Haushalt',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'ca. 400 v. Chr.',
    clueDescription:
      'Kuppelförmige Lehmbauten mit hohen Luftfängern auf dem Dach, die selbst bei über 40 °C Wüstenhitze Wasser zu Eis gefrieren ließen und Gebäude passiv kühlten.',
    resolutionFact:
      'Persische Baumeister im heutigen Iran entwickelten bereits um 400 v. Chr. sogenannte „Badgir“-Windtürme und „Yakhchal“-Eishäuser, die Verdunstungskälte und Nachtauskühlung genial nutzten.',
    artworkKey: 'windtower',
  },
  {
    id: 'stacheldraht-oder-kettensaege-nein-fallschirm',
    name: 'Erster dokumentierter Fallschirm-Entwurf (Homo Volans)',
    countryId: '191', // Kroatien
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1595 / 1617',
    clueDescription:
      'Ein rechteckiges, mit Leinen bespanntes Holzgestell über dem Kopf, mit dem ein Mensch sicher von einem hohen Turm herabgleiten konnte.',
    resolutionFact:
      'Noch vor späteren Stoffschirmen veröffentlichte der Universalgelehrte Faust Vrančić aus Šibenik (Kroatien) 1595 die Zeichnung des „Homo Volans“ und soll 1617 als über 60-Jähriger selbst einen Sprung gewagt haben.',
    artworkKey: 'parachute',
  },
  {
    id: 'alufolie',
    name: 'Aluminiumfolie',
    countryId: '756', // Schweiz
    category: 'Alltag & Haushalt',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1910',
    clueDescription:
      'Eine hauchdünn gewalzte, silbrig glänzende Metallrolle zum Frischhalten und Einwickeln von Speisen – zuvor nutzte man deutlich teureres und schwereres Zinn.',
    resolutionFact:
      'Robert Victor Neher erfand 1910 in Emmishofen (Schweiz) das endlose Walzverfahren für dünne Aluminiumbänder, mit dem bald Schokolade (wie Toblerone) und Haushaltswaren verpackt wurden.',
    artworkKey: 'foil',
  },
  {
    id: 'mp3-format',
    name: 'MP3-Audioformat',
    countryId: '276', // Deutschland
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1987–1995',
    clueDescription:
      'Ein digitales Kompressionsverfahren für Musik, das für das menschliche Ohr unhörbare Frequenzen herausfiltert und Audiodateien auf ein Zehntel verkleinert.',
    resolutionFact:
      'Ein Team um Karlheinz Brandenburg am Fraunhofer-Institut in Erlangen (Deutschland) entwickelte das psychoakustische Verfahren und wählte 1995 die Dateiendung „.mp3“.',
    artworkKey: 'audio',
  },
  {
    id: 'tetrapak',
    name: 'Tetraeder- und Verbundkarton (Tetra Pak)',
    countryId: '752', // Schweden
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1951',
    clueDescription:
      'Ein beschichteter Getränkekarton aus Pappe, Kunststoff und hauchdünnem Metall, der Milch und Saft auch ohne Kühlung monatelang haltbar macht.',
    resolutionFact:
      'Ruben Rausing und Erik Wallenberg gründeten das Unternehmen 1951 in Lund (Schweden) mit der Idee einer endlosen Kartonröhre, die befüllt und versiegelt wird, sodass kein Sauerstoff eindringt.',
    artworkKey: 'carton',
  },
  {
    id: 'ondol-fussbodenheizung',
    name: 'Unterflur-Fußbodenheizung (Ondol)',
    countryId: '410', // Südkorea
    category: 'Alltag & Haushalt',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'Vor über 2.000 Jahren',
    clueDescription:
      'Ein raffiniertes Heizsystem, bei dem die Abwärme des Küchenherds durch gemauerte Kanäle direkt unter dicken Steinplatten des Wohnzimmerbodens geleitet wird.',
    resolutionFact:
      'Das „Ondol“-System (wörtlich „warmer Stein“) prägt seit über zwei Jahrtausenden die Architektur in Korea (heutiges Südkorea) – und inspirierte später auch Frank Lloyd Wright zur modernen Fußbodenheizung.',
    artworkKey: 'heating',
  },
  {
    id: 'seismograf',
    name: 'Erster Seismograf (Erdbebenmelder)',
    countryId: '156', // China
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '132 n. Chr.',
    clueDescription:
      'Ein kunstvoll gegossenes Bronzegefäß mit acht Drachenköpfen und Fröschen rundum, das durch eine fallende Kugel genau die Himmelsrichtung eines fernen Erdbebens anzeigte.',
    resolutionFact:
      'Der Hofastronom Zhang Heng konstruierte diesen verblüffend präzisen Erdbebendetektor im Jahr 132 n. Chr. während der Han-Dynastie in China – selbst Beben in 600 km Entfernung lösten exakt die richtige Richtung aus.',
    artworkKey: 'seismograph',
  },
  {
    id: 'kajal-augenschminke',
    name: 'Schwarzer Kajal-Lidstrich',
    countryId: '818', // Ägypten
    category: 'Kleidung & Design',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 3100 v. Chr.',
    clueDescription:
      'Eine dunkle Mineralpaste zum Umranden der Augenlider, die nicht nur dekorativ war, sondern vor grellem Sonnenlicht und Augeninfektionen schützte.',
    resolutionFact:
      'Schon in der vordynastischen Zeit im alten Ägypten stellten Frauen und Männer aus Bleiglanz und Ruß „Kohl“ her – die bleihaltigen Spuren wirkten sogar antibakteriell gegen Infektionen am Nil.',
    artworkKey: 'eyeliner',
  },
  {
    id: 'staubsauger-elektrisch',
    name: 'Motorisierter Staubsauger',
    countryId: '826', // Großbritannien
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1901',
    clueDescription:
      'Ein Gerät mit Unterdruckpumpe und Filterbeutel, das Staub und Krümel ansaugt statt sie nur aufzuwirbeln – das allererste Modell war allerdings so groß wie eine Pferdekutsche.',
    resolutionFact:
      'Hubert Cecil Booth erstickte fast bei der Vorführung eines Blasegeräts und hatte die Idee, Luft durch ein Tuch anzusaugen. Sein 1901 in London (Großbritannien) patentierter „Puffing Billy“ parkte vor Häusern und schob lange Schläuche durch die Fenster.',
    artworkKey: 'vacuum',
  },
  {
    id: 'bossa-chuveiro',
    name: 'Elektrischer Durchlauferhitzer-Duschkopf',
    countryId: '076', // Brasilien
    category: 'Alltag & Haushalt',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'ca. 1930er / 1940er',
    clueDescription:
      'Ein kompakter Kunststoff-Duschkopf mit direkter Heizspirale im Inneren, der kaltes Leitungswasser erst beim Durchfließen augenblicklich erwärmt.',
    resolutionFact:
      'Francisco Canhos entwickelte den „Chuveiro elétrico“ in den 1930er Jahren in Jaú (Brasilien), weil es kaum zentrale Warmwasserleitungen gab – heute hängt er in fast jedem brasilianischen Badezimmer.',
    artworkKey: 'shower',
  },
  {
    id: 'djembe',
    name: 'Djembé (Kelchtrommel)',
    countryId: '466', // Mali
    category: 'Spiel & Kultur',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'ca. 13. Jahrhundert',
    clueDescription:
      'Eine aus einem einzigen Hartholz-Stamm geschnitzte, mit Ziegenfell bespannte Trommel in Kelchform, die mit bloßen Händen geschlagen wird.',
    resolutionFact:
      'Die traditionelle Djembé entstand zur Zeit des Mali-Reiches (heutiges Mali / Guinea) in der Schmiede-Kaste der Numu und übertrug über weite Strecken komplexe rhythmische Botschaften.',
    artworkKey: 'drum',
  },
  {
    id: 'fahrrad-draisine',
    name: 'Zweirädriges Laufrad (Urform des Fahrrads)',
    countryId: '276', // Deutschland
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1817',
    clueDescription:
      'Ein einspuriges Fahrzeug aus Holz mit zwei hintereinander laufenden Rädern und lenkbarem Vorderrad, bei dem man anfangs noch mit den Füßen abstieß.',
    resolutionFact:
      'Nach dem „Jahr ohne Sommer“ 1816 und großem Pferdesterben erfand Karl Freiherr von Drais 1817 in Mannheim (Deutschland) die „Laufmaschine“ (Draisine) – das direkte Urmodell jedes Fahrrads.',
    artworkKey: 'bike',
  },
  {
    id: 'glasblaeserei',
    name: 'Freie Glasbläserei mit der Glasmacherpfeife',
    countryId: '422', // Libanon
    category: 'Alltag & Haushalt',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'ca. 50 v. Chr.',
    clueDescription:
      'Eine Technik, bei der zähflüssiges glühendes Silikat am Ende eines langen Metallrohrs mit Atemluft zu dünnwandigen Flaschen, Kelchen und Gefäßen geformt wird.',
    resolutionFact:
      'Bevor Glas geblasen wurde, musste man es aufwendig gießen oder schleifen. Phönizische Handwerker an der Küste von Sidon (heutiger Libanon) erfanden um 50 v. Chr. die Glasmacherpfeife und machten Glas zum Alltagsprodukt.',
    artworkKey: 'glass',
  },
  {
    id: 'mankala',
    name: 'Mankala (Steinchen-Brettspiel)',
    countryId: '231', // Äthiopien
    category: 'Spiel & Kultur',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'ca. 6.–7. Jahrhundert (Funde)',
    clueDescription:
      'Eines der ältesten taktischen Zähl- und Saatspiele der Menschheit, bei dem Bohnen oder Steine reihum aus geschnitzten Holzmulden verteilt und erbeutet werden.',
    resolutionFact:
      'Früheste archäologische Spielbretter von „Gebeta“ (einer der ältesten Mankala-Formen) wurden bei Yeha und Matara im heutigen Äthiopien und Eritrea aus dem 6./7. Jahrhundert entdeckt.',
    artworkKey: 'mancala',
  },
  {
    id: 'sandwich',
    name: 'Belegtes Klappbrot (Sandwich)',
    countryId: '826', // Großbritannien
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1762',
    clueDescription:
      'Kalte oder warme Zutaten, praktisch zwischen zwei Scheiben Brot geklemmt, damit man sie mit einer Hand essen kann, ohne das Spiel zu unterbrechen.',
    resolutionFact:
      'John Montagu, der 4. Earl of Sandwich, soll 1762 in London (Großbritannien) am Kartentisch nach kaltem Rindfleisch zwischen zwei Toastscheiben verlangt haben, um beim Spielen keine fettigen Finger zu bekommen.',
    artworkKey: 'sandwich',
  },
  {
    id: 'korsett-oder-bikini',
    name: 'Zweiteiliger Badeanzug (Bikini)',
    countryId: '250', // Frankreich
    category: 'Kleidung & Design',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1946',
    clueDescription:
      'Eine knappe zweiteilige Badebekleidung für Frauen, deren Vorstellung 1946 einen handfesten Skandal auslöste und nach einem Pazifik-Atoll benannt wurde.',
    resolutionFact:
      'Der Pariser Automobilingenieur Louis Réard präsentierte das winzige Stoffstück am 5. Juli 1946 in einem Pariser Schwimmbad (Frankreich) – weil kein bekanntes Model es tragen wollte, engagierte er eine Striptease-Tänzerin.',
    artworkKey: 'swimwear',
  },
  {
    id: 'eishockey',
    name: 'Modernes Hallen-Eishockey',
    countryId: '124', // Kanada
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1875',
    clueDescription:
      'Ein rasanter Mannschaftssport auf Schlittschuhen, bei dem zwei Teams mit gebogenen Schlägern eine kleine schwarze Hartgummischeibe ins Tor befördern.',
    resolutionFact:
      'Am 3. März 1875 fand auf dem Victoria Skating Rink in Montreal (Kanada) das erste organisierte Hallen-Eishockeyspiel mit festen Regeln und einem flachen Holz-Puck statt.',
    artworkKey: 'hockey',
  },
  {
    id: 'ketchup-ursprung',
    name: 'Fisch- und Würzsauce (Ketchup-Vorläufer)',
    countryId: '156', // China
    category: 'Kulinarik & Genuss',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'ca. 17. Jahrhundert',
    clueDescription:
      'Eine heute meist süß-saure rote Würzsauce für Burger und Pommes – ihr Name und ihre Grundidee waren jedoch ursprünglich eine fermentierte Fischpaste ganz ohne Tomaten.',
    resolutionFact:
      'Im Süden von China (Fujian) hieß eine würzige fermentierte Fischsauce im Hokkien-Dialekt „Kôe-tsiap“. Britische Seeleute nahmen das Rezept im 17. Jahrhundert mit und ersetzten Fisch später durch Pilze und schließlich Tomaten.',
    artworkKey: 'sauce',
  },
  {
    id: 'porzellan',
    name: 'Hartporzellan („Weißes Gold“)',
    countryId: '156', // China
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'Tang-Dynastie (ca. 7. Jh.)',
    clueDescription:
      'Ein bei extrem hohen Temperaturen gebranntes, strahlend weißes und leicht durchscheinendes Keramikgeschirr aus Kaolin-Tonerde.',
    resolutionFact:
      'In China perfektionierten Keramiker bereits vor über 1.300 Jahren die Herstellung von echtem Hartporzellan – in Europa gelang die Nachentwicklung erst im Jahr 1708 in Meißen.',
    artworkKey: 'porcelain',
  },
  {
    id: 'sonnenbrille-quarz',
    name: 'Getönte Brille gegen Blendung',
    countryId: '156', // China
    category: 'Alltag & Haushalt',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '12. Jahrhundert',
    clueDescription:
      'Flache, rauchdunkel geschliffene Scheiben vor den Augen – allerdings nicht ursprünglich für den Strand, sondern für Richter, damit Angeklagte ihren Blick nicht deuten konnten.',
    resolutionFact:
      'Bereits im 12. Jahrhundert trugen Richter in China Brillen mit flachen Scheiben aus rauchig getöntem Rauchquarz, um bei Verhören ihre Emotionen und Augenbewegungen vollständig zu verbergen.',
    artworkKey: 'sunglasses',
  },
  {
    id: 'bungee-jumping-vorbild',
    name: 'Bungee-Springen (kommerzieller Start)',
    countryId: '554', // Neuseeland
    category: 'Spiel & Kultur',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1988',
    clueDescription:
      'Ein Adrenalinsport, bei dem man an einem elastischen Gummiseil an den Fußknöcheln gesichert kopfüber von einer hohen Brücke oder Plattform springt.',
    resolutionFact:
      'Inspiriert von einem traditionellen Ritual auf Vanuatu machte der Unternehmer A. J. Hackett 1988 an der Kawarau Bridge bei Queenstown (Neuseeland) das Bungee-Springen als modernen Extremsport weltweit berühmt.',
    artworkKey: 'bridge',
  },
  {
    id: 'reissverschluss',
    name: 'Moderner Zahn-Reißverschluss',
    countryId: '840', // Vereinigte Staaten
    category: 'Kleidung & Design',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1913',
    clueDescription:
      'Zwei Stoffbänder mit winzigen, ineinandergreifenden Metall- oder Kunststoffzähnchen, die ein beweglicher Schieber blitzschnell verzahnt oder trennt.',
    resolutionFact:
      'Der schwedischstämmige Ingenieur Gideon Sundback entwickelte 1913 in Hoboken, New Jersey (USA) den ersten zuverlässigen „Hookless Fastener“ – den Vorläufer aller modernen Reißverschlüsse.',
    artworkKey: 'zipper',
  },
  {
    id: 'post-it',
    name: 'Haftnotiz (Post-it)',
    countryId: '840', // Vereinigte Staaten
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1968 / 1974',
    clueDescription:
      'Kleine, meist gelbe Papierzettel mit einem schmalen Streifen leicht lösbaren Klebstoffs auf der Rückseite – entstanden aus einem scheinbar gescheiterten Superkleber.',
    resolutionFact:
      'Spencer Silver erfand 1968 bei 3M in Minnesota (USA) versehentlich einen extrem schwachen Kleber; sein Kollege Art Fry nutzte ihn 1974 für Lesezeichen im Gesangbuch, die nicht herausrutschten.',
    artworkKey: 'sticky',
  },
  {
    id: 'ampel-elektrisch',
    name: 'Elektrische Verkehrsampel (Rot/Grün)',
    countryId: '840', // Vereinigte Staaten
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1914',
    clueDescription:
      'Eine elektrische Lichtsignalanlage an Straßenkreuzungen, die Autos und Fußgänger mit roten und grünen Leuchtsignalen sicher aneinander vorbeilotst.',
    resolutionFact:
      'Nach einer frühen Gas-Ampel in London installierte James Hoge am 5. August 1914 in Cleveland, Ohio (USA) die weltweit erste funktionierende elektrische Verkehrsampel mit „STOP“ und „MOVE“.',
    artworkKey: 'trafficlight',
  },
  {
    id: 'yoghurt-fermentation',
    name: 'Joghurt (fermentierte Sauermilch)',
    countryId: '100', // Bulgarien
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'Antike / 1905 Bakterium',
    clueDescription:
      'Ein cremig-säuerliches Milchprodukt, das durch bestimmte Milchsäurebakterien eingedickt wird und für lange Haltbarkeit sowie Gesundheit geschätzt wird.',
    resolutionFact:
      'Das entscheidende Bakterium *Lactobacillus delbrueckii subsp. bulgaricus* wurde 1905 vom Arzt Stamen Grigorow in Bulgarien entdeckt – die Tradition stammt bereits von den alten Thrakern auf dem Balkan.',
    artworkKey: 'yogurt',
  },
  {
    id: 'seide',
    name: 'Seidenweberei',
    countryId: '156', // China
    category: 'Kleidung & Design',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 3000 v. Chr.',
    clueDescription:
      'Ein schimmernder, federleichter und dennoch reißfester Naturstoff, der aus den abgerollten Kokonfäden einer unscheinbaren Raupe gewonnen wird.',
    resolutionFact:
      'Über Jahrtausende hütete China das Geheimnis der Seidenraupenzucht unter Androhung der Todesstrafe – der kostbare Stoff gab sogar der berühmten Handelsroute nach Europa, der Seidenstraße, ihren Namen.',
    artworkKey: 'silk',
  },
  {
    id: 'marmelade-quitte',
    name: 'Fruchtkonfitüre / Marmelade (Marmelada)',
    countryId: '620', // Portugal
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '15.–16. Jahrhundert',
    clueDescription:
      'Ein eingekochter süßer Fruchtaufstrich, dessen Name sich direkt vom antiken Wort für eine goldgelbe, aromatische Kernobstfrucht (Quitte) ableitet.',
    resolutionFact:
      'In Portugal kochte man Quitten („marmelo“) mit Zucker zu einer schnittfesten „Marmelada“, um Vitamine für lange Seefahrten zu konservieren – die Engländer übernahmen das Wort später für Zitruskonfitüre.',
    artworkKey: 'jam',
  },
  {
    id: 'korken-flasche',
    name: 'Flaschenkorken-Verschluss (Wiederentdeckung)',
    countryId: '250', // Frankreich
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 1680',
    clueDescription:
      'Ein elastischer Naturzylinder aus Baumrinde, der Flaschenhälse absolut gasdicht verschließt und erst schäumende Weine in Glasflaschen sicher machte.',
    resolutionFact:
      'Zwar kannte man Rindenstopfen schon in der Antike für Amphoren, doch erst Mönche in der Champagne (Frankreich) – legendär Dom Pérignon – nutzten um 1680 konische Korken mit Drahtkorb für Glasflaschen.',
    artworkKey: 'cork',
  },
  {
    id: 'origami-japan',
    name: 'Klassisches Papierfalten (Origami)',
    countryId: '392', // Japan
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ab 17. Jahrhundert (populär)',
    clueDescription:
      'Die Kunst, aus einem einzigen quadratischen Blatt Papier ganz ohne Schere oder Klebstoff filigrane Kraniche, Blüten oder geometrische Körper zu falten.',
    resolutionFact:
      'Auch wenn Papier aus China kam, entwickelte sich in Japan ab der Edo-Zeit das kunstvolle „Origami“ (ori = falten, kami = Papier) mit dem Kranich („Orizuru“) als bekanntestem Symbol.',
    artworkKey: 'origami',
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    countryId: '380', // Italien
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 1960er–1970er',
    clueDescription:
      'Ein geschichtetes Löffeldessert aus kaffeegetränktem Löffelbiskuit, samtiger Mascarpone-Creme und einer feinen Schicht Kakaopulver obenauf.',
    resolutionFact:
      'Das berühmte „Zieh mich hoch“-Dessert entstand überraschend spät erst Ende der 1960er Jahre im Restaurant Le Beccherie in Treviso im Nordosten von Italien.',
    artworkKey: 'dessert',
  },
  {
    id: 'bluetooth',
    name: 'Bluetooth-Funkstandard',
    countryId: '752', // Schweden
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1994',
    clueDescription:
      'Eine stromsparende Kurzstrecken-Funktechnik für Kopfhörer, Tastaturen und Autos, deren Symbol aus zwei nordischen Runen zusammengesetzt ist.',
    resolutionFact:
      'Entwickelt beim Telekommunikationskonzern Ericsson in Lund (Schweden) durch ein Team um den Niederländer Jaap Haartsen – benannt nach dem Wikingerkönig Harald Blauzahn, der Stämme vereinte.',
    artworkKey: 'bluetooth',
  },
  {
    id: 'linux',
    name: 'Linux-Betriebssystemkern',
    countryId: '246', // Finnland
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1991',
    clueDescription:
      'Ein freier, quelloffener Software-Kern, auf dem heute fast alle Supercomputer, Webserver und Milliarden Smartphones basieren – sein Maskottchen ist ein Pinguin.',
    resolutionFact:
      'Der 21-jährige Informatikstudent Linus Torvalds schrieb die erste Version 1991 in seinem Zimmer in Helsinki (Finnland) und veröffentlichte sie mit dem Satz „Just a hobby, won’t be big and professional“.',
    artworkKey: 'penguin',
  },
  {
    id: 'teebeutel',
    name: 'Papier-Teebeutel',
    countryId: '840', // Vereinigte Staaten
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1904–1908',
    clueDescription:
      'Ein winziges, poröses Säckchen aus Filterpapier an einem dünnen Faden, das lose Teeblätter beim Aufbrühen sauber in der Tasse zusammenhält.',
    resolutionFact:
      'Der New Yorker Teehändler Thomas Sullivan verschickte 1908 Teeproben in kleinen Seidenbeutelchen – seine Kunden verstanden das falsch, warfen den ganzen Beutel ins heiße Wasser und verlangten mehr davon (USA).',
    artworkKey: 'teabag',
  },
  {
    id: 'mayonnaise',
    name: 'Mayonnaise (Mutmaßliche Herkunft Mahón)',
    countryId: '724', // Spanien
    category: 'Kulinarik & Genuss',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1756',
    clueDescription:
      'Eine dickcremige, kalte Emulsion aus Eigelb, Pflanzenöl und etwas Zitrone oder Essig – sie trägt den Namen einer spanischen Hafenstadt.',
    resolutionFact:
      'Der Überlieferung nach eroberten Franzosen 1756 die Hafenstadt Mahón auf Menorca (Spanien), wo der Koch des Herzogs von Richelieu aus Mangel an Sahne Olivenöl mit Eigelb zu einer „Salsa Mahonesa“ aufschlug.',
    artworkKey: 'mayonnaise',
  },
  {
    id: 'teleskop-mikroskop-ja-oder-karneval',
    name: 'Mikroskop (mehrlinsiges Verbundmikroskop)',
    countryId: '528', // Niederlande
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 1595–1609',
    clueDescription:
      'Ein optisches Instrument, das winzigste Zellen, Insektenaugen oder Mikroorganismen um ein Vielfaches vergrößert sichtbar macht.',
    resolutionFact:
      'Die Brillenmacher Hans und Zacharias Janssen experimentierten um 1595 in Middelburg (Niederlande) mit Linsen in einem Messingrohr und schufen eines der ersten Verbundmikroskope.',
    artworkKey: 'microscope',
  },
  {
    id: 'kaleidoskop',
    name: 'Kaleidoskop',
    countryId: '826', // Großbritannien
    category: 'Spiel & Kultur',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1816',
    clueDescription:
      'Ein kleines Sichtrohr mit angewinkelten Spiegeln und bunten Glasperlen darin, das beim Drehen unendlich viele symmetrische Muster erzeugt.',
    resolutionFact:
      'Der schottische Physiker Sir David Brewster erfand 1816 in Edinburgh (Großbritannien) beim Erforschen von Lichtreflexion das Kaleidoskop – innerhalb von drei Monaten verkauften sich allein in London 200.000 Stück.',
    artworkKey: 'kaleidoscope',
  },
  {
    id: 'regenmantel-mackintosh',
    name: 'Wasserdichter gummierter Regenmantel',
    countryId: '826', // Großbritannien
    category: 'Kleidung & Design',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1823',
    clueDescription:
      'Ein klassischer Wetterschutz-Mantel aus doppellagigem Stoff, der durch eine dünne Zwischenschicht aus Kautschuk selbst starkem Dauerregen standhält.',
    resolutionFact:
      'Der schottische Chemiker Charles Macintosh entdeckte 1823 in Glasgow (Großbritannien), dass sich Kautschuk in Steinkohlenteer-Naphtha lösen und zwischen zwei Textillagen pressen lässt.',
    artworkKey: 'coat',
  },
  {
    id: 'kaffee-ursprung',
    name: 'Entdeckung der Kaffeepflanze',
    countryId: '231', // Äthiopien
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 9. Jahrhundert',
    clueDescription:
      'Ein immergrüner Strauch aus dem ostafrikanischen Hochland, dessen rote Beeren einer Legende nach zuerst durch besonders muntere Ziegen auffielen.',
    resolutionFact:
      'Der Legende nach beobachtete der Hirte Kaldi im Hochland von Kaffa (heutiges Äthiopien), wie seine Ziegen nach dem Fressen roter Kaffeekirschen die ganze Nacht wach blieben – die Heimat von Coffea arabica.',
    artworkKey: 'coffeeplant',
  },
  {
    id: 'trockenbatterie-oder-zahnpasta',
    name: 'Älteste dokumentierte Zahnpasta-Rezeptur',
    countryId: '818', // Ägypten
    category: 'Alltag & Haushalt',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'ca. 4. Jahrhundert n. Chr. / Antike',
    clueDescription:
      'Ein feinkörniges Pulver aus Steinsalz, Minze, getrockneten Schwertlilienblüten und Pfefferkörnern zur Reinigung der Zähne.',
    resolutionFact:
      'Ein auf Papyrus überliefertes Rezept aus Ägypten (später auch schon um 3000 v. Chr. mit Bimsstein und Essig verwendet) gilt als das älteste schriftlich erhaltene Zahnpflegemittel der Welt.',
    artworkKey: 'toothpowder',
  },
  {
    id: 'zahnbuerste-borsten',
    name: 'Moderne Zahnbürste mit Borsten',
    countryId: '156', // China
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1498',
    clueDescription:
      'Ein schmaler Griff aus Bambus oder Knochen, an dessen Kopf kurze, dichte Borstenbüschel quer befestigt sind, um Speisereste zu entfernen.',
    resolutionFact:
      '1498 ließ ein Kaiser der Ming-Dynastie in China harte Nackenborsten von Schweinen rechtwinklig in einen Griff aus Knochen oder Bambus einsetzen – rund 300 Jahre vor europäischen Modellen.',
    artworkKey: 'toothbrush',
  },
  {
    id: 'kork-oder-buegeleisen-nein-knopf',
    name: 'Älteste bekannte Kleiderknöpfe als Zierde/Verschluss',
    countryId: '586', // Pakistan
    category: 'Kleidung & Design',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'ca. 2800–2600 v. Chr.',
    clueDescription:
      'Kleine runde Plättchen aus geschliffenen Muschelschalen mit zwei feinen Bohrlöchern in der Mitte – damals vor allem zum Aufnähen auf Gewänder gedacht.',
    resolutionFact:
      'Ausgrabungen der alten Indus-Kultur bei Mohenjo-Daro im heutigen Pakistan brachten die weltweit ältesten durchbohrten Muschelknöpfe zutage – lange vor der Erfindung des Knopflochs.',
    artworkKey: 'button',
  },
  {
    id: 'schokolade-tafel',
    name: 'Feste Ess-Schokoladentafel',
    countryId: '826', // Großbritannien
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1847',
    clueDescription:
      'Aus Kakaopulver, Zucker und geschmolzener Kakaobutter gegossene, in rechteckige Rippchen unterteilte Tafeln zum Abbrechen.',
    resolutionFact:
      'Jahrhundertelang wurde Schokolade fast nur getrunken, bis die Firma J. S. Fry & Sons 1847 in Bristol (Großbritannien) die Mischung aus Kakaomasse, Zucker und Kakaobutter in Formen zur ersten essbaren Tafel presste.',
    artworkKey: 'chocolate',
  },
  {
    id: 'milchschokolade',
    name: 'Vollmilchschokolade in Tafelform',
    countryId: '756', // Schweiz
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1875',
    clueDescription:
      'Eine zartschmelzende, hellbraune Variante des Süßigkeitsklassikers, bei der dem dunklen Kakao trockenes Milchpulver statt frischer Milch beigemischt wird.',
    resolutionFact:
      'Daniel Peter aus Vevey (Schweiz) nutzte 1875 das kurz zuvor von seinem Nachbarn Henri Nestlé entwickelte Milchpulver, um erstmals haltbare, cremige Vollmilchschokolade herzustellen.',
    artworkKey: 'chocolate',
  },
  {
    id: 'kaffeefilter',
    name: 'Papier-Kaffeefilter',
    countryId: '276', // Deutschland
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1908',
    clueDescription:
      'Eine kleine Tüte aus durchlässigem Papier, die gemahlenes Pulver zurückhält und beim langsamen Aufgießen ein klares Getränk ohne bitteren Satz liefert.',
    resolutionFact:
      'Genervt vom bitteren Kaffeesatz am Tassenboden lochte die Hausfrau Melitta Bentz 1908 in Dresden (Deutschland) einen Messingtopf und legte ein Löschblatt aus dem Schulheft ihres Sohnes hinein.',
    artworkKey: 'filter',
  },
  {
    id: 'schneemobil',
    name: 'Schneemobil (Motorschlitten)',
    countryId: '124', // Kanada
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1937 / 1959',
    clueDescription:
      'Ein wendiges Winterfahrzeug für tiefen Pulverschnee mit breiter Gummikette hinten zum Vortrieb und zwei lenkbaren Kufen vorne.',
    resolutionFact:
      'Nach dem tragischen Tod seines Sohnes im tiefen Winter entwickelte der Mechaniker Joseph-Armand Bombardier in Valcourt, Québec (Kanada) erst Schneeraupen und 1959 das leichte Ski-Doo-Schneemobil.',
    artworkKey: 'snowmobile',
  },
  {
    id: 'trickfilm-spielfilm',
    name: 'Erster abendfüllender Zeichentrickfilm',
    countryId: '032', // Argentinien
    category: 'Spiel & Kultur',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1917',
    clueDescription:
      'Ein über einstündiger Animationsfilm aus rund 58.000 einzeln gezeichneten und gefilmten Papierausschnitten – entstand zwanzig Jahre vor „Schneewittchen“.',
    resolutionFact:
      'Der Karikaturist Quirino Cristiani schuf 1917 in Buenos Aires (Argentinien) die politische Satire „El Apóstol“ (70 Minuten, 14 Bilder/Sekunde) – den weltweit ersten abendfüllenden Zeichentrickfilm.',
    artworkKey: 'film',
  },
  {
    id: 'tomate-domestizierung',
    name: 'Kultivierte Speisetomate',
    countryId: '484', // Mexiko
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 500 v. Chr.',
    clueDescription:
      'Eine saftige rote Frucht, die heute aus Pasta, Pizza und Salaten nicht wegzudenken ist – ihren Namen erhielt sie aus der Aztekensprache Nahuatl („Xitomatl“).',
    resolutionFact:
      'Zwar wuchsen winzige Wildformen in den Anden, doch zu großen, essbaren Früchten züchteten erst die Völker in Mesoamerika (heutiges Mexiko) die Tomate, bevor spanische Schiffe sie 1521 nach Europa brachten.',
    artworkKey: 'tomato',
  },
  {
    id: 'kalaschnikow-nein-satellit-oder-periodensystem',
    name: 'Periodensystem der chemischen Elemente',
    countryId: '643', // Russland
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1869',
    clueDescription:
      'Eine übersichtliche tabellarische Ordnung aller bekannten chemischen Grundstoffe nach Atommasse und Eigenschaften, in jedem Chemiesaal weltweit an der Wand.',
    resolutionFact:
      'Dmitri Mendelejew ordnete 1869 in Sankt Petersburg (Russland) alle damals bekannten 63 Elemente auf Kärtchen und ließ genialerweise leere Lücken für noch unentdeckte Elemente frei.',
    artworkKey: 'table',
  },
  {
    id: 'ceylon-zimt-nein-schwarzer-pfeffer',
    name: 'Echter Zimt (Ceylon-Zimt-Gewinnung)',
    countryId: '144', // Sri Lanka
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'Antike / Mittelalter',
    clueDescription:
      'Ein warm duftendes Gewürz in hauchdünnen, mehrlagig zusammengerollten braunen Rindenstangen, nach dem im 16. Jahrhundert ganze Seefahrer-Expeditionen suchten.',
    resolutionFact:
      'Die feine innere Rinde von *Cinnamomum verum* wurde seit der Antike ausschließlich auf der Insel Ceylon – dem heutigen Sri Lanka – geerntet und geschält.',
    artworkKey: 'cinnamon',
  },
  {
    id: 'wecker-sand-sonne-nein-einweckglas',
    name: 'Luftdichtes Konservenglas (Appertisierung)',
    countryId: '250', // Frankreich
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1809',
    clueDescription:
      'Ein Verfahren, bei dem Gemüse, Obst oder Suppen in verschlossene Gläser gefüllt und im Wasserbad erhitzt werden, sodass sie jahrelang ohne Kühlung frisch bleiben.',
    resolutionFact:
      'Der Pariser Konditor Nicolas Appert gewann 1809 damit einen Preis für die Versorgung von Napoleons Truppen (Frankreich) – lange bevor Pasteur Bakterien entdeckte.',
    artworkKey: 'jar',
  },
  {
    id: 'skateboard-nein-kreuzwortraetsel',
    name: 'Kreuzworträtsel',
    countryId: '840', // Vereinigte Staaten
    category: 'Spiel & Kultur',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1913',
    clueDescription:
      'Ein Gitter aus weißen und schwarzen Kästchen mit waagerechten und senkrechten Fragen, in das passende Begriffe Buchstabe für Buchstabe eingetragen werden.',
    resolutionFact:
      'Der Redakteur Arthur Wynne veröffentlichte am 21. Dezember 1913 in der Weihnachtsbeilage der Zeitung „New York World“ (USA) das erste moderne „Word-Cross“-Rätsel.',
    artworkKey: 'crossword',
  },
  {
    id: 'boerse-aktienmarkt',
    name: 'Erste moderne Aktienbörse',
    countryId: '528', // Niederlande
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1602',
    clueDescription:
      'Ein öffentlicher Handelsplatz, an dem Bürger erstmals verbriefte Anteilsscheine an einer großen Handelsgesellschaft frei kaufen und weiterverkaufen konnten.',
    resolutionFact:
      'Um die teuren Gewürzfahrten der Vereinigten Ostindischen Compagnie (VOC) zu finanzieren, entstand 1602 in Amsterdam (Niederlande) die weltweit erste Wertpapierbörse für Aktien.',
    artworkKey: 'chart',
  },
  {
    id: 'geige',
    name: 'Moderne Violine (Geige)',
    countryId: '380', // Italien
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 1550',
    clueDescription:
      'Ein viersaitiges Streichinstrument aus gewölbtem Fichten- und Ahornholz mit charakteristischen f-förmigen Schalllöchern, gespielt mit einem Pferdehaarbogen.',
    resolutionFact:
      'Geigenbauer wie Andrea Amati und später Antonio Stradivari schufen ab Mitte des 16. Jahrhunderts in Cremona und Brescia (Italien) die bis heute unveränderte Form der Violine.',
    artworkKey: 'violin',
  },
  {
    id: 'dudelsack-oder-asphalt',
    name: 'Macadam-Straßenbelag (Vorläufer moderner Straßen)',
    countryId: '826', // Großbritannien
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'ca. 1820',
    clueDescription:
      'Eine gewölbte Straßenbauweise aus fest zusammengepresstem feinem Schotter ohne tiefe Fundamente, die Regenwasser seitlich ableitet und Staub drastisch reduziert.',
    resolutionFact:
      'Der schottische Ingenieur John Loudon McAdam entwickelte diese günstige, langlebige Schotterdecke um 1820 in Großbritannien – kombiniert mit Teer entstand daraus später der „Tarmac“.',
    artworkKey: 'road',
  },
  {
    id: 'espresso-maschine',
    name: 'Dampfdruck-Espressomaschine',
    countryId: '380', // Italien
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1884 / 1901',
    clueDescription:
      'Ein glänzendes Tresengerät mit Siebträger, das heißes Wasser unter hohem Druck in weniger als dreißig Sekunden durch feines Pulver presst.',
    resolutionFact:
      'Angelo Moriondo stellte 1884 in Turin (Italien) das erste Patent vor; Luigi Bezzera und Desiderio Pavoni verfeinerten ab 1901 die ikonische Maschine für Bars.',
    artworkKey: 'espresso',
  },
  {
    id: 'schach-nein-polio-nein-kalter-kaffee-nein-yoga',
    name: 'Yoga (klassische Übungspraxis)',
    countryId: '356', // Indien
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'Antike (ca. 500 v. Chr.–200 n. Chr.)',
    clueDescription:
      'Eine ganzheitliche Tradition aus Körperhaltungen, Atemtechniken und Meditation auf einer Matte, heute weltweit als Ausgleich und Sport verbreitet.',
    resolutionFact:
      'Yoga entwickelte sich über Jahrtausende auf dem indischen Subkontinent (Indien) und wurde im berühmten Werk „Yoga Sutra“ des Gelehrten Patanjali systematisiert.',
    artworkKey: 'yoga',
  },
  {
    id: 'weinbau-aeltester',
    name: 'Ältester nachgewiesener Trauben-Weinbau',
    countryId: '268', // Georgien
    category: 'Kulinarik & Genuss',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'ca. 6000 v. Chr.',
    clueDescription:
      'Die gezielte Vergärung gepresster Weintrauben in großen, bis zum Hals in die kühle Erde eingegrabenen Tongefäßen.',
    resolutionFact:
      'Archäologen fanden südlich von Tiflis in Georgien 8.000 Jahre alte Tonamphoren („Qvevri“) mit Weinsäure-Rückständen – die bis heute älteste Wiege des Weinbaus.',
    artworkKey: 'wine',
  },
  {
    id: 'schiebepuzzle-oder-rubik-schon-da-laser-nein-kontaktlinsen',
    name: 'Erste weiche Hydrogel-Kontaktlinsen',
    countryId: '203', // Tschechien
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1961',
    clueDescription:
      'Winzige, wasserhaltige und anschmiegsame Kunststoffschalen, die direkt auf dem Tränenfilm des Auges schwimmen und frühe harte Glaslinsen ablösten.',
    resolutionFact:
      'Der Chemiker Otto Wichterle baute 1961 in Prag (Tschechien / Tschechoslowakei) die ersten vier weichen Kontaktlinsen zu Hause am Küchentisch – mit Hilfe eines Kinderbaukastens und eines Fahrraddynamos!',
    artworkKey: 'lens',
  },

  // === 30+ TAGE BACKLOG-ERWEITERUNG (36 EINFACH, 10 MITTEL, 6 SEHR SCHWER) ===
  {
    id: 'pizza-margherita',
    name: 'Pizza Margherita (Klassische Ofenpizza)',
    countryId: '380', // Italien
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'Ende 19. Jahrhundert',
    clueDescription:
      'Ein dünn ausgerollter Hefeteigfladen, belegt mit passierten Tomaten, Mozzarella und frischem Basilikum und bei großer Hitze im Steinofen gebacken.',
    hintText:
      'Entstand als königliche Ehrung in den Landesfarben Rot, Weiß und Grün in einer großen Hafenstadt am Golf.',
    resolutionFact:
      'Der Pizzabäcker Raffaele Esposito belegte 1889 in Neapel (Italien) zu Ehren von Königin Margherita einen Teigfladen mit Tomaten, Mozzarella und Basilikum – die Geburtsstunde der modernen Pizza.',
    artworkKey: 'pizza',
  },
  {
    id: 'nigiri-sushi',
    name: 'Nigiri-Sushi',
    countryId: '392', // Japan
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'Frühes 19. Jahrhundert',
    clueDescription:
      'Handgeformte kleine Häppchen aus leicht gesäuertem Reis, auf denen eine frische Scheibe rohen Fisches oder Meeresfrüchte liegt.',
    hintText:
      'Ursprünglich ein schnelles Straßenessen an Garküchen im heutigen Tokio.',
    resolutionFact:
      'Hanaya Yohei verkaufte in den 1820er Jahren in Edo (heute Tokio, Japan) frisch gepresste Reisbällchen mit frischem Fisch aus der Bucht – die bis heute klassische Form des Nigiri-Sushi.',
    artworkKey: 'sushi',
  },
  {
    id: 'laugenbrezel',
    name: 'Laugenbrezel',
    countryId: '276', // Deutschland
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '19. Jahrhundert (Laugenform)',
    clueDescription:
      'Ein geschlungenes Hefegebäck mit glänzender, dunkelbrauner Kruste und groben weißen Salzkörnern, die durch ein kurzes Natronlaugebad vor dem Backen entsteht.',
    hintText:
      'Ein Bäcker aus Südwestdeutschland soll versehentlich ein Blech Gebäck in Putzlauge getaucht haben.',
    resolutionFact:
      'Die charakteristische braune Kruste durch Natronlauge entstand im 19. Jahrhundert in Süddeutschland (bekannt ist u. a. Wilhelm Anton Friederichs in Ludwigsburg bzw. München).',
    artworkKey: 'pretzel',
  },
  {
    id: 'basketball-sport',
    name: 'Basketball',
    countryId: '840', // Vereinigte Staaten
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1891',
    clueDescription:
      'Ein Hallen-Teamsport, bei dem zwei Fünferteams versuchen, einen runden Lederball durch einen in gut drei Metern Höhe angebrachten Ring zu werfen.',
    hintText:
      'Erfunden von einem Sportlehrer in Massachusetts als Winterspiel mit zwei Pfirsichkörben als Zielen.',
    resolutionFact:
      'James Naismith nagelte im Dezember 1891 am Springfield College (USA) zwei Pfirsichkörbe an die Hallenbalustrade und formulierte die ersten 13 Basketballregeln.',
    artworkKey: 'basketball',
  },
  {
    id: 'golf-modern-18',
    name: 'Modernes Golfspiel (18-Loch-Regeln)',
    countryId: '826', // Großbritannien
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '15.–18. Jahrhundert',
    clueDescription:
      'Ein Präzisionssport auf weitläufigen Rasenbahnen, bei dem ein kleiner harter Ball mit möglichst wenigen Schlägen in 18 eingelassene Löcher gespielt wird.',
    hintText:
      'Die heute weltweit verbindlichen Regeln und die 18-Loch-Runde stammen von einer Küstenstadt in Schottland.',
    resolutionFact:
      'Zwar gab es Vorläufer, doch in St Andrews (Schottland, Großbritannien) wurden 1754 die ersten schriftlichen Golfregeln kodifiziert und 1764 die 18-Loch-Standardrunde festgelegt.',
    artworkKey: 'golf',
  },
  {
    id: 'dampflokomotive-schiene',
    name: 'Schienen-Dampflokomotive',
    countryId: '826', // Großbritannien
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1804',
    clueDescription:
      'Eine selbstfahrende Zugmaschine auf Eisenschienen, bei der erhitzter Wasserdampf Kolben antreibt und schwere Güter- oder Personenwagen zieht.',
    hintText:
      'Fuhr 1804 erstmals in Südwales auf den Schienen einer Eisenhütte mit rund 8 km/h.',
    resolutionFact:
      'Richard Trevithick baute 1804 in Penydarren (Wales, Großbritannien) die erste funktionierende Dampflokomotive auf Schienen – lange vor Stephensons berühmter „Rocket“.',
    artworkKey: 'train',
  },
  {
    id: 'roentgenstrahlung',
    name: 'Medizinisches Röntgenbild',
    countryId: '276', // Deutschland
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1895',
    clueDescription:
      'Ein Durchleuchtungsverfahren mit unsichtbarer elektromagnetischer Strahlung, das Knochen und Zähne ohne Operation als Schattenbild sichtbar macht.',
    hintText:
      'Entdeckt in Würzburg durch einen Physiker, der damit 1901 den allerersten Physik-Nobelpreis gewann.',
    resolutionFact:
      'Wilhelm Conrad Röntgen entdeckte im November 1895 in Würzburg (Deutschland) die „X-Strahlen“ und fertigte die berühmte Aufnahme der Hand seiner Frau an.',
    artworkKey: 'xray',
  },
  {
    id: 'world-wide-web',
    name: 'World Wide Web (WWW)',
    countryId: '756', // Schweiz
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1989–1991',
    clueDescription:
      'Ein weltweites Hypertext-System aus verknüpften Seiten, Adressen (URL) und Browsern, das das Internet für alle Menschen leicht nutzbar machte.',
    hintText:
      'Entwickelt von einem britischen Informatiker am europäischen Kernforschungszentrum nahe Genf.',
    resolutionFact:
      'Tim Berners-Lee entwarf 1989 am CERN bei Genf (Schweiz) HTTP, HTML und den ersten Webbrowser, um Forschungsergebnisse weltweit per Klick zu verknüpfen.',
    artworkKey: 'web',
  },
  {
    id: 'mikrochip-ic',
    name: 'Integrierter Schaltkreis (Mikrochip)',
    countryId: '840', // Vereinigte Staaten
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1958–1959',
    clueDescription:
      'Ein winziges Halbleiter-Plättchen, auf dem Millionen oder Milliarden winziger Transistoren gemeinsam auf einem Stück Silizium untergebracht sind.',
    hintText:
      'Unabhängig voneinander in Texas und Kalifornien fast zeitgleich Ende der 1950er erfunden.',
    resolutionFact:
      'Jack Kilby (Texas Instruments) und Robert Noyce (Fairchild Semiconductor) entwickelten 1958/1959 in den USA den integrierten Schaltkreis auf einem einzigen Halbleiterkristall.',
    artworkKey: 'chip',
  },
  {
    id: 'motorflugzeug-wright',
    name: 'Gesteuertes Motorflugzeug',
    countryId: '840', // Vereinigte Staaten
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1903',
    clueDescription:
      'Ein Doppeldecker aus Holz und Stoff mit Propellerantrieb, der erstmals kontrolliert aus eigener Kraft abhob und sicher wieder landete.',
    hintText:
      'Zwei Fahrradmechaniker aus Ohio testeten den „Flyer“ in den Sanddünen von North Carolina.',
    resolutionFact:
      'Orville und Wilbur Wright absolvierten am 17. Dezember 1903 in Kitty Hawk (USA) den ersten dokumentierten, gesteuerten Motorflug schwerer als Luft.',
    artworkKey: 'plane',
  },
  {
    id: 'barometer-torricelli',
    name: 'Quecksilber-Barometer',
    countryId: '380', // Italien
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1643',
    clueDescription:
      'Ein meteorologisches Messgerät, das Änderungen des Luftdrucks anzeigt und bis heute eine Grundlage jeder Wettervorhersage bildet.',
    hintText:
      'Ein Schüler Galileo Galileis konstruierte das Glasrohr mit Quecksilber in Florenz.',
    resolutionFact:
      'Evangelista Torricelli bewies 1643 in Florenz (Italien) mit einer mit Quecksilber gefüllten Glasröhre das Gewicht der Atmosphäre und schuf das Barometer.',
    artworkKey: 'barometer',
  },
  {
    id: 'pasteurisierung',
    name: 'Pasteurisierung (Schonende Erhitzung)',
    countryId: '250', // Frankreich
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1864',
    clueDescription:
      'Ein Verfahren, bei dem Milch, Saft oder Wein kurz unter 100 °C erhitzt werden, um Keime abzutöten und den Geschmack trotzdem zu bewahren.',
    hintText:
      'Benannt nach einem berühmten französischen Chemiker und Mikrobiologen.',
    resolutionFact:
      'Louis Pasteur ließ sich 1865 in Frankreich das kontrollierte Erhitzen zur Haltbarmachung von Flüssigkeiten patentieren – ein Meilenstein für Lebensmittelsicherheit.',
    artworkKey: 'milk',
  },
  {
    id: 'kinematograph-kino',
    name: 'Kino-Projektor (Kinematograph)',
    countryId: '250', // Frankreich
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1895',
    clueDescription:
      'Eine kombinierte Kamera- und Projektionsmaschine, mit der erstmals bewegte Filme gegen Eintrittsgeld vor einem sitzenden Publikum gezeigt wurden.',
    hintText:
      'Zwei Brüder aus Lyon veranstalteten 1895 in einem Pariser Café die erste öffentliche Vorführung.',
    resolutionFact:
      'Auguste und Louis Lumière präsentierten am 28. Dezember 1895 im Grand Café in Paris (Frankreich) erstmals Kurzfilme vor zahlendem Publikum.',
    artworkKey: 'projector',
  },
  {
    id: 'metrisches-system',
    name: 'Metrisches System (Meter & Kilogramm)',
    countryId: '250', // Frankreich
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1791–1799',
    clueDescription:
      'Ein einheitliches Zehner-Maßsystem für Längen und Gewichte, das Hunderte regionale Ellen, Fuß und Pfund durch ein gemeinsames Standardmaß ersetzte.',
    hintText:
      'Eingeführt im Zuge einer großen europäischen Revolution Ende des 18. Jahrhunderts.',
    resolutionFact:
      'Im revolutionären Frankreich definierten Wissenschaftler ab 1791 den Meter als Zehnmillionstel des Erdmeridianquadranten und schufen das metrische System.',
    artworkKey: 'ruler',
  },
  {
    id: 'blaue-led',
    name: 'Helle blaue Leuchtdiode (LED)',
    countryId: '392', // Japan
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1989–1993',
    clueDescription:
      'Ein winziger Halbleiterbaustein für grelles blaues Licht – erst er ermöglichte gemeinsam mit Rot und Grün energiesparende weiße LED-Lampen.',
    hintText:
      'Drei Forscher in Nagoya und Tokushima erhielten dafür 2014 gemeinsam den Physik-Nobelpreis.',
    resolutionFact:
      'Isamu Akasaki, Hiroshi Amano und Shuji Nakamura gelang in den frühen 1990er Jahren in Japan der Durchbruch bei Galliumnitrid-LEDs – die Basis moderner Beleuchtung und Bildschirme.',
    artworkKey: 'led',
  },
  {
    id: 'shinkansen-schnellzug',
    name: 'Hochgeschwindigkeitszug (Schnellbahnsystem)',
    countryId: '392', // Japan
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1964',
    clueDescription:
      'Ein aerodynamisch geformter elektrischer Fernzug auf eigenen, kreuzungsfreien Trassen, der erstmals im Regelbetrieb über 200 km/h fuhr.',
    hintText:
      'Pünktlich zu den Olympischen Sommerspielen 1964 zwischen zwei Millionenstädten eröffnet.',
    resolutionFact:
      'Am 1. Oktober 1964 startete zwischen Tokio und Osaka (Japan) der erste Shinkansen-Hochgeschwindigkeitszug und läutete das moderne Schnellbahn-Zeitalter ein.',
    artworkKey: 'bullettrain',
  },
  {
    id: 'schwarzpulver',
    name: 'Schwarzpulver (Schießpulver)',
    countryId: '156', // China
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '9. Jahrhundert',
    clueDescription:
      'Eine Mischung aus Salpeter, Holzkohle und Schwefel, die ursprünglich bei der Suche nach einem Lebenselixier entdeckt wurde und Feuerwerk ermöglichte.',
    hintText:
      'Daoistische Alchemisten dokumentierten die brennbare Rezeptur während der Tang-Dynastie.',
    resolutionFact:
      'Chinesische Alchemisten beschrieben die Mischung im 9. Jahrhundert in China zunächst für medizinische Versuche – bald nutzte man sie für Feuerwerke, Signalraketen und Sprengungen.',
    artworkKey: 'firework',
  },
  {
    id: 'schubkarre',
    name: 'Schubkarre (Einradkarren)',
    countryId: '156', // China
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 2. Jahrhundert',
    clueDescription:
      'Ein handgeschobenes Transportgerät mit einem zentralen Rad und zwei Griffstangen, mit dem eine einzige Person schwere Lasten bewegen kann.',
    hintText:
      'Dargestellt auf Grabreliefs der Han-Dynastie mehr als tausend Jahre bevor sie in Europa erschien.',
    resolutionFact:
      'In China tauchten einrädrige Transportkarren spätestens während der Han-Dynastie (um 100–200 n. Chr.) im Militär- und Bauwesen auf.',
    artworkKey: 'wheelbarrow',
  },
  {
    id: 'schlangen-und-leitern',
    name: 'Schlangen und Leitern (Brettspiel)',
    countryId: '356', // Indien
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'Mittelalter / Traditionell',
    clueDescription:
      'Ein klassisches Würfel-Laufspiel für Kinder und Familien auf nummerierten Feldern, bei dem Leitern nach oben helfen und Schlangen hinunterführen.',
    hintText:
      'Das historische Ursprungsspiel hieß „Moksha Patam“ und vermittelte Tugenden und Karma.',
    resolutionFact:
      'Das Spiel stammt als moralisches Lernspiel „Moksha Patam“ aus Indien: Leitern symbolisierten gute Taten, Schlangen Laster. Britische Kolonialbeamte brachten es um 1892 nach Europa.',
    artworkKey: 'ladder',
  },
  {
    id: 'popcorn-mais',
    name: 'Puffmais (Popcorn)',
    countryId: '484', // Mexiko
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 3600 v. Chr.',
    clueDescription:
      'Spezielle harte Maiskörner, deren eingeschlossenes Wasser beim Erhitzen schlagartig verdampft und den Kern zu einem weißen Schaumflocken aufplatzen lässt.',
    hintText:
      'Bereits Azteken nutzten gepuffte Körner sowohl als Snack als auch als weißen Kopfschmuck.',
    resolutionFact:
      'Archäologen datierten älteste gepuffte Maisreste aus Mittelamerika bzw. Mexiko und dem angrenzenden Raum auf rund 5.600 Jahre; schon die Azteken stellten dort Popcorn her.',
    artworkKey: 'popcorn',
  },
  {
    id: 'sonnenkalender-365',
    name: '365-Tage-Sonnenkalender',
    countryId: '818', // Ägypten
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 2800 v. Chr.',
    clueDescription:
      'Eine Einteilung des Jahres in zwölf Monate zu je 30 Tagen plus fünf Schalttage – ausgerichtet am Aufgang eines hellen Sterns vor der Nilflut.',
    hintText:
      'Priester am längsten Fluss Afrikas richteten damit Aussaat und Ernte präzise aus.',
    resolutionFact:
      'Im Alten Reich in Ägypten entstand rund um 2800 v. Chr. der erste bürgerliche 365-Tage-Sonnenkalender, der später die Basis für unseren heutigen Kalender bildete.',
    artworkKey: 'sundial',
  },
  {
    id: 'sauerteig-hefebrot',
    name: 'Gegorenes Hefebrot',
    countryId: '818', // Ägypten
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 3000 v. Chr.',
    clueDescription:
      'Lockeres, poriges Brot aus Getreidemehl und Wasser, das vor dem Backen durch wilde Hefepilze aufgeht statt als harter Fladen gebacken zu werden.',
    hintText:
      'Wandmalereien in Pharaonengräbern zeigen bereits komplette Großbäckereien mit Tonöfen.',
    resolutionFact:
      'Archäologische Befunde und Grabmalereien belegen, dass im alten Ägypten erstmals systematisch gesäuerter Hefeteig in Öfen zu lockerem Laibbrot gebacken wurde.',
    artworkKey: 'bread',
  },
  {
    id: 'olympische-spiele-antike',
    name: 'Olympische Spiele',
    countryId: '300', // Griechenland
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '776 v. Chr.',
    clueDescription:
      'Alle vier Jahre wiederkehrende athletische Wettkämpfe in Lauf, Weitsprung, Diskus und Ringen, begleitet von einem heiligen Waffenstillstand.',
    hintText:
      'Ausgetragen im Heiligtum des Zeus auf der Halbinsel Peloponnes.',
    resolutionFact:
      'Seit mindestens 776 v. Chr. trafen sich Athleten im Heiligtum Olympia (Griechenland) alle vier Jahre zu den Spielen, bevor sie 1896 in Athen modern wiederbelebt wurden.',
    artworkKey: 'torch',
  },
  {
    id: 'sparschäler-rex',
    name: 'Pendelklingen-Sparschäler („Rex“)',
    countryId: '756', // Schweiz
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1947',
    clueDescription:
      'Ein minimalistischer Y-förmiger Gemüseschäler aus einem einzigen gebogenen Aluminiumband mit beweglicher Doppelklinge für extrem dünne Schalen.',
    hintText:
      'Entworfen von Alfred Neweczerzal in Davos und heute auf Briefmarken seines Heimatlandes verewigt.',
    resolutionFact:
      'Alfred Neweczerzal entwickelte 1947 in Davos (Schweiz) den ikonischen „Rex“-Sparschäler, von dem bis heute weit über 100 Millionen Exemplare verkauft wurden.',
    artworkKey: 'peeler',
  },
  {
    id: 'celsius-skala',
    name: 'Celsius-Temperaturskala',
    countryId: '752', // Schweden
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1742',
    clueDescription:
      'Eine Hundert-Grad-Einteilung für Thermometer, verankert am Gefrierpunkt und Siedepunkt von reinem Wasser unter Normaldruck.',
    hintText:
      'Ein Astronom aus Uppsala stellte die Skala 1742 der Königlichen Akademie der Wissenschaften vor.',
    resolutionFact:
      'Der Astronom Anders Celsius präsentierte 1742 in Uppsala (Schweden) die hundertteilige Temperaturskala – anfangs übrigens mit 0° für kochendes und 100° für gefrierendes Wasser.',
    artworkKey: 'thermometer',
  },
  {
    id: 'sicherheitsstreichholz',
    name: 'Sicherheitsstreichholz',
    countryId: '752', // Schweden
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1844–1855',
    clueDescription:
      'Zündhölzer, die erst durch Reiben an einer speziellen roten Phosphor-Reibfläche an der Schachtel entflammen und sich nicht selbst entzünden.',
    hintText:
      'Der Erfinder Gustaf Erik Pasch trennte den giftigen Phosphor vom Zündkopf – weltberühmt durch die Fabrik in Jönköping.',
    resolutionFact:
      'Gustaf Erik Pasch patentierte 1844 in Schweden die Trennung von Zündkopf und Reibfläche; die Brüder Lundström machten das Sicherheitsstreichholz ab 1855 zum Welterfolg.',
    artworkKey: 'match',
  },
  {
    id: 'pendeluhr-huygens',
    name: 'Präzisions-Pendeluhr',
    countryId: '528', // Niederlande
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1656',
    clueDescription:
      'Eine mechanische Stand- oder Wanduhr, deren Ganggenauigkeit durch das gleichmäßige Hin- und Herschwingen eines Gewichts an einer Stange gesichert wird.',
    hintText:
      'Christiaan Huygens senkte damit die tägliche Ungenauigkeit von 15 Minuten auf nur wenige Sekunden.',
    resolutionFact:
      'Der Mathematiker und Astronom Christiaan Huygens baute 1656 in Den Haag (Niederlande) die erste funktionierende Pendeluhr nach einem Patent des Uhrmachers Salomon Coster.',
    artworkKey: 'pendulum',
  },
  {
    id: 'karavelle-segelschiff',
    name: 'Hochsee-Karavelle',
    countryId: '620', // Portugal
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '15. Jahrhundert',
    clueDescription:
      'Ein wendiges, vergleichsweise flachgehendes Segelschiff mit dreieckigen Lateinsegeln, das erstmals auch schräg gegen den Wind über offene Ozeane kreuzen konnte.',
    hintText:
      'Ermöglichte den großen Seefahrern der Iberischen Westküste die Umrundung Afrikas.',
    resolutionFact:
      'Unter dem Einfluss von Heinrich dem Seefahrer entstand im 15. Jahrhundert in Portugal die Karavelle – das Schlüssel-Schiff des europäischen Entdeckungszeitalters.',
    artworkKey: 'ship',
  },
  {
    id: 'moderne-konzertgitarre',
    name: 'Moderne Konzertgitarre',
    countryId: '724', // Spanien
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1850er Jahre',
    clueDescription:
      'Ein sechsseitiges Zupfinstrument mit großem achtförmigem Resonanzkörper und spezieller Fächerbeleistung unter der Fichtendecke für vollen Klang.',
    hintText:
      'Der Gitarrenbauer Antonio de Torres aus Almería prägte bis heute Maße, Mensur und Bauweise.',
    resolutionFact:
      'Antonio de Torres legte in den 1850er Jahren in Andalusien (Spanien) Größe, Steg und Fächerbeleistung der klassischen Gitarre fest, wie sie noch heute weltweit gebaut wird.',
    artworkKey: 'guitar',
  },
  {
    id: 'kaesehobel-ostehovel',
    name: 'Käsehobel',
    countryId: '578', // Norwegen
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1925',
    clueDescription:
      'Ein flacher Küchenhelfer mit breitem, geschlitztem Metallblatt am Griff, der beim Ziehen über einen Käselaib gleichmäßig dünne Scheiben abträgt.',
    hintText:
      'Ein Schreiner in Lillehammer übertrug 1925 das Prinzip seines Holzhobels auf Schnittkäse.',
    resolutionFact:
      'Der Möbelschreiner Thor Bjørklund ärgerte sich über ungleichmäßige Käsestücke und meldete 1925 in Lillehammer (Norwegen) das Patent für den „Ostehøvel“ an.',
    artworkKey: 'cheese',
  },
  {
    id: 'postkarte-correspondenzkarte',
    name: 'Offizielle Postkarte',
    countryId: '040', // Österreich
    category: 'Alltag & Haushalt',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1869',
    clueDescription:
      'Eine fest vorgestempelte Karton-Karte für kurze Grüße und Mitteilungen ohne Briefumschlag zu ermäßigtem Porto.',
    hintText:
      'Der Ökonom Emanuel Herrmann schlug die „Correspondenz-Karte“ 1869 in einer Wiener Zeitung vor.',
    resolutionFact:
      'Am 1. Oktober 1869 gab die k.k. Post in Wien (Österreich) auf Initiative von Emanuel Herrmann die weltweit erste staatliche „Correspondenz-Karte“ heraus.',
    artworkKey: 'postcard',
  },
  {
    id: 'saxophon-instrument',
    name: 'Saxophon',
    countryId: '056', // Belgien
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 1840',
    clueDescription:
      'Ein geschwungenes Holzblasinstrument aus glänzendem Messing mit einem einzelnen Rohrblatt am Mundstück, das heute Jazz und Pop prägt.',
    hintText:
      'Benannt nach dem Instrumentenbauer Adolphe Sax, geboren in Dinant an der Maas.',
    resolutionFact:
      'Der Instrumentenbauer Adolphe Sax verband um 1840 in Brüssel (Belgien) den konischen Metallkorpus eines Blechblasinstruments mit dem Mundstück einer Klarinette.',
    artworkKey: 'sax',
  },
  {
    id: 'zuckerwuerfel-rad',
    name: 'Würfelzucker',
    countryId: '203', // Tschechien
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1841–1843',
    clueDescription:
      'Gepresste kleine weiße Würfel aus angefeuchtetem Kristallzucker zur exakten Portionierung in Kaffee und Tee.',
    hintText:
      'Erfunden in Mähren, nachdem sich die Ehefrau eines Raffinerieleiters beim Zuckerhut-Hacken verletzte.',
    resolutionFact:
      'Jakub Kryštof Rad erfand 1841 in Dačice (Mähren, Tschechien) die Zuckerwürfel-Presse, damit man nicht länger große Zuckerhüte mühsam mit Hammer und Beil zerkleinern musste.',
    artworkKey: 'sugar',
  },
  {
    id: 'sputnik-satellit',
    name: 'Erster künstlicher Erdsatellit (Sputnik 1)',
    countryId: '643', // Russland
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1957',
    clueDescription:
      'Eine polierte Metallkugel von gut einem halben Meter Durchmesser mit vier langen Stabantennen, die piepsende Funksignale aus der Erdumlaufbahn sendete.',
    hintText:
      'Startete im Oktober 1957 unter Leitung von Sergei Koroljow und eröffnete das Raumfahrtzeitalter.',
    resolutionFact:
      'Sowjetische Raumfahrtingenieure um Sergei Koroljow (Russland / UdSSR) brachten am 4. Oktober 1957 Sputnik 1 in die Umlaufbahn – das erste menschengemachte Objekt im All.',
    artworkKey: 'satellite',
  },
  {
    id: 'fussball-regeln-fa',
    name: 'Modernes Fußball-Regelwerk',
    countryId: '826', // Großbritannien
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1863',
    clueDescription:
      'Die feste Trennung vom Spiel mit den Händen („Rugby“) hin zu klaren Regeln für das Treten eines Balls auf ein Tor ohne Handspiel.',
    hintText:
      'Am 26. Oktober 1863 gründeten elf Londoner Vereine in einer Taverne den ersten Verband.',
    resolutionFact:
      'In der Freemasons’ Tavern in London (Großbritannien) beschloss die neugegründete Football Association 1863 die einheitlichen Regeln des modernen Association Football.',
    artworkKey: 'soccer',
  },
  {
    id: 'automobil-patent-benz',
    name: 'Automobil mit Verbrennungsmotor',
    countryId: '276', // Deutschland
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1886',
    clueDescription:
      'Ein dreirädriger Wagen ohne Pferdegespann, angetrieben von einem kompakten Benzin-Viertaktmotor samt elektrischer Zündung.',
    hintText:
      'Die Ehefrau des Erfinders unternahm 1888 heimlich die erste historische Fernfahrt von Mannheim nach Pforzheim.',
    resolutionFact:
      'Carl Benz meldete am 29. Januar 1886 in Mannheim (Deutschland) das „Fahrzeug mit Gasmotorenbetrieb“ (Patent-Motorwagen Nr. 1) zum Patent an.',
    artworkKey: 'car',
  },
  {
    id: 'polio-impfstoff-salk',
    name: 'Inaktivierter Polio-Impfstoff',
    countryId: '840', // Vereinigte Staaten
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1952–1955',
    clueDescription:
      'Eine Schutzimpfung mit abgetöteten Viren, die Kinder weltweit vor der gefürchteten Kinderlähmung schützt – der Erfinder verzichtete bewusst auf ein Patent.',
    hintText:
      'Entwickelt von Jonas Salk an der Universität Pittsburgh Mitte der 1950er Jahre.',
    resolutionFact:
      'Jonas Salk entwickelte den Impfstoff ab 1952 in den USA und lehnte eine Patentierung mit den berühmten Worten ab: „Könnte man denn die Sonne patentieren?“',
    artworkKey: 'syringe',
  },
  {
    id: 'nylon-kunstfaser',
    name: 'Nylon (Vollsynthetische Textilfaser)',
    countryId: '840', // Vereinigte Staaten
    category: 'Kleidung & Design',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1935–1938',
    clueDescription:
      'Eine extrem reißfeste, elastische Kunstfaser aus rein chemischer Synthese ohne pflanzliche Zellulose – bekannt von Strümpfen, Zahnbürsten und Fallschirmen.',
    hintText:
      'Chemiker Wallace Carothers entwickelte das Polyamid 6,6 in den Laboratorien von Wilmington, Delaware.',
    resolutionFact:
      'Wallace Carothers schuf 1935 bei DuPont in den USA mit Nylon die weltweit erste vollständig aus Erdölchemikalien gewonnene Textilfaser.',
    artworkKey: 'yarn',
  },
  {
    id: 'regenmesser-cheugugi',
    name: 'Standardisiertes Regenmess-Netz',
    countryId: '410', // Südkorea
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1441',
    clueDescription:
      'Ein einheitliches zylindrisches Metallgefäß auf einem Steinsockel zur landesweiten Messung der genauen Niederschlagsmenge in Millimetern.',
    hintText:
      'Eingeführt unter König Sejong dem Großen im Jahr 1441 zur besseren Ernteplanung.',
    resolutionFact:
      'Unter König Sejong wurde 1441 in Joseon (heutiges Südkorea) der Regenmesser „Cheugugi“ im ganzen Land verteilt – gut 200 Jahre vor ähnlichen Netzen in Europa.',
    artworkKey: 'rain',
  },
  {
    id: 'oper-buehnengattung',
    name: 'Oper (Musikdrama)',
    countryId: '380', // Italien
    category: 'Spiel & Kultur',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 1597–1607',
    clueDescription:
      'Eine Bühnenkunstform, bei der eine gesamte dramatische Handlung durchgängig gesungen und von einem Orchester begleitet wird.',
    hintText:
      'Entstand kurz vor 1600 im Künstlerkreis der „Florentiner Camerata“ am Arno.',
    resolutionFact:
      'Jacopo Peri schuf mit „Dafne“ (1597) in Florenz (Italien) die erste Oper, gefolgt von Monteverdis Meisterwerk „L’Orfeo“ im Jahr 1607.',
    artworkKey: 'opera',
  },
  {
    id: 'taco-tortilla-nixtamal',
    name: 'Mais-Tortilla (Nixtamalisation)',
    countryId: '484', // Mexiko
    category: 'Kulinarik & Genuss',
    difficulty: 'einfach',
    maxPoints: 100,
    era: 'ca. 1500 v. Chr.',
    clueDescription:
      'Flache runde Maisfladen, deren Körner zuvor in Kalkwasser gekocht werden, um einen formbaren Teig und wertvolle Vitamine freizusetzen.',
    hintText:
      'Bis heute die kulinarische Basis von Tacos und Enchiladas in Mesoamerika.',
    resolutionFact:
      'Bereits um 1500 v. Chr. entwickelten Kulturen im Raum des heutigen Mexiko die Nixtamalisation von Mais – eine geniale Ernährungsinnovation gegen Mangelkrankheiten.',
    artworkKey: 'taco',
  },
  {
    id: 'tauchspulen-lautsprecher',
    name: 'Elektrodynamischer Tauchspulen-Lautsprecher',
    countryId: '208', // Dänemark
    category: 'Technik & Medizin',
    difficulty: 'einfach',
    maxPoints: 100,
    era: '1915',
    clueDescription:
      'Ein Schallwandler mit beweglicher Schwingspule im Magnetfeld und Papierkonus – bis heute das Grundprinzip fast aller HiFi- und Bluetooth-Boxen.',
    hintText:
      'Der Erfinder Peter L. Jensen stammte aus Maribo auf Lolland und nannte seinen ersten Erfolg „Magnavox“.',
    resolutionFact:
      'Der dänische Ingenieur Peter Laurits Jensen entwickelte zusammen mit Edwin Pridham 1915 das Tauchspulen-Lautsprecherprinzip („Große Stimme“), nachdem er auf der Insel Lolland aufgewachsen war.',
    artworkKey: 'speaker',
  },

  // --- NEUE MITTEL (10 Stück, 100 Pkt) ---
  {
    id: 'sparschwein-celengan',
    name: 'Sparschwein aus Ton (Celengan)',
    countryId: '360', // Indonesien
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '14.–15. Jahrhundert',
    clueDescription:
      'Ein hohles Tongefäß in Form eines dickbäuchigen Tieres mit schmalem Einwurfschlitz auf dem Rücken, das zum Entleeren früher zerschlagen wurde.',
    hintText:
      'In Ost-Java fand man aus dem Majapahit-Reich Hunderte Terrakotta-Sparfiguren in Wildschweingestalt.',
    resolutionFact:
      'Lange bevor der Name „Piggy Bank“ aufkam, töpferten Handwerker im Königreich Majapahit (Indonesien) im 14./15. Jahrhundert Spardosen in Schweineform („Celengan“).',
    artworkKey: 'piggybank',
  },
  {
    id: 'ayurveda-nasenplastik',
    name: 'Rekonstruktive Nasen-Chirurgie (Sushruta)',
    countryId: '356', // Indien
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'Antike (ca. 600 v. Chr.)',
    clueDescription:
      'Die älteste dokumentierte Methode der plastischen Chirurgie, bei der verlorenes Gewebe mithilfe eines gestielten Hautlappens aus der Wange oder Stirn ersetzt wird.',
    hintText:
      'Beschrieben im Sanskrit-Medizinwerk „Sushruta Samhita“ am Ganges.',
    resolutionFact:
      'Der antike Arzt Sushruta dokumentierte vor rund 2.600 Jahren in Indien über 120 chirurgische Instrumente und die heute noch sogenannte „Indische Methode“ der Nasenrekonstruktion.',
    artworkKey: 'surgery',
  },
  {
    id: 'autogiro-tragschrauber',
    name: 'Tragschrauber (Autogiro, Vorläufer des Hubschraubers)',
    countryId: '724', // Spanien
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1923',
    clueDescription:
      'Ein Fluggerät mit großem, frei drehendem Dachrotor, das ohne lange Startbahn beinahe senkrecht aufsteigen und extrem langsam landen konnte.',
    hintText:
      'Entwickelt von Ingenieur Juan de la Cierva nach dem Absturz seines Dreimotoren-Flugzeugs.',
    resolutionFact:
      'Juan de la Cierva erfand 1923 in Madrid (Spanien) mit seinem gelenkig gelagerten Rotor beim „Autogiro“ die aerodynamische Grundlage für jeden späteren Hubschrauber.',
    artworkKey: 'rotor',
  },
  {
    id: 'orange-zuchtkarotte',
    name: 'Moderne orange gezüchtete Karotte',
    countryId: '528', // Niederlande
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '16.–17. Jahrhundert',
    clueDescription:
      'Eine süßliche, leuchtend orangefarbene Rübe, die erst durch gezielte Auslese aus ursprünglich violetten, weißen und gelben Urformen zum Standard wurde.',
    hintText:
      'Gärtner züchteten diese Sorte angeblich passend zur Farbe des Herrscherhauses von Oranien.',
    resolutionFact:
      'Ursprünglich waren Möhren meist lila oder gelb – niederländische Züchter (Niederlande) wählten im 16./17. Jahrhundert gezielt die süßere, beta-carotinreiche orange Variante aus.',
    artworkKey: 'carrot',
  },
  {
    id: 'briefmarke-penny-black',
    name: 'Selbstklebende Post-Briefmarke (Gummiert)',
    countryId: '826', // Großbritannien
    category: 'Alltag & Haushalt',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1840',
    clueDescription:
      'Ein kleines bedrucktes Papierquadrat mit vorbezahltem Porto, das man anfeuchtet und auf einen Brief klebt, statt dass der Empfänger zahlt.',
    hintText:
      'Die weltweit allererste Ausgabe trug ein schwarzes Profilporträt von Königin Victoria.',
    resolutionFact:
      'Auf Vorschlag von Rowland Hill erschien am 1. Mai 1840 in Großbritannien die „Penny Black“ – die weltweit erste offizielle Post-Briefmarke.',
    artworkKey: 'stamp',
  },
  {
    id: 'papierdrachen-flugdrachen',
    name: 'Gespannter Flugdrachen',
    countryId: '156', // China
    category: 'Spiel & Kultur',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 5. Jahrhundert v. Chr.',
    clueDescription:
      'Ein leichtes Holz- oder Bambusgestell bespannt mit Seide oder Papier, das an einer Schnur im Wind aufsteigt und früher auch Entfernungen maß.',
    hintText:
      'Die Handwerker Mozi und Lu Ban sollen um 450 v. Chr. einen hölzernen Vogel gefertigt haben.',
    resolutionFact:
      'Flugdrachen entstanden vor rund 2.500 Jahren in China, gebaut aus Bambus und Seide – zunächst für militärische Signale und Windmessungen, später als beliebtes Spielzeug.',
    artworkKey: 'kite',
  },
  {
    id: 'sicherheitsaufzug-otis',
    name: 'Absturzsicherer Personenaufzug',
    countryId: '840', // Vereinigte Staaten
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1853',
    clueDescription:
      'Eine Fahrstuhlkabine mit automatischer Fangbremse, die bei einem gerissenen Tragseil sofort einrastet und erst so echte Wolkenkratzer ermöglichte.',
    hintText:
      'Elisha Otis demonstrierte das System 1854 dramatisch in New York, indem er das eigene Seil kappen ließ.',
    resolutionFact:
      'Elisha Graves Otis entwickelte 1853 in Yonkers (USA) die Sicherheits-Fangvorrichtung für Aufzüge – ohne sie wäre die vertikale Stadt nie entstanden.',
    artworkKey: 'elevator',
  },
  {
    id: 'currywurst-berlin',
    name: 'Currywurst',
    countryId: '276', // Deutschland
    category: 'Kulinarik & Genuss',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1949',
    clueDescription:
      'Eine in Scheiben geschnittene Bratwurst mit würziger Tomatensauce und einer großzügigen Prise gelb-braunem Gewürzpulver darüber.',
    hintText:
      'Herta Heuwer rührte die Sauce 1949 an ihrem Imbissstand im Westen Berlins erstmals zusammen.',
    resolutionFact:
      'Am 4. September 1949 verkaufte Herta Heuwer in Berlin-Charlottenburg (Deutschland) erstmals ihre selbst gemischte Sauce aus Tomatenmark, Gewürzen und Currypulver über gebratener Wurst.',
    artworkKey: 'currywurst',
  },
  {
    id: 'kardangelenk-kardanwelle',
    name: 'Schachtelhalm- bzw. Rechenbrett Abakus (Suánpán)',
    countryId: '156', // China
    category: 'Technik & Medizin',
    difficulty: 'mittel',
    maxPoints: 100,
    era: 'ca. 2. Jh. / 12. Jh.',
    clueDescription:
      'Ein Holzrahmen mit gespannten Stangen voller verschiebbarer Kugeln, unterteilt in einen oberen „Himmel“- und unteren „Erde“-Bereich für blitzschnelles Kopfrechnen.',
    hintText:
      'Mit zwei Kugeln oben (je 5 Einheiten) und fünf unten (je 1 Einheit) perfektioniert für das Dezimal- und Hexadezimalsystem.',
    resolutionFact:
      'Der klassische „Suanpan“-Kugelrahmen wurde in China im Mittelalter standardisiert und erlaubt geübten Rechenmeistern noch heute Geschwindigkeiten schneller als ein Taschenrechner.',
    artworkKey: 'abacus',
  },
  {
    id: 'imax-grossformatkino',
    name: 'IMAX-Großformatkino',
    countryId: '124', // Kanada
    category: 'Spiel & Kultur',
    difficulty: 'mittel',
    maxPoints: 100,
    era: '1967–1970',
    clueDescription:
      'Ein Film- und Projektionssystem mit extrem großformatigem 70-mm-Horizontalfilm für haushohe, leicht gewölbte Leinwände ohne sichtbares Filmkorn.',
    hintText:
      'Vier Filmemacher und Ingenieure gründeten das System nach der Weltausstellung Expo 67 in Montreal.',
    resolutionFact:
      'Graeme Ferguson, Roman Kroitor, Robert Kerr und William C. Shaw entwickelten IMAX Ende der 1960er Jahre in Kanada als Antwort auf mehrteilige Großprojektionen der Expo 67.',
    artworkKey: 'projector',
  },

  // --- NEUE SEHR SCHWER (6 Stück, 200 Pkt / 2× Punkte) ---
  {
    id: 'kaffeepflanze-urheimat',
    name: 'Kultur-Nutzung der Kaffeekirsche (Buna)',
    countryId: '231', // Äthiopien
    category: 'Kulinarik & Genuss',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: 'Frühmittelalter / Traditionell',
    clueDescription:
      'Das Rösten, Zerkleinern und Aufkochen der Kerne einer wilden Hochland-Strauchpflanze – ursprünglich auch mit Butter oder Salz als Energie-Nahrung genutzt.',
    hintText:
      'Laut der berühmten Legende entdeckte der Hirtenjunge Kaldi die belebende Wirkung der roten Beeren im Hochland von Kaffa.',
    resolutionFact:
      'Während die Brühkultur über den Jemen verbreitet wurde, liegt die botanische Urheimat des Arabica-Kaffees und seine erste Nutzung durch Menschen in den Hochländern von Äthiopien.',
    artworkKey: 'coffeeplant',
  },
  {
    id: 'fruehes-radar-telemobiloskop',
    name: 'Telemobiloskop (Vorläufer des Schiffs-Radars)',
    countryId: '276', // Deutschland
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1904',
    clueDescription:
      'Ein Gerät zur Funkortung im dichten Nebel, bei dem ausgesendete Radiowellen an metallischen Schiffsrümpfen abprallen und ein Warnsignal auslösen.',
    hintText:
      'Christian Hülsmeyer führte das Verfahren 1904 auf der Hohenzollernbrücke in Köln vor.',
    resolutionFact:
      'Christian Hülsmeyer patentierte 1904 in Düsseldorf/Köln (Deutschland) das „Telemobiloskop“ – die weltweit erste dokumentierte Funkortung metallischer Schiffe per Funkwellen-Echo.',
    artworkKey: 'radar',
  },
  {
    id: 'magnetresonanztomographie-kontrast-kern',
    name: 'Erste kommerzielle Elektronenmikroskop-Bauart',
    countryId: '276', // Deutschland
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1931–1933',
    clueDescription:
      'Ein Hochleistungs-Mikroskop ohne Lichtlinsen, das stattdessen gebündelte Elektronen durch Magnetspulen lenkt und so erstmals Viren sichtbar machte.',
    hintText:
      'Ernst Ruska erhielt dafür mehr als ein halbes Jahrhundert später den Physik-Nobelpreis.',
    resolutionFact:
      'Ernst Ruska und Max Knoll bauten 1931 an der Technischen Hochschule in Berlin (Deutschland) das erste Elektronenmikroskop – ein Quantensprung weit jenseits der optischen Grenze.',
    artworkKey: 'electronmicroscope',
  },
  {
    id: 'künstliche-niere-dialyse',
    name: 'Erste funktionierende künstliche Niere (Dialysegerät)',
    countryId: '528', // Niederlande
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1943–1945',
    clueDescription:
      'Eine medizinische Apparatur aus einer rotierenden Trommel und Cellophan-Wurstpelle, die im Notfall lebensrettend Giftstoffe aus menschlichem Blut wäscht.',
    hintText:
      'Der Arzt Willem Kolff baute den ersten Prototypen während des Zweiten Weltkriegs in Kampen aus Teilen einer Konservenfabrik und eines Autos.',
    resolutionFact:
      'Willem Johan Kolff konstruierte ab 1943 im niederländischen Kampen (Niederlande) aus Cellophanschläuchen, Holz und Aluminiumteilen eines abgeschossenen Flugzeugs die erste funktionsfähige Dialysemaschine.',
    artworkKey: 'dialysis',
  },
  {
    id: 'erste-programmierung-ada',
    name: 'Erster dokumentierter Computer-Algorithmus',
    countryId: '826', // Großbritannien
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1843',
    clueDescription:
      'Eine schriftlich ausgearbeitete Schritt-für-Schritt-Folge zur Berechnung von Bernoulli-Zahlen für eine noch nie gebaute mechanische Rechenmaschine.',
    hintText:
      'Verfasst 1843 in London von einer Mathematikerin, nach der später sogar eine Programmiersprache benannt wurde.',
    resolutionFact:
      'Ada Lovelace veröffentlichte 1843 in London (Großbritannien) ihre Anmerkungen zu Charles Babbages Analytical Engine – inklusive des ersten Computerprogramms der Menschheitsgeschichte.',
    artworkKey: 'algorithm',
  },
  {
    id: 'pocken-variolation-berichte',
    name: 'Erster weltweiter Herz-Katheterismus (Selbstversuch)',
    countryId: '276', // Deutschland
    category: 'Technik & Medizin',
    difficulty: 'sehr_schwer',
    maxPoints: 200,
    era: '1929',
    clueDescription:
      'Eine waghalsige medizinische Pioniertat, bei der ein dünner Gummischlauch über eine Armvene bis direkt in die rechte Herzkammer geschoben wurde.',
    hintText:
      'Ein junger Assistenzarzt in Eberswalde führte den Katheter 1929 heimlich an sich selbst durch und lief damit eine Treppe zum Röntgengerät hinauf.',
    resolutionFact:
      'Werner Forßmann schob sich 1929 in Eberswalde (Deutschland) im legendären Selbstversuch einen Katheter bis ins eigene Herz und begründete damit die moderne Kardiologie (Nobelpreis 1956).',
    artworkKey: 'catheter',
  },
];

// Deterministic hash for YYYY-MM-DD
function hashDateString(dateStr: string): number {
  let h = 2166136261;
  for (let i = 0; i < dateStr.length; i++) {
    h ^= dateStr.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function createSeededRandom(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithRng<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const PINNED_SHOWCASE_DATE = '2026-11-23';

function parseUtcDayNumber(dateStr: string): number {
  const [y, m, d] = dateStr.split('-').map(Number);
  if (!y || !m || !d) return 0;
  return Math.floor(Date.UTC(y, m - 1, d) / 86400000);
}

// Prebuild a guaranteed non-repeating cycle of days (36+ distinct days, 0 overlapping IDs)
const NON_REPEATING_CYCLE: Invention[][] = (() => {
  const rng = createSeededRandom(hashDateString(PINNED_SHOWCASE_DATE));
  // Exclude the 5 pinned items from PINNED_SHOWCASE_DATE so they never repeat in the next 35+ days
  const pinnedIds = new Set(FULL_INVENTIONS.slice(0, 5).map((i) => i.id));
  const pool = FULL_INVENTIONS.slice(5).filter((i) => !pinnedIds.has(i.id));

  const easyPool = shuffleWithRng(
    pool.filter((i) => i.difficulty === 'einfach'),
    rng
  );
  const mediumPool = shuffleWithRng(
    pool.filter((i) => i.difficulty === 'mittel'),
    rng
  );
  const hardPool = shuffleWithRng(
    pool.filter((i) => i.difficulty === 'sehr_schwer'),
    rng
  );

  const cycleDays = Math.min(
    Math.floor(easyPool.length / 2),
    Math.floor(mediumPool.length / 2),
    hardPool.length
  );

  const pullDistinct = (source: Invention[], usedCountries: Set<string>): Invention => {
    const distinctIdx = source.findIndex((item) => !usedCountries.has(item.countryId));
    const idx = distinctIdx !== -1 ? distinctIdx : 0;
    const [picked] = source.splice(idx, 1);
    usedCountries.add(picked.countryId);
    return picked;
  };

  const deck: Invention[][] = [];
  for (let day = 0; day < cycleDays; day++) {
    const usedCountries = new Set<string>();
    const daySet: Invention[] = [
      pullDistinct(easyPool, usedCountries),
      pullDistinct(easyPool, usedCountries),
      pullDistinct(mediumPool, usedCountries),
      pullDistinct(mediumPool, usedCountries),
      pullDistinct(hardPool, usedCountries),
    ];
    deck.push(daySet);
  }
  return deck;
})();

export function getDailyInventions(dateStr: string): Invention[] {
  // Showcase date uses the 5 bespoke flagship items (2 einfach, 2 mittel, 1 sehr_schwer)
  if (dateStr === PINNED_SHOWCASE_DATE) {
    return [
      FULL_INVENTIONS[0],
      FULL_INVENTIONS[1],
      FULL_INVENTIONS[2],
      FULL_INVENTIONS[3],
      FULL_INVENTIONS[4],
    ];
  }

  const offset = parseUtcDayNumber(dateStr) - parseUtcDayNumber(PINNED_SHOWCASE_DATE);
  const totalCycleDays = NON_REPEATING_CYCLE.length;
  if (totalCycleDays === 0) {
    return FULL_INVENTIONS.slice(0, 5);
  }

  // Positive offsets walk sequentially forward through NON_REPEATING_CYCLE (36+ unique days, 0 repeats)
  const slotIndex =
    offset > 0
      ? (offset - 1) % totalCycleDays
      : ((offset % totalCycleDays) + totalCycleDays) % totalCycleDays;

  return NON_REPEATING_CYCLE[slotIndex];
}

export function getLocalizedInvention(invention: Invention, lang: AppLanguage): Invention {
  if (lang !== 'en') return invention;
  const en = INVENTIONS_EN[invention.id];
  if (!en) return invention;
  return {
    ...invention,
    name: en.name,
    era: en.era,
    clueDescription: en.clueDescription,
    hintText: en.hintText ?? invention.hintText,
    resolutionFact: en.resolutionFact,
  };
}

export function getCategoryLabel(category: InventionCategory, lang: AppLanguage): string {
  return CATEGORY_LABELS_BY_LANG[lang][category] ?? category;
}

export function getDifficultyLabel(difficulty: DifficultyTier, lang: AppLanguage): string {
  return DIFFICULTY_LABELS_BY_LANG[lang][difficulty] ?? DIFFICULTY_LABELS[difficulty];
}

export const HINT_SCORE_MULTIPLIER = 0.75;

export function getEffectiveMaxPoints(invention: Invention, hintUsed: boolean): number {
  return hintUsed ? Math.round(invention.maxPoints * HINT_SCORE_MULTIPLIER) : invention.maxPoints;
}

export function getInventionHint(
  invention: Invention,
  regionLabel: string,
  lang: AppLanguage = 'de'
): string {
  const base =
    lang === 'en'
      ? `Continent: ${regionLabel} · Era: ${invention.era}`
      : `Kontinent: ${regionLabel} · Zeitraum: ${invention.era}`;
  return invention.hintText ? `${base} — ${invention.hintText}` : base;
}

export function calculateRoundScore(
  invention: Invention,
  solved: boolean,
  attemptsUsed: number,
  hintUsed = false
): number {
  if (!solved) return 0;
  // Attempt 1 = 100%, 2 = 88%, 3 = 76%, 4 = 64%, 5 = 52%, 6 = 40%, 7 = 28%
  const factor = Math.max(0.28, 1 - (attemptsUsed - 1) * 0.12);
  const effectiveMax = getEffectiveMaxPoints(invention, hintUsed);
  return Math.round(effectiveMax * factor);
}
