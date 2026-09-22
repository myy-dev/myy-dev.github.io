import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "윤대영 | 프론트엔드 개발자 포트폴리오",
  description: "구조를 고민하고 포기하지 않는 프론트엔드 개발자 윤대영의 포트폴리오 및 최종 이력서입니다. WOOMS, 멍플 등의 상세 프로젝트 트러블슈팅 사례를 제공합니다.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="ko" suppressHydrationWarning className="h-full">
      <body className="min-h-full flex flex-col transition-colors duration-300 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
