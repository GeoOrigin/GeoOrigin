export interface InventionTranslationEn {
  name: string;
  era: string;
  clueDescription: string;
  hintText?: string;
  resolutionFact: string;
}

export const INVENTIONS_EN: Record<string, InventionTranslationEn> = {
  'pommes-frites': {
    name: 'French Fries',
    era: 'Late 17th century',
    clueDescription:
      'Twice-fried potato batons cooked in hot fat until crisp outside and tender inside – often served in paper cones around the world.',
    hintText:
      'Originated along the banks of the Meuse when fishermen looked for a winter substitute for small fried river fish.',
    resolutionFact:
      'Despite the English name "French Fries", deep-fried potato strips originated in Belgium: near Namur and Liège in the late 17th century, locals reportedly fried potatoes instead of small fish when rivers froze over.',
  },
  schach: {
    name: 'Chess',
    era: '6th century',
    clueDescription:
      'A two-player strategy board game on 64 alternating light and dark squares featuring king, queen, rooks, bishops, knights, and pawns.',
    hintText:
      'The earliest version was called "Chaturanga" and emerged during the Gupta Golden Age, modeled after a four-branch army.',
    resolutionFact:
      'Its predecessor "Chaturanga" arose in the 6th century in the Gupta Empire of northern India, with pieces representing four military divisions: infantry, cavalry, elephants, and chariots.',
  },
  croissant: {
    name: 'Croissant',
    era: '17th century (Kipferl)',
    clueDescription:
      'A crescent-shaped, flaky laminated pastry made from many paper-thin layers of dough and butter, now a breakfast staple worldwide.',
    hintText:
      'Its direct forerunner was called the "Kipferl" and was brought to Paris in the 19th century by a baker from this Alpine country.',
    resolutionFact:
      'Though famous as a French classic, its direct ancestor is the Viennese Kipferl from the 17th century. Austrian baker August Zang introduced it to Paris in 1839 at his "Boulangerie Viennoise".',
  },
  zauberwuerfel: {
    name: "Rubik's Cube",
    era: '1974',
    clueDescription:
      'A 3D mechanical combination puzzle made of 26 moving sub-cubes with six colored faces and more than 43 quintillion possible states.',
    hintText:
      'An architecture professor at a technical university along the Danube designed the prototype in 1974 for his geometry classes.',
    resolutionFact:
      'Architecture professor Ernő Rubik built the cube in 1974 in Budapest (Hungary) as a spatial teaching model for his students—only to realize how remarkably hard it was to twist back.',
  },
  flugschreiber: {
    name: 'Flight Recorder (Black Box)',
    era: '1953–1957',
    clueDescription:
      'An impact-, fire-, and pressure-resistant device recording cockpit voices and flight data – despite its nickname, usually painted bright orange.',
    hintText:
      'A chemist at an aeronautical research laboratory in the Southern Hemisphere developed the prototype from 1953 after mysterious crashes.',
    resolutionFact:
      'Chemist David Warren invented the first combined flight-data and cockpit voice recorder starting in 1953 in Melbourne (Australia) after investigating the unexplained crashes of the Comet jetliner.',
  },
  'kaffee-gebrueht': {
    name: 'Brewed Coffee',
    era: '15th century',
    clueDescription:
      'A dark, caffeinated hot drink brewed from roasted and ground seeds of a tropical cherry, enjoyed every morning by billions of people.',
    resolutionFact:
      'While the coffee plant grows wild in Ethiopia, roasting the beans and brewing the beverage ("qahwa") was pioneered in 15th-century Sufi monasteries in Yemen and spread globally from the port of Mocha.',
  },
  jeans: {
    name: 'Blue Jeans',
    era: '1873',
    clueDescription:
      'Sturdy work trousers made from indigo-dyed cotton twill, distinctively reinforced at pocket stress points with small metal rivets.',
    resolutionFact:
      'Although the word "denim" echoes Nîmes and "jeans" Genoa, the patent for copper-riveted blue work pants was granted in 1873 in the United States to Levi Strauss and Jacob Davis.',
  },
  lego: {
    name: 'Interlocking Toy Bricks (Lego)',
    era: '1958',
    clueDescription:
      'Precision-molded plastic building bricks with round studs on top and hollow tubes underneath that snap together in countless combinations.',
    resolutionFact:
      'Master carpenter Ole Kirk Christiansen founded the company in 1932 in Billund, Denmark, where the modern stud-and-tube coupling brick was patented in 1958.',
  },
  'gutenberg-presse': {
    name: 'Movable-Type Printing Press',
    era: 'c. 1450',
    clueDescription:
      'A mechanical screw press allowing individually cast metal letters to be arranged, inked, and reused to print entire book pages rapidly.',
    resolutionFact:
      'Around 1450 in Mainz (Germany), Johannes Gutenberg combined a hand mold, durable metal alloy, oil-based ink, and a screw press—sparking the European printing revolution.',
  },
  kompass: {
    name: 'Magnetic Compass',
    era: '11th century',
    clueDescription:
      'A navigation instrument with a freely pivoting magnetized needle that reliably points north even in dense fog or on the open ocean.',
    resolutionFact:
      'Lodestone pointers were known in ancient China, and during the Song dynasty in the 11th century Chinese navigators developed the first magnetized needle compass for sea voyages.',
  },
  klavier: {
    name: 'Piano',
    era: 'c. 1700',
    clueDescription:
      'A keyboard instrument in which small felt-covered hammers strike taut strings, allowing players to vary volume from soft to loud by touch.',
    resolutionFact:
      'Around 1700 in Florence (Italy), Bartolomeo Cristofori built the "gravicembalo col piano e forte" (literally "harpsichord with soft and loud"), giving the modern piano its name.',
  },
  taschenmesser: {
    name: 'Swiss Army Pocket Knife',
    era: '1891–1897',
    clueDescription:
      'A compact folding multi-tool with iconic red scales housing a blade alongside tools like a corkscrew, scissors, awl, and can opener.',
    resolutionFact:
      'Cutler Karl Elsener developed the soldier’s and officer’s pocket knife from 1891 in Ibach (Switzerland), turning it into a global icon of compact utility.',
  },
  sauna: {
    name: 'Smoke & Steam Sauna',
    era: 'Ancient / Traditional',
    clueDescription:
      'A wood-lined sweat bath where water is ladled over superheated stones to create waves of dry or steamy heat at 80–100 °C.',
    resolutionFact:
      '"Sauna" is one of the very few Finno-Ugric words adopted across nearly all world languages—rooted in millennia-old bathing traditions in Finland.',
  },
  dynamit: {
    name: 'Dynamite',
    era: '1867',
    clueDescription:
      'A stabilized high explosive formed by absorbing liquid nitroglycerin into an inert porous powder and wrapping it into sticks with a blasting cap.',
    resolutionFact:
      'Alfred Nobel invented dynamite in 1867 in Sweden after his younger brother was killed in a nitroglycerin lab explosion; the fortune from its patents later endowed the Nobel Prizes.',
  },
  penicillin: {
    name: 'Penicillin (Antibiotic)',
    era: '1928',
    clueDescription:
      'A life-saving antibacterial medicine discovered by chance when a green mold accidentally contaminated a forgotten Petri dish.',
    resolutionFact:
      'In 1928 in London (United Kingdom), Alexander Fleming noticed that a Penicillium mold colony on a forgotten culture plate dissolved surrounding bacteria.',
  },
  teleskop: {
    name: 'Refracting Telescope',
    era: '1608',
    clueDescription:
      'An optical tube fitted with ground glass lenses at each end to magnify distant ships, lunar craters, and planets.',
    resolutionFact:
      'Spectacle maker Hans Lippershey filed the earliest documented patent application for a refracting spyglass in 1608 in Middelburg (Netherlands), a year before Galileo built his own.',
  },
  heissluftballon: {
    name: 'Hot Air Balloon',
    era: '1783',
    clueDescription:
      'A giant fabric envelope open at the bottom above a wicker basket that rises silently into the sky when heated air fills the canopy.',
    resolutionFact:
      'Papermakers Joseph-Michel and Jacques-Étienne Montgolfier launched the first crewed hot air balloon flights in 1783 in Annonay and Paris (France).',
  },
  tetris: {
    name: 'Tetris',
    era: '1984',
    clueDescription:
      'A classic tile-matching puzzle game in which four-square geometric shapes descend from above to form complete horizontal lines.',
    resolutionFact:
      'Computer scientist Alexey Pajitnov created Tetris in 1984 in Moscow (Russia / Soviet Union) on an Electronika 60 computer during his spare time.',
  },
  'instant-nudeln': {
    name: 'Instant Noodles',
    era: '1958',
    clueDescription:
      'Pre-cooked, flash-dried curly wheat noodles with a seasoning packet that become a hot meal three minutes after adding boiling water.',
    resolutionFact:
      'Momofuku Ando invented "Chikin Ramen" in 1958 in Ikeda near Osaka (Japan) using flash-frying in palm oil—creating one of the world’s best-selling foods.',
  },
  kartoffel: {
    name: 'Domesticated Potato',
    era: 'c. 8000–5000 BCE',
    clueDescription:
      'A starchy underground tuber grown in thousands of varieties that reached Europe only millennia after its first cultivation.',
    resolutionFact:
      'Indigenous communities in the high Andes around Lake Titicaca (modern-day Peru) domesticated the wild potato over 7,000 years ago, breeding thousands of distinct cultivars.',
  },
  'schokolade-kakao': {
    name: 'Cacao Drink & Chocolate Preparation',
    era: 'c. 1900 BCE',
    clueDescription:
      'A preparation made from fermented, roasted, and finely ground seeds of a tropical pod fruit—originally whisked into a bitter frothy drink.',
    resolutionFact:
      'The Olmecs, Maya, and Aztecs in what is now Mexico cultivated cacao trees, roasted the beans, and prized the frothy drink "xocolātl" as both sacred ritual and currency.',
  },
  bumerang: {
    name: 'Returning Boomerang',
    era: 'Over 10,000 years ago',
    clueDescription:
      'A curved, aerodynamically cambered throwing stick whose airfoil profile makes it trace a wide arc in the air and return to the thrower.',
    resolutionFact:
      'While ancient throwing sticks existed elsewhere, Aboriginal peoples in Australia perfected the curved returning boomerang for hunting, sport, and ceremony.',
  },
  papyrus: {
    name: 'Papyrus (Writing Material)',
    era: 'c. 3000 BCE',
    clueDescription:
      'Thin, flexible sheets formed by pressing criss-crossed strips of pith from a tall riverside reed—the primary writing surface of the ancient world.',
    resolutionFact:
      'In ancient Egypt, stalks of Nile papyrus sedge were sliced into strips, layered at right angles, pressed, and glued into long scrolls.',
  },
  krawatte: {
    name: 'Necktie (Cravat)',
    era: '17th century',
    clueDescription:
      'A narrow band of woven cloth worn under a shirt collar and knotted at the throat—today the classic hallmark of formal attire.',
    resolutionFact:
      'The French word "cravate" comes from "à la croate": during the Thirty Years’ War, mercenaries from Croatia caught the attention of King Louis XIII’s court with their knotted neckcloths.',
  },
  'tulpen-kultivierung': {
    name: 'Garden Tulip Cultivation',
    era: '16th century',
    clueDescription:
      'A striking spring bulb flower with cup-shaped vivid petals that later sparked an infamous financial bubble in another European country.',
    resolutionFact:
      'Although closely associated with Holland today, selective garden breeding of the tulip ("lale") flourished in the Ottoman Empire (modern Turkey) before bulbs reached Vienna and Leiden in 1554.',
  },
  insulin: {
    name: 'Medical Insulin',
    era: '1921',
    clueDescription:
      'A vital hormone therapy that regulates blood sugar levels, turning a previously fatal metabolic disease into a treatable condition.',
    resolutionFact:
      'Frederick Banting and Charles Best isolated insulin in 1921 at the University of Toronto (Canada), saving a 14-year-old diabetic boy shortly afterward.',
  },
  klettverschluss: {
    name: 'Hook-and-Loop Fastener (Velcro)',
    era: '1941–1951',
    clueDescription:
      'A two-strip fastener pairing tiny stiff plastic hooks with soft fuzzy loops that lock together tightly and peel apart with a crisp rip.',
    resolutionFact:
      'Swiss engineer George de Mestral got frustrated by burdock burrs clinging to his dog’s fur after a 1941 walk in Switzerland, examined their tiny hooks under a microscope, and invented Velcro.',
  },
  shampoo: {
    name: 'Shampoo (Hair Wash)',
    era: '18th century (Champu)',
    clueDescription:
      'A cleansing liquid made from natural surfactants and botanical extracts used to massage and wash hair and scalp.',
    resolutionFact:
      'The word comes from the Hindi "chāmpū" (to knead/massage). People in India washed hair with soapnut extracts and herbs long before Sake Dean Mahomed popularized it in England in 1814.',
  },
  kugelschreiber: {
    name: 'Modern Ballpoint Pen',
    era: '1938',
    clueDescription:
      'A writing instrument with a tiny rotating metal ball at its tip that rolls viscous, quick-drying ink smoothly onto paper.',
    resolutionFact:
      'Hungarian journalist László József Bíró noticed how fast newspaper ink dried and patented the first practical ballpoint pen in 1938 in Budapest (Hungary).',
  },
  schneekugel: {
    name: 'Snow Globe',
    era: '1900',
    clueDescription:
      'A clear water-filled glass sphere enclosing a miniature scene where white flakes drift gently down whenever shaken.',
    resolutionFact:
      'Viennese surgical-instrument maker Erwin Perzy was trying to brighten the dim light of early electric bulbs in 1900 in Austria when he accidentally created the first snow globe.',
  },
  wischmopp: {
    name: 'Mop with Wringer Bucket',
    era: '1956',
    clueDescription:
      'A long-handled floor cleaning tool with an absorbent fringed head squeezed dry inside a perforated bucket cone without bending down.',
    resolutionFact:
      'Aerospace engineer Manuel Jalón Corominas saw cleaners scrubbing floors on their knees in 1956 in Spain and invented the "fregona"—the modern mop-and-wringer bucket.',
  },
  tischfussball: {
    name: 'Foosball (Table Soccer)',
    era: '1937',
    clueDescription:
      'A rectangular table game with eight rotating metal rods lined with miniature players used to flick a small ball into the opponent’s goal.',
    resolutionFact:
      'Injured Spanish poet Alejandro Finisterre invented the modern "futbolín" in 1937 in a Madrid hospital (Spain) so children wounded during the Civil War could still play soccer.',
  },
  dreipunktgurt: {
    name: 'Three-Point Seatbelt',
    era: '1959',
    clueDescription:
      'A single-buckle vehicle harness crossing both chest and lap diagonally that has saved millions of lives in road collisions.',
    resolutionFact:
      'Engineer Nils Bohlin designed the V-shaped three-point seatbelt in 1959 in Sweden for Volvo, which immediately opened the patent royalty-free to every automaker.',
  },
  schraubenschluessel: {
    name: 'Adjustable Wrench',
    era: '1892',
    clueDescription:
      'A heavy steel hand tool with a knurled worm screw in the head that smoothly adjusts its jaw width to fit different nut sizes.',
    resolutionFact:
      'Inventor Johan Petter Johansson patented the modern adjustable "Skiftnyckel" in 1892 in Enköping (Sweden)—still known in many places as the Swedish wrench.',
  },
  stethoskop: {
    name: 'Stethoscope',
    era: '1816',
    clueDescription:
      'An acoustic medical listening device with earpieces and a chest piece used to hear heartbeats and lung sounds clearly.',
    resolutionFact:
      'Parisian physician René Laënnec invented the stethoscope in 1816 in France out of modesty when examining a young female patient—rolling up a sheet of paper into a listening tube.',
  },
  brailleschrift: {
    name: 'Braille Tactile Alphabet',
    era: '1825',
    clueDescription:
      'A reading and writing system of up to six raised dots arranged in a small cell, read swiftly with the fingertips.',
    resolutionFact:
      'At just 16 years old, blind student Louis Braille developed the 6-dot tactile code in 1825 in Paris (France)—now adapted for almost every language and musical notation.',
  },
  batterie: {
    name: 'Electric Battery (Voltaic Pile)',
    era: '1800',
    clueDescription:
      'A vertical stack of alternating metal discs and brine-soaked separators that produced the first steady electric current.',
    resolutionFact:
      'In 1800 in Como (Italy), Alessandro Volta stacked alternating zinc and copper discs separated by salt-water cloth to build the Voltaic pile—giving his name to the volt.',
  },
  brille: {
    name: 'Eyeglasses (Spectacles)',
    era: 'c. 1286',
    clueDescription:
      'Two ground convex lenses mounted in a frame before the eyes, originally helping aging scholars and monks read fine manuscripts.',
    resolutionFact:
      'The earliest documented wearable spectacles appeared around 1286 in northern Italy (likely Pisa or Venice), drawing on Venetian glassmakers’ lens-grinding mastery.',
  },
  aspirin: {
    name: 'Aspirin (Acetylsalicylic Acid)',
    era: '1897',
    clueDescription:
      'A familiar white pain-relieving and fever-reducing tablet whose active compound was inspired by willow bark and chemically refined.',
    resolutionFact:
      'In 1897 in Wuppertal-Elberfeld (Germany), chemist Felix Hoffmann (alongside Arthur Eichengrün) synthesized pure, stable acetylsalicylic acid for medical use.',
  },
  thermoskanne: {
    name: 'Vacuum Flask (Thermos)',
    era: '1892',
    clueDescription:
      'A double-walled container with an evacuated space and silvered inner walls that keeps drinks piping hot or icy cold for hours.',
    resolutionFact:
      'Scottish physicist Sir James Dewar invented the silvered vacuum flask in 1892 in London (United Kingdom) to keep liquefied gases like hydrogen cold in his laboratory.',
  },
  korkenzieher: {
    name: 'Corkscrew',
    era: '1795 (first patent)',
    clueDescription:
      'A hardened metal helix attached to a handle or lever used to pull tight bark stoppers cleanly out of glass bottles.',
    resolutionFact:
      'Adapted from gun-worm cleaning tools, the first dedicated bottle corkscrew patent was granted in 1795 to English reverend Samuel Henshall in the United Kingdom.',
  },
  kassette: {
    name: 'Compact Cassette Tape',
    era: '1963',
    clueDescription:
      'A pocket-sized plastic shell holding two small reels of narrow magnetic tape that let generations record their own mixtapes.',
    resolutionFact:
      'Engineer Lou Ottens and his Philips team in Eindhoven (Netherlands, with Hasselt) unveiled the Compact Cassette in 1963—famously sized to fit a jacket pocket.',
  },
  'qr-code': {
    name: 'QR Code',
    era: '1994',
    clueDescription:
      'A square black-and-white matrix barcode with three distinct corner finder squares that stores links, tickets, and payment data.',
    resolutionFact:
      'Masahiro Hara invented the "Quick Response" code in 1994 in Japan at Denso Wave—inspired by the board game Go—to track automotive parts faster.',
  },
  emoji: {
    name: 'Emoji Character Set',
    era: '1999',
    clueDescription:
      'Standardized pictorial icons for faces, weather, food, and hearts embedded directly inside digital text messages.',
    resolutionFact:
      'Designer Shigetaka Kurita created the first 176 color 12×12-pixel emoji in 1999 in Japan for early mobile internet phones ("i-mode"), combining "e" (picture) and "moji" (character).',
  },
  'null-ziffer': {
    name: 'Zero as a True Number',
    era: '5th–7th century',
    clueDescription:
      'A mathematical symbol for "nothing" with arithmetic rules that made positional notation, accounting, and digital computing possible.',
    resolutionFact:
      'While earlier cultures used empty placeholders, Indian mathematician Brahmagupta formally defined zero ("shunya") as an independent number with arithmetic rules in the 7th century in India.',
  },
  papiergeld: {
    name: 'State-Issued Paper Money',
    era: 'c. 1024',
    clueDescription:
      'Printed plant-fiber notes bearing official face value that replaced heavy sacks of copper and silver coins in daily trade.',
    resolutionFact:
      'After Sichuan merchants used private deposit receipts ("jiaozi"), the Song dynasty government in China issued the world’s first official state paper currency in 1024.',
  },
  'doener-fladenbrot': {
    name: 'Döner Kebab in Flatbread (Fast-Food Style)',
    era: 'c. 1972',
    clueDescription:
      'Shaved vertical-rotisserie meat tucked inside a warm pocket of flatbread with crisp salad and sauce as a grab-and-go street meal.',
    resolutionFact:
      'While the vertical spit originated in the Ottoman Empire, the portable "in flatbread to-go" street-food format was pioneered in the early 1970s by Turkish immigrants in West Berlin (Germany).',
  },
  muenzgeld: {
    name: 'Stamped Metal Coins',
    era: 'c. 600 BCE',
    clueDescription:
      'Standardized discs of gold-silver alloy stamped with a ruler’s seal to guarantee exact weight and monetary value.',
    resolutionFact:
      'In the ancient Kingdom of Lydia—in western modern-day Turkey—the first standardized electrum (gold-silver) coins were minted around 600 BCE.',
  },
  herztransplantation: {
    name: 'First Human-to-Human Heart Transplant',
    era: '1967',
    clueDescription:
      'A landmark surgical operation in which a failing human heart was replaced for the first time with a healthy donor heart.',
    resolutionFact:
      'On December 3, 1967, surgeon Christiaan Barnard performed the world’s first successful human-to-human heart transplant at Groote Schuur Hospital in Cape Town (South Africa).',
  },
  rooibos: {
    name: 'Rooibos Tea',
    era: 'Centuries old / 1904 commercial',
    clueDescription:
      'A naturally caffeine-free, mildly sweet, ruby-red herbal infusion brewed from the fermented needle-like leaves of one mountain shrub.',
    resolutionFact:
      'Aspalathus linearis grows natively only in the Cederberg mountains of South Africa’s Western Cape, where the Khoisan people harvested and brewed its leaves for centuries.',
  },
  'sms-konzept': {
    name: 'SMS Text Messaging',
    era: '1984 / 1992',
    clueDescription:
      'A service for sending short 160-character messages over spare signaling channels of mobile networks—famously conceived over pizza.',
    resolutionFact:
      'Finnish engineer Matti Makkonen outlined the idea of sending text messages over GSM mobile networks in 1984 (Finland), building on collaborative European GSM standards.',
  },
  algebra: {
    name: 'Algebra (as a Formal Discipline)',
    era: 'c. 820 CE',
    clueDescription:
      'A branch of mathematics that solves equations with unknowns systematically by balancing and transposing terms ("al-jabr").',
    resolutionFact:
      'At Baghdad’s House of Wisdom (modern Iraq), scholar Al-Khwarizmi wrote the foundational treatise on "al-jabr" around 820 CE—and his name also gave us the word "algorithm".',
  },
  'alphabet-phonetisch': {
    name: 'Phonetic Alphabet',
    era: 'c. 1050 BCE',
    clueDescription:
      'A compact script of around 22 abstract signs representing single spoken sounds rather than whole words—ancestor of modern alphabets.',
    resolutionFact:
      'Phoenician mariners and merchants from cities such as Byblos, Sidon, and Tyre (modern Lebanon) spread this phonetic alphabet across the Mediterranean to Greece and beyond.',
  },
  tempura: {
    name: 'Tempura Frying Technique',
    era: '16th century',
    clueDescription:
      'Vegetables or seafood dipped in an airy, ice-cold batter and deep-fried briefly until crisp and golden.',
    resolutionFact:
      'Often assumed purely Japanese, this light batter-frying method was brought to Nagasaki in the 16th century by missionaries and traders from Portugal for Ember Days ("Quatuor Tempora").',
  },
  leuchtturm: {
    name: 'Monumental Lighthouse',
    era: 'c. 280 BCE',
    clueDescription:
      'A towering coastal beacon crowned with a bright flame and mirrors to guide ships safely past reefs into harbor at night.',
    resolutionFact:
      'The Pharos of Alexandria in Egypt—one of the Seven Wonders of the Ancient World—stood over 100 meters tall and projected firelight miles across the Mediterranean with polished mirrors.',
  },
  'kaugummi-urform': {
    name: 'Natural Chicle Chewing Gum',
    era: 'Ancient / 1860s',
    clueDescription:
      'An elastic chew made from the boiled milky sap of the sapodilla tree, chewed for centuries to freshen breath and stave off thirst.',
    resolutionFact:
      'Aztecs and Maya in what is now Mexico chewed natural chicle ("tzictli"); exiled general Santa Anna later introduced the sap to a New York inventor in 1869, launching modern chewing gum.',
  },
  'katapult-wecker': {
    name: 'Mechanical Water Alarm Clock',
    era: 'c. 400 BCE',
    clueDescription:
      'An early timekeeping device using rising water pressure to blow a loud whistle after a set period, waking students on time.',
    resolutionFact:
      'Philosopher Plato is credited with building a water-powered alarm clock at his Academy in Athens (Greece) that forced air through pipes like a whistle at dawn.',
  },
  mikrowelle: {
    name: 'Microwave Oven',
    era: '1945',
    clueDescription:
      'A kitchen appliance that heats food rapidly without a hot burner by using invisible electromagnetic waves to vibrate water molecules.',
    resolutionFact:
      'In 1945 in Massachusetts (United States), radar engineer Percy Spencer noticed a chocolate bar melting in his pocket beside a magnetron—and soon built the first microwave oven.',
  },
  gummireifen: {
    name: 'Pneumatic Rubber Tire',
    era: '1888',
    clueDescription:
      'An air-filled rubber ring mounted around a wheel rim to cushion jolts and bumps on rough cobblestone roads.',
    resolutionFact:
      'Veterinarian John Boyd Dunlop fashioned air-filled rubber tubes from garden hose in 1888 in Belfast (United Kingdom) for his son’s tricycle to ride faster over cobblestones.',
  },
  'muellsack-plastik': {
    name: 'Polyethylene Trash Bag',
    era: '1950',
    clueDescription:
      'A tear-resistant, waterproof bag made from thin plastic film to seal household waste hygienically—originally produced in bright green.',
    resolutionFact:
      'Harry Wasylyk and Larry Hansen invented the green polyethylene garbage bag in 1950 in Winnipeg (Canada), initially for a local hospital before it conquered kitchens worldwide.',
  },
  metallbuchdruck: {
    name: 'Oldest Surviving Movable Metal-Type Book',
    era: '1377',
    clueDescription:
      'A religious book printed more than 70 years before Gutenberg using individually cast movable metal type characters.',
    resolutionFact:
      'The Buddhist text "Jikji" was printed in 1377 at Heungdeok Temple near Cheongju (modern South Korea) with cast movable metal type and is now UNESCO Memory of the World.',
  },
  karaoke: {
    name: 'Karaoke Machine',
    era: '1971',
    clueDescription:
      'A playback unit with microphones and lyrics display that plays instrumental backing tracks of hit songs for anyone to sing along.',
    resolutionFact:
      'Musician Daisuke Inoue built the first coin-operated "8 Juke" karaoke machines in 1971 in Kobe (Japan); "kara-oke" literally means "empty orchestra".',
  },
  windmuehle: {
    name: 'Vertical-Axis Windmill',
    era: 'c. 7th–9th century',
    clueDescription:
      'A wind-driven structure using reed sails around a vertical shaft to grind grain directly or lift irrigation water.',
    resolutionFact:
      'Centuries before European tower windmills, engineers in the Sistan region (modern Iran) built vertical-axis windmills with reed sails from the 7th century onward.',
  },
  'weihnachtsbaum-kugel': {
    name: 'Glass Christmas Ornament (Bauble)',
    era: '1847',
    clueDescription:
      'A feather-light, silvered and brightly painted hollow glass sphere hung by a small metal cap from evergreen branches.',
    resolutionFact:
      'In the Thuringian glassblowing town of Lauscha (Germany), artisans began blowing decorative glass baubles in 1847—reportedly after a glassblower could not afford real apples or nuts.',
  },
  skateboard: {
    name: 'Skateboard',
    era: 'c. 1950s',
    clueDescription:
      'A curved wooden deck mounted on two metal trucks and four small wheels, invented for "sidewalk surfing" on flat-wave days.',
    resolutionFact:
      'In the late 1950s in California (United States), surfers bolted roller-skate trucks to narrow wooden planks so they could carve turns on asphalt whenever the ocean went flat.',
  },
  lutscher: {
    name: 'Modern Lollipop on a Stick (Chupa Chups)',
    era: '1958',
    clueDescription:
      'A round hard-candy sphere mounted on a white stick so kids wouldn’t get sticky fingers—its daisy logo was drawn by a surrealist master.',
    resolutionFact:
      'Enric Bernat launched the modern spherical lollipop in 1958 in Barcelona (Spain) and commissioned Salvador Dalí in 1969 to design its famous daisy wrapper logo.',
  },
  'kettensaege-vorlaeufer': {
    name: 'Hand-Cranked Chain Saw (Osteotome)',
    era: '1830',
    clueDescription:
      'A slim cutting instrument with a toothed loop chain—now used in forestry and gardening, yet originally invented for a startlingly different field.',
    resolutionFact:
      'Believe it or not, German orthopedist Bernhard Heine invented the hand-cranked chain-saw "osteotome" in 1830 in Würzburg (Germany) as a surgical tool for cutting bone cleanly.',
  },
  fuellfederhalter: {
    name: 'Fountain Pen with Ink Reservoir',
    era: '1827',
    clueDescription:
      'A nibbed writing pen housing an internal ink chamber in the barrel so you can write pages without dipping into an inkwell.',
    resolutionFact:
      'Inventor Petrache Poenaru from Craiova (modern Romania) patented his "endless portable fountain pen" with an internal ink reservoir in 1827.',
  },
  'fingerabdruck-kriminalistik': {
    name: 'Forensic Fingerprint Classification',
    era: '1891–1892',
    clueDescription:
      'A criminal-investigation method cataloging the unique whorls, loops, and arches on human fingertips to identify suspects.',
    resolutionFact:
      'Juan Vucetich created the first practical police fingerprint registry ("dactyloscopy") in 1891 in La Plata (Argentina) and solved the world’s first murder case via fingerprints in 1892.',
  },
  'farbfernsehen-rad': {
    name: 'First Patented Color Television System',
    era: '1940',
    clueDescription:
      'An electromechanical broadcast method using a rapidly spinning three-color filter wheel in front of camera and CRT to display live color.',
    resolutionFact:
      'At only 23 years old, electrical engineer Guillermo González Camarena invented the "chromoscopic adapter" in 1940 in Mexico City (Mexico), earning the world’s first color-TV patent.',
  },
  schiffsschraube: {
    name: 'Practical Ship Propeller',
    era: '1827',
    clueDescription:
      'An underwater bladed screw mounted at a vessel’s stern that drives ships far more efficiently than bulky side paddle wheels.',
    resolutionFact:
      'Austrian forester and inventor Josef Ressel patented the submerged screw propeller in 1827 in Vienna (Austria) and tested it successfully on the steamship Civetta in 1829.',
  },
  'herzschrittmacher-implantierbar': {
    name: 'Implantable Cardiac Pacemaker',
    era: '1958',
    clueDescription:
      'A tiny battery-powered electronic device placed beneath the skin that delivers gentle electrical pulses to maintain a steady heartbeat.',
    resolutionFact:
      'Engineer Rune Elmqvist built the first fully implantable pacemaker in 1958 in Stockholm (Sweden)—initially cast in a shoe-polish tin—allowing patient Arne Larsson to live over 40 more years.',
  },
  'wifi-grundpatent': {
    name: 'Wi-Fi Multipath Signal Technology (Core Patent)',
    era: '1992–1996',
    clueDescription:
      'A mathematical radio-processing method that untangles indoor reflected signals, making fast wireless computer networks possible.',
    resolutionFact:
      'Born out of radio astronomy: Dr. John O’Sullivan and his CSIRO team in Sydney (Australia) were searching for exploding black holes when they created the core patent behind modern Wi-Fi.',
  },
  holografie: {
    name: 'Holography',
    era: '1947',
    clueDescription:
      'A technique capturing light-wave interference patterns so 3D images appear to float in space on banknotes, IDs, and artwork.',
    resolutionFact:
      'Budapest-born physicist Dennis Gabor (Dénes Gábor, Hungary) formulated holography in 1947 while trying to sharpen electron microscopes, winning the 1971 Nobel Prize.',
  },
  'u-boot-erstes': {
    name: 'First Navigable Submarine',
    era: '1620',
    clueDescription:
      'A watertight wooden vessel wrapped in greased leather that could dive beneath the surface, row for hours underwater, and resurface.',
    resolutionFact:
      'Dutch inventor Cornelis Drebbel from Alkmaar (Netherlands) built the first working navigable submarine in 1620 and demonstrated it under the Thames before King James I.',
  },
  'antibabypille-synthese': {
    name: 'Synthetic Oral Contraceptive Hormone',
    era: '1951',
    clueDescription:
      'A synthetic progestin (norethisterone) derived from wild yams that enabled one of the most socially transformative medicines of the 20th century.',
    resolutionFact:
      'Young chemist Luis E. Miramontes synthesized norethisterone in 1951 at Syntex in Mexico City (Mexico)—the key active compound in the first birth control pill.',
  },
  'katheter-urologie': {
    name: 'Preheated Carbon-Steel Smelting Furnace',
    era: 'c. 2,000 years ago',
    clueDescription:
      'Clay blast furnaces using preheated air tuyères that reached over 1,800 °C to smelt high-grade carbon steel long before Europe.',
    resolutionFact:
      'Archaeologists along the western shore of Lake Victoria in modern Tanzania found that ancestors of the Haya people forged true carbon steel 2,000 years ago using preheated blast furnaces.',
  },
  'katalysator-einfrieren': {
    name: 'Freeze-Dried Food Preservation (Chuño)',
    era: 'Over 1,000 years ago',
    clueDescription:
      'A preservation technique where tubers freeze overnight in high mountain frost, thaw and dry in bright daytime sun, and last for decades.',
    resolutionFact:
      'The Inca and earlier Andean peoples in Peru perfected natural freeze-drying ("chuño") to store vast emergency food reserves across mountain settlements for years.',
  },
  margarine: {
    name: 'Margarine',
    era: '1869',
    clueDescription:
      'A spreadable table fat created in response to a government prize seeking an affordable, shelf-stable butter substitute for sailors and troops.',
    resolutionFact:
      'After Emperor Napoleon III offered a prize in 1869, French chemist Hippolyte Mège-Mouriès invented pearly "oleomargarine" in France (named after the Greek word for pearl).',
  },
  'ct-scanner-mathematik': {
    name: 'Mathematical Principle of the CT Scanner',
    era: '1957–1963',
    clueDescription:
      'A mathematical reconstruction method turning dozens of thin X-ray slices around the body into a sharp 3D cross-sectional image.',
    resolutionFact:
      'Physicist Allan MacLeod Cormack worked out the mathematical foundations of computed tomography in the late 1950s at Groote Schuur Hospital in Cape Town (South Africa), winning the 1979 Nobel Prize.',
  },
  'erste-universitaet': {
    name: 'Oldest Continuously Operating University',
    era: '859 CE',
    clueDescription:
      'A higher-learning institution endowed by a wealthy woman, complete with a famed library and degrees, teaching continuously for nearly 1,200 years.',
    resolutionFact:
      'Fatima al-Fihri founded the University of al-Qarawiyyin in Fez (Morocco) in 859 CE—recognized by UNESCO and Guinness World Records as the oldest continuously operating university.',
  },
  'katalysator-eishaus': {
    name: 'Passive Windcatcher & Ice House (Yakhchal)',
    era: 'c. 400 BCE',
    clueDescription:
      'Domed mud-brick structures topped with tall wind towers that passively cooled homes and froze ice even in 40 °C desert heat.',
    resolutionFact:
      'Ancient Persian engineers in modern-day Iran built "badgir" windcatchers and "yakhchal" ice pits around 400 BCE, harnessing evaporative cooling and desert night radiation.',
  },
  'stacheldraht-oder-kettensaege-nein-fallschirm': {
    name: 'First Documented Parachute Design (Homo Volans)',
    era: '1595 / 1617',
    clueDescription:
      'A rectangular linen-covered wooden frame held above the jumper’s head to glide safely down from a tall tower.',
    resolutionFact:
      'Polymath Faust Vrančić from Šibenik (Croatia) published the "Homo Volans" parachute illustration in 1595 and reportedly jumped with it himself in 1617 at over 60 years old.',
  },
  alufolie: {
    name: 'Aluminum Foil',
    era: '1910',
    clueDescription:
      'Paper-thin, shiny silver metal rolled into sheets for wrapping and preserving food—replacing heavier, costlier tin foil.',
    resolutionFact:
      'Robert Victor Neher invented continuous thin-gauge aluminum rolling in 1910 in Emmishofen (Switzerland), quickly adopted to wrap Swiss chocolates like Toblerone.',
  },
  'mp3-format': {
    name: 'MP3 Audio Compression Format',
    era: '1987–1995',
    clueDescription:
      'A digital audio format that strips out frequencies inaudible to human ears, shrinking music files to a tenth of their original size.',
    resolutionFact:
      'A team led by Karlheinz Brandenburg at the Fraunhofer Institute in Erlangen (Germany) developed this psychoacoustic compression and chose the ".mp3" file extension in 1995.',
  },
  tetrapak: {
    name: 'Aseptic Drink Carton (Tetra Pak)',
    era: '1951',
    clueDescription:
      'A multi-layer carton of paperboard, plastic, and micro-thin foil that keeps milk and juice fresh for months without refrigeration.',
    resolutionFact:
      'Ruben Rausing and Erik Wallenberg founded Tetra Pak in 1951 in Lund (Sweden) around an endless paper tube filled and sealed below the liquid line to keep oxygen out.',
  },
  'ondol-fussbodenheizung': {
    name: 'Underfloor Radiant Heating (Ondol)',
    era: 'Over 2,000 years ago',
    clueDescription:
      'A clever architectural system routing hot smoke from the kitchen stove through stone flues directly beneath the living-room floor slabs.',
    resolutionFact:
      'The "ondol" ("warm stone") system has shaped homes across Korea (modern South Korea) for over two millennia—and later inspired Frank Lloyd Wright’s radiant floor heating.',
  },
  seismograf: {
    name: 'First Seismoscope (Earthquake Detector)',
    era: '132 CE',
    clueDescription:
      'An ornate bronze vessel ringed with eight dragons and toads that dropped a bronze ball to indicate the exact direction of a distant quake.',
    resolutionFact:
      'Court astronomer Zhang Heng built this remarkably sensitive earthquake detector in 132 CE during China’s Han dynasty—detecting tremors hundreds of kilometers away.',
  },
  'kajal-augenschminke': {
    name: 'Black Kohl Eyeliner',
    era: 'c. 3100 BCE',
    clueDescription:
      'A dark mineral paste applied around the eyelids not just for beauty, but to cut harsh sun glare and ward off eye infections.',
    resolutionFact:
      'From predynastic times in ancient Egypt, both women and men wore kohl made from galena and soot—whose trace compounds helped shield eyes against Nile bacterial infections.',
  },
  'staubsauger-elektrisch': {
    name: 'Motorized Vacuum Cleaner',
    era: '1901',
    clueDescription:
      'A suction pump with a dust filter that pulls dirt inward rather than blowing it away—the very first model was as big as a horse carriage.',
    resolutionFact:
      'After nearly choking at a dust-blowing demo, Hubert Cecil Booth patented "Puffing Billy" in 1901 in London (United Kingdom)—a horse-drawn vacuum machine feeding hoses through windows.',
  },
  'bossa-chuveiro': {
    name: 'Electric Instant-Heat Showerhead',
    era: 'c. 1930s–1940s',
    clueDescription:
      'A compact plastic showerhead with an exposed heating coil inside that warms cold tap water instantly as it flows out.',
    resolutionFact:
      'Francisco Canhos developed the "chuveiro elétrico" in the 1930s in Jaú (Brazil) where centralized hot water plumbing was rare—still standard in millions of Brazilian bathrooms today.',
  },
  djembe: {
    name: 'Djembe Goblet Drum',
    era: 'c. 13th century',
    clueDescription:
      'A goblet-shaped drum carved from a single hardwood trunk and topped with tensioned goatskin, played bare-handed.',
    resolutionFact:
      'The traditional djembe originated during the Mali Empire (modern Mali / Guinea) among the Numu blacksmith caste, carrying complex rhythmic messages across long distances.',
  },
  'fahrrad-draisine': {
    name: 'Two-Wheeled Running Machine (Bicycle Forerunner)',
    era: '1817',
    clueDescription:
      'A single-track wooden frame with two inline wheels and a steerable front fork, propelled initially by pushing off the ground with your feet.',
    resolutionFact:
      'Following the 1816 "Year Without a Summer" and severe horse shortages, Karl Freiherr von Drais invented the "Laufmaschine" (draisine) in 1817 in Mannheim (Germany)—ancestor of every bicycle.',
  },
  glasblaeserei: {
    name: 'Free Glassblowing with a Blowpipe',
    era: 'c. 50 BCE',
    clueDescription:
      'A craft in which molten glowing glass on the tip of a hollow metal pipe is inflated by breath into thin bottles and goblets.',
    resolutionFact:
      'Before glassblowing, vessels had to be cast or carved slowly. Phoenician artisans along the coast of Sidon (modern Lebanon) invented the blowpipe around 50 BCE, turning glass into an everyday good.',
  },
  mankala: {
    name: 'Mancala (Sowing Board Game)',
    era: 'c. 6th–7th century (finds)',
    clueDescription:
      'One of humanity’s oldest tactical count-and-capture games, where seeds or pebbles are scooped and sown around carved wooden pits.',
    resolutionFact:
      'The earliest archaeological boards for "Gebeta" (an ancient Mancala variant) dating to the 6th–7th centuries were uncovered at Yeha and Matara in Ethiopia and Eritrea.',
  },
  sandwich: {
    name: 'Sandwich',
    era: '1762',
    clueDescription:
      'Cold or hot fillings tucked neatly between two slices of bread so you can eat one-handed without interrupting a card game.',
    resolutionFact:
      'In 1762 in London (United Kingdom), John Montagu, 4th Earl of Sandwich, famously ordered sliced beef between two pieces of bread so he could eat without leaving the gaming table.',
  },
  'korsett-oder-bikini': {
    name: 'Two-Piece Bikini Swimsuit',
    era: '1946',
    clueDescription:
      'A daring two-piece women’s swimsuit whose 1946 debut caused a sensation and took its name from a Pacific nuclear-test atoll.',
    resolutionFact:
      'Parisian automotive engineer Louis Réard unveiled the tiny two-piece at a Paris pool (France) on July 5, 1946—having to hire a showgirl when established models refused.',
  },
  eishockey: {
    name: 'Modern Indoor Ice Hockey',
    era: '1875',
    clueDescription:
      'A fast-paced team sport on ice skates in which players use curved sticks to shoot a vulcanized rubber puck into the net.',
    resolutionFact:
      'On March 3, 1875, at Montreal’s Victoria Skating Rink (Canada), players competed in the first organized indoor ice hockey match with written rules and a flat wooden puck.',
  },
  'ketchup-ursprung': {
    name: 'Fermented Fish Sauce (Origin of Ketchup)',
    era: 'c. 17th century',
    clueDescription:
      'Now a sweet-tangy red burger condiment, its name and original recipe began as a pungent fermented fish sauce with zero tomatoes.',
    resolutionFact:
      'In southern China (Fujian), a fermented fish brine was called "kôe-tsiap" in Hokkien. British sailors carried the name home in the 1600s, later swapping fish for mushrooms and finally tomatoes.',
  },
  porzellan: {
    name: 'Hard-Paste Porcelain ("White Gold")',
    era: 'Tang dynasty (c. 7th c.)',
    clueDescription:
      'Bright white, slightly translucent ceramic tableware fired at extreme temperatures from pure kaolin clay.',
    resolutionFact:
      'Ceramicists in China perfected true hard-paste porcelain more than 1,300 years ago—centuries before European workshops finally cracked the formula in Meissen in 1708.',
  },
  'sonnenbrille-quarz': {
    name: 'Smoked-Quartz Anti-Glare Eyeglasses',
    era: '12th century',
    clueDescription:
      'Flat smoky-tinted lenses worn over the eyes—not for beach lounging, but by courtroom judges hiding their expressions from defendants.',
    resolutionFact:
      'In 12th-century China, judges wore eyeglasses fitted with flat smoky-quartz lenses to conceal their eye movements and emotions during court interrogations.',
  },
  'bungee-jumping-vorbild': {
    name: 'Commercial Bungee Jumping',
    era: '1988',
    clueDescription:
      'An extreme sport in which jumpers dive headfirst from a bridge or platform tethered at the ankles by an elastic cord.',
    resolutionFact:
      'Inspired by Pentecost Island vine jumpers, entrepreneur A. J. Hackett launched commercial bungee jumping in 1988 from the Kawarau Bridge near Queenstown (New Zealand).',
  },
  reissverschluss: {
    name: 'Modern Separating Zipper',
    era: '1913',
    clueDescription:
      'Two fabric tapes lined with interlocking metal or plastic teeth zipped together or apart in a single sweep by a sliding pull.',
    resolutionFact:
      'Swedish-born engineer Gideon Sundback perfected the modern "Hookless Fastener" in 1913 in Hoboken, New Jersey (United States), establishing today’s zipper design.',
  },
  'post-it': {
    name: 'Sticky Notes (Post-it)',
    era: '1968 / 1974',
    clueDescription:
      'Small square paper notes backed with a light strip of repositionable adhesive—born from a "failed" attempt at a super-strong glue.',
    resolutionFact:
      'Dr. Spencer Silver accidentally invented a weak, peelable microsphere adhesive at 3M in Minnesota (United States) in 1968; colleague Art Fry turned it into choir bookmarks in 1974.',
  },
  'ampel-elektrisch': {
    name: 'Electric Red/Green Traffic Light',
    era: '1914',
    clueDescription:
      'An electric street-corner signal tower controlling cars and pedestrians with illuminated red and green lights.',
    resolutionFact:
      'Following a short-lived London gas signal, James Hoge installed the world’s first working electric traffic light ("STOP" / "MOVE") on August 5, 1914 in Cleveland, Ohio (United States).',
  },
  'yoghurt-fermentation': {
    name: 'Yogurt (Fermented Cultured Milk)',
    era: 'Ancient / 1905 bacterium',
    clueDescription:
      'A creamy, tangy dairy staple thickened by beneficial lactic acid bacteria, prized for shelf life and digestion.',
    resolutionFact:
      'In 1905, physician Stamen Grigorov identified *Lactobacillus delbrueckii subsp. bulgaricus* in Bulgaria, confirming a millennia-old Balkan fermentation tradition.',
  },
  seide: {
    name: 'Silk Weaving',
    era: 'c. 3000 BCE',
    clueDescription:
      'A lustrous, feather-light yet remarkably strong natural fiber reeled from the spun cocoons of mulberry-eating caterpillars.',
    resolutionFact:
      'For millennia, China guarded the secret of silkworm farming on pain of death—giving the famous Silk Road trade network its name.',
  },
  'marmelade-quitte': {
    name: 'Fruit Preserve / Marmalade (Marmelada)',
    era: '15th–16th century',
    clueDescription:
      'A sweet cooked fruit preserve whose name derives directly from the ancient word for a fragrant golden orchard fruit (quince).',
    resolutionFact:
      'Sailors and cooks in Portugal boiled quinces ("marmelo") with sugar into firm "marmelada" to preserve vitamins on long voyages—later inspiring English citrus marmalade.',
  },
  'korken-flasche': {
    name: 'Tapered Wine Bottle Cork',
    era: 'c. 1680',
    clueDescription:
      'An elastic natural bark cylinder wedged tightly into a bottle neck to seal sparkling wines without leaking gas.',
    resolutionFact:
      'Though bark stoppers existed in antiquity for amphorae, monks in Champagne (France)—famously Dom Pérignon—revived tapered corks with wire cages around 1680 for glass bottles.',
  },
  'origami-japan': {
    name: 'Classical Paper Folding (Origami)',
    era: 'Popular from 17th c.',
    clueDescription:
      'The art of folding a single uncut square of paper without scissors or glue into delicate cranes, flowers, and geometric forms.',
    resolutionFact:
      'While paper arrived from China, Japan developed artistic "origami" ("ori" = folding, "kami" = paper) during the Edo period, with the paper crane ("orizuru") as its emblem.',
  },
  tiramisu: {
    name: 'Tiramisu',
    era: 'c. 1960s–1970s',
    clueDescription:
      'A layered Italian spoon dessert pairing espresso-soaked ladyfingers with velvety mascarpone cream and a dusting of cocoa powder.',
    resolutionFact:
      'This iconic "pick-me-up" dessert emerged surprisingly recently in the late 1960s at restaurant Le Beccherie in Treviso in northeastern Italy.',
  },
  bluetooth: {
    name: 'Bluetooth Wireless Standard',
    era: '1994',
    clueDescription:
      'A low-power short-range radio protocol connecting headphones, keyboards, and cars—its logo merges two Nordic runes.',
    resolutionFact:
      'Developed at Ericsson in Lund (Sweden) by a team led by Dutch engineer Jaap Haartsen, and named after Viking king Harald Bluetooth who united Scandinavian tribes.',
  },
  linux: {
    name: 'Linux Operating System Kernel',
    era: '1991',
    clueDescription:
      'A free, open-source software kernel powering most web servers, supercomputers, and billions of smartphones—its mascot is a penguin.',
    resolutionFact:
      'In 1991, 21-year-old computer science student Linus Torvalds wrote the first Linux kernel in Helsinki (Finland), famously posting: "Just a hobby, won’t be big and professional."',
  },
  teebeutel: {
    name: 'Single-Serve Tea Bag',
    era: '1904–1908',
    clueDescription:
      'A tiny porous pouch on a string that keeps loose tea leaves neatly contained while steeping in a mug of hot water.',
    resolutionFact:
      'New York tea merchant Thomas Sullivan mailed loose samples in small silk pouches in 1908 (United States)—customers mistakenly dunked the whole bag in boiling water and asked for more.',
  },
  mayonnaise: {
    name: 'Mayonnaise (Traditional Mahón Origin)',
    era: '1756',
    clueDescription:
      'A thick, creamy cold emulsion of egg yolk, oil, and lemon or vinegar that carries the name of a Balearic port town.',
    resolutionFact:
      'According to tradition, after French troops took the port of Mahón in Menorca (Spain) in 1756, the Duke of Richelieu’s chef whipped olive oil with egg yolk for a "salsa mahonesa".',
  },
  'teleskop-mikroskop-ja-oder-karneval': {
    name: 'Compound Microscope',
    era: 'c. 1595–1609',
    clueDescription:
      'An optical instrument using multiple aligned lenses to reveal tiny living cells, insect eyes, and microorganisms invisible to the naked eye.',
    resolutionFact:
      'Spectacle makers Hans and Zacharias Janssen experimented with twin lenses in a brass tube around 1595 in Middelburg (Netherlands), building one of the first compound microscopes.',
  },
  kaleidoskop: {
    name: 'Kaleidoscope',
    era: '1816',
    clueDescription:
      'A viewing tube containing angled mirrors and colorful glass beads that shifts into endless symmetrical patterns when rotated.',
    resolutionFact:
      'Scottish physicist Sir David Brewster invented the kaleidoscope in 1816 in Edinburgh (United Kingdom) while studying light polarization—selling 200,000 in London within three months.',
  },
  'regenmantel-mackintosh': {
    name: 'Waterproof Rubberized Raincoat',
    era: '1823',
    clueDescription:
      'A weatherproof coat constructed from two fabric layers bonded with a thin inner membrane of rubber to block heavy downpours.',
    resolutionFact:
      'Scottish chemist Charles Macintosh discovered in 1823 in Glasgow (United Kingdom) how to dissolve rubber in naphtha and sandwich it between cloths—giving his name to the "mac".',
  },
  'kaffee-ursprung': {
    name: 'Discovery of the Wild Coffee Plant',
    era: 'c. 9th century',
    clueDescription:
      'An evergreen highland shrub whose bright red berries reportedly first caught attention after energizing a flock of dancing goats.',
    resolutionFact:
      'Legend tells of goatherd Kaldi in the Kaffa highlands (modern Ethiopia) noticing his goats stayed wide awake after nibbling red berries—the botanical birthplace of Coffea arabica.',
  },
  'trockenbatterie-oder-zahnpasta': {
    name: 'Oldest Documented Toothpaste Formula',
    era: 'c. 4th c. CE / Ancient',
    clueDescription:
      'A finely ground powder blended from rock salt, mint, dried iris flowers, and pepper grains to clean teeth and freshen breath.',
    resolutionFact:
      'A surviving papyrus recipe from Egypt (building on even older pumice-and-vinegar pastes from 3000 BCE) is the oldest written toothpaste formula in history.',
  },
  'zahnbuerste-borsten': {
    name: 'Modern Bristle Toothbrush',
    era: '1498',
    clueDescription:
      'A narrow bone or bamboo handle with dense tufts of stiff bristles set perpendicularly at the head to scrub teeth clean.',
    resolutionFact:
      'In 1498, an emperor of the Ming dynasty in China had stiff coarse hog bristles set at right angles into a bone or bamboo handle—three centuries before European bristle brushes.',
  },
  'kork-oder-buegeleisen-nein-knopf': {
    name: 'Oldest Known Shell Buttons',
    era: 'c. 2800–2600 BCE',
    clueDescription:
      'Small curved discs carved from seashells with two neat holes drilled through the center, sewn onto garments as ornaments and fasteners.',
    resolutionFact:
      'Excavations of the Indus Valley Civilization at Mohenjo-daro in modern-day Pakistan uncovered the world’s oldest pierced shell buttons—long before buttonholes existed.',
  },
  'schokolade-tafel': {
    name: 'Solid Eating Chocolate Bar',
    era: '1847',
    clueDescription:
      'A molded, breakable solid bar cast from cocoa powder, sugar, and melted cocoa butter into neat rectangular squares.',
    resolutionFact:
      'After centuries of chocolate being consumed solely as a drink, J. S. Fry & Sons in Bristol (United Kingdom) pressed cocoa paste, sugar, and cocoa butter into the first solid bar in 1847.',
  },
  milchschokolade: {
    name: 'Solid Milk Chocolate Bar',
    era: '1875',
    clueDescription:
      'A smooth, creamy light-brown variation of the classic bar made by blending dry powdered milk into dark cacao.',
    resolutionFact:
      'Daniel Peter of Vevey (Switzerland) used powdered milk newly developed by his neighbor Henri Nestlé in 1875 to create the first shelf-stable solid milk chocolate bar.',
  },
  kaffeefilter: {
    name: 'Paper Coffee Filter',
    era: '1908',
    clueDescription:
      'A disposable cone of porous paper that traps bitter grounds while letting hot brewed coffee drip through clear into the pot.',
    resolutionFact:
      'Tired of gritty coffee dregs, Melitta Bentz punched holes in a brass cup in 1908 in Dresden (Germany) and lined it with blotting paper torn from her son’s school notebook.',
  },
  schneemobil: {
    name: 'Snowmobile',
    era: '1937 / 1959',
    clueDescription:
      'An agile winter vehicle built for deep snow, pairing a wide rubber rear track with two steerable front skis.',
    resolutionFact:
      'Following a family tragedy in snowbound winter roads, mechanic Joseph-Armand Bombardier developed tracked snow machines and the lightweight Ski-Doo in 1959 in Valcourt, Quebec (Canada).',
  },
  'trickfilm-spielfilm': {
    name: 'First Animated Feature Film',
    era: '1917',
    clueDescription:
      'An hour-plus animated movie built from roughly 58,000 hand-drawn paper cutouts—created twenty years before Disney’s "Snow White".',
    resolutionFact:
      'Cartoonist Quirino Cristiani created the 70-minute political satire "El Apóstol" in 1917 in Buenos Aires (Argentina)—the world’s first feature-length animated film.',
  },
  'tomate-domestizierung': {
    name: 'Domesticated Culinary Tomato',
    era: 'c. 500 BCE',
    clueDescription:
      'A juicy red fruit indispensable to pasta, pizza, and salads today—its very name comes from the Aztec Nahuatl word "xitomatl".',
    resolutionFact:
      'While tiny wild ancestors grew in the Andes, Mesoamerican farmers in modern-day Mexico bred large, sweet culinary tomatoes centuries before Spanish ships carried them to Europe in 1521.',
  },
  'kalaschnikow-nein-satellit-oder-periodensystem': {
    name: 'Periodic Table of Elements',
    era: '1869',
    clueDescription:
      'A systematic chart organizing all chemical elements by atomic weight and recurring properties—hanging in nearly every science classroom.',
    resolutionFact:
      'Dmitri Mendeleev arranged the 63 known elements on cards in 1869 in Saint Petersburg (Russia), famously leaving blank gaps predicting elements yet to be discovered.',
  },
  'ceylon-zimt-nein-schwarzer-pfeffer': {
    name: 'True Cinnamon (Ceylon Cinnamon)',
    era: 'Ancient / Medieval',
    clueDescription:
      'A warmly fragrant spice rolled into paper-thin, multi-layered brown bark quills that sparked 16th-century sea expeditions.',
    resolutionFact:
      'The delicate inner bark of *Cinnamomum verum* was harvested and rolled since antiquity exclusively on the island of Ceylon—modern Sri Lanka.',
  },
  'wecker-sand-sonne-nein-einweckglas': {
    name: 'Airtight Food Preservation Jar (Canning)',
    era: '1809',
    clueDescription:
      'A method sealing food inside airtight glass jars heated in boiling water so fruit, broth, and vegetables keep for years without ice.',
    resolutionFact:
      'Parisian confectioner Nicolas Appert won a French government prize in 1809 (France) for preserving rations in sealed glass bottles—decades before Pasteur explained microbes.',
  },
  'skateboard-nein-kreuzwortraetsel': {
    name: 'Crossword Puzzle',
    era: '1913',
    clueDescription:
      'A grid of black and white squares paired with across and down clues where intersecting words are filled in letter by letter.',
    resolutionFact:
      'Editor Arthur Wynne published the first modern "Word-Cross" puzzle on December 21, 1913, in the Sunday Christmas supplement of the New York World (United States).',
  },
  'boerse-aktienmarkt': {
    name: 'First Modern Stock Exchange',
    era: '1602',
    clueDescription:
      'A public marketplace where citizens could freely buy and trade paper shares representing partial ownership in a giant trading firm.',
    resolutionFact:
      'To finance costly spice voyages of the Dutch East India Company (VOC), the world’s first formal stock exchange opened in 1602 in Amsterdam (Netherlands).',
  },
  geige: {
    name: 'Modern Violin',
    era: 'c. 1550',
    clueDescription:
      'A four-stringed wooden instrument carved from spruce and maple with iconic f-holes, played by drawing a horsehair bow across the strings.',
    resolutionFact:
      'Luthiers such as Andrea Amati and later Antonio Stradivari established the violin’s enduring proportions in 16th-century Cremona and Brescia (Italy).',
  },
  'dudelsack-oder-asphalt': {
    name: 'Macadam Road Surfacing',
    era: 'c. 1820',
    clueDescription:
      'A crowned roadway built from compacted layers of angular crushed stone without deep foundations, shedding rainwater and slashing mud and dust.',
    resolutionFact:
      'Scottish engineer John Loudon McAdam pioneered this durable crushed-stone road method around 1820 in the United Kingdom—later combined with tar to create "tarmac".',
  },
  'espresso-maschine': {
    name: 'Steam-Pressure Espresso Machine',
    era: '1884 / 1901',
    clueDescription:
      'A gleaming café counter machine that forces hot water under high pressure through finely ground coffee in under thirty seconds.',
    resolutionFact:
      'Angelo Moriondo patented the first steam-driven espresso machine in 1884 in Turin (Italy), before Luigi Bezzera and Desiderio Pavoni refined it for bars from 1901 onward.',
  },
  'schach-nein-polio-nein-kalter-kaffee-nein-yoga': {
    name: 'Yoga (Classical Practice)',
    era: 'Ancient (c. 500 BCE–200 CE)',
    clueDescription:
      'A holistic discipline blending physical postures, breath control, and meditation on a mat—now practiced worldwide for health and balance.',
    resolutionFact:
      'Yoga evolved over millennia on the Indian subcontinent (India) and was codified in Patanjali’s classic *Yoga Sutras*.',
  },
  'weinbau-aeltester': {
    name: 'Earliest Evidence of Grape Winemaking',
    era: 'c. 6000 BCE',
    clueDescription:
      'The intentional fermentation of crushed grapes inside large clay vessels buried up to their necks in cool earth.',
    resolutionFact:
      'Archaeologists south of Tbilisi in Georgia uncovered 8,000-year-old "qvevri" clay amphorae containing grape-wine residue—the oldest known cradle of viticulture.',
  },
  'schiebepuzzle-oder-rubik-schon-da-laser-nein-kontaktlinsen': {
    name: 'First Soft Hydrogel Contact Lenses',
    era: '1961',
    clueDescription:
      'Tiny, water-absorbing, flexible plastic shells worn directly on the eye’s tear film, replacing stiff glass lenses.',
    resolutionFact:
      'Chemist Otto Wichterle cast the first soft hydrogel contact lenses in 1961 on his kitchen table in Prague (Czechia / Czechoslovakia) using a child’s construction kit and a bicycle dynamo!',
  },
  'pizza-margherita': {
    name: 'Pizza Margherita',
    era: 'Late 19th century',
    clueDescription:
      'Thin stretched yeast dough topped with crushed tomatoes, fresh mozzarella, and basil leaves, blistered rapidly in a blazing stone oven.',
    hintText:
      'Created as a royal tribute in the national colors red, white, and green in a bustling southern port city.',
    resolutionFact:
      'In 1889 in Naples (Italy), baker Raffaele Esposito topped a flatbread with tomatoes, mozzarella, and basil in honor of Queen Margherita—cementing modern Neapolitan pizza.',
  },
  'nigiri-sushi': {
    name: 'Nigiri Sushi',
    era: 'Early 19th century',
    clueDescription:
      'Hand-pressed bite-sized mounds of lightly vinegared rice crowned with a fresh slice of raw fish or seafood.',
    hintText:
      'Originally sold as quick fast food from street stalls in what is now Tokyo.',
    resolutionFact:
      'In the 1820s in Edo (modern Tokyo, Japan), chef Hanaya Yohei began selling hand-pressed rice topped with fresh bay fish—creating classic nigiri sushi.',
  },
  laugenbrezel: {
    name: 'Lye Pretzel (Laugenbrezel)',
    era: '19th century (lye glaze)',
    clueDescription:
      'A twisted baked dough knot with a glossy dark-mahogany crust and coarse white salt crystals created by dipping it in an alkaline bath.',
    hintText:
      'Legend says a baker in southwestern Germany accidentally dipped a tray of pretzels into cleaning lye.',
    resolutionFact:
      'The signature shiny brown crust produced by a food-grade lye bath developed in 19th-century southern Germany.',
  },
  'basketball-sport': {
    name: 'Basketball',
    era: '1891',
    clueDescription:
      'An indoor team sport where two squads of five try to toss an inflated ball through an elevated hoop mounted three meters high.',
    hintText:
      'Invented by a gym teacher in Massachusetts as a winter indoor game using two peach baskets.',
    resolutionFact:
      'In December 1891 at Springfield College (United States), physical-education instructor James Naismith nailed up two peach baskets and wrote the original 13 rules of basketball.',
  },
  'golf-modern-18': {
    name: 'Modern Golf (18-Hole Rules)',
    era: '15th–18th century',
    clueDescription:
      'A precision club-and-ball sport across sweeping turf links where players try to sink a small dimpled ball into 18 holes in the fewest strokes.',
    hintText:
      'The standard 18-hole round and the oldest written rules come from a coastal town in Scotland.',
    resolutionFact:
      'In St Andrews (Scotland, United Kingdom), golfers codified the first written rules in 1754 and established the 18-hole standard round in 1764.',
  },
  'dampflokomotive-schiene': {
    name: 'Rail Steam Locomotive',
    era: '1804',
    clueDescription:
      'A self-propelled iron rail engine driven by high-pressure steam pistons capable of hauling heavy freight wagons along tracks.',
    hintText:
      'Made its maiden ironworks rail run in South Wales in 1804 at around 8 km/h.',
    resolutionFact:
      'Richard Trevithick built the world’s first full-scale working rail steam locomotive in 1804 at Penydarren in Wales (United Kingdom), well before Stephenson’s Rocket.',
  },
  roentgenstrahlung: {
    name: 'Medical X-Ray Imaging',
    era: '1895',
    clueDescription:
      'A non-invasive diagnostic scan using invisible electromagnetic radiation to cast sharp shadow images of bones and teeth.',
    hintText:
      'Discovered in Würzburg by a physicist who won the very first Nobel Prize in Physics in 1901.',
    resolutionFact:
      'Wilhelm Conrad Röntgen discovered "X-rays" in November 1895 in Würzburg (Germany), famously capturing an X-ray silhouette of his wife’s hand and ring.',
  },
  'world-wide-web': {
    name: 'World Wide Web (WWW)',
    era: '1989–1991',
    clueDescription:
      'A global hypertext information system of linked pages, URLs, and web browsers that made the internet accessible to everyone.',
    hintText:
      'Created by a British computer scientist working at Europe’s particle physics lab near Geneva.',
    resolutionFact:
      'In 1989 at CERN near Geneva (Switzerland), Tim Berners-Lee designed HTTP, HTML, and the first web browser so scientists could share linked documents effortlessly.',
  },
  'mikrochip-ic': {
    name: 'Integrated Circuit (Microchip)',
    era: '1958–1959',
    clueDescription:
      'A tiny semiconductor wafer packing millions or billions of microscopic transistors onto a single sliver of silicon.',
    hintText:
      'Invented nearly simultaneously in Texas and California in the late 1950s.',
    resolutionFact:
      'Jack Kilby (Texas Instruments) and Robert Noyce (Fairchild Semiconductor) independently created the integrated circuit on a single semiconductor chip in 1958–1959 in the United States.',
  },
  'motorflugzeug-wright': {
    name: 'Controlled Powered Airplane',
    era: '1903',
    clueDescription:
      'A wood-and-fabric biplane driven by propellers that achieved the first sustained, controlled flight heavier than air.',
    hintText:
      'Two bicycle mechanics from Ohio tested their Flyer on the windy sand dunes of North Carolina.',
    resolutionFact:
      'On December 17, 1903, at Kitty Hawk (United States), Orville and Wilbur Wright completed the first documented, controlled, powered airplane flights.',
  },
  'barometer-torricelli': {
    name: 'Mercury Barometer',
    era: '1643',
    clueDescription:
      'A meteorological instrument measuring shifts in atmospheric pressure, forming the foundation of modern weather forecasting.',
    hintText:
      'Built in Florence using a tall mercury-filled glass tube by a student of Galileo.',
    resolutionFact:
      'Evangelista Torricelli demonstrated in 1643 in Florence (Italy) that air has weight using a mercury column, inventing the barometer.',
  },
  pasteurisierung: {
    name: 'Pasteurization',
    era: '1864',
    clueDescription:
      'A gentle heat-treatment process below boiling point that kills spoilage microbes in milk, juice, and wine without ruining flavor.',
    hintText:
      'Named after a renowned 19th-century French chemist and microbiologist.',
    resolutionFact:
      'Louis Pasteur patented controlled thermal sterilization for liquids in 1865 in France, revolutionizing food safety worldwide.',
  },
  'kinematograph-kino': {
    name: 'Cinema Projector (Cinematograph)',
    era: '1895',
    clueDescription:
      'A combined film camera and projector that first brought paid audiences together to watch moving pictures on a big screen.',
    hintText:
      'Two brothers from Lyon held the first public ticketed screening in a Paris café in 1895.',
    resolutionFact:
      'Auguste and Louis Lumière hosted the world’s first commercial public cinema screening on December 28, 1895, at the Grand Café in Paris (France).',
  },
  'metrisches-system': {
    name: 'Metric System (Meter & Kilogram)',
    era: '1791–1799',
    clueDescription:
      'A unified base-10 measurement system for length and mass that replaced hundreds of inconsistent local feet, ells, and pounds.',
    hintText:
      'Adopted during a major late-18th-century European revolution.',
    resolutionFact:
      'Scientists in revolutionary France defined the meter in the 1790s as one ten-millionth of the distance from pole to equator, launching the metric system.',
  },
  'blaue-led': {
    name: 'High-Brightness Blue LED',
    era: '1989–1993',
    clueDescription:
      'A tiny semiconductor diode emitting intense blue light—completing red and green to make energy-saving white LED lamps possible.',
    hintText:
      'Three researchers in Nagoya and Tokushima shared the 2014 Nobel Prize in Physics for it.',
    resolutionFact:
      'Isamu Akasaki, Hiroshi Amano, and Shuji Nakamura achieved high-efficiency gallium nitride blue LEDs in the early 1990s in Japan, transforming global lighting and displays.',
  },
  'shinkansen-schnellzug': {
    name: 'High-Speed Bullet Train System',
    era: '1964',
    clueDescription:
      'Sleek aerodynamic electric passenger trains running on dedicated grade-separated tracks regularly above 200 km/h.',
    hintText:
      'Opened right on time for the 1964 Summer Olympics linking two major metropolises.',
    resolutionFact:
      'On October 1, 1964, the first Shinkansen bullet train began service between Tokyo and Osaka (Japan), ushering in modern high-speed rail.',
  },
  schwarzpulver: {
    name: 'Black Powder (Gunpowder)',
    era: '9th century',
    clueDescription:
      'An explosive blend of saltpeter, charcoal, and sulfur originally discovered while searching for an elixir of immortality.',
    hintText:
      'Daoist alchemists recorded the combustible formula during the Tang dynasty.',
    resolutionFact:
      'Chinese alchemists documented gunpowder mixtures in 9th-century China during medicinal experiments before adapting them for fireworks, signal rockets, and blasting.',
  },
  schubkarre: {
    name: 'Single-Wheel Wheelbarrow',
    era: 'c. 2nd century CE',
    clueDescription:
      'A hand-pushed load carrier balancing weight over a single central wheel between two handles so one person can haul heavy cargo.',
    hintText:
      'Depicted on Han dynasty tomb reliefs more than a millennium before reaching Europe.',
    resolutionFact:
      'Single-wheeled transport barrows appeared in China by the 2nd century CE during the Han dynasty for military supply and construction.',
  },
  'schlangen-und-leitern': {
    name: 'Snakes and Ladders (Board Game)',
    era: 'Medieval / Traditional',
    clueDescription:
      'A classic numbered race board game where ladders jump players upward and snakes slide them back down.',
    hintText:
      'Its ancient moral predecessor was called "Moksha Patam" and taught lessons about virtue and karma.',
    resolutionFact:
      'Originating in India as the spiritual morality game "Moksha Patam"—with ladders for virtues and snakes for vices—it was adapted for European parlors around 1892.',
  },
  'popcorn-mais': {
    name: 'Popcorn',
    era: 'c. 3600 BCE',
    clueDescription:
      'Hard-hulled corn kernels whose trapped moisture turns to steam when heated, bursting inside-out into airy white puffs.',
    hintText:
      'Aztecs used popped kernels both as a snack and as white ceremonial headdresses.',
    resolutionFact:
      'Archaeological finds in Mexico and Mesoamerica date popped maize back over 5,600 years, long before modern movie theaters.',
  },
  'sonnenkalender-365': {
    name: '365-Day Solar Calendar',
    era: 'c. 2800 BCE',
    clueDescription:
      'A civil year divided into 12 months of 30 days plus five festival days, aligned with the heliacal rising of Sirius before annual river floods.',
    hintText:
      'Priests along Africa’s longest river used it to time planting and harvest precisely.',
    resolutionFact:
      'During the Old Kingdom in Egypt around 2800 BCE, scholars instituted the 365-day solar calendar—direct ancestor of our modern calendar.',
  },
  'sauerteig-hefebrot': {
    name: 'Leavened Yeast Bread',
    era: 'c. 3000 BCE',
    clueDescription:
      'Airy, porous loaves of grain dough fermented with wild yeast before baking instead of flat unleavened cakes.',
    hintText:
      'Wall paintings inside pharaonic tombs already depict entire industrial clay-oven bakeries.',
    resolutionFact:
      'Archaeological remains and tomb murals confirm that bakers in ancient Egypt pioneered systematic yeast-leavened oven loaves around 3000 BCE.',
  },
  'olympische-spiele-antike': {
    name: 'Olympic Games',
    era: '776 BCE',
    clueDescription:
      'Quadrennial athletic contests featuring footraces, discus, long jump, and wrestling protected by a sacred truce.',
    hintText:
      'Held at the sanctuary of Zeus on the Peloponnese peninsula.',
    resolutionFact:
      'From at least 776 BCE, athletes gathered every four years at Olympia (Greece) for the ancient Games, inspiring the 1896 modern revival in Athens.',
  },
  'sparschäler-rex': {
    name: 'Swivel-Blade Vegetable Peeler ("Rex")',
    era: '1947',
    clueDescription:
      'A minimalist Y-shaped peeler stamped from a single bent aluminum strip with a pivoting double-edged blade for wafer-thin peels.',
    hintText:
      'Designed by Alfred Neweczerzal in Davos and even commemorated on national postage stamps.',
    resolutionFact:
      'Alfred Neweczerzal created the iconic "Rex" peeler in 1947 in Davos (Switzerland)—more than 100 million have been sold worldwide.',
  },
  'celsius-skala': {
    name: 'Celsius Temperature Scale',
    era: '1742',
    clueDescription:
      'A 100-degree thermometer scale anchored cleanly to the freezing and boiling points of pure water at standard pressure.',
    hintText:
      'An astronomer from Uppsala presented the scale in 1742 to the Royal Academy of Sciences.',
    resolutionFact:
      'Astronomer Anders Celsius introduced the centigrade scale in 1742 in Uppsala (Sweden)—originally setting 0° for boiling and 100° for freezing before it was inverted.',
  },
  sicherheitsstreichholz: {
    name: 'Safety Match',
    era: '1844–1855',
    clueDescription:
      'Matches that ignite only when struck against a special red-phosphorus strip on the box rather than bursting into flame accidentally.',
    hintText:
      'Inventor Gustaf Erik Pasch separated phosphorus from the match head—later famous from Jönköping factories.',
    resolutionFact:
      'Gustaf Erik Pasch patented separating the striking surface in 1844 in Sweden, and the Lundström brothers turned safety matches into a global export from Jönköping.',
  },
  'pendeluhr-huygens': {
    name: 'Precision Pendulum Clock',
    era: '1656',
    clueDescription:
      'A mechanical clock whose timekeeping accuracy relies on the steady rhythmic swing of a suspended weight.',
    hintText:
      'Christiaan Huygens slashed daily clock error from 15 minutes down to just seconds.',
    resolutionFact:
      'Mathematician and astronomer Christiaan Huygens designed the first working pendulum clock in 1656 in The Hague (Netherlands) with clockmaker Salomon Coster.',
  },
  'karavelle-segelschiff': {
    name: 'Ocean-Going Caravel',
    era: '15th century',
    clueDescription:
      'A nimble, shallow-draft sailing ship fitted with triangular lateen sails that could tack effectively into ocean headwinds.',
    hintText:
      'Enabled explorers along the western Iberian coast to round Africa.',
    resolutionFact:
      'Developed under Prince Henry the Navigator in 15th-century Portugal, the caravel became the workhorse vessel of the Age of Exploration.',
  },
  'moderne-konzertgitarre': {
    name: 'Modern Classical Guitar',
    era: '1850s',
    clueDescription:
      'A six-string plucked acoustic instrument with a figure-eight body and internal fan bracing beneath a spruce soundboard.',
    hintText:
      'Luthier Antonio de Torres of Almería established its standard scale and body shape.',
    resolutionFact:
      'In the 1850s in Andalusia (Spain), luthier Antonio de Torres defined the proportions, bridge, and fan bracing still used in classical guitars today.',
  },
  'kaesehobel-ostehovel': {
    name: 'Cheese Slicer (Ostehøvel)',
    era: '1925',
    clueDescription:
      'A flat kitchen utensil with a slotted metal blade that shaves uniform thin slices effortlessly off a block of firm cheese.',
    hintText:
      'A carpenter in Lillehammer adapted the principle of his woodworking plane in 1925.',
    resolutionFact:
      'Tired of uneven cheese chunks, furniture maker Thor Bjørklund patented the "ostehøvel" cheese plane in 1925 in Lillehammer (Norway).',
  },
  'postkarte-correspondenzkarte': {
    name: 'Official Pre-Stamped Postcard',
    era: '1869',
    clueDescription:
      'A sturdy pre-stamped cardboard card designed for brief open messages at reduced postage without needing an envelope.',
    hintText:
      'Economist Emanuel Herrmann proposed the "Correspondenz-Karte" in a Vienna newspaper in 1869.',
    resolutionFact:
      'On October 1, 1869, Austria issued the world’s first official government postcard ("Correspondenz-Karte") in Vienna following Emanuel Herrmann’s proposal.',
  },
  'saxophon-instrument': {
    name: 'Saxophone',
    era: 'c. 1840',
    clueDescription:
      'A curved brass woodwind instrument played with a single-reed mouthpiece that became iconic in jazz and pop music.',
    hintText:
      'Named after instrument maker Adolphe Sax, born in Dinant on the Meuse.',
    resolutionFact:
      'Around 1840 in Brussels (Belgium), Adolphe Sax married the conical brass body of a horn with a single-reed clarinet mouthpiece to invent the saxophone.',
  },
  'zuckerwuerfel-rad': {
    name: 'Sugar Cube',
    era: '1841–1843',
    clueDescription:
      'Neat pressed white cubes of moistened crystalline sugar created for clean portioning into coffee or tea.',
    hintText:
      'Invented in Moravia after a refinery director’s wife injured her hand hacking a giant sugarloaf.',
    resolutionFact:
      'Jakub Kryštof Rad invented the sugar-cube press in 1841 in Dačice (Moravia, Czechia) to replace dangerous hammering of hard sugarloaves.',
  },
  'sputnik-satellit': {
    name: 'First Artificial Satellite (Sputnik 1)',
    era: '1957',
    clueDescription:
      'A polished metal sphere roughly half a meter wide with four whip antennas that broadcast radio beeps from Earth orbit.',
    hintText:
      'Launched in October 1957 under chief designer Sergei Korolev, kicking off the Space Age.',
    resolutionFact:
      'On October 4, 1957, Soviet engineers led by Sergei Korolev (Russia / USSR) placed Sputnik 1 into orbit—the first human-made object in space.',
  },
  'fussball-regeln-fa': {
    name: 'Modern Association Football Rules',
    era: '1863',
    clueDescription:
      'The formal split separating handling ("rugby") from clear rules for kicking a ball toward a goal without using hands.',
    hintText:
      'On October 26, 1863, eleven London clubs met in a tavern to found the first governing body.',
    resolutionFact:
      'At Freemasons’ Tavern in London (United Kingdom) in 1863, the newly formed Football Association ratified the unified Laws of the Game.',
  },
  'automobil-patent-benz': {
    name: 'Gasoline Internal-Combustion Automobile',
    era: '1886',
    clueDescription:
      'A three-wheeled horseless carriage powered by a compact four-stroke gasoline engine with electric ignition.',
    hintText:
      'The inventor’s wife secretly drove the first historic long-distance trip from Mannheim to Pforzheim in 1888.',
    resolutionFact:
      'On January 29, 1886, in Mannheim (Germany), Carl Benz filed the patent for his Benz Patent-Motorwagen—recognized as the first true automobile.',
  },
  'polio-impfstoff-salk': {
    name: 'Inactivated Polio Vaccine',
    era: '1952–1955',
    clueDescription:
      'An injected vaccine using killed virus to protect children from paralyzing polio—its creator famously refused to patent it.',
    hintText:
      'Developed by Jonas Salk at the University of Pittsburgh in the mid-1950s.',
    resolutionFact:
      'Jonas Salk developed the polio vaccine in the United States in the early 1950s and declined to patent it, famously asking: "Could you patent the sun?"',
  },
  'nylon-kunstfaser': {
    name: 'Nylon (First Fully Synthetic Fiber)',
    era: '1935–1938',
    clueDescription:
      'A remarkably strong, elastic synthetic fiber spun purely from petrochemicals without plant cellulose—used in stockings, bristles, and parachutes.',
    hintText:
      'Chemist Wallace Carothers synthesized polyamide 6,6 in laboratories in Wilmington, Delaware.',
    resolutionFact:
      'Wallace Carothers and his DuPont team created nylon in 1935 in the United States—the world’s first commercially successful fully synthetic textile fiber.',
  },
  'regenmesser-cheugugi': {
    name: 'Standardized National Rain Gauge Network',
    era: '1441',
    clueDescription:
      'Uniform cylindrical bronze cylinders set on stone pedestals across an entire kingdom to measure rainfall accurately in millimeters.',
    hintText:
      'Introduced under King Sejong the Great in 1441 to plan harvests and irrigation.',
    resolutionFact:
      'In 1441 during the Joseon dynasty (modern South Korea), King Sejong deployed the "Cheugugi" rain gauge nationwide—over 200 years before comparable European networks.',
  },
  'oper-buehnengattung': {
    name: 'Opera (Sung Theatrical Drama)',
    era: 'c. 1597–1607',
    clueDescription:
      'A stage art form in which an entire dramatic story is sung from start to finish accompanied by a full orchestra.',
    hintText:
      'Emerged just before 1600 among the Florentine Camerata along the Arno river.',
    resolutionFact:
      'Jacopo Peri’s *Dafne* (1597) in Florence (Italy) and Monteverdi’s *L’Orfeo* (1607) established opera as an enduring Western musical art form.',
  },
  'taco-tortilla-nixtamal': {
    name: 'Nixtamalized Corn Tortilla',
    era: 'c. 1500 BCE',
    clueDescription:
      'Thin round flatbreads made from maize kernels soaked in alkaline limewater to form pliable dough and unlock vital nutrients.',
    hintText:
      'Still the culinary foundation of tacos and enchiladas across Mesoamerica.',
    resolutionFact:
      'By around 1500 BCE, cultures in modern-day Mexico invented nixtamalization—turning maize into nutritious masa dough for tortillas.',
  },
  'tauchspulen-lautsprecher': {
    name: 'Moving-Coil Dynamic Loudspeaker',
    era: '1915',
    clueDescription:
      'An electroacoustic transducer pairing a moving wire coil inside a magnet with a cone—still inside nearly every speaker today.',
    hintText:
      'Inventor Peter L. Jensen hailed from Maribo on the island of Lolland and named his breakthrough "Magnavox".',
    resolutionFact:
      'Danish engineer Peter Laurits Jensen (from Lolland, Denmark) co-invented the moving-coil loudspeaker principle ("Great Voice") in 1915.',
  },
  'sparschwein-celengan': {
    name: 'Clay Piggy Bank (Celengan)',
    era: '14th–15th century',
    clueDescription:
      'A hollow earthenware money box shaped like a plump wild boar with a coin slot on its back, smashed open when full.',
    hintText:
      'Hundreds of Majapahit-era terracotta boar banks were unearthed in East Java.',
    resolutionFact:
      'Long before English "piggy banks", potters of the Majapahit Empire in Java (Indonesia) crafted wild-boar clay money boxes called "celengan" in the 14th–15th centuries.',
  },
  'ayurveda-nasenplastik': {
    name: 'Reconstructive Nasal Surgery (Rhinoplasty)',
    era: 'Ancient (c. 600 BCE)',
    clueDescription:
      'The oldest recorded plastic-surgery technique, restoring lost facial tissue using a living skin flap rotated from the cheek or forehead.',
    hintText:
      'Described in the ancient Sanskrit medical treatise *Sushruta Samhita* along the Ganges.',
    resolutionFact:
      'Ancient physician Sushruta documented over 120 surgical instruments and the "Indian method" of reconstructive nose surgery some 2,600 years ago in India.',
  },
  'autogiro-tragschrauber': {
    name: 'Autogyro (Helicopter Precursor)',
    era: '1923',
    clueDescription:
      'An aircraft using an unpowered overhead rotor spun by airflow to climb steeply and land almost vertically without stalling.',
    hintText:
      'Engineered by Juan de la Cierva after his three-engine plane stalled and crashed.',
    resolutionFact:
      'Juan de la Cierva flew his articulated-rotor "Autogiro" in 1923 in Madrid (Spain)—solving the rotor dynamics needed for every modern helicopter.',
  },
  'orange-zuchtkarotte': {
    name: 'Modern Orange Cultivated Carrot',
    era: '16th–17th century',
    clueDescription:
      'A sweet, bright-orange root vegetable selectively bred from wild roots that were originally purple, white, or pale yellow.',
    hintText:
      'Growers famously championed the orange variety matching the ruling House of Orange.',
    resolutionFact:
      'Carrots were originally purple or yellow until growers in the Netherlands selectively bred sweeter, beta-carotene-rich orange carrots in the 16th–17th centuries.',
  },
  'briefmarke-penny-black': {
    name: 'Adhesive Postage Stamp',
    era: '1840',
    clueDescription:
      'A small gummed paper square showing prepaid postage when licked and stuck onto an envelope rather than charging the recipient.',
    hintText:
      'The very first issue bore a black profile portrait of Queen Victoria.',
    resolutionFact:
      'On Rowland Hill’s reform plan, the United Kingdom issued the "Penny Black" on May 1, 1840—the world’s first adhesive postage stamp.',
  },
  'papierdrachen-flugdrachen': {
    name: 'Tethered Flying Kite',
    era: 'c. 5th century BCE',
    clueDescription:
      'A lightweight bamboo-and-silk frame flown on a string in steady wind—originally built for military signaling and distance measurement.',
    hintText:
      'Artisans Mozi and Lu Ban reportedly fashioned a flying wooden bird around 450 BCE.',
    resolutionFact:
      'Kites originated around 2,500 years ago in China from bamboo and silk, first used for military signals, wind tests, and surveying.',
  },
  'sicherheitsaufzug-otis': {
    name: 'Safety Passenger Elevator',
    era: '1853',
    clueDescription:
      'A lift cab equipped with an automatic safety brake that locks onto guide rails if the hoisting cable snaps—making skyscrapers possible.',
    hintText:
      'Elisha Otis famously demonstrated it in 1854 in New York by having his own cable chopped mid-air.',
    resolutionFact:
      'Elisha Graves Otis invented the elevator safety brake in 1853 in Yonkers (United States), unlocking the age of vertical skyscrapers.',
  },
  'currywurst-berlin': {
    name: 'Currywurst',
    era: '1949',
    clueDescription:
      'Sliced grilled pork sausage drenched in warm spiced tomato sauce and dusted generously with yellow-brown curry powder.',
    hintText:
      'Herta Heuwer mixed the iconic sauce at her West Berlin street kiosk in 1949.',
    resolutionFact:
      'On September 4, 1949, Herta Heuwer served the first Currywurst from her street stall in Berlin-Charlottenburg (Germany).',
  },
  'kardangelenk-kardanwelle': {
    name: 'Suanpan Abacus (2/5 Bead Frame)',
    era: 'c. 2nd c. / 12th c.',
    clueDescription:
      'A wooden calculating frame with rods split into an upper "heaven" deck and lower "earth" deck of sliding beads for lightning-fast arithmetic.',
    hintText:
      'Features two beads above (worth 5 each) and five below (worth 1 each), suited to decimal and base-16 math.',
    resolutionFact:
      'The classic 2/5-bead "suanpan" abacus was standardized in China by the Middle Ages and remains astonishingly fast in skilled hands.',
  },
  'imax-grossformatkino': {
    name: 'IMAX Large-Format Cinema',
    era: '1967–1970',
    clueDescription:
      'A film and projection system running huge 70mm frames horizontally to fill towering curved screens without visible grain.',
    hintText:
      'Four filmmakers and engineers created it after multi-screen hits at Expo 67 in Montreal.',
    resolutionFact:
      'Graeme Ferguson, Roman Kroitor, Robert Kerr, and William C. Shaw invented IMAX in Canada between 1967 and 1970.',
  },
  'kaffeepflanze-urheimat': {
    name: 'Early Culinary Use of Coffee Cherries (Buna)',
    era: 'Early Medieval / Traditional',
    clueDescription:
      'Roasting, crushing, and boiling the seeds of a wild highland bush—originally also rolled with butter or salt as energy rations.',
    hintText:
      'Legend credits young herder Kaldi in the Kaffa highlands with noticing his goats’ midnight energy.',
    resolutionFact:
      'While brewed café culture spread through Yemen, Arabica coffee’s botanical homeland and earliest human consumption lie in the highlands of Ethiopia.',
  },
  'fruehes-radar-telemobiloskop': {
    name: 'Telemobiloscope (Early Ship Radar)',
    era: '1904',
    clueDescription:
      'A fog-warning apparatus bouncing radio waves off distant steel ship hulls to trigger a collision-warning bell.',
    hintText:
      'Christian Hülsmeyer demonstrated the device on Cologne’s Hohenzollern Bridge in 1904.',
    resolutionFact:
      'Christian Hülsmeyer patented the "Telemobiloskop" in 1904 in Germany—the world’s first documented radio-echo detection of metallic ships.',
  },
  'magnetresonanztomographie-kontrast-kern': {
    name: 'First Electron Microscope',
    era: '1931–1933',
    clueDescription:
      'A super-microscope replacing glass light lenses with magnetic coils focusing beams of electrons—revealing viruses for the first time.',
    hintText:
      'Ernst Ruska won the Nobel Prize in Physics over fifty years later for this breakthrough.',
    resolutionFact:
      'Ernst Ruska and Max Knoll built the first electron microscope in 1931 in Berlin (Germany), shattering the resolution limits of optical light.',
  },
  'künstliche-niere-dialyse': {
    name: 'First Working Artificial Kidney (Dialysis Machine)',
    era: '1943–1945',
    clueDescription:
      'A life-saving medical device using a rotating drum wrapped in cellophane sausage casing to wash toxins out of human blood.',
    hintText:
      'Physician Willem Kolff assembled his wartime prototype in Kampen from cannery scraps and downed-aircraft aluminum.',
    resolutionFact:
      'Willem Johan Kolff built the first functional dialysis machine between 1943 and 1945 in Kampen (Netherlands), rescuing patients from acute kidney failure.',
  },
  'erste-programmierung-ada': {
    name: 'First Published Computer Algorithm',
    era: '1843',
    clueDescription:
      'A detailed step-by-step sequence written to compute Bernoulli numbers on a mechanical calculating engine that hadn’t even been built yet.',
    hintText:
      'Written in 1843 in London by a mathematician who later inspired the name of a programming language.',
    resolutionFact:
      'Ada Lovelace published her visionary notes on Babbage’s Analytical Engine in 1843 in London (United Kingdom), containing humanity’s first computer program.',
  },
  'pocken-variolation-berichte': {
    name: 'First Human Cardiac Catheterization (Self-Experiment)',
    era: '1929',
    clueDescription:
      'A daring medical breakthrough in which a thin rubber tube was threaded via an arm vein straight into the right chamber of a beating heart.',
    hintText:
      'A young surgical resident in Eberswalde secretly ran the tube into his own heart in 1929 and walked upstairs to the X-ray room.',
    resolutionFact:
      'Werner Forßmann threaded a catheter into his own heart in 1929 in Eberswalde (Germany), founding modern cardiology and earning the 1956 Nobel Prize.',
  },
};
