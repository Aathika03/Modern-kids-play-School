// src/pages/programs.tsx
import Head from "next/head";

export default function Programs(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Programs — Little Flower</title>
        <meta name="description" content="Programs at Little Flower Play School" />
      </Head>

      {/* INTRO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-extrabold mb-4 text-[#204d63]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Programs
          </h2>

          <p className="text-lg text-gray-700 mb-10 max-w-2xl">
            Gentle, play-led learning that helps little ones explore language,
            movement, art and social skills.
          </p>

          {/* PROGRAM CARDS */}
          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {[
              {
                title: "Toddler Play",
                desc: "Gentle sensory play and routines that build safety and curiosity.",
              },
              {
                title: "Pre-K Curriculum",
                desc: "Hands-on literacy, numeracy and nature exploration for confident beginners.",
              },
              {
                title: "Creative Arts",
                desc: "Art, music and drama to spark imagination and fine motor growth.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6 shadow-sm border border-gray-100 bg-white"
              >
                <div className="text-xl font-semibold mb-2 text-[#204d63]">
                  {p.title}
                </div>
                <div className="text-gray-600">{p.desc}</div>
                <div className="mt-4">
                  <button className="px-4 py-2 rounded-md bg-[#60BFB2] text-white font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ############ NEW ADDED PROGRAMS WITH ICONS ############ */}
          <h3 className="text-3xl font-bold mb-8 text-[#204d63]">
            Detailed Learning Programs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {[
              {
                title: "Play Group",
                desc: "A joyful space where toddlers explore, play, and develop early motor and social skills.",
                bg: "bg-[#E0F7F3]",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path
                      d="M12 2a5 5 0 015 5v2H7V7a5 5 0 015-5z"
                      stroke="#2FA697"
                      strokeWidth="1.6"
                      fill="none"
                    />
                    <circle cx="9" cy="14" r="2" fill="#2FA697" />
                    <circle cx="15" cy="14" r="2" fill="#2FA697" />
                    <path
                      d="M8 18c1.2 1 2.8 1 4 0"
                      stroke="#2FA697"
                      strokeWidth="1.6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Nursery",
                desc: "Early learning through fun activities that improve creativity and communication.",
                bg: "bg-[#FFF4CC]",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <rect
                      x="3"
                      y="3"
                      width="7"
                      height="7"
                      rx="2"
                      stroke="#D99A00"
                      strokeWidth="1.6"
                      fill="none"
                    />
                    <rect
                      x="14"
                      y="3"
                      width="7"
                      height="7"
                      rx="2"
                      stroke="#D99A00"
                      strokeWidth="1.6"
                      fill="none"
                    />
                    <rect
                      x="3"
                      y="14"
                      width="7"
                      height="7"
                      rx="2"
                      stroke="#D99A00"
                      strokeWidth="1.6"
                      fill="none"
                    />
                    <circle cx="17.5" cy="17.5" r="3.5" fill="#D99A00" />
                  </svg>
                ),
              },
              {
                title: "LKG",
                desc: "Phonics, storytelling, numbers and fun activities that build academic readiness.",
                bg: "bg-[#E9F5FF]",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path
                      d="M4 6h16v12H4z"
                      stroke="#3A87C6"
                      strokeWidth="1.6"
                      fill="none"
                    />
                    <path
                      d="M8 10h8"
                      stroke="#3A87C6"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 14h5"
                      stroke="#3A87C6"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "UKG",
                desc: "Structured learning with writing, numbers and concept activities.",
                bg: "bg-[#FFE2EC]",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path
                      d="M4 20l6-16 6 16"
                      stroke="#D64572"
                      strokeWidth="1.6"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 15h8"
                      stroke="#D64572"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Music & Movement",
                desc: "Dance, rhythm, action songs and exercises that boost coordination.",
                bg: "bg-blue-100",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path
                      d="M14 3v14a3 3 0 11-2-2.83V6l8-3v11a3 3 0 11-2-2.83V3z"
                      stroke="#2563EB"
                      strokeWidth="1.6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Art & Craft",
                desc: "Creative art activities that build imagination and fine motor skills.",
                bg: "bg-purple-100",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path
                      d="M3 21c4-6 8-10 12-12"
                      stroke="#7C3AED"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <circle cx="17" cy="7" r="3" fill="#7C3AED" />
                  </svg>
                ),
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${p.bg}`}>
                  {p.icon}
                </div>

                <h3 className="text-xl font-semibold mt-4 text-[#204d63]">
                  {p.title}
                </h3>

                <p className="text-gray-600 mt-2 leading-relaxed">{p.desc}</p>

                <button className="mt-4 text-[#60BFB2] font-medium hover:underline">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
          {/* ############ END OF ADDED SECTION ############ */}


          {/* SKILLS BY AGE */}
          <h3 className="text-3xl font-bold mb-6 text-[#204d63]">
            Skills Children Learn at Each Age Group
          </h3>

          <div className="grid gap-6 md:grid-cols-3 mb-20">
            {[
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
                age: "3.5 – 5 Years (Pre-KG & LKG)",
                skills: [
                  "Early reading readiness",
                  "Number concepts up to 100",
                  "Fine motor strengthening",
                  "Team play & communication",
                ],
              },
            ].map((group) => (
              <div
                key={group.age}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="text-xl font-semibold mb-4 text-[#204d63]">
                  {group.age}
                </div>
                <ul className="text-gray-700 space-y-2">
                  {group.skills.map((s) => (
                    <li key={s} className="flex items-start">
                      <span className="mr-2 text-[#60BFB2] font-bold">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* MONTESSORI MATERIALS */}
          <h3 className="text-3xl font-bold mb-6 text-[#204d63]">
            Montessori Materials We Use
          </h3>

          <p className="text-gray-700 max-w-3xl mb-8">
            Children learn best when they explore independently. Our classrooms
            include authentic Montessori materials that encourage hands-on discovery.
          </p>

          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {[
              {
                name: "Practical Life Materials",
                items: ["Pouring & spooning sets", "Buttoning frames", "Cleaning tools"],
              },
              {
                name: "Sensorial Materials",
                items: ["Pink tower", "Sound cylinders", "Color tablets"],
              },
              {
                name: "Early Literacy & Math",
                items: ["Sandpaper letters", "Number rods", "Moveable alphabet"],
              },
            ].map((m) => (
              <div
                key={m.name}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
              >
                <h4 className="text-xl font-semibold mb-3 text-[#204d63]">
                  {m.name}
                </h4>
                <ul className="text-gray-700 space-y-2">
                  {m.items.map((i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-[#60BFB2] font-bold">•</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* WEEKLY SCHEDULE */}
          <h3 className="text-3xl font-bold mb-6 text-[#204d63]">
            Weekly Learning Schedule
          </h3>

          <p className="text-gray-700 mb-6 max-w-2xl">
            A balanced weekly plan helps children explore academics, movement and
            creative play.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              { day: "Monday", act: "Literacy + Story Time" },
              { day: "Tuesday", act: "Math Concepts + Outdoor Play" },
              { day: "Wednesday", act: "Arts & Craft Day" },
              { day: "Thursday", act: "Music • Dance • Rhythm" },
              { day: "Friday", act: "Montessori Materials Exploration" },
            ].map((d) => (
              <div
                key={d.day}
                className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm"
              >
                <div className="font-semibold text-lg mb-2 text-[#60BFB2]">
                  {d.day}
                </div>
                <div className="text-gray-700">{d.act}</div>
              </div>
            ))}
          </div>

          <div className="h-20" />
        </div>
      </section>
    </>
  );
}

