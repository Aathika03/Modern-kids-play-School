// src/components/sections/DailySchedule.tsx
import React from "react";

export default function DailySchedule(): React.JSX.Element {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{ color: "#204d63", fontFamily: "Poppins, sans-serif" }}
          >
            Daily Schedule & Learning Focus
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A gentle, predictable routine helps children feel secure and ready
            to learn. Below is a sample day at Little Flower designed for play-led
            learning, social development and joyful discovery.
          </p>
        </header>

        {/* Timeline / Day parts */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="rounded-2xl p-6 bg-[#F3FFFB] border-l-4 border-[#60BFB2] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">
                AM
              </div>
              <div>
                <h4 className="font-semibold">Morning Arrival & Free Play</h4>
                <div className="text-sm text-gray-600">8:30 — 9:30</div>
              </div>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>Welcome & gentle arrivals</li>
              <li>Choice-based play and sensory invitations</li>
              <li>Circle time: songs & morning talk</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 bg-[#FFF8F1] border-l-4 border-[#FFB86B] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-md bg-[#FFB86B] flex items-center justify-center text-white font-semibold">
                MID
              </div>
              <div>
                <h4 className="font-semibold">Focused Project & Snack</h4>
                <div className="text-sm text-gray-600">9:30 — 11:30</div>
              </div>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>Small group activities & Montessori-style work</li>
              <li>Outdoor play and gross-motor time</li>
              <li>Healthy snack and social table manners</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 bg-[#F3F9FF] border-l-4 border-[#60A0E0] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-md bg-[#60A0E0] flex items-center justify-center text-white font-semibold">
                PM
              </div>
              <div>
                <h4 className="font-semibold">Quiet Time & Creative Play</h4>
                <div className="text-sm text-gray-600">12:00 — 3:00</div>
              </div>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>Rest or quiet activities (age dependent)</li>
              <li>Art, stories, dramatic play & sensory experiences</li>
              <li>Reflection circle & home time routines</li>
            </ul>
          </div>
        </div>

        {/* Skills by age groups */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#204d63" }}>
            Skills children learn at each age
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Age card */}
            <div className="rounded-2xl p-6 bg-white border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">
                  2–3
                </div>
                <div>
                  <div className="font-semibold">Toddlers (2–3 yrs)</div>
                  <div className="text-sm text-gray-600">Foundation skills</div>
                </div>
              </div>
              <ul className="text-gray-700 list-disc ml-5 space-y-1">
                <li>Self-help routines (feeding, washing hands)</li>
                <li>Language building through songs & naming games</li>
                <li>Basic social turn-taking</li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-white border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-[#FFB86B] flex items-center justify-center text-white font-semibold">
                  3–4
                </div>
                <div>
                  <div className="font-semibold">Nursery (3–4 yrs)</div>
                  <div className="text-sm text-gray-600">Early exploration</div>
                </div>
              </div>
              <ul className="text-gray-700 list-disc ml-5 space-y-1">
                <li>Early literacy & phonological awareness</li>
                <li>Fine motor control through arts & manipulation</li>
                <li>Cooperative play and simple problem solving</li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-white border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-[#60A0E0] flex items-center justify-center text-white font-semibold">
                  4–5
                </div>
                <div>
                  <div className="font-semibold">Pre-K (4–5 yrs)</div>
                  <div className="text-sm text-gray-600">School readiness</div>
                </div>
              </div>
              <ul className="text-gray-700 list-disc ml-5 space-y-1">
                <li>Early numeracy & pattern recognition</li>
                <li>Independent choices & project follow-through</li>
                <li>Friendship skills & emotional vocabulary</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Montessori Materials */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#204d63" }}>
            Montessori Materials & Invitations
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl p-6 bg-white border shadow-sm">
              <div className="font-semibold mb-2">Sensorial Stations</div>
              <p className="text-sm text-gray-600 mb-3">
                Materials to refine senses: texture boards, sound cylinders,
                matching color tablets.
              </p>
              <div className="text-xs text-gray-500">Encourages focused exploration</div>
            </div>

            <div className="rounded-2xl p-6 bg-white border shadow-sm">
              <div className="font-semibold mb-2">Practical Life Sets</div>
              <p className="text-sm text-gray-600 mb-3">
                Tasks like pouring, buttoning and sweeping that build independence.
              </p>
              <div className="text-xs text-gray-500">Builds motor skill & concentration</div>
            </div>

            <div className="rounded-2xl p-6 bg-white border shadow-sm">
              <div className="font-semibold mb-2">Early Math & Language</div>
              <p className="text-sm text-gray-600 mb-3">
                Counting beads, object sorting and language cards for early concepts.
              </p>
              <div className="text-xs text-gray-500">Promotes curiosity and reasoning</div>
            </div>
          </div>
        </section>

        {/* Weekly Schedule visual grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#204d63" }}>
            Weekly Schedule (sample)
          </h3>

          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full table-fixed text-left">
              <thead className="bg-[#F3F9FF]">
                <tr>
                  <th className="p-4 w-1/6">Time</th>
                  <th className="p-4">Monday</th>
                  <th className="p-4">Tuesday</th>
                  <th className="p-4">Wednesday</th>
                  <th className="p-4">Thursday</th>
                  <th className="p-4">Friday</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-semibold">8:30 — 9:30</td>
                  <td className="p-4">Free play & arrivals</td>
                  <td className="p-4">Free play & arrivals</td>
                  <td className="p-4">Free play & arrivals</td>
                  <td className="p-4">Free play & arrivals</td>
                  <td className="p-4">Free play & arrivals</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">9:30 — 10:30</td>
                  <td className="p-4 bg-[#F2FFFB]">Montessori work cycle</td>
                  <td className="p-4 bg-[#FFF8F1]">Creative arts</td>
                  <td className="p-4 bg-[#F3F9FF]">Outdoor play</td>
                  <td className="p-4 bg-[#F2FFFB]">Montessori work cycle</td>
                  <td className="p-4 bg-[#FFF8F1]">Story & language</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">10:30 — 11:00</td>
                  <td className="p-4">Snack & chat</td>
                  <td className="p-4">Snack & chat</td>
                  <td className="p-4">Snack & chat</td>
                  <td className="p-4">Snack & chat</td>
                  <td className="p-4">Snack & chat</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">11:00 — 12:00</td>
                  <td className="p-4 bg-[#FFF8F1]">Creative arts</td>
                  <td className="p-4 bg-[#F3F9FF]">Music & movement</td>
                  <td className="p-4 bg-[#F2FFFB]">Practical life</td>
                  <td className="p-4 bg-[#FFF8F1]">Sensory play</td>
                  <td className="p-4 bg-[#F3F9FF]">Group games</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">12:00 — 1:30</td>
                  <td className="p-4">Lunch & quiet time</td>
                  <td className="p-4">Lunch & quiet time</td>
                  <td className="p-4">Lunch & quiet time</td>
                  <td className="p-4">Lunch & quiet time</td>
                  <td className="p-4">Lunch & quiet time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA / note */}
        <section className="text-center mt-8">
          <p className="text-gray-700 max-w-2xl mx-auto">
            This is a sample weekly rhythm — actual daily routines are adapted to
            the needs of each group and the seasons. For details on specific class
            timings please contact our admissions team.
          </p>
        </section>
      </div>
    </section>
  );
}
