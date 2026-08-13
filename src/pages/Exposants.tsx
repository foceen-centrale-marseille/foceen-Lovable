import { motion } from "framer-motion";
import { Building2, Search, Filter, MapPin, Users, Calendar, ExternalLink, Globe, Briefcase, GraduationCap, FileText, TrendingUp, X } from "lucide-react";
import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { type Exposant, DOMAINS, parrain, partenaires, allExposants } from "@/data/exhibitors";

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

const Exposants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDomain, setActiveDomain] = useState("Tous");
  const [selectedExposant, setSelectedExposant] = useState<Exposant | null>(null);

  const filtered = useMemo(() => {
    return allExposants.filter((e) => {
      const matchSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchDomain = activeDomain === "Tous" || e.domain === activeDomain;
      return matchSearch && matchDomain;
    });
  }, [searchTerm, activeDomain]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Building2 size={48} className="text-cyan mx-auto mb-4" />
            <h1 className="text-4xl font-heading font-bold mb-4">EXPOSANTS</h1>
            <p className="text-lg font-body text-primary-foreground/80">Découvrez les entreprises qui nous ont fait confiance lors de la 18ème édition leurs offres de stages et d'emplois.

            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PARRAIN ── */}
      <section className="py-14 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-2">PARRAIN</h2>
          <div className="w-16 h-1 bg-cyan mx-auto rounded-full mb-8" />
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedExposant(parrain)}
              className="w-full max-w-lg min-h-56 bg-card rounded-xl flex items-center justify-center border-2 border-cyan p-8 cursor-pointer shadow-lg hover:shadow-xl transition-shadow">

              {parrain.logo ?
              <img src={parrain.logo} alt={`Logo ${parrain.name}, parrain officiel du FOCEEN`} width={800} height={800} className="object-contain w-full max-w-md h-auto max-h-48" loading="lazy" decoding="async" /> :

              <span className="text-xl font-heading font-bold text-foreground">{parrain.name}</span>
              }
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PARTENAIRES ── */}
      <section className="py-10 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-2">PARTENAIRES</h2>
          <div className="w-16 h-1 bg-cyan mx-auto rounded-full mb-8" />
          <div className="flex flex-wrap justify-center gap-6">
            {partenaires.map((p) =>
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedExposant(p)}
              className="w-44 h-24 bg-card rounded-lg flex items-center justify-center border border-border p-3 cursor-pointer hover:border-cyan hover:shadow-md transition-all">

                {p.logo ?
              <img src={p.logo} alt={p.name} className="object-contain h-16 w-auto" loading="lazy" decoding="async" /> :

              <span className="text-sm font-heading text-foreground text-center">{p.name}</span>
              }
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── TOUS LES EXPOSANTS ── */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-2">TOUS LES EXPOSANTS</h2>
          <div className="w-16 h-1 bg-cyan mx-auto rounded-full mb-10" />

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 max-w-3xl mx-auto">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher une entreprise..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" />

            </div>
          </div>

          {/* Domain filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {DOMAINS.map((domain) =>
            <button
              key={domain}
              onClick={() => setActiveDomain(domain)}
              className={`px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all ${
              activeDomain === domain ?
              "bg-cyan text-primary-foreground shadow-md" :
              "bg-muted text-muted-foreground hover:bg-muted/80"}`
              }>

                <Filter size={12} className="inline mr-1.5 -mt-0.5" />
                {domain}
              </button>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((company, i) =>
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.015, duration: 0.3 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedExposant(company)}
              className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center aspect-square hover:shadow-lg hover:border-cyan transition-all cursor-pointer group">

                {company.logo ?
              <img src={company.logo} alt={company.name} className="object-contain h-16 w-auto mb-3" loading="lazy" decoding="async" /> :

              <Building2 size={32} className="text-muted-foreground mb-3 group-hover:text-cyan transition-colors" />
              }
                <span className="text-xs font-heading font-semibold text-foreground text-center leading-tight">
                  {company.name}
                </span>
                <span className="text-[10px] text-muted-foreground mt-1 text-center">{company.domain}</span>
              </motion.div>
            )}
          </div>

          {filtered.length === 0 &&
          <div className="text-center py-16">
              <Building2 size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground font-body">Aucun exposant trouvé pour cette recherche.</p>
            </div>
          }
        </div>
      </section>

      {/* ── DETAIL MODAL ── */}
      <Dialog open={!!selectedExposant} onOpenChange={() => setSelectedExposant(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          <button
            onClick={() => setSelectedExposant(null)}
            aria-label="Fermer"
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-cyan cursor-pointer transition-all"
          >
            <X size={20} />
          </button>
          {selectedExposant &&
          <>
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-6 rounded-t-lg">
                <DialogHeader>
                  <div className="flex items-center gap-5">
                    {selectedExposant.logo ?
                  <div className="w-20 h-20 bg-card rounded-lg flex items-center justify-center p-2 shrink-0">
                        <img src={selectedExposant.logo} alt={selectedExposant.name} className="object-contain h-16 w-auto" loading="lazy" decoding="async" />
                      </div> :

                  <div className="w-20 h-20 bg-card/10 rounded-lg flex items-center justify-center shrink-0">
                        <Building2 size={36} className="text-cyan" />
                      </div>
                  }
                    <div>
                      <DialogTitle className="text-2xl font-heading font-bold text-primary-foreground">
                        {selectedExposant.name}
                      </DialogTitle>
                      <DialogDescription className="text-cyan font-heading text-sm mt-1">
                        {selectedExposant.sector}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left – Info */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider flex items-center gap-2">
                      <Briefcase size={16} className="text-cyan" /> Infos Clés
                    </h3>
                    <div className="space-y-3 text-sm font-body">
                      {selectedExposant.yearCreated &&
                    <div className="flex items-start gap-3">
                          <Calendar size={16} className="text-cyan mt-0.5 shrink-0" />
                          <div>
                            <span className="text-muted-foreground">Année de création</span>
                            <p className="font-semibold text-foreground">{selectedExposant.yearCreated}</p>
                          </div>
                        </div>
                    }
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-cyan mt-0.5 shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Localisation</span>
                          <p className="font-semibold text-foreground">{selectedExposant.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users size={16} className="text-cyan mt-0.5 shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Nombre d'employés</span>
                          <p className="font-semibold text-foreground">{selectedExposant.employees}</p>
                        </div>
                      </div>
                      {selectedExposant.chiffreAffaires &&
                    <div className="flex items-start gap-3">
                          <TrendingUp size={16} className="text-cyan mt-0.5 shrink-0" />
                          <div>
                            <span className="text-muted-foreground">Chiffre d'affaires</span>
                            <p className="font-semibold text-foreground">{selectedExposant.chiffreAffaires}</p>
                          </div>
                        </div>
                    }
                      <div className="flex items-start gap-3">
                        <Globe size={16} className="text-cyan mt-0.5 shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Site web</span>
                          <a
                          href={selectedExposant.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-cyan hover:underline flex items-center gap-1">

                            Visiter <ExternalLink size={12} />
                          </a>
                          {selectedExposant.websiteCarriere &&
                        <a
                          href={selectedExposant.websiteCarriere}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-cyan hover:underline flex items-center gap-1 mt-1">

                              Carrières <ExternalLink size={12} />
                            </a>
                        }
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right – Recrutement */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider flex items-center gap-2">
                      <GraduationCap size={16} className="text-cyan" /> Recrutement
                    </h3>
                    <div className="space-y-3 text-sm font-body">
                      <div>
                        <span className="text-muted-foreground">Profils recherchés</span>
                        <p className="font-semibold text-foreground">{selectedExposant.profiles}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Types de postes</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {selectedExposant.postTypes.map((type) =>
                        <span key={type} className="px-3 py-1 text-xs font-heading font-semibold rounded-full bg-cyan/15 text-cyan">
                              {type}
                            </span>
                        )}
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText size={16} className="text-cyan mt-0.5 shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Modalités de candidature</span>
                          <p className="font-semibold text-foreground">{selectedExposant.applicationMethod}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider mb-4">
                    Présentation de l'entreprise
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
                    {selectedExposant.description}
                  </p>
                  <ul className="space-y-2">
                    {selectedExposant.highlights.map((h, idx) =>
                  <li key={idx} className="flex items-center gap-2 text-sm font-body text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                        {h}
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            </>
          }
        </DialogContent>
      </Dialog>
    </div>);

};

export default Exposants;