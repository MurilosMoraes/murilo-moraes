"use client";

import { useEffect, useState } from "react";

export default function ScrollEffect() {
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMouseX(x);
      setMouseY(y);
    };

    window.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="scroll-gradient-effect"
      style={
        {
          "--mouse-x": `${mouseX}%`,
          "--mouse-y": `${mouseY}%`,
        } as React.CSSProperties
      }
    />
  );
}
