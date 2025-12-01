// src/components/sections/DailySchedule.tsx
import React from "react";
import { motion } from "framer-motion";

export default function DailySchedule(): React.JSX.Element {
  return (
    <motion.section
      className="py-16 bg-[#c6e2eeff]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.header
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{ color: "#204d63", fontFamily: "Poppins, sans-serif" }}
          >
            Daily Schedule & Learning Focus
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A gentle, predictable routine helps children feel secure and ready to learn.
            Below is a sample day at Little Flower designed for play-led learning,
            social development and joyful discovery.
          </p>
        </motion.header>

        {/* TIMELINE BLOCKS */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">

          {/* AM */}
          <motion.div
            className="rounded-2xl p-6 bg-[#F3FFFB] border-l-4 border-[#60BFB2] shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">
                AM
              </div>
              <div>
                <h4 className="font-semibold">Morning Arrival & Free Play</h4>
                <p className="text-sm text-gray-600">8:30 — 9:30</p>
              </div>
            </div>

            <ul className="text-gray-700 space-y-2">
              <li>Welcome & gentle arrivals</li>
              <li>Choice-based play and sensory invitations</li>
              <li>Circle time: songs & morning talk</li>
            </ul>
          </motion.div>

          {/* MID */}
          <motion.div
            className="rounded-2xl p-6 bg-[#FFF8F1] border-l-4 border-[#FFB86B] shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-md bg-[#FFB86B] flex items-center justify-center text-white font-semibold">
                MID
              </div>
              <div>
                <h4 className="font-semibold">Focused Project & Snack</h4>
                <p className="text-sm text-gray-600">9:30 — 11:30</p>
              </div>
            </div>

            <ul className="text-gray-700 space-y-2">
              <li>Small group activities & Montessori-style work</li>
              <li>Outdoor play and gross-motor time</li>
              <li>Healthy snack and social table manners</li>
            </ul>
          </motion.div>

          {/* PM */}
          <motion.div
            className="rounded-2xl p-6 bg-[#F3F9FF] border-l-4 border-[#60A0E0] shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-md bg-[#60A0E0] flex items-center justify-center text-white font-semibold">
                PM
              </div>
              <div>
                <h4 className="font-semibold">Quiet Time & Creative Play</h4>
                <p className="text-sm text-gray-600">12:00 — 3:00</p>
              </div>
            </div>

            <ul className="text-gray-700 space-y-2">
              <li>Rest or quiet activities (age dependent)</li>
              <li>Art, stories, dramatic play & sensory experiences</li>
              <li>Reflection circle & home time routines</li>
            </ul>
          </motion.div>

        </div>

        {/* AGE GROUPS */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#204d63" }}>
            Skills children learn at each age
          </h3>

          <div className="grid gap-6 md:grid-cols-3">

            {/* 2–3 */}
            <motion.div
              className="rounded-2xl p-6 bg:white border shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">
                  2–3
                </div>
                <div>
                  <p className="font-semibold">Toddlers (2–3 yrs)</p>
                  <p className="text-sm text-gray-600">Foundation skills</p>
                </div>
              </div>

              <ul className="text-gray-700 list-disc ml-5 space-y-1">
                <li>Self-help routines (feeding, washing hands)</li>
                <li>Language building through songs & naming games</li>
                <li>Basic social turn-taking</li>
              </ul>
            </motion.div>

            {/* 3–4 */}
            <motion.div
              className="rounded-2xl p-6 bg:white border shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-[#FFB86B] flex items-center justify-center text-white font-semibold">
                  3–4
                </div>
                <div>
                  <p className="font-semibold">Nursery (3–4 yrs)</p>
                  <p className="text-sm text-gray-600">Early exploration</p>
                </div>
              </div>

              <ul className="text-gray-700 list-disc ml-5 space-y-1">
                <li>Early literacy & phonological awareness</li>
                <li>Fine motor control through arts & manipulation</li>
                <li>Cooperative play and simple problem solving</li>
              </ul>
            </motion.div>

            {/* 4–5 */}
            <motion.div
              className="rounded-2xl p-6 bg:white border shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md bg-[#60A0E0] flex items:center justify-center text-white font-semibold">
                  4–5
                </div>
                <div>
                  <p className="font-semibold">Pre-K (4–5 yrs)</p>
                  <p className="text-sm text-gray-600">School readiness</p>
                </div>
              </div>

              <ul className="text-gray-700 list-disc ml-5 space-y-1">
                <li>Early numeracy & pattern recognition</li>
                <li>Independent choices & project follow-through</li>
                <li>Friendship skills & emotional vocabulary</li>
              </ul>
            </motion.div>

          </div>
        </section>

        {/* Montessori materials */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#204d63" }}>
            Montessori Materials & Invitations
          </h3>

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Sensorial Stations",
                desc:
                  "Materials to refine senses: texture boards, sound cylinders, matching color tablets.",
                note: "Encourages focused exploration"
              },
              {
                title: "Practical Life Sets",
                desc:
                  "Tasks like pouring, buttoning and sweeping that build independence.",
                note: "Builds motor skill & concentration"
              },
              {
                title: "Early Math & Language",
                desc:
                  "Counting beads, object sorting and language cards for early concepts.",
                note: "Promotes curiosity and reasoning"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-2xl p-6 bg:white border shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <p className="font-semibold mb-2">{item.title}</p>
                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                <p className="text-xs text-gray-500">{item.note}</p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* WEEKLY TABLE */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
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
                  <td className="p-4">Montessori work cycle</td>
                  <td className="p-4">Creative arts</td>
                  <td className="p-4">Outdoor play</td>
                  <td className="p-4">Montessori work cycle</td>
                  <td className="p-4">Story & language</td>
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
                  <td className="p-4">Creative arts</td>
                  <td className="p-4">Music & movement</td>
                  <td className="p-4">Practical life</td>
                  <td className="p-4">Sensory play</td>
                  <td className="p-4">Group games</td>
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
        </motion.section>

        {/* CTA NOTE */}
        <motion.section
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 max-w-2xl mx-auto">
            This is a sample weekly rhythm — actual daily routines are adapted to the needs
            of each group and the seasons. For details on specific class timings please
            contact our admissions team.
          </p>
        </motion.section>
      </div>
    </motion.section>
  );
}
