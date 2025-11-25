// src/pages/programs.tsx
import Head from "next/head";
import React, { useState } from "react";

export default function Programs(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  const topPrograms = [
    {
      title: "Toddler Play",
      short:
        "Gentle sensory play and routines that build safety, curiosity and confidence.",
      more:
        "In Toddler Play we focus on gentle sensory activities, soft motor games, simple language play and short group routines that build trust with teachers and peers. Typical day includes sensory bins, quiet story circles, guided movement, tactile art and calm rest periods. Outcomes: improved hand-eye coordination, early socialisation, emotional comfort and a love for exploration.",
    },
    {
      title: "Pre-K Curriculum",
      short:
        "Hands-on literacy, numeracy and nature exploration for confident beginners.",
      more:
        "Pre-K mixes playful structure with discovery: phonics-rich stories, number routines using objects, outdoor nature walks, and scaffolded small-group activities. Teachers guide early writing strokes, counting games, vocabulary development and cooperative play. Outcomes: emergent literacy, number sense, independence and curiosity about the world.",
    },
    {
      title: "Creative Arts",
      short:
        "Art, music and drama to spark imagination and strengthen fine motor skills.",
      more:
        "Creative Arts encourages experimenting with colours, textures and rhythm. Activities include painting, clay modelling, rhythm games, puppetry and simple drama. Children learn to express emotions, build concentration, and improve fine-motor control. Outcomes: richer vocabulary, creative confidence and collaborative skills.",
    },
  ];

  const detailedPrograms = [
    {
      title: "Play Group",
      desc:
        "A joyful space where toddlers explore, play, and develop early motor and social skills.",
      bg: "bg-[#E0F7F3]",
      more:
        "Play Group centres on free exploration and short guided experiences: sensory corners, water play, music, and simple routines to build trust and daily habits. Teachers focus on emotional regulation, turn-taking and safe risk-taking in play.",
    },
    {
      title: "Nursery",
      desc:
        "Early learning through activities that improve creativity and communication.",
      bg: "bg-[#FFF4CC]",
      more:
        "The Nursery program balances circle time, scaffolded language activities, manipulatives and hands-on learning stations. Emphasis on vocabulary, early math ideas and social routines that support independence.",
    },
    {
      title: "LKG",
      desc: "Phonics, storytelling, numbers and fun activities that build readiness.",
      bg: "bg-[#E9F5FF]",
      more:
        "LKG introduces structured play with purposeful learning: early phonics, counting games, pattern work and group projects to develop executive function and pre-academic skills.",
    },
    {
      title: "UKG",
      desc: "Structured learning with writing, numbers and concept activities.",
      bg: "bg-[#FFE2EC]",
      more:
        "UKG supports confident transition to formal school: emergent writing, number sense to 100, reasoning activities and collaborative projects to foster curiosity and responsibility.",
    },
    {
      title: "Music & Movement",
      desc:
        "Dance, rhythm, action songs and exercises that boost coordination.",
      bg: "bg-blue-100",
      more:
        "Music & Movement uses rhythm, instruments and action songs — building gross motor control, timing, listening and group participation.",
    },
    {
      title: "Art & Craft",
      desc:
        "Creative art activities that build imagination and fine motor skills.",
      bg: "bg-purple-100",
      more:
        "Art & Craft sessions provide opportunities for experimentation with many materials — painting, collage, clay and sensory textures — to build creativity and persistence.",
    },
  ];

  const skillsByAge = [
    {
      age: "1.5 – 2.5 Years (Toddlers)",
      skills: [
        "Basic motor skills development",
        "Early language imitation",
        "Color & shape recognition",
        "Parallel play & social exposure",
      ],
    },
    {
      age: "2.5 – 3.5 Years (Nursery)",
      skills: [
        "Pre-writing strokes",
        "Story listening & rhymes",
        "Sorting & counting basics",
        "Building independence in routines",
      ],
    },
    {
      age: "3.5 – 5 Years (Pre-K & LKG)",
      skills: [
        "Early reading readiness",
        "Number concepts up to 100",
        "Fine motor strengthening",
        "Team play & communication",
      ],
    },
  ];

  const montessori = [
    {
      name: "Practical Life",
      text:
        "Pouring sets, spooning trays, dressing frames and sorting activities that build coordination, focus, and independence.",
    },
    {
      name: "Sensorial",
      text:
        "Pink tower, sound cylinders, color tablets and shape puzzles for refining senses and early math foundations.",
    },
    {
      name: "Language & Math",
      text:
        "Sandpaper letters, movable alphabet, number rods and counting beads to strengthen literacy and numeracy skills.",
    },
  ];

  const weekly = [
    { day: "Monday", act: "Sensorial play + fine-motor games" },
    { day: "Tuesday", act: "Language enrichment & story time" },
    { day: "Wednesday", act: "Montessori math & counting" },
    { day: "Thursday", act: "Creative arts & music" },
    { day: "Friday", act: "Outdoor learning & nature exploration" },
  ];

  return (
    <>
      <Head>
        <title>Programs — Little Flower</title>
        <meta name="description" content="Programs at Little Flower Play School" />
      </Head>

      <section className="py-20" style={{ backgroundColor: "#c6e2eeff" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2
            className="text-4xl font-extrabold mb-4 text-[#204d63]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Programs
          </h2>

          <p className="text-lg text-gray-700 mb-10 max-w-2xl">
            Gentle, play-led learning that nurtures curiosity, confidence, creativity and social skills.
          </p>

          {/* Top program cards with Learn More toggles */}
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {topPrograms.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl p-6 shadow-sm border border-gray-100 bg-white"
              >
                <div className="text-xl font-semibold mb-2 text-[#204d63]">
                  {p.title}
                </div>

                <div className="text-gray-600">{p.short}</div>

                {/* hidden/expandable more text */}
                <div className={`mt-3 text-gray-700 ${openIndex === i ? "block" : "hidden"}`}>
                  <p>{p.more}</p>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => toggle(i)}
                    className="px-4 py-2 rounded-md text-white font-medium shadow-sm"
                    style={{ backgroundColor: "#60BFB2" }}
                  >
                    {openIndex === i ? "See less" : "Learn more"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Trust / badges area (simple visual badges) */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#60BFB2] flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <div className="font-semibold text-[#204d63]">Safe & Caring</div>
                <div className="text-gray-600">Trained staff and secure premises.</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#FFB86B] flex items-center justify-center text-white font-bold">★</div>
              <div>
                <div className="font-semibold text-[#204d63]">Small Classes</div>
                <div className="text-gray-600">Personal attention for every child.</div>
              </div>
            </div>
          </div>

          {/* Detailed Programs */}
          <h3 className="text-3xl font-bold mb-8 text-[#204d63]">
            Detailed Learning Programs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
            {detailedPrograms.map((p, i) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${p.bg}`}>
                  {/* small decorative mark */}
                  <div className="text-sm font-semibold text-[#204d63]">{p.title.split(" ")[0]}</div>
                </div>

                <h3 className="text-xl font-semibold mt-4 text-[#204d63]">{p.title}</h3>

                <p className="text-gray-600 mt-2 leading-relaxed">{p.desc}</p>

                <details className="mt-4">
                  <summary className="cursor-pointer text-[#60BFB2] font-medium">Learn more</summary>
                  <div className="mt-3 text-gray-700">{p.more}</div>
                </details>
              </div>
            ))}
          </div>

          {/* Skills by age */}
          <h3 className="text-3xl font-bold mb-6 text-[#204d63]">Skills Children Learn at Each Age Group</h3>
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {skillsByAge.map((group) => (
              <div key={group.age} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-xl font-semibold mb-4 text-[#204d63]">{group.age}</div>
                <ul className="text-gray-700 space-y-2">
                  {group.skills.map((s) => (
                    <li key={s} className="flex items-start">
                      <span className="mr-2 text-[#60BFB2] font-bold">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Montessori Materials */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-4 text-[#204d63]">Montessori Materials We Use</h3>
            <p className="text-gray-700 max-w-3xl mb-6">
              Our classrooms include authentic Montessori materials that encourage hands-on discovery and independence.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {montessori.map((m) => (
                <div key={m.name} className="bg-white p-6 shadow-md rounded-xl">
                  <h4 className="font-semibold mb-2 text-[#204d63]">{m.name}</h4>
                  <p className="text-gray-600 text-sm">{m.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Weekly Schedule */}
          <section>
            <h3 className="text-3xl font-bold mb-4 text-[#204d63]">Weekly Learning Schedule</h3>
            <p className="text-gray-700 mb-6 max-w-2xl">
              A balanced weekly plan helps children explore academics, movement and creative play.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {weekly.map((d) => (
                <div key={d.day} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <div className="font-semibold text-lg mb-2 text-[#60BFB2]">{d.day}</div>
                  <div className="text-gray-700 text-sm">{d.act}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="h-16" />
        </div>
      </section>
    </>
  );
}
