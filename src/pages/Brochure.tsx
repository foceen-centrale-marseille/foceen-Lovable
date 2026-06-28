import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import logoWhite from "@/assets/logo_foceen_white.png";

/* ------------------------------------------------------------------ */
/*  THEME — institutional paper / deep navy / warm gold                */
/* ------------------------------------------------------------------ */

const THEME = {
  ink: "#0B1F3A",
  inkSoft: "#152D52",
  gold: "#C9A24B",
  goldSoft: "#E8D9B0",
  paper: "#F6F1E7",
  paperDeep: "#EFE6D2",
  rule: "#D9CBA8",
  frame: "#0B1F3A",
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
  "Acteur de référence dans son secteur, l'entreprise conjugue innovation, exigence technique et engagement humain. Présente à l'international, elle place l'ingénierie et le développement durable au cœur de sa stratégie pour bâtir les solutions de demain.";

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
  { name: "Centrale Méditerranée", src: logoWhite },
  { name: "Métropole AMP", src: "/logo-metropole-aix-marseille.png" },
  { name: "Gomet'", src: "/logo-gomet.png" },
  { name: "Studyrama", src: "/752_ckeditor_agenda_53966_637f4194bed9f_1.png" },
  { name: "Cafés Richard", src: "/logo-cafes-richard.png" },
];

/* Featured companies (pages 9-10) */
const sncf = make("SNCF Réseau", "Transport ferroviaire", "/logos/sncf-reseau.jpg", {
  founded: "1997",
  location: "Saint-Denis (93)",
  revenue: "8,2 Md €",
  employees: "53 000",
  description:
    "SNCF Réseau gère, exploite, maintient et développe les 28 000 km du réseau ferré national, deuxième plus grand d'Europe. Notre mission : garantir un transport ferroviaire sûr, performant et durable au service de tous les voyageurs et des marchandises.",
  profiles: [
    "Ingénieurs Génie Civil / Ouvrages d'art",
    "Ingénieurs Systèmes embarqués",
    "Chefs de projet infrastructure",
    "Data Engineers / IA",
  ],
  positions: ["Stage 6 mois", "Alternance", "CDI Jeune diplômé", "VIE"],
  recruitment: [
    "Candidature sur sncf.com/carrières",
    "Entretien RH + manager",
    "Étude technique du dossier",
  ],
});

const navalGroup = make("Naval Group", "Défense navale", "/logos/naval-group.png", {
  founded: "1631",
  location: "Paris (75)",
  revenue: "4,4 Md €",
  employees: "15 700",
  description:
    "Naval Group est le leader européen du naval de défense. Partenaire stratégique des marines, le Groupe conçoit, construit et maintient sur toute leur durée de vie des sous-marins et navires de surface, et fournit des services pour les chantiers et bases navales.",
  profiles: [
    "Ingénieurs Mécanique / Hydrodynamique",
    "Architectes navals",
    "Ingénieurs nucléaire embarqué",
    "Cybersécurité & Systèmes",
  ],
  positions: ["Stage de fin d'études", "Alternance", "CDI", "VIE"],
  recruitment: [
    "Dépôt CV sur naval-group.com",
    "Tests techniques",
    "Entretien RH + entretien technique",
  ],
});

/* Sector groupings (PAGES SUIVANTES). Order = display order. */
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
    name: "Audit & Conseil",
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

/* Flat alphabetical list for the Index slide (with target slide index) */
const indexList = slides
  .map((s, idx) => (s.kind === "company" ? { name: s.company.name, slide: idx } : null))
  .filter(Boolean) as { name: string; slide: number }[];
indexList.sort((a, b) => a.name.localeCompare(b.name, "fr"));

/* ------------------------------------------------------------------ */
/*  ROOT                                                              */
/* ------------------------------------------------------------------ */

