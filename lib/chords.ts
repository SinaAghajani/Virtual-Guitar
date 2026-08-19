export type ChordName =
    | "C"
    | "G"
    | "Am"
    | "F"
    | "D"
    | "Em"
    | "A"
    | "E";

export interface Chord {
    name: ChordName;
    displayName: string;
    strings: (number | null)[];
}

export const chords: Chord[] = [
    {
        name: "C",
        displayName: "C Major",
        strings: [null, 3, 2, 0, 1, 0],
    },
    {
        name: "G",
        displayName: "G Major",
        strings: [3, 2, 0, 0, 0, 3],
    },
    {
        name: "Am",
        displayName: "A Minor",
        strings: [null, 0, 2, 2, 1, 0],
    },
    {
        name: "F",
        displayName: "F Major",
        strings: [null, 3, 3, 2, 1, 1],
    },
    {
        name: "D",
        displayName: "D Major",
        strings: [null, null, 0, 2, 3, 2],
    },
    {
        name: "Em",
        displayName: "E Minor",
        strings: [0, 2, 2, 0, 0, 0],
    },
    {
        name: "A",
        displayName: "A Major",
        strings: [null, 0, 2, 2, 2, 0],
    },
    {
        name: "E",
        displayName: "E Major",
        strings: [0, 2, 2, 1, 0, 0],
    },
];

export function getChord(name: ChordName) {
    return chords.find((chord) => chord.name === name);
}