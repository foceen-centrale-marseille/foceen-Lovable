import { motion } from "framer-motion";
import { MapPin, Clock, Train, Info, Download, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MapSection from "@/components/MapSection";
import { Button } from "@/components/ui/button";
import { programme } from "@/data/programme";

const InfosPratiques = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Info size={48} className="text-cyan mx-auto mb-4" />
            <h1 className="text-4xl font-heading font-bold mb-4">INFOS PRATIQUES</h1>
            <p className="text-lg font-body text-primary-foreground/80">
              Toutes les informations pour préparer votre venue au Forum FOCEEN.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Retour sur la 18ème édition - Downloads */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
              Les indispensables pour préparer au mieux le forum
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="h-auto whitespace-normal gap-3 px-6 py-4 rounded-lg font-heading font-semibold">
              <a
                href="/guide-eleve.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Guide-Eleve-FOCEEN-2026.pdf"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors"
              >
                <Download size={20} />
                Guide élève
                <FileText size={18} className="opacity-60" />
              </a>
              </Button>
              <Button asChild className="h-auto whitespace-normal gap-3 px-6 py-4 rounded-lg font-heading font-semibold bg-cyan text-primary hover:bg-cyan/90">
              <a
                href="/brochure"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-cyan text-primary px-6 py-4 rounded-lg font-heading font-semibold hover:bg-cyan/90 transition-colors"
              >
                <Download size={20} />
                Brochure entreprise
                <FileText size={18} className="opacity-60" />
              </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-lg shadow-sm border border-border"
            >
              <MapPin size={28} className="text-cyan mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Lieu</h3>
              <p className="text-muted-foreground font-body text-sm">
                Parc Chanot<br />
                114 Rond-Point du Prado<br />
                13008 Marseille
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="bg-card p-8 rounded-lg shadow-sm border border-border"
            >
              <Clock size={28} className="text-cyan mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Horaires</h3>
              <p className="text-muted-foreground font-body text-sm">
                03 novembre 2026<br />
                9h00 — 17h00<br />
                Entrée libre
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-card p-8 rounded-lg shadow-sm border border-border"
            >
              <Train size={28} className="text-cyan mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Accès</h3>
              <p className="text-muted-foreground font-body text-sm">
                Métro : Ligne 2, Rond-Point du Prado<br />
                Bus : Lignes 19, 44, 83<br />
                Parking : Parc Chanot
              </p>
            </motion.div>
          </div>

          {/* Link to Exposants */}
          <div className="text-center">
            <Link
              to="/exposants"
              className="inline-flex items-center gap-2 text-cyan font-heading font-semibold hover:underline underline-offset-4 transition-colors"
            >
              Découvrir les exposants
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2 text-center">
              Déroulé de la 19<sup>ème</sup> édition
            </h2>
            <p className="text-center text-lg font-heading font-semibold text-cyan mb-12">PROGRAMME</p>

            {([
              { category: "conference", title: "Conférences" },
              { category: "table-ronde", title: "Tables Rondes" },
              { category: "animation", title: "Animations" },
            ] as const).map(({ category, title }) => (
              <div key={category} className="mb-12 last:mb-0">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6 border-l-4 border-cyan pl-4">
                  {title}
                </h3>
                <div className="space-y-4">
                  {programme.filter((event) => event.category === category).map((event) => (
                    <div key={event.name} className="bg-card p-5 rounded-lg border border-border">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span className="text-sm font-heading font-semibold text-cyan">{event.time}</span>
                        {event.room && <span className="text-xs bg-muted px-2 py-0.5 rounded font-body text-muted-foreground">{event.room}</span>}
                      </div>
                      <h4 className="font-heading font-semibold text-foreground break-words">{event.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <MapSection />
    </div>
  );
};

export default InfosPratiques;
