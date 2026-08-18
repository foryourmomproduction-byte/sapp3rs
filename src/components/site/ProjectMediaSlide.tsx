import type { MutableRefObject } from "react";

import type {
  Project,
  ProjectMedia,
} from "@/lib/projects";

type ProjectMediaSlideProps = {
  project: Project;
  item: ProjectMedia;
  index: number;
  isActive: boolean;
  videoRefs: MutableRefObject<
    Array<HTMLVideoElement | null>
  >;
  onOpenLightbox: (index: number) => void;
};

export function ProjectMediaSlide({
  project,
  item,
  index,
  isActive,
  videoRefs,
  onOpenLightbox,
}: ProjectMediaSlideProps) {
  const visibilityClass = isActive
    ? "z-[1] opacity-100"
    : "pointer-events-none opacity-0";

  if (item.type === "youtube-link") {
    return (
      <ExternalMediaCard
        item={item}
        project={project}
        platform="YouTube"
        className={visibilityClass}
      />
    );
  }

  if (item.type === "youtube") {
    return (
      <div
        className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${visibilityClass}`}
      >
        {isActive && (
          <iframe
            src={item.src}
            title={
              item.title ??
              `${project.title} — vidéo YouTube`
            }
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="h-full w-full border-0 bg-black"
          />
        )}
      </div>
    );
  }

  if (item.type === "instagram") {
    return (
      <div
        className={`absolute inset-0 flex h-full w-full items-center justify-center bg-black transition-opacity duration-700 ${visibilityClass}`}
      >
        {isActive && (
          <div className="h-full w-full max-w-[520px] bg-white">
            <iframe
              src={item.src}
              title={
                item.title ??
                `${project.title} — contenu Instagram`
              }
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              scrolling="no"
              className="h-full w-full border-0 bg-white"
            />
          </div>
        )}
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <div
        className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${visibilityClass}`}
      >
        <video
          ref={(element) => {
            videoRefs.current[index] = element;
          }}
          src={item.src}
          poster={item.poster}
          muted
          autoPlay={isActive}
          loop
          playsInline
          controls
          preload="metadata"
          aria-label={`${project.title} — vidéo ${index + 1}`}
          className="h-full w-full bg-black object-contain"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onOpenLightbox(index);
      }}
      aria-label={`Agrandir l’image ${index + 1}`}
      className={`absolute inset-0 h-full w-full cursor-zoom-in ${
        isActive ? "z-[1]" : "pointer-events-none"
      }`}
    >
      <img
        src={item.src}
        alt={
          item.alt ??
          `${project.title} — image ${index + 1}`
        }
        draggable={false}
        className={`h-full w-full select-none object-cover transition-all ease-in-out ${
          isActive
            ? "scale-[1.04] opacity-100 duration-[5500ms]"
            : "scale-100 opacity-0 duration-[1400ms]"
        }`}
      />
    </button>
  );
}

function ExternalMediaCard({
  item,
  project,
  platform,
  className,
}: {
  item: ProjectMedia;
  project: Project;
  platform: string;
  className: string;
}) {
  const thumbnail =
    "thumbnail" in item &&
    typeof item.thumbnail === "string"
      ? item.thumbnail
      : project.cover;

  return (
    <a
      href={item.src}
      target="_blank"
      rel="noopener noreferrer"
      className={`group absolute inset-0 h-full w-full overflow-hidden transition-opacity duration-700 ${className}`}
      onClick={(event) => event.stopPropagation()}
      aria-label={`Regarder sur ${platform}`}
    >
      <img
        src={thumbnail}
        alt={
          item.title ??
          `${project.title} — contenu ${platform}`
        }
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/35 transition group-hover:bg-black/50">
        <div className="flex flex-col items-center gap-4">
          <span
            aria-hidden
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-black shadow-lg transition-transform group-hover:scale-105"
          >
            ▶
          </span>

          <span className="rounded-full bg-black/70 px-5 py-3 text-sm text-white backdrop-blur-md">
            Regarder sur {platform}
          </span>
        </div>
      </div>
    </a>
  );
}
