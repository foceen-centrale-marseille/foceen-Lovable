import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";

// Assets
import generaleImg from "@/assets/teams/generale.jpg";
import bureauImg from "@/assets/teams/bureau.jpg";
import kateBecaas from "@/assets/teams/kate-becaas.jpg";
import antoineMaginot from "@/assets/teams/antoine-maginot.jpg";
import adamThabet from "@/assets/teams/adam-thabet.jpg";
import arthurPoulin from "@/assets/teams/arthur-poulin.jpg";
import candiceDeliance from "@/assets/teams/candice-deliance.jpg";
import diegoMartel from "@/assets/teams/diego-martel.jpg";
import eloiPerrin from "@/assets/teams/eloi-perrin.jpg";
import arielDia from "@/assets/teams/ariel-dia.jpg";
import hippolyteBarth from "@/assets/teams/hippolyte-barth.jpg";
import poleEntreprise from "@/assets/teams/pole-entreprise.jpg";
import poleLogistique from "@/assets/teams/pole-logistique.jpg";
import polePartenariats from "@/assets/teams/pole-partenariats.jpg";
import poleQualite from "@/assets/teams/pole-qualite.jpg";
import comeGrardel from "@/assets/teams/come-grardel.jpg";
import poleRelationsEcoles from "@/assets/teams/pole-relations-ecoles.jpg";
import poleServices from "@/assets/teams/pole-services.jpg";
import poleCommunication from "@/assets/teams/pole-communication.jpg";
import enzoColasuonnoHuvelle from "@/assets/teams/enzo-colasuonno-huvelle.jpg";
import aurelienBeaufils from "@/assets/teams/aurelien-beaufils.jpg";
import emmaGensburger from "@/assets/teams/emma-gensburger.jpg";
import hippolyteBarot from "@/assets/teams/hippolyte-barot.jpg";
import julessBove from "@/assets/teams/jules-bove.jpg";
import louisGirel from "@/assets/teams/louis-girel.jpg";
import juliettecholet from "@/assets/teams/juliette-cholet.jpg";
import manonGaudrie from "@/assets/teams/manon-gaudrie.jpg";
import marieCostes from "@/assets/teams/marie-costes.jpg";
import raphaelOudot from "@/assets/teams/raphael-oudot.jpg";
import romainBrunat from "@/assets/teams/romain-brunat.jpg";
import soufianeFerfra from "@/assets/teams/soufiane-ferfra.jpg";
import thomasArnaud from "@/assets/teams/thomas-arnaud.jpg";
import thomasCandeiasDaSilva from "@/assets/teams/thomas-candeias-da-silva.jpg";
import tomNivaggioni from "@/assets/teams/tom-nivaggioni.jpg";
import ulysseGuezou from "@/assets/teams/ulysse-guezou.jpg";
import victorClement from "@/assets/teams/victor-clement.jpg";
import ysolineMichelVillaz from "@/assets/teams/ysoline-michel-villaz.jpg";

function generateEmail(prenom: string, nom: string) {
  const normalize = (s: string) =>
    s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
  return `${normalize(prenom)}.${normalize(nom)}@centrale-med.fr`;
}

interface Member {
  prenom: string;
  nom: string;
  poste: string;
  photo?: string;
  linkedin?: string; // empty string = hide button, undefined = show placeholder
}

interface PoleData {
  title: string;
  description: string;
  heroPhoto: string;
  members: Member[];
}

