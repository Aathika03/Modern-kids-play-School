// src/components/layout/Hero.tsx
import React from "react";
import Link from "next/link";

export default function Hero(): React.JSX.Element {
  return (
    <section
      className="relative w-full h-[78vh] md:h-[82vh] lg:h-[86vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundColor: "#D3ECF6",
      }}
    >
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center">

          {/* LEFT SIDE — TEXT BLOCK */}
          <div className="pt-6 md:pt-12 lg:pt-14 pl-14 md:pl-24 lg:pl-32 animate-fade-up">
            {/* Slightly down + right */}

            {/* Heading */}
            <div className="mb-6 floating-text" style={{ fontFamily: "Poppins, sans-serif" }}>
              <div className="
                text-4xl md:text-5xl  
                font-semibold 
                text-[#3b2f2a] 
                leading-tight
                drop-shadow-md
              ">
                Kids
              </div>

              <div className="
                text-2xl md:text-3xl 
                font-semibold 
                text-[#3b2f2a]
                -mt-1
                drop-shadow-md
              ">
                Play School
              </div>
            </div>

            {/* Subtext */}
            <div className="relative z-10 max-w-xl px-2 space-y-3">
              <p className="text-xl font-normal text-black leading-snug drop-shadow-sm">
                Bright minds building castles of imagination.
              </p>
              <p className="text-xl font-normal text-black leading-snug drop-shadow-sm">
                Play, learn, and grow in joyful harmony.
              </p>
              <p className="text-xl font-normal text-black leading-snug drop-shadow-sm">
                Step into a world made for little explorers.
              </p>

              {/* Book a Tour Button */}
              <div className="mt-7 flex justify-center">
                <Link href="/book-tour">
                  <button
                    className="ripple-btn text-white px-8 py-3 rounded-md shadow-lg text-base font-medium transition-transform hover:-translate-y-1"
                    style={{
                      backgroundColor: "#60BFB2",
                      border: "2px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    BOOK A TOUR
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Empty right side */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
