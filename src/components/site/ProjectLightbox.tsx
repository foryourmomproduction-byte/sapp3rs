import {
  useRef,
  type TouchEvent,
} from "react";

import type {
  Project,
  ProjectMedia,
} from "@/lib/projects";

import {
  ImageDots,
  NavigationArrows,
} from "./ProjectNavigation";

type ProjectLightboxProps = {
  project: Project;
  media: ProjectMedia;
  currentIndex: number;
  imageIndexes: number[];
  onClose: () => void;
  onSelect: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function ProjectLightbox({
  project,
  media,
  currentIndex,
  imageIndexes,
  onClose,
  onSelect,
  onPrevious,
  onNext,
}: ProjectLightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  if (media.type !== "image") {
    return null;
  }

  const handleTouchStart = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    const x = event.touches[0].clientX;
    touchStartX.current = x;
    touchCurrentX.current = x;
  };

  const handleTouchMove = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    touchCurrentX.current =
      event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchCurrentX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current - touchCurrentX.current;

    if (distance > 50) {
      onNext();
    } else if (distance < -50) {
      onPrevious();
    }

    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image agrandie de ${project.title}`}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md md:p-8"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label="Fermer l’image agrandie"
        className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur-md transition hover:bg-white/20"
      >
        ✕
      </button>

      <div
        className="relative flex h-full w-full items-center justify-center"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <img
          src={media.src}
          alt={
            media.alt ??
            `${project.title} — image agrandie`
          }
          draggable={false}
          className="max-h-full max-w-full select-none object-contain"
        />

        {imageIndexes.length > 1 && (
          <>
            <NavigationArrows
              onPrevious={onPrevious}
              onNext={onNext}
              previousLabel="Image précédente"
              nextLabel="Image suivante"
              lightbox
            />

            <ImageDots
              indexes={imageIndexes}
              activeIndex={currentIndex}
              onSelect={onSelect}
            />
          </>
        )}
      </div>
    </div>
  );
}
