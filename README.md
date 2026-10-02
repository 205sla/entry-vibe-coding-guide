# 엔트리 바이브코딩 시작하기 (프롬프트 안내 페이지)

AI 코딩 도우미(Codex, Claude Code 등)에게 [entry-vibe-coding](https://github.com/205sla/entry-vibe-coding)
저장소 링크를 주고 엔트리 작품을 만드는 법을 설명하는 한 페이지짜리 정적 사이트다.
환경 준비·게임 요청 프롬프트를 버튼 하나로 복사할 수 있다.

- 라이브: https://바이브코딩.엔트리.org/ (`https://xn--o01b54khubg9qb1j.xn--oy2b95t44j.org/`)
  — 옛 주소 `205sla.github.io/entry-vibe-coding-guide/` 는 여기로 넘어간다.
- 배포: GitHub Pages — `main` 브랜치 루트(`/`). 푸시하면 1~2분 뒤 반영된다.

## 도메인 (2026-10-01 연결)

- DNS 는 GoDaddy(엔트리.org, 네임서버 `domaincontrol.com`): `CNAME xn--o01b54khubg9qb1j → 205sla.github.io`.
- GitHub Pages 사용자 지정 도메인은 퓨니코드로 넣는다(`CNAME` 파일). HTTPS 강제 켜짐.
- 인증서가 안 나오면(상태 `none`): DNS 가 퍼진 뒤 사용자 지정 도메인을 지웠다 다시 넣으면 발급이 시작된다
  (처음 연결 때 DNS 보다 도메인을 먼저 넣어 GitHub 이 "없는 도메인"을 기억했던 경우).

## 파일

| 파일 | 내용 |
| --- | --- |
| `index.html` | 본문과 프롬프트 원문(`<pre id="prompt-…">`) |
| `style.css` | 스타일(밝은/어두운 테마 자동) |
| `app.js` | 복사 버튼 — `navigator.clipboard`, 안 되면 textarea 폴백 |
| `.nojekyll` | Pages 의 Jekyll 처리 끄기 |

빌드 과정과 외부 의존성(폰트·CDN)이 없다. `index.html` 을 브라우저로 바로 열어 확인할 수 있다.

## 프롬프트를 고칠 때

- 프롬프트의 명령·순서는 entry-vibe-coding 저장소의 `CLAUDE.md`("환경 준비"·검증 사다리)와 `README.md`(빠른 시작)가 정본이다.
  그쪽이 바뀌면 이 페이지의 프롬프트도 같이 맞춘다.
- 프롬프트 원문은 `index.html` 의 `<pre>` 안에 그대로 있다. `<`·`&` 는 `&lt;`·`&amp;` 로 적는다.
- 환경 준비 확인의 `npx playwright test -g "loads with no page errors"` 는 entry-vibe-coding `tests/e2e.spec.js` 의 편집기 부팅 테스트 이름이다.
  전체 `npm run test:e2e`(30개, 느린 PC 에선 20분)는 저장소를 고칠 때만 필요하다. 그 테스트 이름이 바뀌면 여기도 고친다.
- 환경은 사람마다 다르다. 이미 깔린 Node·git 은 그대로 쓰고 없을 때만 설치하게 하고, 이미 있는 프로그램은 지우거나 바꾸지 않게 한다.

## 바뀐 기록

- 2026-10-02 — 빈 Windows 노트북 + 무료 Codex 녹화에서 나온 문제를 반영했다.
  - 환경 준비 첫 단계에서 Node·npm·git 을 확인하고, 없을 때만 설치한다. 새 터미널에서도 쓸 수 있게 한다(AI 도구에 내장된 git 만 쓰고 끝나는 일 방지).
  - 설치 명령은 처음부터 권한을 요청한다(샌드박스 재시도 왕복 방지).
  - 확인 검사는 전체 e2e 대신 편집기 부팅 테스트 하나로 바꿨다.
  - 준비물 안내 문단과 FAQ 두 개(검사 명령이 끝나지 않을 때, `git pull` 이 안 될 때)를 추가했다.
