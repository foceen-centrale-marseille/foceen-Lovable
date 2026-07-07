import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronRight as ArrowSmall, LayoutGrid } from "lucide-react";
import teamPhoto from "@/assets/teams/team26.jpg";


/* ------------------------------------------------------------------ */
/*  THEME                                                              */
/* ------------------------------------------------------------------ */

const THEME = {
  ink: "#0B1F3A",
  royal: "#1B497D", // royal blue requested for cover + dividers
  royalDeep: "#13365C",
  gold: "#C9A24B",
  paper: "#F6F1E7",
  rule: "#D9CBA8",
};

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

type Company = {
  name: string;
  logo?: string;
  sector: string;
  founded: string;
  location: string;
  revenue: string;
  employees: string;
  description: string;
  profiles: string[];
  positions: string[];
  recruitment: string[];
};

const fakeDesc =
  "Acteur de référence dans son secteur, l'entreprise conjugue innovation, exigence technique et engagement humain. Présente à l'international, elle place l'ingénierie et le développement durable au cœur de sa stratégie pour bâtir les solutions de demain. Ses équipes pluridisciplinaires interviennent sur des projets ambitieux et structurants, du design initial à la mise en service, en passant par la maintenance et l'amélioration continue. L'entreprise mise sur la formation de ses collaborateurs, la qualité de vie au travail et un management bienveillant pour fidéliser ses talents et accompagner leur évolution sur le long terme.";

const baseProfiles = [
  "Ingénieurs généralistes",
  "Profils techniques (mécanique, énergie, IT)",
  "Chefs de projet",
  "Consultants juniors",
];
const basePositions = ["Stage de fin d'études", "Alternance", "CDI – Jeune diplômé", "VIE"];
const baseRecruit = [
  "Candidature via site carrière",
  "Entretien RH puis technique",
  "Réponse sous 3 semaines",
];

const make = (
  name: string,
  sector: string,
  logo?: string,
  overrides: Partial<Company> = {},
): Company => ({
  name,
  logo,
  sector,
  founded: "—",
  location: "France",
  revenue: "N.C.",
  employees: "N.C.",
  description: fakeDesc,
  profiles: baseProfiles,
  positions: basePositions,
  recruitment: baseRecruit,
  ...overrides,
});

const partners = [
  { name: "Naval Group", src: "/logos/naval-group.png" },
  { name: "SNCF Réseau", src: "/logos/sncf-reseau.jpg" },
  { name: "La Mie Câline", src: "/logo-la-mie-caline.png" },
  { name: "Haribo", src: "/logos/haribo.png" },
  { name: "Batiactu", src: "/81792a_3e8f982fc8a6497ca46a98b487517d35~mv2.png" },
  { name: "Centrale Méditerranée", src: "/logo-foceen.png" },
  { name: "Métropole AMP", src: "/logo-metropole-aix-marseille.png" },
  { name: "Gomet'", src: "/logo-gomet.png" },
  { name: "Studyrama", src: "/752_ckeditor_agenda_53966_637f4194bed9f_1.png" },
  { name: "Cafés Richard", src: "/logo-cafes-richard.png" },
];

const sncf = make("SNCF Réseau", "Transport ferroviaire", "/logos/sncf-reseau.jpg", {
  founded: "1997",
  location: "Saint-Denis (93)",
  revenue: "8,2 Md €",
  employees: "53 000",
  description:
    "SNCF Réseau gère, exploite, maintient et développe les 28 000 km du réseau ferré national, deuxième plus grand d'Europe. Notre mission : garantir un transport ferroviaire sûr, performant et durable au service de tous les voyageurs et des marchandises. Nos équipes interviennent sur l'ensemble du cycle de vie de l'infrastructure : conception, modernisation, exploitation et maintenance, en intégrant les technologies les plus innovantes (numérisation du réseau, signalisation ERTMS, IA prédictive). Rejoindre SNCF Réseau, c'est contribuer concrètement à la transition écologique et à la mobilité durable dans toute la France.",
  profiles: [
    "Ingénieurs Génie Civil / Ouvrages d'art",
    "Ingénieurs Systèmes embarqués",
    "Chefs de projet infrastructure",
    "Data Engineers / IA",
  ],
  positions: ["Stage 6 mois", "Alternance", "CDI Jeune diplômé", "VIE"],
  recruitment: ["Candidature sur sncf.com/carrières", "Entretien RH + manager", "Étude technique du dossier"],
});