export default function Brochure() {
  const [i, setI] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (n: number) => setI(() => Math.max(0, Math.min(total - 1, n))),
    [total],
  );
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

  return (
    <div
      className="fixed inset-0 w-screen h-screen overflow-hidden font-body select-none"
      style={{ background: THEME.paper, color: THEME.ink }}
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
          {current.kind === "cover" && <CoverSlide />}
          {current.kind === "toc" && <TocSlide onJump={go} />}
          {current.kind === "index" && <IndexSlide onPick={go} />}
          {current.kind === "plan" && <PlanSlide />}
          {current.kind === "snef-fiche" && <SnefFicheSlide />}
          {current.kind === "mot-parrain" && <MotParrainSlide />}
          {current.kind === "mot-equipe" && <MotEquipeSlide />}
          {current.kind === "divider" && (
            <DividerSlide label={current.label} subtitle={current.subtitle} />
          )}
          {current.kind === "company" && (
            <CompanySlide
              company={current.company}
              sector={current.sector ?? current.company.sector}
              page={i + 1}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Nav arrows */}
      <ArrowButton side="left" disabled={i === 0} onClick={prev} />
      <ArrowButton side="right" disabled={i === total - 1} onClick={next} />

      {/* Top chrome */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-4 pointer-events-none">
        <div
          className="text-[11px] tracking-[0.35em] uppercase font-heading font-semibold"
          style={{ color: THEME.ink }}
        >
          FOCEEN · Brochure 2026
        </div>
        <button
          onClick={() => go(2)}
          className="pointer-events-auto inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-heading hover:opacity-70 transition-opacity"
          style={{ color: THEME.ink }}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          Index
        </button>
      </div>

      {/* Page counter */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.3em] font-heading"
        style={{ color: THEME.ink }}
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
}: {
  side: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={side === "left" ? "Page précédente" : "Page suivante"}
      className={`group absolute top-1/2 -translate-y-1/2 ${
        side === "left" ? "left-3 md:left-6" : "right-3 md:right-6"
      } w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 z-50 ${
        disabled ? "opacity-20 cursor-not-allowed" : "hover:scale-110"
      }`}
      style={{
        background: THEME.ink,
        color: THEME.paper,
        boxShadow: "0 12px 30px -10px rgba(11,31,58,0.45)",
      }}
    >
      <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Reusable: SECTOR PILL (matches PDF template)                      */
/* ------------------------------------------------------------------ */

function SectorPill({ label }: { label: string }) {
  return (
    <div className="flex justify-center w-full">
      <div
        className="relative inline-flex items-center justify-center px-10 md:px-14 py-3 md:py-4 rounded-full"
        style={{ border: `4px solid ${THEME.frame}` }}
      >
        <span
          className="font-heading font-bold uppercase tracking-[0.25em] text-xl md:text-3xl"
          style={{ color: THEME.frame }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE 1 — COVER                                                   */
/* ------------------------------------------------------------------ */

function CoverSlide() {
  return (
    <div className="w-full h-full flex flex-col px-10 md:px-20 pt-16 pb-12" style={{ background: THEME.paper }}>
      <div className="flex-1 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
        {/* Left — title block */}
        <div className="relative">
          <p
            className="text-[11px] tracking-[0.45em] uppercase mb-6 font-heading"
            style={{ color: THEME.gold }}
          >
            19ᵉ édition · 03 novembre 2026 · Parc Chanot
          </p>
          <h1
            className="font-heading font-black leading-[0.9] text-6xl md:text-7xl xl:text-8xl tracking-tight"
            style={{ color: THEME.ink }}
          >
            BROCHURE
            <br />
            <span style={{ color: THEME.gold }}>ENTREPRISE</span>
          </h1>
          <div className="mt-8 h-[3px] w-32" style={{ background: THEME.gold }} />
          <p className="mt-8 max-w-md text-base md:text-lg leading-relaxed" style={{ color: THEME.ink }}>
            Forum Centrale Méditerranée Entreprises — Panorama complet des 35 entreprises présentes
            au plus grand forum étudiant du Sud.
          </p>
        </div>

        {/* Right — Parrain highlight */}
        <div
          className="relative rounded-3xl p-8 md:p-10 flex flex-col items-center"
          style={{ background: THEME.ink, color: THEME.paper }}
        >
          <p
            className="text-[10px] tracking-[0.5em] uppercase font-heading mb-5"
            style={{ color: THEME.gold }}
          >
            Parrain officiel
          </p>
          <div
            className="rounded-2xl bg-white w-full h-40 flex items-center justify-center p-6 mb-6"
          >
            <img src="/logos/groupe-snef.png" alt="Groupe SNEF" className="max-h-24 object-contain" />
          </div>
          <h2 className="font-heading font-bold text-3xl mb-2 text-center">Groupe SNEF</h2>
          <p className="text-sm opacity-80 text-center leading-relaxed max-w-sm">
            Acteur majeur du génie électrique et industriel, partenaire engagé de l'édition 2026.
          </p>
        </div>
      </div>

      {/* Bottom — partners strip */}
      <div className="mt-10">
        <p
          className="text-[10px] tracking-[0.4em] uppercase font-heading mb-3"
          style={{ color: THEME.gold }}
        >
          Partenaires institutionnels & médias
        </p>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {partners.map((p) => (
            <div
              key={p.name}
              className="h-14 rounded-md flex items-center justify-center p-2 bg-white"
              style={{ border: `1px solid ${THEME.rule}` }}
              title={p.name}
            >
              <img src={p.src} alt={p.name} className="max-h-9 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE 2 — TABLE OF CONTENTS (SOMMAIRE)                            */
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
        <p
          className="text-[11px] tracking-[0.5em] uppercase font-heading mb-2"
          style={{ color: THEME.gold }}
        >
          Sommaire
        </p>
        <h2 className="font-heading font-black text-5xl md:text-6xl tracking-tight" style={{ color: THEME.ink }}>
          SOMMAIRE
        </h2>
        <div className="mt-4 h-[3px] w-24" style={{ background: THEME.gold }} />
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
                <span
                  className="font-heading font-bold text-2xl shrink-0"
                  style={{ color: THEME.gold }}
                >
                  {it.num}
                </span>
                <span
                  className="font-heading font-semibold text-lg md:text-xl flex-1 group-hover:opacity-70 transition-opacity"
                  style={{ color: THEME.ink }}
                >
                  {it.title}
                </span>
                <span
                  className="font-heading text-sm tracking-widest"
                  style={{ color: THEME.ink, opacity: 0.5 }}
                >
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
                        <span style={{ color: THEME.gold }}>›</span>
                        <span className="flex-1 truncate">{c.name}</span>
                        {c.count != null && (
                          <span className="opacity-50 text-[10px]">({c.count})</span>
                        )}
                        <span className="opacity-40 text-[10px]">
                          {String(c.slide + 1).padStart(2, "0")}
                        </span>
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
  const list = useMemo(() => indexList, []);
  return (
    <div className="w-full h-full flex flex-col px-10 md:px-20 pt-20 pb-16" style={{ background: THEME.paper }}>
      <div className="mb-5">
        <p
          className="text-[11px] tracking-[0.5em] uppercase font-heading"
          style={{ color: THEME.gold }}
        >
          Annuaire
        </p>
        <h2 className="font-heading font-black text-4xl md:text-5xl mt-2" style={{ color: THEME.ink }}>
          INDEX DES ENTREPRISES
        </h2>
        <p className="text-sm mt-2 opacity-60">Cliquez pour accéder à la fiche.</p>
      </div>

      <div className="flex-1 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 content-start overflow-auto pr-2">
        {list.map((c, idx) => (
          <button
            key={c.name + idx}
            onClick={() => onPick(c.slide)}
            className="group text-left rounded-lg px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:shadow-md bg-white flex items-center gap-2"
            style={{ border: `1px solid ${THEME.rule}` }}
          >
            <span
              className="font-heading font-bold text-[10px] w-6 h-6 rounded-full flex items-center justify-center shrink-0"
              style={{ background: THEME.ink, color: THEME.paper }}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
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
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE 4 — PLAN DU FORUM                                           */
/* ------------------------------------------------------------------ */

function PlanSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-10 md:px-20 pt-20 pb-16" style={{ background: THEME.paper }}>
      <p
        className="text-[11px] tracking-[0.5em] uppercase font-heading mb-3"
        style={{ color: THEME.gold }}
      >
        Orientation
      </p>
      <h2 className="font-heading font-black text-5xl md:text-6xl tracking-tight mb-2" style={{ color: THEME.ink }}>
        PLAN DU FORUM
      </h2>
      <div className="h-[3px] w-24 mb-10" style={{ background: THEME.gold }} />

      <div
        className="w-full max-w-5xl flex-1 max-h-[60vh] rounded-2xl flex items-center justify-center"
        style={{
          background: "white",
          border: `4px dashed ${THEME.rule}`,
        }}
      >
        <div className="text-center px-6">
          <p
            className="font-heading text-sm tracking-[0.3em] uppercase opacity-60"
            style={{ color: THEME.ink }}
          >
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
/*  SLIDE 5 — SNEF EXPLICATIVE                                        */
/* ------------------------------------------------------------------ */

function SnefFicheSlide() {
  return (
    <div className="w-full h-full px-10 md:px-20 pt-20 pb-16 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center" style={{ background: THEME.paper }}>
      <div className="flex flex-col items-center lg:items-start gap-6">
        <div
          className="bg-white rounded-2xl w-full max-w-sm h-56 flex items-center justify-center p-8"
          style={{ border: `1px solid ${THEME.rule}` }}
        >
          <img src="/logos/groupe-snef.png" alt="Groupe SNEF" className="max-h-32 object-contain" />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.45em] uppercase font-heading" style={{ color: THEME.gold }}>
            Parrain de l'édition
          </p>
          <h2 className="font-heading font-black text-5xl mt-2" style={{ color: THEME.ink }}>
            GROUPE SNEF
          </h2>
          <div className="mt-3 h-[3px] w-20" style={{ background: THEME.gold }} />
        </div>
      </div>

      <div className="space-y-5">
        {[
          { label: "Secteur d'activité", value: "Génie électrique, instrumentation, automatismes, IT industriel" },
          { label: "Année de création", value: "1905" },
          { label: "Localisation", value: "Marseille (siège) — implantations mondiales" },
          { label: "Chiffre d'affaires", value: "≈ 1,3 Md €" },
          { label: "Effectifs", value: "12 500 collaborateurs" },
        ].map((r) => (
          <div key={r.label} className="grid grid-cols-[180px_1fr] gap-4 pb-3" style={{ borderBottom: `1px solid ${THEME.rule}` }}>
            <span className="text-xs font-heading uppercase tracking-widest opacity-60">{r.label}</span>
            <span className="font-heading font-semibold text-sm md:text-base" style={{ color: THEME.ink }}>
              {r.value}
            </span>
          </div>
        ))}
        <p className="mt-6 text-sm md:text-base leading-relaxed" style={{ color: THEME.ink }}>
          Le Groupe SNEF accompagne ses clients industriels dans la conception, la réalisation et la maintenance
          de leurs installations électriques et numériques. Acteur historique de la transition énergétique et
          digitale, SNEF intervient dans l'énergie, l'industrie, le naval, le transport et les infrastructures.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE 6 / 7 — MOT DU PARRAIN / MOT DE L'ÉQUIPE                    */
/* ------------------------------------------------------------------ */

function WordSlide({
  tag,
  title,
  text,
  author,
  role,
}: {
  tag: string;
  title: string;
  text: string;
  author: string;
  role: string;
}) {
  return (
    <div className="w-full h-full grid lg:grid-cols-[1fr_1.3fr]" style={{ background: THEME.paper }}>
      {/* Photo placeholder */}
      <div className="flex items-center justify-center px-10 md:px-16 py-20" style={{ background: THEME.ink }}>
        <div
          className="w-full max-w-sm aspect-[3/4] rounded-2xl flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: `2px dashed ${THEME.gold}`,
          }}
        >
          <span
            className="text-[11px] tracking-[0.4em] uppercase font-heading"
            style={{ color: THEME.gold }}
          >
            Photo
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center px-10 md:px-20 py-20">
        <p
          className="text-[11px] tracking-[0.45em] uppercase font-heading mb-4"
          style={{ color: THEME.gold }}
        >
          {tag}
        </p>
        <h2
          className="font-heading font-black text-4xl md:text-5xl tracking-tight"
          style={{ color: THEME.ink }}
        >
          {title}
        </h2>
        <div className="mt-4 h-[3px] w-20" style={{ background: THEME.gold }} />
        <div
          className="mt-6 text-7xl leading-none opacity-30"
          style={{ color: THEME.gold, fontFamily: "Georgia, serif" }}
        >
          «
        </div>
        <p className="text-base md:text-lg leading-relaxed italic max-w-xl" style={{ color: THEME.ink }}>
          {text}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px w-10" style={{ background: THEME.gold }} />
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
      text="C'est avec une grande fierté que le Groupe SNEF parraine cette nouvelle édition du FOCEEN. Forum incontournable, il symbolise la rencontre entre l'excellence académique de Centrale Méditerranée et les besoins concrets de l'industrie. Nous y voyons une opportunité unique d'échanger avec les ingénieurs de demain et de partager nos métiers."
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
      text="Pendant un an, notre équipe d'élèves-ingénieurs a porté l'ambition de faire du FOCEEN un moment d'exception. Cette brochure est le fruit de cet engagement : un outil pour vous présenter en détail les entreprises qui nous font confiance et les opportunités qu'elles offrent. Bonne lecture, et rendez-vous le 03 novembre 2026."
      author="Bureau FOCEEN"
      role="Mandat 2025 – 2026"
    />
  );
}

/* ------------------------------------------------------------------ */
/*  DIVIDER SLIDE — INTERCALAIRE SECTEUR                              */
/* ------------------------------------------------------------------ */

function DividerSlide({ label, subtitle }: { label: string; subtitle?: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-10" style={{ background: THEME.paper }}>
      <p
        className="text-[11px] tracking-[0.5em] uppercase font-heading mb-8"
        style={{ color: THEME.gold }}
      >
        — Secteur —
      </p>
      <h2
        className="font-heading font-black tracking-[0.15em] uppercase text-5xl md:text-7xl xl:text-8xl text-center"
        style={{ color: THEME.ink }}
      >
        {label}
      </h2>
      <div className="mt-8 h-[3px] w-32" style={{ background: THEME.gold }} />
      {subtitle && (
        <p className="mt-8 text-base md:text-lg opacity-70 max-w-xl text-center" style={{ color: THEME.ink }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPANY SLIDE — strict template from the imported PDF             */
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
      className="w-full h-full flex flex-col px-8 md:px-16 pt-14 pb-16"
      style={{ background: THEME.paper }}
    >
      {/* SECTOR PILL */}
      <div className="shrink-0 mb-6">
        <SectorPill label={sector} />
      </div>

      {/* MAIN CARD — rounded navy frame */}
      <div
        className="relative rounded-[28px] p-6 md:p-8 grid grid-cols-12 gap-6"
        style={{ border: `3px solid ${THEME.frame}`, background: "rgba(255,255,255,0.55)" }}
      >
        {/* LEFT — logo + name */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start gap-4">
          <div
            className="w-full max-w-[260px] aspect-[4/3] bg-white rounded-xl flex items-center justify-center p-5"
            style={{ border: `1px solid ${THEME.rule}` }}
          >
            {company.logo ? (
              <img src={company.logo} alt={company.name} className="max-h-full max-w-full object-contain" />
            ) : (
              <span className="font-heading font-bold text-2xl text-center" style={{ color: THEME.ink }}>
                {company.name}
              </span>
            )}
          </div>
          <div className="text-center md:text-left w-full">
            <h3
              className="font-heading font-black text-2xl md:text-3xl leading-tight tracking-tight"
              style={{ color: THEME.ink }}
            >
              {company.name}
            </h3>
            <div className="mt-2 h-[2px] w-20 mx-auto md:mx-0" style={{ background: THEME.ink }} />
          </div>
        </div>

        {/* RIGHT — key info rows */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center gap-3 md:gap-4">
          {[
            { l: "Secteur d'activité", v: company.sector },
            { l: "Année de création", v: company.founded },
            { l: "Localisation", v: company.location },
            { l: "Chiffre d'affaires", v: company.revenue },
            { l: "Nombre d'employés", v: company.employees },
          ].map((r) => (
            <div key={r.l} className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-3 items-baseline">
              <span
                className="font-heading text-sm md:text-base"
                style={{ color: THEME.ink, opacity: 0.85 }}
              >
                {r.l} :
              </span>
              <span
                className="font-heading font-semibold text-sm md:text-base"
                style={{ color: THEME.ink }}
              >
                {r.v}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FOUR CONTENT BLOCKS BELOW — two columns linked by central rule */}
      <div className="flex-1 grid grid-cols-12 gap-6 mt-6 min-h-0 relative">
        {/* central vertical rule */}
        <div
          className="hidden md:block absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-[2px]"
          style={{ background: THEME.frame }}
        />

        <div className="col-span-12 md:col-span-6 grid grid-rows-2 gap-5 pr-0 md:pr-6">
          <Block title="Présentation de l'entreprise">
            <p className="text-xs md:text-sm leading-relaxed" style={{ color: THEME.ink }}>
              {company.description}
            </p>
          </Block>
          <Block title="Profils recherchés">
            <ul className="space-y-1.5">
              {company.profiles.map((p) => (
                <li
                  key={p}
                  className="text-xs md:text-sm flex items-start gap-2"
                  style={{ color: THEME.ink }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                    style={{ background: THEME.gold }}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <div className="col-span-12 md:col-span-6 grid grid-rows-2 gap-5 pl-0 md:pl-6">
          <Block title="Types de postes proposés">
            <div className="flex flex-wrap gap-2">
              {company.positions.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 rounded-full text-[11px] font-heading font-semibold uppercase tracking-wider"
                  style={{ background: THEME.ink, color: THEME.paper }}
                >
                  {p}
                </span>
              ))}
            </div>
          </Block>
          <Block title="Modalités de recrutement">
            <ul className="space-y-1.5">
              {company.recruitment.map((r) => (
                <li
                  key={r}
                  className="text-xs md:text-sm flex items-start gap-2"
                  style={{ color: THEME.ink }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                    style={{ background: THEME.gold }}
                  />
                  {r}
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>

      {/* page-number circle (template signature) */}
      <div className="flex justify-center mt-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm"
          style={{ border: `2px solid ${THEME.frame}`, color: THEME.frame, background: THEME.paper }}
        >
          {page}
        </div>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-0">
      <p
        className="font-heading font-bold text-sm md:text-base mb-2 flex items-center gap-2"
        style={{ color: THEME.frame }}
      >
        <span style={{ color: THEME.frame }}>›</span>
        {title}
      </p>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
