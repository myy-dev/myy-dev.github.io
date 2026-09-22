import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { ArrowLeft, Calendar, Users, Cpu, FileCode, CheckCircle, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";

interface Props {
  params: Promise<{
    projectId: string;
  }>;
}

// output: 'export' 설정 시 동적 라우트를 정적 HTML로 빌드하기 위해 필수적인 함수
export async function generateStaticParams() {
  return portfolioData.projects.map(({ id }) => ({ projectId: id }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { projectId } = await params;
  const project = portfolioData.projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  // 다른 프로젝트 찾기 (하단 바로가기용)
  const otherProject = portfolioData.projects.find((p) => p.id !== projectId);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* 상단 툴바: 뒤로가기 */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            메인 홈으로
          </Link>
          <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
            Project Case Study
          </span>
        </div>

        {/* 프로젝트 헤더 카드 */}
        <header className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-8 shadow-sm space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-black tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-md leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
              {project.summary}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs">
            <div className="space-y-1">
              <span className="text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">진행 기간</span>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200 inline-flex items-center gap-1.5">
                <Calendar size={13} className="text-zinc-400" />
                {project.period}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">수행 역할</span>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200 inline-flex items-center gap-1.5">
                <Cpu size={13} className="text-zinc-400" />
                {project.role.replace(" 담당", "")}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">인원 구성</span>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200 inline-flex items-center gap-1.5">
                <Users size={13} className="text-zinc-400" />
                {project.teamSize.replace("총 ", "")}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">개발 도구</span>
              <div className="flex flex-wrap gap-1 mt-0.5">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-1.5 py-0.5 rounded text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* 기술 스택 전체 */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-8 shadow-sm space-y-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <FileCode size={18} className="text-zinc-500" />
            사용 기술 스택 (Tech Stack)
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-100 dark:border-zinc-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 프로젝트 수행 목록 */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-8 shadow-sm space-y-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <CheckCircle size={18} className="text-zinc-500" />
            주요 기능 및 수행 항목
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
            {project.accomplishments.map((acc, index) => (
              <li key={index} className="flex items-start gap-2.5 bg-zinc-50/50 dark:bg-zinc-900/40 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-950 dark:text-white font-bold shrink-0 mt-0.5">✓</span>
                <span className="leading-relaxed">{acc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 트러블슈팅 분석 섹션 (핵심) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold tracking-tight">심층 트러블슈팅 케이스 분석</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">윤대영 개발자가 직접 고민하고 구조적으로 돌파해낸 대표적 문제 해결 사례입니다.</p>
          </div>

          <div className="space-y-8">
            {project.troubleshootings.map((tb, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-6 md:p-8 shadow-sm space-y-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                {/* 트러블슈팅 헤더 */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-md">
                    Case {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {tb.title}
                  </h3>
                </div>

                {/* 3단계 분석 구조 */}
                <div className="grid grid-cols-1 gap-4.5 pt-2">
                  {/* 1. 문제 원인 */}
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-red-50/40 dark:bg-red-950/10 border border-red-100/50 dark:border-red-900/20">
                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block">문제 상황 & 원인 (Problem & Cause)</span>
                      <p className="text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {tb.cause}
                      </p>
                    </div>
                  </div>

                  {/* 2. 해결 과정 */}
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/20">
                    <Lightbulb className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">해결 과정 & 아키텍처 변경 (Solution)</span>
                      <p className="text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {tb.solution}
                      </p>
                    </div>
                  </div>

                  {/* 3. 결과 */}
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-900/20">
                    <TrendingUp className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">최종 적용 결과 (Result)</span>
                      <p className="text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {tb.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 첨부 다이어그램/스크린샷 렌더링 */}
                {tb.image && (
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col items-center">
                    <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 mb-3 uppercase tracking-wider">
                      아키텍처 및 화면 설계 흐름도
                    </span>
                    <div className="relative w-full max-w-xl rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 shadow-sm p-4 flex justify-center">
                      <Image width={tb.imageWidth} height={tb.imageHeight} src={tb.image}
                        alt={tb.title}
                        className="w-auto h-auto max-h-[300px] object-contain rounded-lg transition-transform duration-300 hover:scale-102"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 하단 바로가기 메뉴 */}
        <footer className="pt-10 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            최종 이력서 보기
          </Link>

          {otherProject && (
            <Link
              href={`/portfolio/${otherProject.id}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
            >
              다음 케이스 분석: {otherProject.title} →
            </Link>
          )}
        </footer>

      </div>
    </div>
  );
}
