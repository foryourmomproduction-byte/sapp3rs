import madyard from "@/assets/project-madyard.jpg";
import olicrom from "@/assets/project-olicrom.png";
import born4more from "@/assets/project-born4more.jpg";
import smart from "@/assets/project-smart.jpg";
import onair from "@/assets/project-onair.jpg";
import fitnesspark from "@/assets/project-fitnesspark.jpg";
import takeControlThumbnail from "@/assets/projects/take-control/vlog-thumbnail.jpg";

import madyard1 from "@/assets/projects/madyard/1.jpg";
import madyard2 from "@/assets/projects/madyard/2.jpg";
import madyard3 from "@/assets/projects/madyard/3.jpg";
import madyard4 from "@/assets/projects/madyard/4.jpg";
import madyard5 from "@/assets/projects/madyard/5.jpg";

import olicrom1 from "@/assets/projects/olicrom/1.jpg";
import olicrom2 from "@/assets/projects/olicrom/2.jpg";
import olicrom3 from "@/assets/projects/olicrom/3.jpg";
import olicrom4 from "@/assets/projects/olicrom/4.jpg";
import olicromVideo from "@/assets/projects/olicrom/video.mp4";

export type ProjectMedia = {
  type:
    | "image"
    | "video"
    | "youtube"
    | "youtube-link"
    | "instagram";
  src: string;
  alt?: string;
  poster?: string;
  title?: string;
  thumbnail?: string;
};


export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  cover: string;
  heroImages?: string[];
  media?: ProjectMedia[];
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

  heroImages: [
    madyard1,
    madyard2,
    madyard3,
    madyard4,
    madyard5,
  ],

  context:
    "Un événement sportif jeune, en pleine construction de son identité visuelle, avec peu d'images exploitables pour communiquer sur ses prochaines éditions.",
  response:
    "J'ai couvert l'événement de bout en bout : départ, effort, ambiance, moments humains, arrivée. L'objectif : constituer une bibliothèque d'images cohérente et immédiatement réutilisable.",
  result:
    "Une banque d'images propriétaire, utilisable sur l'ensemble des supports de communication et pour promouvoir les éditions à venir.",
  deliverables: [
    "Couverture événementielle",
    "Banque d'images",
    "Contenus réseaux sociaux",
  ],
},
  {
  slug: "olicrom",
  title: "OLICROM",
  client: "Olicrom",
  category: "Photographie • Vidéo • Création de contenu",
  cover: olicrom,

  media: [
  {
    type: "video",
    src: olicromVideo,
  },
  {
    type: "image",
    src: olicrom1,
  },
  {
    type: "image",
    src: olicrom2,
  },
  {
    type: "image",
    src: olicrom3,
  },
  {
    type: "image",
    src: olicrom4,
  },
],

  context:
    "Olicrom souhaitait mettre en avant sa technologie CableQuad à travers une étude de cas réalisée au sein d'une salle On Air Fitness. L'objectif était de montrer les équipements en situation réelle, de valoriser leur utilisation par les sportifs et de produire des contenus capables de soutenir la communication de la marque auprès de ses clients et partenaires.",

    response:
  "J'ai assuré l'ensemble de la production audiovisuelle, de la préparation du tournage à la captation des équipements en situation réelle. Des plans d'ambiance et des séquences mettant en valeur les athlètes ont été réalisés afin d'illustrer l'utilisation de la technologie dans un contexte concret. L'ensemble a ensuite été monté avec une approche cinématographique pour raconter une histoire autour de la technologie, plutôt que de simplement présenter un produit.",

  result:
    "Le projet a permis à Olicrom de disposer d'une vidéo de cas client ainsi que d'une bibliothèque de photographies et de vidéos réutilisables sur son site internet, ses réseaux sociaux et lors d'événements professionnels comme le salon FIBO, renforçant ainsi la crédibilité de la marque auprès de ses futurs clients.",

  deliverables: [
    "Film promotionnel",
    "Photographies",
    "Contenus réseaux sociaux",
  ],
},
  {
  slug: "take-control",
  title: "Take Control",
  client: "Take Control",
  category: "Création de contenu",
  cover: takeControlThumbnail,

 media: [
  {
  type: "youtube-link",
  src: "https://youtu.be/VFPLG98hx_0",
  thumbnail: takeControlThumbnail,
  title: "Vlog YouTube — Take Control",
},
  {
    type: "instagram",
    src: "https://www.instagram.com/reel/DWr6Bz1jC1B/embed/",
    title: "Réel Instagram — Take Control",
  },
  {
    type: "instagram",
    src: "https://www.instagram.com/p/DWzeKKODHMX/embed/",
    title: "Publication Instagram — Take Control",
  },
  {
    type: "instagram",
    src: "https://www.instagram.com/reel/DYWrOgEq9gq/embed/",
    title: "Réel Instagram — Take Control",
  },
  {
    type: "instagram",
    src: "https://www.instagram.com/reel/DaMzWiGBZqY/embed/",
    title: "Réel Instagram — Take Control",
  },
],

  context:
    "Un client à forte présence terrain, mais disposant de peu de temps pour produire régulièrement du contenu destiné aux réseaux sociaux.",

  response:
    "J'ai pris en charge la création des contenus vidéo destinés aux réseaux sociaux, avec une approche axée sur le storytelling, le rythme et la régularité de publication. Des formats courts pour Instagram aux vlogs YouTube, chaque contenu a été pensé pour capter l'attention, transmettre un message clair et renforcer l'identité de la marque.",

  result:
    "Une présence plus régulière sur Instagram et YouTube, accompagnée d'une progression du nombre de vues et d'abonnés. Le travail de storytelling et de rythme, notamment sur les formats vlog, a permis de rendre les contenus plus captivants et de maintenir l'attention de l'audience.",

  deliverables: [
    "Réels Instagram",
    "Vlog YouTube",
    "Contenus face caméra",
  ],
},
  {
    slug: "smart-investment",
    title: "SMART INVESTMENT",
    client: "Smart Investment",
    category: "Podcast • Captation • Montage",
    cover: smart,
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