"use client";

import { useEffect } from "react";
import { Backgrounds } from "./Backgrounds";
import { ChromeTop } from "./ChromeTop";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Sidebar } from "./Sidebar";
import { Skills } from "./Skills";

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const element of document.querySelectorAll<HTMLElement>(".reveal")) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
}

function useJumpKeys() {
  useEffect(() => {
    const sectionByKey: Record<string, string> = {
      g: "hero",
      s: "skills",
      e: "experience",
      d: "education",
      c: "contact",
    };
    const handler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      const id = sectionByKey[event.key.toLowerCase()];
      if (!id) return;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
}

export function CVPage() {
  useRevealOnScroll();
  useJumpKeys();

  return (
    <>
      <Backgrounds />
      <div className="frame">
        <ChromeTop />
        <Sidebar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
