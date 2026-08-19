"use client";

interface GuitarControlsProps {
  volume: number;
  onVolumeChange: (value: number) => void;
}

export default function GuitarControls({
  volume,
  onVolumeChange,
}: GuitarControlsProps) {
  return (
    <section className="mx-auto mt-10 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-center text-lg font-semibold">
        🎵 کنترل‌های گیتار
      </h2>

      {/* Playing instructions */}

      <div className="grid gap-4 text-center text-sm text-zinc-400 md:grid-cols-3">
        <div className="rounded-xl bg-black/30 p-4">
          <div className="mb-2 text-2xl">🖱️</div>

          <p>روی سیم کلیک کن</p>
        </div>

        <div className="rounded-xl bg-black/30 p-4">
          <div className="mb-2 text-2xl">👆</div>

          <p>سیم‌ها را لمس کن</p>
        </div>

        <div className="rounded-xl bg-black/30 p-4">
          <div className="mb-2 text-2xl">⌨️</div>

          <p>A S D F G H</p>
        </div>
      </div>

      {/* Volume */}

      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-zinc-400">🔊 صدا</span>

          <span className="font-mono text-zinc-300">
            {Math.round(volume * 100)}%
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) => onVolumeChange(Number(event.target.value))}
          className="w-full cursor-pointer"
        />
      </div>
    </section>
  );
}