const navalGroup = make("Naval Group", "Défense navale", "/logos/naval-group.png", {
  founded: "1631",
  location: "Paris (75)",
  revenue: "4,4 Md €",
  employees: "15 700",
  description:
    "Naval Group est le leader européen du naval de défense. Partenaire stratégique des marines, le Groupe conçoit, construit et maintient sur toute leur durée de vie des sous-marins et navires de surface, et fournit des services pour les chantiers et bases navales. Présent dans plus de 18 pays, Naval Group investit massivement en R&D pour rester à la pointe sur des sujets complexes comme la propulsion nucléaire, la furtivité, les systèmes de combat ou la cybersécurité embarquée. Travailler chez Naval Group, c'est intégrer des projets uniques au monde, à très long terme, au service de la souveraineté nationale.",
  profiles: [
    "Ingénieurs Mécanique / Hydrodynamique",
    "Architectes navals",
    "Ingénieurs nucléaire embarqué",
    "Cybersécurité & Systèmes",
  ],
  positions: ["Stage de fin d'études", "Alternance", "CDI", "VIE"],
  recruitment: ["Dépôt CV sur naval-group.com", "Tests techniques", "Entretien RH + entretien technique"],
});

const SECTORS: { name: string; companies: Company[] }[] = [
  {
    name: "BTP",
    companies: [
      make("Bouygues Construction", "BTP", "/logos/bouygues-batiment.jpg"),
      make("Eiffage", "BTP", "/logos/eiffage.png"),
      make("Vinci Construction", "BTP", "/logos/vinci-construction.png"),
    ],
  },
  {
    name: "Énergie",
    companies: [
      make("EP2C Energy", "Énergie"),
      make("Framatome", "Énergie nucléaire", "/logos/framatome.png"),
      make("Orano", "Énergie nucléaire", "/logos/orano.png"),
      make("Technip Energies", "Énergie", "/logos/technip-energies.png"),
      make("TechnicAtome", "Énergie nucléaire", "/logos/technicatome.jpg"),
    ],
  },
  {
    name: "Industrie",
    companies: [
      make("EXAIL", "Hautes technologies", "/logos/exail.png"),
      make("France Chimie Méditerranée", "Fédération industrielle"),
      make("Groupe SNEF", "Génie électrique & industriel", "/logos/groupe-snef.png"),
      make("Onet Technologies", "Services nucléaires", "/logos/onet.png"),
    ],
  },
  {
    name: "Ingénierie",
    companies: [
      make("AKKODIS", "Ingénierie & R&D", "/logos/akkodis.png"),
      make("ASSYSTEM", "Ingénierie", "/logos/assystem.png"),
      make("Bee Engineering", "Ingénierie", "/logos/bee-engineering.jpg"),
      make("ECIA", "Ingénierie"),
      make("EMIS et EMIS Access", "Ingénierie"),
      make("Syntec-Ingénierie", "Fédération d'ingénierie", "/logos/syntec-ingenierie.png"),
    ],
  },
  {
    name: "Numérique",
    companies: [
      make("CGI", "Conseil & IT", "/logos/cgi.png"),
      make("Dassault Systèmes", "Logiciel", "/logos/dassault-systemes.png"),
      make("Murex", "Logiciel financier", "/logos/murex.png"),
      make("Onepoint", "Conseil & Digital", "/logos/onepoint.jpg"),
      make("Viveris", "Conseil & IT", "/logos/viveris.png"),
    ],
  },
  {
    name: "Conseil",
    companies: [
      make("IKOS", "Conseil", "/logos/ikos.jpg"),
      make("KPMG", "Audit & Conseil", "/logos/kpmg.jpg"),
      make("Oresys", "Conseil", "/logos/oresys.png"),
    ],
  },
  {
    name: "Défense",
    companies: [
      make("Marine Nationale", "Défense / Public", "/logos/marine-nationale.png"),
      make("Ministère des Armées", "Défense / Public", "/logos/ministere-armees.png"),
      make("THALES", "Industrie de Défense", "/logos/thales.png"),
    ],
  },
  {
    name: "Transport",
    companies: [
      make("CMA CGM", "Transport maritime", "/logos/cma-cgm.png"),
      make("MB92 La Ciotat", "Naval / Yachting", "/logos/mb92.png"),
    ],
  },
  {
    name: "Agroalimentaire",
    companies: [make("HEINEKEN", "Agro-alimentaire", "/logos/heineken.png")],
  },
];

/* ------------------------------------------------------------------ */
/*  SLIDES BUILD                                                      */
/* ------------------------------------------------------------------ */

type Slide =
  | { kind: "cover" }
  | { kind: "toc" }
  | { kind: "index" }
  | { kind: "plan" }
  | { kind: "snef-fiche" }
  | { kind: "mot-parrain" }
  | { kind: "mot-equipe" }
  | { kind: "divider"; label: string; subtitle?: string }
  | { kind: "company"; company: Company; sector?: string };

