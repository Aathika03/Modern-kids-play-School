// src/pages/gallery.tsx
import Head from "next/head";
import { useState } from "react";

export default function Gallery() {
  const images = [
    { src: "/gallery/activity.jpg", caption: "Creative Playtime Moments" },
    { src: "/gallery/activity2.jpg", caption: "Hands-On Learning Activities" },
    { src: "/gallery/classroom.jpeg", caption: "Our Colorful Classroom" },
    { src: "/gallery/playground.jpg", caption: "Playground Adventures" },
    { src: "/gallery/activity3.jpg", caption: "Joyful Group Activities" },
    { src: "/gallery/activity5.jpg", caption: "Art & Imagination at Work" },
    { src: "/gallery/activity6.jpeg", caption: "Fun with Early Learning Tools" },
    { src: "/gallery/activity7.jpeg", caption: "Exploring Through Play" },
    { src: "/gallery/activity8.jpeg", caption: "Smiles That Brighten Our Day" },
    { src: "/gallery/activity9.jpeg", caption: "Outdoor Fun and Movement" },
    { src: "/gallery/activity4.jpeg", caption: "Creative Expressions" },
    { src: "/gallery/activity1.jpeg", caption: "Learning with Curiosity" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ src: string; caption: string } | null>(null);

  const openLightbox = (img: { src: string; caption: string }) => {
    setCurrentImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <Head>
        <title>Gallery — Little Flower Play School</title>
      </Head>

      <main className="min-h-screen bg-[#e8f6ff] py-12 px-6">

        {/* INTRO SECTION */}
        <section className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[#204d63] mb-6">
            A Glimpse Into Our Little World
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At Little Flower Play School, every day is a new beginning filled with discovery,
            laughter, and growth. Our children learn not only through books, but through hands-on
            experiences that spark imagination and build confidence.
            <br /><br />
            Our gallery captures the heart of our school — little hands creating, little feet
            exploring, and little minds blooming with ideas. These snapshots showcase the warmth
            of our environment, the dedication of our teachers, and the joy of childhood.
          </p>
        </section>

        {/* PAGE TITLE */}
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-[#333]">Our Gallery</h2>
          <p className="text-lg text-gray-600 mt-3">
            Tap an image to view it in full size!
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.jpg";
                }}
              />
              <p className="text-center text-sm font-medium text-gray-700 py-2 px-2">
                {img.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="h-20" />
      </main>

      {/* LIGHTBOX OVERLAY */}
      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
          onClick={closeLightbox}
        >
          <div className="max-w-3xl mx-auto p-4">
            <img
              src={currentImage.src}
              alt={currentImage.caption}
              className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-lg"
            />
            <p className="text-center text-white mt-4 text-lg">
              {currentImage.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
