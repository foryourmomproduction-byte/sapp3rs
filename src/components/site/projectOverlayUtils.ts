import type {
  Project,
  ProjectMedia,
} from "@/lib/projects";

export function getProjectMedia(
  project: Project | null
): ProjectMedia[] {
  if (!project) {
    return [];
  }

  if (project.media?.length) {
    return project.media;
  }

  if (project.heroImages?.length) {
    return project.heroImages.map((image, index) => ({
      type: "image",
      src: image,
      alt: `${project.title} — image ${index + 1}`,
    }));
  }

  return [
    {
      type: "image",
      src: project.cover,
      alt: `${project.title} — couverture`,
    },
  ];
}

export function getImageIndexes(
  media: ProjectMedia[]
) {
  return media.reduce<number[]>(
    (indexes, item, index) => {
      if (item.type === "image") {
        indexes.push(index);
      }

      return indexes;
    },
    []
  );
}

export function resetVideos(
  videos: Array<HTMLVideoElement | null>
) {
  videos.forEach((video) => {
    if (!video) {
      return;
    }

    video.pause();
    video.currentTime = 0;
    video.muted = true;
  });
}

export function shouldAutoplayGallery(
  media: ProjectMedia | undefined
) {
  return (
    media?.type !== "video" &&
    media?.type !== "youtube" &&
    media?.type !== "youtube-link" &&
    media?.type !== "instagram"
  );
}
