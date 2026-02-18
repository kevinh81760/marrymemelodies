"use client";

import { useState, useEffect } from "react";

/**
 * Returns an opacity value from 1 (visible) to 0 (hidden) based on scroll position.
 * Fades out over the first `fadeDistance` pixels of scroll.
 */
export function useScrollFadeOut(fadeDistance: number = 180) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const next = y >= fadeDistance ? 0 : 1 - y / fadeDistance;
      setOpacity(next);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [fadeDistance]);

  return opacity;
}
