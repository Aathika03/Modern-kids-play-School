// src/pages/philosophy.tsx
"use client";
import React from "react";
import Head from "next/head";

export default function Philosophy(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Our Philosophy — Little Flower</title>
        <meta name="description" content="Our approach to early childhood at Little Flower" />
      </Head>

      {/* SECTION 1 — INTRO */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#c6e2ee] to-[#e8f4f8] animate-v2">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT TEXT */}
          <div className="animate-v2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#204d63]">
              Our Philosophy 🌱
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Every child deserves a space where play, love, curiosity, and joy come together.
            </p>

            <ul className="space-y-5">
              <li className="flex gap-4 items-start hover:scale-[1.02] transition animate-v2">
                <div className="text-3xl">💛</div>
                <div>
                  <p className="font-semibold text-[#204d63]">Child First</p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Every child grows at their own pace — we honour that.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start hover:scale-[1.02] transition animate-v2">
                <div className="text-3xl">🚀</div>
                <div>
                  <p className="font-semibold text-[#204d63]">Play-Led Learning</p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Fun activities encourage natural learning and exploration.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start hover:scale-[1.02] transition animate-v2">
                <div className="text-3xl">🤝</div>
                <div>
                  <p className="font-semibold text-[#204d63]">Warm Community</p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Families, children, and teachers grow together here.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg h-60 sm:h-80 bg-cover bg-center animate-v2"
            style={{ backgroundImage: "url('/gallery/activity2.jpg')" }}
          ></div>
        </div>
      </section>

      {/* SECTION 2 — BELIEFS */}
      <section className="py-16 sm:py-20 bg-[#f4fbff] animate-v2">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#204d63] flex items-center gap-2 animate-v2">
            ✨ What We Believe
          </h3>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition animate-v2">
              <p className="text-3xl mb-3">🌱</p>
              <p className="font-semibold text-[#204d63]">Children learn through moments</p>
              <p className="text-gray-700 text-sm sm:text-base mt-1">
                Every interaction builds early skills.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition animate-v2">
              <p className="text-3xl mb-3">🎨</p>
              <p className="font-semibold text-[#204d63]">Creativity builds confidence</p>
              <p className="text-gray-700 text-sm sm:text-base mt-1">
                Imagination helps children make sense of the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOLISTIC */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#e8f4f8] to-[#c6e2ee] animate-v2">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-5 animate-v2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#204d63] flex items-center gap-2">
              🧠 Our Holistic Approach
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start animate-v2">
                <span className="text-xl">💛</span> Emotional understanding
              </li>
              <li className="flex gap-3 items-start animate-v2">
                <span className="text-xl">🤝</span> Social bonding
              </li>
              <li className="flex gap-3 items-start animate-v2">
                <span className="text-xl">✨</span> Creative imagination
              </li>
              <li className="flex gap-3 items-start animate-v2">
                <span className="text-xl">🏃‍♂️</span> Active movement & play
              </li>
              <li className="flex gap-3 items-start animate-v2">
                <span className="text-xl">📚</span> Early communication
              </li>
            </ul>
          </div>

          {/* IMAGE */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg h-60 sm:h-80 bg-cover bg-center animate-v2"
            style={{ backgroundImage: "url('/gallery/activity10.jpeg')" }}
          ></div>
        </div>
      </section>

      {/* SECTION 4 — TEACHERS */}
      <section className="py-16 sm:py-20 bg-[#f4fbff] animate-v2">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div
            className="rounded-2xl overflow-hidden shadow-lg h-60 sm:h-80 bg-cover bg-center animate-v2"
            style={{ backgroundImage: "url('/gallery/activity3.jpg')" }}
          ></div>

          <div className="space-y-4 animate-v2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#204d63] flex items-center gap-2">
              👩‍🏫 Our Educators
            </h3>

            <p className="text-gray-700 text-sm sm:text-base">
              Our teachers guide with warmth, patience, and love.
            </p>

            <p className="text-gray-700 text-sm sm:text-base">
              When children feel safe, they explore naturally.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — COMMUNITY */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#c6e2ee] to-[#e8f4f8] animate-v2">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#204d63] flex items-center gap-2 animate-v2">
            🏡 Our Little Flower Family
          </h3>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition animate-v2">
            <p className="text-gray-700 text-sm sm:text-base">
              Parents are partners — together, we create a caring environment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#c6e2ee] animate-v2">
        <div className="max-w-6xl mx-auto px-4 text-center animate-v2">
          <h4 className="text-2xl sm:text-3xl font-bold text-[#204d63] mb-3">
            Want to learn more?
          </h4>
          <a
            href="/book-tour"
            className="inline-block px-8 py-3 rounded-md text-white font-semibold shadow-md hover:scale-105 transition"
            style={{ backgroundColor: "#60BFB2" }}
          >
            Book a Tour
          </a>
        </div>
      </section>
    </>
  );
}
