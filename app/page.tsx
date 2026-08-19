"use client";

import Guitar from "@/components/guitar/Guitar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] px-4 py-8 text-white md:px-8">
      <header className="mx-auto mb-10 max-w-6xl text-center">
        <div className="mb-3 text-5xl">🎸</div>

        <h1 className="text-3xl font-bold md:text-5xl">Virtual Guitar</h1>

        <p className="mt-3 text-sm text-zinc-400 md:text-base">
          گیتار مجازی — با موس، لمس یا کیبورد بنواز
        </p>
      </header>

      <section className="mx-auto max-w-6xl">
        <Guitar />
      </section>

      <section className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h2 className="mb-4 text-center text-lg font-semibold">
          🎵 نحوه نواختن
        </h2>

        <div className="grid gap-4 text-center text-sm text-zinc-400 md:grid-cols-3">
          <div className="rounded-xl bg-black/30 p-4">
            <div className="mb-2 text-2xl">🖱️</div>
            <p>روی سیم کلیک کن</p>
          </div>

          <div className="rounded-xl bg-black/30 p-4">
            <div className="mb-2 text-2xl">👆</div>
            <p>روی موبایل سیم را لمس کن</p>
          </div>

          <div className="rounded-xl bg-black/30 p-4">
            <div className="mb-2 text-2xl">⌨️</div>
            <p>A S D F G H</p>
          </div>
        </div>
      </section>
    </main>
  );
}
