"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import GuitarString from "./GuitarString";
import GuitarControls from "./GuitarControls";
import ChordButtons from "./ChordButtons";
import { playString } from "@/lib/guitarAudio";
import { chords, ChordName } from "@/lib/chords";

type StringNumber = 1 | 2 | 3 | 4 | 5 | 6;

const strings: {
  id: StringNumber;
  name: string;
  key: string;
}[] = [
  {
    id: 1,
    name: "E",
    key: "A",
  },
  {
    id: 2,
    name: "B",
    key: "S",
  },
  {
    id: 3,
    name: "G",
    key: "D",
  },
  {
    id: 4,
    name: "D",
    key: "F",
  },
  {
    id: 5,
    name: "A",
    key: "G",
  },
  {
    id: 6,
    name: "E",
    key: "H",
  },
];

export default function Guitar() {
  const [activeString, setActiveString] = useState<StringNumber | null>(null);

  const [volume, setVolume] = useState(0.7);

  const [selectedChord, setSelectedChord] = useState<ChordName | null>(null);

  const [strumming, setStrumming] = useState(false);

  const lastStringRef = useRef<StringNumber | null>(null);

  const strumDirectionRef = useRef<"up" | "down" | null>(null);

  const hitString = useCallback(
    (stringNumber: StringNumber) => {
      playString(stringNumber, volume);

      setActiveString(stringNumber);

      window.setTimeout(() => {
        setActiveString(null);
      }, 120);
    },
    [volume],
  );

  const playChord = useCallback(
    (chordName: ChordName, direction: "up" | "down") => {
      const chord = chords.find((item) => item.name === chordName);

      if (!chord) return;

      const stringOrder: StringNumber[] =
        direction === "down" ? [1, 2, 3, 4, 5, 6] : [6, 5, 4, 3, 2, 1];

      stringOrder.forEach((stringNumber, index) => {
        const fret = chord.strings[stringNumber - 1];

        if (fret === null) return;

        window.setTimeout(() => {
          hitString(stringNumber);
        }, index * 45);
      });
    },
    [hitString],
  );

  const handleGuitarPointerDown = useCallback(() => {
    setStrumming(true);

    lastStringRef.current = null;
    strumDirectionRef.current = null;
  }, []);

  const handleGuitarPointerUp = useCallback(() => {
    setStrumming(false);

    lastStringRef.current = null;
    strumDirectionRef.current = null;
  }, []);

  const handleStringMove = useCallback(
    (stringNumber: StringNumber) => {
      if (!strumming) return;

      const lastString = lastStringRef.current;

      if (lastString === stringNumber) {
        return;
      }

      if (lastString !== null && stringNumber > lastString) {
        strumDirectionRef.current = "down";
      }

      if (lastString !== null && stringNumber < lastString) {
        strumDirectionRef.current = "up";
      }

      lastStringRef.current = stringNumber;

      if (selectedChord) {
        hitString(stringNumber);
      }
    },
    [strumming, selectedChord, hitString],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) return;

      const key = event.key.toUpperCase();

      const string = strings.find((item) => item.key === key);

      if (!string) return;

      hitString(string.id);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hitString]);

  return (
    <div className="w-full">
      <div className="relative mx-auto w-full max-w-6xl">
        <div
          className="
            relative mx-auto
            aspect-16/7
            w-full
            overflow-hidden
            rounded-[45%]
            border-18
            border-[#4b2412]
            bg-linear-to-br
            from-[#d99a55]
            via-[#b96d32]
            to-[#713517]
            shadow-2xl
            touch-none
            select-none
          "
          onPointerDown={handleGuitarPointerDown}
          onPointerUp={handleGuitarPointerUp}
          onPointerCancel={handleGuitarPointerUp}
          onPointerLeave={handleGuitarPointerUp}
        >
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-1/2
              h-[22%]
              w-[45%]
              -translate-y-1/2
              bg-linear-to-r
              from-[#29170e]
              to-[#5b351d]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-[38%]
              top-1/2
              flex
              aspect-square
              w-[23%]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border-10
              border-[#5b2b18]
              bg-[#17100c]
              shadow-inner
            "
          >
            <div
              className="
                aspect-square
                w-[75%]
                rounded-full
                border
                border-[#8b522e]
              "
            />
          </div>

          <div
            className="
              absolute
              inset-y-0
              left-[5%]
              right-[4%]
              flex
              flex-col
              justify-center
              gap-[2.5%]
              touch-none
            "
          >
            {strings.map((string) => (
              <GuitarString
                key={string.id}
                stringNumber={string.id}
                name={string.name}
                keyboardKey={string.key}
                isActive={activeString === string.id}
                onPluck={hitString}
                onPointerMove={handleStringMove}
              />
            ))}
          </div>

          <div
            className="
              pointer-events-none
              absolute
              right-[7%]
              top-1/2
              h-[30%]
              w-3
              -translate-y-1/2
              rounded-full
              bg-[#17100d]
              shadow-lg
            "
          />
        </div>
      </div>

      {selectedChord && (
        <div
          className="
            mx-auto
            mt-6
            flex
            w-fit
            items-center
            gap-3
            rounded-full
            border
            border-amber-400/20
            bg-amber-400/10
            px-5
            py-2
          "
        >
          <span className="text-sm text-zinc-400">آکورد فعلی</span>

          <span className="text-xl font-bold text-amber-400">
            {selectedChord}
          </span>
        </div>
      )}

      <ChordButtons
        selectedChord={selectedChord}
        onChordSelect={setSelectedChord}
      />

      <GuitarControls volume={volume} onVolumeChange={setVolume} />
    </div>
  );
}
