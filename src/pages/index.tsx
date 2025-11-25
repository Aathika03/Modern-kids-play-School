// src/pages/index.tsx
import Hero from "../components/layout/Hero";
import DailySchedule from "../components/sections/DailySchedule";
import NoticeBoard from "../components/sections/NoticeBoard";

export default function Home() {
  const notices = [
    {
      id: 1,
      title: "Holiday Notice",
      date: "Nov 20, 2025",
      message: "School will remain closed on Friday due to maintenance.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Background color for all sections after hero */}
      <div className="bg-[#F3F9FF] pt-12 pb-20">
        <NoticeBoard notices={notices} />
        <DailySchedule />
      </div>
    </main>
  );
}
