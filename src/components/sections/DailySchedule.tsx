// src/components/sections/DailySchedule.tsx
import React from "react";
import { motion } from "framer-motion";

export default function DailySchedule(): React.JSX.Element {
  return (
    <motion.section
      className="py-12 md:py-16 bg-[#c6e2eeff]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.header
          className="text-center mb-10 px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug"
            style={{ color: "#204d63", fontFamily: "Poppins, sans-serif" }}
          >
            Daily Schedule & Learning Focus
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A gentle, predictable routine helps children feel secure and ready to learn.
            Below is a sample day at Little Flower designed for play-led learning,
            social development and joyful discovery.
          </p>
        </motion.header>

        {/* TIMELINE BLOCKS */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-12">

          {/* AM */}
          <motion.div
            className="rounded-2xl p-5 sm:p-6 bg-[#F3FFFB] border-l-4 border-[#60BFB2] shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                AM
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg">Morning Arrival & Free Play</h4>
                <p className="text-sm text-gray-600">8:30 — 9:30</p>
              </div>
            </div>

            <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
              <li>Welcome & gentle arrivals</li>
              <li>Choice-based play and sensory invitations</li>
              <li>Circle time: songs & morning talk</li>
            </ul>
          </motion.div>

          {/* MID */}
          <motion.div
            className="rounded-2xl p-5 sm:p-6 bg-[#FFF8F1] border-l-4 border-[#FFB86B] shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-[#FFB86B] flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                MID
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg">Focused Project & Snack</h4>
                <p className="text-sm text-gray-600">9:30 — 11:30</p>
              </div>
            </div>

            <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
              <li>Small group activities & Montessori-style work</li>
              <li>Outdoor play and gross-motor time</li>
              <li>Healthy snack and social table manners</li>
            </ul>
          </motion.div>

          {/* PM */}
          <motion.div
            className="rounded-2xl p-5 sm:p-6 bg-[#F3F9FF] border-l-4 border-[#60A0E0] shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-[#60A0E0] flex items:center justify-center text-white font-semibold text-sm sm:text-base">
                PM
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg">Quiet Time & Creative Play</h4>
                <p className="text-sm text-gray-600">12:00 — 3:00</p>
              </div>
            </div>

            <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
              <li>Rest or quiet activities (age dependent)</li>
              <li>Art, stories, dramatic play & sensory experiences</li>
              <li>Reflection circle & home time routines</li>
            </ul>
          </motion.div>

        </div>

        {/* AGE GROUPS */}
        <section className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "#204d63" }}>
            Skills children learn at each age
          </h3>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">

            {/* 2–3 */}
            <motion.div
              className="rounded-2xl p-5 sm:p-6 bg-white border shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white font-semibold">
                  2–3
                </div>
                <div>
                  <p className="font-semibold text-base sm:text-lg">Toddlers (2–3 yrs)</p>
                  <p className="text-sm text-gray-600">Foundation skills</p>
                </div>
              </div>

              <ul className="text-gray-700 list-disc ml-5 space-y-1 text-sm sm:text-base">
                <li>Self-help routines (feeding, washing hands)</li>
                <li>Language building through songs & naming games</li>
                <li>Basic social turn-taking</li>
              </ul>
            </motion.div>

            {/* 3–4 */}
            <motion.div
              className="rounded-2xl p-5 sm:p-6 bg-white border shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-[#FFB86B] flex items-center justify-center text-white font-semibold">
                  3–4
                </div>
                <div>
                  <p className="font-semibold text-base sm:text-lg">Nursery (3–4 yrs)</p>
                  <p className="text-sm text-gray-600">Early exploration</p>
                </div>
              </div>

              <ul className="text-gray-700 list-disc ml-5 space-y-1 text-sm sm:text-base">
                <li>Early literacy & phonological awareness</li>
                <li>Fine motor control through arts & manipulation</li>
                <li>Cooperative play and simple problem solving</li>
              </ul>
            </motion.div>

            {/* 4–5 */}
            <motion.div
              className="rounded-2xl p-5 sm:p-6 bg-white border shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-md bg-[#60A0E0] flex items:center justify-center text-white font-semibold">
                  4–5
                </div>
                <div>
                  <p className="font-semibold text-base sm:text-lg">Pre-K (4–5 yrs)</p>
                  <p className="text-sm text-gray-600">School readiness</p>
                </div>
              </div>

              <ul className="text-gray-700 list-disc ml-5 space-y-1 text-sm sm:text-base">
                <li>Early numeracy & pattern recognition</li>
                <li>Independent choices & project follow-through</li>
                <li>Friendship skills & emotional vocabulary</li>
              </ul>
            </motion.div>

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
          <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "#204d63" }}>
            Weekly Schedule (sample)
          </h3>

          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-[#F3F9FF] text-xs sm:text-sm">
                <tr>
                  <th className="p-4 w-1/6 font-semibold">Time</th>
                  <th className="p-4 font-semibold">Monday</th>
                  <th className="p-4 font-semibold">Tuesday</th>
                  <th className="p-4 font-semibold">Wednesday</th>
                  <th className="p-4 font-semibold">Thursday</th>
                  <th className="p-4 font-semibold">Friday</th>
                </tr>
              </thead>

              <tbody className="text-xs sm:text-sm">
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
          className="text-center mt-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            This is a sample weekly rhythm — actual daily routines are adapted to the needs
            of each group and the seasons. For details on specific class timings please
            contact our admissions team.
          </p>
        </motion.section>

      </div>
    </motion.section>
  );
}