const polesData: Record<string, PoleData> = {
  bureau: {
    title: "Le Bureau",
    description: "Le Bureau dirige l'association FOCEEN et coordonne l'ensemble des pôles pour assurer le succès du forum.",
    heroPhoto: bureauImg,
    members: [
      { prenom: "Kate", nom: "Becaas", poste: "Présidente", photo: kateBecaas, linkedin: "https://www.linkedin.com/in/kate-becaas-470937378/" },
      { prenom: "Antoine", nom: "Maginot", poste: "Vice-Président", photo: antoineMaginot, linkedin: "https://www.linkedin.com/in/antoine-maginot-355585390/" },
      { prenom: "Adam", nom: "Thabet", poste: "Trésorier", photo: adamThabet, linkedin: "https://www.linkedin.com/in/adam-thabet-a873a9286/" },
      { prenom: "Arthur", nom: "Poulin", poste: "Vice-Trésorier", photo: arthurPoulin, linkedin: "https://www.linkedin.com/in/arthur-poulin-3a0348383/" },
      { prenom: "Candice", nom: "Deliance", poste: "Secrétaire", photo: candiceDeliance, linkedin: "https://www.linkedin.com/in/candice-deliance-a111433aa/" },
    ],
  },
  entreprises: {
    title: "Pôle Entreprises",
    description: "Le Pôle Entreprises est en charge du démarchage et de la relation avec les entreprises exposantes.",
    heroPhoto: poleEntreprise,
    members: [
      { prenom: "Victor", nom: "Clément", poste: "Responsable", photo: victorClement, linkedin: "https://www.linkedin.com/in/victor-clement-721742345/" },
      { prenom: "Diego", nom: "Martel", poste: "Chef de secteur", photo: diegoMartel, linkedin: "https://www.linkedin.com/in/diego-martel-a01220339/" },
      { prenom: "Eloi", nom: "Perrin", poste: "Chef de secteur", photo: eloiPerrin, linkedin: "https://www.linkedin.com/in/eloi-perrin-711417383/" },
      { prenom: "Ariel", nom: "Dia", poste: "Chef de secteur", photo: arielDia, linkedin: "https://www.linkedin.com/in/ariel-dia-2ab84b272/" },
      { prenom: "Hippolyte", nom: "Barth", poste: "Chef de secteur", photo: hippolyteBarth, linkedin: "https://www.linkedin.com/in/hippolyte-barth-a71715383/" },
    ],
  },
  logistique: {
    title: "Pôle Logistique",
    description: "Le Pôle Logistique organise l'ensemble des aspects matériels et logistiques du forum.",
    heroPhoto: poleLogistique,
    members: [
      { prenom: "Ysoline", nom: "Michel-Villaz", poste: "Co-Responsable", photo: ysolineMichelVillaz, linkedin: "https://www.linkedin.com/in/ysoline-michel-villaz-1a2217390/" },
      { prenom: "Soufiane", nom: "Ferfra", poste: "Co-Responsable", photo: soufianeFerfra, linkedin: "https://www.linkedin.com/in/soufiane-ferfra-542a0627a/" },
    ],
  },
  communication: {
    title: "Pôle Communication",
    description: "Le Pôle Communication gère la stratégie de communication, les réseaux sociaux et l'image du FOCEEN.",
    heroPhoto: poleCommunication,
    members: [
      { prenom: "Manon", nom: "Gaudrie", poste: "Responsable", photo: manonGaudrie, linkedin: "https://www.linkedin.com/in/manon-gaudrie-074920381/" },
      { prenom: "Thomas", nom: "Arnaud", poste: "Chargé de communication", photo: thomasArnaud, linkedin: "https://www.linkedin.com/in/thomas-arnaud-88031133b/" },
      { prenom: "Ulysse", nom: "Guezou", poste: "Chargé de communication", photo: ulysseGuezou, linkedin: "https://www.linkedin.com/in/ulysse-gu%C3%A9zou-095821377/" },
      { prenom: "Romain", nom: "Brunat", poste: "Chargé de communication", photo: romainBrunat, linkedin: "https://www.linkedin.com/in/romain-brunat-33a857385/" },
    ],
  },
  partenariat: {
    title: "Pôle Partenariat",
    description: "Le Pôle Partenariat développe et entretient les relations avec les partenaires institutionnels et privés.",
    heroPhoto: polePartenariats,
    members: [
      { prenom: "Hippolyte", nom: "Barot", poste: "Co-Responsable", photo: hippolyteBarot, linkedin: "https://www.linkedin.com/in/hippolyte-barot-6442a6381/" },
      { prenom: "Tom", nom: "Nivaggioni", poste: "Co-Responsable", photo: tomNivaggioni, linkedin: "https://www.linkedin.com/in/tom-nivaggioni-5a15b83a9/" },
    ],
  },
  qualite: {
    title: "Pôle Qualité",
    description: "Le Pôle Qualité assure le respect des normes ISO et l'amélioration continue des processus.",
    heroPhoto: poleQualite,
    members: [
      { prenom: "Marie", nom: "Costes", poste: "Responsable", photo: marieCostes, linkedin: "https://www.linkedin.com/in/marie-costes-7946053aa/" },
      { prenom: "Raphaël", nom: "Oudot", poste: "Référent Qualité", photo: raphaelOudot, linkedin: "" },
      { prenom: "Côme", nom: "Grardel", poste: "Référent DD", photo: comeGrardel, linkedin: "https://www.linkedin.com/in/c%C3%B4me-grardel-785b473aa/" },
    ],
  },
  services: {
    title: "Pôle Services",
    description: "Le Pôle Services conçoit les événements complémentaires au forum : tables rondes, espace conseil, journée pré-FOCEEN.",
    heroPhoto: poleServices,
    members: [
      { prenom: "Enzo", nom: "Colasuonno Huvelle", poste: "Co-Resp. Entrepreneuriat", photo: enzoColasuonnoHuvelle, linkedin: "https://www.linkedin.com/in/enzocolasuonnohuvelle/" },
      { prenom: "Aurélien", nom: "Beaufils", poste: "Co-Resp. Entrepreneuriat", photo: aurelienBeaufils, linkedin: "https://www.linkedin.com/in/aurelien-beaufils-369485399/" },
      { prenom: "Juliette", nom: "Cholet", poste: "Tables Rondes / Conf.", photo: juliettecholet, linkedin: "https://www.linkedin.com/in/juliette-cholet-a131b6384/" },
      { prenom: "Emma", nom: "Gensburger", poste: "Espace Conseil", photo: emmaGensburger, linkedin: "https://www.linkedin.com/in/emma-gensburger-709290389/" },
      { prenom: "Thomas", nom: "Candeias Da Silva", poste: "Journée Pré-FOCEEN", photo: thomasCandeiasDaSilva, linkedin: "https://www.linkedin.com/in/thomas-candeias-da-silva-02a665370/" },
    ],
  },
  "relations-ecoles": {
    title: "Pôle Relations Écoles",
    description: "Le Pôle Relations Écoles coordonne les partenariats avec les écoles d'ingénieurs de la région.",
    heroPhoto: poleRelationsEcoles,
    members: [
      { prenom: "Jules", nom: "Bové", poste: "Co-Responsable", photo: julessBove, linkedin: "https://www.linkedin.com/in/jules-bove-918600224/" },
      { prenom: "Louis", nom: "Girel", poste: "Co-Responsable", photo: louisGirel, linkedin: "https://www.linkedin.com/in/louis-girel-2a0353386/" },
    ],
  },
};

