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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-[#204d63]">Our Philosophy</h2>
            <p className="text-gray-700 mb-6">
              At Little Flower, we believe every child grows best in an environment that feels
              safe, warm and filled with opportunities to explore. Our approach blends play,
              curiosity, emotional support and carefully guided experiences that help children
              become confident young learners.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <div>
                  <div className="font-semibold">Child First</div>
                  <div className="text-gray-600">We meet each child where they are and celebrate their unique growth.</div>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <div>
                  <div className="font-semibold">Play-Led Learning</div>
                  <div className="text-gray-600">Open-ended activities fuel curiosity and deep-thinking skills.</div>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">
                  3
                </div>
                <div>
                  <div className="font-semibold">Warm Community</div>
                  <div className="text-gray-600">Families and staff work together to support each child's wellbeing.</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div
              className="rounded-2xl overflow-hidden shadow-md h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('/gallery/activity2.jpg')", // image (matches admissions theme)
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — CORE BELIEFS */}
      <section className="py-20 bg-[#F5FCFA]">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-[#204d63]">What We Believe</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our philosophy is rooted in the belief that young children thrive when they feel loved,
            secure and genuinely understood. At this age, learning happens in every moment — through
            play, relationships, movement and exploration.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We honor each child's individuality and gently guide them toward discovering strengths.
            Whether it's problem-solving, expressing creativity or building friendships, every
            experience becomes an opportunity for growth.
          </p>
        </div>
      </section>

      {/* SECTION 3 — HOLISTIC DEVELOPMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-[#204d63]">Our Holistic Approach</h3>
            <p className="text-gray-700">
              We focus on whole-child development — mind, body, emotions and social skills.
              Every activity is planned to help children grow in a balanced way while keeping
              the magic and joy of childhood at the centre.
            </p>

            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>Emotional expression and self-regulation</li>
              <li>Social connections and early friendships</li>
              <li>Creative thinking and imagination</li>
              <li>Physical development through movement and outdoor play</li>
              <li>Language building through stories, songs and conversation</li>
            </ul>
          </div>

          <div>
            <div
              className="rounded-2xl overflow-hidden shadow-md h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('/gallery/activity1.jpeg')",
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — ROLE OF TEACHERS */}
      <section className="py-20 bg-[#F3F9FF]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="rounded-2xl overflow-hidden shadow-md h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('/gallery/activity3.jpg')", // requested near "Our Holistic Approach"
              }}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-[#204d63]">Role of Our Educators</h3>
            <p className="text-gray-700">
              Our teachers act as compassionate guides. They observe, support and scaffold learning
              based on each child's needs, creating moments for autonomy and discovery.
            </p>
            <p className="text-gray-700">
              We prioritise warm relationships: when children feel safe and known, learning naturally follows.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — COMMUNITY & CARE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-[#204d63]">A Community That Feels Like Family</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Families are partners here. We keep communication open, transparent and collaborative so parents
            feel supported and connected to their child's day-to-day growth.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Little Flower is more than a learning space — it’s where children build confidence, make friends,
            and experience kindness every day.
          </p>
        </div>
      </section>

      {/* SECTION 6 — PRACTICALS & CONTACT CTA */}
      <section className="py-12 bg-[#F5FCFA]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-[#204d63]">Want to learn more?</h4>
            <p className="text-gray-700 mt-2">Schedule a visit to see our classrooms and meet the team — we’d love to show you around.</p>
          </div>

          <div>
            <a
              href="/book-tour"
              className="inline-block px-6 py-3 rounded-md text-white font-semibold shadow"
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
