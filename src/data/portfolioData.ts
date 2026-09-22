export interface ProjectTroubleshooting {
  title: string;
  cause: string;
  solution: string;
  result: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface ProjectData {
  id: string;
  title: string;
  period: string;
  role: string;
  teamSize: string;
  techStack: string[];
  summary: string;
  accomplishments: string[];
  troubleshootings: ProjectTroubleshooting[];
}

export interface ExperienceData {
  period: string;
  organization: string;
  role: string;
  details?: string[];
}

export interface EducationData {
  period: string;
  school: string;
  major: string;
  gpa?: string;
}

export interface CertificationData {
  title: string;
  issuer: string;
  date: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    tagline1: string;
    tagline2: string;
    intro: string;
    profileImage: string;
    github: string;
    email: string;
  };
  skills: string[];
  experiences: ExperienceData[];
  education: EducationData[];
  certifications: CertificationData[];
  projects: ProjectData[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "윤대영",
    role: "프론트엔드 개발자 (Frontend Developer)",
    tagline1: "포기하지 않고 도전하는 사람",
    tagline2: "구조를 고민하는 프론트엔드 개발자",
    intro: "42서울 선발 과정에서 탈락했지만, 목표를 포기하지 않고 삼성 청년 SW 아카데미에 입과해 개발 역량을 쌓았습니다. SW 역량 테스트 A형 취득에 실패했을 때도 알고리즘 스터디로 부족한 부분을 보완했고, 재도전 끝에 A형을 취득했습니다. 현재는 프론트엔드 개발자로서의 기반을 다지며, 장기적으로 AI Product Engineer를 목표로 하고 있습니다.",
    profileImage: "/images/profile.jpg",
    github: "https://github.com/myy-dev",
    email: "ycw2859@gmail.com"
  },
  skills: [
    "React와 JavaScript를 활용한 컴포넌트 기반 UI 구현이 가능합니다.",
    "TypeScript를 활용하여 props, 상태값, API 응답 데이터의 타입을 정의할 수 있습니다.",
    "React Hooks와 커스텀 훅을 활용하여 상태 관리, 사이드 이펙트, 반복 로직을 분리할 수 있습니다.",
    "상태의 사용 범위에 따라 지역 상태와 전역 상태를 구분하여 관리할 수 있습니다.",
    "REST API 연동을 통해 서버 데이터를 요청하고 화면 상태에 반영할 수 있습니다."
  ],
  experiences: [
    {
      period: "2026.05 - 현재",
      organization: "Codyssey AI 올인원 1기",
      role: "AI Product Engineering Course 수강"
    },
    {
      period: "2024.01 - 2024.12",
      organization: "삼성 청년 SW 아카데미 11기",
      role: "Web Track (Python)",
      details: [
        "알고리즘 및 웹 심화 과정 이수",
        "우수 프로젝트 다수 진행 및 팀장 수행"
      ]
    }
  ],
  education: [
    {
      period: "2016.03 - 2023.08",
      school: "동아대학교",
      major: "경영학과 학사",
      gpa: "3.74 / 4.5"
    }
  ],
  certifications: [
    {
      title: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2025.09.12"
    },
    {
      title: "SQL 개발자(SQLD)",
      issuer: "한국데이터산업진흥원",
      date: "2025.04.04"
    },
    {
      title: "데이터 분석 준전문가(ADsP)",
      issuer: "한국데이터산업진흥원",
      date: "2025.09.05"
    },
    {
      title: "OPIc IM1",
      issuer: "ACTFL",
      date: "2024.09.08"
    }
  ],
  projects: [
    {
      id: "wooms",
      title: "폐쇄형 메타버스 SNS, WOOMS",
      period: "2024.07.08 ~ 2024.08.16 (7주)",
      role: "프론트엔드 개발 담당",
      teamSize: "총 6명 (프론트엔드 3명, 백엔드 3명)",
      techStack: ["React", "JavaScript", "Redux", "React Router", "Axios", "Tailwind CSS"],
      summary: "소규모 그룹 안에서 편지, 사진, 방명록, 라디오로 추억을 저장하는 폐쇄형 메타버스 SNS",
      accomplishments: [
        "모달 위 알림이 가려지는 문제를 별도 렌더링 영역으로 분리하여 홈/그룹 공간 전역 알림 노출 안정화",
        "편지 작성 단계 이동 시 입력값이 사라지는 문제를 작성 흐름 상위 상태로 관리하여 편지 작성 경험 개선",
        "일반 로그인과 OAuth 로그인 완료 후 사용자 정보를 동일한 인증 흐름으로 정리하여 로그인/세션 관리 안정화",
        "로그인, 회원가입, 비밀번호 재설정, 내 정보 수정 기능 구현",
        "편지 작성, 조회, 삭제, 읽지 않은 편지 수 조회 기능 구현",
        "홈/그룹 공간 BGM 자동 재생 및 재생 상태 유지 기능 구현",
        "서비스 소개, 주요 기능 안내, 로그인 이동을 포함한 기본 홈페이지 기능 구현"
      ],
      troubleshootings: [
        {
          title: "홈/그룹 공간 위 전역 알림이 가려지는 문제 해결",
          cause: "홈 화면, 그룹 화면, 전역 알림 레이어가 중첩된 구조에서 화면 내부 z-index 조정만으로는 컴포넌트 종속성과 브라우저 렌더링 컨텍스트 영향으로 알림 위치 최상단 보장 및 안정적 제어가 불가능했습니다.",
          solution: "index.html에 앱 루트와 완전히 분리된 portal-root DOM을 추가하고, React Portal을 도입하여 Alert 컴포넌트가 최상위 DOM 노드에서 직접 렌더링되도록 렌더링 레이어를 계층적으로 분리했습니다.",
          result: "홈/그룹 공간 내부 z-index 충돌과 관계없이 로그인 실패, 편지 전송 완료 등의 공통 알림이 최상단에 안정적으로 노출되도록 개선했습니다.",
          image: "/images/projects/wooms-alert.png",
          imageWidth: 1920,
          imageHeight: 930
        },
        {
          title: "편지 작성 중 단계 이동 시 입력값이 유실되는 문제 해결",
          cause: "수신자 선택, 내용 작성, 도착 날짜 선택의 단계별 컴포넌트 내부에서만 로컬 state를 관리하여, 유저가 단계 전환(다음/이전)을 진행할 때 하위 컴포넌트가 언마운트되며 입력되었던 서신 데이터가 초기화되는 문제가 발생했습니다.",
          solution: "편지 작성 흐름 전체를 관장하는 최상위 부모 컴포넌트인 WriteLetterMain으로 selectedUser, content, selectedDate 상태를 끌어올리고(Lifting State Up), 각 자식 컴포넌트에 상태 및 onChange 콜백을 주입해 데이터를 중앙 보존했습니다.",
          result: "단계 전환 및 이탈 후 복귀 시에도 입력 필드 상태가 안정적으로 회복되어 사용자 중심의 단계별 작성 흐름을 안정적으로 확보했습니다.",
          image: "/images/projects/letter-diagram.svg",
          imageWidth: 892,
          imageHeight: 259
        },
        {
          title: "로그인 방식별 인증 완료 흐름 분산 문제 해결",
          cause: "일반 로그인(POST API)과 소셜 OAuth 로그인(Redirect 콜백 방식)의 인증 진입 및 복귀 포인트가 달라 사용자 세션 저장, 프로필 조회, 화면 리다이렉트 흐름이 분산되고 코드 중복과 세션 일관성 결여 문제가 잠재했습니다.",
          solution: "로그인 방식과 무관하게 로그인이 완료된 직후 사용자 정보를 받아와 전역 인증 스토어의 상태를 일관되게 갱신 및 유지하는 단일 후처리 파이프라인으로 통일했습니다.",
          result: "세션 가드, 상단 네비게이션바, 프로필 수정 등 로그인 판단 기준을 일원화하여 세션 동기화 결함을 원천 방어했습니다.",
          image: "/images/projects/login-diagram.svg",
          imageWidth: 493,
          imageHeight: 681
        }
      ]
    },
    {
      id: "mungple",
      title: "반려견 산책 공유 모바일 앱, 멍플",
      period: "2024.08.19 ~ 2024.10.11 (7주)",
      role: "프론트엔드 개발 및 팀장 담당",
      teamSize: "총 6명 (프론트엔드 3명, 백엔드 3명)",
      techStack: ["React Native", "TypeScript", "Zustand", "Styled Components", "Stomp.js"],
      summary: "반려견 보호자의 산책 경로, 거리, 기록을 저장하고 블루존(인기 산책 장소), 레드존(위험 지역), 멍플(실시간 산책 인기 지역) 정보를 실시간 지도에서 공유하는 실시간 모바일 서비스",
      accomplishments: [
        "STOMP.js 문서 기반 polyfill 옵션 적용 및 현재 위치·주변 정보 등 실시간 데이터 연동 구현",
        "팀원별 WebSocket 구현 방식 분산 위험 및 전역 store 방식의 비동기 상태 업데이트 문제를 고려해 STOMP WebSocket 로직을 custom hook으로 분리",
        "월간 캘린더, 일간 산책 목록, 산책 상세 지도, 월간 통계 화면 구현",
        "내 정보, 반려견 목록, 반려견 상세/등록 화면 구현",
        "산책 상세 경로 Polyline, 마커 상세, 지도 설정 관련 화면 구현",
        "팀장으로 프로젝트 일정 관리 및 조율과 프로젝트 발표 담당"
      ],
      troubleshootings: [
        {
          title: "팀 공통 WebSocket 사용 구조 설계로 실시간 산책 데이터 연동 방식 표준화",
          cause: "산책 경로 실시간 추적, 거리 데이터 및 위치 알림 등 WebSocket 통신이 필수인 여러 화면이 존재했습니다. 화면별로 개별 소켓 연결을 수립할 경우 리소스 낭비가 심했고, 전역 store에 소켓을 저장하려 했으나 비동기 소켓 연결 상태 업데이트 지연으로 초기 실시간 패킷 손실이 생기는 등 소켓 참조 불안정성이 컸습니다.",
          solution: "React 생명주기와 소켓 생명주기를 밀접하게 결합하는 단일 useWebSocket 커스텀 훅을 설계했습니다. 소켓 연결, 인증 처리, 토픽 구독, 발행 함수를 훅 내부 캡슐 구조로 통합하고 화면에는 데이터 수신 객체와 전송 함수만을 반환했습니다.",
          result: "모든 화면에서 일관된 실시간 데이터를 신뢰성 있게 공유받을 수 있는 공통 통신 기반을 마련하고, 비동기 참조 지연 버그를 완전히 극복했습니다."
        },
        {
          title: "React Native WebSocket 환경 대응",
          cause: "React Native의 번들링된 모바일 JS 코어 런타임은 일반 크롬 브라우저 웹소켓 엔진 규격과 달라, STOMP.js 사용 시 빈 메시지 미지원에 따른 세션 조기 종료, 바이너리 호환성 결여, 핑퐁 단절 등의 불안정 요소를 보였습니다.",
          solution: "STOMP.js 공식 스펙에 명시된 모바일 환경 대응 폴리필 옵션(appendMissingNULLonIncoming: true, forceBinaryWSFrames: true)을 적용하고, 별도 에러 수신 전용 토픽(/user/sub/errors) 구독을 확보했으며, 하트비트 주기 설정을 통해 연결 유지를 강건하게 다듬었습니다.",
          result: "RN 런타임 제약에 종속되지 않고 백그라운드 및 장시간 주행 산책 시에도 연결 단절을 원천 방지하여 모바일 서비스 실시간성을 공고히 했습니다."
        }
      ]
    }
  ]
};
