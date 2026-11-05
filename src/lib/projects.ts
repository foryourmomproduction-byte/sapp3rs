const madyard = "/assets/optimized/project-madyard.jpg";
const olicrom = "/assets/optimized/project-olicrom.jpg";
const born4more = "/assets/optimized/project-born4more.jpg";
const smart = "/assets/optimized/project-smart.jpg";
const fitnesspark = "/assets/optimized/project-fitnesspark.jpg";
const simonDelsalle = "/assets/optimized/projects/simon-delsalle/7.jpg";
const takeControlThumbnail = "/assets/optimized/projects/take-control/vlog-thumbnail.jpg";

const madyard1 = "/assets/optimized/projects/madyard/1.jpg";
const madyard2 = "/assets/optimized/projects/madyard/2.jpg";
const madyard3 = "/assets/optimized/projects/madyard/3.jpg";
const madyard4 = "/assets/optimized/projects/madyard/4.jpg";
const madyard5 = "/assets/optimized/projects/madyard/5.jpg";

const olicrom1 = "/assets/optimized/projects/olicrom/1.jpg";
const olicrom2 = "/assets/optimized/projects/olicrom/2.jpg";
const olicrom3 = "/assets/optimized/projects/olicrom/3.jpg";
const olicrom4 = "/assets/optimized/projects/olicrom/4.jpg";

const smartTalks1 = "/assets/optimized/projects/smart-investment/smart-talks-1.jpg";
const smartTalks2 = "/assets/optimized/projects/smart-investment/smart-talks-2.jpg";
const smartTalks3 = "/assets/optimized/projects/smart-investment/smart-talks-3.jpg";

const born4more2 = "/assets/optimized/projects/born4more/born4more-2.jpg";
const born4more3 = "/assets/optimized/projects/born4more/born4more-3.jpg";
const born4more4 = "/assets/optimized/projects/born4more/born4more-4.jpg";
const born4more5 = "/assets/optimized/projects/born4more/born4more-5.jpg";

const fitnesspark1 = "/assets/optimized/projects/fitness-park/fitnesspark-1.jpg";
const fitnesspark2 = "/assets/optimized/projects/fitness-park/fitnesspark-2.jpg";
const fitnesspark3 = "/assets/optimized/projects/fitness-park/fitnesspark-3.jpg";
const fitnesspark4 = "/assets/optimized/projects/fitness-park/fitnesspark-4.jpg";

const simonDelsalle5 = "/assets/optimized/projects/simon-delsalle/5.jpg";
const simonDelsalle7 = "/assets/optimized/projects/simon-delsalle/7.jpg";
const simonDelsalle13 = "/assets/optimized/projects/simon-delsalle/13.jpg";
const simonDelsalle24 = "/assets/optimized/projects/simon-delsalle/24.jpg";
const simonDelsalle45 = "/assets/optimized/projects/simon-delsalle/45.jpg";

const brokenRace1 = "/assets/optimized/projects/broken-race/1.jpg";
const brokenRace2 = "/assets/optimized/projects/broken-race/2.jpg";
const brokenRace3 = "/assets/optimized/projects/broken-race/3.jpg";
const brokenRace4 = "/assets/optimized/projects/broken-race/4.jpg";
const brokenRace5 = "/assets/optimized/projects/broken-race/5.jpg";

const jamesDocumentaryCover =
  "/assets/optimized/projects/james-documentary/james-documentary-cover.jpg";
const missionRun1 = "/assets/optimized/projects/james-documentary/mission-run-1.jpg";
const missionRun2 = "/assets/optimized/projects/james-documentary/mission-run-2.jpg";
const missionRun3 = "/assets/optimized/projects/james-documentary/mission-run-3.jpg";
const missionRun4 = "/assets/optimized/projects/james-documentary/mission-run-4.jpg";
const missionRun5 = "/assets/optimized/projects/james-documentary/mission-run-5.jpg";

const olicromThumbnail = "/assets/optimized/projects/olicrom/olicrom-thumbnail.jpg";

const fourvierePanorama = "/assets/optimized/projects/fourviere-panorama/fourviere-panorama.jpg";

