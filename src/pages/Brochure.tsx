import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Users, Globe, TrendingUp, Briefcase, ArrowUpRight } from "lucide-react";
import logoWhite from "@/assets/logo_foceen_white.png";

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

const baseProfiles = ["Ingénieurs généralistes", "Profils techniques (mécanique, énergie, IT)", "Chefs de projet", "Consultants juniors"];
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
  { name: "Métropole Aix-Marseille-Provence", src: "/logo-metropole-aix-marseille.png" },
  { name: "Gomet'", src: "/logo-gomet.png" },
  { name: "Studyrama", src: "/752_ckeditor_agenda_53966_637f4194bed9f_1.png" },
  { name: "Monde des Grandes Écoles & Universités", src: "/placeholder.svg" },
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

const contractColor: Record<Company["contracts"][number], string> = {
  Stage: "bg-cyan/15 text-cyan-dark border-cyan/30",
  Alternance: "bg-primary/10 text-primary border-primary/20",
  CDD: "bg-amber-100 text-amber-800 border-amber-200",
  CDI: "bg-emerald-100 text-emerald-800 border-emerald-200",
};

export default function Brochure() {
  const [selected, setSelected] = useState<Company | null>(null);
  const grid = useMemo(() => sortedCompanies, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body" lang="fr">
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(var(--cyan)/0.4), transparent 50%), radial-gradient(circle at 80% 60%, hsl(var(--cyan-dark)/0.35), transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-36">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.3em] text-xs md:text-sm text-cyan mb-6"
          >
            FOCEEN · 19ᵉ édition · 03 novembre 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl"
          >
            Brochure
            <br />
            <span className="text-cyan">Entreprises 2026</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl text-primary-foreground/70 text-lg"
          >
            Un panorama des entreprises présentes au Forum Centrale Méditerranée Entreprises, et des
            opportunités de carrière qu'elles offrent à nos élèves-ingénieurs.
          </motion.p>

          {/* Parrain */}
          <div className="mt-20 grid md:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="bg-white rounded-2xl p-8 w-64 h-40 flex items-center justify-center shadow-2xl">
              <img src="/logos/groupe-snef.png" alt="SNEF — Parrain" className="max-h-24 object-contain" />
            </div>
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-cyan mb-2">Parrain de l'édition</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Groupe SNEF</h2>
              <p className="text-primary-foreground/70 mt-3 max-w-xl">
                Nous remercions chaleureusement le Groupe SNEF d'accompagner cette 19ᵉ édition du FOCEEN
                en tant que parrain officiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="py-20 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-cyan-dark mb-2">Ils nous soutiennent</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Nos partenaires</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group bg-white border border-border rounded-xl h-28 flex items-center justify-center p-4 transition-all hover:shadow-lg hover:-translate-y-0.5"
                title={p.name}
              >
                <img
                  src={p.src}
                  alt={p.name}
                  className="max-h-16 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉDITOS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10">
          {[
            { title: "Le mot du Parrain", tag: "Édito" },
            { title: "Le mot de l'équipe", tag: "Édito" },
          ].map((e) => (
            <article
              key={e.title}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/90 to-cyan/40 flex items-center justify-center text-primary-foreground/60 text-sm">
                [ Photo à insérer ]
              </div>
              <div className="p-8">
                <p className="uppercase tracking-[0.25em] text-xs text-cyan-dark mb-3">{e.tag}</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                  {e.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PLAN DU FORUM */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="uppercase tracking-[0.25em] text-xs text-cyan-dark mb-2">Orientation</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-10">
            Plan du Forum
          </h2>
          <div className="aspect-[16/9] w-full rounded-2xl border-2 border-dashed border-primary/30 bg-white/60 flex flex-col items-center justify-center text-muted-foreground">
            <MapPin className="w-10 h-10 mb-3 text-cyan-dark" />
            <p className="font-medium">Plan haute résolution à insérer ici</p>
            <p className="text-sm mt-1">(image du plan des stands)</p>
          </div>
        </div>
      </section>

      {/* INDEX ENTREPRISES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="uppercase tracking-[0.25em] text-xs text-cyan-dark mb-2">Annuaire</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary">
              Index des entreprises
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Cliquez sur une entreprise pour afficher sa fiche détaillée.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {grid.map((c, i) => (
              <motion.button
                key={c.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.02, 0.4) }}
                onClick={() => setSelected(c)}
                className="group relative text-left bg-card border border-border rounded-xl p-5 hover:border-cyan hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="h-16 mb-4 flex items-center">
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="max-h-14 max-w-[70%] object-contain"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center text-primary font-heading font-bold">
                      {c.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="font-heading font-semibold text-primary leading-tight pr-6">
                  {c.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{c.sector}</p>
                <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-muted-foreground group-hover:text-cyan-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border text-center text-sm text-muted-foreground">
        © 2026 FOCEEN — Brochure Entreprises
      </footer>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm flex items-stretch md:items-center justify-end md:justify-center p-0 md:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
              className="bg-background w-full md:max-w-3xl md:rounded-2xl shadow-2xl overflow-y-auto max-h-screen md:max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="bg-primary text-primary-foreground p-8 md:p-10">
                <div className="bg-white rounded-xl h-28 w-full max-w-xs flex items-center justify-center p-4 mb-6">
                  {selected.logo ? (
                    <img src={selected.logo} alt={selected.name} className="max-h-20 object-contain" />
                  ) : (
                    <span className="font-heading font-bold text-2xl text-primary">{selected.name}</span>
                  )}
                </div>
                <p className="uppercase tracking-[0.25em] text-xs text-cyan mb-2">{selected.sector}</p>
                <h3 className="font-heading text-3xl md:text-4xl font-bold">{selected.name}</h3>
              </div>

              {/* Infos clés */}
              <div className="p-8 md:p-10 space-y-10">
                <div>
                  <h4 className="font-heading font-bold text-primary mb-4 uppercase tracking-wider text-sm">
                    Informations clés
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { i: Briefcase, l: "Secteur", v: selected.sector },
                      { i: Calendar, l: "Année de création", v: selected.founded },
                      { i: MapPin, l: "Localisation", v: selected.location },
                      { i: TrendingUp, l: "Chiffre d'affaires", v: selected.revenue },
                      { i: Users, l: "Effectifs", v: selected.employees },
                      { i: Globe, l: "Site web", v: selected.website },
                    ].map(({ i: Icon, l, v }) => (
                      <div key={l} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                        <Icon className="w-5 h-5 text-cyan-dark mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
                          <p className="font-medium text-foreground">{v}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-primary mb-4 uppercase tracking-wider text-sm">
                    Présentation
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{selected.description}</p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-primary mb-4 uppercase tracking-wider text-sm">
                    Profils recherchés
                  </h4>
                  <ul className="space-y-2">
                    {selected.profiles.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-dark mt-2 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-primary mb-4 uppercase tracking-wider text-sm">
                    Types de postes proposés
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.contracts.map((c) => (
                      <span
                        key={c}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border ${contractColor[c]}`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-primary mb-4 uppercase tracking-wider text-sm">
                    Modalités de recrutement
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{selected.recruitment}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
