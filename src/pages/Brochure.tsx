import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronRight as ArrowSmall, LayoutGrid, Quote } from "lucide-react";
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
  { name: "Batiactu", src: "/logos/batiactu.png" },
  { name: "Le Monde des Grandes Écoles et Universités", src: "/logos/monde-grandes-ecoles.png" },
  { name: "Haribo", src: "/logos/haribo.png" },
  { name: "Gomet'", src: "/logos/gomet.png" },
  { name: "Studyrama", src: "/logos/studyrama.png" },
  { name: "SNCF Réseau", src: "/logos/sncf-reseau.png" },
];

const sncf = make("SNCF Réseau", "Infrastructures & Gestion du réseau ferroviaire", "/logos/sncf-reseau.png", {
  founded: "1938 (société anonyme du groupe SNCF depuis 2020)",
  location: "Ancrage national sur l'ensemble des territoires & Europe",
  revenue: "NC",
  employees: "50 000 collaborateurs",
  description:
    "Gestionnaire d'infrastructure du réseau ferré national détenu à 100 % par l'État français, SNCF Réseau assure la maintenance, la modernisation et la régulation de l'ensemble des voies ferroviaires pour concevoir des mobilités durables, connectées et performantes au cœur des territoires.",
  profiles: ["Ingénieurs génie civil & voies ferrées", "Ingénieurs signalisation, télécoms & informatique ferroviaire", "Ingénieurs maintenance, exploitation & sécurité des circulations", "Chefs de projets modernisation des infrastructures"],
  positions: ["Alternance", "CDI", "Stage"],
  recruitment: ["Candidatures via le portail carrière SNCF Réseau", "Processus de sélection et entretiens selon le poste"],
});

const navalGroup = make("Naval Group", "Industrie navale de Défense", "/logos/naval-group.png", {
  founded: "2002 (héritage des arsenaux historiques)",
  location: "9 sites en France (Toulon, Cherbourg, Lorient, Nantes-Indret, Ollioules...) & International",
  revenue: "4,6 Md €",
  employees: "17 000 collaborateurs",
  description:
    "Maître d'œuvre industriel et leader européen du naval de défense, Naval Group conçoit, réalise et entretient des sous-marins, des porte-avions, des navires de surface et des systèmes de drones armés. L'entreprise intègre les technologies les plus avancées en propulsion nucléaire, IA de combat et cybersécurité navale.",
  profiles: [
    "Ingénierie de systèmes complexes & Propulsion nucléaire",
    "Cybersécurité, IA & Traitement de données navales",
    "Développement logiciel & Architectures réseaux bord",
    "Management de projets, Chantier & Supply chain",
  ],
  positions: ["Alternance", "CDI", "Stage"],
  recruitment: ["Sélection sur CV et lettre de motivation", "Entretiens RH et techniques opérationnels"],
});

