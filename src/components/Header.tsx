"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

export default function Header() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="홈 이동">
          PORTFOLIO
        </Link>

        <nav className={`primary-nav ${isOpen ? "is-open" : ""}`} id="primary-nav" aria-label="주요 메뉴">
          <Link href="/#hero" onClick={() => setIsOpen(false)}>Hero</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="/#projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/resume" onClick={() => setIsOpen(false)} style={{ fontWeight: "bold", borderLeft: "3px solid var(--primary)" }}>
            최종 이력서 보기
          </Link>
        </nav>

        <div className="nav-actions">

          {mounted && (
            <button
              onClick={toggleTheme}
              className="theme-toggle btn btn-small btn-ghost"
              type="button"
              aria-label="테마 전환"
            >
              {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-toggle"
            type="button"
            aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isOpen}
            aria-controls="primary-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
