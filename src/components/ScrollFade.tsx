"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function ScrollFade({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("fade-in-up");
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className="opacity-0 translate-y-6 transition-all duration-[900ms]"
    >
      {children}
    </div>
  );
}
