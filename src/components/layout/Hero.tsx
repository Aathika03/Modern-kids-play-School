// src/components/layout/Hero.tsx
import React from "react";
import Link from "next/link";

export default function Hero(): React.JSX.Element {
  return (
    <section
      className="relative w-full h-[78vh] md:h-[82vh] lg:h-[86vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundColor: "#D3ECF6" // fallback tint behind the image
      }}
    >
      {/* subtle overlay to darken background for readability on some screens */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(255,255,255,0.0)" }} />

      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT COLUMN: logo/title + three-line text + button */}
          <div className="pt-6 md:pt-16 lg:pt-24">
            {/* If you have a kids logo image (kids-logo.png) place here instead of text */}
            <div className="mb-6">
              {/* "Kids" play-school heading styled to resemble the Figma */}
              <div style={{ fontFamily: "Poppins, sans-serif" }}>
                <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#3b2f2a] leading-tight">
                  Kids
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-[#3b2f2a] -mt-1">
                  Play School
                </div>
              </div>
            </div>

            {/* Painted-blue shape behind copy (approximation of the Figma paint blob) */}
            <div className="relative inline-block">
              <div
                className="absolute -inset-6 rounded-md"
                style={{
                  background: "#dbeef8",
                  width: "100%",
                  height: "160px",
                  zIndex: -1,
                  borderRadius: "18px",
                  transform: "rotate(-1deg)"
                }}
              />

              {/* Text block — exactly three separate lines, black color */}
              <div className="relative z-10 max-w-xl">
                <p className="mt-3-xl md:text-xl lg:text-xl font-normal text-black leading-snug">
                  Bright minds building castles of imagination.
                </p>
                <p className="mt-3 text-xl md:text-xl lg:text-xl font-normal text-black leading-snug">
                  Play, learn, and grow in joyful harmony.
                </p>
                <p className="mt-3 text-xl md:text-xl lg:text-xl font-normal text-black leading-snug">
                  Step into a world made for little explorers.
                </p>

                {/* BOOK A TOUR button — uses #60BFB2 and subtle animation */}
                <div className="mt-6">
                  <Link href="/book-tour" legacyBehavior={false}>
                    <button
                      className="text-white px-6 py-2.5 rounded-md shadow-md text-base font-medium transition-transform transform hover:-translate-y-0.5 focus:outline-none"
                      style={{
                        backgroundColor: "#60BFB2",
                        border: "2px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      BOOK A TOUR
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN intentionally empty — background artwork sits here in hero.jpg */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
