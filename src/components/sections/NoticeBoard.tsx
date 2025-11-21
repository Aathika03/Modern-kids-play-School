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
  // If no notices, hide the entire section
  if (!notices || notices.length === 0) return null;

  return (
    <section className="py-14 bg-[#F3F9FF] border-y border-[#D3ECF6]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#204d63] text-center mb-8">
          Notice Board
        </h2>

        {/* Notice Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-[#0f3b3a]">
                  {notice.title}
                </h3>
                <span className="text-sm text-gray-500">{notice.date}</span>
              </div>

              <p className="text-gray-600 leading-relaxed">{notice.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
