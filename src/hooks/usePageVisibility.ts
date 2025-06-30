"use client";

import { useEffect, useRef } from "react";

export function usePageVisibility() {
  const cleanupRef = useRef<(() => void)[]>([]);

  useEffect(() => {
    const cleanup = () => {
      cleanupRef.current.forEach((fn) => fn());
      cleanupRef.current = [];
    };

    const handlePageHide = () => {
      cleanup();
    };

    window.addEventListener("pagehide", handlePageHide);

    return () => {
      window.removeEventListener("pagehide", handlePageHide);
      cleanup();
    };
  }, []);

  const addCleanup = (fn: () => void) => {
    cleanupRef.current.push(fn);
  };

  return { addCleanup };
}
