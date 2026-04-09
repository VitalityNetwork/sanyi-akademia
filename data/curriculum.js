/* ============================================
   SANYI AI AKADÉMIA — TANTERV
   7 fázis · 32 lecke
   ============================================ */

const CURRICULUM = [

  // ============ FÁZIS 0 ============
  {
    id: 0,
    title: "Indulás",
    subtitle: "Vízió és a tanulás eszközei",
    lessons: [
      {
        id: "0.1",
        title: "Üdvözöllek — ezt fogod tudni 3 hét múlva",
        tagline: "Nézd meg, hová tartasz. Ettől lesz értelme minden lépésnek.",
        time: 5,
        difficulty: "easy",
        what: "A teljes út áttekintése: mire leszel képes, amikor végigérsz a 32 leckén.",
        how: "Olvasd végig ezt a leckét, utána görgess le és nézd meg a fázisok címeit. Ne kezdj el semmit még — csak ismerkedj.",
        why: "Ha tudod, hová tartasz, a nehezebb leckéknél is kitartasz. Ez nem oktatás a kedvéért — minden egyes lecke egy konkrét képességet ad a kezedbe.",
        example: "<strong>3 hét múlva:</strong> lesz egy saját élő weboldalad, amit AI-jal építettél. Claude posztol helyetted Facebookra. Írattál magadnak egy excelt 2 perc alatt. Képernyőképet illesztesz be Claude-ba egy hibához, és 30 másodperc múlva megoldottad.",
        prompt: null
      },
      {
        id: "0.2",
        title: "Hogyan használd ezt az oldalt",
        tagline: "Kártyák, promptok, checkboxok, elakadás-gomb — egy percben.",
        time: 3,
        difficulty: "easy",
        what: "Az oldal 4 fontos eleme: <strong>lecke kártyák</strong> (kattintásra kinyílnak), <strong>promptok</strong> (másolás gombbal), <strong>checkboxok</strong> (pipáld ha kész), <strong>Elakadtam gomb</strong> jobb alul.",
        how: "1. Kattints egy kártyára, hogy kinyíljon. <br>2. Olvasd el a Mit/Hogyan/Miért/Példa blokkokat. <br>3. A prompt blokknál kattints a <strong>📋 Másolás</strong>-ra, illeszd be Claude-ba. <br>4. Ha kész a lecke, pipáld be a bal oldali kört. <br>5. A progresszed automatikusan mentődik a böngésződben.",
        why: "Az oldal együtt dolgozik veled — nem csak olvasod. Minden leckénél konkrét tennivalód van a prompton keresztül, és azonnal látszik a haladásod.",
        example: "Most pipáld be ezt a leckét a bal oldali körre kattintva. Figyeld a konfettit. Ez a pillanat a jutalom — minden kipipált lecke után megkapod.",
        prompt: null
      },
      {
        id: "0.3",
        title: "Magyar hangos diktálás — Vitality Writer",
        tagline: "Gyorsabb és pontosabb, mint gépelni. Mobilon és gépen egyaránt.",
        time: 10,
        difficulty: "easy",
        what: "A <strong>Vitality Writer</strong> egy webes diktáló alkalmazás, amit Laci épített kifejezetten <strong>magyar nyelvre</strong>. ElevenLabs Scribe v1 motort használ, ami a legjobb magyar nyelvű hangfelismerés a piacon. Ezzel beszélni fogsz Claude-hoz, nem gépelni — magyarul, pontosan, gyorsan.",
        how: "1. Nyisd meg a <a href=\"https://vitality-writer.pages.dev\" target=\"_blank\" rel=\"noopener\"><strong>vitality-writer.pages.dev</strong></a> oldalt (mobilon vagy számítógépen, mindegy)<br>2. Regisztrálj az email címeddel (ingyenes)<br>3. Próbáld nyugodtan használni — kattints a felvétel gombra, mondd el amit szeretnél<br>4. Amit elmondtál, megjelenik szövegként — másold ki, illeszd be Claude Desktopba<br>5. <strong>Ha bármi kérdésed van</strong> a használattal, hozzáféréssel, kvótával kapcsolatban: <strong>jelezd Lacinak</strong> a megszokott csatornán (vagy email: <a href=\"mailto:laci.gla.mail@gmail.com?subject=Vitality%20Writer%20kérdés\">laci.gla.mail@gmail.com</a>)",
        why: "<strong>Három fontos ok miatt:</strong><br>1. <strong>A számítógépek beépített diktáló funkciója nem elég jó</strong> — főleg magyar nyelven nem. Sok hibát ejt, lassú, és állandóan javítani kell utána.<br>2. A Vitality Writer ezzel szemben pont magyarra van optimalizálva, és kimagaslóan pontos.<br>3. <strong>Mobilon is működik</strong> — séta közben, autóban, pihenésben is tudsz dolgozni Claude-dal, nem kell a gép elé ülnöd.",
        example: "Próbáld ki ma: nyisd meg <a href=\"https://vitality-writer.pages.dev\" target=\"_blank\" rel=\"noopener\">vitality-writer.pages.dev</a>-t a telefonodon, regisztrálj, mondd el hangosan a holnapi posztötleted, másold át a szöveget Claude Desktopba, és kérd meg, hogy formálja meg posztra. Ennyi az egész — gépelés nélkül.",
        prompt: `Vedd fel velem a kapcsolatot a Vitality Writer használatával kapcsolatban!

Email: laci.gla.mail@gmail.com
Tárgy: Vitality Writer — segítség / hozzáférés

Írd meg röviden:
- Sikerült-e regisztrálni
- Mit szeretnél kérdezni vagy mire van szükséged
- Mobilon vagy számítógépen szeretnéd-e használni elsősorban

Laci segít beüzemelni és megmutatja, hogyan tudod a leghatékonyabban használni a Claude-dal együtt.`
      }
    ]
  },

  // ============ FÁZIS 1 ============
  {
    id: 1,
    title: "Claude Desktop magabiztosan",
    subtitle: "A fő munkaeszközöd napi használatra",
    lessons: [
      {
        id: "1.1",
        title: "Mi az a Claude és miért ő",
        tagline: "Nem ChatGPT, nem Gemini. Itt a különbség.",
        time: 8,
        difficulty: "easy",
        what: "A Claude egy AI asszisztens, mint a ChatGPT, de három dologban kiemelkedő: <strong>hosszú szövegek megértése</strong>, <strong>fájlok készítése és módosítása</strong>, és <strong>biztonságos, átgondolt válaszok</strong>. Ez lesz a te fő munkaeszközöd.",
        how: "1. Nyisd meg a Claude Desktop appot<br>2. Jelentkezz be a Claude fiókoddal<br>3. Bal oldalon látod a korábbi beszélgetéseket és a Projects-et<br>4. Középen az input mező — ide írod vagy mondod a kérdést",
        why: "A munkád 80%-a szöveg és fájl — levelek, táblázatok, posztok, szerződések, dokumentumok. Claude-dal ezeket percek alatt intézed, nem órák alatt.",
        example: "Nyisd meg Claude-ot, és kérdezd meg tőle: <em>\"Miben tudsz nekem segíteni egy kisvállalkozó napjaiban? Sorolj fel 5 konkrét dolgot.\"</em> — nézd meg, mennyire konkrét lesz a válasz.",
        prompt: `Mutatkozz be röviden. Mondd el, miben vagy a legerősebb, miben vagy közepes, és miben nem érdemes téged használni. Adj 5 konkrét példát arra, mire használhatsz egy kisvállalkozó a napi munkájában. A végén kérdezd meg: mi az én fő tevékenységem, hogy személyre szabhasd a javaslataidat?`
      },
      {
        id: "1.2",
        title: "A jó prompt 4 eleme",
        tagline: "Kontextus + feladat + formátum + ellenőrzés. Ennyi.",
        time: 12,
        difficulty: "easy",
        what: "Egy jó prompt 4 részből áll: <strong>1. Kontextus</strong> (ki vagyok, mire kell) · <strong>2. Feladat</strong> (mit csinálj) · <strong>3. Formátum</strong> (hogyan add vissza) · <strong>4. Ellenőrzés</strong> (kérdezz vissza ha nem tiszta). Ha ezt tudod, minden válasz jobb lesz.",
        how: "<strong>Rossz prompt:</strong> <em>\"Írj egy posztot\"</em><br><strong>Jó prompt:</strong> <em>\"Wellness vállalkozóként Facebookra szeretnék egy 4 mondatos posztot a stresszkezelésről, motiváló hangnemben, hashtagek nélkül, a végén egy kérdéssel. Ha valami hiányzik, kérdezz vissza.\"</em><br><br>Látod a különbséget? Ugyanennyi időbe került leírni, de 10x jobb válasz jön.",
        why: "Az AI olyan okos, amennyit adsz neki. Ha csak sejtéseket adsz, ő is sejt. Ha konkrétan leírod mit akarsz, pontosan azt kapod.",
        example: "Próbáld ki: írj egy rossz promptot (\"írj valamit az étrendről\"), majd írd át a 4 elem szerint (\"Wellness coachként az instagramra szeretnék egy 3 bekezdéses posztot arról, miért fontos a reggeli fehérje, barátságos hangnemben, emojikkal\"). Hasonlítsd össze a válaszokat.",
        prompt: `Tanítsd meg nekem 5 percben, hogyan írjak hatékony promptot neked. Adj egy konkrét sablont, amit minden kérésnél használhatok. A sablonba építsd bele a 4 elemet (kontextus, feladat, formátum, ellenőrzés). A végén kérdezd meg: van-e egy konkrét feladatom, amit most szeretnék megfogalmazni, hogy együtt gyakoroljuk.`
      },
      {
        id: "1.3",
        title: "Fájlok létrehozása egyetlen prompttal",
        tagline: "Word, Excel, PDF — letöltésre kész, formázással.",
        time: 15,
        difficulty: "easy",
        what: "Claude képes Word (.docx), Excel (.xlsx), PDF, HTML és szöveges fájlokat készíteni — <strong>teljesen kész, letölthető formában</strong>. Nem kell formázni, nem kell küzdeni. Leírod mit szeretnél, és kész.",
        how: "1. Claude Desktopban írd le pontosan, milyen fájlt akarsz (típus, tartalom, formátum)<br>2. Claude legenerálja<br>3. Az üzenet alatt megjelenik egy <strong>Download</strong> gomb vagy artifact előnézet<br>4. Kattints, mentsd le<br>5. Nyisd meg az eredeti programmal (Word, Excel, Preview)",
        why: "Ami régen 30 perc formázás volt, most 30 másodperc. És a formázás pontosan olyan, amilyet kértél — fejléc, képletek, színek, stílusok.",
        example: "Kérj egy havi költségvetési Excel-t 12 hónapra, bevétel-kiadás-egyenleg oszlopokkal és automata összegző képletekkel. Töltsd le, nyisd meg — látod, működik minden.",
        prompt: `Szükségem van egy Excel táblázatra: havi költségvetés 12 hónapra (január-december), oszlopok: hónap, várható bevétel, várható kiadás, tényleges bevétel, tényleges kiadás, egyenleg (automata képlettel). Az utolsó sorban évi összegzés. Formázás: fejléc félkövér, pénzes oszlopok euró formátumban. Generáld le, és adj egy letölthető fájlt.`
      },
      {
        id: "1.4",
        title: "Meglévő fájlok szerkesztése drag & drop",
        tagline: "Húzd be a fájlt, írd le mi változzon. Kész.",
        time: 12,
        difficulty: "easy",
        what: "Ha van egy fájlod (Word, Excel, PDF, kép), húzd be Claude Desktopba, és írd le mit változtass rajta. Claude átalakítja, és kapsz egy új, módosított verziót.",
        how: "1. Keress egy fájlt a gépeden<br>2. Húzd be a Claude input mezőjébe (vagy kattints a paperclip ikonra)<br>3. Írd le pontosan, mit változtasson<br>4. Claude átolvassa, értelmezi, módosítja<br>5. Letöltöd az új verziót",
        why: "A régi anyagaid nem vesztek el — mindent, amit eddig Word-ben, Excel-ben csináltál, most AI-jal frissítesz, javítasz, átalakítasz másodpercek alatt.",
        example: "Tölts fel egy régi árlistát Excel-ben, és kérd meg Claude-ot: <em>\"Emeld minden árat 10%-kal, és a fejlécet írd át 2026-osra.\"</em> — 10 másodperc múlva meg van.",
        prompt: `Felvettem hozzád egy fájlt. Először mondd el saját szavaiddal, mit látsz benne: mi a címe, hány oldal vagy mennyi sor, mi a fő tartalma. Utána várd meg, mit kérek — lehet, hogy módosítást kérek, lehet, hogy csak összefoglalást, lehet, hogy kérdésem lesz. Ne csinálj semmit, amíg nem kérem.`
      },
      {
        id: "1.5",
        title: "Mapparendszer terveztetése magadnak",
        tagline: "Rend = sebesség. Egy profi mappastruktúrát rakatsz össze Claude-dal.",
        time: 15,
        difficulty: "easy",
        what: "Egy jó mappastruktúra a gépeden órákat spórol meg hetente. Claude kérdez végig, és épít neked egy logikus, áttekinthető rendszert a tevékenységed alapján.",
        how: "1. Nyisd meg Claude Desktopot<br>2. Másold be a lenti promptot<br>3. Válaszolj a kérdéseire (mivel foglalkozol, milyen anyagaid vannak, hogyan szeretnéd a rendet)<br>4. Kapsz egy fa-szerkezetű tervet<br>5. A Fájlkezelőben (File Explorer) építsd meg — vagy kérd meg Claude-ot, hogy írjon egy shell scriptet, ami létrehozza (ezt később fogod tudni csinálni a 3. fázisban)",
        why: "A rendetlen mappa lassít és stresszel. A rendezett mappa = gyors keresés, átlátható munka, és később a Claude Code is ebben a struktúrában fog dolgozni.",
        example: "Egy marketing vállalkozó tipikus struktúrája: <br><code>Documents/<br>├── Ügyfelek/<br>│   ├── Aktív/<br>│   └── Archív/<br>├── Marketing/<br>│   ├── Posztok/<br>│   └── Képek/<br>├── Pénzügyek/<br>└── Sablonok/</code>",
        prompt: `Segíts megtervezni egy profi mapparendszert a számítógépemre. Kérdezz végig a következőkről, egyesével, nem egyszerre:
1. Mivel foglalkozom, mi a fő tevékenységem
2. Milyen típusú anyagaim vannak (dokumentumok, képek, videók, táblázatok, szerződések)
3. Mennyi ügyfelem / projektem / területem van párhuzamosan
4. Hogyan szeretnék keresni bennük (projekt szerint, dátum szerint, típus szerint)
5. Van-e olyan rendszer, amit most használok, és ami zavar

A kérdések után adj egy komplett fa-szerkezetű mapparendszert maximum 3 szint mélyen, minden fő mappához egy mondatos indoklást, hogy miért van ott. A végén kérdezd meg: melyik részt módosítsam, vagy elindulhatunk?`
      },
      {
        id: "1.6",
        title: "Claude Projects — a saját AI munkaterületed",
        tagline: "Állandó kontextus, saját utasítások, tudásbázis egy helyen.",
        time: 15,
        difficulty: "medium",
        what: "A Claude Projects egy 'mappa' a Claude-on belül, ahol: <strong>1.</strong> állandó utasítást adhatsz (\"így dolgozz velem mindig\"), <strong>2.</strong> fájlokat tölthetsz fel mint tudásbázist, <strong>3.</strong> az ott folytatott beszélgetések mind egy kontextusban vannak.",
        how: "1. Claude Desktop bal oldal → <strong>Projects</strong> → <strong>+ New project</strong><br>2. Adj nevet (pl. \"Marketing\", \"Vállalkozás\", \"Tanulás\")<br>3. Kattints a <strong>Set custom instructions</strong>-re → ide jön egy szöveg, aki te vagy és hogyan dolgozz veled<br>4. <strong>Add content</strong> → tölts fel fájlokat, amiket Claude-nak ismernie kell (pl. a vállalkozásod leírása, az árlistád, a brand guide)<br>5. A projekten belül indíts új beszélgetést",
        why: "Normál beszélgetésben minden új chatben elölről kell magyaráznod, ki vagy és mit akarsz. A Projects-ben egyszer beállítod, utána Claude mindig \"ismer téged\". Ez 10x gyorsabb és következetesebb.",
        example: "Hozz létre egy \"Vállalkozás\" projektet. Custom instructions: <em>\"Sanyi vagyok, X tevékenységgel foglalkozom Spanyolországban. Mindig magyarul válaszolj, barátságos hangnemben, rövid mondatokban. Ha valami nem tiszta, kérdezz vissza.\"</em> Ezentúl minden beszélgetés ebben a projektben automatikusan tudja mindezt.",
        prompt: `Segíts megírni a Claude Project-emnek egy custom instructions szöveget. Kérdezz végig a következőkről, egyesével:
1. Ki vagyok, mi a foglalkozásom, hol élek
2. Mire fogom leginkább használni Claude-ot (munka, tanulás, kreatív, technikai?)
3. Milyen hangnemben válaszolj (hivatalos, barátságos, tömör, részletes?)
4. Milyen nyelven válaszolj alapból
5. Mit NE csinálj soha (pl. \"ne írj hosszú bevezetőt\", \"ne kezdd azzal, hogy 'remek kérdés'\")
6. Van-e olyan tudás rólam vagy a munkámról, amit mindig tartsd fejben

A válaszok után írj egy kész custom instructions szöveget, amit egy az egyben bemásolhatok a projektbe. A végén mondd el, hogy módosíthatom bármikor, és kérdezd meg: melyik pontot szeretnéd még pontosítani?`
      }
    ]
  },

  // ============ FÁZIS 2 ============
  {
    id: 2,
    title: "Tartalomgyártás és vizuál",
    subtitle: "Posztok, képek, PDF-ek, egyedi grafikák",
    lessons: [
      {
        id: "2.1",
        title: "Facebook posztok és heti tartalomnaptár",
        tagline: "5 poszt + képleírás 3 perc alatt.",
        time: 15,
        difficulty: "easy",
        what: "Claude-dal leülsz 3 percre, és lesz egy komplett heti tartalomnaptárad: 5 poszt (hétfő-péntek), mindegyikhez szöveg + képleírás + hashtag javaslat. Rendszeres, minőségi jelenlét minimális energiával.",
        how: "1. Nyisd meg a Claude Projects-et, amiben már tudja, mivel foglalkozol<br>2. Másold be a lenti promptot<br>3. Claude készít 5 posztot<br>4. Ha valami nem tetszik, kérd meg hogy írja át\u00A0azt az egyet<br>5. Másold ki a posztokat egy dokumentumba, vagy Facebook Meta Business Suite-ba ütemezve",
        why: "A legtöbb vállalkozó azért hagyja abba a közösségi médiát, mert elfogy az ihlet. Claude-dal sosem fogy el — van sablonod, hangnemed, célközönséged. Ezt ismételjük hetente.",
        example: "A kérdőív után kapsz valami ilyesmit:<br><em>Hétfő: \"Új hét, új lehetőség! 💪 ...\"</em><br><em>Kedd: \"Tudtad, hogy ...\"</em><br><em>Szerda: \"Egy ügyfél kérdezte tegnap ...\"</em><br>— mindegyikhez képötlet és 3 hashtag.",
        prompt: `Készítsünk egy heti Facebook tartalomnaptárt. Kérdezz végig (egyesével):
1. Mi a vállalkozásom / szolgáltatásom
2. Ki a célközönségem (kor, nem, érdeklődés, fájdalompontok)
3. Milyen hangnemben szeretnék megjelenni (motiváló, szakértő, barátságos, humoros?)
4. Milyen típusú posztokat szeretnél a héten (tipp, kérdés, story, promóció, before/after, idézet)
5. Van-e konkrét üzenet vagy ajánlat, amit ezen a héten tolni szeretnék

Utána készíts 5 posztot (hétfő-péntek). Minden poszthoz:
- Szöveg (max 4-5 mondat, magyarul, emojikkal de visszafogottan)
- Képleírás (mit ábrázoljon a kép — Canva-ba fogom majd vinni)
- 3 javasolt hashtag

A végén kérdezd meg: melyik posztot szeretnéd pontosítani vagy másik irányba vinni?`
      },
      {
        id: "2.2",
        title: "PDF kezelés profin",
        tagline: "Olvasás, összefoglalás, készítés, kitöltés, összefűzés.",
        time: 12,
        difficulty: "easy",
        what: "Claude képes PDF-eket <strong>olvasni és összefoglalni</strong>, <strong>újat létrehozni</strong> bármilyen tartalommal, <strong>meglévőt módosítani</strong>. A szerződéseid, számláid, ajánlataid innentől AI-jal kezelt dokumentumok.",
        how: "<strong>Olvasás:</strong> húzd be a PDF-et, kérdezz rá bármit<br><strong>Készítés:</strong> írd le mit akarsz, Claude PDF-ben adja vissza<br><strong>Kitöltés:</strong> tölts fel egy űrlapot, mondd el mivel töltse ki<br><strong>Összefoglalás:</strong> hosszú szerződést 5 pontban",
        why: "A szerződés olvasás órákig tart kézzel. Claude 30 másodperc alatt kiemeli a kockázatokat, a kötelezettségeket és a fizetési feltételeket. A szerződések és ajánlatok a legidőrablóbb dokumentumtípusok — most nem lesznek azok többé.",
        example: "Tölts fel egy bérleti szerződést, és kérd meg: <em>\"Foglald össze 5 pontban a legfontosabb feltételeket, és külön emeld ki, ha van bármi, ami számomra rizikós lehet.\"</em>",
        prompt: `Felvettem hozzád egy PDF dokumentumot. Csináld a következőket:
1. Először mondd el, mi ez a dokumentum (típus, cél, hossz)
2. Foglald össze 5 pontban a legfontosabb tartalmát
3. Emeld ki külön, ha van benne:
   - Bármilyen anyagi kötelezettség (dátum, összeg)
   - Bármilyen határidő
   - Bármilyen olyan feltétel, ami rizikós lehet számomra
4. A végén kérdezd meg: van-e konkrét kérdésem a dokumentummal kapcsolatban?

Magyarul válaszolj, strukturáltan, listákkal.`
      },
      {
        id: "2.3",
        title: "Canva — képgenerálás és szerkesztés",
        tagline: "A teljes vizuális munkád egy helyen, profi szinten.",
        time: 20,
        difficulty: "medium",
        what: "A Canva egy böngészős tervező eszköz, amiben AI-val is tudsz képeket generálni és szerkeszteni. Itt készítesz mindent: social media képeket, prezentációkat, flyereket, logókat, borítókat.",
        how: "1. Menj a <a href=\"https://canva.com\" target=\"_blank\" rel=\"noopener\">canva.com</a>-ra, regisztrálj (ingyenes)<br>2. Felül kattints a <strong>Create a design</strong>-ra, válaszd a méretet (pl. Instagram Post)<br>3. Bal oldalon <strong>Magic Studio</strong> → <strong>Magic Media</strong> → kép generálás prompttal<br>4. Szerkesztéshez: húzd rá az elemet, kattints, változtass<br>5. Jobb felül <strong>Share</strong> → <strong>Download</strong> → PNG vagy JPG",
        why: "Canva-val semmilyen tervező tudás nem kell. A sablonok profik, a képgenerálás azonnali, és a Facebook/Instagram/LinkedIn méretek mind előre be vannak állítva.",
        example: "Generálj egy Instagram-méretű képet ezzel a prompttal: <em>\"A peaceful morning yoga scene on a sunny beach, warm golden light, minimalist style, pastel colors, no text\"</em> — 10 másodperc múlva kész.",
        prompt: `Tanítsd meg nekem 10 percben, hogyan használjam a Canva-t profin. Magyarázd el:
1. Milyen típusú munkákra a legjobb (social media, prezentáció, flyer, logó)
2. Hogyan kell jó képgeneráló promptot írni (adj 5 konkrét példát különböző stílusokra)
3. Mik a legfontosabb funkciók, amiket minden kezdőnek ismernie kell (Magic Media, Background Remover, Text to Image, Brand Kit)
4. Milyen sablonokat érdemes használni egy kezdőnek
5. Hogyan exportáljak a végén, hogy Facebookra tudjam rakni

A végén kérdezd meg: milyen típusú képre van most konkrétan szükségem, hogy együtt megtervezzük a promptot?`
      },
      {
        id: "2.4",
        title: "Egyedi grafikák és ikonok Claude-dal (SVG)",
        tagline: "Logók, ikonok, diagramok kóddal — ingyen és skálázhatóan.",
        time: 12,
        difficulty: "medium",
        what: "Claude képes SVG formátumban grafikákat generálni — ezek olyan vektoros képek, amiket bármilyen méretben használhatsz, sosem pixelesednek. Tökéletesek logóhoz, ikonhoz, egyszerű illusztrációhoz.",
        how: "1. Claude Desktopban írd le mit akarsz (\"SVG ikon: egy levél koszorú, arany színben\")<br>2. Claude generál egy SVG kódot + előnézetet<br>3. Másold ki a kódot, mentsd el <code>.svg</code> kiterjesztésű fájlba<br>4. Használd weboldalon, Canva-ba importáld, vagy konvertáld PNG-vé",
        why: "Egy profi ikon vagy egyszerű logó 50-200 euróba kerül tervezőnél. Claude-dal 30 másodperc alatt van 10 változatod ingyen — és bármikor finomítható.",
        example: "Kérd: <em>\"Készíts egy SVG ikont: két emberalak egy szívvel a középen, minimalista vonalrajz stílusban, fekete vonal fehér háttéren. Méret 200x200px.\"</em>",
        prompt: `Szükségem van egy egyedi SVG grafikára. Segíts végigtervezni:
1. Kérdezd meg, mit akarok ábrázolni (téma, hangulat, használati cél)
2. Kérdezd meg a stílust (minimalista vonal, pöttyös, retro, geometrikus, kézírásos)
3. Kérdezd meg a színeket (mono, 2-3 szín, sok szín)
4. Kérdezd meg a méretet és a formátumot (ikon, logó, illusztráció)

Utána készíts egy SVG kódot. Mutasd meg az előnézetet. Ha nem tetszik, dolgozzunk együtt a módosításokon. A végén add meg a kész kódot, amit egy .svg fájlba mentek.`
      },
      {
        id: "2.5",
        title: "A CLAUDE.md — Claude állandó memóriája rólad",
        tagline: "Egyszer leírod, ki vagy. Utána minden válasz tudja.",
        time: 12,
        difficulty: "medium",
        what: "A <code>CLAUDE.md</code> egy egyszerű szöveges fájl, amit Claude <strong>minden új beszélgetés elején automatikusan elolvas</strong>, ha a megfelelő helyre teszed. Ez a te állandó 'bemutatkozásod' Claude-nak — soha többet nem kell elmagyaráznod alapokat.",
        how: "1. Nyisd meg Claude Desktopot és másold be a lenti promptot<br>2. Válaszolj a kérdésekre<br>3. Claude készít egy kész CLAUDE.md szöveget<br>4. Hozz létre egy új szöveges fájlt a Jegyzettömbbel (Notepad) — fontos, hogy egyszerű szöveg (.txt) formátumban mentsd, és nevezd át <code>CLAUDE.md</code>-re<br>5. Tedd a felhasználói mappádba: <code>C:\\Users\\&lt;a-te-neved&gt;\\CLAUDE.md</code><br>6. Ettől kezdve a Claude Code automatikusan beolvassa — a Projects-ben pedig feltöltheted a knowledge-be",
        why: "Normál beszélgetésnél 10 perc elmagyarázni, ki vagy. A CLAUDE.md-vel 0 perc, örökre. És a Claude Code (terminálban futó verzió) mindig ebből indul ki — ez lesz a 3. fázistól az alap.",
        example: "Példa CLAUDE.md részlet: <br><code>Sanyi vagyok, Spanyolországban élek, X-szel foglalkozom. Mindig magyarul válaszolj. Ne kezdj 'Remek kérdés!'-sel. Rövid mondatokban dolgozz. Ha nem vagy biztos, mondd meg. A vállalkozásom neve: [...]</code>",
        prompt: `Készítsünk együtt egy CLAUDE.md fájlt, ami a jövőben minden beszélgetésünk elején megadja neked a kontextust rólam. Kérdezz végig (egyesével):

1. Ki vagyok: név, hol élek, mivel foglalkozom
2. Mi a legfontosabb dolog, amit tudnod kell rólam munka szempontból
3. Hogyan dolgozzak veled: nyelv, hangnem, válaszhossz
4. Mit NE csinálj soha (pl. hosszú bevezetők, bocsánatkérés, felesleges magyarázat)
5. Milyen projekteken dolgozom most
6. Van-e technikai tudásom vagy nincs (ez fontos, mert így fogod megfogalmazni a magyarázataidat)

A válaszok után írj egy kész CLAUDE.md dokumentumot Markdown formátumban, strukturáltan, címsorokkal. Add ide a teljes tartalmat egy kódblokkban, hogy egy az egyben bemásolhassam egy fájlba. A végén mondd el, hogyan és hová mentsem.`
      }
    ]
  },

  // ============ FÁZIS 3 ============
  {
    id: 3,
    title: "Terminál és Claude Code",
    subtitle: "Itt lesz igazán erőd — az AI közvetlenül a gépeden",
    lessons: [
      {
        id: "3.1",
        title: "Mi a terminál és miért ő a leggyorsabb út",
        tagline: "Egy percben, sallang nélkül.",
        time: 5,
        difficulty: "easy",
        what: "A terminál egy szöveges ablak, amibe parancsokat írsz, és a gép végrehajtja őket. Ez a legközvetlenebb kapcsolat a számítógéped és te közted. A Claude Code itt fut — ezért kell ismerned. Windows-on a <strong>Windows Terminal</strong> vagy <strong>PowerShell</strong> a megfelelő eszköz.",
        how: "<strong>Megnyitás Windows-on:</strong> Nyomd meg a <code>Win</code> billentyűt → írd be: <code>Windows Terminal</code> (vagy <code>powershell</code>) → Enter. Megjelenik egy sötét hátterű ablak szöveggel. Ez az. <br><br>Ha nincs Windows Terminal: a <strong>PowerShell</strong> ugyanolyan jó, az minden Windows-ra előre fel van telepítve.",
        why: "A terminál nem ijesztő, csak szokatlan. Mindent, amit eddig kattintással csináltál, itt szövegesen is tudsz — de sokkal gyorsabban, automatizálhatóan, és a Claude Code innen fog neked valódi alkalmazásokat építeni.",
        example: "Nyisd meg most a PowerShell-t (Win billentyű → 'powershell' → Enter). Látsz egy szöveget és utána egy villogó kurzort. Ez minden. Semmit ne írj még — csak zárd be. Megtetted az első lépést.",
        prompt: null
      },
      {
        id: "3.2",
        title: "winget — a Windows beépített csomagkezelője",
        tagline: "Egy paranccsal telepítesz bármilyen programot. Nélküle nem megy tovább.",
        time: 8,
        difficulty: "easy",
        what: "A <code>winget</code> a Windows 10/11 beépített csomagkezelője. Egy paranccsal letölt és telepít programokat — nem kell böngészőzni, telepítőt keresni, kattintgatni. Erre lesz szükséged a Node.js telepítéséhez (és sok minden máshoz a jövőben).",
        how: "1. Nyisd meg a PowerShell-t (Win billentyű → 'powershell' → Enter)<br>2. Ellenőrzés: gépeld be: <code>winget --version</code><br>3. Ha kiír egy verziószámot (pl. <code>v1.x.x</code>), kész — Windows 10/11-en alapból ott van<br>4. Ha azt írja: <em>'A winget kifejezés nem ismerhető fel...'</em> → nyisd meg a Microsoft Store-t, keress rá: <strong>App Installer</strong>, telepítsd, és próbáld újra",
        why: "winget nélkül minden további telepítést kézzel kell csinálnod (letöltés → kattintgatás a varázslóban → újraindítás). winget-tel egy sor és kész.",
        example: "Próbálj kilistázni egy ismerős programot: <code>winget search node</code> — felsorolja a Node.js elérhető verzióit. Még nem telepítjük, csak megnézzük, hogy működik.",
        prompt: `Segíts ellenőrizni, hogy a winget telepítve van-e a Windows számítógépemen. Lépésről lépésre, magyarul:
1. Hogyan nyissam meg a PowerShell-t
2. Milyen parancsot írjak be a verzió ellenőrzéséhez
3. Mit jelent a kimenet, ha működik
4. Mit csináljak, ha NEM ismeri fel a winget parancsot (App Installer telepítése Microsoft Store-ból)
5. Hogyan kereshetek programokat winget-tel

A válasz legyen magyar, kezdőnek érthetően.`
      },
      {
        id: "3.3",
        title: "Node.js telepítése és ellenőrzés",
        tagline: "Ez a Claude Code futtatókörnyezete.",
        time: 8,
        difficulty: "easy",
        what: "A Node.js egy program, ami JavaScript kódot futtat a gépeden. A Claude Code Node.js-en fut — ezért kell. winget-tel egyetlen sor a telepítés.",
        how: "1. Nyisd meg a PowerShell-t<br>2. Írd be: <code>winget install OpenJS.NodeJS.LTS</code><br>3. Ha rákérdez, hogy elfogadod-e a feltételeket, írd be: <code>Y</code> és Enter<br>4. Várj 1-3 percet, amíg letölti és telepíti<br>5. <strong>Zárd be és nyisd meg újra a PowerShell-t</strong> (hogy frissüljön a környezet)<br>6. Ellenőrzés: <code>node --version</code> — ha kiír valami ilyesmit: <code>v22.x.x</code>, kész",
        why: "Ez csak egy alapkő — telepíted egyszer, és soha nem kell többé gondolkodnod róla. Innentől a Claude Code és minden modern webfejlesztés megy rajta.",
        example: "Ellenőrzés sikeres állapotban: <br><code>PS C:\\&gt; node --version</code><br><code>v22.11.0</code><br><code>PS C:\\&gt; npm --version</code><br><code>10.9.0</code>",
        prompt: `Telepítsd nekem a Node.js-t winget-tel a Windows számítógépemre. Adj egy lépésről lépésre útmutatót:
1. Melyik winget parancsot másoljam be a PowerShell-be
2. Mennyi ideig fog tartani
3. Miért kell utána újraindítani a PowerShell-t
4. Hogyan ellenőrzöm, hogy a node és az npm is működik
5. Mit csináljak, ha a 'node nem ismerhető fel parancs' hibát kapom
6. Mi az az npm egyébként és miért van automatikusan mellette

A válasz legyen magyar és nagyon közérthető.`
      },
      {
        id: "3.4",
        title: "Claude Code telepítése és első futtatás",
        tagline: "Ez az igazi erő. Itt kezdődik a valódi AI-kódolás.",
        time: 15,
        difficulty: "medium",
        what: "A Claude Code egy olyan Claude, ami <strong>közvetlenül a gépeden dolgozik</strong> — olvas, ír, létrehoz fájlokat, futtat parancsokat. Ez lesz a fő munkaeszközöd, amikor valódi dolgokat építesz.",
        how: "1. PowerShell-be: <code>npm install -g @anthropic-ai/claude-code</code><br>2. Várj 1-2 percet<br>3. Indítsd el: <code>claude --dangerously-skip-permissions</code><br>4. Első futtatáskor megkérdezi: melyik Claude fiókoddal akarsz bejelentkezni — kattints, a böngésző megnyitja, bejelentkezés<br>5. Vissza a PowerShell-be — ott vagy a Claude Code promptban<br>6. Írj valamit, pl.: <em>\"Hozz létre egy hello.html fájlt, ami köszön engem Sanyinak\"</em>",
        why: "<strong>A `--dangerously-skip-permissions` flag</strong> azért kell, hogy Claude ne kérdezzen vissza minden egyes lépésnél. Enélkül állandóan meg kell erősítened, hogy mindent csinálhat — és akkor hosszú feladatoknál elvesztegetsz órákat. Ezzel megy folyamatosan, és te a haladást látod.",
        example: "Első Claude Code feladat: <em>\"Hozz létre egy új mappát <code>teszt</code>, abba egy <code>index.html</code> fájlt, ami Bootstrap-pel fejléccel, egy bemutatkozó bekezdéssel, és egy email gombbal. Nyisd meg utána a böngészőmben.\"</em> — és figyeled, ahogy építi meg.",
        prompt: `Segíts telepíteni a Claude Code-ot a Windows számítógépemre. Lépésről lépésre, magyarul:
1. Melyik npm parancsot használjam a telepítéshez (PowerShell-ben futtatom)
2. Hogyan indítsam el először, és mi az a --dangerously-skip-permissions flag, miért használjuk
3. Hogyan jelentkezzek be (mit fogok látni a böngészőben)
4. Milyen legyen az első feladat, amit kipróbálok vele (adj 3 konkrét, egyszerű ötletet)
5. Mit csináljak, ha valami nem megy (pl. PowerShell execution policy hiba)

A végén mondd el, mi a különbség a Claude Desktop és a Claude Code között, egyszerűen.`
      },
      {
        id: "3.5",
        title: "Írass magadnak scripteket — PowerShell mint asszisztens",
        tagline: "Ne kézzel írj parancsokat. Claude írja, te futtatod.",
        time: 15,
        difficulty: "medium",
        what: "A PowerShell-ben sok parancs van, amit nem kell fejből tudnod. A stratégia: <strong>kérd meg Claude Desktop-ot vagy Claude Code-ot, hogy írjon neked egy PowerShell scriptet</strong>, ami elvégzi amit akarsz — te csak lefuttatod.",
        how: "1. Claude Desktop-ba: mondd el mit akarsz (pl. \"napi backup a Dokumentumok mappámról egy külső meghajtóra\")<br>2. Claude írni fog egy PowerShell scriptet (szöveges kód, <code>.ps1</code> kiterjesztéssel)<br>3. Kérd meg: <em>\"Adj egy lépésről lépésre útmutatót, hogyan mentsem el és futtassam le Windows-on\"</em><br>4. Új PowerShell tab: a Windows Terminal-ban kattints a felső <strong>+</strong> ikonra, vagy nyomj <code>Ctrl + Shift + T</code> — ide futtathatod anélkül, hogy a Claude Code-ot megzavarnád<br>5. Futtatás: <code>powershell -ExecutionPolicy Bypass -File backup.ps1</code> (vagy amit Claude mond)",
        why: "Sosem kell fejből tudnod PowerShell parancsokat. Claude profi bennük. Te csak leírod mit akarsz elérni, ő írja a receptet, te végrehajtod. Ez egy tanulási ciklus is — idővel ráérzel, melyik parancs mit csinál.",
        example: "Példa feladat: <em>\"Írj egy PowerShell scriptet, ami a Letöltések (Downloads) mappából átmozgatja az összes .pdf fájlt a Dokumentumok\\PDF-ek mappába.\"</em> — Claude írja, te Entert nyomsz, 1 másodperc alatt lefut.",
        prompt: `Szükségem van egy PowerShell scriptre Windows-ra, ami a következőt csinálja:

[ITT ÍRD LE, MIT AKARSZ — pl. napi backup, fájlok rendezése, tömörítés, méret átalakítás]

Csináld a következőket:
1. Kérdezd vissza, ha valami nem tiszta (pl. pontos mappa útvonalak, gyakoriság)
2. Írd meg a PowerShell scriptet, kommentekkel magyarul, hogy értsem mit csinál
3. Magyarázd el, hogyan mentsem el egy .ps1 fájlba (Notepad-ben)
4. Mondd el, hogyan futtassam le PowerShell-ből (pontos parancs, ExecutionPolicy figyelmeztetésekkel együtt)
5. Emeld ki, ha van bármi kockázat (pl. ha fájlokat mozgat vagy töröl)

Magyarul, kezdőnek érthetően.`
      }
    ]
  },

  // ============ FÁZIS 4 ============
  {
    id: 4,
    title: "MCP szerverek — Claude szuperképességei",
    subtitle: "Itt kap Claude kezeket a külvilághoz",
    lessons: [
      {
        id: "4.1",
        title: "Mi az MCP — Claude \"kezei\" a világhoz",
        tagline: "Egy hasonlat, ami mindent elmagyaráz.",
        time: 8,
        difficulty: "easy",
        what: "Az <strong>MCP</strong> (Model Context Protocol) egy szabvány, amivel Claude <strong>cselekedni</strong> is tud, nem csak beszélni. Minden MCP szerver egy új képesség: egyik a fájlrendszerhez ad hozzáférést, másik a böngészőhöz, harmadik egy adatbázishoz.",
        how: "Nincs most mit csinálnod — ez a lecke magyarázat. A következő leckékben fogsz MCP-t telepíteni.",
        why: "<strong>Hasonlat:</strong> Claude eddig olyan volt, mint egy nagyon okos ember, aki csak beszélni tud, és valaki másnak kell mindent elvégeznie helyette. Az MCP olyan, mintha kezeket kapna — most már ő maga megnyitja a böngészőt, kitölti az űrlapot, létrehoz egy fájlt, kiküld egy emailt. Ez a különbség a 'tanácsadó' és a 'végrehajtó' között.",
        example: "MCP nélkül: <em>\"Csinálj egy Excel fájlt\"</em> → Claude ír egy szöveget, amit neked kell bemásolnod Excel-be.<br>MCP-vel: <em>\"Csinálj egy Excel fájlt és mentsd a Documents mappámba\"</em> → Claude megcsinálja, elmenti, megmondja hol van.",
        prompt: null
      },
      {
        id: "4.2",
        title: "Filesystem MCP — Claude eléri a mappáidat",
        tagline: "A legelső és legfontosabb MCP. Innentől közvetlenül dolgozik a fájlokkal.",
        time: 15,
        difficulty: "medium",
        what: "A Filesystem MCP engedélyt ad Claude-nak, hogy <strong>olvassa, írja, szerkessze a fájljaidat egy kijelölt mappában</strong>. Ez a leggyakoribb MCP, és a legtöbbet fogod használni.",
        how: "1. Claude Desktop → <strong>Settings → Developer → Edit Config</strong><br>2. Megnyílik egy JSON fájl (<code>claude_desktop_config.json</code>)<br>3. Illeszd be ezt a részt az <code>mcpServers</code> alá (Windows formátum, dupla backslash kötelező a JSON-ban):<br><code>\"filesystem\": {<br>&nbsp;&nbsp;\"command\": \"npx\",<br>&nbsp;&nbsp;\"args\": [\"-y\", \"@modelcontextprotocol/server-filesystem\", \"C:\\\\Users\\\\Sanyi\\\\Documents\"]<br>}</code><br>4. Cseréld a <code>Sanyi</code>-t a saját Windows felhasználói nevedre (a pontos név itt van: <code>C:\\Users</code> mappa nézete a Fájlkezelőben)<br>5. Mentsd, zárd be és indítsd újra Claude Desktop-ot<br>6. Teszt: <em>\"Listázd a Documents mappám tartalmát\"</em>",
        why: "A Filesystem MCP megspórolja a fel-le töltést. Claude közvetlenül eléri a fájljaidat, dolgozik rajtuk, és az új verziót mentődik — nincs többet drag & drop, nincs letöltés.",
        example: "Kérj: <em>\"Nézz rá a Documents mappám tartalmára, mondd el mit látsz, és javasolj egy rendrakást.\"</em> — Claude megnézi, elemzi, javaslatokat tesz.",
        prompt: `Segíts telepíteni a Filesystem MCP-t a Claude Desktop-omban. Lépésről lépésre, magyarul:

1. Hogyan nyitom meg a config fájlt a Claude Desktop beállításaiban
2. Pontosan milyen JSON kódot kell beilleszteni (add meg a kész szöveget, amibe én csak a felhasználói nevemet kell beírjam)
3. Milyen mappát ajánlasz, mint kiindulópont (a Documents biztonságos? vagy a teljes home? mi a különbség?)
4. Hogyan mentsem és indítsam újra Claude-ot
5. Mi az első teszt, amit kipróbálok (3 konkrét példa)
6. Mit csináljak, ha nem működik — hogyan nézzem meg a hibaüzeneteket

A végén kérdezd meg: melyik mappát szeretném először engedélyezni neked?`
      },
      {
        id: "4.3",
        title: "Context7 MCP — friss dokumentációk bármiről",
        tagline: "Claude mindig naprakész lesz minden technológiában.",
        time: 10,
        difficulty: "medium",
        what: "A Context7 egy MCP, ami <strong>naprakész dokumentációkat</strong> ad Claude-nak bármilyen library-ről, keretrendszerről, API-ról (React, Tailwind, Cloudflare, Supabase, stb.). Claude tanulási anyaga nem mindig friss — ezzel mindig az lesz.",
        how: "1. Nyisd meg a Claude Desktop config fájlt (mint a 4.2-ben)<br>2. Illeszd be ezt az mcpServers alá:<br><code>\"context7\": {<br>&nbsp;&nbsp;\"command\": \"npx\",<br>&nbsp;&nbsp;\"args\": [\"-y\", \"@upstash/context7-mcp\"]<br>}</code><br>3. Mentsd, indítsd újra<br>4. Teszt: <em>\"Use context7 to fetch the latest Cloudflare Pages deployment documentation and summarize it\"</em>",
        why: "Amikor Claude Code-ot használsz egy library-vel, néha elavult választ ad (a tanítási adata régi). A Context7-tel pontosan tudja az aktuális API-t, és nem hibázik.",
        example: "<em>\"Keress Context7-tel friss dokumentációt a Tailwind CSS 4-hez, és mondd el, mi változott a 3-as verzióhoz képest.\"</em>",
        prompt: `Segíts telepíteni a Context7 MCP-t. Adj egy lépésről lépésre útmutatót:
1. Hogyan illesszem be a config fájlba (add meg a kész JSON szöveget)
2. Hogyan indítsam újra Claude-ot
3. 3 konkrét példa, amit kipróbálhatok vele (milyen library-kről kérdezzek)
4. Mikor érdemes használni és mikor nem
5. Mit csináljak, ha valamelyik library nincs benne

A végén magyarázd el egyszerűen, miért érdemes ez minden technikai munkához.`
      },
      {
        id: "4.4",
        title: "Playwright MCP — böngésző automatizálás",
        tagline: "Claude megnyitja a böngészőt és elvégzi a feladatokat helyetted.",
        time: 15,
        difficulty: "medium",
        what: "A Playwright MCP engedélyezi, hogy Claude <strong>valódi böngészőt vezéreljen</strong>: oldalakat nyisson meg, kattintson, űrlapokat töltsön ki, screenshotokat készítsen, adatokat gyűjtsön. Ez egy szuperképesség — az, amit eddig te csináltál kattintgatással, most Claude csinálja.",
        how: "1. Config fájlba:<br><code>\"playwright\": {<br>&nbsp;&nbsp;\"command\": \"npx\",<br>&nbsp;&nbsp;\"args\": [\"-y\", \"@playwright/mcp@latest\"]<br>}</code><br>2. Mentés, Claude újraindítás<br>3. Első próba: <em>\"Open vitalitygym.net and take a full-page screenshot\"</em><br>4. Megnyílik egy Chromium ablak, Claude dolgozik benne",
        why: "Regisztrációk, adatgyűjtés, űrlapkitöltés, ellenőrzés — minden ismétlődő webes feladat automatizálható. Nemcsak gyors, hanem pontos is — nem fáraszt el, nem hibázik.",
        example: "Feladatok, amit Claude Playwright-tal megcsinál: <br>• Megnyitja a Cloudflare dashboardot és mutatja, hogy kell beállítani egy projektet<br>• Kitölt egy hosszú űrlapot, amit te diktálsz<br>• Screenshot-ol egy weboldalt, elemzi a layoutját<br>• Összegyűjti egy versenytárs oldaláról az árakat",
        prompt: `Segíts telepíteni a Playwright MCP-t Claude Desktop-ba. Adj lépésről lépésre útmutatót:
1. Mi az a Playwright pontosan és miért kell hozzá külön telepítés vagy nem
2. Hogyan illesszem be a config fájlba (kész JSON)
3. Mit fogok látni, amikor először használom (megnyílik egy böngésző ablak? mennyi idő alatt?)
4. 5 konkrét feladat, amit azonnal kipróbálhatok vele (egyszerűtől a haladóig)
5. Mik a határai — mit NEM érdemes vele csináltatni

A végén kérdezd meg: milyen webes feladatot csinálok most kézzel, amit automatizálhatnánk vele?`
      },
      {
        id: "4.5",
        title: "Supabase MCP — adatbázis kezelés",
        tagline: "Ha adatot kell tárolni, ez a MCP oldja meg.",
        time: 18,
        difficulty: "medium",
        what: "A Supabase egy ingyenes felhő-adatbázis + felhasználókezelés szolgáltatás. A Supabase MCP-vel Claude közvetlenül létrehozhat táblákat, hozzáadhat adatokat, lekérdezhet. Ez a 'hol tárolom az adataimat' kérdésre a modern válasz.",
        how: "1. Regisztrálj: <a href=\"https://supabase.com\" target=\"_blank\" rel=\"noopener\">supabase.com</a> (ingyenes)<br>2. Új projekt, adj nevet, válassz régiót (Frankfurt közel van)<br>3. Settings → API → másold ki az <strong>URL-t</strong> és a <strong>service_role key</strong>-t<br>4. Config fájlba:<br><code>\"supabase\": {<br>&nbsp;&nbsp;\"command\": \"npx\",<br>&nbsp;&nbsp;\"args\": [\"-y\", \"@supabase/mcp-server-supabase\"],<br>&nbsp;&nbsp;\"env\": {<br>&nbsp;&nbsp;&nbsp;&nbsp;\"SUPABASE_URL\": \"...\",<br>&nbsp;&nbsp;&nbsp;&nbsp;\"SUPABASE_SERVICE_ROLE_KEY\": \"...\"<br>&nbsp;&nbsp;}<br>}</code><br>5. Mentés, Claude újraindítás<br>6. Teszt: <em>\"Hozz létre egy táblát az ügyfeleimnek: név, email, telefon, megjegyzés\"</em>",
        why: "Ha egy alkalmazásban (pl. a 'Rólam' oldaladon vagy egy ügyfélnyilvántartóban) adatokat kell tárolni, a Supabase az iparági sztenderd. Ingyen van 500MB-ig, és Claude-dal percek alatt össze lehet rakni.",
        example: "Első projekt példa: <em>\"Hozz létre egy 'ügyfelek' táblát (név, email, telefon, első kapcsolat dátum, jegyzet). Aztán adj hozzá 3 teszt ügyfelet, és kérdezz le mindenkit, akinek az email .hu-ra végződik.\"</em>",
        prompt: `Segíts beállítani a Supabase MCP-t a Claude Desktop-omban. Lépésről lépésre:

1. Hogyan regisztráljak a supabase.com-on (ingyenes fiók)
2. Hogyan hozzak létre egy új projektet (milyen nevet, régiót, jelszót)
3. Hol találom az API kulcsokat és az URL-t, amit be kell másolnom
4. Pontosan hogyan nézzen ki a config fájlba beillesztendő JSON (add meg a sablont)
5. Mik a biztonsági tudnivalók: mit NE posztoljak nyilvánosan (pl. a service_role key)
6. Mi legyen az első tábla, amit kipróbálok létrehozni

A végén kérdezd meg: mi az, amit szeretnék tárolni az első alkalmazásomban?`
      },
      {
        id: "4.6",
        title: "További MCP-k röviden: Meta, Google, Notion, Canva",
        tagline: "Egy-egy mondat mindegyikről, ahova tovább mehetsz.",
        time: 10,
        difficulty: "easy",
        what: "Sok más MCP is létezik — mindegyik egy-egy szolgáltatást kapcsol Claude-ba. Itt a négy leghasznosabb röviden, hogy tudd, mi van.",
        how: "<strong>Meta/Facebook MCP:</strong> Facebook oldal kezelése — posztolás, ütemezés, kommentek, statisztikák. Telepítés: Meta Developer fiók kell, token, config beillesztés.<br><br><strong>Google MCP:</strong> Gmail, Calendar, Drive, Docs. Olvasás, írás, ütemezés, keresés. Telepítés: Google Cloud project, OAuth setup.<br><br><strong>Notion MCP:</strong> Notion workspace elérése. Oldalak, adatbázisok olvasása-írása. Telepítés: Notion API token.<br><br><strong>Canva MCP:</strong> Canva design-ok kezelése, generálás, export. Telepítés: Canva connector Claude-on belül (egy gombnyomás).",
        why: "Az MCP-k szuperereje az, hogy <strong>egy helyről (Claude) irányítod az egész digitális életedet</strong>. Minden új MCP-vel egy új terület kerül Claude hatáskörébe — és egy új típusú automatizálás válik lehetővé.",
        example: "Összetett feladat több MCP-vel: <em>\"Nézd meg a naptáramat (Google MCP) mik a holnapi találkozóim, írj nekem egy összefoglalót Notion-be (Notion MCP), és posztolj egy 'Holnapi napomból...' posztot Facebook-ra (Meta MCP).\"</em> — egy prompt, három szolgáltatás, minden automatizált.",
        prompt: `Sorold fel a számomra leghasznosabb MCP szervereket (Meta, Google, Notion, Canva) és mindegyikhez:
1. Mit tud röviden (1 mondat)
2. Mihez érdemes használnom a napi vállalkozói munkámban (2-3 konkrét példa)
3. Mi kell a telepítéshez (fiók, API kulcs, token, stb.) röviden
4. Melyik a legegyszerűbb kezdeni és melyik a legbonyolultabb

A végén kérdezd meg: melyik szolgáltatást használom most a legtöbbet a mindennapjaimban? Azzal érdemes kezdeni.`
      }
    ]
  },

  // ============ FÁZIS 5 ============
  {
    id: 5,
    title: "Élesítés: GitHub + Cloudflare",
    subtitle: "A kódodból élő weboldal lesz — ingyen",
    lessons: [
      {
        id: "5.1",
        title: "GitHub — a kódod széfje",
        tagline: "Verziókezelés egyszerűen. Soha nem veszítesz el semmit.",
        time: 15,
        difficulty: "easy",
        what: "A GitHub egy ingyenes szolgáltatás, ahol a kódjaidat tárolod — és minden változást elment. Olyan, mint egy Google Docs kódra: visszanézheted a korábbi verziókat, megoszthatod, és ami a legfontosabb, a Cloudflare Pages ebből fog élesíteni.",
        how: "1. Regisztrálj: <a href=\"https://github.com\" target=\"_blank\" rel=\"noopener\">github.com</a> (ingyenes)<br>2. Tölts le GitHub Desktopot: <a href=\"https://desktop.github.com\" target=\"_blank\" rel=\"noopener\">desktop.github.com</a><br>3. GitHub Desktop-ban jelentkezz be<br>4. <strong>File → New Repository</strong> — adj nevet (pl. <code>rolam-oldalam</code>), válassz mappát, <strong>Create</strong><br>5. Ez egy üres 'repó' a gépeden<br>6. Húzd bele a fájljaidat<br>7. Lent: Summary mező + <strong>Commit</strong> gomb<br>8. Jobb felül: <strong>Publish repository</strong> — feltölti a GitHub-ra",
        why: "<strong>Három fontos dolog miatt:</strong> 1. Soha nem veszíted el a munkádat. 2. Visszaléphetsz bármelyik korábbi verzióra. 3. A Cloudflare Pages ebből fog automatikusan élesíteni a weboldaladat — ez a kapocs.",
        example: "Hozd létre az első repódat most: <code>sanyi-teszt</code> néven. Tedd bele egy szöveges fájlt <code>README.md</code> néven, ami csak annyit tartalmaz, hogy \"Szia, ez a tesztem\". Publikáld. Menj a github.com-ra, jelentkezz be, és látod — ott van.",
        prompt: `Vezess végig egy GitHub fiók létrehozásán és az első repó készítésén. Lépésről lépésre:
1. Hogyan regisztráljak github.com-on (mire figyeljek, milyen felhasználói név legyen)
2. Miért kell külön a GitHub Desktop app és honnan töltsem le
3. Hogyan jelentkezzem be benne
4. Hogyan hozzak létre egy új repó-t lépésről lépésre
5. Mi az a commit és mi az a push — egyszerűen magyarázva
6. Hogyan tegyek bele fájlokat és publikáljam

Magyarul, kezdőnek érthetően. Használj hasonlatot (pl. mentés Word-ben).`
      },
      {
        id: "5.2",
        title: "Cloudflare Pages — ingyen tárhely és automata deploy",
        tagline: "Push GitHub-ra → másodperc múlva él a weben.",
        time: 15,
        difficulty: "medium",
        what: "A Cloudflare Pages egy <strong>ingyenes webtárhely</strong>, ami automatikusan élesít mindent, amit GitHub-ra feltöltesz. Push = élesítés. Kapsz egy ingyenes aldomaint (pl. <code>sanyi-projekt.pages.dev</code>), amit azonnal megoszthatsz bárkivel.",
        how: "1. Regisztrálj: <a href=\"https://cloudflare.com\" target=\"_blank\" rel=\"noopener\">cloudflare.com</a> (ingyenes)<br>2. Bal menü → <strong>Workers & Pages</strong> → <strong>Create application</strong> → <strong>Pages</strong> tab → <strong>Connect to Git</strong><br>3. GitHub bejelentkezés, engedélyezd<br>4. Válaszd ki a repódat<br>5. Build settings: ha csak HTML/CSS/JS van (nincs build), hagyd üresen a Build command mezőt, Build output directory: <code>/</code><br>6. <strong>Save and Deploy</strong><br>7. 30-60 másodperc múlva kapsz egy URL-t: <code>https://projekt-neved.pages.dev</code><br>8. Kész — él a neten",
        why: "<strong>Egy teljes tárhely szolgáltatás ingyen</strong>, villámgyors globális CDN-nel. És a legjobb: minden további push (=módosítás) automatikusan élesül. Nincs FTP, nincs szervert üzemeltetni.",
        example: "A 'Rólam' oldalad a 6. fázisban ezt fogja csinálni: írod Claude Code-dal → commitolod GitHub-ra → 1 perc múlva a barátaid látják a neten.",
        prompt: `Segíts beállítani egy Cloudflare Pages projektet a GitHub repómhoz. Lépésről lépésre:
1. Hogyan regisztráljak cloudflare.com-on (ingyenes fiók)
2. Hol találom a Pages-t a felületen
3. Hogyan kötöm össze a GitHub repómmal (mire figyeljek)
4. Mit írjak a Build settings-be, ha csak statikus HTML/CSS/JS fájljaim vannak (nincs framework)
5. Mit kapok majd a végén (milyen URL, meddig tart a deploy)
6. Mi történik, ha később módosítom a repót — kell nekem valamit újraindítanom?

Magyarul, és a végén mondd el, mit jelent az, hogy 'ingyenes' — hol vannak a korlátok.`
      },
      {
        id: "5.3",
        title: "Cloudflare R2 — médiafájlok felhőben",
        tagline: "Képek, videók, PDF-ek tárolása olcsón, gyorsan.",
        time: 12,
        difficulty: "medium",
        what: "A Cloudflare R2 egy 'felhő szekrény' fájlokhoz — képeket, videókat, dokumentumokat tárolhatsz benne, és egy URL-en keresztül bárhova beágyazhatod. 10 GB-ig ingyenes.",
        how: "1. Cloudflare dashboard → bal menü → <strong>R2</strong> → <strong>Create bucket</strong><br>2. Adj nevet (pl. <code>sanyi-media</code>), location: EU<br>3. Kattints a bucket-re → <strong>Settings</strong> → <strong>Public Access</strong> → engedélyezd (ha publikus képek lesznek)<br>4. <strong>Upload</strong> gombbal tölts fel fájlt<br>5. Kattints a fájlra → <strong>Copy URL</strong> → ezt az URL-t használhatod bárhol",
        why: "A weboldaladnak valahol tárolnia kell a képeket. Normál tárhelyen fizetsz, és lassú. R2-n ingyenes, villámgyors, és megbízható. Ez az infrastruktúra, amit a nagyok is használnak.",
        example: "Töltsd fel a saját profilképedet R2-be, és kapsz egy olyan linket, mint: <code>https://pub-xxx.r2.dev/sanyi.jpg</code>. Ezt beteheted a 'Rólam' oldaladba, Facebook borítóba, emailekbe.",
        prompt: `Segíts beállítani egy Cloudflare R2 bucket-et képek tárolására. Lépésről lépésre:
1. Hol találom az R2-t a Cloudflare dashboardon
2. Hogyan hozzak létre egy bucket-et (milyen nevet, régiót)
3. Mit jelent a 'Public Access' és mikor engedélyezzem
4. Hogyan töltsek fel egy fájlt (kattintással és később esetleg automatikusan)
5. Hogyan kapok meg egy publikus URL-t, amit beilleszthetek egy weboldalba
6. Mi az ingyenes keret és mikor kezdek fizetni

A végén magyarázd el egyszerűen, mikor érdemes R2-t használni és mikor elég csak a repóba rakni a képeket.`
      },
      {
        id: "5.4",
        title: "Saját domain (opcionális — most csak tudásként)",
        tagline: "Ha eljön az ideje, így lesz saját neved a neten.",
        time: 10,
        difficulty: "easy",
        what: "A saját domain (pl. <code>sanyioldal.hu</code> vagy <code>sanyi.es</code>) egy egyedi webcím, amit megvásárolsz. Addig, amíg nincs, a Cloudflare Pages ingyenes aldomaint ad (<code>projekt.pages.dev</code>) — ez teljesen elég a kezdéshez.",
        how: "<strong>Amikor eldöntöd, hogy kell:</strong> 1. Cloudflare dashboard → <strong>Domain Registration</strong> → <strong>Register Domains</strong><br>2. Keresd meg a neved, vedd meg (~10-15 €/év)<br>3. Automatikusan a Cloudflare-hez kerül<br>4. Pages projektben: <strong>Custom domains</strong> → <strong>Add domain</strong> → írd be<br>5. 1-2 perc múlva él a saját címeden",
        why: "A profi megjelenéshez jobb egy saját név. <strong>De ne siess</strong> — a <code>pages.dev</code> aldomain ugyanúgy működik, ugyanolyan gyors. A saját domain luxus, nem szükséglet. Akkor vedd meg, amikor már tudod, mi lesz az oldal tartalma hosszú távon.",
        example: "Első körben: <code>sanyi-rolam.pages.dev</code> — tökéletes.<br>6 hónap múlva: <code>sanyi.com</code> — ha már biztos vagy a brandedben.",
        prompt: `Magyarázd el egyszerűen, mi az a domain, és mikor érdemes vásárolni. Válaszolj a következőkre:
1. Mi a különbség a pages.dev aldomain és a saját domain között (gyakorlatban)
2. Mennyibe kerül egy domain és miért pont Cloudflare-en vegyem
3. Milyen végződést válasszak (.hu, .es, .com, .net) és mi alapján
4. Amikor megveszem, pontosan mit kell csinálnom, hogy a pages.dev oldalam ezen a domainen jelenjen meg
5. Mikor NE siessek a domain vásárlással

A végén kérdezd meg: van-e már elképzelt domain név, vagy hagyjuk későbbre?`
      }
    ]
  },

  // ============ FÁZIS 6 ============
  {
    id: 6,
    title: "A saját 'Rólam' oldal",
    subtitle: "Minden, amit tanultál — egy élő weboldalban",
    lessons: [
      {
        id: "6.1",
        title: "Tervezés — kérdőív hangos angol diktálással",
        tagline: "Te beszélsz, Claude megtervezi. Angolul, gyorsan.",
        time: 30,
        difficulty: "medium",
        what: "Leülsz Claude Desktop-hoz, bekapcsolod az angol hangdiktálást (0.3 lecke!), és egy projekt-kérdőíven átvezet téged a Claude. Te angolul beszélsz, ő magyarul válaszol. A végén egy kész tervdokumentumot kapsz, amit átadsz Claude Code-nak.",
        how: "1. Nyiss egy új Claude Project-et néven: <code>Rólam oldal</code><br>2. Add hozzá a CLAUDE.md-det mint knowledge<br>3. Új beszélgetés, dupla <code>Fn</code> (diktálás)<br>4. Mondd el angolul: <em>\"I want to build a personal About Me webpage. Ask me questions in English one at a time, and after we're done, write a complete plan for Claude Code to build it.\"</em><br>5. Válaszolj a kérdéseire<br>6. A végén Claude ad egy <code>plan.md</code> szöveget — másold egy fájlba, mentsd az új projekt mappába",
        why: "Egy jó oldal <strong>jó tervvel kezdődik</strong>. Ha rögtön kódolni kezdesz, kavarodás lesz. Ha először kérdőíves tervezés van, a kivitel sima és gyors.",
        example: "A kérdések, amikre Claude rákérdez: név, mivel foglalkozol, kinek csinálod az oldalt, milyen szekciók legyenek (Rólam, Szolgáltatás, Kapcsolat, Galéria), milyen színek, milyen érzés (meleg/profi/játékos), kontakt módok, közösségi média linkek.",
        prompt: `You are my project planner. I want to build a personal "About Me" webpage for my own brand.

Please ask me questions in English, one at a time, about:
1. Who I am, what I do, where I live
2. Who is my target audience (clients, friends, family, or general public)
3. What sections should the page have (bio, services, contact, gallery, testimonials, etc.)
4. What style and mood: warm / professional / playful / minimal / bold?
5. What colors do I prefer, and what feeling should they give
6. What contact methods to include (email, phone, WhatsApp, social media)
7. Do I have any photos or logos to include
8. Any specific text or message I want on the homepage

Wait for my answer after each question before asking the next.

After all questions are answered, write a complete project plan document in English named "plan.md" that I can hand over to Claude Code to build the full site. The plan should include:
- File structure (index.html, styles.css, app.js if needed)
- Each section with its exact content and layout
- Colors as hex values, fonts as Google Font names
- Responsive behavior
- A clear build order (what to build first, second, etc.)

Answer me in Hungarian throughout the conversation, even though I'm speaking English.`
      },
      {
        id: "6.2",
        title: "Megépítés Claude Code-dal",
        tagline: "Átadod a tervet, Claude megépíti. Te csak nézed.",
        time: 60,
        difficulty: "medium",
        what: "A <code>plan.md</code>-t átadod Claude Code-nak, és ő pontosan a terv alapján megépíti az oldalt. Ha valami nem tetszik, screenshot-tal kérsz változtatást. Iteráció, amíg elégedett vagy.",
        how: "1. Új PowerShell ablak: <code>cd $HOME\\Documents</code> → <code>mkdir rolam-oldal</code> → <code>cd rolam-oldal</code><br>2. Tedd be ide a <code>plan.md</code>-t<br>3. Indítsd: <code>claude --dangerously-skip-permissions</code><br>4. Első prompt: <em>\"Read plan.md carefully and build the entire About Me page following it exactly. Use vanilla HTML, CSS, and JavaScript. When done, open it in my browser.\"</em><br>5. Hagyd dolgozni — közben nézed mit csinál<br>6. Amikor kész: megnézed a böngészőben<br>7. Ha valami nem tetszik: képernyőkép (<code>Win + Shift + S</code>) → beillesztés Claude Code-ba (<code>Ctrl + V</code>) → leírod mit változtasson",
        why: "Ez az a pont, ahol <strong>minden korábbi lecke összeáll</strong>. Terminál, Claude Code, terv, iteráció — és a végén van egy saját oldalad. Nem olvastál róla, nem elméleti — megcsináltad.",
        example: "Iterációs példa: az oldal kész, de a fejléc színe nem tetszik. Csinálj egy screenshotot, húzd be Claude Code-ba: <em>\"A fejléc színe most túl élénk, szeretnék egy visszafogottabb árnyalatot — valami melegebb barnás tónust. Frissítsd.\"</em> — Claude átírja, frissítsd a böngészőt, látod a változást.",
        prompt: `Olvasd el a plan.md fájlt, amit a mappában találsz. Utána építsd meg pontosan az oldalt, a tervben leírtak szerint. Használj tiszta HTML, CSS és JavaScript kódot (semmi framework). A kód legyen:

1. Jól strukturált — külön index.html, styles.css, és ha kell app.js fájlokra
2. Mobil-barát — minden eszközön jól nézzen ki
3. Akadálymentes — szemantikus HTML, kontraszt, billentyűzet navigáció
4. Kommentezett — magyarul, hogy később megértsem a kódot

Amikor kész vagy:
- Mutasd meg a fájl szerkezetet
- Nyisd meg az oldalt a böngészőmben (open index.html)
- Kérdezd meg: mit szeretnék változtatni rajta?

Ha kérdésed van a terv közben, kérdezz vissza. Ne feltételezz semmit.`
      },
      {
        id: "6.3",
        title: "Élesítés — GitHub → Cloudflare Pages",
        tagline: "A diadal pillanata: a saját oldalad él a neten.",
        time: 30,
        difficulty: "medium",
        what: "A kész oldalt feltöltöd GitHub-ra, összekötöd a Cloudflare Pages-szel, és élesíted. A végén van egy megosztható linked, amit elküldhetsz bárkinek.",
        how: "1. GitHub Desktop → <strong>File → Add Local Repository</strong> → válaszd ki a <code>rolam-oldal</code> mappát<br>2. Commit message: <em>\"Első verzió\"</em> → <strong>Commit</strong><br>3. <strong>Publish repository</strong> → adj nevet → <strong>Publish</strong><br>4. Cloudflare dashboard → <strong>Workers & Pages</strong> → <strong>Create application</strong> → <strong>Pages</strong> → <strong>Connect to Git</strong><br>5. Válaszd ki az új repót<br>6. Build settings: üres build command, output directory: <code>/</code><br>7. <strong>Save and Deploy</strong><br>8. 1 perc → kapod a linket: <code>https://rolam-oldal.pages.dev</code><br>9. <strong>Él.</strong> Oszd meg.",
        why: "Ez a pont az, amikor <strong>bizonyítékod van</strong> arra, hogy képes vagy rá. Nem csak elmondhatod, hogy \"AI-val dolgozom\" — mutathatsz egy linket, amit te építettél, AI-jal, 13 óra tanulás után.",
        example: "Add tovább a linket valakinek, akit jól ismersz. Nézd meg az arcán, amikor rájön, hogy ezt TE csináltad. Ez a pillanat megér mindent.",
        prompt: `Segíts élesíteni az elkészült 'Rólam oldalamat' GitHub + Cloudflare Pages használatával. Lépésről lépésre:

1. Hogyan adom hozzá a meglévő mappát a GitHub Desktop-hoz
2. Hogyan commitoljak és publikáljak GitHub-ra (mi a különbség a kettő között)
3. Cloudflare Pages-ben hogyan kötöm össze az új repóval
4. Pontosan mit írjak a Build settings-be statikus HTML oldalhoz
5. Mennyi idő után lesz élő és hogyan tudom megosztani
6. Mi történik, ha később módosítok valamit az oldalon — kell nekem bármit is újraélesíteni?

A végén gratulálj nekem, mert 32 leckén átérkeztem ide. :)`
      }
    ]
  }
];

// Expose globally
if (typeof window !== 'undefined') {
  window.CURRICULUM = CURRICULUM;
}
