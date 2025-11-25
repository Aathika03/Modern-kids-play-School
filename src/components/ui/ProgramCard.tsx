// src/components/ui/ProgramCard.tsx
"use client";
import { useState } from "react";

interface ProgramCardProps {
  title: string;
  shortDesc: string;
  longDesc: string;
  tag: string;
}

export default function ProgramCard({
  title,
  shortDesc,
  longDesc,
  tag,
}: ProgramCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold text-[#204d63]">{title}</h3>
        <span className="px-3 py-1 text-sm bg-[#c6e2ee] rounded-md text-[#204d63]">
          {tag}
        </span>
      </div>

      <p className="text-gray-700">{shortDesc}</p>

      {/* EXPANDED CONTENT */}
      {expanded && (
        <div className="mt-3 text-gray-700 leading-relaxed">
          <p>{longDesc}</p>

          <ul className="mt-3 list-disc ml-6 space-y-1">
            <li>Daily routine with structured & unstructured play</li>
            <li>Development of early communication & social skills</li>
            <li>Creative learning with music, art & sensory tasks</li>
            <li>Teacher-guided emotional expression activities</li>
            <li>Monthly take-home progress updates for parents</li>
          </ul>

          <p className="mt-3">
            Our goal is to help children explore confidently while building
            early learning habits in a warm, safe environment.
          </p>
        </div>
      )}

      {/* BUTTONS */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-[#60BFB2] font-semibold hover:underline"
      >
        {expanded ? "See less" : "Learn more"}
      </button>
    </div>
  );
}
