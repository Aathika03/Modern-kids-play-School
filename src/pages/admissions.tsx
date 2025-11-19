// src/pages/admissions.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function Admissions(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Admissions — Little Flower</title>
        <meta name="description" content="Admissions information for Little Flower Play School" />
      </Head>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-3">Admissions</h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            We accept applications throughout the year. Below is a simple guide to our admissions process.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-2xl border bg-[#F7FFFD]">
              <h3 className="font-semibold mb-2">Step 1 — Visit</h3>
              <p className="text-sm text-gray-700">Schedule a tour to see the classrooms and meet our team.</p>
            </div>

            <div className="p-6 rounded-2xl border bg-[#FDFDF7]">
              <h3 className="font-semibold mb-2">Step 2 — Application</h3>
              <p className="text-sm text-gray-700">Fill a short registration form and submit required documents.</p>
            </div>

            <div className="p-6 rounded-2xl border bg-[#F7F8FF]">
              <h3 className="font-semibold mb-2">Step 3 — Start</h3>
              <p className="text-sm text-gray-700">You’ll receive orientation details and a start date.</p>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-lg font-semibold">Apply now</h4>
            <p className="text-gray-600 mt-2 mb-4 max-w-xl">
              To begin, book a visit or submit the pre-admission form. We’ll be in touch within 2–3 business days.
            </p>

            <div className="flex gap-4">
              <Link href="/programs">
                <button className="px-5 py-2 rounded-md bg-[#60BFB2] text-white font-medium">Programs</button>
              </Link>
              <Link href="/contact">
                <button className="px-5 py-2 rounded-md border border-gray-200 text-gray-800 bg-white">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
