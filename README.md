# myy-dev.github.io

Next.js 16 / React 19 / TypeScript 기반 개인 포트폴리오입니다. Node.js 22.6 이상이 필요하며, 외부 폰트 다운로드 없이 시스템 글꼴을 사용합니다.

## 실행과 검증

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

개발 서버와 정적 빌드 미리보기는 기본적으로 3000 포트를 사용하므로 동시에 실행하지 않습니다. `npm start`는 `out/`을 localhost에 제공합니다. 포트 변경은 `PORT=3001 npm start`로 가능합니다. 이 환경에서 Turbopack 초기 컴파일 지연이 확인되어 개발 및 빌드 명령은 Webpack을 사용합니다.

## 콘텐츠

- `src/data/portfolioData.ts`: 인적 사항, 기술, 경력, 프로젝트와 이미지 정보
- `src/app/page.tsx`: 홈과 문의 폼
- `src/app/resume/page.tsx`: 이력서와 브라우저 인쇄/PDF 저장
- `src/app/portfolio/[projectId]/page.tsx`: 데이터에 등록된 프로젝트별 정적 페이지
- `public/images/`: 사이트 이미지

루트의 이력서·포트폴리오 Markdown 파일은 참고 문서이며 사이트에 자동 동기화되지 않습니다.

## 문의와 배포

문의 폼은 기존 사이트의 Formspree 엔드포인트를 사용합니다. HTTP 성공 응답을 받은 경우에만 성공 표시 및 입력 초기화를 수행합니다. 실제 수신에는 Formspree 계정의 활성 상태와 수신 설정이 필요합니다.

GitHub 저장소 Settings → Pages에서 Source를 GitHub Actions로 지정하면, main에 push하거나 워크플로를 수동 실행하여 배포할 수 있습니다. CI는 린트와 프로덕션 빌드를 검사하고 `out/`을 게시합니다. 로컬 수정만으로 배포되지는 않습니다.
