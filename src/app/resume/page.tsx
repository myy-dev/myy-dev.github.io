"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

export default function ResumePage() {
  const { personalInfo, experiences, education, certifications, projects, skills } = portfolioData;

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="print:bg-white print:py-0 print:px-0" style={{ paddingBottom: "4rem" }}>

      <div className="container print-hidden" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem", paddingBottom: "1.5rem" }}>
        <Link href="/" className="btn btn-small btn-ghost" style={{ fontWeight: "700" }}>
          ← 홈으로 이동
        </Link>
        <button
          onClick={handlePrint}
          className="btn btn-small"
          style={{ fontWeight: "700" }}
        >
          📄 PDF로 저장 / 인쇄
        </button>
      </div>

      <article className="container">

        {/* =========================================================================
                                    1. 윤대영 이력서
           ========================================================================= */}
        <section className="section" style={{ borderBottom: "1px solid var(--line)", paddingTop: "1rem" }}>
          <h1 style={{ fontWeight: "800", marginBottom: "0.5rem" }}>{personalInfo.name} 이력서</h1>
          <p className="eyebrow" style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
            {personalInfo.role}
          </p>

          <div className="hero-grid" style={{ marginBottom: "2rem" }}>
            <div className="space-y-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="p-4" style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)" }}>
                <h3 style={{ fontWeight: "800", fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--primary)" }}>
                  💡 {personalInfo.tagline1}
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "var(--muted)" }}>
                  42서울 선발 과정에서 탈락했지만, 목표를 포기하지 않고 삼성 청년 SW 아카데미에 입과해 개발 역량을 쌓았습니다.
                  SW 역량 테스트 A형 취득에 실패했을 때도 알고리즘 스터디로 부족한 부분을 보완했고, 재도전 끝에 A형을 취득했습니다.
                  현재는 프론트엔드 개발자로서의 기반을 다지며, 장기적으로 AI Product Engineer를 목표로 하고 있습니다.
                </p>
              </div>

            </div>

            <figure className="hero-visual" style={{ width: "min(280px, 100%)", borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--line)", boxShadow: "var(--shadow)" }}>
              <Image
                width={1200}
                height={1543}
                src={personalInfo.profileImage}
                alt="윤대영 이력서용 프로필 측면 이미지"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </figure>
          </div>
        </section>

        <section className="section" style={{ borderBottom: "1px solid var(--line)" }}>
          <h2 style={{ fontWeight: "800", borderLeft: "4px solid var(--primary)", paddingLeft: "0.75rem" }}>인적 사항 & 자격</h2>

          <div className="hero-grid" style={{ marginTop: "1.5rem", gap: "2rem" }}>
            {/* 기본 인적 사항 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.95rem" }}>
              <p><strong>이름:</strong> {personalInfo.name}</p>
              <p><strong>이메일:</strong> {personalInfo.email}</p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                  {personalInfo.github}
                </a>
              </p>

              <div style={{ marginTop: "0.5rem" }}>
                <strong style={{ display: "block", marginBottom: "0.5rem" }}>직무 관련 경험 사항:</strong>
                <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", color: "var(--muted)", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {experiences.map((exp, idx) => (
                    <li key={idx}>
                      <strong>{exp.organization}</strong>: {exp.period} ({exp.role})
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 어학 및 자격 사항 배지 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <strong>어학 및 자격 사항:</strong>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "0.5rem 0.8rem",
                      border: "1px solid var(--line)",
                      borderRadius: "999px",
                      background: "var(--surface)",
                      fontSize: "0.85rem",
                      fontWeight: "600"
                    }}
                  >
                    🏆 {cert.title} ({cert.date}) - {cert.issuer}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 교육 사항 */}
        <section className="section" style={{ borderBottom: "1px solid var(--line)" }}>
          <h2 style={{ fontWeight: "800", borderLeft: "4px solid var(--primary)", paddingLeft: "0.75rem" }}>교육 사항 (Education)</h2>
          <div style={{ marginTop: "1.5rem" }}>
            {education.map((edu, index) => (
              <div key={index} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "1.25rem", boxShadow: "var(--shadow)" }}>
                <h3 style={{ fontWeight: "800", fontSize: "1.1rem" }}>{edu.school} 경영학과</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "0.25rem" }}>
                  <strong>기간:</strong> {edu.period} | <strong>평점평균:</strong> {edu.gpa} (만점 4.5 기준)
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
                                    2. 윤대영 포트폴리오 (기술 숙련도)
           ========================================================================= */}
        <section className="section" style={{ borderBottom: "1px solid var(--line)" }}>
          <h1 style={{ fontWeight: "850", fontSize: "2.2rem", marginTop: "2rem", marginBottom: "1rem" }}>윤대영 포트폴리오</h1>
          <h2 style={{ fontWeight: "800", borderLeft: "4px solid var(--primary)", paddingLeft: "0.75rem", marginBottom: "1.5rem" }}>기술 숙련도 (Skills)</h2>

          <ul className="skill-list" style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none", padding: 0 }}>
            {skills.map((skill, index) => (
              <li
                key={index}
                style={{
                  padding: "1rem",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  background: "var(--surface)",
                  boxShadow: "var(--shadow)",
                  width: "100%",
                  textAlign: "left"
                }}
              >
                ✅ {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* =========================================================================
                                    3. 프로젝트 상세 분석
           ========================================================================= */}
        <section className="section">
          <h2 style={{ fontWeight: "800", borderLeft: "4px solid var(--primary)", paddingLeft: "0.75rem", marginBottom: "2rem" }}>
            수행 프로젝트 & 트러블슈팅 심층 분석 (Case Studies)
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {projects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  padding: "2rem",
                  boxShadow: "var(--shadow)"
                }}
              >
                {/* 프로젝트 기본 정보 */}
                <div style={{ borderBottom: "2px solid var(--line)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
                  <span className="eyebrow" style={{ fontSize: "0.85rem", textTransform: "uppercase" }}>SSAFY 11기 대표작</span>
                  <h3 style={{ fontSize: "1.6rem", fontWeight: "900", color: "var(--primary)", marginTop: "0.25rem" }}>
                    {project.title}
                  </h3>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.75rem" }}>
                    <span>📅 <strong>일정:</strong> {project.period}</span>
                    <span>👤 <strong>담당:</strong> {project.role}</span>
                    <span>👥 <strong>참여 인력:</strong> {project.teamSize}</span>
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <strong>🛠️ 기술 스택:</strong>{" "}
                    <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.35rem", marginLeft: "0.5rem" }}>
                      {project.techStack.map((tech) => (
                        <span key={tech} className="btn btn-small btn-ghost" style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem", cursor: "default" }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p style={{ marginTop: "1rem", fontSize: "0.95rem", lineHeight: "1.6", color: "var(--text)" }}>
                    <strong>📢 서비스 개요:</strong> {project.summary}
                  </p>
                </div>

                {/* 이력서 내 수행 bullet 항목 100% 그대로 배치 */}
                <div style={{ marginBottom: "2rem" }}>
                  <h4 style={{ fontWeight: "800", fontSize: "1.1rem", marginBottom: "0.75rem" }}>🔑 이력서 내 주요 수행 성과 (Accomplishments)</h4>
                  <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", fontSize: "0.9rem", color: "var(--muted)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {project.accomplishments.map((acc, index) => (
                      <li key={index} style={{ lineHeight: "1.5" }}>{acc}</li>
                    ))}
                  </ul>
                </div>

                {/* 트러블슈팅 분석 100% 무손실 뼈대 매핑 */}
                <div>
                  <h4 style={{ fontWeight: "800", fontSize: "1.1rem", marginBottom: "1.25rem", borderBottom: "1px dashed var(--line)", paddingBottom: "0.5rem" }}>
                    🛠️ 심층 트러블슈팅 케이스 분석
                  </h4>

                  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {project.troubleshootings.map((tb, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: "1.5rem",
                          background: "var(--bg)",
                          border: "1px solid var(--line)",
                          borderRadius: "var(--radius)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "1.25rem"
                        }}
                      >
                        <h5 style={{ fontWeight: "800", fontSize: "1.05rem", color: "var(--primary)" }}>
                          🚀 문제 {idx + 1}. {tb.title}
                        </h5>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
                          {/* 1. 문제 원인 */}
                          <div style={{ lineHeight: "1.6" }}>
                            <strong style={{ color: "#d64545", display: "block", marginBottom: "0.25rem" }}>❌ 문제 원인 (Cause)</strong>
                            <p style={{ color: "var(--text)" }}>{tb.cause}</p>
                          </div>

                          {/* 2. 해결 과정 */}
                          <div style={{ lineHeight: "1.6", marginTop: "0.25rem" }}>
                            <strong style={{ color: "var(--primary)", display: "block", marginBottom: "0.25rem" }}>💡 해결 과정 (Solution)</strong>
                            <p style={{ color: "var(--text)" }}>{tb.solution}</p>
                          </div>

                          {/* 3. 결과 */}
                          <div style={{ lineHeight: "1.6", marginTop: "0.25rem" }}>
                            <strong style={{ color: "#2e7d32", display: "block", marginBottom: "0.25rem" }}>✨ 최종 결과 (Result)</strong>
                            <p style={{ color: "var(--text)" }}>{tb.result}</p>
                          </div>
                        </div>

                        {/* 첨부 이미지 복원 */}
                        {tb.image && (
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "0.5rem" }}>
                            <span style={{ fontSize: "0.75rem", color: "var(--muted)", marginBottom: "0.5rem" }}>[첨부 흐름도]</span>
                            <div style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "0.5rem", borderRadius: "10px", maxWidth: "100%" }}>
                              <Image width={tb.imageWidth} height={tb.imageHeight} src={tb.image}
                                alt={tb.title}
                                style={{ maxHeight: "280px", maxWidth: "100%", height: "auto" }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

      </article>

    </div>
  );
}
