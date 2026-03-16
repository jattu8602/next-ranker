"use client";

import { useEffect, useRef, useState } from "react";
import {gsap} from "gsap";

const texts = ["Next-Ranker", "Refer & Earn", "Home", "Lexia AI", "Profile"];

export function BrandButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateText = () => {
        // Animation Out: Slide Up and Fade Out
        gsap.to(textRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setIndex((prev) => (prev + 1) % texts.length);
            // Reset position to bottom for next entry
            gsap.set(textRef.current, { y: 20, opacity: 0 });
            // Animation In: Slide Up to Center and Fade In
            gsap.to(textRef.current, {
              y: 0,
              opacity: 1,
              duration: 0.5,
            });
          },
        });
      };

      const timer = setInterval(animateText, 3000);
      return () => clearInterval(timer);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex items-center overflow-hidden h-10 px-4">
      <span
        ref={textRef}
        className="text-2xl font-extrabold text-primary tracking-tight whitespace-nowrap block"
      >
        {texts[index]}
      </span>
    </div>
  );
}
