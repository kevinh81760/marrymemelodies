"use client";

import { useState } from "react";

const PLACEHOLDERS = [
  { id: 1, label: "Voice 1", videoId: "tAWAp7rYARs" },
  { id: 2, label: "Voice 2", videoSrc: "/videos/v12044gd0000d4kgjcvog65j9g7bkpvg.MP4" },
  { id: 3, label: "Voice 3", videoSrc: "/videos/v12044gd0000d3b16inog65n2pmj8t20.MP4" },
  { id: 4, label: "Voice 4", videoId: "7AKmBtF8ddU" },
  { id: 5, label: "Voice 5", videoId: "ZjGy6ZzHRg8" },
  { id: 6, label: "Voice 6", videoSrc: "/videos/v12044gd0000d423r4fog65luoo075cg.MP4" },
];

const VISIBLE = 3;

export function MeetTheVoices() {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(PLACEHOLDERS.length / VISIBLE) - 1;
  const start = page * VISIBLE;
  const visibleItems = PLACEHOLDERS.slice(start, start + VISIBLE);

  return (
    <section className="bg-[#c0cfb2] px-[120px] py-[150px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between gap-6 mb-10">
          <h2 className="font-heading text-[52px] leading-[1.1] text-[var(--color-darker)]">
            Meet the Voices
          </h2>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-accent)] text-[var(--color-dark)] hover:bg-[var(--color-border-accent)] hover:text-[var(--color-white)] transition-colors disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Previous"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
              disabled={page === maxPage}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-accent)] text-[var(--color-dark)] hover:bg-[var(--color-border-accent)] hover:text-[var(--color-white)] transition-colors disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Next"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-sm border border-[var(--color-border-accent)] bg-[var(--color-white)]"
            >
              <div className="aspect-[4/3] w-full bg-[var(--color-gray)]/20 flex items-center justify-center overflow-hidden">
                {item.videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={`Video ${item.id}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : item.tiktokId ? (
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${item.tiktokId}?embed_from=embed_page`}
                    title={`Video ${item.id}`}
                    className="w-full h-full min-h-[400px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                    allowFullScreen
                  />
                ) : item.videoSrc ? (
                  <video
                    src={item.videoSrc}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <span className="font-body text-[14px] tracking-[1px] text-[var(--color-gray)]">
                    Video placeholder
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
