"use client";

interface GuitarStringProps {
  stringNumber: 1 | 2 | 3 | 4 | 5 | 6;
  name: string;
  keyboardKey: string;
  isActive: boolean;
  onPluck: (stringNumber: 1 | 2 | 3 | 4 | 5 | 6) => void;
  onPointerMove?: (stringNumber: 1 | 2 | 3 | 4 | 5 | 6) => void;
}

export default function GuitarString({
  stringNumber,
  name,
  keyboardKey,
  isActive,
  onPluck,
  onPointerMove,
}: GuitarStringProps) {
  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onPluck(stringNumber);
  };

  const handlePointerEnter = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.buttons === 1 || event.pointerType === "touch") {
      onPointerMove?.(stringNumber);
    }
  };

  return (
    <button
      type="button"
      aria-label={`سیم ${stringNumber} - ${name}`}
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      className="
        group
        relative
        flex
        h-[6%]
        w-full
        touch-none
        select-none
        items-center
        bg-transparent
      "
    >
      <span
        className={`
          block
          w-full
          rounded-full
          bg-linear-to-r
          from-[#999]
          via-white
          to-[#aaa]
          shadow-[0_1px_3px_rgba(0,0,0,0.8)]
          transition-all
          duration-100

          ${isActive ? "h-1.25 scale-y-[2] brightness-150" : "h-0.5"}
        `}
      />

      <span
        className="
          absolute
          right-2
          hidden
          rounded-md
          border
          border-white/10
          bg-black/40
          px-2
          py-1
          text-xs
          text-white/70
          backdrop-blur
          md:block
        "
      >
        {keyboardKey}
      </span>

      <span
        className="
          absolute
          left-2
          hidden
          rounded-md
          bg-black/30
          px-2
          py-1
          text-xs
          text-white/50
          md:block
        "
      >
        {name}
      </span>
    </button>
  );
}
