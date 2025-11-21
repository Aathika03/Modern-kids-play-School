// src/pages/book-tour-success.tsx
import React from "react";
import Link from "next/link";

export default function BookTourSuccess(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-10 text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "#204d63" }}>
          Thank you — request received!
        </h1>
        <p className="text-gray-700 mb-6">
          We received your request for a tour. Our admissions team will contact you shortly to confirm the details.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/">
            <button className="px-6 py-3 rounded-md bg-[#60BFB2] text-white font-medium">
              Back to Home
            </button>
          </Link>

          <Link href="/admissions">
            <button className="px-6 py-3 rounded-md border">Admissions</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
