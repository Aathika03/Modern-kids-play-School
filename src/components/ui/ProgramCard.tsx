// src/components/ui/ProgramCard.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

type QuickPeekItem = {
  icon: string;
  label: string;
};

type Props = {
  title: string;
  shortDesc: string;
  image: string;
  tag?: string;
  quickPeek?: QuickPeekItem[];
  modalText?: string;
};

export default function ProgramCard({
  title,
  shortDesc,
  image,
  quickPeek = [],
  modalText = "",
  tag = "All Ages",
}: Props): React.JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Reveal on scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`bg-white rounded-2xl p-4 shadow-sm transform transition-all duration-300
        ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } hover:scale-[1.03]`}
      >
        {/* Cover Image */}
        <div
          className="w-full h-44 rounded-xl overflow-hidden relative cursor-pointer group"
          onClick={() => setShowModal(true)}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Age Tag */}
          <div className="absolute bottom-3 left-3 bg-white/85 px-3 py-1 text-xs font-medium rounded-md text-[#204d63] shadow">
            {tag}
          </div>
        </div>

        {/* Title + Short Desc */}
        <h3 className="text-xl font-semibold text-[#204d63] mt-3">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{shortDesc}</p>

        {/* Quick Peek Points */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {quickPeek.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center bg-[#F7FBFF] px-2 py-2 rounded-lg text-xs shadow-sm"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[#204d63]">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 w-full flex items-center justify-center gap-2 rounded-full px-4 py-2 text-white font-medium pulse-btn"
          style={{ background: "#60BFB2" }}
        >
          <span className="animate-bounce-slow text-base">✨</span>
          Explore Program
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setShowModal(false)}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div
            className="relative bg-white rounded-2xl shadow-lg max-w-xl w-full p-6 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold text-[#204d63]">{title}</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">{modalText}</p>

            {/* Modal Image */}
            <div className="mt-4 w-full h-48 rounded-xl overflow-hidden">
              <img src={image} className="w-full h-full object-cover" />
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full bg-gray-200 px-4 py-2 rounded-lg font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .pulse-btn {
          position: relative;
          overflow: hidden;
        }
        .pulse-btn::after {
          content: "";
          position: absolute;
          inset: -40%;
          background: radial-gradient(circle, rgba(255,255,255,0.2), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .pulse-btn:hover::after {
          opacity: 1;
        }

        .animate-bounce-slow {
          animation: bounce-slow 1.6s infinite;
        }
        @keyframes bounce-slow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
