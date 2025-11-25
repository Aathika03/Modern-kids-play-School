// src/components/layout/Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props): React.JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full px-4 sm:px-6 md:px-8">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="w-full mt-10 md:mt-14">
        <Footer />
      </footer>
    </div>
  );
}
