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
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