const RAW_SECTORS: { name: string; companies: Company[] }[] = [
  {
    name: "BTP",
    companies: [
      make("Bouygues Bâtiment Sud-Est", "BTP & Construction", "/logos/bouygues-batiment-sud-est.png", {
        founded: "1973",
        location: "Région Sud-Est",
        revenue: "380 M€",
        employees: "950 collaborateurs",
        description:
          "Acteur majeur de la construction en région Sud-Est, Bouygues Bâtiment Sud-Est conçoit, réalise et réhabilite des ouvrages d'envergure dans l'habitat, le tertiaire, l'industrie et la logistique, avec un engagement fort en matière de bas-carbone et de mixité des talents.",
        profiles: ["Conduite de travaux", "Ingénieurs études de prix", "Méthodes & planification", "Ingénieurs travaux neufs et réhabilitation"],
        positions: ["CDI", "Stage"],
        recruitment: ["Sélection sur CV", "Entretiens opérationnels"],
      }),
      make("Eiffage", "BTP, Concessions & Énergie Systèmes", "/logos/eiffage.png", {
        founded: "1884",
        location: "France & Europe",
        revenue: "25,3 Md €",
        employees: "87 000 collaborateurs",
        description:
          "Acteur de référence d'une Europe bas-carbone et leader européen du BTP et des concessions, Eiffage déploie son savoir-faire à travers 8 métiers (Construction, Immobilier, Aménagement, Génie Civil, Route, Métal, Énergie Systèmes, Concessions) pour concevoir et rénover les infrastructures durables de demain.",
        profiles: ["Ingénieurs travaux génie civil & bâtiment", "Ingénieurs études & méthodes", "Ingénieurs énergie systèmes", "Chefs de projet concessions & infrastructures"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["Sélection des CV par les RH", "Échange téléphonique", "Rencontre avec l'opérationnel recruteur"],
      }),
      make("RAZEL-BEC", "BTP", "/logos/razel-bec.png", {
        founded: "1885",
        location: "Nationale (PACA, IDF, AURA, Occitanie...) & Monaco",
        revenue: "1,05 Md €",
        employees: "5 000",
        description:
          "Filiale du Groupe FAYAT, RAZEL-BEC est un expert de référence des grands chantiers de travaux publics : ouvrages d'art, infrastructures linéaires, travaux souterrains, génie civil nucléaire et barrages. Fort de 145 ans d'histoire, le groupe déploie son excellence technique et humaine en France et à l'international.",
        profiles: ["Conduite de travaux", "Ingénieurs études de prix", "Ingénieurs études techniques & méthodes", "Ingénieurs QSE & matériel"],
        positions: ["Stage"],
        recruitment: ["Préqualification RH (soft skills & motivation)", "Entretien opérationnel avec le tuteur"],
      }),
      make("SMAC", "Enveloppe du bâtiment & Rénovation énergétique", "/logos/smac.png", {
        founded: "2005",
        location: "70 agences en France & 4 filiales internationales",
        revenue: "500 M€",
        employees: "2 400 collaborateurs",
        description:
          "Leader français de l'enveloppe du bâtiment, SMAC intervient en étanchéité, façades architecturales, bardage et rénovation énergétique (toitures végétalisées, ombrières photovoltaïques) sur des chantiers tertiaires, résidentiels et industriels d'envergure.",
        profiles: ["Ingénieurs travaux & Conduite de chantier", "Ingénieurs bureau d'études & méthodes", "Chargés d'affaires & métreurs", "Ingénieurs performance énergétique du bâtiment"],
        positions: ["Alternance", "Stage"],
        recruitment: ["Sélection sur CV", "2 entretiens opérationnels en agence"],
      }),
      make("Vinci Construction", "BTP & Grands Projets", "/logos/vinci-construction.png", {
        founded: "2000",
        location: "France & International (100+ pays)",
        revenue: "32,1 Md €",
        employees: "117 000 collaborateurs",
        description:
          "Acteur mondial de premier plan de la construction, VINCI Construction réunit 1 300 entreprises de proximité et réseaux de spécialité pour bâtir les infrastructures de transport, les bâtiments, les réseaux et les aménagements urbains de demain, guidé par la passion de construire utile et durable.",
        profiles: ["Conduite de travaux & Gestion de chantiers", "Ingénieurs études de prix & Méthodes", "Ingénieurs génie civil & Structures", "Chefs de projet aménagement & Réseaux"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["Transmission et sélection des CV par les opérationnels", "Entretiens de recrutement"],
      }),
    ],
  },
  {
    name: "Énergie",
    companies: [
      make("CEA", "Recherche & Énergies bas-carbone", "/logos/cea.png", {
        founded: "1945",
        location: "10 centres en France (dont Cadarache - 13)",
        revenue: "6 Md € (Budget R&D)",
        employees: "21 500",
        description:
          "Acteur majeur de la recherche technologique et fondamentale, le CEA innove dans quatre domaines stratégiques : énergies bas-carbone (nucléaire et renouvelables), numérique, santé et défense souveraine. Premier déposant de brevets de recherche en France, il conjugue curiosité et excellence scientifique.",
        profiles: ["Ingénieurs généralistes", "Ingénieurs mécanique & thermique", "Ingénieurs thermohydraulique & génie nucléaire", "Énergéticiens & Chimie des matériaux"],
        positions: ["Stage", "Alternance", "CDD", "CDI"],
        recruitment: ["Candidature sur emploi.cea.fr (CV + LM)", "Entretiens scientifiques et RH"],
      }),
      make("EDF", "Production & Fourniture d'énergie bas carbone", "/logos/edf.png", {
        founded: "1946",
        location: "2 000+ implantations en France & Présence à l'international",
        revenue: "113,3 Md €",
        employees: "191 440 collaborateurs",
        description:
          "Leader mondial des énergies bas carbone, le Groupe EDF produit, transporte et distribue une électricité compétitive et décarbonée grâce à son mix diversifié (nucléaire, hydraulique, éolien, solaire). Acteur clé de la transition énergétique, EDF offre plus de 230 métiers au cœur de missions techniques et de souveraineté énergétique.",
        profiles: [
          "Ingénieurs nucléaire, génie atomique & thermique",
          "Ingénieurs énergies renouvelables (éolien, solaire, hydroélectricité)",
          "Ingénieurs exploitation, maintenance & sûreté industrielle",
          "Ingénieurs réseaux, data & systèmes d'information",
        ],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: [
          "Candidatures sur edf.fr/edf-recrute",
          "Sélection sur CV et lettre de motivation",
          "Entretiens RH et opérationnels",
        ],
      }),
      make("Enedis", "Distribution d'électricité & Réseaux intelligents", "/logos/enedis.png", {
        founded: "2008",
        location: "Réseau national (95 % du territoire français) & Direction régionale PACA",
        revenue: "NC",
        employees: "42 000 collaborateurs",
        description:
          "Gestionnaire du réseau public de distribution d'électricité et entreprise à mission, Enedis modernise et digitalise 1,4 million de km de lignes pour accélérer la transition écologique : raccordement massif des énergies renouvelables, déploiement des mobilités électriques et gestion intelligente des données.",
        profiles: ["Ingénieurs data & IA (Power BI, Copilot, Python)", "Ingénieurs réseaux électriques & électrotechnique", "Chefs de projet raccordement EnR & transition écologique", "Ingénieurs sécurité, télécoms & automatismes"],
        positions: ["Alternance", "Stage"],
        recruitment: ["Candidature sur enedis.fr/hub-carriere", "Entretien avec un binôme métier / RH"],
      }),
      make("EP2C Energy", "Conseil & Ingénierie de l'Énergie", "/logos/ep2c-energy.png", {
        founded: "2014",
        location: "France & International",
        revenue: "102 M€",
        employees: "650 collaborateurs",
        description:
          "Cabinet de conseil en ingénierie spécialisé dans les grands projets industriels et énergétiques complexes, EP2C Energy intervient sur l'ensemble du cycle de vie des projets (conception, gestion de projet, construction). Sa structure dynamique favorise une montée en compétences rapide et des mobilités internationales.",
        profiles: ["Ingénieurs projets énergie & procédés", "Business Managers / Ingénieurs d'Affaires", "Ingénieurs supervision de chantier & construction"],
        positions: ["CDI", "Stage"],
        recruitment: ["Sélection sur CV", "Parcours d'environ 3 entretiens (visio ou présentiel)"],
      }),
      make("Framatome", "Industrie nucléaire", "/logos/framatome.png", {
        founded: "1958",
        location: "France & International",
        revenue: "5,4 Md €",
        employees: "22 000 collaborateurs",
        description:
          "Leader international de l'énergie nucléaire, Framatome conçoit, fabrique et maintient les composants de cuve, le combustible nucléaire et les systèmes de contrôle-commande pour les parcs nucléaires du monde entier. Ses équipes contribuent chaque jour au développement d'un mix énergétique bas-carbone, sûr et compétitif.",
        profiles: ["Ingénierie de conception & Systèmes", "Fabrication industrielle & Maintenance sur site", "Sûreté nucléaire, Qualité & Cybersécurité", "Pilotage de projet & Affaires"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["Candidature sur le site carrières", "Tests d'anglais & d'auto-évaluation comportementale", "Parcours RH et 2 entretiens managers (3 maximum)"],
      }),
      make("Groupe SNEF", "Génie électrique & Solutions multitechniques", "/logos/groupe-snef.png", {
        founded: "1905",
        location: "Siège historique à Marseille — Présence dans 30+ pays",
        revenue: "2,2 Md €",
        employees: "14 500 collaborateurs",
        description:
          "Fondé à Marseille en 1905, le Groupe Snef est un acteur majeur des solutions multitechniques en France et à l'international. Le groupe conçoit, intègre et maintient des installations complexes dans les secteurs de l'énergie, de l'industrie, du maritime, du nucléaire et du tertiaire pour accompagner la transition énergétique et numérique.",
        profiles: ["Ingénieurs génie électrique, automatisme & énergie", "Ingénieurs d'études & projets (industrie, naval, nucléaire)", "Conducteurs de travaux & chargés d'affaires", "Responsables d'opérations en infrastructures & tertiaire"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["Sélection sur CV (jobs.groupesnef.com)", "2 à 3 entretiens individuels en agences SNEF"],
      }),
      make("Orano", "Énergie nucléaire", "/logos/orano.png", {
        founded: "2018 (issu d'une longue histoire nucléaire)",
        location: "17 sites en France — Présence internationale",
        revenue: "5,1 Md €",
        employees: "17 500 collaborateurs",
        description:
          "Acteur majeur du nucléaire mondial, Orano valorise les matières nucléaires pour fournir une électricité bas-carbone, sécurisée et compétitive. Le groupe intervient sur tout le cycle : mines, conversion, enrichissement, recyclage des combustibles et démantèlement.",
        profiles: ["Spécialisation nucléaire & environnement", "Projets, études & conception", "Maintenance, exploitation & assainissement", "Data, transition digitale & R&D"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["Entretien RH (tests de langue, personnalité & enquête administrative)", "Entretien manager opérationnel"],
      }),
      make("Recycle Plastique", "Recyclage & Économie circulaire", "/logos/recycle-plastique.png", {
        founded: "2019",
        location: "France",
        revenue: "NC",
        employees: "3 collaborateurs",
        description:
          "Entreprise engagée dans la transition écologique concrète, Recycle Plastique valorise et recycle les matières plastiques pour répondre aux défis majeurs de l'économie circulaire et préserver les ressources de la planète.",
        profiles: ["Profils engagés & résilients en transition écologique", "Génie des matériaux & procédés de valorisation plastique", "Gestion de projet environnement & RSE"],
        positions: ["Alternance", "Stage"],
        recruitment: ["Sélection sur CV et lettre de motivation", "Entretien d'équipe"],
      }),
      make("Technip Energies", "Ingénierie & Technologies de l'Énergie", "/logos/technip-energies.png", {
        founded: "1958",
        location: "Présence internationale (35 pays)",
        revenue: "7,2 Md €",
        employees: "18 000 collaborateurs",
        description:
          "Entreprise de technologies et d'ingénierie de premier plan, Technip Energies est un acteur de référence du GNL, de l'hydrogène vert, de la chimie durable et du captage de CO2. Ses 18 000 collaborateurs concrétisent la transition énergétique en transformant les innovations en réalités industrielles vers le Net Zéro.",
        profiles: ["Ingénieurs procédés & Énergie", "Ingénieurs conception & HSE Design", "Cost control, Planning & Estimation", "Digital (IDS) & Management de grands projets"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["CV sur ten.com/careers", "Entretiens managers et RH (Français & Anglais)"],
      }),
      make("TechnicAtome", "Nucléaire & Défense", "/logos/technicatome.jpg", {
        founded: "1972",
        location: "Aix-en-Provence, Cadarache, Toulon, Saclay, Bordeaux, Nantes, Brest & Cherbourg",
        revenue: "660 M€",
        employees: "2 200 collaborateurs",
        description:
          "Entreprise française de haute technologie forte de 2 200 collaborateurs sur 8 sites, TechnicAtome conçoit et maintient les réacteurs nucléaires compacts de propulsion navale pour les sous-marins et porte-avions de la Marine Nationale, tout en œuvrant dans le nucléaire civil sur des programmes innovants tels que le Réacteur Jules Horowitz (RJH).",
        profiles: ["Architecture système & Numérique sécuritaire", "Analyses de sûreté & Neutronique", "Thermohydraulique & Calculs", "Management de projets & Soutien logistique intégré (SLI)"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["Sélection sur CV", "Échange téléphonique", "Entretiens managers opérationnels et RH"],
      }),
      make("VINCI Energies", "Énergie & Transformation numérique", "/logos/vinci-energies.png", {
        founded: "1898",
        location: "France & International (2 200 entreprises)",
        revenue: "21,6 Md €",
        employees: "109 000 collaborateurs",
        description:
          "Acteur clé de la transition environnementale et numérique, VINCI Energies déploie des solutions multitechniques sur mesure pour les infrastructures d'énergie, les bâtiments intelligents et l'industrie 4.0. Ses 2 200 entreprises agiles accompagnent leurs clients pour rendre les procédés plus fiables et durables.",
        profiles: ["Ingénieurs d'affaires & Responsables d'affaires", "Ingénieurs d'études électriques & Automatismes", "Chefs de projet énergie & Télécoms", "Ingénieurs transition bas-carbone & Smart grids"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["CV + lettre de motivation", "2 à 3 entretiens d'embauche (RH et opérationnels)"],
      }),
      make("PAPREC", "Recyclage & Valorisation énergétique", "/logos/paprec.png", {
        founded: "1994",
        location: "La Seyne-sur-Mer — Présence nationale et internationale",
        revenue: "3,5 Md €",
        employees: "18 000 collaborateurs",
        description:
          "Leader français du recyclage et acteur européen de premier plan de la gestion des déchets, Paprec conçoit, construit et exploite des usines de valorisation énergétique et produit des énergies vertes pour bâtir une économie circulaire durable.",
        profiles: ["Ingénieurs généralistes & mécanique", "Ingénieurs énergétique & procédés thermiques", "Chefs de projet usines & travaux", "Ingénieurs études & exploitation"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["CV + lettre de motivation", "Entretiens RH et techniques opérationnels"],
      }),
    ],
  },
  {
    name: "Industrie",
    companies: [
      make("Groupe ADF", "Industrie", "/logos/groupe-adf.png", {
        founded: "1962",
        location: "Vitrolles (siège) — International",
        revenue: "682 M€",
        employees: "5 100",
        description:
          "Depuis plus de 60 ans, Groupe ADF apporte des solutions complètes pour soutenir la performance des industriels. Ses équipes conçoivent des équipements innovants et assurent le support opérationnel et la maintenance face aux défis de la transition énergétique et digitale.",
        profiles: ["Ingénieurs mécanique", "Ingénieurs hydraulique", "Chargés de projet", "Responsables qualité"],
        positions: ["Stage", "Alternance", "CDD", "CDI"],
        recruitment: ["CV", "3 entretiens (Vitrolles ou Teams)", "Anglais impératif"],
      }),
      make("EXAIL", "Robotique & Hautes technologies", "/logos/exail.png", {
        founded: "2022 (alliance ECA Group & iXblue)",
        location: "Présence internationale (80+ pays)",
        revenue: "370 M€",
        employees: "2 000 collaborateurs",
        description:
          "Champion mondial de haute technologie issu du rapprochement d'ECA Group et d'iXblue, Exail conçoit des solutions d'exception en robotique autonome, systèmes maritimes, navigation inertielle de haute précision, aérospatiale et photonique pour des environnements civils et militaires complexes.",
        profiles: ["Ingénieurs électronique & matériel", "Ingénieurs systèmes embarqués & temps réel", "Ingénieurs logiciels & IA", "Ingénieurs photonique & robotique"],
        positions: ["CDI", "Stage"],
        recruitment: ["CV + lettre de motivation", "Entretien RH et opérationnel (sur site ou visio)"],
      }),
      make("France Chimie Méditerranée", "Fédération professionnelle / Chimie", "/logos/france-chimie-mediterranee.png", {
        founded: "1901",
        location: "Régions PACA, Corse et Occitanie Est",
        revenue: "Fédération (S.O.)",
        employees: "Représente +800 entreprises & 25 000 salariés",
        description:
          "Organisation professionnelle de référence, France Chimie Méditerranée représente et accompagne l'ensemble de la filière chimique en PACA, Corse et Occitanie Est. Elle valorise les opportunités d'emploi, la transition écologique et l'innovation au cœur d'un tissu industriel régional stratégique.",
        profiles: ["Ingénieurs procédés chimiques", "Chimie des matériaux & formulation", "HSE & Sécurité industrielle", "Transition énergétique & décarbonation"],
        positions: ["CDD", "CDI"],
        recruitment: ["CV + lettre de motivation", "Mise en relation filière"],
      }),
      make("NAOS", "Dermocosmétique & Écobiologie", "/logos/naos.png", {
        founded: "1977",
        location: "Siège à Aix-en-Provence, Lyon, Paris & International (130 pays)",
        revenue: "900 M€",
        employees: "3 500 collaborateurs",
        description:
          "Entreprise à mission et créatrice des marques Bioderma, Institut Esthederm et État Pur, NAOS développe une approche scientifique pionnière : l'écobiologie, qui respecte l'écosystème cutané. Détenue par un fonds de dotation dédié au développement du potentiel humain, l'entreprise investit activement dans la R&D, l'industrie responsable et le soin du vivant.",
        profiles: ["Ingénieurs R&D formulation & Chimie du vivant", "Ingénieurs procédés industriels, Packaging & Qualité", "Supply chain, Achats & Opérations internationales", "Marketing scientifique, Business & Fonctions supports"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["Candidature sur careers.naos.com", "Échange RH", "Entretien manager & experts métiers"],
      }),
      make("Onet Technologies", "Ingénierie & Services nucléaires", "/logos/onet.png", {
        founded: "2004",
        location: "Multi-sites en France (siège à Marseille)",
        revenue: "300 M€",
        employees: "3 000 collaborateurs",
        description:
          "Partenaire historique de la filière nucléaire reconnu depuis plus de 40 ans, Onet Technologies accompagne les exploitants sur l'ensemble du cycle de vie des installations : ingénierie de conception, maintenance spécialisée, modifications, démantèlement et traitement des déchets, avec des exigences maximales de sûreté.",
        profiles: ["Ingénieurs calcul & Mécanique nucléaire", "Ingénieurs assainissement & Démantèlement", "Chefs de projets sûreté & Environnement", "Ingénieurs travaux & Maintenance sur site"],
        positions: ["Alternance", "CDI"],
        recruitment: ["Sélection sur CV", "Entretiens de recrutement"],
      }),
      make("Pellenc ST", "Industrie", "/logos/pellenc-st.png", {
        founded: "2001",
        location: "Pertuis (84) / International",
        revenue: "> 90 M€",
        employees: "330",
        description:
          "Depuis 2001, Pellenc ST conçoit et fabrique en France des équipements de tri intelligents et des services connectés destinés au tri des déchets et à l’industrie du recyclage. Avec un parc installé de plus de 3 500 machines dans le monde entier, l'entreprise s'impose comme un leader technologique reconnu alliant vision, IA et robotique industrielle.",
        profiles: ["Conception mécanique & 3D", "Ingénieurs méthodes & matériaux", "Data / IA / Computer vision", "Automatisation & robotique", "Génie des procédés"],
        positions: ["Stage", "Alternance", "CDI"],
        recruitment: ["Dépôt de CV", "Entretien RH", "Entretien N+1 / N+2", "Anglais professionnel"],
      }),
      make("STMicroelectronics", "Industrie", "/logos/stmicroelectronics.png", {
        founded: "1987",
        location: "Internationale (sites en France : PACA, AURA...)",
        revenue: "11,8 Md $",
        employees: "48 000",
        description:
          "Acteur mondial de premier plan dans le secteur des semi-conducteurs, STMicroelectronics conçoit et fabrique des technologies essentielles qui rendent les objets plus intelligents, connectés et durables. L'entreprise façonne les solutions technologiques de pointe pour l'automobile, l'industrie et l'Internet des objets (IoT).",
        profiles: ["Électronique analogique et numérique", "Microélectronique & Systèmes embarqués", "Développement logiciel embarqué (C, C++, Python)", "Conception de circuits intégrés & Validation/test"],
        positions: ["Alternance", "Stage"],
        recruitment: ["CV et lettre de motivation", "Entretien RH", "Entretien Manager"],
      }),
    ],
  },
  {
    name: "Ingénierie et Industrie",
    companies: [
      make("AKKODIS", "Ingénierie & IT", "/logos/akkodis.png", {
        founded: "2022",
        location: "30+ agences en France — Présence dans 30 pays",
        revenue: "4 Md €",
        employees: "50 000 (dont 2 000 en entité locale)",
        description:
          "Filiale d'Adecco Group, Akkodis associe ingénierie de pointe et numérique pour accompagner les organisations dans leur transformation technologique. Forte de 50 000 experts mondiaux, l'entreprise intervient sur l'ensemble du cycle d'innovation dans la défense, l'aéronautique, l'énergie, l'automobile et les télécommunications.",
        profiles: ["Ingénieurs mécanique & conception", "Développeurs & intégrateurs logiciels", "Ingénieurs systèmes embarqués & IVVQ", "Ingénieurs gestion de configuration"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["CV (+ LM optionnelle)", "Pré-qualification téléphonique", "Entretien RH & Business Manager", "Entretien technique"],
      }),
      make("ASSYSTEM", "Ingénierie & Nucléaire", "/logos/assystem.png", {
        founded: "1966",
        location: "France & International (13 pays)",
        revenue: "656 M€",
        employees: "8 000 collaborateurs",
        description:
          "Parmi les leaders mondiaux de l'ingénierie nucléaire indépendante, Assystem accompagne depuis 60 ans les acteurs publics et industriels dans la réalisation d'infrastructures complexes soumises à de hautes exigences de sûreté, de l'ingénierie d'études au démantèlement.",
        profiles: ["Ingénieurs projets (PMO, coûts, risques, qualité)", "Ingénieurs études (sûreté nucléaire, démantèlement)", "Ingénieurs électricité, mécanique & génie civil", "Ingénieurs systèmes, digital, data & IA"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["Candidature en ligne", "Pré-sélection & échange téléphonique", "Entretien RH et managers", "Parcours d'intégration"],
      }),
      make("Bee Engineering", "Conseil en ingénierie", "/logos/bee-engineering.jpg", {
        founded: "2010",
        location: "11 implantations en France (Aix-en-Provence, Lyon, Paris, Nantes...)",
        revenue: "80 M€",
        employees: "950 collaborateurs",
        description:
          "Société de conseil en ingénierie en forte croissance, Bee Engineering intervient auprès des grands donneurs d'ordre dans les industries de l'énergie et des procédés, les grandes infrastructures et l'industrie des transports.",
        profiles: ["Ingénieurs énergie & procédés", "Ingénieurs infrastructures", "Ingénieurs transports & mécanique"],
        positions: ["CDI"],
        recruitment: ["Sélection sur CV", "Parcours de 3 à 4 entretiens de qualification"],
      }),
      make("Bertin Technologies", "Instrumentation scientifique & Systèmes critiques", "/logos/bertin-technologies.png", {
        founded: "1956",
        location: "France (Aix, Montigny, Grenoble, Pertuis...) & International (Europe, USA)",
        revenue: "178 M€",
        employees: "1 000 collaborateurs",
        description:
          "Fondé en 1956 par l'ingénieur Jean Bertin, Bertin Technologies conçoit et développe des équipements de pointe et des systèmes de mesure pour des applications scientifiques et critiques. Ses innovations interviennent dans des secteurs hautement stratégiques : défense et sécurité, nucléaire civil, spatial, environnement et sciences du vivant.",
        profiles: ["Ingénieurs mécanique & conception de systèmes", "Ingénieurs optique, optronique & photonique", "Ingénieurs instrumentation, mesure & physique", "Ingénieurs R&D systèmes critiques"],
        positions: ["Alternance", "Stage (opportunités de CDD/CDI en pré-embauche)"],
        recruitment: ["Candidature sur bertintechnologies.taleez.com", "Présélection sur CV", "Échange téléphonique RH", "Entretien technique avec manager / tuteur"],
      }),
      make("Cap Ingelec", "Ingénierie & Bâtiments complexes", "/logos/cap-ingelec.png", {
        founded: "1992",
        location: "15 agences en France (dont Marseille/Aix) & International",
        revenue: "680 M€",
        employees: "850",
        description:
          "Groupe d'ingénierie et réalisation spécialisé dans les bâtiments complexes, Cap Ingelec assure des missions clés en main sur des projets d'envergure dans les datacenters, l'énergie et l'industrie, tout en intégrant des démarches concrètes de réduction de l'empreinte environnementale.",
        profiles: ["Ingénieurs travaux", "Ingénieurs études techniques", "Chefs de projets ingénierie", "Ingénieurs d'affaires"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["CV + lettre de motivation", "Entretien téléphonique & présentiel", "Anglais opérationnel requis"],
      }),
      make("ECIA", "Ingénierie Nucléaire", "/logos/ecia.png", {
        founded: "2007",
        location: "Venelles, Bagnols-sur-Cèze, Bollène, Lyon, Cherbourg, Nantes",
        revenue: "13 M€",
        employees: "180 collaborateurs",
        description:
          "Entité d'EQUANS France, ECIA réunit près de 200 spécialistes sur 8 agences en France pour intervenir sur tout le cycle de vie des installations nucléaires, de la conception au démantèlement. Ses équipes apportent une expertise pointue en électricité courants forts/faibles, mécanique, génie climatique (HVAC) et contrôle-commande.",
        profiles: ["Ingénieurs électricité (CFO/CFA)", "Ingénieurs contrôle-commande", "Ingénieurs génie mécanique & calculs", "Ingénieurs ventilation & génie climatique (HVAC)"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["Sélection sur CV", "Entretien RH", "Entretien technique (en visio)"],
      }),
      make("Egis", "Ingénierie", "/logos/egis.png", {
        founded: "1970",
        location: "Siège à Paris — Présence dans 100+ pays",
        revenue: "2,5 Md €",
        employees: "24 000",
        description:
          "Acteur international de premier plan de l'ingénierie de la construction, de l'architecture et des services à la mobilité, Egis conçoit des infrastructures intelligentes et durables dans les transports, le bâtiment, l'eau, l'environnement et l'énergie bas-carbone.",
        profiles: ["Ingénieurs génie civil & bâtiment", "Ingénieurs transports & mobilités", "Ingénieurs énergie & environnement", "Data, numérique & management de projet (BIM)"],
        positions: ["Stage", "Alternance", "CDD", "CDI"],
        recruitment: ["Entretien téléphonique", "Entretien RH", "Entretien opérationnel (étude de cas éventuelle)"],
      }),
      make("EMIS et EMIS Access", "Maintenance industrielle & Métallurgie", "/logos/emis.png", {
        founded: "1987",
        location: "Vitrolles (13)",
        revenue: "≈ 47 M€",
        employees: "170 collaborateurs",
        description:
          "Filiales du groupe Ponticelli Frères, EMIS et EMIS ACCESS accompagnent les grands donneurs d'ordre industriels en maintenance, mécanique, métallurgie, nettoyage industriel, accès et calorifuge, au service des filières vitales de l'énergie, de l'eau et de la santé.",
        profiles: ["Ingénieurs qualité soudage", "Ingénieurs travaux & conducteurs de travaux", "Ingénieurs HSE", "Ingénieurs études & méthodes"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["CV + lettre de motivation", "Entretiens de recrutement"],
      }),
      make("EODD Ingénieurs Conseils", "Conseil & Ingénierie environnementale", "/logos/eodd.png", {
        founded: "1991",
        location: "13 agences nationales (France métropolitaine et outre-mer)",
        revenue: "30 M€",
        employees: "320 collaborateurs",
        description:
          "Société à mission et bureau d'études pionnier de la transformation écologique depuis plus de 30 ans, EODD conçoit et déploie des solutions innovantes et concrètes à haute valeur environnementale et sociale pour l'aménagement urbain, la biodiversité, le bas-carbone et l'économie circulaire.",
        profiles: ["Chargés d'études & spécialistes environnement", "Chefs de projet transition écologique & énergie", "Ingénieurs écoconception & biodiversité", "Directeurs d'affaires / projets durables"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["CV + lettre de motivation", "Entretien RH téléphonique", "Entretien opérationnel avec équipes métiers (présentiel/visio)"],
      }),
      make("Inddigo", "Ingénierie & Conseil en transition écologique", "/logos/inddigo.png", {
        founded: "1986",
        location: "Agences à l'échelle nationale (France)",
        revenue: "34,9 M€",
        employees: "460 collaborateurs",
        description:
          "Pionnier du développement durable et de l'ingénierie environnementale depuis 1986, Inddigo accompagne territoires et entreprises privées dans leur transition : économie circulaire, gestion des déchets, décarbonation, énergies renouvelables et résilience climatique.",
        profiles: ["Ingénieurs énergie & décarbonation", "Ingénieurs bâtiment durable & environnement", "Ingénieurs économie circulaire & déchets", "Ingénieurs mobilités douces & transports"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["Sélection sur CV", "Préqualification", "2 entretiens (technique métier et RH)"],
      }),
      make("Groupe LGM", "Ingénierie", "/logos/lgm.png", {
        founded: "1991",
        location: "France & International",
        revenue: "170 M€",
        employees: "1 600",
        description:
          "Le groupe LGM conçoit pour les grands groupes industriels des solutions innovantes visant à optimiser les performances des grands systèmes et infrastructures complexes en exploitation et maintenance : sûreté, gestion des risques, ingénierie électronique et logicielle.",
        profiles: ["Ingénieurs & Chefs de projet", "AMO / PMO / Contract managers", "Ingénierie du soutien & MCO", "Maîtrise des risques & Ingénierie système"],
        positions: ["Stage", "CDD", "CDI"],
        recruitment: ["Candidature avec CV", "2 étapes en 3 semaines maximum", "Entretiens en visio et sur site"],
      }),
      make("Groupe Ortec", "Ingénierie", "/logos/ortec.png", {
        founded: "1992",
        location: "Aix-en-Provence (13) — 29 pays",
        revenue: "1,8 Md €",
        employees: "12 500",
        description:
          "Groupe d'ingénierie et de services industriels intégrant 12 500 collaborateurs à l'international, Ortec conçoit, réalise et accompagne les grands programmes de l'énergie, de l'environnement, du nucléaire et de l'aéronautique. L'entreprise propose des parcours variés aux jeunes diplômés guidés par des valeurs d'audace, d'exigence et de bienveillance.",
        profiles: ["Ingénieurs calcul & mécanique", "Chefs de projets industriels", "Ingénierie nucléaire & énergie", "Data, numérique & systèmes complexes"],
        positions: ["Stage", "Alternance", "CDD", "CDI"],
        recruitment: ["Échange stand / Dépôt CV", "Mise en relation recruteur", "Entretiens opérationnels"],
      }),
      make("Groupe REEL", "Industrie", "/logos/reel.png", {
        founded: "1946",
        location: "Siège en France — Présence internationale",
        revenue: "600 M€",
        employees: "3 400",
        description:
          "Spécialiste de la conception, de la fabrication et de la maintenance de systèmes de levage et de manutention complexes de haute sécurité, le Groupe REEL intervient au cœur des filières les plus exigeantes : nucléaire, aéronautique, hydroélectricité, énergies marines et aluminium.",
        profiles: ["Automatisme & informatique industrielle", "Conception & calculs mécaniques", "Méthodes industrielles", "Chargés d'affaires techniques juniors"],
        positions: ["Stage (TFE)", "Alternance", "CDI – Jeune diplômé / Graduate program"],
        recruitment: ["Sélection CV", "1 à 3 entretiens techniques et RH"],
      }),
      make("Setec", "Ingénierie", "/logos/setec.png", {
        founded: "1957",
        location: "Vitrolles, Paris, Lyon, Bordeaux, Toulouse, Nantes",
        revenue: "560 M€",
        employees: "4 200",
        description:
          "Groupe d'ingénierie indépendant détenu à 100 % par ses collaborateurs, Setec rassemble 40 sociétés à taille humaine sous l'impulsion « Ingénieurs et Citoyens ». Le groupe imagine et réalise des projets d'envergure en transports, génie civil, environnement, énergie, bâtiment et ville durable.",
        profiles: ["Chefs de projet / Pilotes OPC", "Ingénieurs génie civil & ouvrages d'art", "Ingénieurs aménagement urbain", "Chargés d'études environnement / hydraulique", "Ingénieurs PMO"],
        positions: ["Stage"],
        recruitment: ["Candidature site carrières", "Échange téléphonique RH", "Entretien RH & Manager"],
      }),
      make("Syntec-Ingénierie", "Fédération professionnelle / Ingénierie", "/logos/syntec-ingenierie.png", {
        founded: "1991",
        location: "Paris (représentation nationale)",
        revenue: "Fédération (S.O.)",
        employees: "Représente 400 entreprises & 90 000 salariés",
        description:
          "Fédération professionnelle des entreprises du secteur de l'ingénierie, Syntec-Ingénierie regroupe 400 entreprises actrices de l'écoconception, de la décarbonation industrielle et des énergies propres. L'ingénierie est le premier débouché pour les jeunes ingénieurs.",
        profiles: ["Fédération professionnelle : présentation des métiers et opportunités de la filière ingénierie"],
        positions: ["Information carrières & filières"],
        recruitment: ["Échanges sur stand / Orientation vers les entreprises adhérentes"],
      }),
      make("Tractebel", "Ingénierie de l'énergie & Grandes infrastructures", "/logos/tractebel.png", {
        founded: "1994 (héritage Coyne et Bellier)",
        location: "France & International",
        revenue: "118 M€",
        employees: "600 collaborateurs (Tractebel France)",
        description:
          "Filiale d'ingénierie internationale d'ENGIE, Tractebel est un acteur historique de la transition énergétique. Spécialiste mondial des ouvrages hydroélectriques, des barrages et du nucléaire civil (îlots nucléaires), l'entreprise conçoit des infrastructures complexes décarbonées.",
        profiles: ["Ingénieurs génie civil & calcul de structures", "Ingénieurs mécanique & modélisation 3D / CAO", "Ingénieurs procédés, hydraulique & nucléaire", "Chefs de projets & suivi de travaux"],
        positions: ["Alternance", "Stage"],
        recruitment: ["Sélection sur CV", "Entretiens techniques et RH"],
      }),
      make("Exiom Partners", "Conseil en Management — Banque & Assurance", "/logos/exiom.png", {
        founded: "2019",
        location: "Paris & Lyon — Rayonnement national",
        revenue: "30 M€",
        employees: "200 collaborateurs",
        description:
          "Cabinet de conseil en management fondé en 2019, Exiom Partners accompagne les acteurs majeurs de la banque et de l'assurance dans leurs grands enjeux stratégiques : transformation opérationnelle, modélisation des risques, organisation et performance financière.",
        profiles: ["Actuaires & Ingénieurs financiers quantitatifs (Quant)", "Consultants en organisation & transformation bancaire", "Profils ingénieurs généralistes & Data / Risques"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["Sélection sur CV et lettre de motivation (exiompartners.com)", "Entretiens de recrutement"],
      }),
      make("RTM", "Mobilités & Transports urbains de voyageurs", "/logos/rtm.png", {
        founded: "1950",
        location: "Métropole Aix-Marseille-Provence",
        revenue: "NC",
        employees: "587 collaborateurs (fonctions cadres/ingénierie)",
        description:
          "Acteur historique de la mobilité métropolitaine, la RTM conçoit, modernise et exploite le réseau de transports en commun (métro, tramway, bus, transport à la demande) au service des habitants de la métropole d'Aix-Marseille-Provence, avec une politique dynamique d'innovation et d'évolution interne.",
        profiles: ["Ingénieurs exploitation & systèmes de transport", "Ingénieurs maintenance, matériel roulant & infrastructures", "Chefs de projets modernisation, signalisation & billettique", "Ingénieurs systèmes d'information & data mobilité"],
        positions: ["CDD", "CDI", "Stage"],
        recruitment: ["Candidature sur talents.rtm.fr (CV et lettre de motivation)", "Entretiens individuels ou croisés à Marseille", "Accompagnement et opportunités de mobilité interne"],
      }),
      make("Vulcain Engineering", "Conseil & Ingénierie de l'énergie et du nucléaire", "/logos/vulcain-engineering.png", {
        founded: "2005",
        location: "France (Marseille, Aix, Cadarache...) & International",
        revenue: "194 M€",
        employees: "6 800 collaborateurs",
        description:
          "Société de conseil et d’ingénierie de premier plan spécialisée dans les secteurs de l’énergie et du nucléaire, Vulcain Engineering pilote des projets d’envergure nationale et internationale, ainsi qu'en région Sud (Marseille, Aix, Cadarache) aux côtés d'acteurs clés comme EDF, TechnicAtome, SPIE ou ITER.",
        profiles: ["Ingénieurs génie nucléaire & sûreté", "Ingénieurs procédés & mécanique industrielle", "Chefs de projet ingénierie & calcul d'installations", "Ingénieurs exploitation & maintenance industrielle"],
        positions: ["CDI", "Stage"],
        recruitment: ["Sélection sur CV (vulcain-eng.com)", "Appel de préqualification RH", "Entretien technique et présentation client"],
      }),
    ],
  },
  {
    name: "Numérique",
    companies: [
      make("Atos", "Services du numérique & Conseil IT", "/logos/atos.png", {
        founded: "1997",
        location: "Nombreuses implantations en France (Aix, Sophia, Paris...) & 54 pays",
        revenue: "7,2 Md €",
        employees: "52 000 collaborateurs",
        description:
          "Acteur mondial des services numériques, Atos conçoit des fondations digitales robustes et évolutives pour les entreprises et institutions. Le groupe déploie des solutions d'intelligence artificielle, de cloud hybride, de cybersécurité et de décarbonation appliquées aux missions critiques.",
        profiles: ["Développeurs Full Stack & Logiciels embarqués", "Ingénieurs DevOps, Cloud & Systèmes/Réseaux", "Ingénieurs Data Science, IA & Cybersécurité", "Consultants fonctionnels & Scrum Masters"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["Candidature sur atos.net", "Présélection RH", "Entretien d'embauche"],
      }),
      make("BPCE Solutions informatiques", "Ingénierie logicielle & Technologies bancaires", "/logos/bpce-si.png", {
        founded: "2022",
        location: "18 sites en France (dont Aix-en-Provence)",
        revenue: "NC",
        employees: "2 600 collaborateurs",
        description:
          "Entité technologique majeure du Groupe BPCE, BPCE Solutions informatiques conçoit, opère et modernise les systèmes d'information des Banques Populaires et des Caisses d'Épargne. Ses équipes conçoivent des applications bancaires et mobiles hautement scalables et sécurisées.",
        profiles: ["Développeurs IT (Java, Angular, Python, Kotlin)", "Ingénieurs Cloud, DevOps & Cybersécurité", "Tech Leads & Chefs de projets SI", "Business Analysts & Ingénieurs Agiles"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["Sélection sur CV", "2 entretiens (RH + manager métier)", "En présentiel ou visioconférence"],
      }),
      make("CGI France", "Conseil & Services IT", "/logos/cgi.png", {
        founded: "1976",
        location: "30+ agences en France & Présence dans 40 pays",
        revenue: "10,3 Md €",
        employees: "94 500 collaborateurs",
        description:
          "Cinquième entreprise indépendante de conseil et de services IT au monde, CGI accompagne les grandes organisations dans leur transition technologique : intégration de systèmes, conseil métier, cloud, data/IA et cybersécurité, portée par une culture d'associés-entrepreneurs.",
        profiles: ["Développement logiciel (Java, .NET, Python, React)", "Cloud (AWS, Azure, GCP) & DevOps", "Data Engineering, Machine Learning & BI", "Cybersécurité, Audit & Gestion des risques"],
        positions: ["Stage (pré-embauche)"],
        recruitment: ["Sélection CV", "Préqualification téléphonique", "Entretien RH", "1 à 2 entretiens techniques en visio"],
      }),
      make("Dassault Systèmes", "Édition de logiciels 3D & Mondes virtuels", "/logos/dassault-systemes.png", {
        founded: "1981 / 1996",
        location: "Aix-en-Provence (site régional) — Siège en France & International",
        revenue: "71,6 M€ (entité Provence) / 6 Md € (Groupe)",
        employees: "120 (Provence) / 25 000 (Groupe)",
        description:
          "Leader mondial des logiciels de modélisation 3D, de simulation et des jumeaux virtuels avec la plateforme 3DEXPERIENCE, Dassault Systèmes accélère le progrès humain et l'innovation durable dans l'aérospatial, l'automobile, l'industrie et les sciences de la vie.",
        profiles: ["Ingénieurs R&D logicielle", "Ingénieurs développement (C++, Python, Web)", "Ingénieurs technico-commerciaux", "Ingénieurs modélisation & simulation 3D"],
        positions: ["Stage"],
        recruitment: ["CV + LM", "Entretien Manager opérationnel", "Entretien RH (visio ou sur site)"],
      }),
      make("Doors3", "Conseil tech : IA générative, Blockchain & Web3", "/logos/doors3.png", {
        founded: "2022",
        location: "Marseille, Paris, Göteborg (Suède)",
        revenue: "1,5 M€",
        employees: "9 collaborateurs",
        description:
          "Cabinet de conseil en technologies de rupture fondé à Marseille, Doors3 transforme les innovations émergentes (IA générative, blockchain, expériences immersives) en solutions business concrètes, de la vision stratégique au déploiement technique.",
        profiles: ["Consultants IA Générative", "Consultants Blockchain & Crypto", "Développeurs Full Stack", "Business Developers / Sales Tech"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["Dépôt de CV et lettre de motivation", "Entretiens de sélection"],
      }),
      make("LUCCA", "Édition logicielle SaaS / SIRH", "/logos/lucca.png", {
        founded: "2002",
        location: "Paris (siège), Marseille, Nantes — Espagne, Allemagne, Suisse",
        revenue: "71 M€",
        employees: "800 collaborateurs",
        description:
          "Éditeur SaaS en forte croissance, Lucca conçoit des logiciels RH et administratifs intuitifs (congés, paie, notes de frais, temps de travail) déployés auprès de 10 000 entreprises clientes et plus d'un million d'utilisateurs à travers le monde.",
        profiles: ["Software Engineers (Full Stack, Backend, Frontend)", "Ingénieurs DevOps & Cloud", "Product Managers & Développeurs applicatifs"],
        positions: ["CDI", "Stage"],
        recruitment: ["Sélection sur CV", "4 étapes : RH, Manager, Petit oral, Grand oral"],
      }),
      make("Murex", "Fintech / Logiciel financier", "/logos/murex.png", {
        founded: "1986",
        location: "Paris (siège) — 19 bureaux dans le monde",
        revenue: "820 M€",
        employees: "3 500 collaborateurs",
        description:
          "Acteur mondial de la fintech, Murex développe des solutions logicielles de trading, de gestion des risques et de traitement d'opérations pour les marchés de capitaux. Sa plateforme est déployée auprès des plus grandes banques et institutions financières à l'international.",
        profiles: ["Ingénierie financière & Finance de marché", "Développement logiciel (C++, Java)", "Architecture logicielle & Cloud", "Gestion des risques de marché"],
        positions: ["Stage"],
        recruitment: ["Sélection sur CV", "Test technique", "Entretien RH", "Entretien manager opérationnel"],
      }),
      make("Onepoint", "Conseil & Transformation technologique", "/logos/onepoint.jpg", {
        founded: "2002",
        location: "France (Aix-en-Provence, Paris, Lyon...) & Monde (6 pays)",
        revenue: "500 M€",
        employees: "4 000 collaborateurs",
        description:
          "Cabinet de conseil et d'architecture technologique en forte croissance, Onepoint accompagne les grandes mutations des entreprises et acteurs publics en associant innovation, IA et impact sociétal durable au cœur des territoires.",
        profiles: ["Consultants transformation digitale", "Experts IA & Data", "Développeurs & Architectes SI", "Designers de services & Méthodologies agiles"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["2 à 3 entretiens selon profil (démonstration des savoir-faire techniques, métiers et méthodologiques)"],
      }),
      make("Orange", "Numérique", "/logos/orange.png", {
        founded: "1988",
        location: "France & International (26 pays)",
        revenue: "43 Md €",
        employees: "138 000",
        description:
          "Leader en France et acteur majeur en Europe des télécommunications multi-services avec 266 millions de clients, Orange recrute des profils engagés pour relever les défis de l'IA, de la cybersécurité, du cloud, de la 5G, du big data et de l'IoT au service d'un monde connecté et responsable.",
        profiles: ["Transformation numérique & IA", "Cybersécurité & Cloud", "Big Data & IoT", "Virtualisation des réseaux & 5G"],
        positions: ["Stage"],
        recruitment: ["Candidatures et offres sur orange.jobs"],
      }),
      make("Sopra Steria", "Numérique", "/logos/sopra-steria.png", {
        founded: "1968",
        location: "50+ sites en France (dont Sud-Est) — près de 30 pays",
        revenue: "5,6 Md €",
        employees: "51 000",
        description:
          "Acteur majeur de la tech européenne, Sopra Steria accompagne les grandes entreprises et administrations dans leur mutation digitale : conseil stratégique, intégration de systèmes, cloud, IA et cybersécurité, au service de filières clés telles que l'aérospatial, la défense, l'énergie et le secteur public.",
        profiles: ["Développement logiciel (Java, Python, C#)", "Data & Intelligence artificielle", "Cybersécurité & Cloud / DevOps", "Consultants en transformation digitale & Business Analyse", "Systèmes embarqués"],
        positions: ["Stage", "Alternance", "CDI – Jeune diplômé"],
        recruitment: ["Dépôt CV", "Entretiens RH et opérationnels (1 à 3)", "Échange technique"],
      }),
      make("Viveris", "Numérique", "/logos/viveris.png", {
        founded: "1986",
        location: "France, Belgique, Maroc",
        revenue: "94,2 M€",
        employees: "920",
        description:
          "Viveris est un groupe de conseil et d’ingénierie indépendant qui accompagne depuis plus de 30 ans la transformation numérique des entreprises et de leurs produits (Systèmes embarqués, Informatique scientifique et technique, Systèmes d’information, Infrastructures).",
        profiles: ["Ingénieurs Systèmes embarqués (HW/SW/embarqué/temps réel/IoT)", "Ingénieurs Systèmes d’information (FullStack Java/React/Data/Cloud)", "Ingénieurs Infrastructures (Sécurité, Admin Linux, Réseau, DevOps, DevSecOps)"],
        positions: ["CDI", "Stage"],
        recruitment: ["CV sur le site carrières viveris.fr"],
      }),
    ],
  },
  {
    name: "Conseil",
    companies: [
      make("AXA France", "Assurance & Services financiers", "/logos/axa.png", {
        founded: "1957",
        location: "France & International",
        revenue: "29 Md € (France) / 110 Md € (Groupe)",
        employees: "118 000 collaborateurs",
        description:
          "Leader mondial de l'assurance et de la gestion d'actifs, AXA protège les personnes, leur santé et leur avenir financier. Présent dans le monde entier, le groupe s'engage pour la transition écologique et offre aux jeunes talents un environnement stimulant pour développer leurs compétences.",
        profiles: ["Actuariat & Analyse financière", "Data science & Systèmes d'information", "Gestion de projet & Conseil en risques"],
        positions: ["Alternance", "Stage"],
        recruitment: ["Dépôt de CV sur le site carrières", "Entretiens de sélection"],
      }),
      make("Cap Finances", "Gestion de patrimoine & Conseil financier", "/logos/capfinances.png", {
        founded: "2004",
        location: "Implantation nationale (France)",
        revenue: "150 M€",
        employees: "150 collaborateurs — 1 400 conseillers partenaires",
        description:
          "Filiale de Groupe Premium et référence nationale de la gestion de patrimoine depuis plus de 20 ans, Capfinances accompagne particuliers et professionnels dans l'optimisation, la valorisation et la transmission de leurs actifs en épargne, retraite, prévoyance et investissements.",
        profiles: ["Conseillers en stratégie patrimoniale", "Profils commerciaux, banque, finance & assurance", "Chefs de projet ingénierie patrimoniale"],
        positions: ["CDI"],
        recruitment: ["Sélection sur CV", "Entretien de présentation", "1/2 journée en immersion opérationnelle"],
      }),
      make("Capgemini", "Conseil, Tech & Ingénierie", "/logos/capgemini.png", {
        founded: "1967",
        location: "20+ villes en France — Présence dans 50 pays",
        revenue: "22,5 Md €",
        employees: "420 000",
        description:
          "Partenaire mondial de la transformation business et technologique, Capgemini intègre la puissance de l'IA, du cloud et de l'ingénierie de pointe pour concevoir et concrétiser le futur des grandes organisations à travers des solutions responsables et durables de bout en bout.",
        profiles: ["Conseil & Management des SI", "Génie logiciel & Systèmes/Réseaux", "Cybersécurité & Cloud", "Data science, IA & Mathématiques appliquées", "Systèmes embarqués & Mécanique"],
        positions: ["Stage"],
        recruitment: ["CV + lettre de motivation", "Entretiens RH et opérationnels", "Anglais indispensable"],
      }),
      make("Deloitte", "Audit, Conseil & Stratégie", "/logos/deloitte.png", {
        founded: "1845",
        location: "17 bureaux en France — Présence dans 150+ pays",
        revenue: "NC",
        employees: "8 000 collaborateurs (France)",
        description:
          "Leader mondial du conseil et de l'audit, Deloitte propose l'offre pluridisciplinaire la plus complète du marché. Ses équipes accompagnent les entreprises de toutes tailles dans leurs transformations stratégiques, technologiques (IA, cloud, cyber), financières et durables au sein d'un environnement fondé sur l'intelligence collective.",
        profiles: ["Étudiants M2 & jeunes diplômés ingénieurs", "Conseil en stratégie & management", "Transformation digitale, Cyber & Data", "Audit financier & conseil extra-financier (ESG)"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["Sélection sur CV", "Entretiens de recrutement RH et opérationnels"],
      }),
      make("EY Services France", "Audit, Conseil & Stratégie", "/logos/ey.png", {
        founded: "1989",
        location: "17 bureaux en France (siège Paris-La Défense) — 145+ pays",
        revenue: "53,2 Md $ (Groupe)",
        employees: "7 000 collaborateurs (France)",
        description:
          "Leader mondial de l'audit, du conseil, de la stratégie et des transactions, EY accompagne les grandes organisations dans leurs transformations durables, technologiques et financières. Le cabinet propose un environnement d'apprentissage continu stimulant pour les jeunes diplômés d'écoles d'ingénieurs.",
        profiles: ["Conseil en transformation digitale", "Data & Intelligence Artificielle", "Cybersécurité & Systèmes d'information", "Stratégie durable & enjeux ESG"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["Candidature sur rejoindre-ey.com", "Tests en ligne & situationnels", "Assessment center / Entretiens opérationnels", "Entretien associé"],
      }),
      make("Forvis Mazars", "Conseil", "/logos/forvis-mazars.png", {
        founded: "1945",
        location: "France (41 bureaux) & International (100+ pays)",
        revenue: "5,2 Md €",
        employees: "40 000 (dont 5 000 en France)",
        description:
          "Réseau international de référence dans l'audit, le conseil et la fiscalité, Forvis Mazars réunit plus de 40 000 professionnels à travers le monde pour accompagner les organisations dans leur gouvernance financière, leur gestion des risques et leur transformation stratégique.",
        profiles: ["Auditeurs financiers & SI", "Consultants stratégie & management", "Consultants data & analyse financière", "Gestion des risques & conformité"],
        positions: ["Stage", "Alternance", "CDI"],
        recruitment: ["Sélection sur CV", "2 ou 3 entretiens selon le poste"],
      }),
      make("IKOS", "Ingénierie Ferroviaire & Énergie", "/logos/ikos.jpg", {
        founded: "2005",
        location: "33 bureaux dans 15 pays (Marseille, Lyon, Paris, Nantes, Lille...)",
        revenue: "120 M€",
        employees: "1 800 collaborateurs",
        description:
          "Société de conseil en ingénierie de référence dédiée au ferroviaire et à l'énergie (via sa marque IKER), IKOS s'engage pour les mobilités durables et l'énergie verte. Avec le support d'IKOS LAB, ses 1 800 ingénieurs conçoivent les systèmes de transport intelligents et sûrs du futur.",
        profiles: ["Signalisation & automatismes (ERTMS/CBTC)", "Génie électrique & courants forts/faibles", "Matériel roulant & systèmes embarqués", "Génie civil, infrastructures & sûreté de fonctionnement"],
        positions: ["CDI", "Stage", "VIE"],
        recruitment: ["Sélection sur CV", "Entretien RH", "Entretien technique avec le manager métier"],
      }),
      make("KPMG", "Audit, Conseil & Expertise comptable", "/logos/kpmg.jpg", {
        founded: "1922",
        location: "Présence nationale (nombreux bureaux en région et à Paris)",
        revenue: "1,55 Md €",
        employees: "7 200 collaborateurs",
        description:
          "Leader de l'audit et du conseil, KPMG accompagne les grandes entreprises, PME et acteurs publics dans leurs transformations stratégiques, financières et opérationnelles. Le cabinet propose aux ingénieurs des parcours stimulants au croisement de la tech et du conseil : data analytics, cybersécurité, digital audit, deal advisory et stratégie bas-carbone.",
        profiles: ["Consultants Data & Analytics / IA", "Auditeurs des systèmes d'information & Cybersécurité", "Consultants Transformation digitale & Deal Advisory", "Consultants Opérations, Énergie & Industrie"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["Candidature sur kpmg.com/carrieres", "Préqualification téléphonique RH", "Tests de personnalité et de langues", "2 entretiens managériaux avec étude de cas + entretien avec un associé"],
      }),
      make("Oresys", "Conseil en management & organisation", "/logos/oresys.png", {
        founded: "1981",
        location: "Marseille, Paris, Lyon, Lille, Nantes, Toulouse, Strasbourg, Suisse",
        revenue: "65 M€",
        employees: "370 collaborateurs",
        description:
          "Cabinet de conseil indépendant leader en management, organisation et systèmes d'information, Oresys repose sur un modèle collaboratif sans hiérarchie pyramidale. Ses consultants interviennent sur plus de 680 missions de transformation par an.",
        profiles: ["Jeunes diplômés grandes écoles d'ingénieurs", "Conseil en organisation & SI", "Gestion du changement & pilotage de projet", "Sens du collectif et esprit entrepreneurial"],
        positions: ["CDI", "Stage"],
        recruitment: ["3 entretiens de motivation conduits directement avec des consultants"],
      }),
      make("Talisker Consulting", "Conseil en management & Transformation", "/logos/talisker.png", {
        founded: "2006",
        location: "France & International",
        revenue: "7,5 M€",
        employees: "47 collaborateurs",
        description:
          "Cabinet de conseil en management indépendant à taille humaine, Talisker accompagne les directions générales et métiers dans leurs transformations stratégiques, managériales et digitales (IA conversationnelle, refonte des DSI) grâce à la dynamique collective et au mentorat.",
        profiles: ["Consultants transformation & organisation des DSI", "Consultants stratégie & dynamique collective", "Consultants IA & technologies innovantes"],
        positions: ["Alternance", "CDI", "Stage"],
        recruitment: ["Entretien RH", "2 études de cas avec Managers/Partners", "Entretien final Executive Partner"],
      }),
    ],
  },
  {
    name: "Défense",
    companies: [
      make("DGA", "Défense", "/logos/dga.png", {
        founded: "1961",
        location: "Échelle nationale (18 sites en France)",
        revenue: "N/A (Budget État)",
        employees: "10 600",
        description:
          "Force d'expertise, d'essais et d'ingénierie au sein du ministère des Armées créée en 1961, la DGA équipe les forces de façon souveraine et prépare l'avenir technologique de la défense. Elle conduit plus d'une centaine d'opérations d'armement par an couvrant l'aéronautique, le naval, le terrestre, l'espace, la dissuasion et la cybersécurité.",
        profiles: ["Aéronautique & Plates-formes navales/terrestres", "Cybersécurité, IA & Sécurité des SI", "Espace, Drones & Guerre électronique", "Optronique, Propulsion & Défense NRBC"],
        positions: ["CDD", "CDI"],
        recruitment: ["CV + lettre de motivation", "Entretiens adaptés au poste", "Possibilité de concours civils/militaires"],
      }),
      make("Marine Nationale", "Défense & Sécurité maritime", "/logos/marine-nationale.png", {
        founded: "1326",
        location: "Façades maritimes françaises (Toulon, Brest, Cherbourg) & Déploiements mondiaux",
        revenue: "S.O. (Forces Armées)",
        employees: "40 000 marins",
        description:
          "Force maritime des armées françaises, la Marine Nationale opère des sous-marins, navires de surface et aéronefs pour assurer la dissuasion nucléaire, la protection des approches maritimes et la souveraineté nationale. Elle propose plus de 80 métiers opérationnels et techniques hautement spécialisés.",
        profiles: ["Officiers ingénieurs (opérations navales, propulsion)", "Systèmes d'information, Réseaux & Cyberdéfense", "Aéronautique navale & Électronique de bord", "Ingénierie de maintenance & Logistique opérationnelle"],
        positions: ["CDD (Contrats d'officier)", "CDI (Officier de carrière)"],
        recruitment: ["Dépôt CV + lettre de motivation", "Entretien en CIRFA", "Visite médicale d'aptitude", "Entretien d'unité opérationnelle"],
      }),
      make("Ministère des Armées", "Défense & Renseignement", "/logos/ministere-armees.png", {
        founded: "1982",
        location: "Siège à Paris (avec missions France & étranger)",
        revenue: "S.O. (Service de l'État)",
        employees: "7 500 agents",
        description:
          "Service secret de la France au sein du ministère des Armées, la DGSE recherche et exploite des renseignements stratégiques souverains pour anticiper les crises et protéger la Nation. Elle recrute des ingénieurs civils et militaires sur plus de 300 métiers technologiques et opérationnels d'exception.",
        profiles: ["Cybersécurité, cryptographie & rétro-ingénierie", "Data science, Big Data & IA", "Ingénieurs télécoms, radiofréquences & signal", "Systèmes embarqués & développement logiciel sécurisé"],
        positions: ["Stage", "Alternance", "CDD", "CDI"],
        recruitment: ["Dépôt CV + lettre de motivation", "Processus de sélection avec habilitation de sécurité défense", "Confidentialité requise"],
      }),
      make("THALES", "Défense, Aérospatial, Cyber & Digital", "/logos/thales.png", {
        founded: "2000",
        location: "Siège à Meudon (92) — Multi-sites en France & 68 pays",
        revenue: "22,1 Md €",
        employees: "85 000 collaborateurs",
        description:
          "Leader mondial des hautes technologies et de la Deep Tech, Thales conçoit des solutions d'exception en connectivité, big data, IA, cybersécurité et quantique pour accompagner les acteurs de la défense, de l'aérospatial, du spatial et du digital dans l'accomplissement de leurs missions critiques.",
        profiles: ["Ingénierie systèmes, logicielle & matérielle", "IA, Cybersécurité & Facteurs humains", "Management de l'ingénierie & Projets", "Industrie, Offres & Service client"],
        positions: ["Alternance", "Stage"],
        recruitment: ["Candidature sur careers.thalesgroup.com", "Entretien responsable opérationnel", "Entretien RH & parcours d'intégration"],
      }),
    ],
  },
  {
    name: "Transport",
    companies: [
      make("CMA CGM", "Transport maritime & Logistique globale", "/logos/cma-cgm.png", {
        founded: "1978",
        location: "Siège mondial à Marseille (13) — Présence dans 177 pays",
        revenue: "55,5 Md $",
        employees: "160 000",
        description:
          "3ème compagnie maritime mondiale et géant de la logistique multimodale (mer, terre, air avec CEVA Logistics), CMA CGM dessert plus de 420 ports avec une flotte de 650 navires. Engagé pour le net zéro carbone d'ici 2050, le groupe marseillais invente les mobilités et chaînes d'approvisionnement décarbonées de demain.",
        profiles: ["Ingénieurs logistique multimodale & supply chain", "Data, IA & Transformation digitale", "Transition énergétique maritime & propulsion", "Gestion de projet & Opérations maritimes"],
        positions: ["Stage", "Alternance", "CDD", "CDI"],
        recruitment: ["Sélection sur CV", "Entretien RH", "Entretien Manager opérationnel"],
      }),
      make("Jifmar Offshore Services", "Transport", "/logos/jifmar.png", {
        founded: "2005",
        location: "Aix-en-Provence (siège) — International",
        revenue: "51 M€",
        employees: "850",
        description:
          "Leader des services maritimes opérant sur trois continents, Jifmar Group déploie des solutions clés en main d'ingénierie et de travaux maritimes dans les énergies marines renouvelables, l'oil & gas, la défense et l'inspection sous-marine grâce à une flotte innovante.",
        profiles: ["Chefs de projet maritime", "Coordination d'opérations maritimes", "Gestion des risques & Planification", "Ingénieurs opérations & reporting"],
        positions: ["Stage", "Alternance", "CDI"],
        recruitment: ["CV", "3 entretiens", "Anglais professionnel requis"],
      }),
      make("MB92 La Ciotat", "Maintenance navale & Superyachts", "/logos/mb92.png", {
        founded: "1999",
        location: "Chantier naval de La Ciotat (13)",
        revenue: "152 M€",
        employees: "≈ 200 collaborateurs",
        description:
          "Leader mondial du refit, de la réparation et de la maintenance de superyachts, MB92 opère sur les infrastructures d'exception du chantier de La Ciotat. L'entreprise pilote des projets sur mesure alliant haute technicité maritime, innovation technologique et respect environnemental.",
        profiles: ["Ingénieurs projets maritimes", "Chefs de projet refit naval", "Ingénieurs études & coordination technique", "Supervision de chantier maritime"],
        positions: ["Stage"],
        recruitment: ["CV + lettre de motivation", "Entretiens sur site (français/anglais)"],
      }),
    ],
  },
  {
    name: "Agroalimentaire",
    companies: [
      make("COCA-COLA EUROPACIFIC PARTNERS", "Agroalimentaire & Biens de consommation", "/logos/ccep.png", {
        founded: "NC",
        location: "Présence dans 31 pays (usines et sites logistiques en France)",
        revenue: "NC",
        employees: "39 000 collaborateurs",
        description:
          "Coca-Cola Europacific Partners (CCEP) embouteille, commercialise et distribue les boissons les plus emblématiques au monde auprès de 600 millions de consommateurs. Acteur industriel de premier plan, le groupe investit dans les technologies de pointe, la supply chain agile et la transition écologique des emballages.",
        profiles: ["Étudiants et diplômés niveau Master / Ingénieur", "Ingénieurs production & excellence opérationnelle", "Supply chain, logistique & maintenance industrielle", "Qualité, sécurité alimentaire & RSE"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["Sélection sur CV", "Entretiens de recrutement"],
      }),
      make("HEINEKEN", "Agroalimentaire / Brasserie", "/logos/heineken.png", {
        founded: "1864",
        location: "Brasserie de Marseille (La Valentine 13011) & Mons-en-Barœul",
        revenue: "N.C.",
        employees: "170 collaborateurs (site Marseille)",
        description:
          "HEINEKEN France conjugue l'activité de brasseur de marques iconiques (Heineken, Desperados, Affligem) via ses deux brasseries françaises — dont le site historique marseillais de la Valentine — et la distribution via France Boissons, alliant excellence industrielle et convivialité.",
        profiles: ["Ingénieurs généralistes", "Ingénieurs agroalimentaire / procédés", "Ingénieurs maintenance & travaux neufs", "Qualité, hygiène & sécurité (QHSE)"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["CV + lettre de motivation", "2 à 3 entretiens (Teams et présentiel)", "Français / Anglais"],
      }),
    ],
  },
  {
    name: "Formation",
    companies: [
      make("Apec", "Conseil & Accompagnement professionnel des cadres", "/logos/apec.png", {
        founded: "1960",
        location: "Paris (siège) & centres en région (dont Marseille)",
        revenue: "NC",
        employees: "1 200 collaborateurs",
        description:
          "Acteur de référence du marché de l'emploi des cadres et des jeunes diplômés, l'Apec accompagne les ingénieurs et talents de l'enseignement supérieur dans la définition de leur trajectoire professionnelle, tout en conseillant les entreprises dans le sourcing et la réussite de leurs recrutements.",
        profiles: ["Jeunes diplômés ingénieurs & Bac+5", "Consultants en évolution professionnelle", "Chargés de relations entreprises & talents"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["Candidatures et accompagnement via apec.fr"],
      }),
      make("AVEC L'INDUSTRIE", "Compétences industrielles & OPCO", "/logos/avec-l-industrie.png", {
        founded: "2018",
        location: "Échelle nationale (29 branches industrielles)",
        revenue: "NC",
        employees: "732 collaborateurs",
        description: "Initiative d'OPCO 2i et de 29 branches professionnelles industrielles (chimie, métallurgie, énergies...), Avec l’Industrie® valorise auprès des jeunes talents une industrie moderne, durable et souveraine en finançant la formation, l'alternance et l'évolution des compétences techniques.",
        profiles: ["Tous profils ingénieurs & scientifiques", "Alternants & apprentis industriels", "Métiers de la production, R&D & maintenance"],
        positions: ["Alternance", "CDD", "CDI", "Stage"],
        recruitment: ["Orientation vers les branches & entreprises partenaires"],
      }),
      make("emlyon business school", "Enseignement supérieur de management", "/logos/emlyon.png", {
        founded: "1872",
        location: "Lyon & Paris (campus à Shanghai et Mumbai)",
        revenue: "112,5 M€",
        employees: "500 collaborateurs — 9 375 étudiants",
        description: "Triple accréditée (AACSB, EQUIS, AMBA), emlyon business school figure parmi les plus grandes écoles de commerce européennes. Elle propose plus de 20 programmes de Masters, MSc et Mastères Spécialisés complétant l'expertise scientifique par des compétences managériales et stratégiques.",
        profiles: ["Étudiants Bac+3 à Bac+5 & jeunes ingénieurs", "Stratégie, management & organisation", "Finance, innovation & entrepreneuriat"],
        positions: ["Alternance", "Stage"],
        recruitment: ["Dépôt de CV & dossier de candidature sur le site officiel"],
      }),
      make("ESSCA School of Management", "Grande École de Management", "/logos/essca.png", {
        founded: "1909",
        location: "10 campus (Aix-en-Provence, Paris, Lyon, Angers, Bordeaux, Budapest, Shanghai...)",
        revenue: "NC",
        employees: "500 collaborateurs — 8 000 étudiants",
        description:
          "Triple accréditée (AACSB, AMBA, EQUIS), l'ESSCA forme des managers responsables et ouverts sur le monde. Son Programme Grande École (grade de Master) et ses MSc permettent aux profils scientifiques d'acquérir une expertise ciblée en finance, conseil, supply chain, audit ou entrepreneuriat.",
        profiles: ["Profils scientifiques & ingénieurs (admissions parallèles)", "Finance d'entreprise, audit & conseil", "Supply chain, logistique & commerce international", "Marketing & entrepreneuriat"],
        positions: ["Alternance"],
        recruitment: ["Dossier académique", "Entretien individuel de motivation"],
      }),
      make("ESSEC Business School", "Grande École de Management", "/logos/essec.png", {
        founded: "1907",
        location: "Cergy, Paris-La Défense, Singapour, Rabat",
        revenue: "NC",
        employees: "2 000 collaborateurs & enseignants",
        description: "Pionnière de l'enseignement supérieur du management et triple accréditée (AACSB, EQUIS, AMBA), l'ESSEC forme des dirigeants éclairés capables d'allier performance économique, créativité et impact sociétal positif grâce à une pédagogie d'excellence ouverte sur le monde.",
        profiles: ["Diplômés d'écoles d'ingénieurs (admissions sur titre)", "Finance, conseil en stratégie & transformation durable", "Management de l'innovation & technologies"],
        positions: ["Alternance", "Stage", "Mastères Spécialisés®"],
        recruitment: ["Admissions sur titre / Concours", "Dossier académique & épreuves de sélection"],
      }),
      make("IAE Aix", "Enseignement supérieur de management & IAE", "/logos/iae-aix.png", {
        founded: "1955",
        location: "Aix-en-Provence (13)",
        revenue: "NC",
        employees: "80 collaborateurs",
        description:
          "Composante universitaire d'excellence inspirée des business schools américaines, l’IAE Aix conjugue tradition et innovation managériale. Son programme MSc en Management Général prépare les profils scientifiques et ingénieurs à des carrières à haut potentiel, alliant agilité, leadership et vision stratégique transversale.",
        profiles: ["Élèves et diplômés ingénieurs (double compétence)", "Management général & Pilotage stratégique", "Gestion de projet complexe & Leadership"],
        positions: ["Alternance"],
        recruitment: ["Candidature en ligne (gomovein)", "Admissibilité sur dossier académique (CV, LM)", "Entretien de sélection"],
      }),
      make("ISAE-SUPAERO", "Enseignement supérieur — Aéronautique & Espace", "/logos/isae-supaero.png", {
        founded: "1909",
        location: "Campus de 22 ha à Toulouse (31)",
        revenue: "NC",
        employees: "1 900 étudiants & chercheurs",
        description: "Référence mondiale de la formation des ingénieurs du secteur aérospatial, l'ISAE-SUPAERO dispose d'infrastructures de recherche uniques (souffleries, flotte de 9 avions, simulateurs, centre spatial étudiant). Elle propose 16 Mastères Spécialisés® conçus avec les industriels du secteur.",
        profiles: ["Élèves ingénieurs & diplômés Bac+5 (M2, ingénieur)", "Conception aéronautique, propulsion & systèmes spatiaux", "Systèmes embarqués critiques, drones (UAV) & robotique", "Essais en vol, certification, data & IA appliquée"],
        positions: ["Mastères Spécialisés®", "Alternance", "Stage"],
        recruitment: ["Dossier de candidature en ligne (candidatures.tsaae.fr)", "Sélection sur dossier académique"],
      }),
      make("ISEN Méditerranée", "Grande École d'Ingénieurs — Numérique & Technologies", "/logos/isen.png", {
        founded: "NC",
        location: "Campus à Marseille (Château-Gombert) & Toulon",
        revenue: "NC",
        employees: "NC",
        description:
          "Grande école d'ingénieurs habilitée CTI, l'ISEN Méditerranée forme des ingénieurs experts des transformations technologiques : IA, cybersécurité, systèmes embarqués, robotique, objets connectés et smart energy. Ancrée à Château-Gombert, elle favorise l'immersion terrain par une pédagogie par projets et l'apprentissage.",
        profiles: ["Étudiants scientifiques Bac+2 à Bac+6", "Ingénierie logicielle, IA & Cybersécurité", "Systèmes embarqués, robotique & IoT", "Smart energy & e-santé"],
        positions: ["Alternance", "Stage"],
        recruitment: ["Candidature en ligne via isen-mediterranee.fr", "Admissions sur dossier et concours"],
      }),
      make("KEDGE Business School", "Grande École de Management", "/logos/kedge.png", {
        founded: "2014 (fusion BEM Bordeaux & Euromed Marseille)",
        location: "Marseille, Toulon, Bordeaux, Paris",
        revenue: "NC",
        employees: "600 collaborateurs — 23 000 étudiants",
        description: "Dotée de la prestigieuse triple accréditation internationale (AACSB, EQUIS, AMBA), KEDGE Business School forme des leaders agiles et responsables. Elle propose des doubles compétences stratégiques aux élèves ingénieurs désireux de renforcer leur maîtrise du management et de l'entrepreneuriat.",
        profiles: ["Étudiants ingénieurs Bac+3 à Bac+5 (double diplôme / MS)", "Leadership, négociation & stratégie", "Supply chain, gestion de projet & business development"],
        positions: ["Alternance", "Double diplôme"],
        recruitment: ["Candidature en ligne (join.kedge.edu)", "CV, bulletins, diplômes", "Entretien de motivation"],
      }),
    ],
  },
  {
    name: "Associations & ONG",
    companies: [
      make(
        "Amnesty International",
        "Défense des droits humains & ONG",
        "/logos/amnesty-international.png",
        {
          founded: "2022 (groupe local)",
          location: "France & International",
          revenue: "NC",
          employees: "NC",
          description:
            "Mouvement mondial et indépendant, Amnesty International œuvre pour le respect de l'ensemble des droits énoncés dans la Déclaration universelle des droits de l'homme. L'organisation mène des recherches de terrain, sensibilise le public et engage des actions de plaidoyer pour prévenir et faire cesser les atteintes graves aux libertés fondamentales.",
          profiles: [
            "Tous profils engagés",
            "Plaidoyer, recherche & communication",
            "Gestion de projets associatifs & mobilisation",
          ],
          positions: ["Stage"],
          recruitment: [
            "Candidature via le site officiel amnesty.fr",
            "Entretien de motivation",
          ],
        },
      ),
    ],
  },
];

/* Official category mapping — single source for slide sectors AND index groups (sorted A→Z). */
const CATEGORY_MAP: { label: string; names: string[] }[] = [
  { label: "Audit & Conseil", names: ["AXA France", "Cap Finances", "Capgemini", "Deloitte", "Exiom Partners", "EY Services France", "Forvis Mazars", "KPMG", "Onepoint", "Oresys", "Talisker Consulting"] },
  { label: "Énergie & Environnement", names: ["ASSYSTEM", "CEA", "ECIA", "EDF", "Enedis", "EODD Ingénieurs Conseils", "EP2C Energy", "Framatome", "Groupe SNEF", "Inddigo", "Onet Technologies", "Orano", "PAPREC", "Pellenc ST", "Recycle Plastique", "TechnicAtome", "Technip Energies", "VINCI Energies"] },
  { label: "BTP & Construction", names: ["Bouygues Bâtiment Sud-Est", "Cap Ingelec", "Eiffage", "RAZEL-BEC", "SMAC", "Vinci Construction"] },
  { label: "Transports & Systèmes embarqués", names: ["CMA CGM", "IKOS", "Jifmar Offshore Services", "MB92 La Ciotat", "RTM", "SNCF Réseau"] },
  { label: "Informatique, IT & Média", names: ["Atos", "BPCE Solutions informatiques", "CGI France", "Dassault Systèmes", "Doors3", "LUCCA", "Murex", "Orange", "Sopra Steria", "STMicroelectronics", "Viveris"] },
  { label: "Défense", names: ["DGA", "Marine Nationale", "Ministère des Armées", "Naval Group", "THALES"] },
  { label: "Ingénierie et Industrie", names: ["Groupe ADF", "AKKODIS", "Bee Engineering", "Bertin Technologies", "Egis", "EXAIL", "Groupe LGM", "Groupe Ortec", "Groupe REEL", "Setec", "Syntec-Ingénierie", "Tractebel", "Vulcain Engineering"] },
  { label: "Formation", names: ["Apec", "AVEC L'INDUSTRIE", "emlyon business school", "ESSCA School of Management", "ESSEC Business School", "IAE Aix", "ISEN Méditerranée", "KEDGE Business School", "ISAE-SUPAERO"] },
  { label: "Autre", names: ["Amnesty International", "COCA-COLA EUROPACIFIC PARTNERS", "EMIS et EMIS Access", "France Chimie Méditerranée", "HEINEKEN", "NAOS"] },
];

const SECTORS: { name: string; companies: Company[] }[] = (() => {
  const pool = new Map<string, Company>();
  [navalGroup, ...RAW_SECTORS.flatMap((s) => s.companies)].forEach((c) => { if (!pool.has(c.name)) pool.set(c.name, c); });
  const placed = new Set<string>();
  const out = CATEGORY_MAP.map((g) => ({
    name: g.label,
    companies: g.names
      .map((n) => pool.get(n))
      .filter((c): c is Company => !!c && !placed.has(c.name) && (placed.add(c.name), true))
      .sort((a, b) => a.name.localeCompare(b.name, "fr")),
  }));
  // Safety net: any unmapped fiche (never the sponsor, which has its own slide) goes to "Autre".
  const autre = out.find((g) => g.name === "Autre")!;
  pool.forEach((c) => { if (!placed.has(c.name) && c.name !== sncf.name) autre.companies.push(c); });
  autre.companies.sort((a, b) => a.name.localeCompare(b.name, "fr"));
  return out;
})();

/* ------------------------------------------------------------------ */
/*  SLIDES BUILD                                                      */
/* ------------------------------------------------------------------ */

type Slide =
  | { kind: "cover" }
  | { kind: "toc" }
  | { kind: "index" }
  | { kind: "plan" }
  | { kind: "sncf-fiche" }
  | { kind: "mot-parrain" }
  | { kind: "mot-directrice" }
  | { kind: "mot-equipe" }
  | { kind: "divider"; label: string; subtitle?: string }
  | { kind: "company"; company: Company; sector?: string };

const slides: Slide[] = (() => {
  // Single source of truth: every company slide comes from SECTORS, deduplicated by name.
  const seen = new Set<string>();
  const sectors = SECTORS.map((s) => {
    const companies = s.companies.filter((c) => (seen.has(c.name) ? false : (seen.add(c.name), true)));
    return { name: s.name, companies };
  }).filter((s) => s.companies.length > 0);

  const arr: Slide[] = [
    { kind: "cover" },
    { kind: "toc" },
    { kind: "index" },
    { kind: "plan" },
    { kind: "sncf-fiche" },
    { kind: "mot-parrain" },
    { kind: "mot-directrice" },
    { kind: "mot-equipe" },
    { kind: "divider", label: "Entreprises Partenaires", subtitle: `Découvrez nos ${seen.size} partenaires` },
  ];
  sectors.forEach((s) => {
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
const DOMAIN_GROUPS: { label: string; names: string[] }[] = CATEGORY_MAP;

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
    const autres = groups.find((g) => g.label === "Autre");
    if (autres) {
      autres.entries.push(...leftovers);
      autres.entries.sort((a, b) => a.name.localeCompare(b.name, "fr"));
    }
  }
  return groups.filter((g) => g.entries.length > 0);
})();

/* Which slides have a BLUE background (royal) — arrows/chrome adapt */
const isBlueSlide = (s: Slide) => s.kind === "divider";

/* ------------------------------------------------------------------ */
/*  ROOT                                                              */
/* ------------------------------------------------------------------ */

export default function Brochure() {
  const [i, setI] = useState(0);
  const total = slides.length;

  const go = useCallback((n: number) => setI(() => Math.max(0, Math.min(total - 1, n))), [total]);
  const next = useCallback(() => setI((p) => Math.min(total - 1, p + 1)), [total]);
  const prev = useCallback(() => setI((p) => Math.max(0, p - 1)), []);

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
          {current.kind === "sncf-fiche" && <SncfFicheSlide />}
          {current.kind === "mot-parrain" && <MotParrainSlide />}
          {current.kind === "mot-directrice" && <MotDirectriceSlide />}
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
        <button
          onClick={() => go(0)}
          className="pointer-events-auto cursor-pointer hover:opacity-75 transition-opacity text-[11px] tracking-[0.35em] uppercase font-heading font-semibold"
          style={{ color: chromeColor }}
        >
          FOCEEN · Brochure 2026
        </button>
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
      className="w-full h-full flex flex-col items-center justify-between px-6 md:px-12 pt-12 pb-8"
      style={{ background: THEME.paper, color: THEME.ink }}
    >
      {/* Top pill */}
      <div className="flex flex-col items-center gap-3 mt-2">
        <div
          className="rounded-full px-5 py-1.5 text-[11px] md:text-xs font-heading font-bold tracking-[0.25em]"
          style={{ background: THEME.royal, color: "#FFFFFF" }}
        >
          FOCEEN • 19ÈME ÉDITION
        </div>
        <p className="text-xs md:text-sm tracking-[0.35em] uppercase font-heading" style={{ color: THEME.ink, opacity: 0.9 }}>
          — 3 NOVEMBRE 2026 —
        </p>
      </div>

      {/* Middle — logo + title + CTA */}
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4 md:gap-5 w-full">
        <div className="flex items-center justify-center">
          <img
            src="/logo-foceen.png"
            alt="FOCEEN"
            className="h-16 md:h-20 object-contain"
          />
        </div>
        <h1 className="font-heading font-black text-center leading-[0.95] text-5xl md:text-7xl xl:text-[110px] tracking-tight">
          BROCHURE
          <br />
          ENTREPRISES
        </h1>
        <button
          onClick={onConsult}
          className="mt-2 inline-flex items-center gap-3 px-7 py-3 rounded-full border-2 font-heading font-semibold tracking-[0.2em] uppercase text-xs md:text-sm transition-colors"
          style={{ borderColor: THEME.ink, color: THEME.ink }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = THEME.ink;
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = THEME.ink;
          }}
        >
          Consulter
          <ArrowSmall className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom — white rounded card with partners */}
      <div className="w-full max-w-6xl bg-white rounded-2xl px-4 md:px-8 py-3 md:py-4 shadow-2xl">
        <p
          className="text-center text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-heading font-semibold mb-2.5"
          style={{ color: THEME.royal }}
        >
          Nos partenaires
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              title={p.name}
              className="flex items-center justify-center bg-white rounded-xl border border-border/50 shadow-sm p-2"
            >
              <img
                src={p.src}
                alt={p.name}
                className="object-contain max-h-[min(3.5rem,6.5vh)] sm:max-h-[min(4rem,7vh)] w-auto"
                loading="eager"
                decoding="async"
              />
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

  const at = (k: Slide["kind"]) => slides.findIndex((sl) => sl.kind === k);
  const items: { num: string; title: string; slide: number; child?: { name: string; slide: number; count?: number }[] }[] = [
    { num: "01", title: "Index des entreprises", slide: at("index") },
    { num: "02", title: "Plan du Forum", slide: at("plan") },
    { num: "03", title: "Le Parrain — SNCF Réseau", slide: at("sncf-fiche") },
    { num: "04", title: "Le mot du Parrain", slide: at("mot-parrain") },
    { num: "05", title: "Le mot de la directrice", slide: at("mot-directrice") },
    { num: "06", title: "Le mot de l'équipe FOCEEN", slide: at("mot-equipe") },
    {
      num: "07",
      title: "Entreprises Partenaires",
      slide: at("mot-equipe") + 1,
      child: [
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
              <span
                className="min-w-6 h-6 px-1.5 rounded-full inline-flex items-center justify-center text-[10px] font-heading font-bold"
                style={{ color: THEME.royal, border: `1px solid ${THEME.royal}`, background: `${THEME.royal}0D` }}
              >
                {g.entries.length}
              </span>
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
      className="w-full h-full flex flex-col items-center justify-center px-14 sm:px-8 md:px-4 pt-8 md:pt-12 pb-3 md:pb-6"
      style={{ background: THEME.paper }}
    >
      <p className="text-[11px] tracking-[0.5em] uppercase font-heading mb-2 md:mb-3 text-center" style={{ color: THEME.royal }}>
        Orientation
      </p>
      <h2 className="font-heading font-black text-2xl sm:text-5xl md:text-6xl tracking-tight mb-2 text-center" style={{ color: THEME.ink }}>
        PLAN DU FORUM
      </h2>
      <div className="h-[3px] w-24 mb-3 md:mb-5" style={{ background: THEME.royal }} />

      <div className="w-full flex-1 min-h-0 flex items-center justify-start md:justify-center overflow-x-auto overscroll-x-contain md:overflow-visible">
        <div className="w-fit mx-auto shrink-0 max-w-none md:max-w-[calc(100%-9rem)] rounded-2xl border border-border/60 bg-white shadow-sm overflow-hidden p-1 sm:p-2">
          <img
            src="/plan-foceen.jpg"
            alt="Plan du forum FOCEEN 2026 — étages 0 et 1, stands numérotés et légende par secteur d'activité"
            loading="eager"
            decoding="async"
            className="block aspect-[1145/816] w-auto max-h-[76vh] max-w-full object-contain rounded-xl min-w-[900px] md:min-w-0"
          />
        </div>
      </div>


      <p className="mt-2 md:mt-3 text-[10px] uppercase tracking-[0.25em] md:hidden" style={{ color: THEME.royal }}>
        Faites glisser pour explorer le plan
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SLIDE 5 — SNCF RÉSEAU (PARRAIN)                                   */
/* ------------------------------------------------------------------ */

function SncfFicheSlide() {
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
          <img src="/logos/sncf-reseau.png" alt="SNCF Réseau" className="max-h-32 object-contain" />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.45em] uppercase font-heading" style={{ color: THEME.royal }}>
            Parrain de l'édition
          </p>
          <h2 className="font-heading font-black text-5xl mt-2" style={{ color: THEME.ink }}>
            SNCF RÉSEAU
          </h2>
          <div className="mt-3 h-[3px] w-20" style={{ background: THEME.royal }} />
        </div>
      </div>

      <div className="min-h-0 overflow-y-auto pr-3 brochure-scroll space-y-5">
        {[
          { label: "Secteur d'activité", value: sncf.sector },
          { label: "Année de création", value: sncf.founded },
          { label: "Localisation", value: sncf.location },
          { label: "Chiffre d'affaires", value: sncf.revenue },
          { label: "Effectifs", value: sncf.employees },
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
          {sncf.description}
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
  imageFit = "cover",
  imageAspect = "aspect-[3/4]",
}: {
  tag: string;
  title: string;
  text: string | string[];
  author: string;
  role: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageAspect?: string;
}) {
  const isContain = imageFit === "contain";
  return (
    <div className="w-full h-full grid lg:grid-cols-[1fr_1.3fr] overflow-hidden" style={{ background: THEME.paper }}>
      <div className="flex items-center justify-center px-10 md:px-16 py-20" style={{ background: THEME.royal }}>
        {image ? (
          <div
            className={
              isContain
                ? "w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-white/5"
                : `w-full max-w-md ${imageAspect} rounded-2xl overflow-hidden shadow-2xl`
            }
            style={{ border: `2px solid rgba(255,255,255,0.5)` }}
          >
            <img
              src={image}
              alt={imageAlt ?? ""}
              className={isContain ? "w-full h-auto max-h-[55vh] object-contain" : "w-full h-full object-cover"}
            />
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
            className="mt-6 opacity-30"
            style={{ color: THEME.royal }}
            aria-hidden="true"
          >
            <Quote className="w-9 h-9 md:w-12 md:h-12 fill-current rotate-180" strokeWidth={0} />
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-3 brochure-scroll mt-2">
          {(Array.isArray(text) ? text : [text]).map((t, k) => (
            <p key={k} className="text-base md:text-lg leading-relaxed italic max-w-xl mb-4" style={{ color: THEME.ink }}>
              {t}
            </p>
          ))}
          <div className="flex justify-end mt-2" aria-hidden="true" style={{ color: THEME.royal }}>
            <Quote className="w-9 h-9 md:w-12 md:h-12 fill-current" strokeWidth={0} />
          </div>
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
      text="C'est avec une grande fierté que SNCF Réseau parraine cette nouvelle édition du FOCEEN. Forum incontournable, il symbolise la rencontre entre l'excellence académique de Centrale Méditerranée et les enjeux concrets de la mobilité durable. Nous y voyons une opportunité unique d'échanger avec les ingénieurs de demain et de partager nos métiers du rail. À travers ce parrainage, nous souhaitons réaffirmer notre engagement auprès des élèves-ingénieurs de Centrale Méditerranée autour des mobilités bas-carbone, des grands chantiers d'infrastructure et des métiers d'avenir du ferroviaire, ainsi que notre attachement au territoire et à la formation des futurs talents."
      author="Direction SNCF Réseau"
      role="Parrain de la 19ᵉ édition"
      image="/parrain-sncf-reseau.jpg"
      imageAlt="Voies ferrées au soleil couchant avec le logo SNCF Réseau"
      imageAspect="aspect-[3/2]"
    />
  );
}

function MotDirectriceSlide() {
  return (
    <WordSlide
      tag="Le mot de la directrice"
      title="Le mot de la directrice"
      text={[
        "Le Forum Centrale Méditerranée Entreprises (FOCEEN) s’impose, année après année, comme un rendez-vous incontournable de rencontre et de dialogue, entre les entreprises, les étudiants et les jeunes diplômés de la région Sud. C’est le plus grand forum de recrutement ingénieur du Sud-Est et il incarne pleinement notre ambition : rapprocher les élèves ingénieures des réalités et des besoins économiques du territoire.",
        "Dans un contexte marqué par des défis technologiques, environnementaux et industriels, l’ingénierie joue un rôle central. À Centrale Méditerranée, nous portons une conviction forte : former des ingénieurs capables de comprendre la complexité du monde, d’innover et d’agir avec responsabilité pour accompagner les grandes transitions. L’enjeu est clair : répondre aux attentes croissantes en compétences scientifiques et techniques, tout en préparant des profils engagés, agiles et ouverts.",
        "Le FOCEEN s’inscrit pleinement dans cette dynamique, en résonance avec les priorités portées par la Région Sud, notamment à travers le Plan Ingénieurs Sud, qui vise à renforcer l’attractivité des formations scientifiques et à répondre aux enjeux en compétences des entreprises régionales. Ce forum est une illustration concrète de cette mobilisation collective au service de l’emploi des jeunes et du développement économique régional, en lien étroit avec les Grandes Écoles et l’ensemble des acteurs socio-économiques.",
        "Organisé par les élèves ingénieurs de Centrale Méditerranée avec un engagement remarquable, le FOCEEN est également un véritable terrain d’apprentissage. De la conception à la mise en œuvre, ils mobilisent avec exigence leurs compétences en gestion de projet, stratégie, partenariats, communication et management, démontrant leur capacité à conduire des projets complexes et collectifs.",
        "Pour cette nouvelle édition, plusieurs milliers d’étudiants et de jeunes diplômés auront l’opportunité d’échanger avec des entreprises de tous secteurs, de découvrir les métiers en évolution, de préciser leurs projets professionnels et de saisir des opportunités de stages et d’emplois. Au-delà du recrutement, le FOCEEN contribue à faire émerger les vocations, à éclairer les parcours et à renforcer durablement les liens entre formation et emploi.",
        "Je tiens à remercier chaleureusement l’ensemble des partenaires, entreprises, institutions et acteurs engagés aux côtés de l’École pour faire de cet événement un succès. Leur engagement fidèle est essentiel pour accompagner les élèves et jeunes diplômés et construire collectivement l’avenir de notre territoire. Ensemble, nous contribuons concrètement à l’emploi des jeunes et au dynamisme de la région Sud.",
      ]}
      author="Carole Deumié"
      role="Directrice de l’École Centrale Méditerranée"
    />
  );
}

function MotEquipeSlide() {
  return (
    <div
      className="w-full h-full overflow-y-auto brochure-scroll flex flex-col items-center pt-6 pb-20 px-4 md:px-12"
      style={{ background: THEME.paper }}
    >
      {/* Titre */}
      <div className="flex flex-col items-center text-center shrink-0">
        <p
          className="text-[11px] tracking-[0.45em] uppercase font-heading mb-3"
          style={{ color: THEME.royal }}
        >
          Le mot de l'équipe
        </p>
        <h2
          className="font-heading font-black text-4xl md:text-5xl tracking-tight"
          style={{ color: THEME.ink }}
        >
          Le mot de l'équipe FOCEEN
        </h2>
        <div className="mt-4 h-[3px] w-20" style={{ background: THEME.royal }} />
      </div>

      {/* Photo */}
      <img
        src={teamPhoto}
        alt="Équipe FOCEEN 2026"
        className="w-full max-w-2xl md:max-w-3xl max-h-[420px] object-cover rounded-2xl shadow-lg my-6 mx-auto"
        style={{ border: `2px solid ${THEME.royal}` }}
      />

      {/* Citation + texte */}
      <div className="flex flex-col items-center w-full max-w-2xl md:max-w-3xl mx-auto">
        <div
          className="self-start opacity-30"
          style={{ color: THEME.royal }}
          aria-hidden="true"
        >
          <Quote className="w-8 h-8 md:w-11 md:h-11 fill-current rotate-180" strokeWidth={0} />
        </div>
        <p
          className="text-base md:text-lg leading-relaxed italic text-center"
          style={{ color: THEME.ink }}
        >
          Pendant un an, notre équipe d'élèves-ingénieurs a porté l'ambition de
          faire du FOCEEN un moment d'exception. Cette brochure est le fruit de
          cet engagement : un outil pour vous présenter en détail les entreprises
          qui nous font confiance et les opportunités qu'elles offrent. Nous
          tenons à remercier chaleureusement nos partenaires, l'école Centrale
          Méditerranée et tous les bénévoles qui rendent cette 19ᵉ édition
          possible. Bonne lecture, et rendez-vous le 03 novembre 2026 au Parc
          Chanot pour vivre ensemble cette journée dédiée à votre avenir
          professionnel.
        </p>
        <div className="self-end mt-1 opacity-30" style={{ color: THEME.royal }} aria-hidden="true">
          <Quote className="w-8 h-8 md:w-11 md:h-11 fill-current" strokeWidth={0} />
        </div>
        <div className="mt-6 flex items-center gap-3 shrink-0">
          <div className="h-px w-10" style={{ background: THEME.royal }} />
          <div className="text-center">
            <p className="font-heading font-bold text-base" style={{ color: THEME.ink }}>
              Bureau FOCEEN
            </p>
            <p className="text-xs opacity-70 mt-0.5">Mandat 2025 – 2026</p>
          </div>
          <div className="h-px w-10" style={{ background: THEME.royal }} />
        </div>
      </div>
    </div>
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
