import {
  useRef,
  type MutableRefObject,
  type TouchEvent,
} from "react";

import type {
  Project,
  ProjectMedia,
} from "@/lib/projects";

import {
  MediaDots,
  NavigationArrows,
} from "./ProjectNavigation";
import { ProjectMediaSlide } from "./ProjectMediaSlide";

type ProjectMediaGalleryProps = {
  project: Project;
  media: ProjectMedia[];
  currentIndex: number;
  videoRefs: MutableRefObject<
    Array<HTMLVideoElement | null>
  >;
  onSelect: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  onOpenLightbox: (index: number) => void;
};

export function ProjectMediaGallery({
  project,
  media,
  currentIndex,
  videoRefs,
  onSelect,
  onPrevious,
  onNext,
  onOpenLightbox,
}: ProjectMediaGalleryProps) {
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

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
      className="relative mt-16 aspect-[16/10] w-full touch-pan-y overflow-hidden rounded-md bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {media.map((item, index) => (
        <ProjectMediaSlide
          key={`${item.src}-${index}`}
          project={project}
          item={item}
          index={index}
          isActive={index === currentIndex}
          videoRefs={videoRefs}
          onOpenLightbox={onOpenLightbox}
        />
      ))}

      {media.length > 1 && (
        <>
          <NavigationArrows
            onPrevious={onPrevious}
            onNext={onNext}
            previousLabel="Média précédent"
            nextLabel="Média suivant"
          />

          <MediaDots
            total={media.length}
            activeIndex={currentIndex}
            onSelect={onSelect}
          />
        </>
      )}
    </div>
  );
}
