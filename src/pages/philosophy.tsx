// src/pages/philosophy.tsx
"use client";
import React from "react";
import Head from "next/head";

export default function Philosophy(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Our Philosophy — Little Flower</title>
        <meta
          name="description"
          content="Our approach to early childhood at Little Flower"
        />
      </Head>

      {/* SECTION 1 — INTRODUCTION */}
      <section className="py-16 sm:py-20 bg-[#c6e2eeff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#204d63]">
              Our Philosophy
            </h2>
            <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
              At Little Flower, we believe every child grows best in an environment that feels
              safe, warm and filled with opportunities to explore. Our approach blends play,
              curiosity, emotional support and carefully guided experiences that help children
              become confident young learners.
            </p>

            <ul className="space-y-4">
              {[1, 2, 3].map((num) => (
                <li key={num} className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">
                    {num}
                  </div>
                  <div>
                    <div className="font-semibold">
                      {num === 1 && "Child First"}
                      {num === 2 && "Play-Led Learning"}
                      {num === 3 && "Warm Community"}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      {num === 1 &&
                        "We meet each child where they are and celebrate their unique growth."}
                      {num === 2 &&
                        "Open-ended activities fuel curiosity and deep-thinking skills."}
                      {num === 3 &&
                        "Families and staff work together to support each child's wellbeing."}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="rounded-2xl overflow-hidden shadow-md h-60 sm:h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('/gallery/activity2.jpg')",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CORE BELIEFS */}
      <section className="py-16 sm:py-20 bg-[#c6e2eeff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#204d63]">What We Believe</h3>

          <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
            Our philosophy is rooted in the belief that young children thrive when they feel loved,
            secure and genuinely understood. At this age, learning happens in every moment — through
            play, relationships, movement and exploration.
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            We honor each child's individuality and gently guide them toward discovering strengths.
            Whether it's problem-solving, expressing creativity or building friendships, every
            experience becomes an opportunity for growth.
          </p>
        </div>
      </section>

      {/* SECTION 3 — HOLISTIC DEVELOPMENT */}
      <section className="py-16 sm:py-20 bg-[#c6e2eeff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#204d63]">
              Our Holistic Approach
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We focus on whole-child development — mind, body, emotions and social skills.
              Every activity is planned to help children grow in a balanced way while keeping
              the magic and joy of childhood at the centre.
            </p>

            <ul className="list-disc ml-5 text-gray-600 space-y-2 text-sm sm:text-base">
              <li>Emotional expression and self-regulation</li>
              <li>Social connections and early friendships</li>
              <li>Creative thinking and imagination</li>
              <li>Physical development through movement and outdoor play</li>
              <li>Language building through stories, songs and conversation</li>
            </ul>
          </div>

          <div>
            <div
              className="rounded-2xl overflow-hidden shadow-md h-60 sm:h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('/gallery/activity1.jpeg')",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — ROLE OF TEACHERS */}
      <section className="py-16 sm:py-20 bg-[#c6e2eeff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div>
            <div
              className="rounded-2xl overflow-hidden shadow-md h-60 sm:h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('/gallery/activity3.jpg')",
              }}
            ></div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#204d63]">Role of Our Educators</h3>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our teachers act as compassionate guides. They observe, support and scaffold learning
              based on each child's needs, creating moments for autonomy and discovery.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We prioritise warm relationships: when children feel safe and known, learning naturally follows.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — COMMUNITY */}
      <section className="py-16 sm:py-20 bg-[#c6e2eeff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#204d63]">
            A Community That Feels Like Family
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
            Families are partners here. We keep communication open, transparent and collaborative so parents
            feel supported and connected to their child's day-to-day growth.
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Little Flower is more than a learning space — it’s where children build confidence, make friends,
            and experience kindness every day.
          </p>
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="py-10 sm:py-12 bg-[#c6e2eeff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl sm:text-3xl font-bold text-[#204d63]">Want to learn more?</h4>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">
              Schedule a visit to see our classrooms and meet the team — we’d love to show you around.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <a
              href="/book-tour"
              className="block text-center px-6 py-3 rounded-md text-white font-semibold shadow w-full md:w-auto"
              style={{ backgroundColor: "#60BFB2" }}
            >
              Book a Tour
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
