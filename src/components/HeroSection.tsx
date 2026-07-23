"use client";

import { useEffect, useRef, useState } from "react";
import { PlayIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const LINES = ["Цветы", "дарят", "счастье"];

export function HeroSection() {
  const [lit, setLit] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);

  const total = LINES.join("").length;

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setLit(i);
      if (i >= total) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, [total]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  let idx = 0;

  return (
    <section className="relative flex min-h-screen flex-col items-stretch md:flex-row">
      {/* Video block */}
      <div className="relative flex w-full items-stretch pt-16 md:w-[46%] md:pt-0">
        <div className="relative m-4 flex-1 overflow-hidden md:my-0 md:ml-14 md:mr-0">
          <video
            ref={videoRef}
            className="h-[52vh] w-full object-cover grayscale md:h-full"
            src="/videos/hero.mp4"
            poster="/videos/hero-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
          />
          <button
            onClick={togglePlay}
            aria-label={playing ? "Пауза" : "Смотреть"}
            className="group absolute bottom-6 left-6 flex items-center gap-3 text-white"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 transition group-hover:bg-white group-hover:text-ink">
              <PlayIcon className="ml-0.5 h-4 w-4" />
            </span>
            <span className="font-serif text-sm tracking-widest uppercase">
              {playing ? "Play" : "Play"}
            </span>
          </button>
        </div>
      </div>

      {/* Heading */}
      <div className="flex w-full flex-1 items-center px-8 pb-16 md:px-4 md:pb-0 lg:pl-20">
        <h1 className="d-display text-[15vw] leading-[0.95] md:text-[7.5vw] lg:text-[110px]">
          {LINES.map((line, li) => (
            <span key={li} className="block">
              {[...line].map((ch) => {
                idx += 1;
                const on = idx <= lit;
                return (
                  <span
                    key={idx}
                    className={cn("hero-letter", on && "on", li === 1 && "font-bold")}
                  >
                    {ch}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
