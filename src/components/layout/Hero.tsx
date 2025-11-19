// src/components/layout/Hero.tsx
import React from 'react'

export default function Hero() {
  return (
    <section
      className="relative w-full h-[78vh] md:h-[82vh] lg:h-[86vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundColor: '#D3ECF6', // fallback color / tint you requested
      }}
    >
      {/* overlay content (left aligned like the Figma) */}
      <div className="relative z-10 flex items-start h-full">
        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-start">
          {/* left column with title and the exact 3-line text */}
          <div className="pt-8 md:pt-20 lg:pt-28">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#3b2f2a] leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="block">Kids</span>
              <span className="block text-2xl md:text-3xl font-semibold mt-1">Play School</span>
            </h1>

            {/* The exact 3 lines (each on its own line) in black color */}
            <div className="mt-8 max-w-xl">
              <p className="text-2xl md:text-2xl lg:text-2xl font-normal text-black leading-relaxed">
                Bright minds building castles of imagination.
              </p>
              <p className="mt-3 text-xl md:text-xl lg:text-xl font-normal text-black leading-relaxed">
                Play, learn, and grow in joyful harmony.
              </p>
              <p className="mt-3 text-xl md:text-xl lg:text-xl font-normal text-black leading-relaxed">
                Step into a world made for little explorers.
              </p>

              {/* Book A Tour button with the requested color #60BFB2 */}
              <div className="mt-6">
                <button
                  className="text-white px-5 py-2.5 rounded-md shadow-sm text-base font-medium"
                  style={{
                    backgroundColor: '#60BFB2',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}
                  type="button"
                >
                  BOOK A TOUR
                </button>
              </div>
            </div>
          </div>

          {/* right column left intentionally empty — artwork in background image */}
          <div></div>
        </div>
      </div>
    </section>
  )
}
