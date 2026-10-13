import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Mail = () => (
  <a href="mailto:forumentreprises@centrale-med.fr" className="text-cyan font-semibold hover:underline underline-offset-4 break-all">
    forumentreprises@centrale-med.fr
  </a>
);

type QA = { q: string; a: ReactNode };

const etudiants: QA[] = [
  {
    q: "L'entrée au forum est-elle gratuite et réservée aux étudiants de Centrale Méditerranée ?",
    a: "Oui, l'accès est 100 % gratuit. Le forum s'adresse en priorité aux étudiants et diplômés de Centrale Méditerranée mais accueille également les profils d'autres grandes écoles d'ingénieurs ou de commerce ainsi que les universités.",
  },
  {
    q: "Étant étudiant, faut-il obligatoirement s'inscrire en amont pour venir ?",
    a: (
      <>
        Oui, l'inscription préalable est obligatoire via le site internet dans l'onglet{" "}
        <a href="https://forum-foceen.eventmaker.io/" target="_blank" rel="noopener noreferrer" className="text-cyan font-semibold hover:underline underline-offset-4">
          « S'inscrire »
        </a>.
      </>
    ),
  },
  {
    q: "Quel dress code adopter et que dois-je apporter le jour J ?",
    a: (
      <>
        <p>Une tenue professionnelle ou business casual est conseillée. Pensez à apporter plusieurs exemplaires imprimés de votre CV à jour, un bloc-notes et votre badge d'accès (sur smartphone ou papier).</p>
        <p className="mt-3">Un atelier est également disponible afin d'améliorer votre CV sur place : vous pouvez apporter un ordinateur portable ou une tablette pour le modifier en direct.</p>
      </>
    ),
  },
  {
    q: "Quels types d'opportunités peut-on trouver sur le forum ?",
    a: "Les entreprises présentes recrutent sur des formats variés : stages de césure, stages de fin d'études (TFE), contrats d'alternance et premiers emplois en CDI/CDD.",
  },
  {
    q: "Comment consulter à l'avance la liste des entreprises et leurs besoins ?",
    a: "Vous pouvez parcourir directement la brochure interactive en ligne pour filtrer les entreprises par secteur (BTP, Énergie, IT, Défense, etc.), découvrir les profils recherchés et cibler vos échanges.",
  },
];

const entreprises: QA[] = [
  {
    q: "Comment inscrire votre entreprise ou réserver un stand pour cette édition ?",
    a: <>Les inscriptions entreprises s'effectuent en ligne via le formulaire dédié ou en contactant directement notre pôle relations entreprises à <Mail />.</>,
  },
  {
    q: "Quelles sont les formules et options de sponsoring disponibles ?",
    a: "Plusieurs packs sont proposés (visibilité sur nos supports, stand équipé, ateliers RH dédiés, conférences flash). Contactez l'équipe du forum pour recevoir notre dossier de partenariat.",
  },
  {
    q: "Comment transmettre ou actualiser la fiche de notre entreprise dans la brochure ?",
    a: "Transmettez simplement vos éléments (descriptif, offres, contacts et logo au format vectoriel ou PNG haute définition) à l'équipe organisatrice avant la date limite de bouclage de la brochure.",
  },
  {
    q: "J'ai une question spécifique qui ne figure pas ici, comment joindre l'équipe ?",
    a: (
      <>
        Écrivez-nous à <Mail /> pour toute question supplémentaire ou envoyez-nous un message privé sur Instagram (
        <a href="https://www.instagram.com/foceen" target="_blank" rel="noopener noreferrer" className="text-cyan font-semibold hover:underline underline-offset-4">
          @foceen
        </a>
        ).
      </>
    ),
  },
];

const Group = ({ title, items, prefix }: { title: string; items: QA[]; prefix: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6 border-l-4 border-cyan pl-4">{title}</h2>
    <Accordion type="single" collapsible className="bg-card rounded-lg border border-border px-4 md:px-6">
      {items.map((it, i) => (
        <AccordionItem key={i} value={`${prefix}-${i}`} className="last:border-b-0">
          <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline hover:text-cyan">
            {it.q}
          </AccordionTrigger>
          <AccordionContent className="font-body text-muted-foreground leading-relaxed">{it.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </motion.div>
);

const FAQ = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <HelpCircle size={48} className="text-cyan mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Foire aux questions</h1>
          <p className="text-base md:text-lg font-body text-primary-foreground/80">
            Retrouvez les réponses aux questions les plus fréquentes sur le Forum FOCEEN.
          </p>
        </motion.div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <Group title="Pour les étudiants et visiteurs" items={etudiants} prefix="etu" />
        <Group title="Pour les entreprises et partenaires" items={entreprises} prefix="ent" />
      </div>
    </section>
  </div>
);

export default FAQ;
