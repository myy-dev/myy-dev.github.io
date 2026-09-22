"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { sendContact } from "@/lib/contact";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  const { personalInfo, projects, skills } = portfolioData;
  const [typingText, setTypingText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 에러 상태 및 성공 메시지 상태
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const submitting = useRef(false);

  // 타이핑 텍스트 효과
  useEffect(() => {
    const slogan = `${personalInfo.tagline1}, ${personalInfo.tagline2}`;
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setTypingText(slogan.slice(0, index));
      if (index >= slogan.length) {
        clearInterval(interval);
      }
    }, 85);
    return () => clearInterval(interval);
  }, [personalInfo.tagline1, personalInfo.tagline2]);

  // 입력 검증 후 Formspree로 문의 전송
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting.current) return;
    setSubmitError("");

    // 에러 상태 초기화
    setNameError("");
    setEmailError("");
    setMessageError("");
    setFormSuccess("");

    let hasError = false;

    if (!name.trim()) {
      setNameError("이름을 입력해주세요.");
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError("이메일을 입력해주세요.");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
      hasError = true;
    }

    if (!message.trim()) {
      setMessageError("메시지를 입력해주세요.");
      hasError = true;
    }

    if (hasError) return;

    submitting.current = true;
    setIsSubmitting(true);
    try {
      await sendContact({ name, email, message });
      setFormSuccess("문의가 성공적으로 제출되었습니다! 감사합니다.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitError("전송하지 못했습니다. 입력 내용은 유지됩니다. 잠시 후 다시 시도하거나 아래 이메일로 연락해주세요.");
    } finally {
      submitting.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="site-main">

      <section className="hero section" id="hero">
        <div className="container hero-grid">
          <div>
            <h1 style={{ fontWeight: "800", color: "var(--text)" }}>윤대영 포트폴리오</h1>
            <p className="eyebrow" style={{ marginTop: "1rem", minHeight: "1.8rem" }}>
              <span id="typing-text" aria-label="타이핑 소개 문구">
                {typingText}
              </span>
            </p>
            <div className="hero-actions">
              <a className="btn" href="#projects">프로젝트 보기</a>
              <Link className="btn btn-ghost" href="/resume">최종 이력서 보기</Link>
            </div>
          </div>
          <figure className="hero-visual">
            <Image
              width={1200}
              height={1543}
              preload
              src={personalInfo.profileImage}
              alt="윤대영 포트폴리오 소개용 프로필 이미지"
            />
          </figure>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container">
          <h2 style={{ fontWeight: "800", borderLeft: "4px solid var(--primary)", paddingLeft: "0.75rem" }}>About</h2>
          <p style={{ lineHeight: "1.8", color: "var(--text)", marginTop: "1.5rem" }}>
            {personalInfo.intro}
          </p>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="container">
          <h2 style={{ fontWeight: "800", borderLeft: "4px solid var(--primary)", paddingLeft: "0.75rem", marginBottom: "1.5rem" }}>Skills</h2>
          <ul className="skill-list">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </section>

      {/* 4. 프로젝트 컴포넌트 (정적 이력서/포트폴리오 카드 배치) */}
      <section className="projects section" id="projects">
        <div className="container">
          <div className="section-head" style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontWeight: "800", borderLeft: "4px solid var(--primary)", paddingLeft: "0.75rem" }}>Projects</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`} className="project-card">
                <div>
                  <h3 style={{ fontWeight: "800", color: "var(--primary)" }}>{project.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", fontWeight: "600", marginTop: "0.25rem" }}>
                    📅 {project.period} | 👤 {project.role}
                  </p>
                  <p className="line-clamp-4" style={{ fontSize: "0.9rem", marginTop: "0.75rem", lineHeight: "1.6" }}>
                    {project.summary}
                  </p>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                  <span style={{ fontWeight: "700", textDecoration: "underline", color: "var(--primary)" }}>
                    상세 해결사례 보기 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container">
          <h2 style={{ fontWeight: "800", borderLeft: "4px solid var(--primary)", paddingLeft: "0.75rem", marginBottom: "2rem" }}>Contact</h2>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name" style={{ fontWeight: "600" }}>이름</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="이름 입력"
                disabled={isSubmitting}
                aria-invalid={Boolean(nameError)}
                aria-describedby="name-error"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="field-error" id="name-error" style={{ fontSize: "0.85rem", marginTop: "2px" }}>
                {nameError}
              </p>
            </div>

            <div className="form-field">
              <label htmlFor="email" style={{ fontWeight: "600" }}>이메일</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="이메일 입력"
                disabled={isSubmitting}
                aria-invalid={Boolean(emailError)}
                aria-describedby="email-error"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="field-error" id="email-error" style={{ fontSize: "0.85rem", marginTop: "2px" }}>
                {emailError}
              </p>
            </div>

            <div className="form-field">
              <label htmlFor="message" style={{ fontWeight: "600" }}>메시지</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="메시지 입력"
                disabled={isSubmitting}
                aria-invalid={Boolean(messageError)}
                aria-describedby="message-error"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <p className="field-error" id="message-error" style={{ fontSize: "0.85rem", marginTop: "2px" }}>
                {messageError}
              </p>
            </div>

            <button className="btn" disabled={isSubmitting} type="submit" style={{ width: "100%", borderRadius: "10px" }}>{isSubmitting ? "전송 중…" : "전송"}</button>
            <p className="form-success" id="form-success" role="status" style={{ marginTop: "0.5rem", fontSize: "0.9rem", textAlign: "center" }}>
              {formSuccess}
            </p>
            {submitError && <p className="field-error" role="alert">{submitError}</p>}
            <p><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
          </form>
        </div>
      </section>

    </div>
  );
}