const MemberCard = ({ member }: { member: Member }) => {
  const email = generateEmail(member.prenom, member.nom);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center text-center bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-28 h-28 rounded-full overflow-hidden bg-muted mb-4 border-2 border-cyan/30">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`${member.prenom} ${member.nom}`}
            className="w-full h-full object-cover object-top"
            width={112}
            height={112}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-heading font-bold text-2xl">
            {member.prenom[0]}{member.nom[0]}
          </div>
        )}
      </div>
      <h4 className="font-heading font-semibold text-foreground text-sm">
        {member.prenom} {member.nom}
      </h4>
      <p className="text-xs text-cyan font-heading mt-1">{member.poste}</p>
      <div className="flex gap-3 mt-3">
        <a
          href={`mailto:${email}`}
          className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-cyan hover:text-primary-foreground transition-colors"
          aria-label={`Email de ${member.prenom}`}
        >
          <Mail size={14} />
        </a>
      </div>
      <p className="text-[10px] text-muted-foreground mt-2 break-all">{email}</p>
    </motion.div>
  );
};

const NosEquipePole = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const pole = slug ? polesData[slug] : null;

  if (!pole) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground font-body">Pôle introuvable.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pole.heroPhoto})` }}
        >
          <div className="absolute inset-0 bg-primary/55" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground uppercase tracking-wide">
            {pole.title}
          </h1>
          <div className="mt-5 w-16 h-1 bg-cyan mx-auto rounded-full" />
          <p className="mt-4 text-primary-foreground/80 font-body text-sm md:text-base max-w-xl mx-auto">
            {pole.description}
          </p>
        </motion.div>
      </section>

      {/* Membres */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          {/* Bouton retour */}
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/notre-equipe");
            }}
            className="flex items-center gap-2 text-sm font-heading text-muted-foreground hover:text-cyan transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Retour à Notre équipe
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {pole.members.map((m) => (
              <MemberCard key={`${m.prenom}-${m.nom}`} member={m} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosEquipePole;
