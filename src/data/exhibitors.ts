/* ------------------------------------------------------------------ */
/*  EXHIBITORS DATA — Fichier centralisé des exposants FOCEEN          */
/* ------------------------------------------------------------------ */

export type Exposant = {
  id: number;
  partnerOnly?: boolean;
  name: string;
  logo?: string;
  sector: string;
  domain: string;
  yearCreated?: number;
  location: string;
  employees: string;
  website: string;
  websiteCarriere?: string;
  chiffreAffaires?: string;
  profiles: string;
  postTypes: string[];
  applicationMethod: string;
  description: string;
  highlights: string[];
};

export const DOMAINS = [
  "Tous",
  "Audit et Conseil",
  "BTP et Construction",
  "Énergie et Environnement",
  "Informatique, IT et Média",
  "Ingénierie et Industrie",
  "Transports et Systèmes embarqués",
  "Défense",
  "Formation",
  "Autre",
];

export const parrain: Exposant = {
  id: 0,
  name: "SNCF Réseau",
  logo: "/logos/sncf-reseau.png",
  sector: "Leader des mobilités durables et acteur de la transition écologique",
  domain: "Transports et Systèmes embarqués",
  yearCreated: 1938,
  location: "Présent sur l'ensemble du territoire français",
  employees: "50 000 collaborateurs",
  chiffreAffaires: "9,5 milliards d'euros",
  website: "https://www.sncf-reseau.com/fr",
  websiteCarriere: "https://www.emploi.sncf.com/",
  profiles:
    "Profils techniques (techniciens/ingénieurs) sur des spécialités liées aux infrastructures ferroviaires (ouvrages d'art, génie civil, télécom, énergie électrique HT/BT, signalisation…) et profils généralistes pour le pilotage de projets.",
  postTypes: ["CDI", "Alternance", "Stage"],
  applicationMethod: "Selon le poste, pas de process général. Candidatures via le site emploi de SNCF Réseau.",
  description:
    "Gestionnaire du réseau ferré national, SNCF Réseau entretient, modernise et sécurise plus de 28 000 km de lignes pour accélérer la décarbonation des mobilités et façonner les transports ferroviaires durables de demain.",
  highlights: [
    "28 000 km de lignes en France",
    "Entretien, modernisation et exploitation du réseau ferré national",
    "Ingénierie et grands projets ferroviaires",
    "Acteur clé de la transition écologique et des mobilités durables",
  ],
};


export const partenaires: Exposant[] = [
  {
    id: 50,
    name: "Groupe ADF",
    logo: "/logos/groupe-adf.png",
    sector: "Industrie",
    domain: "Ingénierie et Industrie",
    yearCreated: 1962,
    location: "Echelle internationale",
    employees: "4 900",
    chiffreAffaires: "640 millions d'euros",
    website: "https://www.groupeadf.com/fr/groupe/groupe-adf",
    websiteCarriere: "https://careers.groupeadf.com/",
    profiles: "Esprit d'équipe et coopération, Rigueur et sens des responsabilités, Réactivité et adaptabilité, Culture sécurité, Orientation client, Leadership terrain",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod:
      "Entretien téléphonique RH après sélection du CV et de la lettre de motivation, un entretien avec le responsable opérationnel par la suite.",
    description:
      "Nos équipes répondent aux besoins d'ingénierie pour imaginer et concevoir les solutions du futur, réaliser des projets et des équipements innovants, et assurer un support quotidien à la production et à la maintenance tout en relevant les défis de la transition énergétique et de la digitalisation des opérations.",
    highlights: [
      "Solutions d'ingénierie innovantes",
      "Présence internationale",
      "Transition énergétique et digitalisation",
    ],
  },
  {
    id: 5,
    name: "CEA",
    logo: "/logos/cea.png",
    sector: "Transition énergétique, transition numérique, médecine du futur, défense et sécurité, assainissement démantèlement",
    domain: "Énergie et Environnement",
    yearCreated: 1945,
    location: "Centre de CADARACHE – 13108 Saint Paul Lez Durance",
    employees: "21 500",
    website: "https://www.cea.fr",
    websiteCarriere: "https://www.emploi.cea.fr",
    profiles: "Ingénieurs et techniciens",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod:
      "Dépôt de candidatures spontanées ou réponses des offres via le site de recrutements (CV+LM). Entretiens internes et externes (dont cabinets de recrutements).",
    description:
      "Le CEA est un acteur majeur de la recherche, au service de l'État, de l'économie et des citoyens. S'appuyant sur une recherche fondamentale d'excellence, il apporte des solutions concrètes à leurs besoins dans quatre domaines principaux :",
    highlights: [
      "Les énergies bas carbone (nucléaire et renouvelables)",
      "Le numérique",
      "Les technologies pour la médecine du futur",
      "La défense et la sécurité",
    ],
  },
  {
    "id": 163,
    "partnerOnly": true,
    "name": "Batiactu",
    "logo": "/logos/batiactu.png",
    "sector": "Média du bâtiment et de la construction",
    "domain": "Autre",
    "location": "Non communiqué",
    "employees": "Non communiqué",
    "website": "https://www.batiactu.com",
    "profiles": "Non communiqué",
    "postTypes": [],
    "applicationMethod": "Non communiqué",
    "description": "Batiactu est partenaire officiel du Forum FOCEEN 2026.",
    "highlights": []
  },
  {
    "id": 164,
    "partnerOnly": true,
    "name": "Le Monde des Grandes Écoles et Universités",
    "logo": "/logos/monde-grandes-ecoles.png",
    "sector": "Média des grandes écoles et universités",
    "domain": "Autre",
    "location": "Non communiqué",
    "employees": "Non communiqué",
    "website": "https://www.mondedesgrandesecoles.fr",
    "profiles": "Non communiqué",
    "postTypes": [],
    "applicationMethod": "Non communiqué",
    "description": "Le Monde des Grandes Écoles et Universités est partenaire officiel du Forum FOCEEN 2026.",
    "highlights": []
  },
  {
    "id": 165,
    "partnerOnly": true,
    "name": "Haribo",
    "logo": "/logos/haribo.png",
    "sector": "Confiserie",
    "domain": "Autre",
    "location": "Non communiqué",
    "employees": "Non communiqué",
    "website": "https://www.haribo.com/fr-fr",
    "profiles": "Non communiqué",
    "postTypes": [],
    "applicationMethod": "Non communiqué",
    "description": "Haribo est partenaire officiel du Forum FOCEEN 2026.",
    "highlights": []
  },
  {
    "id": 166,
    "partnerOnly": true,
    "name": "Gomet'",
    "logo": "/logos/gomet.png",
    "sector": "Média local",
    "domain": "Autre",
    "location": "Non communiqué",
    "employees": "Non communiqué",
    "website": "https://gomet.net",
    "profiles": "Non communiqué",
    "postTypes": [],
    "applicationMethod": "Non communiqué",
    "description": "Gomet' est partenaire officiel du Forum FOCEEN 2026.",
    "highlights": []
  },
  {
    "id": 167,
    "partnerOnly": true,
    "name": "Studyrama",
    "logo": "/logos/studyrama.png",
    "sector": "Information et orientation",
    "domain": "Autre",
    "location": "Non communiqué",
    "employees": "Non communiqué",
    "website": "https://www.studyrama.com",
    "profiles": "Non communiqué",
    "postTypes": [],
    "applicationMethod": "Non communiqué",
    "description": "Studyrama est partenaire officiel du Forum FOCEEN 2026.",
    "highlights": []
  },
  {
    "id": 168,
    "partnerOnly": true,
    "name": "La Mie Câline",
    "logo": "/logo-la-mie-caline.png",
    "sector": "Boulangerie et restauration",
    "domain": "Autre",
    "location": "Non communiqué",
    "employees": "Non communiqué",
    "website": "https://www.lamiecaline.com",
    "profiles": "Non communiqué",
    "postTypes": [],
    "applicationMethod": "Non communiqué",
    "description": "La Mie Câline est partenaire officiel du Forum FOCEEN 2026.",
    "highlights": []
  },
];

