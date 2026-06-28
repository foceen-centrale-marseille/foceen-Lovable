import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Globe,
  TrendingUp,
  Briefcase,
  Target,
  FileText,
  Send,
  LayoutGrid,
} from "lucide-react";
import logoWhite from "@/assets/logo_foceen_white.png";

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
  website: string;
  description: string;
  profiles: string[];
  contracts: ("Stage" | "Alternance" | "CDD" | "CDI")[];
  recruitment: string;
};

const fakeDesc =
  "Acteur de référence dans son secteur, l'entreprise conjugue innovation, exigence technique et engagement humain. Présente à l'international, elle place l'ingénierie et le développement durable au cœur de sa stratégie pour bâtir les solutions de demain.";

const baseProfiles = [
  "Ingénieurs généralistes",
  "Profils techniques (mécanique, énergie, IT)",
  "Chefs de projet",
  "Consultants juniors",
];
const allContracts: Company["contracts"] = ["Stage", "Alternance", "CDD", "CDI"];

const make = (name: string, sector: string, logo?: string): Company => ({
  name,
  logo,
  sector,
  founded: "—",
  location: "France",
  revenue: "N.C.",
  employees: "N.C.",
  website: "—",
  description: fakeDesc,
  profiles: baseProfiles,
  contracts: allContracts,
  recruitment:
    "Candidatures via le site carrière. Entretien RH puis entretien technique. Réponse sous 3 semaines.",
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
  { name: "Monde des Grandes Écoles", src: "/placeholder.svg" },
];

const companies: Company[] = [
  make("IKOS", "Conseil", "/logos/ikos.jpg"),
  make("THALES", "Industrie / Défense", "/logos/thales.png"),
  make("Murex", "Logiciel / Finance", "/logos/murex.png"),
  make("EMIS et EMIS Access", "Ingénierie"),
  make("Framatome", "Énergie nucléaire", "/logos/framatome.png"),
  make("Ministère des Armées", "Défense / Public", "/logos/ministere-armees.png"),
  make("CGI", "Conseil & IT", "/logos/cgi.png"),
  make("EP2C ENERGY", "Énergie"),
  make("Bee Engineering", "Ingénierie", "/logos/bee-engineering.jpg"),
  make("Dassault Systèmes", "Logiciel", "/logos/dassault-systemes.png"),
  make("Orano", "Énergie nucléaire", "/logos/orano.png"),
  make("HEINEKEN", "Agro-alimentaire", "/logos/heineken.png"),
  make("Syntec-Ingénierie", "Fédération professionnelle", "/logos/syntec-ingenierie.png"),
  make("EODD Ingénieurs Conseils", "Conseil environnemental"),
  make("Technip Energies", "Énergie", "/logos/technip-energies.png"),
  make("ASSYSTEM", "Ingénierie", "/logos/assystem.png"),
  make("Groupe SNEF", "Génie électrique & industriel", "/logos/groupe-snef.png"),
  make("France Chimie Méditerranée", "Fédération professionnelle"),
  make("Onet Technologies", "Services nucléaires", "/logos/onet.png"),
  make("Marine Nationale", "Défense / Public", "/logos/marine-nationale.png"),
  make("Onepoint", "Conseil & Digital", "/logos/onepoint.jpg"),
  make("EXAIL", "Hautes technologies", "/logos/exail.png"),
  make("Oresys", "Conseil", "/logos/oresys.png"),
  make("AKKODIS", "Ingénierie & R&D", "/logos/akkodis.png"),
  make("ECIA", "Ingénierie"),
  make("TechnicAtome", "Énergie nucléaire", "/logos/technicatome.jpg"),
  make("Bouygues Construction", "BTP", "/logos/bouygues-batiment.jpg"),
  make("Viveris", "Conseil & IT", "/logos/viveris.png"),
  make("Vinci Construction", "BTP", "/logos/vinci-construction.png"),
  make("KPMG", "Audit & Conseil", "/logos/kpmg.jpg"),
  make("Eiffage", "BTP", "/logos/eiffage.png"),
  make("MB92 La Ciotat", "Naval / Yachting", "/logos/mb92.png"),
  make("CMA CGM", "Transport maritime", "/logos/cma-cgm.png"),
];

const sortedCompanies = [...companies].sort((a, b) => a.name.localeCompare(b.name, "fr"));

/* ------------------------------------------------------------------ */
/*  THEME — institutional palette (deep navy + warm gold)             */
/* ------------------------------------------------------------------ */

const THEME = {
  ink: "#0B1F3A", // deep institutional navy
  inkSoft: "#152D52",
  gold: "#C9A24B", // editorial accent
  goldSoft: "#E8D9B0",
  paper: "#F6F1E7", // warm off-white paper
  paperDeep: "#EFE6D2",
  line: "#1F3A66",
  rule: "#D9CBA8",
};

/* ------------------------------------------------------------------ */
/*  BUILD SLIDES                                                      */
/* ------------------------------------------------------------------ */

type Slide =
  | { kind: "cover" }
  | { kind: "editos" }
  | { kind: "index" }
  | { kind: "company"; company: Company; idx: number };

const slides: Slide[] = [
  { kind: "cover" },
  { kind: "editos" },
  { kind: "index" },
  ...sortedCompanies.map((c, i) => ({ kind: "company" as const, company: c, idx: i })),
];

const COMPANY_SLIDE_START = 3;

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */

export default function Brochure() {
  const [i, setI] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (n: number) => setI((prev) => Math.max(0, Math.min(total - 1, n))),
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
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {current.kind === "cover" && <CoverSlide />}
          {current.kind === "editos" && <EditosSlide />}
          {current.kind === "index" && (
            <IndexSlide onPick={(idx) => go(COMPANY_SLIDE_START + idx)} />
          )}
          {current.kind === "company" && (
            <CompanySlide company={current.company} number={current.idx + 1} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <ArrowButton side="left" disabled={i === 0} onClick={prev} />
      <ArrowButton side="right" disabled={i === total - 1} onClick={next} />

      {/* Top brand strip */}
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
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] font-heading"
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
      } w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
        disabled ? "opacity-20 cursor-not-allowed" : "hover:scale-110"
      }`}
      style={{
        background: THEME.ink,
        color: THEME.paper,
        boxShadow: "0 12px 30px -10px rgba(11,31,58,0.45)",
      }}
    >
      <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE: COVER                                                      */
/* ------------------------------------------------------------------ */

function CoverSlide() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: THEME.ink, color: THEME.paper }}>
      <div className="flex-1 grid lg:grid-cols-[1.1fr_1fr]">
        {/* Left — title */}
        <div className="relative flex flex-col justify-center px-10 md:px-20 py-16">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 25%, rgba(201,162,75,0.35), transparent 55%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08), transparent 50%)",
            }}
          />
          <div className="relative">
            <p
              className="text-[11px] tracking-[0.45em] uppercase mb-6 font-heading"
              style={{ color: THEME.gold }}
            >
              19ᵉ édition · 03 novembre 2026 · Parc Chanot
            </p>
            <h1 className="font-heading font-bold leading-[0.9] text-5xl md:text-7xl xl:text-8xl tracking-tight">
              Brochure
              <br />
              <span style={{ color: THEME.gold }}>Entreprises</span>
            </h1>
            <div
              className="mt-8 h-px w-32"
              style={{ background: THEME.gold }}
            />
            <p className="mt-8 max-w-md text-base md:text-lg opacity-75 leading-relaxed">
              Panorama des 33 entreprises présentes au Forum Centrale Méditerranée Entreprises 2026.
            </p>
          </div>
        </div>

        {/* Right — Parrain */}
        <div
          className="flex flex-col justify-center px-10 md:px-16 py-16 relative"
          style={{ background: THEME.inkSoft }}
        >
          <p
            className="text-[10px] tracking-[0.45em] uppercase font-heading mb-4"
            style={{ color: THEME.gold }}
          >
            Parrain de l'édition
          </p>
          <div
            className="rounded-2xl p-8 w-full max-w-sm h-40 flex items-center justify-center mb-6"
            style={{ background: THEME.paper }}
          >
            <img
              src="/logos/groupe-snef.png"
              alt="Groupe SNEF"
              className="max-h-24 object-contain"
            />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Groupe SNEF</h2>
          <p className="opacity-75 max-w-md text-sm md:text-base leading-relaxed">
            Acteur majeur du génie électrique et industriel, le Groupe SNEF accompagne la 19ᵉ édition
            du FOCEEN en tant que parrain officiel.
          </p>
        </div>
      </div>

      {/* Bottom — partners strip */}
      <div
        className="px-10 md:px-16 py-6 border-t flex items-center gap-8 overflow-hidden"
        style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.2)" }}
      >
        <p
          className="text-[10px] tracking-[0.4em] uppercase font-heading shrink-0"
          style={{ color: THEME.gold }}
        >
          Partenaires
        </p>
        <div className="flex-1 grid grid-cols-5 md:grid-cols-10 gap-3 items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className="h-12 rounded-md flex items-center justify-center px-2"
              style={{ background: "rgba(255,255,255,0.95)" }}
              title={p.name}
            >
              <img src={p.src} alt={p.name} className="max-h-8 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE: EDITOS                                                     */
/* ------------------------------------------------------------------ */

function EditosSlide() {
  const editos = [
    {
      tag: "Le mot du Parrain",
      author: "Groupe SNEF",
      role: "Parrain de la 19ᵉ édition",
      text: "C'est avec une grande fierté que le Groupe SNEF parraine cette nouvelle édition du FOCEEN. Forum incontournable de la rentrée, il symbolise la rencontre entre l'excellence académique de Centrale Méditerranée et les besoins concrets de notre industrie. Nous y voyons une opportunité unique d'échanger avec les ingénieurs de demain, de partager nos métiers et nos défis.",
      tint: THEME.ink,
      fg: THEME.paper,
      accent: THEME.gold,
    },
    {
      tag: "Le mot de l'équipe",
      author: "Bureau FOCEEN 2026",
      role: "Mandat 2025-2026",
      text: "Pendant un an, notre équipe d'élèves-ingénieurs a porté l'ambition de faire du FOCEEN un moment d'exception. Cette brochure est le fruit de cet engagement : un outil pour vous présenter en détail les entreprises qui nous font confiance et les opportunités qu'elles offrent. Bonne lecture, et rendez-vous le 03 novembre 2026.",
      tint: THEME.paperDeep,
      fg: THEME.ink,
      accent: THEME.gold,
    },
  ];

  return (
    <div className="w-full h-full grid lg:grid-cols-2">
      {editos.map((e) => (
        <div
          key={e.tag}
          className="flex flex-col justify-center px-10 md:px-16 py-20 relative overflow-hidden"
          style={{ background: e.tint, color: e.fg }}
        >
          <p
            className="text-[11px] tracking-[0.4em] uppercase font-heading mb-4"
            style={{ color: e.accent }}
          >
            {e.tag}
          </p>
          <div
            className="text-7xl md:text-8xl font-serif leading-none mb-2 opacity-30"
            style={{ color: e.accent, fontFamily: "Georgia, serif" }}
          >
            «
          </div>
          <p className="text-base md:text-lg leading-relaxed max-w-xl italic" style={{ opacity: 0.9 }}>
            {e.text}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-10" style={{ background: e.accent }} />
            <div>
              <p className="font-heading font-bold text-base">{e.author}</p>
              <p className="text-xs opacity-70 mt-0.5">{e.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE: INDEX                                                      */
/* ------------------------------------------------------------------ */

function IndexSlide({ onPick }: { onPick: (idx: number) => void }) {
  const grid = useMemo(() => sortedCompanies, []);
  return (
    <div className="w-full h-full flex flex-col px-10 md:px-20 py-16 overflow-hidden">
      <div className="mb-6">
        <p
          className="text-[11px] tracking-[0.4em] uppercase font-heading"
          style={{ color: THEME.gold }}
        >
          Annuaire
        </p>
        <h2
          className="font-heading font-bold text-3xl md:text-5xl mt-2"
          style={{ color: THEME.ink }}
        >
          Index des entreprises
        </h2>
        <p className="text-sm mt-2 opacity-60">
          Cliquez sur une entreprise pour accéder à sa fiche détaillée.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 content-start overflow-auto pr-2">
        {grid.map((c, idx) => (
          <button
            key={c.name}
            onClick={() => onPick(idx)}
            className="group relative text-left rounded-lg border px-3 py-3 transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{
              background: "white",
              borderColor: THEME.rule,
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="font-heading font-bold text-[10px] w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style={{ background: THEME.ink, color: THEME.paper }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span
                className="font-heading font-semibold text-xs leading-tight truncate"
                style={{ color: THEME.ink }}
                title={c.name}
              >
                {c.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE: COMPANY                                                    */
/* ------------------------------------------------------------------ */

function CompanySlide({ company, number }: { company: Company; number: number }) {
  const contractColor: Record<Company["contracts"][number], string> = {
    Stage: "bg-[#0B1F3A] text-white",
    Alternance: "bg-[#152D52] text-white",
    CDD: "bg-[#C9A24B] text-white",
    CDI: "bg-[#8A6B1F] text-white",
  };

  return (
    <div className="w-full h-full flex flex-col px-8 md:px-14 py-12 overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-6 pb-5 mb-5 border-b" style={{ borderColor: THEME.rule }}>
        <div className="flex items-center gap-5 min-w-0">
          <div
            className="h-20 w-40 rounded-lg flex items-center justify-center p-3 shrink-0"
            style={{ background: "white", border: `1px solid ${THEME.rule}` }}
          >
            {company.logo ? (
              <img src={company.logo} alt={company.name} className="max-h-14 max-w-full object-contain" />
            ) : (
              <span className="font-heading font-bold text-xl" style={{ color: THEME.ink }}>
                {company.name}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <p
              className="text-[10px] tracking-[0.4em] uppercase font-heading mb-1"
              style={{ color: THEME.gold }}
            >
              Fiche n° {String(number).padStart(2, "0")}
            </p>
            <h2
              className="font-heading font-bold text-2xl md:text-4xl truncate"
              style={{ color: THEME.ink }}
            >
              {company.name}
            </h2>
            <p className="text-xs md:text-sm opacity-70 truncate">{company.sector}</p>
          </div>
        </div>
      </div>

      {/* Body grid */}
      <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">
        {/* Left — infos clés */}
        <aside
          className="col-span-12 md:col-span-4 lg:col-span-3 rounded-xl p-5 flex flex-col gap-3"
          style={{ background: THEME.ink, color: THEME.paper }}
        >
          <p
            className="text-[10px] tracking-[0.4em] uppercase font-heading"
            style={{ color: THEME.gold }}
          >
            Informations clés
          </p>
          {[
            { i: Briefcase, l: "Secteur", v: company.sector },
            { i: Calendar, l: "Création", v: company.founded },
            { i: MapPin, l: "Localisation", v: company.location },
            { i: TrendingUp, l: "Chiffre d'affaires", v: company.revenue },
            { i: Users, l: "Effectifs", v: company.employees },
            { i: Globe, l: "Site web", v: company.website },
          ].map(({ i: Icon, l, v }) => (
            <div key={l} className="flex items-start gap-3">
              <Icon className="w-4 h-4 mt-1 shrink-0" style={{ color: THEME.gold }} />
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider opacity-60">{l}</p>
                <p className="text-xs font-medium leading-snug break-words">{v}</p>
              </div>
            </div>
          ))}
        </aside>

        {/* Center — présentation */}
        <section
          className="col-span-12 md:col-span-8 lg:col-span-5 rounded-xl p-6 flex flex-col"
          style={{ background: "white", border: `1px solid ${THEME.rule}` }}
        >
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-4 h-4" style={{ color: THEME.gold }} />
            <p
              className="text-[10px] tracking-[0.4em] uppercase font-heading"
              style={{ color: THEME.ink }}
            >
              Présentation de l'entreprise
            </p>
          </div>
          <p
            className="text-sm md:text-[15px] leading-relaxed flex-1"
            style={{ color: THEME.ink }}
          >
            {company.description}
          </p>
          <div className="mt-4 pt-4 border-t" style={{ borderColor: THEME.rule }}>
            <div className="flex items-center gap-2 mb-2">
              <Send className="w-4 h-4" style={{ color: THEME.gold }} />
              <p
                className="text-[10px] tracking-[0.4em] uppercase font-heading"
                style={{ color: THEME.ink }}
              >
                Modalités de recrutement
              </p>
            </div>
            <p className="text-xs leading-relaxed opacity-80" style={{ color: THEME.ink }}>
              {company.recruitment}
            </p>
          </div>
        </section>

        {/* Right — profils + contrats */}
        <aside className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <div
            className="rounded-xl p-5 flex-1"
            style={{ background: THEME.paperDeep, border: `1px solid ${THEME.rule}` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4" style={{ color: THEME.gold }} />
              <p
                className="text-[10px] tracking-[0.4em] uppercase font-heading"
                style={{ color: THEME.ink }}
              >
                Profils recherchés
              </p>
            </div>
            <ul className="space-y-2">
              {company.profiles.map((p) => (
                <li key={p} className="flex items-start gap-2 text-xs" style={{ color: THEME.ink }}>
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ background: THEME.gold }}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-5"
            style={{ background: "white", border: `1px solid ${THEME.rule}` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4" style={{ color: THEME.gold }} />
              <p
                className="text-[10px] tracking-[0.4em] uppercase font-heading"
                style={{ color: THEME.ink }}
              >
                Types de postes
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {company.contracts.map((c) => (
                <span
                  key={c}
                  className={`px-3 py-1 rounded-full text-[11px] font-heading font-semibold uppercase tracking-wider ${contractColor[c]}`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