const reunionCover = "/assets/optimized/projects/reunion/reunion-cover.jpg";
const reunion1 = "/assets/optimized/projects/reunion/reunion-1.jpg";
const reunion2 = "/assets/optimized/projects/reunion/reunion-2.jpg";
const reunion3 = "/assets/optimized/projects/reunion/reunion-3.jpg";
const reunion4 = "/assets/optimized/projects/reunion/reunion-4.jpg";
const reunion5 = "/assets/optimized/projects/reunion/reunion-5.jpg";
const reunion6 = "/assets/optimized/projects/reunion/reunion-6.jpg";

const tatianaCover = "/assets/optimized/projects/utmb-nice-tatiana/nice-100m-start-area.jpg";
const tatianaCourse = "/assets/optimized/projects/utmb-nice-tatiana/tatiana-course.jpg";
const tatianaPortrait = "/assets/optimized/projects/utmb-nice-tatiana/tatiana-portrait.jpg";
const tatianaCourseMoment = "/assets/optimized/projects/utmb-nice-tatiana/tatiana-course-moment.jpg";
const tatianaArrivalArea = "/assets/optimized/projects/utmb-nice-tatiana/tatiana-arrival-area.jpg";

const immersiveCover = "/assets/optimized/projects/immersive/2.jpg";
const immersive1 = "/assets/optimized/projects/immersive/1.jpg";
const immersive2 = "/assets/optimized/projects/immersive/2.jpg";
const immersive3 = "/assets/optimized/projects/immersive/3.jpg";
const immersive4 = "/assets/optimized/projects/immersive/4.jpg";
const immersive5 = "/assets/optimized/projects/immersive/5.jpg";
const immersiveVideoPoster = "/assets/optimized/projects/immersive/video-poster.jpg";

export type ProjectMedia = {
  type: "image" | "video" | "youtube" | "youtube-link" | "instagram" | "instagram-link";
  src: string;
  alt?: string;
  poster?: string;
  autoPlay?: boolean;
  preload?: "none" | "metadata" | "auto";
  title?: string;
  thumbnail?: string;
  fit?: "cover" | "contain";
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  cover: string;
  mediaAspect?: "landscape" | "portrait";
  heroImages?: string[];
  media?: ProjectMedia[];
  context: string;
  response: string;
  result: string;
  deliverables: string[];
};