const slides: Slide[] = (() => {
  const arr: Slide[] = [
    { kind: "cover" },
    { kind: "toc" },
    { kind: "index" },
    { kind: "plan" },
    { kind: "snef-fiche" },
    { kind: "mot-parrain" },
    { kind: "mot-equipe" },
    { kind: "divider", label: "Entreprises Partenaires", subtitle: "Découvrez nos 35 partenaires" },
    { kind: "company", company: sncf, sector: "Transport" },
    { kind: "company", company: navalGroup, sector: "Défense" },
  ];
  SECTORS.forEach((s) => {
    arr.push({ kind: "divider", label: s.name });
    s.companies.forEach((c) => arr.push({ kind: "company", company: c, sector: s.name }));
  });
  return arr;
})();

const indexList = slides
  .map((s, idx) => (s.kind === "company" ? { name: s.company.name, slide: idx } : null))
  .filter(Boolean) as { name: string; slide: number }[];
indexList.sort((a, b) => a.name.localeCompare(b.name, "fr"));

/* Domain classification for the Index slide */
const DOMAIN_GROUPS: { label: string; names: string[] }[] = [
  {
    label: "Audit & Conseil",
    names: ["KPMG", "Onepoint", "Oresys", "CGI", "IKOS"],
  },
  {
    label: "Environnement, Énergie & BTP",
    names: [
      "Bouygues Construction",
      "Eiffage",
      "Vinci Construction",
      "Orano",
      "Framatome",
      "TechnicAtome",
      "Technip Energies",
      "EP2C Energy",
    ],
  },
  {
    label: "Informatique, IT & Média",
    names: ["Dassault Systèmes", "Viveris", "Murex"],
  },
  {
    label: "Ingénierie",
    names: [
      "Bee Engineering",
      "ASSYSTEM",
      "Groupe SNEF",
      "Onet Technologies",
      "AKKODIS",
      "ECIA",
    ],
  },
  {
    label: "Transports & Systèmes embarqués",
    names: [
      "SNCF Réseau",
      "Naval Group",
      "THALES",
      "Marine Nationale",
      "Ministère des Armées",
      "EXAIL",
      "MB92 La Ciotat",
      "CMA CGM",
    ],
  },
  {
    label: "Autres",
    names: [
      "HEINEKEN",
      "Syntec-Ingénierie",
      "France Chimie Méditerranée",
      "EMIS et EMIS Access",
    ],
  },
];

const groupedIndex = (() => {
  const used = new Set<string>();
  const groups = DOMAIN_GROUPS.map((g) => {
    const entries = g.names
      .map((n) => indexList.find((c) => c.name === n))
      .filter(Boolean) as { name: string; slide: number }[];
    entries.forEach((e) => used.add(e.name));
    entries.sort((a, b) => a.name.localeCompare(b.name, "fr"));
    return { label: g.label, entries };
  });
  const leftovers = indexList.filter((c) => !used.has(c.name));
  if (leftovers.length) {
    const autres = groups.find((g) => g.label === "Autres");
    if (autres) {
      autres.entries.push(...leftovers);
      autres.entries.sort((a, b) => a.name.localeCompare(b.name, "fr"));
    }
  }
  return groups.filter((g) => g.entries.length > 0);
})();

/* Which slides have a BLUE background (royal) — arrows/chrome adapt */
const isBlueSlide = (s: Slide) => s.kind === "cover" || s.kind === "divider";

/* ------------------------------------------------------------------ */
/*  ROOT                                                              */
/* ------------------------------------------------------------------ */

