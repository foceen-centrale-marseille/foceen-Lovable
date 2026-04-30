import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import generaleImg from "@/assets/teams/generale.jpg";
import bureauImg from "@/assets/teams/bureau.jpg";
import poleEntreprise from "@/assets/teams/pole-entreprise.jpg";
import poleLogistique from "@/assets/teams/pole-logistique.jpg";
import polePartenariats from "@/assets/teams/pole-partenariats.jpg";
import poleQualite from "@/assets/teams/pole-qualite.jpg";
import poleRelationsEcoles from "@/assets/teams/pole-relations-ecoles.jpg";
import poleCommunication from "@/assets/teams/pole-communication.jpg";
import poleServices from "@/assets/teams/pole-services.jpg";

const poles = [
  {
    slug: "bureau",
    title: "Le Bureau",
    description: "Dirige l'association FOCEEN et coordonne l'ensemble des pôles pour assurer le succès du forum.",
    photo: bureauImg,
  },
  {
    slug: "entreprises",
    title: "Pôle Entreprises",
    description: "En charge du démarchage et de la relation avec les entreprises exposantes du forum.",
    photo: poleEntreprise,
  },
  {
    slug: "logistique",
    title: "Pôle Logistique",
    description: "Organise l'ensemble des aspects matériels et logistiques du forum FOCEEN.",
    photo: poleLogistique,
  },
  {
    slug: "communication",
    title: "Pôle Communication",
    description: "Gère la stratégie de communication, les réseaux sociaux et l'image du FOCEEN.",
    photo: poleCommunication,
  },
  {
    slug: "partenariat",
    title: "Pôle Partenariat",
    description: "Développe et entretient les relations avec les partenaires institutionnels et privés.",
    photo: polePartenariats,
  },
  {
    slug: "qualite",
    title: "Pôle Qualité",
    description: "Assure le respect des normes ISO et l'amélioration continue des processus du forum.",
    photo: poleQualite,
  },
  {
    slug: "services",
    title: "Pôle Services",
    description: "Conçoit les événements complémentaires : tables rondes, espace conseil, journée pré-FOCEEN.",
    photo: poleServices,
  },
  {
    slug: "relations-ecoles",
    title: "Pôle Relations Écoles",
    description: "Coordonne les partenariats avec les écoles d'ingénieurs de la région.",
    photo: poleRelationsEcoles,
  },
];

const NotreEquipe = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${generaleImg})` }}
        >
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground uppercase tracking-wide">
            NOTRE ÉQUIPE
          </h1>
          <div className="mt-6 w-20 h-1 bg-cyan mx-auto rounded-full" />
          <p className="mt-4 text-primary-foreground/80 font-body text-sm md:text-base max-w-xl mx-auto">
            Découvrez les 8 pôles qui font vivre le FOCEEN
          </p>
        </motion.div>
      </section>

      {/* Grille des pôles */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {poles.map((pole, idx) => (
              <motion.div
                key={pole.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="flex flex-col bg-card rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Photo */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={pole.photo}
                    alt={pole.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Contenu */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-heading font-bold text-foreground text-base uppercase mb-2">
                    {pole.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-cyan rounded-full mb-3" />
                  <p className="text-xs font-body text-muted-foreground leading-relaxed flex-1">
                    {pole.description}
                  </p>
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/notre-equipe/${pole.slug}`);
                    }}
                    className="mt-4 w-full py-2.5 px-4 bg-primary text-primary-foreground font-heading font-bold text-xs uppercase rounded-md hover:bg-cyan hover:text-primary transition-colors tracking-wider"
                  >
                    DÉCOUVRIR L'ÉQUIPE
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotreEquipe;
