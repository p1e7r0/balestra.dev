"use client";

import { useEffect, useState } from "react";
import Backgrounds from "./Backgrounds";
import ChromeTop from "./ChromeTop";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Skills from "./Skills";
import { navKeyMap, navLinks } from "@/data/cv";

export default function CVPage() {
  const [activeId, setActiveId] = useState<string>(navLinks[0]?.id ?? "hero");

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      revealObserver.observe(element);
    });

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((element): element is HTMLElement => element !== null);

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((section) => navObserver.observe(section));

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      const id = navKeyMap[event.key.toLowerCase()];
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      <Backgrounds />
      <div className="frame">
        <ChromeTop />
        <Sidebar activeId={activeId} />
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
