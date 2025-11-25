// src/components/sections/NoticeBoard.tsx
import React from "react";

interface Notice {
  id: number;
  title: string;
  date: string;
  message: string;
}

interface NoticeBoardProps {
  notices: Notice[];
}

export default function NoticeBoard({ notices }: NoticeBoardProps) {
  if (!notices || notices.length === 0) return null;

  return (
    <section className="py-12 md:py-14 bg-[#c6e2eeff] border-y border-[#D3ECF6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#204d63] text-center mb-8">
          Notice Board
        </h2>

        {/* Notice Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 transition-all"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-[#0f3b3a]">
                  {notice.title}
                </h3>
                <span className="text-xs sm:text-sm text-gray-500">
                  {notice.date}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {notice.message}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