export const exposantsList: Exposant[] = [
  // ── Fiches intégrées depuis les documents reçus ──
  {
    id: 53,
    name: "Bee Engineering",
    logo: "/logos/bee-engineering.jpg",
    sector: "Conseil en ingénierie (énergie, industrie, procédés, infrastructures, transports)",
    domain: "Ingénierie et Industrie",
    yearCreated: 2010,
    location: "11 villes : Annecy, Aix-en-Provence, Bordeaux, Grenoble, Lyon, Mulhouse, Nantes, Paris, Rennes, Rouen et Toulouse",
    employees: "1 000",
    chiffreAffaires: "80 millions d'euros",
    website: "https://bee-eng.com/",
    websiteCarriere: "https://bee-eng.com/rejoignez-nous/",
    profiles:
      "Le candidat idéal : doté de solides bases techniques dans son métier, mobile intellectuellement, curieux, dynamique",
    postTypes: ["CDI"],
    applicationMethod:
      "Après l'envoi d'un CV ou la réponse à une offre, processus en 5 étapes : 1/ Pré-sélection téléphonique 2/ Premier entretien 3/ Deuxième entretien 4/ Entretien technique 5/ Entretien final de motivation.",
    description:
      "Bee Engineering, société de conseil en ingénierie, accompagne depuis plus de 10 ans les acteurs des secteurs de l'énergie, de l'industrie et des infrastructures dans leurs projets techniques. Grâce à l'expertise de nos consultants nous proposons des solutions adaptées aux enjeux de nos clients.",
    highlights: [
      "Plus de 10 ans d'expertise en ingénierie",
      "Présence dans 11 grandes villes françaises",
      "Secteurs énergie, industrie et infrastructures",
    ],
  },
  {
    id: 54,
    name: "BPCE Solutions Informatiques",
    logo: "/logos/bpce.png",
    sector: "Conseil en systèmes et logiciels informatiques",
    domain: "Informatique, IT et Média",
    yearCreated: 2022,
    location: "Toulouse, Aix-en-Provence, Bordeaux, Nantes, Paris, Lyon, Lille...",
    employees: "2 400",
    website: "https://www.bpce-si.fr/",
    websiteCarriere: "https://www.bpce-si.fr/nous-rejoindre/",
    profiles:
      "Développeurs front-end, Développeurs back-end, Développeurs full stack, Business analyst, Data analyst, Data ingénieur, Data scientist, Chef de projet SI",
    postTypes: ["CDD", "CDI", "Stage"],
    applicationMethod:
      "Candidature sur notre site de recrutement avec CV, 1 entretien RH et 1 entretien opérationnel avec l'équipe à distance ou en présentiel.",
    description:
      "Chez BPCE Solutions informatiques, nous pilotons quotidiennement les évolutions des systèmes d'information dédiés à la banque de détail du Groupe BPCE. Nos équipes conçoivent, développent et maintiennent des solutions innovantes pour répondre aux attentes des Banques Populaires, des Caisses d'Épargne et de leurs clients. Nous sommes au cœur de la mobilité, de la digitalisation de la relation bancaire, du traitement des données clients et de l'amélioration des expériences utilisateurs.",
    highlights: [
      "Technologies : Java, Angular, JavaScript, iOS, Android, .NET, PHP",
      "Digitalisation bancaire et expérience utilisateur",
      "Recrutement en CDI envisageable pour les postes en stage et alternance",
    ],
  },
  {
    id: 4,
    name: "Capgemini",
    logo: "/logos/capgemini.png",
    sector: "Consulting, Services de technologie et d'ingénierie",
    domain: "Audit et Conseil",
    yearCreated: 1967,
    location: "50 pays, plus de 20 villes en France",
    employees: "340 000",
    chiffreAffaires: "22 milliards d'euros",
    website: "https://www.capgemini.com/fr",
    profiles:
      "Niveau Bac +4 et Bac +5 (+ Bac +2/3 pour forums alternance). Formation : école d'ingénieur, école de commerce, master universitaire. Spécialisations : Conseil, Management des SI, Informatique, Sécurité/Cybersécurité, Mathématiques/statistiques, Génie mécanique & systèmes embarqués",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod:
      "CV obligatoire, lettre de motivation (facultatif), langues : français et anglais. Entretiens : un ou deux RH (sur le lieu du forum puis en visio TEAMS) puis un entretien opérationnel (en visio TEAMS).",
    description:
      "Capgemini, partenaire de la transformation business et technologique de ses clients, les accompagne dans leur transition vers un monde plus digital et durable, tout en créant un impact positif pour la société. Le Groupe, responsable et multiculturel, rassemble 340 000 collaborateurs dans plus de 50 pays. Depuis plus de 55 ans, ses clients lui font confiance pour répondre à l'ensemble de leurs besoins grâce à la technologie. Capgemini propose des services et solutions de bout en bout, allant de la stratégie et du design jusqu'à l'ingénierie, en tirant parti de ses compétences de pointe en intelligence artificielle, en cloud, et en data.",
    highlights: [
      "Leader mondial du conseil et de la technologie",
      "340 000 collaborateurs dans 50+ pays",
      "IA, Cloud & Data au cœur de la stratégie",
      "22,5 milliards d'euros de CA en 2023",
    ],
  },
  {
    id: 55,
    name: "CGI France SAS",
    logo: "/logos/cgi.png",
    sector: "Leader mondial du conseil et des services numériques (Business consulting, Intégration de systèmes, Business solutions, Managed IT services)",
    domain: "Informatique, IT et Média",
    yearCreated: undefined,
    location: "Puteaux – La Défense",
    employees: "104 500",
    chiffreAffaires: "9,9 milliards d'euros (2023)",
    website: "https://www.cgi.com",
    websiteCarriere: "https://www.cgi.com/france/fr-fr/recrute",
    profiles:
      "Talents juniors et expérimentés, curieux, possédant une grande capacité d'adaptation, très bon sens du relationnel, initiative et sens du service",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod:
      "Candidature, tests en ligne, entretien RH et entretien manager.",
    description:
      "CGI est déterminée à répondre aux besoins des consommateurs, des citoyens et des communautés. Qu'il s'agisse de la mise en œuvre et du développement des usages numériques en milieu scolaire, de l'utilisation de la navigation par satellite sécurisée pour protéger les individus de la fraude, de l'accompagnement de ses clients en matière de transition écologique pour réduire les émissions de carbone, CGI mise sur la technologie pour soutenir les rouages vitaux de la société et créer un avenir meilleur pour toutes et tous.",
    highlights: [
      "Employeur inclusif (handicap, diversité, LGBT+)",
      "4 métiers : Business consulting, Intégration, Solutions, Services managés",
      "Évolution de carrière en entreprise",
    ],
  },
  {
    id: 56,
    name: "Deloitte",
    logo: "/logos/deloitte.png",
    sector: "Audit & Conseil",
    domain: "Audit et Conseil",
    yearCreated: 1845,
    location: "Internationale",
    employees: "8 000",
    chiffreAffaires: "1 milliard d'euros",
    website: "https://www.deloitte.com/fr/fr.html",
    websiteCarriere: "https://www.deloitte.com/fr/fr/careers.html",
    profiles:
      "Profils diversifiés, adaptables, ouverts d'esprit, bonne capacité à travailler en équipe. La curiosité, l'orientation client et la rigueur sont des compétences clés.",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod:
      "CV, entretiens (nombre en fonction de l'activité).",
    description:
      "Leader mondial en Conseil & Audit, Deloitte propose l'offre de service pluridisciplinaire la plus complète du marché. Fort d'un réseau mondial implanté dans plus de 150 pays, notre firme allie des compétences de niveau international à un service de grande qualité afin d'aider nos clients à répondre à leurs problématiques les plus complexes. Véritable partenaire de confiance, nous accompagnons les entreprises de toutes tailles et de tous secteurs d'activités dans leurs enjeux de croissance et de transformation.",
    highlights: [
      "Présence dans plus de 150 pays",
      "Great Place To Work",
      "Offre pluridisciplinaire la plus complète du marché",
    ],
  },
  // ── EY ──
  {
    id: 58, name: "EY", logo: "/logos/ey.png", sector: "Audit et Conseil", domain: "Audit et Conseil", yearCreated: 1989,
    location: "Paris, Lyon, Marseille, Toulouse, Lille, Strasbourg, Bordeaux, Nantes, Rennes, Nice, Rouen, Nancy, Montpellier",
    employees: "7 000", chiffreAffaires: "1,499 milliards d'euros",
    website: "https://www.ey.com/fr_fr", websiteCarriere: "https://www.ey.com/fr_fr/careers",
    profiles: "Profils Bac+5 issus de grandes écoles d'ingénieurs. Expérience à l'international est un plus. Maîtrise de l'anglais nécessaire.",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV et lettre de motivation à stephane.rebecca@fr.ey.com. Participation à l'assessment center, rencontre un.e associé.e.",
    description: "EY rassemble plus de 300 000 associés et collaborateurs à travers le monde, dans plus de 152 pays. EY renforce sa position de leader mondial de l'Audit, du Conseil, des Transactions, de la Fiscalité et du Droit.",
    highlights: ["Leader mondial de l'Audit, du Conseil et de la Fiscalité", "300 000+ collaborateurs dans 152 pays", "Métiers de la finance, du conseil, du digital et de la data", "Nombreuses formations et suivi individualisé de carrière"],
  },
  // ── Forvis Mazars ──
  {
    id: 59, name: "Forvis Mazars", logo: "/logos/forvis-mazars.jpg", sector: "Audit / Conseil", domain: "Audit et Conseil", yearCreated: 1945,
    location: "31 bureaux en France, +100 pays", employees: "45 000", chiffreAffaires: "5,2 milliards d'euros",
    website: "https://www.forvismazars.com/fr/fr", websiteCarriere: "https://recrutement-fr.forvismazars.com/offres-emploi",
    profiles: "Stages de césure, stages de fin d'études, apprentissage et CDI. Plus de 1000 stagiaires et jeunes diplômés recrutés chaque année.",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Stages de césure : entretien avec un Auditeur. Stages de fin d'études : deux entretiens. CDI : trois entretiens ou sessions Job@ForvisMazars.",
    description: "Forvis Mazars est un groupe international d'audit, de fiscalité et de conseil. Avec + de 40 000 collaborateurs présents dans une centaine de pays, nous faisons partie du Top 10 des cabinets mondiaux.",
    highlights: ["Top 10 des cabinets mondiaux d'audit et conseil", "40 000+ collaborateurs dans 100+ pays", "Domaines : Audit financier, Conseil, Digital, Sustainability, Fiscalité"],
  },
  // ── KPMG ──
  {
    id: 60, name: "KPMG", logo: "/logos/kpmg.jpg", sector: "Audit & Conseil", domain: "Audit et Conseil", yearCreated: 1922,
    location: "190 bureaux en France", employees: "11 000", chiffreAffaires: "1,47 milliard d'euros",
    website: "https://kpmg.com/fr/fr.html", websiteCarriere: "https://kpmg.com/fr/fr/carrieres.html",
    profiles: "Jeune diplômé ou diplômé d'une école d'ingénieurs. Métiers innovants : D&A, cybersécurité, deal advisory, transformation digitale.",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Tests (personnalité, langue, techniques ou cognitifs). Deux entretiens avec managers opérationnels, étude de cas et entretien avec un associé.",
    description: "Audit, Conseil, Expertise Services Conseil & Droit & Fiscalité : rejoignez un cabinet leader aux 100 ans d'existence ! Comme nos 11 000 collaborateurs, faites le choix d'une Entreprise à Mission.",
    highlights: ["Entreprise à Mission avec 100 ans d'existence", "11 000 collaborateurs, 190 bureaux en France", "Secteurs : Industrie, Énergie, Télécommunications, Services Financiers, Technologie"],
  },
  // ── Onepoint ──
  {
    id: 62, name: "Onepoint", logo: "/logos/onepoint.jpg", sector: "Conseil", domain: "Audit et Conseil", yearCreated: 2002,
    location: "France : Paris, Bordeaux, Toulouse, Nantes, Rennes, Lyon, Aix-en-Provence, Strasbourg. Monde : Australie, Belgique, Canada, Malaisie, Maroc, Singapour",
    employees: "3 500", chiffreAffaires: "500 millions d'euros",
    website: "https://www.groupeonepoint.com/fr/", websiteCarriere: "https://www.groupeonepoint.com/fr/nous-rejoindre/",
    profiles: "1 500 talents recrutés par an dont 250 étudiants. Personnes motivées, créatives, dotées d'une grande curiosité.",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Processus basé sur vos compétences et expériences. Deux à trois entretiens.",
    description: "Depuis plus de 20 ans, Onepoint accompagne les grandes transformations des entreprises et des acteurs publics. Notre ambition est de construire ensemble un futur durable qui bénéficie à tous.",
    highlights: ["20+ ans d'accompagnement en transformation", "Chiffre d'affaires multiplié par 10 en 10 ans", "Ambition : atteindre le milliard d'euros d'ici 4 ans"],
  },
  // ── Oresys ──
  {
    id: 63, name: "Oresys", logo: "/logos/oresys.png", sector: "Conseil en management, organisation et transformation", domain: "Audit et Conseil", yearCreated: 1981,
    location: "Paris, Lille, Lyon, Marseille, Nantes, Toulouse, Lausanne",
    employees: "370", chiffreAffaires: "67 millions d'euros",
    website: "https://www.oresys.eu/", websiteCarriere: "https://www.oresys-recrute.eu/",
    profiles: "Jeune diplômé(e) d'une grande école d'ingénieur. Bon niveau d'anglais souhaité.",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV + Lettre de motivation, 3 entretiens de motivation avec des consultants, 1er en visio, les deux suivants en présentiel.",
    description: "Société de conseil indépendante créée en 1981, Oresys est un acteur majeur du conseil en transformation, organisation et systèmes d'information. Première société de conseil certifiée ISO 9001 depuis 1995.",
    highlights: ["Première société de conseil certifiée ISO 9001", "Turn over 2 fois inférieur aux autres cabinets", "Expertise multisectorielle et multispécialiste"],
  },
  // ── Sopra Steria (mise à jour complète) ──
  {
    id: 14, name: "Sopra Steria", logo: "/logos/sopra-steria.png",
    sector: "Conseil en transformation digitale, Intégration de systèmes, Cybersécurité, Infrastructure management, PLM",
    domain: "Informatique, IT et Média", yearCreated: 1968,
    location: "Europe, près de 30 pays", employees: "50 000", chiffreAffaires: "5,8 milliards d'euros",
    website: "https://www.soprasteria.com/fr",
    profiles: "Consultants, Développeurs...",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Process de recrutement via Smartrecruiters",
    description: "Sopra Steria, acteur majeur de la Tech en Europe, avec 50 000 collaborateurs dans près de 30 pays, est reconnu pour ses activités de conseil, de services et solutions numériques.",
    highlights: ["Acteur majeur de la Tech en Europe", "50 000 collaborateurs dans 30 pays", "CA de 5,8 milliards d'euros en 2024"],
  },
  // ── Viveris ──
  {
    id: 66, name: "Viveris", logo: "/logos/viveris.png", sector: "Conseil et Ingénierie Informatique", domain: "Informatique, IT et Média", yearCreated: 1986,
    location: "Montpellier, Aix-en-Provence, Lyon, Grenoble, Toulouse, Paris, Strasbourg, Lille, Bruxelles, Casablanca",
    employees: "930", chiffreAffaires: "97 millions d'euros",
    website: "https://www.viveris.fr/", websiteCarriere: "https://www.viveris.fr/nous-rejoindre/",
    profiles: "Ingénieur Systèmes embarqués, Dév FullStack Java/Node/React/Angular, Data, Cloud, Ingénieur Infrastructures, DevOps, DevSecOps",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV, Entretien visio",
    description: "VIVERIS est un groupe de conseil et d'ingénierie indépendant qui accompagne depuis plus de 30 ans la transformation numérique des entreprises (Systèmes embarqués, Informatique scientifique et technique, Systèmes d'information, Infrastructures).",
    highlights: ["30+ ans d'expertise en transformation numérique", "Systèmes embarqués, SI, Infrastructures", "Présence en France, Belgique et Maroc"],
  },
  // ── Bouygues Bâtiment Sud-Est ──
  {
    id: 68, name: "Bouygues Bâtiment Sud-Est", logo: "/logos/bouygues-batiment.jpg", sector: "Construction", domain: "BTP et Construction", yearCreated: 1973,
    location: "Sud-Est de la France", employees: "950", chiffreAffaires: "380 millions d'euros",
    website: "https://www.bouygues-batiment-sud-est.fr/",
    profiles: "Dynamisme, curiosité, envie d'apprendre, esprit d'équipe",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV",
    description: "Bouygues Bâtiment Sud-Est exerce son activité en développement, conception, construction et rénovation dans tous les domaines de l'habitat, des ouvrages fonctionnels et tertiaires, des opérations multi-produits, de l'industrie et de la logistique. Nous sommes engagés en faveur de la diversité et ouverts à tous les talents.",
    highlights: [
      "Filiale de Bouygues Construction",
      "Habitat, tertiaire, industrie et logistique",
      "Engagement en faveur de la diversité",
    ],
  },
  // ── EDF ──
  {
    id: 70, name: "EDF", logo: "/logos/edf.png", sector: "Énergie", domain: "Énergie et Environnement", yearCreated: 1949,
    location: "Internationale", employees: "191 000", chiffreAffaires: "118,7 milliards d'euros",
    website: "https://www.edf.fr", websiteCarriere: "https://www.edf.fr/edf-recrute",
    profiles: "Tous profils d'ingénierie",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Site https://www.edf.fr/edf-recrute",
    description: "Le Groupe EDF, acteur majeur de la transition énergétique est un énergéticien intégré, présent sur l'ensemble des métiers : la production, le transport, la distribution, le négoce, la vente d'énergies et les services énergétiques. De par sa position de référent sur le marché de l'énergie et des services énergétiques, le groupe EDF offre un large panel de métiers et des parcours de carrière variés en France et à l'international. 230 métiers sont exercés chez EDF.",
    highlights: [
      "Acteur majeur de la transition énergétique",
      "191 000 salariés dans le monde",
      "230 métiers exercés",
      "Évolution vers des postes d'expertise ou de management",
    ],
  },
  // ── Eiffage ──
  {
    id: 71, name: "Eiffage", logo: "/logos/eiffage.png", sector: "BTP, Énergie et Systèmes et Concessions", domain: "BTP et Construction", yearCreated: 1884,
    location: "Présent dans 50 pays sur les 5 continents", employees: "84 400", chiffreAffaires: "23,4 milliards d'euros",
    website: "https://www.eiffage.com/", websiteCarriere: "https://www.eiffage.com/carrieres",
    profiles: "Travaux (Bâtiment, Génie Civil, Route, Rail, Métal), Études (Prix, Méthodes et/ou Structures), Gestion de Projets, Prévention, Affaires. Candidats motivés ayant une réelle appétence pour le BTP, les Énergies et Systèmes et/ou des Concessions.",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "Sélection des CV par les RH et échange téléphonique suivi d'une rencontre avec l'opérationnel qui est amené à recruter.",
    description: "Acteur de référence d'une Europe bas carbone, Eiffage est l'un des leaders européens du BTP et des concessions. Nous exerçons nos activités au travers de 8 métiers (construction, immobilier, aménagement, route, génie civil, métal, énergie systèmes et concessions) répartis au sein de 4 branches. Les 84 400 collaborateurs du groupe sont pleinement engagés pour innover, concevoir, construire, maintenir et rénover les villes et les infrastructures de demain.",
    highlights: [
      "Leader européen du BTP et des concessions",
      "Plus de 100 000 chantiers par an",
      "8 métiers répartis en 4 branches",
      "Engagement dans la transition écologique et digitale",
    ],
  },
  // ── Orano Support ──
  {
    id: 75, name: "Orano Support", logo: "/logos/orano.png", sector: "Secteur de l'énergie nucléaire", domain: "Énergie et Environnement", yearCreated: 2018,
    location: "Internationale", employees: "17 500", chiffreAffaires: "4,7 milliards d'euros",
    website: "https://www.orano.group/fr", websiteCarriere: "https://www.orano.group/jobs/fr",
    profiles: "Soft Skills : Gestion du temps, Communication, Adaptabilité, Initiative, Organisation, Curiosité, Polyvalence, Autonomie",
    postTypes: ["Alternance", "Stage"],
    applicationMethod: "1. Dépôt de candidature : envoi du CV et parfois d'une lettre de motivation. 2. Entretien avec un recruteur. 3. Entretien avec un manager.",
    description: "Groupe international de référence, Orano est un acteur majeur de l'énergie nucléaire. Avec 17 500 collaborateurs dans le monde, le groupe s'engage au quotidien pour répondre aux enjeux énergétiques mondiaux et fournir une électricité puissante, sécurisée, bas carbone et compétitive. Chez Orano, nous sommes engagés pour le climat, pour l'économie des ressources et la santé.",
    highlights: [
      "Acteur majeur de l'énergie nucléaire",
      "17 sites en France et forte culture de mobilité professionnelle",
      "Métiers : Maintenance, Data, Santé et médecine, Exploitation, R&D et innovation",
      "Nombreuses possibilités d'évolution via écoles des métiers et formations",
    ],
  },
  // ── Paprec ──
  {
    id: 76, name: "Paprec", logo: "/logos/paprec.png", sector: "Recyclage et valorisation énergétique des déchets", domain: "Énergie et Environnement", yearCreated: 1994,
    location: "La Seyne sur Mer, Paris, Nantes, Toulouse, Lyon", employees: "16 000", chiffreAffaires: "3 milliards d'euros",
    website: "http://www.paprec.com", websiteCarriere: "https://recrutement.paprec.com/fr",
    profiles: "Ingénieurs (process, calcul, chaudière, planning, électricité, génie civil…)",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "CV + LM + 2 voire 3 entretiens - Anglais professionnel. Entretiens en visio ou à la Seyne sur Mer.",
    description: "En Juillet 2021, le groupe PAPREC crée sa division Energies dédiée à la valorisation énergétique des déchets à la suite des acquisitions de Dalkia Wastenergy, CNIM E&E O&M, Inova Opérations et en avril 2022 la Division EPC du Secteur Environnement & Énergie du Groupe CNIM. Paprec Energies détient à présent toutes les ressources nécessaires pour concevoir, construire et/ou exploiter des usines de valorisation énergétique et organique.",
    highlights: [
      "30 Usines et projets en France et à l'international",
      "Division Energies dédiée à la valorisation énergétique",
      "Évolution de carrière en entreprise",
    ],
  },

  // ── Razel-Bec ──
  {
    id: 77, name: "Razel-Bec", logo: "/logos/razel-bec.jpg", sector: "Construction - Travaux Publics", domain: "BTP et Construction", yearCreated: 1880,
    location: "9 implantations dans le monde", employees: "4 500", chiffreAffaires: "1 milliard d'euros",
    website: "https://razel-bec.fayat.com/",
    profiles: "Nombreux profils en stage dans nos principaux domaines : travaux, études, matériel, qualité, santé et environnement. Offres de CDI pour les jeunes diplômés.",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV et lettre de motivation - Process de recrutement en deux étapes : préqualification téléphonique RH puis entretien opérationnel avec le manager ou futur tuteur.",
    description: "Razel-Bec est un expert reconnu dans tous les domaines des travaux publics : génie civil et ouvrages d'art, travaux souterrains, barrages, nucléaire, infrastructures linéaires, génie urbain et écologique. Véritable partenaire de proximité reconnu pour ses expertises techniques, Razel-Bec répond aux attentes de ses clients avec des solutions inventives et fiables.",
    highlights: ["Expert en génie civil et ouvrages d'art", "Présent sur le chantier du Grand Paris", "9 implantations dans le monde"],
  },
  // ── Setec ──
  {
    id: 79, name: "Setec", logo: "/logos/setec.jpg", sector: "Ingénierie multisectorielle", domain: "Ingénierie et Industrie", yearCreated: 1957,
    location: "France : Paris, Lyon, Vitrolles, Bordeaux, Toulouse et Nantes. Monde : Europe, Afrique, Amérique latine, Amérique du Nord et Arabie Saoudite",
    employees: "4 000", chiffreAffaires: "547 millions d'euros (2024)",
    website: "https://www.setec.fr/", websiteCarriere: "https://setec.nous-recrutons.fr/offres-emploi/",
    profiles: "Ingénieurs, techniciens et universitaires : Chef de projet, Chargé d'opérations / Pilote OPC, Ingénieur structure, ouvrage d'art, Ingénieur génie civil, Ingénieur offres et services de mobilités, Attaché et chargé d'étude environnement, Ingénieur aménagement urbain, Ingénieur systèmes d'information et réseaux de télécommunication, Ingénieur systèmes embarqués",
    postTypes: ["Stage"],
    applicationMethod: "Sur la base des candidatures reçues, nous identifions les profils dont les compétences correspondent à nos besoins. Un premier échange téléphonique permet d'évaluer les qualifications et de mieux comprendre les attentes du candidat. Si l'adéquation est confirmée, le processus se poursuit par des entretiens approfondis avec nos managers et nos équipes RH.",
    description: "Le Groupe setec, c'est aujourd'hui 4 000 collègues répartis dans 40 sociétés, dans de nombreux pays. Ce qui nous unit, c'est notre attachement au travail en équipe, au travail bien fait, sérieux, audacieux quand il le faut, qui fait sens pour la société. Nous intervenons dans plusieurs grands secteurs d'activité : l'industrie, les transports et les mobilités, le conseil et le management de projet, les infrastructures, l'environnement, l'énergie, la ville et les bâtiments.",
    highlights: ["40 sociétés dans de nombreux pays", "6 sociétés représentées au FOCEEN", "Près de 250 stagiaires accueillis chaque année", "Culture managériale participative et responsabilisante"],
  },
  // ── SMAC ──
  {
    id: 80, name: "SMAC", logo: "/logos/smac.webp", sector: "BTP", domain: "BTP et Construction", yearCreated: 1884,
    location: "Nationale et internationale", employees: "2 400", chiffreAffaires: "450 millions d'euros",
    website: "https://www.smac-sa.com", websiteCarriere: "https://www.smac-sa.com/carriere/",
    profiles: "Conducteur de travaux H/F, Chargé d'affaires H/F, Chargé études de prix H/F, Chargé étude méthodes H/F",
    postTypes: ["Alternance", "Stage"],
    applicationMethod: "CV",
    description: "SMAC, c'est un collectif de plus de 2 000 collaborateurs prêts à relever les défis les plus techniques en matière d'enveloppe du bâtiment. Avec son réseau de 60 agences, SMAC est un des leaders dans son domaine, présent en France métropolitaine, en outre-mer (Martinique, Guadeloupe, La Réunion et Mayotte) ainsi qu'à l'international (Maroc, Chili, Pérou et Espagne).",
    highlights: ["Leader en enveloppe du bâtiment", "60 agences en France et à l'international", "Plus de 10 000 challenges différents chaque année", "SMAC Red Spirit : solidarité, performance, envie de progresser"],
  },
  // ── TechnicAtome ──
  {
    id: 81, name: "TechnicAtome", logo: "/logos/technicatome.jpg", sector: "Défense / Nucléaire", domain: "Énergie et Environnement", yearCreated: 1972,
    location: "Nationale : Aix-en Provence, Cadarache, Saclay, Toulon, Bordeaux, Nantes, Brest et Cherbourg",
    employees: "2 100", chiffreAffaires: "633 millions d'euros",
    website: "https://www.technicatome.com", websiteCarriere: "https://technicatome.beekome.com/fr",
    profiles: "Maîtrise de méthodologies et de technologies-clés comme l'architecture système, le management de projets, le numérique sécuritaire, les analyses de sûreté, la thermo-hydraulique et la neutronique, le soutien logistique intégré…",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "Réception de candidature via CV suivi de 3 entretiens (Projet, Métier et RH)",
    description: "Vous avez le souhait de travailler au sein d'un collectif, dans une entreprise française à taille humaine, à la pointe des technologies ? Portée par plus de 2100 collaborateurs répartis sur 8 sites implantés dans tout l'hexagone, TechnicAtome conçoit les réacteurs nucléaires compacts des sous-marins et porte-avions de la Marine Française, tout en œuvrant dans le domaine du nucléaire civil sur des projets innovants tels que le Réacteur Jules Horowitz.",
    highlights: ["Réacteurs nucléaires compacts pour la Marine Française", "8 sites en France", "Projets d'envergures et uniques en leur genre"],
  },
  // ── Technip Energies ──
  {
    id: 82, name: "Technip Energies", logo: "/logos/technip-energies.png", sector: "Ingénierie, études techniques", domain: "Énergie et Environnement", yearCreated: 1967,
    location: "34 pays", employees: "17 000", chiffreAffaires: "7 milliards d'euros",
    website: "https://www.ten.com/en", websiteCarriere: "https://www.ten.com/en/careers",
    profiles: "Tous types de profils.",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "Retrouvez toutes nos offres sur : https://careers.hr.technipenergies.com/",
    description: "Technip Energies est une entreprise leader dans le management de projets et l'ingénierie pour l'industrie de l'énergie (pétrole, gaz et éolien) et au service de la transition énergétique, avec des positions de leader dans le Gaz Naturel Liquéfié (GNL), l'hydrogène et l'éthylène et avec une présence forte sur les marchés en croissance de l'hydrogène bleu et vert, la chimie durable, les éoliennes marines flottantes et la capture et stockage du CO2.",
    highlights: ["Leader dans le management de projets énergétiques", "Présence dans 34 pays", "15 000 collaborateurs engagés dans la transition énergétique"],
  },
  // ── VINCI Construction ──
  {
    id: 83, name: "VINCI Construction", logo: "/logos/vinci-construction.png", sector: "BTP Construction", domain: "BTP et Construction", yearCreated: 2000,
    location: "Régionale, Nationale et Internationale", employees: "117 000", chiffreAffaires: "31,8 milliards d'euros",
    website: "https://vinci-construction.com/fr/", websiteCarriere: "https://jobs.vinci.com/fr",
    profiles: "Valeurs : Engager pour la sécurité, Engager pour l'environnement, Engagés pour l'exemplarité",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "1) Si votre profil nous intéresse, il sera transmis à nos opérationnels pour sélection des CV répondant au mieux aux besoins des services. 2) Si votre candidature est retenue, vous serez ensuite contactés pour un entretien.",
    description: "VINCI Construction est l'un des principaux acteurs mondiaux de la construction, dans le domaine des infrastructures de transport, des bâtiments, des réseaux et des aménagements urbains. VINCI Construction s'appuie sur un réseau d'entreprises de proximité, des réseaux de spécialité et une expertise spécifique sur les grands projets d'infrastructures. Présentes dans plus de 100 pays, ses 1 300 entreprises emploient plus de 117 000 collaborateurs.",
    highlights: ["Principaux acteurs mondiaux de la construction", "1 300 entreprises dans 100+ pays", "117 000 collaborateurs"],
  },

  // ── Exposants avec fiches complètes ──
  {
    id: 15, name: "Thales", logo: "/logos/thales.png", sector: "Défense, Aérospatial, Cyber et Digital", domain: "Ingénierie et Industrie", yearCreated: 2000,
    location: "68 pays, une quarantaine de sites en France", employees: "83 000", chiffreAffaires: "20,6 milliards d'euros",
    website: "https://www.thalesgroup.com/en", websiteCarriere: "https://careers.thalesgroup.com/",
    profiles: "Tous profils ingénieurs : défense, aérospatial, cybersécurité, digital, IA, Big data",
    postTypes: ["Alternance", "CDI", "Stages"],
    applicationMethod: "Candidature sur notre site carrières (CV), entretien de préqualification, entretien opérationnel puis RH.",
    description: "Thales est un leader mondial des hautes technologies qui compte 83 000 collaborateurs dans le monde. Thales investit dans les innovations du numérique et de la « Deep Tech » (connectivité, Big data, intelligence artificielle, cybersécurité et quantique) pour construire un avenir de confiance. Opérant sur les marchés de la défense, de l'aérospatial, de la cyber et du digital, le Groupe propose des solutions, services et produits qui aident ses clients à remplir leurs missions critiques.",
    highlights: ["Leader mondial des hautes technologies", "83 000 collaborateurs dans 68 pays", "Deep Tech : IA, cybersécurité, quantique"],
  },
  // ── Vulcain Engineering Group ──
  {
    id: 85, name: "Vulcain Engineering Group", logo: "/logos/vulcain.svg", sector: "Services d'ingénierie et de conseil", domain: "Ingénierie et Industrie", yearCreated: 2005,
    location: "Présent sur toute la France et dans 16 pays du monde", employees: "6 000", chiffreAffaires: "630 millions d'euros",
    website: "https://www.vulcain-eng.com/", profiles: "Essentiellement des ingénieurs de formation",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV - 3 entretiens - anglais obligatoire",
    description: "Vulcain Engineering Group fournit des services d'ingénierie et de conseil dans le monde entier. Créer, concevoir, construire et exploiter des solutions qui améliorent les infrastructures essentielles et favorisent le progrès durable. Optimiser les processus de production et minimiser l'empreinte environnementale par la décarbonisation, l'optimisation de la consommation d'eau et la baisse de la pollution.",
    highlights: ["Services d'ingénierie multidisciplinaires", "Présence dans 16 pays", "Pilotage de la transformation numérique"],
  },
  // ── ATOS ──
  {
    id: 86, name: "ATOS", logo: "/logos/atos.png", sector: "ESN - Entreprise de service du numérique", domain: "Informatique, IT et Média", yearCreated: 1997,
    location: "Implantations en France métropolitaine et Outre-Mer : Paris, Lille, Caen, Rouen, Rennes, Angers, Nantes, Metz, Strasbourg, Tours, Clermont-Ferrand, Lyon, Bordeaux, Toulouse, Grenoble, Montpellier, Aix-en-Provence, Sophia-Antipolis, Toulon",
    employees: "10 130", chiffreAffaires: "9,6 milliards d'euros",
    website: "https://atos.net/fr/rejoignez-nous", websiteCarriere: "https://atos.net/advancing-what-matters/fr/rejoignez-nous",
    profiles: "Tous profils IT et ingénierie",
    postTypes: ["CDI", "Stages"],
    applicationMethod: "Postuler en ligne sur le site carrières, pré-sélection, entretien RH, entretien opérationnel.",
    description: "Chez Atos Tech Foundations, nous concevons des solutions numériques de la vie quotidienne aux activités critiques – en matière d'intelligence artificielle, de cloud hybride, de gestion des infrastructures, de décarbonation et d'expérience utilisateur. Nous sommes une équipe de 72 000 collaborateurs passionnés avec une ambition claire : utiliser le numérique pour faire avancer ce qui compte pour nos clients et la société dans 68 pays.",
    highlights: ["« Power of We » : impact significatif pour clients et société", "72 000 collaborateurs dans 68 pays", "IA, cloud hybride, décarbonation"],
  },
  // ── Dassault Systèmes ──
  {
    id: 87, name: "Dassault Systèmes", logo: "/logos/dassault-systemes.png", sector: "Éditeur de logiciels 3D", domain: "Informatique, IT et Média", yearCreated: 1981,
    location: "En France : Île-de-France, Bretagne, Auvergne Rhône Alpes, Occitanie, Provence Alpes Côte d'Azur. 195 bureaux dans le monde.",
    employees: "23 800", chiffreAffaires: "5,95 milliards d'euros",
    website: "https://www.3ds.com/fr/", websiteCarriere: "https://www.3ds.com/fr/careers",
    profiles: "R&D : développement logiciel & web, Data & IA, DevOps, UX/UI, Support Clients. Génie Mécanique, Mathématiques Appliquées. Systèmes et Réseaux, Cloud, Cybersécurité. Ventes & Services, Finance & Legal, RH, Marketing & Communication.",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Candidature en ligne plus deux entretiens de recrutement. Langues parlées : anglais, français.",
    description: "Dassault Systèmes est un accélérateur de progrès humain. Nous proposons aux entreprises et aux particuliers des environnements virtuels collaboratifs permettant d'imaginer des innovations durables. Grâce aux jumeaux virtuels d'expérience du monde réel qu'ils créent avec la plateforme 3DEXPERIENCE et ses applications, Dassault Systèmes est un créateur de valeur, au service de plus de 350 000 clients de toutes tailles et de tous secteurs d'activité, dans plus de 150 pays.",
    highlights: ["Plateforme 3DEXPERIENCE", "350 000 clients dans 150+ pays", "23 800 collaborateurs passionnés"],
  },
  // ── Lucca ──
  {
    id: 89, name: "Lucca", logo: "/logos/lucca.png", sector: "Tech/SaaS", domain: "Informatique, IT et Média", yearCreated: 2002,
    location: "Paris, Nantes, Marseille, Barcelone, Toulouse, Genève, Munich, Bordeaux", employees: "800",
    website: "https://www.lucca.fr/", profiles: "Product Manager, SRE, UI Developer, Full stack software engineer, back-end engineer, front-end engineer",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "CV / 4 entretiens (RH, Manager, Petit oral, Grand oral)",
    description: "Lucca est une scale-up française en forte croissance qui révolutionne la gestion RH et finance grâce à des logiciels ni gris, ni moches, ni tristes. En quelques chiffres : 800 collaborateurs (900 fin 2025), 8 sites, 1,5 million d'utilisateurs, 35 % de croissance du CA en 2024, 14 logiciels. Un objectif de multiplier x3 notre ARR pour atteindre les +250M€.",
    highlights: ["Scale-up française en forte croissance", "14 logiciels RH et finance", "8 sites internationaux"],
  },
  // ── Murex ──
  {
    id: 90, name: "Murex", logo: "/logos/murex.png", sector: "Fintech", domain: "Informatique, IT et Média", yearCreated: 1986,
    location: "Paris, France – 19 bureaux à l'international", employees: "3 000", chiffreAffaires: "791 millions d'euros",
    website: "https://www.murex.com/en", websiteCarriere: "https://murex.wd3.myworkdayjobs.com/MurexCareerPage1",
    profiles: "Ingénierie Financière (finance quantitative), Ingénierie Information (software development, C++ / Java)",
    postTypes: ["Stage"],
    applicationMethod: "Test technique en ligne, entretien RH puis entretien manager",
    description: "Murex is a global fintech leader in trading, risk management and processing solutions for capital markets. Operating from our 19 offices, 3 000 Murexians from over 60 different nationalities ensure the development, implementation and support of our platform which is used by banks, asset managers, corporations and utilities, across the world.",
    highlights: ["Leader mondial fintech pour les marchés de capitaux", "3 000 collaborateurs, 60+ nationalités", "19 bureaux dans le monde"],
  },
  // ── Orange SA ──
  {
    id: 91, name: "Orange SA", logo: "/logos/orange.png", sector: "Télécommunications multiservices - IT & Innovation", domain: "Informatique, IT et Média", yearCreated: 1988,
    location: "Orange Massalia Bât C, 93 rue Felix Pyat 13003 Marseille", employees: "130 000", chiffreAffaires: "43 milliards d'euros",
    website: "https://www.orange.fr/portail", websiteCarriere: "https://orange.jobs/site/fr-home/",
    profiles: "IA, cybersécurité, big data, IoT, virtualisation des réseaux, Cloud, 5G, fonctions support",
    postTypes: ["Alternance", "Stage"],
    applicationMethod: "1. Découvrez nos offres sur orange.jobs. 2. Postulez avec CV et lettre de motivation. 3. Entretien RH puis entretien avec futur manager.",
    description: "Découvrez Orange, un leader des télécommunications et de l'innovation ! Avec plus de 266 millions de clients et une présence dans 26 pays, Orange est le leader en France et un acteur majeur en Europe. En tant qu'acteur clé de l'IT, nous recrutons des femmes et des hommes engagés, prêts à relever de nouveaux défis dans des domaines innovants tels que l'IA, la cybersécurité, le big data, l'IoT, la virtualisation des réseaux, le Cloud, la 5G.",
    highlights: ["Leader télécommunications en France", "266 millions de clients dans 26 pays", "Innovation : IA, cybersécurité, 5G, IoT"],
  },
  // ── Akkodis ──
  {
    id: 92, name: "Akkodis", logo: "/logos/akkodis.png", sector: "Ingénierie industrie / IT / Défense", domain: "Ingénierie et Industrie", yearCreated: 2022,
    location: "30 pays", employees: "2 000 (France : 9 000)", chiffreAffaires: "4 milliards d'euros",
    website: "https://www.akkodis.com/fr/", websiteCarriere: "https://www.akkodis.com/fr-fr/emplois/",
    profiles: "Ingénierie système, Ingénierie mécanique, Développement / Conception logiciel, Soutien logistique intégré",
    postTypes: ["CDI"],
    applicationMethod: "CV et lettre de motivation. Étape 1 : pré-qualification téléphonique. Étape 2 : Entretien RH. Étape 3 : Entretien Business Manager. Étape 4 (optionnelle) : Entretien technique.",
    description: "Akkodis, leader mondial sur le marché de l'ingénierie et de la R&D, s'appuie sur la puissance des données connectées pour accélérer l'innovation et la transformation digitale. Avec une passion commune pour la technologie et les talents, nos 50 000 experts en IT et Ingénierie répartis dans 30 pays offrent une expertise intersectorielle approfondie. Akkodis fait partie du groupe Adecco.",
    highlights: ["Leader mondial ingénierie et R&D", "50 000 experts dans 30 pays", "Partie du groupe Adecco"],
  },
  // ── Assystem ──
  {
    id: 93, name: "Assystem", logo: "/logos/assystem.png", sector: "Bureau d'études", domain: "Ingénierie et Industrie", yearCreated: 1966,
    location: "Internationale – 12 pays (Europe, Moyen-Orient, Asie)", employees: "8 000", chiffreAffaires: "611 millions d'euros",
    website: "https://www.assystem.com/fr/", profiles: "Ingénieurs Projets, PMO, Études, Fonctionnement, Démantèlement, Sûreté Nucléaire, Électricité, Mécaniques, Génie Civil, Risques, Automatisme, Systèmes, Informatique, Data Scientist, IA, I&C",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "CV, Entretien RH et technique",
    description: "Chez Assystem, nous accordons une importance capitale au développement de vos compétences tout au long de votre carrière. Assystem met au cœur de sa politique formation la volonté de créer une dynamique apprenante. Trouver des solutions au dérèglement climatique est la priorité du 21ème siècle, et implique de switcher à l'énergie bas-carbone. Chez Assystem, on s'est donné pour mission d'accélérer la transition énergétique partout dans le monde. Présent dans 12 pays, nous travaillons sur la production et la distribution d'électricité bas-carbone, à travers le développement des énergies nucléaires et renouvelables.",
    highlights: ["Accélérateur de la transition énergétique", "8 000 Switchers dans 12 pays", "Expertise nucléaire et renouvelables"],
  },

  // ── Bertin Technologies ──
  {
    id: 106, name: "Bertin Technologies", logo: "/logos/bertin-technologies.webp", sector: "Instrumentation industrielle et scientifique", domain: "Ingénierie et Industrie", yearCreated: 1956,
    location: "155, rue Louis Armand – 13290 Aix-en-Provence",
    employees: "1 000", chiffreAffaires: "178 millions d'euros",
    website: "https://www.bertin-technologies.com/",
    profiles: "Ingénieurs électronique, photonique, optronique, systèmes embarqués, informatique",
    postTypes: ["CDD", "CDI", "Stage"],
    applicationMethod: "CV, lettre de motivation, 2 à 3 entretiens dont 1 minimum en présentiel.",
    description: "BERTIN TECHNOLOGIES est un groupe industriel européen de l'instrumentation pour des applications critiques ou scientifiques. Chaque jour, nous poursuivons les avancées technologiques dans des domaines variés : le Spatial, la Défense et la sécurité, les Grands Instruments Scientifiques, le Nucléaire Civil et les Sciences de la Vie et la Santé.",
    highlights: ["Groupe industriel européen de l'instrumentation", "Secteurs : Spatial, Défense, Nucléaire, Sciences de la Vie", "Applications critiques et scientifiques"],
  },

  // ── Exail SAS ──
  {
    id: 109, name: "Exail SAS", logo: "/logos/exail.png", sector: "Technologies de pointe (robotique, maritime, navigation, aéronautique, spatial, photonique)", domain: "Ingénierie et Industrie", yearCreated: 2000,
    location: "Saint-Germain-en-Laye 78100 – Échelle internationale (80+ pays)",
    employees: "2 000",
    website: "https://www.exail.com", websiteCarriere: "https://www.exail.com/careers",
    profiles: "Ingénieurs et autres profils techniques",
    postTypes: ["Alternance", "CDD", "CDI"],
    applicationMethod: "CV, entretiens.",
    description: "Exail est un groupe industriel spécialisé dans les technologies de pointe dans les domaines de la robotique, du maritime, de la navigation, de l'aéronautique, du spatial et de la photonique. S'appuyant sur une forte culture entrepreneuriale, Exail assure performance, fiabilité et sécurité à ses clients civils et militaires opérant dans des environnements sévères. Depuis le fond des océans jusqu'aux confins de l'espace, Exail augmente les capacités de ses clients. Exail est né en 2022 après qu'ECA Group et iXblue ont uni leurs forces.",
    highlights: ["Présence dans 80+ pays", "Groupe né de la fusion ECA Group & iXblue (2022)", "Technologies dual-use : civil et militaire"],
  },

  // ── IKOS ──
  {
    id: 110, name: "IKOS", logo: "/logos/ikos.jpg", sector: "Ingénierie Ferroviaire & Energie", domain: "Transports et Systèmes embarqués", yearCreated: 2005,
    location: "28 bureaux dans 13 pays (France, Espagne, Belgique, Allemagne, Suisse, Suède, Italie, Angleterre, États-Unis, Canada, Maroc, Portugal, Israël)",
    employees: "1 750", chiffreAffaires: "11 368 millions d'euros",
    website: "https://www.ikosconsulting.com/",
    profiles: "Ingénieurs grandes écoles, masters spécialisés et docteurs dans les secteurs ferroviaire et énergie",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV, 1 entretien RH, 1 entretien technique avec le futur manager.",
    description: "IKOS est la société d'ingénierie spécialisée dans les domaines du ferroviaire et des énergies. À travers nos valeurs, nous nous engageons à participer à la transition énergétique en développant les modes de transport du futur, qui seront sûrs et durables, ainsi qu'une énergie plus verte. Nos 1 650 ingénieurs réalisent des projets avec le support de notre entité IKOS LAB, qui pilote également nos programmes de recherches et de formations.",
    highlights: ["Spécialiste ferroviaire et énergie", "28 bureaux dans 13 pays", "IKOS LAB : R&D et formation interne"],
  },

  // ── Onet Technologies ──
  {
    id: 111, name: "Onet Technologies", logo: "/logos/onet.png", sector: "Ingénierie et maintenance nucléaire", domain: "Énergie et Environnement", yearCreated: 1999,
    location: "France, USA, Angleterre, Italie, Canada, Japon – 30 implantations en France",
    employees: "3 000", chiffreAffaires: "280 millions d'euros",
    website: "https://www.groupeonet.com/", websiteCarriere: "https://www.onetrecrute.com/offre-de-emploi/liste-offres.aspx",
    profiles: "Ingénieur projet, Ingénieur d'étude sûreté, Ingénieur démantèlement nucléaire, Ingénieur mécanique et contrôle commande",
    postTypes: ["Alternance", "CDI"],
    applicationMethod: "1) Réponse aux offres du site carrière Onet recrute. 2) Entretien RH visio. 3) Entretien technique / manager.",
    description: "Onet Technologies est un acteur reconnu de l'ingénierie, de la maintenance et des opérations sur site pour l'industrie du nucléaire. Nous proposons à nos clients des solutions globales, allant des études d'ingénierie au déploiement sur site industriel en passant par l'exploitation d'installations ou la fabrication. Onet Technologies fait partie du groupe Onet, groupe de services et d'ingénierie.",
    highlights: ["Acteur reconnu du nucléaire", "Solutions globales : études, déploiement, exploitation", "30 implantations en France"],
  },

  // ── Ortec Group ──
  {
    id: 112, name: "Ortec Group", logo: "/logos/ortec-group.png", sector: "Ingénierie et services industriels (Engineering, Contracting, Global Services, Energies)", domain: "Ingénierie et Industrie", yearCreated: 1992,
    location: "Siège : Aix-en-Provence – Implantation internationale",
    employees: "15 000", chiffreAffaires: "1,4 milliard d'euros",
    website: "https://ortec-group.com/", websiteCarriere: "https://ortec-group.com/carrieres/",
    profiles: "Stagiaires, alternants, jeunes diplômés",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "CV, lettre de motivation, 3/4 entretiens, français/anglais, visioconférence + site.",
    description: "Au service de la performance, de l'innovation et de la compétitivité des industriels, Ortec est un groupe international. Intégrateur de solutions en Ingénierie et Travaux, le Groupe Ortec accompagne les industriels sur l'ensemble du cycle de vie de leurs projets (conception, réalisation, maintenance) avec une offre articulée autour de 4 segments : Engineering, Contracting, Global Services et Energies. Le Groupe ORTEC intervient aujourd'hui sur de nombreux marchés : Oil & Gas, Nucléaire, Aéronautique & Spatial, Défense, Automobile, Ferroviaire, Chimie, Pharmacie, Agroalimentaire.",
    highlights: ["Groupe international 15 000 collaborateurs", "4 segments : Engineering, Contracting, Global Services, Energies", "Siège à Aix-en-Provence"],
  },

  // ── Syntec-Ingénierie ──
  {
    id: 114, name: "Syntec-Ingénierie", logo: "/logos/syntec-ingenierie.png", sector: "Fédération professionnelle de l'ingénierie", domain: "Ingénierie et Industrie", yearCreated: 1990,
    location: "22, rue Joubert – 75009 Paris",
    employees: "15",
    website: "https://www.syntec-ingenierie.fr",
    profiles: "Ingénieurs, tous profils dans les entreprises adhérentes",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "Via les entreprises adhérentes.",
    description: "Syntec-Ingénierie est la fédération professionnelle des entreprises du secteur de l'ingénierie. Notre fédération regroupe près de 400 entreprises qui emploient plus de 90 000 salariés et qui s'investissent pleinement dans des filières tournées vers l'avenir : l'éco-conception, la rénovation énergétique des bâtiments, la décarbonation de l'industrie, le développement des nouvelles sources d'énergie propres. L'ingénierie est le premier secteur qui offre un emploi aux nouveaux ingénieurs, avec plus de 25% d'insertion dans nos entreprises.",
    highlights: ["400 entreprises adhérentes", "90 000+ salariés dans le secteur", "Premier secteur employeur des nouveaux ingénieurs"],
  },

  // ── Tractebel Engineering ──
  {
    id: 115, name: "Tractebel Engineering", sector: "Ingénierie", domain: "Ingénierie et Industrie", yearCreated: 1950, logo: "/logos/tractebel.png",
    location: "Paris, Lyon et Marseille",
    employees: "850", chiffreAffaires: "142 millions d'euros",
    website: "https://tractebel-engie.com/fr-fr/", websiteCarriere: "https://tractebel-engie.com/fr-fr/carrieres/",
    profiles: "Ingénieur études et projets en mécanique, Génie civil, Électricité, Sûreté",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "Envoi CV puis pré qualification téléphonique et entretien RH puis technique en visio ou en présentiel.",
    description: "Prêt-e à réaliser ton impact positif ? Alors rejoins Tractebel, une société du groupe ENGIE, et nos 5 600 experts passionnés à travers le monde, animés par la volonté de façonner chaque jour un monde plus durable. C'est ta chance de participer à l'aventure du siècle : accélérer la transition énergétique, tout en améliorant la vie des gens à travers des projets porteurs de sens.",
    highlights: ["Filiale du groupe ENGIE", "5 600 experts à travers le monde", "Transition énergétique : nucléaire, ENR, électricité", "Évolution en expertise technique ou chef de projet"],
  },

  // ── CMA CGM ──
  {
    id: 116, name: "CMA CGM", sector: "Transports et logistiques", domain: "Transports et Systèmes embarqués", yearCreated: 1978, logo: "/logos/cma-cgm.png",
    location: "Marseille (siège) – 177 pays",
    employees: "160 000", chiffreAffaires: "55,5 milliards de dollars",
    website: "https://www.cmacgm-group.com/fr", websiteCarriere: "https://jobs.cmacgm-group.com/",
    profiles: "Tous profils",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "1 premier entretien téléphonique, 1 entretien RH, 1 entretien manager – Tests techniques possibles selon les postes.",
    description: "True to its Purpose, 'We imagine better ways to serve a world in motion', the CMA CGM Group stands as a global leader in sea, land, air, and logistics solutions. With a presence in 177 countries, the Group employs 160,000 people, including nearly 6,000 in Marseilles, which houses its head office. As the world's third-largest container shipping company, CMA CGM serves over 420 ports across five continents.",
    highlights: ["3ème armateur mondial en conteneurs", "160 000 collaborateurs dans 177 pays", "Siège social à Marseille", "Engagé dans la décarbonation maritime"],
  },

  // ── Framatome ──
  {
    id: 117, name: "Framatome", sector: "Nucléaire", domain: "Énergie et Environnement", yearCreated: 1958, logo: "/logos/framatome.png",
    location: "Internationale",
    employees: "20 000", chiffreAffaires: "4 676 millions d'euros",
    website: "https://www.framatome.com/fr/", websiteCarriere: "https://framatome-career.talent-soft.com/",
    profiles: "Selon les offres de postes",
    postTypes: ["Stage"],
    applicationMethod: "CV, lettre de motivation.",
    description: "Framatome est un leader international de l'énergie nucléaire, reconnu pour ses solutions innovantes et ses technologies à forte valeur ajoutée à destination du parc nucléaire mondial. Forte d'une expertise mondiale et de solides références en termes de fiabilité et de performances, l'entreprise conçoit, entretient et installe des composants et des combustibles ainsi que des systèmes de contrôle-commande pour les centrales nucléaires.",
    highlights: ["Leader international de l'énergie nucléaire", "20 000 collaborateurs dans le monde", "Ingénierie, fabrication, sûreté et maintenance nucléaire", "Diversité de métiers : ingénierie, terrain, sûreté, gestion de projet"],
  },

  // ── Groupe SNEF ──
  {
    id: 118, name: "Groupe SNEF", sector: "Industrie, Marine, Infrastructure & Sécurité, Nucléaire, Naval", domain: "Énergie et Environnement", yearCreated: 1905, logo: "/logos/groupe-snef.png",
    location: "Nationale & Internationale",
    employees: "15 173", chiffreAffaires: "2 milliards d'euros",
    website: "https://www.snef.fr/", websiteCarriere: "https://www.snef.fr/carrieres/page_recrute_offres.php",
    profiles: "Électricité HT/BT, GTB/GTC, Automation, Supervision, IT & Cybersécurité, Cloud & IA, BI, Procédés, BIM, Mécanique, Chaudronnerie…",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "CV.",
    description: "Capables d'intervenir de bout en bout, tout au long du cycle de vie des installations de nos clients, nous avons bâti notre Groupe autour d'une large palette de compétences techniques. Nous sommes ingénieurs/concepteurs, intégrateurs, mainteneurs et opérateurs de solutions multitechniques dans les domaines de l'énergie, de la mécanique et du numérique.",
    highlights: ["Groupe multitechnique : énergie, mécanique, numérique", "15 000+ collaborateurs en France et à l'international", "Révolution numérique : IoT, IA, Cybersécurité, BIM"],
  },

  // ── DGA ──
  {
    id: 119, name: "DGA", sector: "Défense", domain: "Défense", yearCreated: 1961, logo: "/logos/dga.png",
    location: "18 sites en France",
    employees: "10 500",
    website: "https://www.defense.gouv.fr/dga", websiteCarriere: "https://contractuels.civils.defense.gouv.fr/",
    profiles: "Métiers techniques (Aéronautique, Naval, Espace, Cyber, Drones, Nucléaire/Défense NRBC), Cyber sécurité, Métiers transverses (Achat, Management de projet, Logistique, Finance, Qualité…)",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "Offres d'emploi sur https://contractuels.civils.defense.gouv.fr/ – Offres de stage sur https://stages.defense.gouv.fr/",
    description: "La DGA est l'artisan de tous les succès technologiques de nos armées depuis plus de 60 ans. Sa vocation : équiper les forces armées et préparer l'avenir. Avec 18 sites en France, ses 10 500 femmes et hommes civils ou militaires, dont 60 % cadres, ingénieurs ou experts, 80% de personnels civils et son réseau de collaborateurs à l'international, la DGA intervient dans tous les domaines de la défense.",
    highlights: ["60+ ans au service des armées françaises", "10 500 collaborateurs dont 60 % ingénieurs/cadres", "16 milliards d'euros de commandes à l'industrie en 2022", "Présence internationale dans 20 pays"],
  },

  // ── Marine Nationale ──
  {
    id: 120, name: "Marine Nationale", sector: "Défense", domain: "Défense", yearCreated: 1626, logo: "/logos/marine-nationale.png",
    location: "Internationale",
    employees: "40 000",
    website: "http://www.defense.gouv.fr/marine", websiteCarriere: "https://www.lamarinerecrute.fr",
    profiles: "Profil ingénieur, école de commerce, université de Bac+3 à Bac+5 – Chaque année plus de 4 000 emplois proposés à des jeunes français âgés de 16 à 30 ans",
    postTypes: ["CDD"],
    applicationMethod: "CV et lettre de motivation. Contrat de 1 à 8 ans renouvelable.",
    description: "La Marine nationale est une des composantes des forces armées et dépend du Ministère des armées. Choisir la Marine, c'est décider de servir, soit au sein des bâtiments de surface, des sous-marins, des aéronefs ou des commandos, qui constituent l'outil maritime de la défense militaire de notre pays, soit à terre dans l'environnement et le soutien de ces unités.",
    highlights: ["Force armée avec 40 000 marins", "Carrières à bord de bâtiments de surface, sous-marins, aéronefs", "Contrats de 1 à 8 ans renouvelables", "Profils ingénieurs et grandes écoles bienvenus"],
  },

  // ── MB92 La Ciotat ──
  {
    id: 121, name: "MB92 La Ciotat", sector: "Réparation Navale", domain: "Transports et Systèmes embarqués", yearCreated: 1998, logo: "/logos/mb92.png",
    location: "La Ciotat",
    employees: "180", chiffreAffaires: "121 millions d'euros",
    website: "https://mb92.com", websiteCarriere: "https://mb92.com/careers",
    profiles: "Ingénieur généraliste ou avec spécialité (mécanique) en 3ème année. Très bon niveau d'Anglais",
    postTypes: ["CDD", "CDI", "Stage"],
    applicationMethod: "Après le forum : entretien avec le service RH et les managers opérationnels afin de présenter l'entreprise, ses métiers et le management de projet.",
    description: "Implanté à Barcelone, La Ciotat, Golfe Juan, Red Sea et Palma, le groupe MB92 est le leader mondial de la maintenance, la réparation et le refit de yachts d'exception et évolue sur un marché en forte progression. L'entreprise intervient auprès des superyachts les plus prestigieux au monde et compte aujourd'hui plus de 600 professionnels, dont plus de 15 nationalités.",
    highlights: ["Leader mondial de la réparation et refit de superyachts", "600+ professionnels de 15 nationalités", "Ascenseur à bateaux de 4 300 tonnes à La Ciotat", "Évolution possible vers Chef de Projet après stage de 6 mois"],
  },

  // ── Ministère des Armées (DGSE) ──
  {
    id: 122, name: "Ministère des Armées", sector: "Défense", domain: "Défense", yearCreated: 1942, logo: "/logos/ministere-armees.png",
    location: "France",
    employees: "7 500",
    website: "https://www.dgse.gouv.fr/fr",
    profiles: "Softskills et hardskills – tous profils techniques et transverses",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "CV + LM.",
    description: "Nous sommes la DGSE, le service secret français. Rattachés au ministère des Armées, nous contribuons à la souveraineté de notre pays. Notre mission consiste à recueillir des renseignements partout dans le monde afin d'éclairer les plus hautes autorités de l'État. Nos 7 200 agents œuvrent dans l'ombre pour connaître et anticiper les menaces de toutes natures. Du contre-terrorisme à la cyber, ils agissent pour protéger la France et les Français.",
    highlights: ["Service de renseignement extérieur français", "7 200 agents au service de la France", "Du contre-terrorisme à la cybersécurité", "Profils très divers : techniques, linguistes, analystes"],
  },


  // ── NAVAL GROUP ──
  {
    id: 125, name: "Naval Group", sector: "Industrie et Naval de défense", domain: "Défense", yearCreated: 2003, logo: "/logos/naval-group.png",
    location: "Toulon, Ollioules, Saint-Tropez, Nantes, Ruelle, Brest, Cherbourg, Lorient et Paris",
    employees: "16 722", chiffreAffaires: "4,355 milliards d'euros",
    website: "https://www.naval-group.com/fr/", websiteCarriere: "https://www.naval-group.com/fr/nous-rejoindre",
    profiles: "Tous les profils sont intéressants",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "Après réception du CV, entretien téléphonique avec un recruteur, puis entretien (physique ou visio) avec le manager et/ou le HR Business Partner. Enquête administrative de sécurité et procédure d'habilitation Défense Nationale possibles.",
    description: "Naval Group est un acteur incontournable du naval de Défense. Il conçoit, réalise, maintient en service, déconstruit et démantèle des navires de surface, des sous-marins, des porte-avions, mais également des drones. Maître d'œuvre industriel, concepteur et intégrateur d'ensemble de ces navires et de leurs systèmes (applicatifs, matériels et réseaux informatiques, data center, IA, traitements du signal et des données), notre entreprise regroupe près de 500 métiers répartis sur 10 sites en France.",
    highlights: ["10 sites implantés en France", "Près de 500 métiers : ingénierie systèmes, dev & cyber, nucléaire, supply chain", "Diversité et inclusion au cœur de la culture", "Habilitation Défense Nationale"],
  },

  // ── AXA FRANCE ──
  {
    id: 126, name: "AXA France", sector: "Assurance", domain: "Autre", yearCreated: 1985, logo: "/logos/axa.png",
    location: "France – Groupe présent dans 51 pays",
    employees: "34 000", chiffreAffaires: "29 milliards d'euros",
    website: "https://recrutement.axa.fr/axa-et-vous/notre-identite",
    profiles: "Actuariat (chargés d'études actuarielles), Risk Management Assurance (gestionnaires de sinistres, souscripteurs), IT (software engineers, architectes, product owners) et fonctions supports",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Entretien RH, entretien(s) managers, éventuels tests techniques.",
    description: "Un des leaders mondiaux de l'assurance dans la protection des biens, des personnes et des actifs, AXA c'est 145 000 collaborateurs et contributeurs qui s'engagent au quotidien pour nos clients, 51 pays dans lesquels nous distribuons nos produits et services et plus de 90 millions de clients qui nous font confiance dans le monde. Employeur citoyen et responsable, AXA s'engage au quotidien pour des causes sociétales et environnementales et mène une politique inclusive engagée pour reconnaître et valoriser les différences individuelles.",
    highlights: ["145 000 collaborateurs dans le monde", "Présent dans 51 pays", "90 millions de clients", "Engagement sociétal et environnemental"],
  },


  // ── HEINEKEN FRANCE ──
  {
    id: 128, name: "HEINEKEN France", sector: "Agroalimentaire", domain: "Autre", yearCreated: 1864, logo: "/logos/heineken.png",
    location: "Mons-en-Barœul, Schiltigheim, Marseille – 71 sites de distribution en France",
    employees: "3 700", chiffreAffaires: "29,82 milliards d'euros (groupe)",
    website: "https://www.heinekenfrance.fr/", websiteCarriere: "https://www.heinekenfrance.fr/rejoignez-nous/",
    profiles: "Ingénieur, Maintenance",
    postTypes: ["Alternance", "Stage"],
    applicationMethod: "CV, 2 entretiens (RH et opérationnel), en visio et présentiel.",
    description: "Chez HEINEKEN France, nous exerçons deux métiers : brasseur et distributeur. Brasseur, nous sommes fiers de la belle diversité de nos marques de bières produites dans nos 3 brasseries françaises à Mons-en-Barœul, Schiltigheim et Marseille. Distributeur, avec notre filiale France Boissons, nous livrons chaque jour plus de 43 000 clients (cafés, hôtels, restaurants). Brasseur-distributeur depuis plus de 30 ans en France, nous regroupons 3 700 collaborateurs et générons 30 000 emplois indirects. HEINEKEN France appartient au groupe HEINEKEN, premier brasseur européen et deuxième mondial.",
    highlights: ["3 brasseries françaises", "71 sites de distribution", "43 000 clients CHR livrés chaque jour", "Groupe HEINEKEN : 165 brasseries dans 70+ pays"],
  },

  // ── VINCI ENERGIES ──
  {
    id: 131, name: "VINCI Energies", sector: "Efficacité énergétique et énergies renouvelables", domain: "Énergie et Environnement", yearCreated: 1918, logo: "/Logo_VE_bleu_Rouge.png",
    location: "61 pays",
    employees: "102 600 collaborateurs, 2 100 entreprises", chiffreAffaires: "20,4 milliards d'euros (2024)",
    website: "https://www.vinci-energies.com",
    profiles: "Tous les profils techniques ou commerciaux : Ingénieurs d'affaires, Ingénieurs d'études, Ingénieurs projets, Responsable d'Affaires… Au-delà des diplômes, VINCI Energies recherche des tempéraments d'entrepreneurs.",
    postTypes: ["CDI", "Alternance", "Stage"],
    applicationMethod: "Chaque année VINCI Energies accueille en France plus de 5000 stagiaires et alternants. recrutement.vefimce@vinci-energies.com",
    description: "VINCI Energies nourrit l'offre globale du Groupe VINCI dans le domaine de l'efficacité énergétique et des énergies renouvelables et dans l'intégration de systèmes complexes. Présent dans 61 pays avec 102 600 collaborateurs et 2 100 entreprises, VINCI Energies accélère les transitions énergétique et numérique.",
    highlights: ["Leader mondial des solutions multi-techniques", "Présence dans 61 pays", "Programme Pépinière d'intégration des jeunes diplômés", "Valeurs CESAR"],
  },

  // ── Synchronisation depuis la brochure ──
  {
    id: 132,
    name: "Cap Finances",
    logo: "/logos/capfinances.png",
    sector: "Gestion de patrimoine & Conseil financier",
    domain: "Audit et Conseil",
    yearCreated: 2004,
    location: "Implantation nationale (France)",
    employees: "150 collaborateurs — 1 400 conseillers partenaires",
    chiffreAffaires: "150 M€",
    website: "https://www.capfinances.fr",
    profiles: "Conseillers en stratégie patrimoniale, Profils commerciaux, banque, finance & assurance, Chefs de projet ingénierie patrimoniale",
    postTypes: [
      "CDI"
    ],
    applicationMethod: "Sélection sur CV ; Entretien de présentation ; 1/2 journée en immersion opérationnelle.",
    description: "Filiale de Groupe Premium et référence nationale de la gestion de patrimoine depuis plus de 20 ans, Capfinances accompagne particuliers et professionnels dans l'optimisation, la valorisation et la transmission de leurs actifs en épargne, retraite, prévoyance et investissements.",
    highlights: [
      "Conseillers en stratégie patrimoniale",
      "Profils commerciaux, banque, finance & assurance",
      "Chefs de projet ingénierie patrimoniale"
    ]
  },
  {
    id: 133,
    name: "Talisker Consulting",
    logo: "/logos/talisker.png",
    sector: "Conseil en management & Transformation",
    domain: "Audit et Conseil",
    yearCreated: 2006,
    location: "France & International",
    employees: "47 collaborateurs",
    chiffreAffaires: "7,5 M€",
    website: "https://www.talisker-consulting.com",
    profiles: "Consultants transformation & organisation des DSI, Consultants stratégie & dynamique collective, Consultants IA & technologies innovantes",
    postTypes: [
      "Alternance",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Entretien RH ; 2 études de cas avec Managers/Partners ; Entretien final Executive Partner.",
    description: "Cabinet de conseil en management indépendant à taille humaine, Talisker accompagne les directions générales et métiers dans leurs transformations stratégiques, managériales et digitales (IA conversationnelle, refonte des DSI) grâce à la dynamique collective et au mentorat.",
    highlights: [
      "Consultants transformation & organisation des DSI",
      "Consultants stratégie & dynamique collective",
      "Consultants IA & technologies innovantes"
    ]
  },
  {
    id: 134,
    name: "ECIA",
    logo: "/logos/ecia.png",
    sector: "Ingénierie Nucléaire",
    domain: "Énergie et Environnement",
    yearCreated: 2007,
    location: "Venelles, Bagnols-sur-Cèze, Bollène, Lyon, Cherbourg, Nantes",
    employees: "180 collaborateurs",
    chiffreAffaires: "13 M€",
    website: "https://www.equans.fr",
    profiles: "Ingénieurs électricité (CFO/CFA), Ingénieurs contrôle-commande, Ingénieurs génie mécanique & calculs, Ingénieurs ventilation & génie climatique (HVAC)",
    postTypes: [
      "Alternance",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Sélection sur CV ; Entretien RH ; Entretien technique (en visio).",
    description: "Entité d'EQUANS France, ECIA réunit près de 200 spécialistes sur 8 agences en France pour intervenir sur tout le cycle de vie des installations nucléaires, de la conception au démantèlement. Ses équipes apportent une expertise pointue en électricité courants forts/faibles, mécanique, génie climatique (HVAC) et contrôle-commande.",
    highlights: [
      "Ingénieurs électricité (CFO/CFA)",
      "Ingénieurs contrôle-commande",
      "Ingénieurs génie mécanique & calculs",
      "Ingénieurs ventilation & génie climatique (HVAC)"
    ]
  },
  {
    id: 135,
    name: "Enedis",
    logo: "/logos/enedis.png",
    sector: "Distribution d'électricité & Réseaux intelligents",
    domain: "Énergie et Environnement",
    yearCreated: 2008,
    location: "Réseau national (95 % du territoire français) & Direction régionale PACA",
    employees: "42 000 collaborateurs",
    website: "https://www.enedis.fr",
    profiles: "Ingénieurs data & IA (Power BI, Copilot, Python), Ingénieurs réseaux électriques & électrotechnique, Chefs de projet raccordement EnR & transition écologique, Ingénieurs sécurité, télécoms & automatismes",
    postTypes: [
      "Alternance",
      "Stage"
    ],
    applicationMethod: "Candidature sur enedis.fr/hub-carriere ; Entretien avec un binôme métier / RH.",
    description: "Gestionnaire du réseau public de distribution d'électricité et entreprise à mission, Enedis modernise et digitalise 1,4 million de km de lignes pour accélérer la transition écologique : raccordement massif des énergies renouvelables, déploiement des mobilités électriques et gestion intelligente des données.",
    highlights: [
      "Ingénieurs data & IA (Power BI, Copilot, Python)",
      "Ingénieurs réseaux électriques & électrotechnique",
      "Chefs de projet raccordement EnR & transition écologique",
      "Ingénieurs sécurité, télécoms & automatismes"
    ]
  },
  {
    id: 136,
    name: "EODD Ingénieurs Conseils",
    logo: "/logos/eodd.png",
    sector: "Conseil & Ingénierie environnementale",
    domain: "Énergie et Environnement",
    yearCreated: 1991,
    location: "13 agences nationales (France métropolitaine et outre-mer)",
    employees: "320 collaborateurs",
    chiffreAffaires: "30 M€",
    website: "https://www.eodd.fr",
    profiles: "Chargés d'études & spécialistes environnement, Chefs de projet transition écologique & énergie, Ingénieurs écoconception & biodiversité, Directeurs d'affaires / projets durables",
    postTypes: [
      "Alternance",
      "CDI",
      "Stage"
    ],
    applicationMethod: "CV + lettre de motivation ; Entretien RH téléphonique ; Entretien opérationnel avec équipes métiers (présentiel/visio).",
    description: "Société à mission et bureau d'études pionnier de la transformation écologique depuis plus de 30 ans, EODD conçoit et déploie des solutions innovantes et concrètes à haute valeur environnementale et sociale pour l'aménagement urbain, la biodiversité, le bas-carbone et l'économie circulaire.",
    highlights: [
      "Chargés d'études & spécialistes environnement",
      "Chefs de projet transition écologique & énergie",
      "Ingénieurs écoconception & biodiversité",
      "Directeurs d'affaires / projets durables"
    ]
  },
  {
    id: 137,
    name: "EP2C Energy",
    logo: "/logos/ep2c-energy.png",
    sector: "Conseil & Ingénierie de l'Énergie",
    domain: "Énergie et Environnement",
    yearCreated: 2014,
    location: "France & International",
    employees: "650 collaborateurs",
    chiffreAffaires: "102 M€",
    website: "https://www.ep2c-energy.com",
    profiles: "Ingénieurs projets énergie & procédés, Business Managers / Ingénieurs d'Affaires, Ingénieurs supervision de chantier & construction",
    postTypes: [
      "CDI",
      "Stage"
    ],
    applicationMethod: "Sélection sur CV ; Parcours d'environ 3 entretiens (visio ou présentiel).",
    description: "Cabinet de conseil en ingénierie spécialisé dans les grands projets industriels et énergétiques complexes, EP2C Energy intervient sur l'ensemble du cycle de vie des projets (conception, gestion de projet, construction). Sa structure dynamique favorise une montée en compétences rapide et des mobilités internationales.",
    highlights: [
      "Ingénieurs projets énergie & procédés",
      "Business Managers / Ingénieurs d'Affaires",
      "Ingénieurs supervision de chantier & construction"
    ]
  },
  {
    id: 138,
    name: "Inddigo",
    logo: "/logos/inddigo.png",
    sector: "Ingénierie & Conseil en transition écologique",
    domain: "Énergie et Environnement",
    yearCreated: 1986,
    location: "Agences à l'échelle nationale (France)",
    employees: "460 collaborateurs",
    chiffreAffaires: "34,9 M€",
    website: "https://www.inddigo.com",
    profiles: "Ingénieurs énergie & décarbonation, Ingénieurs bâtiment durable & environnement, Ingénieurs économie circulaire & déchets, Ingénieurs mobilités douces & transports",
    postTypes: [
      "Alternance",
      "CDD",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Sélection sur CV ; Préqualification ; 2 entretiens (technique métier et RH).",
    description: "Pionnier du développement durable et de l'ingénierie environnementale depuis 1986, Inddigo accompagne territoires et entreprises privées dans leur transition : économie circulaire, gestion des déchets, décarbonation, énergies renouvelables et résilience climatique.",
    highlights: [
      "Ingénieurs énergie & décarbonation",
      "Ingénieurs bâtiment durable & environnement",
      "Ingénieurs économie circulaire & déchets",
      "Ingénieurs mobilités douces & transports"
    ]
  },
  {
    id: 139,
    name: "Pellenc ST",
    logo: "/logos/pellenc-st.png",
    sector: "Industrie",
    domain: "Énergie et Environnement",
    yearCreated: 2001,
    location: "Pertuis (84) / International",
    employees: "330",
    chiffreAffaires: "> 90 M€",
    website: "https://www.pellencst.com",
    profiles: "Conception mécanique & 3D, Ingénieurs méthodes & matériaux, Data / IA / Computer vision, Automatisation & robotique, Génie des procédés",
    postTypes: [
      "Alternance",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Dépôt de CV ; Entretien RH ; Entretien N+1 / N+2 ; Anglais professionnel.",
    description: "Depuis 2001, Pellenc ST conçoit et fabrique en France des équipements de tri intelligents et des services connectés destinés au tri des déchets et à l’industrie du recyclage. Avec un parc installé de plus de 3 500 machines dans le monde entier, l'entreprise s'impose comme un leader technologique reconnu alliant vision, IA et robotique industrielle.",
    highlights: [
      "Conception mécanique & 3D",
      "Ingénieurs méthodes & matériaux",
      "Data / IA / Computer vision",
      "Automatisation & robotique"
    ]
  },
  {
    id: 140,
    name: "Recycle Plastique",
    logo: "/logos/recycle-plastique.png",
    sector: "Recyclage & Économie circulaire",
    domain: "Énergie et Environnement",
    yearCreated: 2019,
    location: "France",
    employees: "3 collaborateurs",
    website: "https://www.recycle-plastique.fr",
    profiles: "Profils engagés & résilients en transition écologique, Génie des matériaux & procédés de valorisation plastique, Gestion de projet environnement & RSE",
    postTypes: [
      "Alternance",
      "Stage"
    ],
    applicationMethod: "Sélection sur CV et lettre de motivation ; Entretien d'équipe.",
    description: "Entreprise engagée dans la transition écologique concrète, Recycle Plastique valorise et recycle les matières plastiques pour répondre aux défis majeurs de l'économie circulaire et préserver les ressources de la planète.",
    highlights: [
      "Profils engagés & résilients en transition écologique",
      "Génie des matériaux & procédés de valorisation plastique",
      "Gestion de projet environnement & RSE"
    ]
  },
  {
    id: 141,
    name: "Cap Ingelec",
    logo: "/logos/cap-ingelec.png",
    sector: "Ingénierie & Bâtiments complexes",
    domain: "BTP et Construction",
    yearCreated: 1992,
    location: "15 agences en France (dont Marseille/Aix) & International",
    employees: "850",
    chiffreAffaires: "680 M€",
    website: "https://www.capingelec.com",
    profiles: "Ingénieurs travaux, Ingénieurs études techniques, Chefs de projets ingénierie, Ingénieurs d'affaires",
    postTypes: [
      "Alternance",
      "CDI",
      "Stage"
    ],
    applicationMethod: "CV + lettre de motivation ; Entretien téléphonique & présentiel ; Anglais opérationnel requis.",
    description: "Groupe d'ingénierie et réalisation spécialisé dans les bâtiments complexes, Cap Ingelec assure des missions clés en main sur des projets d'envergure dans les datacenters, l'énergie et l'industrie, tout en intégrant des démarches concrètes de réduction de l'empreinte environnementale.",
    highlights: [
      "Ingénieurs travaux",
      "Ingénieurs études techniques",
      "Chefs de projets ingénierie",
      "Ingénieurs d'affaires"
    ]
  },
  {
    id: 142,
    name: "Jifmar Offshore Services",
    logo: "/logos/jifmar.png",
    sector: "Transport",
    domain: "Transports et Systèmes embarqués",
    yearCreated: 2005,
    location: "Aix-en-Provence (siège) — International",
    employees: "850",
    chiffreAffaires: "51 M€",
    website: "https://www.jifmar.com",
    profiles: "Chefs de projet maritime, Coordination d'opérations maritimes, Gestion des risques & Planification, Ingénieurs opérations & reporting",
    postTypes: [
      "Alternance",
      "CDI",
      "Stage"
    ],
    applicationMethod: "CV ; 3 entretiens ; Anglais professionnel requis.",
    description: "Leader des services maritimes opérant sur trois continents, Jifmar Group déploie des solutions clés en main d'ingénierie et de travaux maritimes dans les énergies marines renouvelables, l'oil & gas, la défense et l'inspection sous-marine grâce à une flotte innovante.",
    highlights: [
      "Chefs de projet maritime",
      "Coordination d'opérations maritimes",
      "Gestion des risques & Planification",
      "Ingénieurs opérations & reporting"
    ]
  },
  {
    id: 143,
    name: "RTM",
    logo: "/logos/rtm.png",
    sector: "Mobilités & Transports urbains de voyageurs",
    domain: "Transports et Systèmes embarqués",
    yearCreated: 1950,
    location: "Métropole Aix-Marseille-Provence",
    employees: "587 collaborateurs (fonctions cadres/ingénierie)",
    website: "https://www.rtm.fr",
    profiles: "Ingénieurs exploitation & systèmes de transport, Ingénieurs maintenance, matériel roulant & infrastructures, Chefs de projets modernisation, signalisation & billettique, Ingénieurs systèmes d'information & data mobilité",
    postTypes: [
      "CDD",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Candidature sur talents.rtm.fr (CV et lettre de motivation) ; Entretiens individuels ou croisés à Marseille ; Accompagnement et opportunités de mobilité interne.",
    description: "Acteur historique de la mobilité métropolitaine, la RTM conçoit, modernise et exploite le réseau de transports en commun (métro, tramway, bus, transport à la demande) au service des habitants de la métropole d'Aix-Marseille-Provence, avec une politique dynamique d'innovation et d'évolution interne.",
    highlights: [
      "Ingénieurs exploitation & systèmes de transport",
      "Ingénieurs maintenance, matériel roulant & infrastructures",
      "Chefs de projets modernisation, signalisation & billettique",
      "Ingénieurs systèmes d'information & data mobilité"
    ]
  },
  {
    id: 144,
    name: "Doors3",
    logo: "/logos/doors3.png",
    sector: "Conseil tech : IA générative, Blockchain & Web3",
    domain: "Informatique, IT et Média",
    yearCreated: 2022,
    location: "Marseille, Paris, Göteborg (Suède)",
    employees: "9 collaborateurs",
    chiffreAffaires: "1,5 M€",
    website: "https://www.doors3.com",
    profiles: "Consultants IA Générative, Consultants Blockchain & Crypto, Développeurs Full Stack, Business Developers / Sales Tech",
    postTypes: [
      "Alternance",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Dépôt de CV et lettre de motivation ; Entretiens de sélection.",
    description: "Cabinet de conseil en technologies de rupture fondé à Marseille, Doors3 transforme les innovations émergentes (IA générative, blockchain, expériences immersives) en solutions business concrètes, de la vision stratégique au déploiement technique.",
    highlights: [
      "Consultants IA Générative",
      "Consultants Blockchain & Crypto",
      "Développeurs Full Stack",
      "Business Developers / Sales Tech"
    ]
  },
  {
    id: 145,
    name: "STMicroelectronics",
    logo: "/logos/stmicroelectronics.png",
    sector: "Industrie",
    domain: "Informatique, IT et Média",
    yearCreated: 1987,
    location: "Internationale (sites en France : PACA, AURA...)",
    employees: "48 000",
    chiffreAffaires: "11,8 Md $",
    website: "https://www.st.com",
    profiles: "Électronique analogique et numérique, Microélectronique & Systèmes embarqués, Développement logiciel embarqué (C, C++, Python), Conception de circuits intégrés & Validation/test",
    postTypes: [
      "Alternance",
      "Stage"
    ],
    applicationMethod: "CV et lettre de motivation ; Entretien RH ; Entretien Manager.",
    description: "Acteur mondial de premier plan dans le secteur des semi-conducteurs, STMicroelectronics conçoit et fabrique des technologies essentielles qui rendent les objets plus intelligents, connectés et durables. L'entreprise façonne les solutions technologiques de pointe pour l'automobile, l'industrie et l'Internet des objets (IoT).",
    highlights: [
      "Électronique analogique et numérique",
      "Microélectronique & Systèmes embarqués",
      "Développement logiciel embarqué (C, C++, Python)",
      "Conception de circuits intégrés & Validation/test"
    ]
  },
  {
    id: 146,
    name: "Egis",
    logo: "/logos/egis.png",
    sector: "Ingénierie",
    domain: "Ingénierie et Industrie",
    yearCreated: 1970,
    location: "Siège à Paris — Présence dans 100+ pays",
    employees: "24 000",
    chiffreAffaires: "2,5 Md €",
    website: "https://www.egis-group.com",
    profiles: "Ingénieurs génie civil & bâtiment, Ingénieurs transports & mobilités, Ingénieurs énergie & environnement, Data, numérique & management de projet (BIM)",
    postTypes: [
      "Alternance",
      "CDD",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Entretien téléphonique ; Entretien RH ; Entretien opérationnel (étude de cas éventuelle).",
    description: "Acteur international de premier plan de l'ingénierie de la construction, de l'architecture et des services à la mobilité, Egis conçoit des infrastructures intelligentes et durables dans les transports, le bâtiment, l'eau, l'environnement et l'énergie bas-carbone.",
    highlights: [
      "Ingénieurs génie civil & bâtiment",
      "Ingénieurs transports & mobilités",
      "Ingénieurs énergie & environnement",
      "Data, numérique & management de projet (BIM)"
    ]
  },
  {
    id: 147,
    name: "Groupe LGM",
    logo: "/logos/lgm.png",
    sector: "Ingénierie",
    domain: "Ingénierie et Industrie",
    yearCreated: 1991,
    location: "France & International",
    employees: "1 600",
    chiffreAffaires: "170 M€",
    website: "https://www.lgm.fr",
    profiles: "Ingénieurs & Chefs de projet, AMO / PMO / Contract managers, Ingénierie du soutien & MCO, Maîtrise des risques & Ingénierie système",
    postTypes: [
      "CDD",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Candidature avec CV ; 2 étapes en 3 semaines maximum ; Entretiens en visio et sur site.",
    description: "Le groupe LGM conçoit pour les grands groupes industriels des solutions innovantes visant à optimiser les performances des grands systèmes et infrastructures complexes en exploitation et maintenance : sûreté, gestion des risques, ingénierie électronique et logicielle.",
    highlights: [
      "Ingénieurs & Chefs de projet",
      "AMO / PMO / Contract managers",
      "Ingénierie du soutien & MCO",
      "Maîtrise des risques & Ingénierie système"
    ]
  },
  {
    id: 148,
    name: "Groupe REEL",
    logo: "/logos/reel.png",
    sector: "Industrie",
    domain: "Ingénierie et Industrie",
    yearCreated: 1946,
    location: "Siège en France — Présence internationale",
    employees: "3 400",
    chiffreAffaires: "600 M€",
    website: "https://www.reel.fr",
    profiles: "Automatisme & informatique industrielle, Conception & calculs mécaniques, Méthodes industrielles, Chargés d'affaires techniques juniors",
    postTypes: [
      "Alternance",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Sélection CV ; 1 à 3 entretiens techniques et RH.",
    description: "Spécialiste de la conception, de la fabrication et de la maintenance de systèmes de levage et de manutention complexes de haute sécurité, le Groupe REEL intervient au cœur des filières les plus exigeantes : nucléaire, aéronautique, hydroélectricité, énergies marines et aluminium.",
    highlights: [
      "Automatisme & informatique industrielle",
      "Conception & calculs mécaniques",
      "Méthodes industrielles",
      "Chargés d'affaires techniques juniors"
    ]
  },
  {
    id: 149,
    name: "Apec",
    logo: "/logos/apec.png",
    sector: "Conseil & Accompagnement professionnel des cadres",
    domain: "Formation",
    yearCreated: 1960,
    location: "Paris (siège) & centres en région (dont Marseille)",
    employees: "1 200 collaborateurs",
    website: "https://www.apec.fr",
    profiles: "Jeunes diplômés ingénieurs & Bac+5, Consultants en évolution professionnelle, Chargés de relations entreprises & talents",
    postTypes: [
      "Alternance",
      "CDD",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Candidatures et accompagnement via apec.fr.",
    description: "Acteur de référence du marché de l'emploi des cadres et des jeunes diplômés, l'Apec accompagne les ingénieurs et talents de l'enseignement supérieur dans la définition de leur trajectoire professionnelle, tout en conseillant les entreprises dans le sourcing et la réussite de leurs recrutements.",
    highlights: [
      "Jeunes diplômés ingénieurs & Bac+5",
      "Consultants en évolution professionnelle",
      "Chargés de relations entreprises & talents"
    ]
  },
  {
    id: 150,
    name: "AVEC L'INDUSTRIE",
    logo: "/logos/avec-l-industrie.png",
    sector: "Compétences industrielles & OPCO",
    domain: "Autre",
    yearCreated: 2018,
    location: "Échelle nationale (29 branches industrielles)",
    employees: "732 collaborateurs",
    website: "https://www.aveclindustrie.fr",
    profiles: "Tous profils ingénieurs & scientifiques, Alternants & apprentis industriels, Métiers de la production, R&D & maintenance",
    postTypes: [
      "Alternance",
      "CDD",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Orientation vers les branches & entreprises partenaires.",
    description: "Initiative d'OPCO 2i et de 29 branches professionnelles industrielles (chimie, métallurgie, énergies...), Avec l’Industrie® valorise auprès des jeunes talents une industrie moderne, durable et souveraine en finançant la formation, l'alternance et l'évolution des compétences techniques.",
    highlights: [
      "Tous profils ingénieurs & scientifiques",
      "Alternants & apprentis industriels",
      "Métiers de la production, R&D & maintenance"
    ]
  },
  {
    id: 151,
    name: "emlyon business school",
    logo: "/logos/emlyon.png",
    sector: "Enseignement supérieur de management",
    domain: "Formation",
    yearCreated: 1872,
    location: "Lyon & Paris (campus à Shanghai et Mumbai)",
    employees: "500 collaborateurs — 9 375 étudiants",
    chiffreAffaires: "112,5 M€",
    website: "https://em-lyon.com",
    profiles: "Étudiants Bac+3 à Bac+5 & jeunes ingénieurs, Stratégie, management & organisation, Finance, innovation & entrepreneuriat",
    postTypes: [
      "Alternance",
      "Stage"
    ],
    applicationMethod: "Dépôt de CV & dossier de candidature sur le site officiel.",
    description: "Triple accréditée (AACSB, EQUIS, AMBA), emlyon business school figure parmi les plus grandes écoles de commerce européennes. Elle propose plus de 20 programmes de Masters, MSc et Mastères Spécialisés complétant l'expertise scientifique par des compétences managériales et stratégiques.",
    highlights: [
      "Étudiants Bac+3 à Bac+5 & jeunes ingénieurs",
      "Stratégie, management & organisation",
      "Finance, innovation & entrepreneuriat"
    ]
  },
  {
    id: 152,
    name: "ESSCA School of Management",
    logo: "/logos/essca.png",
    sector: "Grande École de Management",
    domain: "Formation",
    yearCreated: 1909,
    location: "10 campus (Aix-en-Provence, Paris, Lyon, Angers, Bordeaux, Budapest, Shanghai...)",
    employees: "500 collaborateurs — 8 000 étudiants",
    website: "https://www.essca.fr",
    profiles: "Profils scientifiques & ingénieurs (admissions parallèles), Finance d'entreprise, audit & conseil, Supply chain, logistique & commerce international, Marketing & entrepreneuriat",
    postTypes: [
      "Alternance"
    ],
    applicationMethod: "Dossier académique ; Entretien individuel de motivation.",
    description: "Triple accréditée (AACSB, AMBA, EQUIS), l'ESSCA forme des managers responsables et ouverts sur le monde. Son Programme Grande École (grade de Master) et ses MSc permettent aux profils scientifiques d'acquérir une expertise ciblée en finance, conseil, supply chain, audit ou entrepreneuriat.",
    highlights: [
      "Profils scientifiques & ingénieurs (admissions parallèles)",
      "Finance d'entreprise, audit & conseil",
      "Supply chain, logistique & commerce international",
      "Marketing & entrepreneuriat"
    ]
  },
  {
    id: 153,
    name: "ESSEC Business School",
    logo: "/logos/essec.png",
    sector: "Grande École de Management",
    domain: "Formation",
    yearCreated: 1907,
    location: "Cergy, Paris-La Défense, Singapour, Rabat",
    employees: "2 000 collaborateurs & enseignants",
    website: "https://www.essec.edu",
    profiles: "Diplômés d'écoles d'ingénieurs (admissions sur titre), Finance, conseil en stratégie & transformation durable, Management de l'innovation & technologies",
    postTypes: [
      "Alternance",
      "Stage"
    ],
    applicationMethod: "Admissions sur titre / Concours ; Dossier académique & épreuves de sélection.",
    description: "Pionnière de l'enseignement supérieur du management et triple accréditée (AACSB, EQUIS, AMBA), l'ESSEC forme des dirigeants éclairés capables d'allier performance économique, créativité et impact sociétal positif grâce à une pédagogie d'excellence ouverte sur le monde.",
    highlights: [
      "Diplômés d'écoles d'ingénieurs (admissions sur titre)",
      "Finance, conseil en stratégie & transformation durable",
      "Management de l'innovation & technologies"
    ]
  },
  {
    id: 154,
    name: "IAE Aix",
    logo: "/logos/iae-aix.png",
    sector: "Enseignement supérieur de management & IAE",
    domain: "Formation",
    yearCreated: 1955,
    location: "Aix-en-Provence (13)",
    employees: "80 collaborateurs",
    website: "https://iae-aix.univ-amu.fr",
    profiles: "Élèves et diplômés ingénieurs (double compétence), Management général & Pilotage stratégique, Gestion de projet complexe & Leadership",
    postTypes: [
      "Alternance"
    ],
    applicationMethod: "Candidature en ligne (gomovein) ; Admissibilité sur dossier académique (CV, LM) ; Entretien de sélection.",
    description: "Composante universitaire d'excellence inspirée des business schools américaines, l’IAE Aix conjugue tradition et innovation managériale. Son programme MSc en Management Général prépare les profils scientifiques et ingénieurs à des carrières à haut potentiel, alliant agilité, leadership et vision stratégique transversale.",
    highlights: [
      "Élèves et diplômés ingénieurs (double compétence)",
      "Management général & Pilotage stratégique",
      "Gestion de projet complexe & Leadership"
    ]
  },
  {
    id: 155,
    name: "ISAE-SUPAERO",
    logo: "/logos/isae-supaero.png",
    sector: "Enseignement supérieur — Aéronautique & Espace",
    domain: "Formation",
    yearCreated: 1909,
    location: "Campus de 22 ha à Toulouse (31)",
    employees: "1 900 étudiants & chercheurs",
    website: "https://www.isae-supaero.fr",
    profiles: "Élèves ingénieurs & diplômés Bac+5 (M2, ingénieur), Conception aéronautique, propulsion & systèmes spatiaux, Systèmes embarqués critiques, drones (UAV) & robotique, Essais en vol, certification, data & IA appliquée",
    postTypes: [
      "Alternance",
      "Stage"
    ],
    applicationMethod: "Dossier de candidature en ligne (candidatures.tsaae.fr) ; Sélection sur dossier académique.",
    description: "Référence mondiale de la formation des ingénieurs du secteur aérospatial, l'ISAE-SUPAERO dispose d'infrastructures de recherche uniques (souffleries, flotte de 9 avions, simulateurs, centre spatial étudiant). Elle propose 16 Mastères Spécialisés® conçus avec les industriels du secteur.",
    highlights: [
      "Élèves ingénieurs & diplômés Bac+5 (M2, ingénieur)",
      "Conception aéronautique, propulsion & systèmes spatiaux",
      "Systèmes embarqués critiques, drones (UAV) & robotique",
      "Essais en vol, certification, data & IA appliquée"
    ]
  },
  {
    id: 156,
    name: "ISEN Méditerranée",
    logo: "/logos/isen.png",
    sector: "Grande École d'Ingénieurs — Numérique & Technologies",
    domain: "Formation",
    location: "Campus à Marseille (Château-Gombert) & Toulon",
    employees: "Non communiqué",
    website: "https://www.isen-mediterranee.fr",
    profiles: "Étudiants scientifiques Bac+2 à Bac+6, Ingénierie logicielle, IA & Cybersécurité, Systèmes embarqués, robotique & IoT, Smart energy & e-santé",
    postTypes: [
      "Alternance",
      "Stage"
    ],
    applicationMethod: "Candidature en ligne via isen-mediterranee.fr ; Admissions sur dossier et concours.",
    description: "Grande école d'ingénieurs habilitée CTI, l'ISEN Méditerranée forme des ingénieurs experts des transformations technologiques : IA, cybersécurité, systèmes embarqués, robotique, objets connectés et smart energy. Ancrée à Château-Gombert, elle favorise l'immersion terrain par une pédagogie par projets et l'apprentissage.",
    highlights: [
      "Étudiants scientifiques Bac+2 à Bac+6",
      "Ingénierie logicielle, IA & Cybersécurité",
      "Systèmes embarqués, robotique & IoT",
      "Smart energy & e-santé"
    ]
  },
  {
    id: 157,
    name: "KEDGE Business School",
    logo: "/logos/kedge.png",
    sector: "Grande École de Management",
    domain: "Formation",
    yearCreated: 2014,
    location: "Marseille, Toulon, Bordeaux, Paris",
    employees: "600 collaborateurs — 23 000 étudiants",
    website: "https://kedge.edu",
    profiles: "Étudiants ingénieurs Bac+3 à Bac+5 (double diplôme / MS), Leadership, négociation & stratégie, Supply chain, gestion de projet & business development",
    postTypes: [
      "Alternance"
    ],
    applicationMethod: "Candidature en ligne (join.kedge.edu) ; CV, bulletins, diplômes ; Entretien de motivation.",
    description: "Dotée de la prestigieuse triple accréditation internationale (AACSB, EQUIS, AMBA), KEDGE Business School forme des leaders agiles et responsables. Elle propose des doubles compétences stratégiques aux élèves ingénieurs désireux de renforcer leur maîtrise du management et de l'entrepreneuriat.",
    highlights: [
      "Étudiants ingénieurs Bac+3 à Bac+5 (double diplôme / MS)",
      "Leadership, négociation & stratégie",
      "Supply chain, gestion de projet & business development"
    ]
  },
  {
    id: 158,
    name: "Amnesty International",
    logo: "/logos/amnesty-international.png",
    sector: "Défense des droits humains & ONG",
    domain: "Autre",
    yearCreated: 2022,
    location: "France & International",
    employees: "Non communiqué",
    website: "https://www.amnesty.fr",
    profiles: "Tous profils engagés, Plaidoyer, recherche & communication, Gestion de projets associatifs & mobilisation",
    postTypes: [
      "Stage"
    ],
    applicationMethod: "Candidature via le site officiel amnesty.fr ; Entretien de motivation.",
    description: "Mouvement mondial et indépendant, Amnesty International œuvre pour le respect de l'ensemble des droits énoncés dans la Déclaration universelle des droits de l'homme. L'organisation mène des recherches de terrain, sensibilise le public et engage des actions de plaidoyer pour prévenir et faire cesser les atteintes graves aux libertés fondamentales.",
    highlights: [
      "Tous profils engagés",
      "Plaidoyer, recherche & communication",
      "Gestion de projets associatifs & mobilisation"
    ]
  },
  {
    id: 159,
    name: "COCA-COLA EUROPACIFIC PARTNERS",
    logo: "/logos/ccep.png",
    sector: "Agroalimentaire & Biens de consommation",
    domain: "Autre",
    location: "Présence dans 31 pays (usines et sites logistiques en France)",
    employees: "39 000 collaborateurs",
    website: "https://www.cocacolaep.com",
    profiles: "Étudiants et diplômés niveau Master / Ingénieur, Ingénieurs production & excellence opérationnelle, Supply chain, logistique & maintenance industrielle, Qualité, sécurité alimentaire & RSE",
    postTypes: [
      "Alternance",
      "CDD",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Sélection sur CV ; Entretiens de recrutement.",
    description: "Coca-Cola Europacific Partners (CCEP) embouteille, commercialise et distribue les boissons les plus emblématiques au monde auprès de 600 millions de consommateurs. Acteur industriel de premier plan, le groupe investit dans les technologies de pointe, la supply chain agile et la transition écologique des emballages.",
    highlights: [
      "Étudiants et diplômés niveau Master / Ingénieur",
      "Ingénieurs production & excellence opérationnelle",
      "Supply chain, logistique & maintenance industrielle",
      "Qualité, sécurité alimentaire & RSE"
    ]
  },
  {
    id: 160,
    name: "EMIS et EMIS Access",
    logo: "/logos/emis.png",
    sector: "Maintenance industrielle & Métallurgie",
    domain: "Ingénierie et Industrie",
    yearCreated: 1987,
    location: "Vitrolles (13)",
    employees: "170 collaborateurs",
    chiffreAffaires: "≈ 47 M€",
    website: "https://www.ponticelli.com",
    profiles: "Ingénieurs qualité soudage, Ingénieurs travaux & conducteurs de travaux, Ingénieurs HSE, Ingénieurs études & méthodes",
    postTypes: [
      "Alternance",
      "CDI",
      "Stage"
    ],
    applicationMethod: "CV + lettre de motivation ; Entretiens de recrutement.",
    description: "Filiales du groupe Ponticelli Frères, EMIS et EMIS ACCESS accompagnent les grands donneurs d'ordre industriels en maintenance, mécanique, métallurgie, nettoyage industriel, accès et calorifuge, au service des filières vitales de l'énergie, de l'eau et de la santé.",
    highlights: [
      "Ingénieurs qualité soudage",
      "Ingénieurs travaux & conducteurs de travaux",
      "Ingénieurs HSE",
      "Ingénieurs études & méthodes"
    ]
  },
  {
    id: 161,
    name: "France Chimie Méditerranée",
    logo: "/logos/france-chimie-mediterranee.png",
    sector: "Fédération professionnelle / Chimie",
    domain: "Autre",
    yearCreated: 1901,
    location: "Régions PACA, Corse et Occitanie Est",
    employees: "Représente +800 entreprises & 25 000 salariés",
    chiffreAffaires: "Fédération (S.O.)",
    website: "https://www.francechimie-mediterranee.fr",
    profiles: "Ingénieurs procédés chimiques, Chimie des matériaux & formulation, HSE & Sécurité industrielle, Transition énergétique & décarbonation",
    postTypes: [
      "CDD",
      "CDI"
    ],
    applicationMethod: "CV + lettre de motivation ; Mise en relation filière.",
    description: "Organisation professionnelle de référence, France Chimie Méditerranée représente et accompagne l'ensemble de la filière chimique en PACA, Corse et Occitanie Est. Elle valorise les opportunités d'emploi, la transition écologique et l'innovation au cœur d'un tissu industriel régional stratégique.",
    highlights: [
      "Ingénieurs procédés chimiques",
      "Chimie des matériaux & formulation",
      "HSE & Sécurité industrielle",
      "Transition énergétique & décarbonation"
    ]
  },
  {
    id: 162,
    name: "NAOS",
    logo: "/logos/naos.png",
    sector: "Dermocosmétique & Écobiologie",
    domain: "Énergie et Environnement",
    yearCreated: 1977,
    location: "Siège à Aix-en-Provence, Lyon, Paris & International (130 pays)",
    employees: "3 500 collaborateurs",
    chiffreAffaires: "900 M€",
    website: "https://www.naos.com",
    profiles: "Ingénieurs R&D formulation & Chimie du vivant, Ingénieurs procédés industriels, Packaging & Qualité, Supply chain, Achats & Opérations internationales, Marketing scientifique, Business & Fonctions supports",
    postTypes: [
      "Alternance",
      "CDD",
      "CDI",
      "Stage"
    ],
    applicationMethod: "Candidature sur careers.naos.com ; Échange RH ; Entretien manager & experts métiers.",
    description: "Entreprise à mission et créatrice des marques Bioderma, Institut Esthederm et État Pur, NAOS développe une approche scientifique pionnière : l'écobiologie, qui respecte l'écosystème cutané. Détenue par un fonds de dotation dédié au développement du potentiel humain, l'entreprise investit activement dans la R&D, l'industrie responsable et le soin du vivant.",
    highlights: [
      "Ingénieurs R&D formulation & Chimie du vivant",
      "Ingénieurs procédés industriels, Packaging & Qualité",
      "Supply chain, Achats & Opérations internationales",
      "Marketing scientifique, Business & Fonctions supports"
    ]
  },
];

export const allExposants = [parrain, ...partenaires.filter((partner) => !partner.partnerOnly), ...exposantsList].sort((a, b) =>
  a.name.localeCompare(b.name, "fr")
);

