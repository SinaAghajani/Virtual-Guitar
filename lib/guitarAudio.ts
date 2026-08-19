let audioContext: AudioContext | null = null;

const frequencies = {
    1: 329.63,
    2: 246.94,
    3: 196.0,
    4: 146.83,
    5: 110.0,
    6: 82.41,
};

function getAudioContext() {
    if (!audioContext) {
        audioContext = new AudioContext();
    }

    return audioContext;
}

export function playString(
    stringNumber: keyof typeof frequencies,
    volume = 0.7
) {
    const ctx = getAudioContext();

    if (ctx.state === "suspended") {
        ctx.resume();
    }

    const frequency =
        frequencies[stringNumber];

    const oscillator =
        ctx.createOscillator();

    const gain =
        ctx.createGain();

    oscillator.type = "triangle";

    oscillator.frequency.setValueAtTime(
        frequency,
        ctx.currentTime
    );

    const finalVolume =
        Math.max(0, Math.min(1, volume));

    gain.gain.setValueAtTime(
        0.0001,
        ctx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        finalVolume * 0.35,
        ctx.currentTime + 0.01
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + 1.8
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();

    oscillator.stop(
        ctx.currentTime + 2
    );
}