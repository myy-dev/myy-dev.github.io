import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personalInfo } = portfolioData;

  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "4px" }}>
          Contact: {personalInfo.email} | GitHub: <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>github.com/myy-dev</a>
        </p>
      </div>
    </footer>
  );
}
