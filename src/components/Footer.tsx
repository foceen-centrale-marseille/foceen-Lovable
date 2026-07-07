import { Mail, Phone, MapPin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
              <img src="/logo-foceen.png" alt="FOCEEN" className="h-16 w-auto" width={160} height={80} loading="lazy" decoding="async" />
            </div>
            <p className="text-sm text-primary-foreground/70 font-body">
              Forum Centrale Méditerranée Entreprises
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail size={14} />
              <a href="mailto:forumentreprises@centrale-med.fr">forumentreprises@centrale-med.fr</a>
            </div>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPin size={14} className="mt-1 shrink-0" />
              <span>
                Ecole Centrale de Marseille<br />
                Pôle de l'étoile, Technopôle de Château Gombert<br />
                38 rue Frédéric Joliot-Curie<br />
                13451 Marseille
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider">Liens</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <a href="https://forum-foceen.eventmaker.io/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                S'inscrire
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          © 2026 FOCEEN — Forum Centrale Méditerranée Entreprises. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
