// src/components/ui/TrustBadge.tsx
import React from "react";

type TrustBadgeProps = {
  title: string;
  subtitle?: string;
  variant?: "mint" | "orange" | "blue";
};

const BG: Record<string, string> = {
  mint: "bg-[#EAF7F6]",
  orange: "bg-[#FFF7EB]",
  blue: "bg-[#EEF7FF]",
};

const ACCENT: Record<string, string> = {
  mint: "#60BFB2",
  orange: "#FFB86B",
  blue: "#60A0E0",
};

export default function TrustBadge({ title, subtitle, variant = "mint" }: TrustBadgeProps): React.JSX.Element {
  return (
    <div className={`rounded-xl p-3 flex items-center gap-3 ${BG[variant]} shadow-sm border border-transparent`}>
      <div
        className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: ACCENT[variant], color: "#fff" }}
        aria-hidden
      >
        {/* simple check mark icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div>
        <div className="text-sm font-semibold text-[#0f3b3a]">{title}</div>
        {subtitle && <div className="text-xs text-gray-600">{subtitle}</div>}
      </div>
    </div>
  );
}
