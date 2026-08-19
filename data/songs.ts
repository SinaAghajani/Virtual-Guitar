import type { ChordName } from "@/lib/chords";

export interface Song {
    id: string;
    title: string;
    artist?: string;
    bpm: number;
    chords: ChordName[];
    pattern: (
        "down" | "up"
    )[];
}

export const songs: Song[] = [
    {
        id: "beginner-1",
        title: "تمرین ساده",
        bpm: 80,
        chords: ["C", "G", "Am", "F"],
        pattern: [
            "down",
            "down",
            "up",
            "up",
            "down",
            "up",
        ],
    },

    {
        id: "beginner-2",
        title: "تمرین آرام",
        bpm: 70,
        chords: ["Am", "F", "C", "G"],
        pattern: [
            "down",
            "down",
            "down",
            "up",
        ],
    },

    {
        id: "beginner-3",
        title: "تمرین چهار آکورد",
        bpm: 90,
        chords: ["G", "D", "Em", "C"],
        pattern: [
            "down",
            "up",
            "down",
            "up",
        ],
    },
];

export function getSong(id: string) {
    return songs.find(
        (song) => song.id === id
    );
}