"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only enable on devices with a precise pointer (desktop)
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: pos.x, y: pos.y };
    let raf = 0;

    const onMouseMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        !!el.closest("a") ||
        !!el.closest("button") ||
        el.classList.contains("interactive")
      );
    };

    // Drive position off rAF with a light lerp
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.35;
      pos.y += (target.y - pos.y) * 0.35;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div ref={cursorRef} className={`modern-cursor ${hovering ? "hovering" : ""}`}>
      {/* Core dot with gradient */}
      <div className="cursor-core">
        <div className="core-dot"></div>
      </div>
      
      {/* Orbiting particles */}
      <div className="orbit-container">
        <div className="orbit-particle particle-1"></div>
        <div className="orbit-particle particle-2"></div>
        <div className="orbit-particle particle-3"></div>
      </div>
      
      {/* Outer glow ring */}
      <div className="glow-ring"></div>
      
      {/* Animated border ring */}
      <div className="animated-ring"></div>
      
      {/* Hover state - expanding circle */}
      <div className="hover-circle"></div>
    </div>
  );
}