export default function Brochure() {
  const [i, setI] = useState(0);
  const total = slides.length;

  const go = useCallback((n: number) => setI(() => Math.max(0, Math.min(total - 1, n))), [total]);
  const next = useCallback(() => go(i + 1), [go, i]);
  const prev = useCallback(() => go(i - 1), [go, i]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") next();
      else if (e.key === "ArrowLeft" || e.key === "PageUp") prev();
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(total - 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [next, prev, go, total]);

  const current = slides[i];
  const blue = isBlueSlide(current);
  const chromeColor = blue ? "#FFFFFF" : THEME.ink;

  return (
    <div
      className="fixed inset-0 w-screen h-screen overflow-hidden font-body select-none"
      style={{ background: blue ? THEME.royal : THEME.paper, color: THEME.ink }}
      lang="fr"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {current.kind === "cover" && <CoverSlide onConsult={() => go(1)} />}
          {current.kind === "toc" && <TocSlide onJump={go} />}
          {current.kind === "index" && <IndexSlide onPick={go} />}
          {current.kind === "plan" && <PlanSlide />}
          {current.kind === "snef-fiche" && <SnefFicheSlide />}
          {current.kind === "mot-parrain" && <MotParrainSlide />}
          {current.kind === "mot-equipe" && <MotEquipeSlide />}
          {current.kind === "divider" && <DividerSlide label={current.label} />}
          {current.kind === "company" && (
            <CompanySlide
              company={current.company}
              sector={current.sector ?? current.company.sector}
              page={i + 1}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <ArrowButton side="left" disabled={i === 0} onClick={prev} onBlue={blue} />
      <ArrowButton side="right" disabled={i === total - 1} onClick={next} onBlue={blue} />

      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-4 pointer-events-none z-40">
        <div className="text-[11px] tracking-[0.35em] uppercase font-heading font-semibold" style={{ color: chromeColor }}>
          FOCEEN · Brochure 2026
        </div>
        <button
          onClick={() => go(2)}
          className="pointer-events-auto inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-heading hover:opacity-70 transition-opacity"
          style={{ color: chromeColor }}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          Index
        </button>
      </div>

      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.3em] font-heading z-40"
        style={{ color: chromeColor }}
      >
        <span className="font-bold">{String(i + 1).padStart(2, "0")}</span>
        <span className="opacity-40 mx-2">/</span>
        <span className="opacity-60">{String(total).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NAV ARROWS                                                        */
/* ------------------------------------------------------------------ */

function ArrowButton({
  side,
  onClick,
  disabled,
  onBlue,
}: {
  side: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
  onBlue: boolean;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={side === "left" ? "Page précédente" : "Page suivante"}
      className={`group absolute top-1/2 -translate-y-1/2 ${
        side === "left" ? "left-3 md:left-6" : "right-3 md:right-6"
      } w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-50 backdrop-blur-sm ${
        disabled ? "opacity-20 cursor-not-allowed" : "hover:scale-110"
      }`}
      style={{
        background: onBlue ? "rgba(255,255,255,0.12)" : "rgba(11,31,58,0.06)",
        color: onBlue ? "#FFFFFF" : THEME.ink,
        border: onBlue ? "1px solid rgba(255,255,255,0.55)" : `1px solid ${THEME.ink}33`,
      }}
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.75} />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE 1 — COVER (royal blue)                                      */
/* ------------------------------------------------------------------ */

function CoverSlide({ onConsult }: { onConsult: () => void }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-between px-6 md:px-12 pt-16 pb-8"
      style={{ background: THEME.royal, color: "#FFFFFF" }}
    >
      {/* Top white pill */}
      <div className="flex flex-col items-center gap-3 mt-4">
        <div
          className="bg-white rounded-full px-5 py-1.5 text-[11px] md:text-xs font-heading font-bold tracking-[0.25em]"
          style={{ color: THEME.royal }}
        >
          FOCEEN • 19ÈME ÉDITION
        </div>
        <p className="text-xs md:text-sm tracking-[0.35em] uppercase font-heading text-white/90">
          — 3 NOVEMBRE 2026 —
        </p>
      </div>

      {/* Middle — logo + title + CTA */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-8 w-full">
        <img
          src="/logo-foceen.png"
          alt="FOCEEN"
          className="h-16 md:h-20 object-contain"
        />
        <h1 className="font-heading font-black text-center leading-[0.95] text-5xl md:text-7xl xl:text-[110px] tracking-tight">
          BROCHURE
          <br />
          ENTREPRISES
        </h1>
        <button
          onClick={onConsult}
          className="mt-2 inline-flex items-center gap-3 px-7 py-3 rounded-full border-2 border-white text-white font-heading font-semibold tracking-[0.2em] uppercase text-xs md:text-sm hover:bg-white hover:text-[#1B497D] transition-colors"
        >
          Consulter
          <ArrowSmall className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom — white rounded card with partners */}
      <div className="w-full max-w-6xl bg-white rounded-2xl px-6 md:px-10 py-5 md:py-6 shadow-2xl">
        <p
          className="text-center text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-heading font-semibold mb-4"
          style={{ color: THEME.royal }}
        >
          Nos partenaires
        </p>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3 items-center">
          {partners.map((p) => (
            <div key={p.name} className="h-12 md:h-14 flex items-center justify-center" title={p.name}>
              <img src={p.src} alt={p.name} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE 2 — SOMMAIRE                                                */
/* ------------------------------------------------------------------ */

function TocSlide({ onJump }: { onJump: (n: number) => void }) {
  const sectorEntries = SECTORS.map((s) => {
    const idx = slides.findIndex((sl) => sl.kind === "divider" && sl.label === s.name);
    return { name: s.name, slide: idx, count: s.companies.length };
  });

  const items: { num: string; title: string; slide: number; child?: { name: string; slide: number; count?: number }[] }[] = [
    { num: "01", title: "Index des entreprises", slide: 2 },
    { num: "02", title: "Plan du Forum", slide: 3 },
    { num: "03", title: "Le Parrain — Groupe SNEF", slide: 4 },
    { num: "04", title: "Le mot du Parrain", slide: 5 },
    { num: "05", title: "Le mot de l'équipe FOCEEN", slide: 6 },
    {
      num: "06",
      title: "Entreprises Partenaires",
      slide: 7,
      child: [
        { name: "SNCF Réseau", slide: 8 },
        { name: "Naval Group", slide: 9 },
        ...sectorEntries.map((s) => ({ name: s.name, slide: s.slide, count: s.count })),
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-10 md:px-20 pt-20 pb-16" style={{ background: THEME.paper }}>
      <div className="mb-8">
        <p className="text-[11px] tracking-[0.5em] uppercase font-heading mb-2" style={{ color: THEME.royal }}>
          Sommaire
        </p>
        <h2 className="font-heading font-black text-5xl md:text-6xl tracking-tight" style={{ color: THEME.ink }}>
          SOMMAIRE
        </h2>
        <div className="mt-4 h-[3px] w-24" style={{ background: THEME.royal }} />
      </div>

      <div className="flex-1 overflow-auto pr-2">
        <ol className="space-y-3">
          {items.map((it) => (
            <li key={it.num}>
              <button
                onClick={() => onJump(it.slide)}
                className="group w-full flex items-baseline gap-5 text-left py-2 border-b transition-colors"
                style={{ borderColor: THEME.rule }}
              >
                <span className="font-heading font-bold text-2xl shrink-0" style={{ color: THEME.royal }}>
                  {it.num}
                </span>
                <span
                  className="font-heading font-semibold text-lg md:text-xl flex-1 group-hover:opacity-70 transition-opacity"
                  style={{ color: THEME.ink }}
                >
                  {it.title}
                </span>
                <span className="font-heading text-sm tracking-widest" style={{ color: THEME.ink, opacity: 0.5 }}>
                  p. {String(it.slide + 1).padStart(2, "0")}
                </span>
              </button>
              {it.child && (
                <ul className="mt-2 ml-12 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1.5">
                  {it.child.map((c) => (
                    <li key={c.name}>
                      <button
                        onClick={() => onJump(c.slide)}
                        className="text-xs md:text-sm hover:opacity-70 transition-opacity flex items-center gap-2 w-full text-left"
                        style={{ color: THEME.ink }}
                      >
                        <span style={{ color: THEME.royal }}>›</span>
                        <span className="flex-1 truncate">{c.name}</span>
                        {c.count != null && <span className="opacity-50 text-[10px]">({c.count})</span>}
                        <span className="opacity-40 text-[10px]">{String(c.slide + 1).padStart(2, "0")}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE 3 — INDEX                                                   */
/* ------------------------------------------------------------------ */

function IndexSlide({ onPick }: { onPick: (slide: number) => void }) {
  const groups = useMemo(() => groupedIndex, []);
  return (
    <div className="w-full h-full flex flex-col px-10 md:px-20 pt-20 pb-16" style={{ background: THEME.paper }}>
      <div className="mb-5 shrink-0">
        <p className="text-[11px] tracking-[0.5em] uppercase font-heading" style={{ color: THEME.royal }}>
          Annuaire
        </p>
        <h2 className="font-heading font-black text-4xl md:text-5xl mt-2" style={{ color: THEME.ink }}>
          INDEX DES ENTREPRISES
        </h2>
        <p className="text-sm mt-2 opacity-60">Classées par domaine d'activité — cliquez pour accéder à la fiche.</p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-3 brochure-scroll space-y-6">
        {groups.map((g) => (
          <section key={g.label}>
            <div className="flex items-baseline gap-4 mb-3">
              <h3
                className="font-heading font-black uppercase tracking-[0.18em] text-sm md:text-base"
                style={{ color: THEME.royal }}
              >
                {g.label}
              </h3>
              <span className="h-px flex-1" style={{ background: THEME.rule }} />
              <span className="text-[10px] font-heading opacity-60">{g.entries.length}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {g.entries.map((c) => (
                <button
                  key={c.name}
                  onClick={() => onPick(c.slide)}
                  className="group text-left rounded-lg px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:shadow-md bg-white flex items-center gap-2"
                  style={{ border: `1px solid ${THEME.rule}` }}
                >
                  <span
                    className="font-heading font-semibold text-xs leading-tight flex-1 truncate"
                    style={{ color: THEME.ink }}
                  >
                    {c.name}
                  </span>
                  <span className="text-[9px] opacity-50 shrink-0">p.{String(c.slide + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE 4 — PLAN                                                    */
/* ------------------------------------------------------------------ */

function PlanSlide() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center px-10 md:px-20 pt-20 pb-16"
      style={{ background: THEME.paper }}
    >
      <p className="text-[11px] tracking-[0.5em] uppercase font-heading mb-3" style={{ color: THEME.royal }}>
        Orientation
      </p>
      <h2 className="font-heading font-black text-5xl md:text-6xl tracking-tight mb-2" style={{ color: THEME.ink }}>
        PLAN DU FORUM
      </h2>
      <div className="h-[3px] w-24 mb-10" style={{ background: THEME.royal }} />

      <div
        className="w-full max-w-5xl flex-1 max-h-[60vh] rounded-2xl flex items-center justify-center"
        style={{ background: "white", border: `4px dashed ${THEME.rule}` }}
      >
        <div className="text-center px-6">
          <p className="font-heading text-sm tracking-[0.3em] uppercase opacity-60" style={{ color: THEME.ink }}>
            Emplacement réservé
          </p>
          <p className="mt-2 text-2xl font-heading font-bold" style={{ color: THEME.ink }}>
            Plan du Forum FOCEEN 2026
          </p>
          <p className="mt-2 text-sm opacity-50" style={{ color: THEME.ink }}>
            Image à insérer
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE 5 — SNEF                                                    */
/* ------------------------------------------------------------------ */

function SnefFicheSlide() {
  return (
    <div
      className="w-full h-full px-10 md:px-20 pt-20 pb-16 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:items-stretch overflow-hidden"
      style={{ background: THEME.paper }}
    >
      <div className="flex flex-col items-center lg:items-start gap-6 lg:justify-center">
        <div
          className="bg-white rounded-2xl w-full max-w-sm h-56 flex items-center justify-center p-8"
          style={{ border: `1px solid ${THEME.rule}` }}
        >
          <img src="/logos/groupe-snef.png" alt="Groupe SNEF" className="max-h-32 object-contain" />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.45em] uppercase font-heading" style={{ color: THEME.royal }}>
            Parrain de l'édition
          </p>
          <h2 className="font-heading font-black text-5xl mt-2" style={{ color: THEME.ink }}>
            GROUPE SNEF
          </h2>
          <div className="mt-3 h-[3px] w-20" style={{ background: THEME.royal }} />
        </div>
      </div>

      <div className="min-h-0 overflow-y-auto pr-3 brochure-scroll space-y-5">
        {[
          { label: "Secteur d'activité", value: "Génie électrique, instrumentation, automatismes, IT industriel" },
          { label: "Année de création", value: "1905" },
          { label: "Localisation", value: "Marseille (siège) — implantations mondiales" },
          { label: "Chiffre d'affaires", value: "≈ 1,3 Md €" },
          { label: "Effectifs", value: "12 500 collaborateurs" },
        ].map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-[180px_1fr] gap-4 pb-3"
            style={{ borderBottom: `1px solid ${THEME.rule}` }}
          >
            <span className="text-xs font-heading uppercase tracking-widest opacity-60">{r.label}</span>
            <span className="font-heading font-semibold text-sm md:text-base" style={{ color: THEME.ink }}>
              {r.value}
            </span>
          </div>
        ))}
        <p className="mt-6 text-sm md:text-base leading-relaxed" style={{ color: THEME.ink }}>
          Le Groupe SNEF accompagne ses clients industriels dans la conception, la réalisation et la maintenance de leurs
          installations électriques et numériques. Acteur historique de la transition énergétique et digitale, SNEF intervient
          dans l'énergie, l'industrie, le naval, le transport et les infrastructures. Le Groupe place l'innovation, la sécurité
          et la performance opérationnelle au cœur de ses engagements, tout en investissant durablement dans la formation et
          l'évolution de ses collaborateurs.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  WORD SLIDES                                                       */
/* ------------------------------------------------------------------ */

function WordSlide({
  tag,
  title,
  text,
  author,
  role,
  image,
  imageAlt,
}: {
  tag: string;
  title: string;
  text: string;
  author: string;
  role: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div className="w-full h-full grid lg:grid-cols-[1fr_1.3fr] overflow-hidden" style={{ background: THEME.paper }}>
      <div className="flex items-center justify-center px-10 md:px-16 py-20" style={{ background: THEME.royal }}>
        {image ? (
          <div
            className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: `2px solid rgba(255,255,255,0.5)` }}
          >
            <img src={image} alt={imageAlt ?? ""} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div
            className="w-full max-w-sm aspect-[3/4] rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.08)", border: `2px dashed rgba(255,255,255,0.5)` }}
          >
            <span className="text-[11px] tracking-[0.4em] uppercase font-heading text-white/80">Photo</span>
          </div>
        )}
      </div>

      <div className="flex flex-col px-10 md:px-20 py-16 min-h-0 overflow-hidden">
        <div className="shrink-0">
          <p className="text-[11px] tracking-[0.45em] uppercase font-heading mb-4" style={{ color: THEME.royal }}>
            {tag}
          </p>
          <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight" style={{ color: THEME.ink }}>
            {title}
          </h2>
          <div className="mt-4 h-[3px] w-20" style={{ background: THEME.royal }} />
          <div
            className="mt-6 text-7xl leading-none opacity-30"
            style={{ color: THEME.royal, fontFamily: "Georgia, serif" }}
          >
            «
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-3 brochure-scroll mt-2">
          <p className="text-base md:text-lg leading-relaxed italic max-w-xl" style={{ color: THEME.ink }}>
            {text}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-3 shrink-0">
          <div className="h-px w-10" style={{ background: THEME.royal }} />
          <div>
            <p className="font-heading font-bold text-base" style={{ color: THEME.ink }}>
              {author}
            </p>
            <p className="text-xs opacity-70 mt-0.5">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MotParrainSlide() {
  return (
    <WordSlide
      tag="Le mot du Parrain"
      title="MOT DU PARRAIN"
      text="C'est avec une grande fierté que le Groupe SNEF parraine cette nouvelle édition du FOCEEN. Forum incontournable, il symbolise la rencontre entre l'excellence académique de Centrale Méditerranée et les besoins concrets de l'industrie. Nous y voyons une opportunité unique d'échanger avec les ingénieurs de demain et de partager nos métiers. À travers ce parrainage, nous souhaitons réaffirmer notre attachement au territoire, à la formation des futurs talents et à la transmission de notre passion pour l'ingénierie et l'innovation industrielle."
      author="Direction Groupe SNEF"
      role="Parrain de la 19ᵉ édition"
    />
  );
}

function MotEquipeSlide() {
  return (
    <WordSlide
      tag="Le mot de l'équipe"
      title="MOT DE L'ÉQUIPE"
      text="Pendant un an, notre équipe d'élèves-ingénieurs a porté l'ambition de faire du FOCEEN un moment d'exception. Cette brochure est le fruit de cet engagement : un outil pour vous présenter en détail les entreprises qui nous font confiance et les opportunités qu'elles offrent. Nous tenons à remercier chaleureusement nos partenaires, l'école Centrale Méditerranée et tous les bénévoles qui rendent cette 19ᵉ édition possible. Bonne lecture, et rendez-vous le 03 novembre 2026 au Parc Chanot pour vivre ensemble cette journée dédiée à votre avenir professionnel."
      author="Bureau FOCEEN"
      role="Mandat 2025 – 2026"
      image={teamPhoto}
      imageAlt="Équipe FOCEEN 2026"
    />
  );
}

/* ------------------------------------------------------------------ */
/*  DIVIDER SLIDE — solid royal blue, huge centered white label       */
/* ------------------------------------------------------------------ */

function DividerSlide({ label }: { label: string }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center px-10"
      style={{ background: THEME.royal, color: "#FFFFFF" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          background:
            "radial-gradient(ellipse at top right, #ffffff 0%, transparent 55%), radial-gradient(ellipse at bottom left, #ffffff 0%, transparent 55%)",
        }}
      />
      <p className="text-[11px] tracking-[0.5em] uppercase font-heading mb-8 text-white/70">— Secteur —</p>
      <h2 className="font-heading font-black tracking-[0.12em] uppercase text-6xl md:text-8xl xl:text-[140px] text-center leading-[0.95]">
        {label}
      </h2>
      <div className="mt-10 h-[3px] w-40 bg-white/70" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPANY SLIDE — readable, centered, internal scroll on the bio    */
/* ------------------------------------------------------------------ */

function CompanySlide({
  company,
  sector,
  page,
}: {
  company: Company;
  sector: string;
  page: number;
}) {
  return (
    <div
      className="w-full h-full flex flex-col items-center px-4 md:px-8 pt-14 pb-14 overflow-hidden"
      style={{ background: THEME.paper }}
    >
      {/* Sector pill */}
      <div className="shrink-0 mb-4">
        <div className="flex justify-center w-full">
          <div
            className="inline-flex items-center justify-center px-8 md:px-12 py-2.5 md:py-3 rounded-full"
            style={{ border: `3px solid ${THEME.royal}` }}
          >
            <span
              className="font-heading font-bold uppercase tracking-[0.25em] text-base md:text-xl"
              style={{ color: THEME.royal }}
            >
              {sector}
            </span>
          </div>
        </div>
      </div>

      {/* Centered white card */}
      <div
        className="w-full max-w-6xl flex-1 min-h-0 rounded-[24px] bg-white shadow-[0_20px_50px_-25px_rgba(11,31,58,0.35)] flex flex-col overflow-hidden"
        style={{ border: `2px solid ${THEME.royal}` }}
      >
        {/* Header — logo + key info */}
        <div
          className="grid grid-cols-12 gap-5 p-5 md:p-7 shrink-0"
          style={{ borderBottom: `1px solid ${THEME.rule}` }}
        >
          <div className="col-span-12 md:col-span-4 flex flex-col items-center md:items-start gap-3">
            <div
              className="w-full max-w-[240px] aspect-[4/3] bg-white rounded-xl flex items-center justify-center p-4"
              style={{ border: `1px solid ${THEME.rule}` }}
            >
              {company.logo ? (
                <img src={company.logo} alt={company.name} className="max-h-full max-w-full object-contain" />
              ) : (
                <span className="font-heading font-bold text-lg text-center" style={{ color: THEME.ink }}>
                  {company.name}
                </span>
              )}
            </div>
            <h3
              className="font-heading font-black text-xl md:text-2xl leading-tight tracking-tight text-center md:text-left"
              style={{ color: THEME.ink }}
            >
              {company.name}
            </h3>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 content-center">
            {[
              { l: "Secteur", v: company.sector },
              { l: "Création", v: company.founded },
              { l: "Localisation", v: company.location },
              { l: "Chiffre d'affaires", v: company.revenue },
              { l: "Effectifs", v: company.employees },
            ].map((r) => (
              <div key={r.l} className="flex flex-col">
                <span
                  className="font-heading text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: THEME.royal }}
                >
                  {r.l}
                </span>
                <span className="font-heading font-semibold text-sm md:text-base" style={{ color: THEME.ink }}>
                  {r.v}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Body — two columns */}
        <div className="flex-1 min-h-0 grid grid-cols-12 gap-0">
          {/* LEFT — Présentation (scrolls internally) */}
          <div
            className="col-span-12 md:col-span-7 p-5 md:p-7 flex flex-col min-h-0"
            style={{ borderRight: `1px solid ${THEME.rule}` }}
          >
            <p
              className="font-heading font-bold text-xs md:text-sm uppercase tracking-[0.18em] mb-3 flex items-center gap-2 shrink-0"
              style={{ color: THEME.royal }}
            >
              <span>›</span> Présentation de l'entreprise
            </p>
            <div className="flex-1 min-h-0 overflow-y-auto pr-3 brochure-scroll">
              <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: THEME.ink }}>
                {company.description}
              </p>
            </div>
          </div>

          {/* RIGHT — Profiles / Positions / Recruitment stacked */}
          <div className="col-span-12 md:col-span-5 p-5 md:p-7 flex flex-col gap-5 min-h-0 overflow-y-auto brochure-scroll">
            <SmallBlock title="Profils recherchés">
              <ul className="space-y-1.5">
                {company.profiles.map((p) => (
                  <li key={p} className="text-xs md:text-sm flex items-start gap-2" style={{ color: THEME.ink }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0" style={{ background: THEME.royal }} />
                    {p}
                  </li>
                ))}
              </ul>
            </SmallBlock>

            <SmallBlock title="Types de postes">
              <div className="flex flex-wrap gap-1.5">
                {company.positions.map((p) => (
                  <span
                    key={p}
                    className="px-2.5 py-1 rounded-full text-[10px] font-heading font-semibold uppercase tracking-wider"
                    style={{ background: THEME.royal, color: "#FFFFFF" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </SmallBlock>

            <SmallBlock title="Modalités de recrutement">
              <ul className="space-y-1.5">
                {company.recruitment.map((r) => (
                  <li key={r} className="text-xs md:text-sm flex items-start gap-2" style={{ color: THEME.ink }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0" style={{ background: THEME.royal }} />
                    {r}
                  </li>
                ))}
              </ul>
            </SmallBlock>
          </div>
        </div>
      </div>

      {/* page-number circle */}
      <div
        className="mt-3 w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-xs shrink-0"
        style={{ border: `2px solid ${THEME.royal}`, color: THEME.royal, background: THEME.paper }}
      >
        {page}
      </div>
    </div>
  );
}

function SmallBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <p
        className="font-heading font-bold text-xs uppercase tracking-[0.18em] mb-2 flex items-center gap-2"
        style={{ color: THEME.royal }}
      >
        <span>›</span> {title}
      </p>
      {children}
    </div>
  );
}
