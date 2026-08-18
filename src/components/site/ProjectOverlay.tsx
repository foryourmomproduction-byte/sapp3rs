import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type { Project } from "@/lib/projects";

import { ProjectDetails } from "./ProjectDetails";
import { ProjectLightbox } from "./ProjectLightbox";
import { ProjectMediaGallery } from "./ProjectMediaGallery";
import {
  getProjectMedia,
  getImageIndexes,
  resetVideos,
  shouldAutoplayGallery,
} from "./projectOverlayUtils";

type ProjectOverlayProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectOverlay({
  project,
  onClose,
}: ProjectOverlayProps) {
  const [currentMediaIndex, setCurrentMediaIndex] =
    useState(0);
  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false);

  const videoRefs = useRef<
    Array<HTMLVideoElement | null>
  >([]);

  const media = useMemo(
    () => getProjectMedia(project),
    [project]
  );

  const currentMedia = media[currentMediaIndex];

  const imageIndexes = useMemo(
    () => getImageIndexes(media),
    [media]
  );

  const goToPreviousMedia = useCallback(() => {
    if (media.length <= 1) {
      return;
    }

    setCurrentMediaIndex((current) =>
      current === 0 ? media.length - 1 : current - 1
    );
  }, [media.length]);

  const goToNextMedia = useCallback(() => {
    if (media.length <= 1) {
      return;
    }

    setCurrentMediaIndex(
      (current) => (current + 1) % media.length
    );
  }, [media.length]);

  const moveInsideLightbox = useCallback(
    (direction: -1 | 1) => {
      if (imageIndexes.length <= 1) {
        return;
      }

      const currentPosition = imageIndexes.indexOf(
        currentMediaIndex
      );

      const safePosition =
        currentPosition === -1 ? 0 : currentPosition;

      const nextPosition =
        (safePosition +
          direction +
          imageIndexes.length) %
        imageIndexes.length;

      setCurrentMediaIndex(imageIndexes[nextPosition]);
    },
    [currentMediaIndex, imageIndexes]
  );

  const goToPreviousLightboxImage = useCallback(
    () => moveInsideLightbox(-1),
    [moveInsideLightbox]
  );

  const goToNextLightboxImage = useCallback(
    () => moveInsideLightbox(1),
    [moveInsideLightbox]
  );

  const openLightbox = useCallback(
    (index: number) => {
      if (media[index]?.type !== "image") {
        return;
      }

      setCurrentMediaIndex(index);
      setIsLightboxOpen(true);
    },
    [media]
  );

  useEffect(() => {
    setCurrentMediaIndex(0);
    setIsLightboxOpen(false);
    resetVideos(videoRefs.current);
  }, [project?.slug]);

  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }

        return;
      }

      if (event.key === "ArrowLeft") {
        if (isLightboxOpen) {
          goToPreviousLightboxImage();
        } else {
          goToPreviousMedia();
        }
      }

      if (event.key === "ArrowRight") {
        if (isLightboxOpen) {
          goToNextLightboxImage();
        } else {
          goToNextMedia();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
      document.body.style.overflow = "";
    };
  }, [
    project,
    onClose,
    isLightboxOpen,
    goToPreviousMedia,
    goToNextMedia,
    goToPreviousLightboxImage,
    goToNextLightboxImage,
  ]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      const isActiveVideo =
        index === currentMediaIndex &&
        media[index]?.type === "video";

      video.muted = true;

      if (isActiveVideo) {
        void video.play().catch(() => {
          // Certains navigateurs bloquent l’autoplay.
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentMediaIndex, media]);

  useEffect(() => {
    if (
      !project ||
      media.length <= 1 ||
      isLightboxOpen ||
      !shouldAutoplayGallery(currentMedia)
    ) {
      return;
    }

    const interval = window.setInterval(
      goToNextMedia,
      5000
    );

    return () => window.clearInterval(interval);
  }, [
    project,
    media.length,
    currentMedia,
    isLightboxOpen,
    goToNextMedia,
  ]);

  useEffect(() => {
    if (
      isLightboxOpen &&
      currentMedia?.type !== "image"
    ) {
      setIsLightboxOpen(false);
    }
  }, [currentMedia?.type, isLightboxOpen]);

  if (!project || !currentMedia) {
    return null;
  }

  const fillContact = () => {
    onClose();

    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });

      const messageField = document.getElementById(
        "message"
      ) as HTMLTextAreaElement | null;

      if (messageField && !messageField.value) {
        messageField.value =
          `Je souhaite créer un projet similaire à ${project.title}.`;
      }
    }, 100);
  };

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="fixed inset-0 z-[100] overflow-y-auto bg-background/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="min-h-full"
          onClick={(event) =>
            event.stopPropagation()
          }
        >
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md md:px-10">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Projet
            </span>

            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Fermer"
            >
              Fermer <span aria-hidden>✕</span>
            </button>
          </header>

          <article className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
              {project.category}
            </p>

            <h2 className="font-display text-5xl font-medium leading-none md:text-8xl">
              {project.title}
            </h2>

            <ProjectMediaGallery
              project={project}
              media={media}
              currentIndex={currentMediaIndex}
              videoRefs={videoRefs}
              onSelect={setCurrentMediaIndex}
              onPrevious={goToPreviousMedia}
              onNext={goToNextMedia}
              onOpenLightbox={openLightbox}
            />

            <ProjectDetails project={project} />

            <div className="mt-24 border-t border-border pt-16 text-center">
              <p className="font-display text-3xl md:text-5xl">
                Et si c’était votre projet ?
              </p>

              <button
                type="button"
                onClick={fillContact}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Parlons de votre projet
                <span aria-hidden>→</span>
              </button>
            </div>
          </article>
        </div>
      </div>

      {isLightboxOpen &&
        currentMedia.type === "image" && (
          <ProjectLightbox
            project={project}
            media={currentMedia}
            currentIndex={currentMediaIndex}
            imageIndexes={imageIndexes}
            onClose={() => setIsLightboxOpen(false)}
            onSelect={setCurrentMediaIndex}
            onPrevious={goToPreviousLightboxImage}
            onNext={goToNextLightboxImage}
          />
        )}
    </>
  );
}
