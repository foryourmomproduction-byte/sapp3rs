export function NavigationArrows({
  onPrevious,
  onNext,
  previousLabel,
  nextLabel,
  lightbox = false,
}: {
  onPrevious: () => void;
  onNext: () => void;
  previousLabel: string;
  nextLabel: string;
  lightbox?: boolean;
}) {
  const baseClass =
    "absolute top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-md transition";

  const styleClass = lightbox
    ? "h-12 w-12 bg-white/10 text-2xl text-white hover:bg-white/20"
    : "h-11 w-11 bg-background/70 text-xl text-foreground hover:bg-background";

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label={previousLabel}
        className={`${baseClass} ${styleClass} ${
          lightbox ? "left-2 md:left-6" : "left-4"
        }`}
      >
        ←
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label={nextLabel}
        className={`${baseClass} ${styleClass} ${
          lightbox ? "right-2 md:right-6" : "right-4"
        }`}
      >
        →
      </button>
    </>
  );
}

export function MediaDots({
  total,
  activeIndex,
  onSelect,
}: {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect(index);
          }}
          aria-label={`Afficher le média ${index + 1}`}
          className={`h-2 rounded-full transition-all ${
            index === activeIndex
              ? "w-6 bg-foreground"
              : "w-2 bg-foreground/50"
          }`}
        />
      ))}
    </div>
  );
}

export function ImageDots({
  indexes,
  activeIndex,
  onSelect,
}: {
  indexes: number[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
      {indexes.map((mediaIndex) => (
        <button
          key={mediaIndex}
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect(mediaIndex);
          }}
          aria-label="Afficher cette image"
          className={`h-2 rounded-full transition-all ${
            mediaIndex === activeIndex
              ? "w-6 bg-white"
              : "w-2 bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}
