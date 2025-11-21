// src/pages/admissions.tsx
import Head from "next/head";
import React from "react";

export default function Admissions(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Admissions — Little Flower Play School</title>
        <meta
          name="description"
          content="Admissions information, facilities and offers at Little Flower Play School"
        />
      </Head>

      <main className="min-h-screen bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Page heading */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#204d63]">
              Admissions
            </h1>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Welcome to Little Flower — we make the enrolment experience warm,
              simple and family-centered. Read below for programmes, fees,
              facilities and current offers.
            </p>
          </header>

          {/* Quick highlights */}
          <section className="grid gap-6 sm:grid-cols-3 mb-12">
            <div className="p-6 rounded-2xl bg-[#F2FFFB] border border-transparent shadow-sm flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-[#60BFB2] flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2L15 8H9L12 2Z" fill="currentColor" />
                    <path d="M4 20h16v-2H4v2z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-semibold text-[#0f3b3a]">Flexible Intake</div>
                <div className="text-sm text-gray-600">Admissions open year-round with rolling starts.</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFF8F1] border border-transparent shadow-sm flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-[#FFB86B] flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2a7 7 0 100 14 7 7 0 000-14z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-semibold text-[#3b2f2a]">Small Class Sizes</div>
                <div className="text-sm text-gray-600">Individual attention in mixed-age play groups.</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F3F9FF] border border-transparent shadow-sm flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-[#60A0E0] flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 6h8M8 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-semibold text-[#0f3b3a]">Safe & Caring</div>
                <div className="text-sm text-gray-600">Secure premises, trained staff and daily updates for families.</div>
              </div>
            </div>
          </section>

          {/* Admissions Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[#204d63]">How to Apply</h2>

            <ol className="space-y-6 list-decimal ml-6 text-gray-700">
              <li>
                <span className="font-semibold text-[#0f5250]">Explore & Visit</span> — Schedule a short visit or virtual tour to meet our team and experience the classrooms.
              </li>

              <li>
                <span className="font-semibold text-[#0f5250]">Complete Registration</span> — Provide basic family details and required documents (ID, immunisation & emergency contact).
              </li>

              <li>
                <span className="font-semibold text-[#0f5250]">Orientation</span> — We organise a gentle orientation to help your child settle in and for you to meet the educators.
              </li>
            </ol>
          </section>

          {/* Facilities */}
          <section className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-[#204d63]">Facilities</h3>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-xl bg-white border shadow-sm flex gap-4 items-start">
                <div className="mt-1">
                  <div className="h-10 w-10 rounded-md bg-[#60BFB2] flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Outdoor Play Area</div>
                  <div className="text-sm text-gray-600">Shaded play spaces and safe climbing structures for daily activity.</div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border shadow-sm flex gap-4 items-start">
                <div className="mt-1">
                  <div className="h-10 w-10 rounded-md bg-[#FFB86B] flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Creative Classroom</div>
                  <div className="text-sm text-gray-600">Materials for art, sensory play and early STEM exploration.</div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border shadow-sm flex gap-4 items-start">
                <div className="mt-1">
                  <div className="h-10 w-10 rounded-md bg-[#60A0E0] flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="2"/></svg>
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Healthy Meals</div>
                  <div className="text-sm text-gray-600">Nutritious snacks and meals prepared with dietary needs in mind.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Fees & Offers */}
          <section className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-[#204d63]">Fees & Current Offers</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-2xl bg-[#FFF9F4] border-l-4 border-[#FFB86B]">
                <h4 className="font-semibold mb-2">Program Fees (Indicative)</h4>
                <ul className="text-gray-700 list-disc ml-6 space-y-1">
                  <li>Playgroup (2–3 yrs): ₹8,000 / month</li>
                  <li>Nursery (3–4 yrs): ₹10,000 / month</li>
                  <li>Pre-K (4–5 yrs): ₹12,500 / month</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7FFFB] border-l-4 border-[#60BFB2]">
                <h4 className="font-semibold mb-2">Special Offers</h4>
                <ul className="text-gray-700 list-disc ml-6 space-y-1">
                  <li><span className="font-semibold">Sibling Discount:</span> 10% off for second child.</li>
                  <li><span className="font-semibold">Early Bird:</span> 5% discount for admissions confirmed 30+ days before term.</li>
                  <li><span className="font-semibold">Referral:</span> ₹2,500 credit for successful referrals.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="mb-16">
            <h4 className="text-lg font-semibold mb-3 text-[#204d63]">Important Notes</h4>
            <ul className="text-gray-700 list-disc ml-6 space-y-2">
              <li>All fees are indicative and subject to change. Please confirm current fees with the admissions team.</li>
              <li>Seats are allocated on a first-come, first-served basis after the registration is accepted.</li>
              <li>We provide part-time and full-time options — ask the office for available schedules.</li>
            </ul>
          </section>

          {/* ⭐⭐⭐ Frequently Asked Questions — moved above Need Help ⭐⭐⭐ */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#204d63] mb-6 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-5">

              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-[#60A0E0]">
                <p>
                  <strong>1. What documents are required for admission?</strong><br />
                  Birth certificate, 1 passport-size photo, and parent ID proof.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-[#60A0E0]">
                <p>
                  <strong>2. Is there an interview for children?</strong><br />
                  No interviews. We keep it child-friendly with a simple interaction.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-[#60A0E0]">
                <p>
                  <strong>3. Do you offer transportation?</strong><br />
                  Yes, transportation is available for selected areas.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-[#60A0E0]">
                <p>
                  <strong>4. When do admissions open?</strong><br />
                  Admissions are open year-round depending on seat availability.
                </p>
              </div>

            </div>
          </section>

          {/* ⭐⭐⭐ Need Help (now BELOW FAQ) ⭐⭐⭐ */}
          <section className="py-8 rounded-xl bg-[#F3F9FF] border border-transparent text-center mb-16">
            <h5 className="text-lg font-semibold mb-2 text-[#0f3b3a]">Need help?</h5>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our admissions team is happy to answer any questions.
              Visit us for a tour or email admissions@littleflower.example.
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
