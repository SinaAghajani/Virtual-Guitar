"use client";

import { chords, ChordName } from "@/lib/chords";

interface ChordButtonsProps {
  selectedChord: ChordName | null;
  onChordSelect: (chord: ChordName) => void;
}

export default function ChordButtons({
  selectedChord,
  onChordSelect,
}: ChordButtonsProps) {
  return (
    <section className="mx-auto mt-8 w-full max-w-3xl">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">🎵 آکوردها</h2>

        {selectedChord && (
          <span className="text-sm text-zinc-400">
            آکورد انتخاب شده:{" "}
            <span className="font-bold text-white">{selectedChord}</span>
          </span>
        )}
      </div>

      <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
        {chords.map((chord) => {
          const isSelected = selectedChord === chord.name;

          return (
            <button
              key={chord.name}
              type="button"
              onClick={() => onChordSelect(chord.name)}
              className={`
                rounded-xl
                border
                px-3
                py-3
                text-sm
                font-bold
                transition-all
                duration-200
                active:scale-95

                ${
                  isSelected
                    ? "border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                    : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                }
              `}
            >
              {chord.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