export const projects: Project[] = [
  {
    slug: "nice-cote-dazur-by-utmb-tatiana",
    title: "NICE CÔTE D’AZUR BY UTMB",
    client: "Tatiana",
    category: "Photographie sportive • Accréditation UTMB",
    cover: tatianaCover,
    media: [
      {
        type: "instagram-link",
        src: "https://www.instagram.com/p/DfU2291qRgi/",
        thumbnail: tatianaCover,
        title: "Reel documentaire — Tatiana, 100M UTMB",
      },
      { type: "image", src: tatianaCover, alt: "Tatiana au cœur de Nice Côte d’Azur by UTMB" },
      { type: "image", src: tatianaCourse, alt: "Tatiana sur le parcours du 100M" },
      { type: "image", src: tatianaPortrait, alt: "Portrait de Tatiana pendant la course" },
      { type: "image", src: tatianaCourseMoment, alt: "Tatiana pendant sa traversée de l’UTMB Nice Côte d’Azur" },
      { type: "image", src: tatianaArrivalArea, alt: "Un autre moment du parcours de Tatiana" },
    ],
    context:
      "Accrédité par Nice Côte d’Azur by UTMB®, j’ai accompagné l’athlète Tatiana sur le format 100M. L’intention : raconter, à travers son expérience, la traversée de l’épreuve et ce qu’elle représente pour les femmes engagées sur cette distance.",
    response:
      "J’ai suivi Tatiana sur le terrain et réalisé une série de photographies au fil de son parcours. Ces images composent un récit documentaire consacré à la course au féminin, prolongé par un reel publié sur Instagram.",
    result:
      "Un reportage photo et un reel documentaire réalisés dans le cadre de mon accréditation UTMB, au plus près de l’expérience de Tatiana sur le 100M.",
    deliverables: ["Photographie sportive", "Accréditation UTMB", "Reel Instagram"],
  },
  {
    slug: "immersive",
    title: "IMMERSIVE",
    client: "Immersive",
    category: "Photographie • Vidéo • Banque d’images",
    cover: immersiveCover,
    media: [
      {
        type: "video",
        src: "/videos/immersive-free.mp4",
        poster: immersiveVideoPoster,
        title: "Immersive — L’Aiguille Verte",
        autoPlay: false,
        preload: "none",
      },
      { type: "image", src: immersive1, alt: "Une participante pendant l’immersion en montagne", fit: "contain" },
      { type: "image", src: immersive2, alt: "Les participants progressent sur le sentier de montagne", fit: "contain" },
      { type: "image", src: immersive3, alt: "Le groupe en randonnée sur un sentier alpin", fit: "contain" },
      { type: "image", src: immersive4, alt: "Portrait d’une participante en montagne", fit: "contain" },
      { type: "image", src: immersive5, alt: "Un autre moment de l’expérience Immersive", fit: "contain" },
    ],

    context:
      "Pour le lancement d’Immersive, une expérience gratuite en montagne a été proposée à dix personnes. L’équipe souhaitait constituer une banque d’images photo et vidéo pour raconter l’expérience et faire découvrir les activités proposées.",

    response:
      "J’ai été sollicité comme photographe et filmmaker pour documenter l’expérience et créer cette banque de contenus. En complément, j’ai réalisé un reel vidéo autour des activités, avec notamment l’ascension de l’Aiguille Verte, en Haute-Savoie.",

    result:
      "Une banque d’images photo et vidéo destinée à la communication d’Immersive, complétée par un reel qui met en lumière les activités et l’expérience vécue en montagne.",

    deliverables: ["Photographie", "Banque d’images", "Vidéo", "Reel"],
  },

  {
    slug: "antoine-malecot-broken-race",
    title: "BROKEN RACE",
    client: "Antoine Malecot",
    category: "Photographie sportive • Réels Instagram",
    cover: brokenRace5,

    media: [
      {
        type: "instagram-link",
        src: "https://www.instagram.com/antoine_malecot/reel/DdJyYFxNueU/",
        thumbnail: brokenRace5,
        title: "Dream Big — ouverture de la série",
      },
      {
        type: "instagram-link",
        src: "https://www.instagram.com/antoine_malecot/reel/Dd6zLQxtx4V/",
        thumbnail: brokenRace1,
        title: "Broken Race — épisode 1",
      },
      {
        type: "instagram-link",
        src: "https://www.instagram.com/antoine_malecot/reel/DelQz7LtqbB/",
        thumbnail: brokenRace2,
        title: "Broken Race — épisode 2",
      },
      {
        type: "instagram-link",
        src: "https://www.instagram.com/antoine_malecot/reel/DezaeAetVr_/",
        thumbnail: brokenRace3,
        title: "Broken Race — épisode 5, le départ",
      },
      {
        type: "instagram-link",
        src: "https://www.instagram.com/antoine_malecot/reel/DfC6VoGNqJY/",
        thumbnail: brokenRace4,
        title: "Broken Race — épisode 3",
      },
      {
        type: "instagram-link",
        src: "https://www.instagram.com/antoine_malecot/reel/DfITgqTNRNl/",
        thumbnail: brokenRace5,
        title: "Broken Race — épisode 4, la finale",
      },
      { type: "image", src: brokenRace1, alt: "Le groupe se rassemble avant le départ" },
      { type: "image", src: brokenRace2, alt: "Un moment de soutien entre participants" },
      { type: "image", src: brokenRace3, alt: "Un coureur équipé de sa lampe frontale" },
      { type: "image", src: brokenRace4, alt: "Détail des chaussures sur le terrain" },
      {
        type: "image",
        src: brokenRace5,
        alt: "Un coureur avance dans la nuit, lampe frontale allumée",
      },
    ],

    context:
      "À l’occasion de la Broken Race, Antoine Malecot a pris part à une aventure sportive et solidaire au profit de l’association Les Étoiles de Gaby. Le projet suit cette expérience sur le terrain, de l’élan initial au départ, puis jusqu’à la finale, en mêlant effort, esprit d’équipe et moments de partage.",

    response:
      "J’ai réalisé un reportage photo pendant la compétition et accompagné le récit du projet avec une série de six réels Instagram en collaboration avec Antoine. Les vidéos — Dream Big, épisodes 1, 2, 5 (le départ), 3 et 4 (la finale) — retracent les temps forts de l’aventure dans l’ordre souhaité, avec des visuels conçus pour renvoyer directement vers Instagram.",

    result:
      "Un récit photo et vidéo qui restitue l’intensité de la course et la dimension collective de l’événement. Les cinq photographies sélectionnées forment une banque d’images complémentaire aux six réels publiés sur Instagram.",

    deliverables: ["Photographie sportive", "Banque d’images", "6 réels Instagram"],
  },

  {
    slug: "simon-delsalle",
    title: "SIMON DELSALLE",
    client: "Simon Delsalle",
    category: "Photographie sportive • Reel Instagram",
    cover: simonDelsalle,
    mediaAspect: "portrait",

    media: [
      {
        type: "video",
        src: "/videos/simon-delsalle-reel.mp4",
        poster: simonDelsalle,
        title: "Simon Delsalle — Reel Instagram",
        autoPlay: false,
        preload: "none",
      },
      { type: "image", src: simonDelsalle5, fit: "contain" },
      { type: "image", src: simonDelsalle7, fit: "contain" },
      { type: "image", src: simonDelsalle13, fit: "contain" },
      { type: "image", src: simonDelsalle24, fit: "contain" },
      { type: "image", src: simonDelsalle45, fit: "contain" },
    ],

    context:
      "Le projet s'est déroulé dans une salle de sport, au plus près de l'entraînement de Simon Delsalle. La séance associe une série de photographies sportives à la réalisation d'un reel court destiné à Instagram. Les images montrent les exercices, les gestes et l'ambiance de la salle, pour constituer une banque de contenus photo et vidéo cohérente autour de son univers sportif.",

    response:
      "J'ai réalisé les images de la séance, sélectionné les photos finales et monté un reel vertical à partir des séquences vidéo. La galerie présente le reel en premier, suivi des cinq photographies du livrable.",

    result:
      "Un ensemble de contenus prêt à alimenter la communication de Simon, avec une banque d'images sportives et un format vidéo court pensé pour Instagram.",

    deliverables: ["Photographie sportive", "Banque d’images", "Réel Instagram"],
  },

  {
    slug: "madyard",
    title: "MAD'YARD",
    client: "MAD'YARD",
    category: "Photographie • Création de contenu",
    cover: madyard,

    heroImages: [madyard1, madyard2, madyard3, madyard4, madyard5],

    context:
      "Un événement sportif jeune, en pleine construction de son identité visuelle, avec peu d'images exploitables pour communiquer sur ses prochaines éditions.",

    response:
      "J'ai couvert l'événement de bout en bout : départ, effort, ambiance, moments humains, arrivée. L'objectif : constituer une bibliothèque d'images cohérente et immédiatement réutilisable.",

    result:
      "Une banque d'images propriétaire, utilisable sur l'ensemble des supports de communication et pour promouvoir les éditions à venir.",

    deliverables: ["Couverture événementielle", "Banque d'images", "Contenus réseaux sociaux"],
  },

  {
    slug: "olicrom",
    title: "OLICROM",
    client: "Olicrom",
    category: "Photographie • Vidéo • Création de contenu",
    cover: olicrom,

    media: [
      {
        type: "youtube-link",
        src: "https://youtu.be/I3CfqtCW_Co",
        thumbnail: olicromThumbnail,
        title: "Olicrom — Film promotionnel",
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

    deliverables: ["Film promotionnel", "Photographies", "Contenus réseaux sociaux"],
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

    deliverables: ["Réels Instagram", "Vlog YouTube", "Contenus face caméra"],
  },

  {
    slug: "smart-investment",
    title: "SMART TALK'S",
    client: "Smart Investment",
    category: "Podcast • Production • Création de contenu",
    cover: smartTalks1,

    media: [
      {
        type: "youtube-link",
        src: "https://youtu.be/O6DFHn83J5U",
        thumbnail: smartTalks1,
        title: "Smart Talk's — Épisode 1",
      },
      {
        type: "youtube-link",
        src: "https://youtu.be/oB60TgSyMoE",
        thumbnail: smartTalks2,
        title: "Smart Talk's — Épisode 2",
      },
      {
        type: "youtube-link",
        src: "https://youtu.be/jxKqYKbeuFE",
        thumbnail: smartTalks3,
        title: "Smart Talk's — Épisode 3",
      },
    ],

    context:
      "Un podcast à structurer et produire régulièrement, avec la volonté de proposer des épisodes à la fois professionnels sur le plan technique et cohérents dans leur identité visuelle.",

    response:
      "J'ai pris en charge la production du podcast de A à Z : mise en place du plateau, préparation et tests techniques, puis captation des différents épisodes. J'ai également réalisé les miniatures et préparé les contenus destinés aux réseaux sociaux, tandis que le montage des épisodes a été confié à un monteur externe.",

    result:
      "Une production régulière et structurée, avec des épisodes captés dans des conditions professionnelles et une identité visuelle cohérente sur YouTube et les réseaux sociaux.",

    deliverables: ["Production podcast", "Captation des épisodes", "Miniatures & contenus sociaux"],
  },

  {
    slug: "born4more",
    title: "BORN4MORE",
    client: "BORN4MORE",
    category: "Photographie • Vidéo • Création de contenu",
    cover: born4more,

    media: [
      {
        type: "video",
        src: "/videos/born4more-1.mp4",
      },
      {
        type: "image",
        src: born4more2,
      },
      {
        type: "image",
        src: born4more3,
      },
      {
        type: "image",
        src: born4more4,
      },
      {
        type: "image",
        src: born4more5,
      },
    ],

    context:
      "Une collaboration construite autour d'athlètes et de défis sportifs, avec la volonté de documenter chaque projet à travers des contenus capables de raconter l'effort, l'engagement et l'univers de BORN4MORE.",

    response:
      "J'accompagne BORN4MORE sur la production des contenus de ses différents projets : photographie lors des sorties et événements, réalisation de vidéos et création de contenus visuels autour des athlètes et de leurs défis.",

    result:
      "Une bibliothèque de contenus cohérente et réutilisable, permettant de donner une identité visuelle forte aux projets de BORN4MORE, de la couverture terrain aux formats vidéo et documentaires.",

    deliverables: [
      "Photographie",
      "Production vidéo",
      "Contenu documentaire",
      "Création de contenus sociaux",
    ],
  },

  {
    slug: "fitness-park",
    title: "FITNESS PARK",
    client: "Fitness Park",
    category: "Photographie • Vidéo • Création de contenu",
    cover: fitnesspark,

    media: [
      {
        type: "instagram-link",
        src: "https://www.instagram.com/p/DUQrgRNCEwu/",
        title: "Fitness Park Tignieu — Instagram",
      },
      {
        type: "image",
        src: fitnesspark1,
        fit: "cover",
        title: "Fitness Park Tignieu — équipement",
      },
      {
        type: "image",
        src: fitnesspark2,
        fit: "contain",
        title: "Fitness Park Tignieu — équipement",
      },
      {
        type: "image",
        src: fitnesspark3,
        fit: "cover",
        title: "Fitness Park Tignieu — espace",
      },
      {
        type: "image",
        src: fitnesspark4,
        fit: "contain",
        title: "Fitness Park Tignieu — ambiance",
      },
    ],

    context:
      "Dans le cadre d'une collaboration entre un créateur de contenu et la salle Fitness Park de Tignieu, l'objectif était de mettre en avant la nouvelle identité de la salle, ses équipements et son positionnement plus premium.",

    response:
      "J'ai assuré la production des images sur place, en travaillant les équipements, les espaces et l'ambiance générale de la salle. Les plans réalisés ont également servi à alimenter une vidéo Instagram, montée par le créateur de contenu, afin de présenter le lieu de manière dynamique et immersive.",

    result:
      "Une série de contenus permettant de valoriser la nouvelle identité de Fitness Park Tignieu, avec une vidéo Instagram ayant généré plus de 70 000 vues.",

    deliverables: ["Photographies équipements", "Contenus Instagram", "Production vidéo"],
  },
];

export const exclusiveProjects: Project[] = [
  {
    slug: "mission-run-france",
    title: "MISSION RUN FRANCE",
    client: "James Chaix",
    category: "Documentaire",
    cover: jamesDocumentaryCover,

    media: [
      {
        type: "youtube-link",
        src: "https://youtu.be/MOgX3xTrxVw",
        thumbnail: jamesDocumentaryCover,
        title: "Mission Run France — Documentaire",
      },
      {
        type: "image",
        src: missionRun1,
        fit: "cover",
        title: "Mission Run France — image 1",
      },
      {
        type: "image",
        src: missionRun2,
        fit: "contain",
        title: "Mission Run France — image 2",
      },
      {
        type: "image",
        src: missionRun3,
        fit: "cover",
        title: "Mission Run France — image 3",
      },
      {
        type: "image",
        src: missionRun4,
        fit: "contain",
        title: "Mission Run France — image 4",
      },
      {
        type: "image",
        src: missionRun5,
        fit: "cover",
        title: "Mission Run France — image 5",
      },
    ],

    context:
      "Un projet documentaire autour de James Chaix et de son expérience sportive, avec l'envie de raconter une aventure humaine au-delà de la seule performance.",

    response:
      "J'ai assuré la réalisation audiovisuelle du projet, de la captation au travail de montage et de post-production. Le film a été pensé avec une approche documentaire et cinématographique, en travaillant le récit, le rythme, le sound design et l'étalonnage.",

    result:
      "Un film documentaire conçu comme une véritable pièce éditoriale, permettant de raconter l'expérience de James Chaix à travers une approche immersive et personnelle.",

    deliverables: ["Réalisation documentaire", "Montage", "Sound design", "Étalonnage"],
  },

  {
    slug: "fourviere-panorama",
    title: "TABLEAU DE FOURVIÈRE",
    client: "cliente privée",
    category: "Œuvre d'art",
    cover: fourvierePanorama,

    media: [
      {
        type: "image",
        src: fourvierePanorama,
        fit: "contain",
        title: "Tableau de Fourvière",
      },
    ],

    context:
      "Une commande photographique destinée à créer un panorama de Lyon, avec Fourvière comme point central, pensé pour être imprimé sur un tableau de 1,50 mètre par 50 centimètres.",

    response:
      "J'ai recherché différents points de vue et réalisé plusieurs essais afin de trouver la composition adaptée au format souhaité. Le projet a ensuite impliqué un travail de retouche, de préparation à l'impression et de fabrication d'un cadre sur mesure.",

    result:
      "Une œuvre photographique imprimée en grand format et intégrée dans un cadre sur mesure de 1,50 mètre par 50 centimètres, aujourd'hui installée chez la cliente.",

    deliverables: [
      "Photographie panoramique",
      "Retouche & préparation à l'impression",
      "Impression grand format",
      "Cadre sur mesure",
    ],
  },

  {
    slug: "reunion",
    title: "LA RÉUNION",
    client: "Projet personnel",
    category: "Série personnelle • Photographie",
    cover: reunionCover,

    media: [
      {
        type: "image",
        src: reunion1,
        fit: "contain",
        title: "La Réunion — image 1",
      },
      {
        type: "image",
        src: reunion2,
        fit: "cover",
        title: "La Réunion — image 2",
      },
      {
        type: "image",
        src: reunion3,
        fit: "cover",
        title: "La Réunion — image 3",
      },
      {
        type: "image",
        src: reunion4,
        fit: "cover",
        title: "La Réunion — image 4",
      },
      {
        type: "image",
        src: reunion5,
        fit: "contain",
        title: "La Réunion — image 5",
      },
      {
        type: "image",
        src: reunion6,
        fit: "contain",
        title: "La Réunion — image 6",
      },
    ],

    context:
      "Une série photographique personnelle réalisée à La Réunion, entre paysages volcaniques, reliefs et immersion au cœur de l'île.",

    response:
      "J'ai construit cette série au fil de l'exploration de l'île, en recherchant des points de vue permettant de retranscrire la diversité des paysages et l'expérience vécue sur place.",

    result:
      "Une série d'images pensée comme un carnet visuel de La Réunion, mêlant paysages, immersion et moments capturés au fil du voyage.",

    deliverables: ["Série photographique", "Photographie de paysage", "Création personnelle"],
  },
];

export const collaborations = [
  "NICE CÔTE D’AZUR BY UTMB",
  "BROKEN RACE",
  "IMMERSIVE",
  "BODYCROSS",
  "MAD'YARD",
  "ON AIR",
  "OLICROM",
  "BORN4MORE",
  "FITNESS PARK",
  "SMART INVESTMENT",
  "TAKE CONTROL",
];

export const getProject = (slug: string) =>
  [...projects, ...exclusiveProjects].find((p) => p.slug === slug);
