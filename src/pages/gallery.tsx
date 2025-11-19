// src/pages/gallery.tsx
import Head from "next/head";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery — Little Flower Play School</title>
      </Head>

      <main className="min-h-screen bg-[#F1FAFD] py-12 px-6">
        {/* Page Title */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#333] tracking-wide">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 mt-3">
            A glimpse of the joyful memories, creative moments, and playful
            learning at Little Flower Play School.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {[
            "/gallery/activity.jpg",
            "/gallery/activity2.jpg",
            "/gallery/classroom.jpeg",
            "/gallery/playground.jpg",
            "/gallery/activity3.jpg",
          ].map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg bg-white hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.jpg";
                }}
              />
            </div>
          ))}
        </div>

        <div className="h-24" />
      </main>
    </>
  );
}
