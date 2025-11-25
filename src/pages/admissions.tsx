// src/pages/admissions.tsx
import Head from "next/head";
import React, { useState } from "react";

export default function Admissions(): React.JSX.Element {
  const faqs: Array<[string, string]> = [
    ["What documents are required?", "Birth certificate, 1 passport-size photo, and parent ID proof."],
    ["Is there an interview for children?", "No interviews. We keep it child-friendly with a simple interaction to help children settle."],
    ["Do you offer transportation?", "Yes — transportation is available for selected areas. Routes and timings are shared at admission."],
    ["When do admissions open?", "Admissions are open year-round depending on seat availability; please check with admissions for current seats."],
    ["What is the age criteria for admission?", "Children between 1.8 years to 5.5 years can join depending on the program."],
    ["Can parents visit the school before enrolling?", "Absolutely! Parents can book a tour anytime to explore our classrooms, play areas, and teaching environment."],
    ["Do you provide updates about the child’s daily activities?", "Yes — parents receive regular updates, photos and progress insights through our parent communication system."]
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <>
      <Head>
        <title>Admissions — Little Flower Play School</title>
        <meta
          name="description"
          content="Admissions information, facilities and offers at Little Flower Play School"
        />
      </Head>

      <main
        className="min-h-screen pt-10 sm:pt-12 pb-0 px-4 sm:px-6 md:px-8"
        style={{ backgroundColor: "#c6e2eeff" }}
      >
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#204d63]">
              Admissions
            </h1>
            <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Welcome to Little Flower — we make the enrolment experience warm,
              simple and family-centered.
            </p>
          </header>

          {/* Highlights */}
          <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            <div className="p-5 rounded-2xl bg-[#F2FFFB] shadow-sm flex gap-4 items-start">
              <div className="h-9 w-9 rounded-lg bg-[#60BFB2] flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8H9L12 2Z" fill="currentColor"/><path d="M4 20h16v-2H4v2z" fill="currentColor"/></svg>
              </div>
              <div>
                <div className="font-semibold text-[#0f3b3a] text-sm sm:text-base">Flexible Intake</div>
                <div className="text-xs text-gray-600">Admissions open year-round.</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF8F1] shadow-sm flex gap-4 items-start">
              <div className="h-9 w-9 rounded-lg bg-[#FFB86B] flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="7" fill="currentColor"/></svg>
              </div>
              <div>
                <div className="font-semibold text-[#3b2f2a] text-sm sm:text-base">Small Class Sizes</div>
                <div className="text-xs text-gray-600">Individual attention.</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F3F9FF] shadow-sm flex gap-4 items-start">
              <div className="h-9 w-9 rounded-lg bg-[#60A0E0] flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 12h16" stroke="currentColor" strokeWidth="2"/><path d="M8 6h8M8 18h8" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <div>
                <div className="font-semibold text-[#0f3b3a] text-sm sm:text-base">Safe & Caring</div>
                <div className="text-xs text-gray-600">Secure environment.</div>
              </div>
            </div>
          </section>

          {/* How to Apply */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3 text-[#204d63]">How to Apply</h2>

            <ol className="space-y-4 list-decimal ml-5 text-gray-700 text-sm sm:text-base">
              <li><strong className="text-[#0f5250]">Explore & Visit</strong> — Schedule a short tour.</li>
              <li><strong className="text-[#0f5250]">Complete Registration</strong> — Submit required documents.</li>
              <li><strong className="text-[#0f5250]">Orientation</strong> — Gentle settling-in process.</li>
            </ol>
          </section>

          {/* Facilities */}
          <section className="mb-10">
            <h3 className="text-xl font-bold mb-3 text-[#204d63]">Facilities</h3>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              <div className="p-5 rounded-xl bg-white border shadow-sm flex gap-3">
                <div className="h-9 w-9 rounded-md bg-[#60BFB2] flex items-center justify-center text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-sm">Outdoor Play Area</div>
                  <div className="text-xs text-gray-600">Safe play spaces.</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border shadow-sm flex gap-3">
                <div className="h-9 w-9 rounded-md bg-[#FFB86B] flex items-center justify-center text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 4v16" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-sm">Creative Classroom</div>
                  <div className="text-xs text-gray-600">Art & sensory materials.</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border shadow-sm flex gap-3">
                <div className="h-9 w-9 rounded-md bg-[#60A0E0] flex items-center justify-center text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="10" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-sm">Healthy Meals</div>
                  <div className="text-xs text-gray-600">Nutritious food options.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Fees */}
          <section className="mb-10">
            <h3 className="text-xl font-bold mb-3 text-[#204d63]">Fees & Offers</h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-[#FFF9F4] border-l-4 border-[#FFB86B] text-sm">
                <h4 className="font-semibold mb-2">Program Fees</h4>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Playgroup: ₹8,000/mo</li>
                  <li>Nursery: ₹10,000/mo</li>
                  <li>Pre-K: ₹12,500/mo</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7FFFB] border-l-4 border-[#60BFB2] text-sm">
                <h4 className="font-semibold mb-2">Special Offers</h4>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Sibling Discount:</strong> 10% off.</li>
                  <li><strong>Early Bird:</strong> Extra 5% off.</li>
                  <li><strong>Referral:</strong> ₹2,500 credit.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Notes */}
          <section className="mb-10">
            <h4 className="text-lg font-semibold mb-2 text-[#204d63]">Important Notes</h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
              <li>Fees may vary and are subject to confirmation.</li>
              <li>Seats are first-come, first-served.</li>
              <li>Part-time & full-day options available.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#204d63] mb-5 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow border-l-4 border-[#60A0E0] overflow-hidden">
                  <button
                    onClick={() => toggleFaq(i)}
                    aria-expanded={openIndex === i}
                    className="w-full text-left px-4 py-3 flex items-center justify-between"
                  >
                    <div className="font-semibold text-sm text-[#0f3b3a]">
                      {i + 1}. {faq[0]}
                    </div>

                    <svg
                      className={`w-4 h-4 transform transition-transform ${openIndex === i ? "rotate-180" : "rotate-0"}`}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6"/>
                    </svg>
                  </button>

                  <div
                    className={`px-4 pb-3 transition-all ${
                      openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="text-gray-700 text-sm">{faq[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Need Help — FINAL SECTION (touches footer) */}
          <section className="py-6 rounded-xl bg-[#F3F9FF] text-center px-4">
            <h5 className="text-base font-semibold mb-1 text-[#0f3b3a]">
              Need help?
            </h5>
            <p className="text-gray-700 text-sm max-w-2xl mx-auto">
              Our admissions team is happy to assist you. Email: admissions@littleflower.example
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
