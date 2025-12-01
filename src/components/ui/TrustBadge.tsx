// src/components/ui/TrustBadge.tsx
import React from "react";

type Props = {
  title: string;
  subtitle: string;
  variant?: "mint" | "orange";
};

export default function TrustBadge({
  title,
  subtitle,
  variant = "mint",
}: Props): React.JSX.Element {
  const colors =
    variant === "orange"
      ? "bg-[#FFF3E8] text-[#B75A00]"
      : "bg-[#E9FBF7] text-[#0F3B3A]";

  return (
    <div
      className={`rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-3 hover:scale-[1.02] transition-transform ${colors}`}
    >
      {/* Cute icon based on type */}
      <div className="text-3xl">
        {variant === "orange" ? "🧡" : "💚"}
      </div>

      <div>
        <div className="font-semibold text-lg">{title}</div>
        <div className="text-sm opacity-80 mt-1">{subtitle}</div>
      </div>
    </div>
  );
}
