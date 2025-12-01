// Updated full Programs.tsx with Quick Peek scroll + reordered content
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import ProgramCard from "../components/ui/ProgramCard";
import TrustBadge from "../components/ui/TrustBadge";

export default function Programs(): React.JSX.Element {
  const topPrograms = [
    {
      title: "Toddler Play",
      img: "/programs/toddler.jpg",
      shortDesc: "Soft play, music & cosy group time.",
      longDesc:
        "Short, playful routines: sensory corners, music circles, soft play and calm story moments.",
      tag: "Ages 1.5–2.5",
      quickPeek: [
        { icon: "🎶", label: "Music" },
        { icon: "🧸", label: "Soft Play" },
        { icon: "📘", label: "Stories" }
      ]
    },
    {
      title: "Pre-K Learning",
      img: "/programs/prek.jpeg",
      shortDesc: "Stories, counting games & outdoor fun.",
      longDesc:
        "Playful phonics, counting games, nature walks and group projects.",
      tag: "Ages 2.5–3.5",
      quickPeek: [
        { icon: "🔤", label: "Phonics" },
        { icon: "🔢", label: "Counting" },
        { icon: "🌿", label: "Nature" }
      ]
    },
    {
      title: "Creative Arts",
      img: "/programs/art.jpg",
      shortDesc: "Painting, clay, songs & drama play.",
      longDesc:
        "Art time, music, clay work and pretend-play for imagination.",
      tag: "All ages",
      quickPeek: [
        { icon: "🎨", label: "Painting" },
        { icon: "🎭", label: "Drama" },
        { icon: "🎵", label: "Music" }
      ]
    }
  ];

  const trustBadges = [
    {
      title: "Safe & Caring",
      subtitle: "Trained staff & secure premises",
      variant: "mint"
    },
    {
      title: "Small Classes",
      subtitle: "Personal attention for every child",
      variant: "orange"
    }
  ];

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("reveal-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => {
          if (ent.isIntersecting) {
            ent.target.classList.add("reveal-in");
            io.unobserve(ent.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Programs — Little Flower</title>
      </Head>

      <style jsx>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 420ms ease, transform 420ms ease;
        }
        .reveal-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .img-interactive {
          transition: transform 300ms ease, box-shadow 300ms ease;
          cursor: pointer;
        }
        .img-interactive:hover {
          transform: scale(1.04);
          box-shadow: 0 12px 30px rgba(15, 59, 58, 0.08);
        }
      `}</style>

      <section className="py-16" style={{ backgroundColor: "#c6e2eeff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-[#204d63]">Programs</h1>
            <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
              Short, warm, playful learning for every age.
            </p>
          </header>

          {/* Program Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-10">
            {topPrograms.map((p) => (
              <ProgramCard
                key={p.title}
                title={p.title}
                shortDesc={p.shortDesc}
                image={p.img}
                tag={p.tag}
                quickPeek={p.quickPeek}
                modalText={p.longDesc}
              />
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {trustBadges.map((t) => (
              <TrustBadge
                key={t.title}
                title={t.title}
                subtitle={t.subtitle}
                variant={t.variant as any}
              />
            ))}
          </div>

          {/* Detailed Programs */}
          <section id="detailed-programs" className="mb-12">
            <h2 className="text-3xl font-bold text-[#204d63] mb-4">
              Detailed Learning Programs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[ 
                { title: "Play Group", icon: "🧸", text: "Gentle routines & playful discovery." },
                { title: "Nursery", icon: "🌈", text: "Stories, colours & happy group play." },
                { title: "LKG", icon: "📚", text: "Reading games, counting & teamwork." },
                { title: "UKG", icon: "⭐", text: "School-ready tasks & smart projects." } 
              ].map((d) => (
                <div
                  key={d.title}
                  className="bg-white p-6 rounded-2xl shadow-sm border text-center hover:-translate-y-1 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-2">{d.icon}</div>
                  <div className="font-semibold text-[#204d63]">{d.title}</div>
                  <div className="text-gray-700 text-sm mt-2">{d.text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Montessori Materials */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#204d63] mb-4">
              Montessori Materials We Use
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[ 
                { icon: "🧩", title: "Practical Life", small: "Pour, sort & simple tasks." },
                { icon: "🎨", title: "Sensorial", small: "Colours, textures & matching." },
                { icon: "🔤", title: "Language & Math", small: "Letters, numbers & hands-on fun." }
              ].map((m) => (
                <div
                  key={m.title}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-[1.03] transition"
                >
                  <div className="text-3xl mb-2">{m.icon}</div>
                  <div className="font-semibold text-[#204d63]">{m.title}</div>
                  <div className="text-gray-700 text-sm mt-2">{m.small}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Weekly Schedule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#204d63] mb-4">
              Weekly Learning Schedule
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[ 
                { day: "Mon", icon: "✨", act: "Sensory Fun" },
                { day: "Tue", icon: "📖", act: "Story Day" },
                { day: "Wed", icon: "🔢", act: "Number Play" },
                { day: "Thu", icon: "🎨", act: "Art Time" },
                { day: "Fri", icon: "🌿", act: "Nature Day" }
              ].map((d) => (
                <div
                  key={d.day}
                  className="bg-white p-4 rounded-2xl border text-center hover:-translate-y-1 hover:shadow-md transition"
                >
                  <div className="text-2xl mb-1">{d.icon}</div>
                  <div className="font-semibold text-[#60BFB2]">{d.day}</div>
                  <div className="text-gray-700 text-sm mt-1">{d.act}</div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </section>
    </>
  );
}
