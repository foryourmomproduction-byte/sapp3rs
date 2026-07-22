import madyard from "@/assets/project-madyard.jpg";
import olicrom from "@/assets/project-olicrom.jpg";
import born4more from "@/assets/project-born4more.jpg";
import takecontrol from "@/assets/project-takecontrol.jpg";
import smart from "@/assets/project-smart.jpg";
import onair from "@/assets/project-onair.jpg";
import fitnesspark from "@/assets/project-fitnesspark.jpg";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  cover: string;
  year: string;
  context: string;
  response: string;
  result: string;
  deliverables: string[];
};

export const projects: Project[] = [
  {
    slug: "madyard",
    title: "MAD'YARD",
    client: "MAD'YARD",
    category: "Photographie • Création de contenu",
    cover: madyard,
    year: "2025",
    context:
      "Un événement sportif jeune, en pleine construction de son identité visuelle, avec peu d'images exploitables pour communiquer sur ses prochaines éditions.",
    response:
      "J'ai couvert l'événement de bout en bout : départ, effort, ambiance, moments humains, arrivée. L'objectif : constituer une bibliothèque d'images cohérente et immédiatement réutilisable.",
    result:
      "Une banque d'images propriétaire, utilisable sur l'ensemble des supports de communication et pour promouvoir les éditions à venir.",
    deliverables: ["Reportage photo", "Banque d'images", "Contenus réseaux"],
  },
  {
    slug: "olicrom",
    title: "OLICROM",
    client: "Olicrom",
    category: "Photographie • Vidéo • Création de contenu",
    cover: olicrom,
    year: "2025",
    context:
      "Une marque d'équipements techniques qui souhaite mettre en valeur ses machines dans un environnement réel, au-delà d'un simple catalogue produit.",
    response:
      "J'ai construit une série photo et vidéo mêlant détails techniques, plans d'usage et athlètes en situation, avec un traitement cinématographique.",
    result:
      "Des contenus premium exploitables pour les salons professionnels, le site et les réseaux sociaux.",
    deliverables: ["Photographies produit", "Vidéos cinématographiques", "Contenus sociaux"],
  },
  {
    slug: "born4more",
    title: "BORN4MORE",
    client: "Born4More",
    category: "Photographie • Vidéo • Accompagnement",
    cover: born4more,
    year: "2024 — 2026",
    context:
      "Une collaboration régulière autour du sport, des athlètes et des événements de la marque.",
    response:
      "J'accompagne la marque sur la durée : campagnes, portraits d'athlètes, couvertures d'événements. Un langage visuel construit dans le temps.",
    result:
      "Une identité visuelle reconnaissable, alimentée en continu, avec une vraie cohérence d'image saison après saison.",
    deliverables: ["Portraits athlètes", "Campagnes", "Événements"],
  },
  {
    slug: "take-control",
    title: "TAKE CONTROL",
    client: "Take Control",
    category: "Création de contenu • Réels • Vlog",
    cover: takecontrol,
    year: "2025",
    context:
      "Un client à forte présence terrain, mais peu de temps pour produire du contenu régulier destiné aux réseaux sociaux.",
    response:
      "Je prends en charge la production de contenus courts : réels, face caméra, formats vlog. Une cadence régulière, un ton constant.",
    result:
      "Une présence sociale continue, sans charge de production côté client.",
    deliverables: ["Réels", "Face caméra", "Formats vlog"],
  },
  {
    slug: "smart-investment",
    title: "SMART INVESTMENT",
    client: "Smart Investment",
    category: "Podcast • Captation • Montage",
    cover: smart,
    year: "2025",
    context:
      "Un podcast à structurer, du tournage à la diffusion, avec l'objectif d'exploiter chaque épisode sur plusieurs canaux.",
    response:
      "Je gère la captation, le montage et la déclinaison de chaque épisode en formats courts pour les réseaux.",
    result:
      "Un podcast tourné efficacement, découpé en contenus multiples, prêt à être diffusé.",
    deliverables: ["Captation multicam", "Montage épisode", "Formats courts"],
  },
  {
    slug: "on-air",
    title: "ON AIR",
    client: "On Air",
    category: "Photographie • Vidéo • Partenariat",
    cover: onair,
    year: "2025",
    context:
      "Une salle premium qui souhaite mettre en avant ses équipements, ses athlètes et l'univers de la marque.",
    response:
      "Un traitement cinématographique de l'espace, des équipements et des personnes qui l'habitent au quotidien.",
    result:
      "Des contenus qui traduisent le positionnement premium de la salle, utilisables sur tous les canaux.",
    deliverables: ["Photographies lieu", "Vidéos ambiance", "Portraits athlètes"],
  },
  {
    slug: "fitness-park",
    title: "FITNESS PARK",
    client: "Fitness Park",
    category: "Photographie • Mise en valeur d'un espace",
    cover: fitnesspark,
    year: "2024",
    context:
      "Un lieu à faire exister en images : son architecture, ses équipements, son ambiance.",
    response:
      "Une série architecturale mettant en scène la salle, ses volumes et ses détails.",
    result:
      "Des images fortes, cohérentes avec l'identité de l'enseigne, utilisables sur l'ensemble des supports.",
    deliverables: ["Reportage lieu", "Détails équipements", "Ambiance"],
  },
];

export const collaborations = [
  "MAD'YARD",
  "ON AIR",
  "OLICROM",
  "BORN4MORE",
  "FITNESS PARK",
  "SMART INVESTMENT",
  "TAKE CONTROL",
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);