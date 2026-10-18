# 엔트리 바이브코딩 시작하기 (프롬프트 안내 페이지)

AI 코딩 도우미(Codex, Claude Code 등)에게 [entry-vibe-coding](https://github.com/205sla/entry-vibe-coding)
저장소 링크를 주고 엔트리 작품을 만드는 법을 설명하는 한 페이지짜리 정적 사이트다.
환경 준비·게임 요청 프롬프트를 버튼 하나로 복사할 수 있다.
페이지 상단에서 [무료 GPT로 엔트리 바이브코딩 하는 법](https://www.youtube.com/watch?v=BsLaQeJpaKE) 영상을 볼 수 있다.
하단의 ‘다른 도구 보러가기’ 버튼은 [도구.엔트리.org](https://entry-tools.205.kr/) 도구 모음을 새 탭으로 연다.

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
| `robots.txt` · `sitemap.xml` | 검색엔진 수집 안내와 대표 URL 목록 |
| `llms.txt` | AI 도구와 독자를 위한 짧은 문서 길잡이 |
| `indexnow-key.txt` | IndexNow 페이지 갱신 요청용 공개 검증 파일 |
| `assets/social-preview.png` | 링크 공유용 이미지(1200×630) |
| `favicon.svg` · `favicon.ico` | 브라우저·검색 결과용 사이트 아이콘 |
| `.nojekyll` | Pages 의 Jekyll 처리 끄기 |

별도 빌드나 패키지 설치 없이 `index.html` 을 브라우저로 바로 열어 확인할 수 있다.
영상은 YouTube 개인정보 보호 강화 모드(`youtube-nocookie.com`)로 임베드하며, 재생에는 인터넷 연결이 필요하다.

## 검색엔진·공유 설정

- 대표 주소는 `https://xn--o01b54khubg9qb1j.xn--oy2b95t44j.org/`다. `canonical`, `og:url`, JSON-LD와 사이트맵에 같은 주소를 사용한다.
- `index.html`에 검색 제목·설명, Open Graph·Twitter 공유 카드, `WebSite`·`WebPage`·`VideoObject` JSON-LD를 둔다. 구조화 데이터의 설명은 화면에 보이는 내용과 맞춘다.
- 영상 게시 시각(`2026-10-07T17:00:35+09:00`)과 길이(`PT11M47S`)는 2026-10-17에 YouTube 공개 플레이어 정보로 확인했다. 영상이 바뀌면 본문의 날짜·길이와 JSON-LD도 함께 갱신한다. `embedUrl`은 실제 iframe 주소이며, YouTube 시청 페이지를 영상 파일 주소인 `contentUrl`로 사용하지 않는다.
- 페이지의 주요 내용이 바뀌면 `sitemap.xml`의 `lastmod`와 `WebPage.dateModified`를 실제 수정일로 갱신한다. 검색 결과용 아이콘과 공유 이미지는 같은 도메인에서 제공한다.
- 사이트맵 주소: `https://xn--o01b54khubg9qb1j.xn--oy2b95t44j.org/sitemap.xml`. Google Search Console·네이버 서치어드바이저의 소유 확인 및 사이트맵 제출은 각 계정에서 별도로 진행한다. 현재 저장소에는 이 두 관리 도구의 소유 확인용 토큰이 없다.
- IndexNow는 루트의 `indexnow-key.txt`로 사이트를 검증한다. 이 파일은 프로토콜에 따라 공개하는 값이며, 관리 도구 계정의 비밀번호나 비밀 API 자격 증명이 아니다. 배포 후 공통 접수처 `https://api.indexnow.org/indexnow`에 대표 URL을 전달하고, `key`는 파일 내용, `keyLocation`은 `https://xn--o01b54khubg9qb1j.xn--oy2b95t44j.org/indexnow-key.txt`로 지정한다. HTTP 200은 정상 수신, 202는 수신 후 키 확인 중이다. 요청 수신과 실제 색인은 구분한다.
- 2026-10-17 갱신 요청: 첫 요청은 공통 접수처에서 HTTP 202(수신·키 검증 대기)를 받았으며, GEO/AEO 개선 배포 후 재요청은 HTTP 200(정상 수신)을 받았다. 네이버 개별 접수처의 첫 요청은 HTTP 422(URL 검증 오류)를 반환했다. 실제 색인·AI 답변 인용 여부는 확인하지 않았다.
- 배포 후 `/`, `/robots.txt`, `/sitemap.xml`, `/assets/social-preview.png`, `/favicon.svg`, `/favicon.ico`가 HTTP 200으로 제공되는지 확인한다. 실제 색인 여부는 검색엔진 관리 도구에서 확인한다.

기준 문서: [Google 대표 URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls),
[사이트맵](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[영상 구조화 데이터](https://developers.google.com/search/docs/appearance/structured-data/video),
[네이버 검색엔진 최적화](https://searchadvisor.naver.com/guide/seo-basic-intro),
[IndexNow 검증 파일](https://searchadvisor.naver.com/guide/indexnow-api-key)·[갱신 요청](https://searchadvisor.naver.com/guide/indexnow-request)·[공통 접수처](https://www.indexnow.org/faq).

## AI 검색·답변용 문서 구성 (GEO/AEO)

- `#questions`의 질문 7개는 화면에 펼쳐진 HTML로 제공하며, 각 질문에 고유 주소(`#faq-…`)를 둔다. 기존 설치·제작 프롬프트와 함께 사람과 검색 도구가 같은 본문을 읽는다.
- `#sources`에 관리자, 내용 확인일, 프로젝트 원문과 확인 당시 버전을 표시한다. JSON-LD의 `about`은 대상 저장소, `citation`은 실제 근거 문서, `lastReviewed`는 본문 확인일과 일치시킨다. 설치 요구사항은 `ee4709bdff441190a30782f2cd419a4463850874`의 README·CLAUDE·새 환경 설치 문서로 대조했다.
- `llms.txt`는 문서 안내를 원하는 AI 도구가 원문을 찾도록 돕는 보조 파일이다. HTML의 `rel="describedby"`와 본문의 링크로 발견할 수 있다. Google Search는 이 파일을 특별하게 사용하지 않으며, AI 검색 노출이나 순위 상승을 보장하지 않는다. 명령 전체를 복제하지 않고 정본 문서에 연결해 내용 불일치를 줄인다.
- `robots.txt`의 `User-agent: * / Allow: /`는 OAI-SearchBot·Googlebot·Bingbot을 포함한 검색봇 수집을 허용한다. OpenAI의 검색용 OAI-SearchBot과 학습용 GPTBot은 별도 설정이다. 이번 작업에서는 기존 수집 정책을 유지했다.
- Google의 FAQ 리치 결과는 2026-05-07 종료되어, FAQ 확장 노출을 목적으로 별도 스키마를 추가하지 않는다. 질문·답변은 독자가 내용을 찾기 쉽게 구성하고, 기존 사이트·페이지·영상 구조화 데이터는 실제 본문에 맞춘다.
- 수정 후 HTML의 고유 ID와 내부 링크, JSON-LD, 본문·사이트맵 날짜, `llms.txt` 링크를 확인한다. 배포한 `/llms.txt`가 UTF-8 텍스트로 제공되는지도 확인한다. 검색봇 이름으로 보낸 HTTP 200 응답은 공개 접근 확인이며, 실제 검색봇 방문이나 색인·인용 완료의 증거는 아니다.
- 성과는 소유 확인을 마친 Search Console의 생성형 AI 실적 보고서, 검색엔진 관리 도구 및 실제 답변의 출처 링크로 확인한다. 이 저장소에는 방문 분석 도구를 추가하지 않았다.

기준 문서: [Google 생성형 AI 검색 가이드](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide),
[Google FAQ 기능 종료 기록](https://developers.google.com/search/updates#may-2026),
[OpenAI 검색봇 안내](https://developers.openai.com/api/docs/bots),
[llms.txt 제안](https://llmstxt.org/).

## 프롬프트를 고칠 때

- 프롬프트의 명령·순서는 entry-vibe-coding 저장소의 `CLAUDE.md`("환경 준비"·검증 사다리)와 `README.md`(빠른 시작)가 정본이다.
  그쪽이 바뀌면 이 페이지의 프롬프트도 같이 맞춘다.
- 프롬프트 원문은 `index.html` 의 `<pre>` 안에 그대로 있다. `<`·`&` 는 `&lt;`·`&amp;` 로 적는다.
- 환경 준비 확인의 `npx playwright test -g "loads with no page errors"` 는 entry-vibe-coding `tests/e2e.spec.js` 의 편집기 부팅 테스트 이름이다.
  전체 `npm run test:e2e`(30개, 느린 PC 에선 20분)는 저장소를 고칠 때만 필요하다. 그 테스트 이름이 바뀌면 여기도 고친다.
- 환경은 사람마다 다르다. 이미 깔린 Node·git 은 그대로 쓰고 없을 때만 설치하게 하고, 이미 있는 프로그램은 지우거나 바꾸지 않게 한다.

## 바뀐 기록

- 2026-10-18 — 유저 검색·AI 검사 사이트와 같은 형태의 ‘다른 도구 보러가기’ 버튼을 하단에 추가했다. 도구 모음을 새 탭으로 열며, 작은 화면·어두운 테마·키보드 초점 표시를 지원한다.
- 2026-10-18 — 같은 작업 폴더에서 새 작품을 만들 때 환경 준비를 반복할 필요가 없다는 질문·답변을 추가했다. 새 대화에서 이어가는 방법과 새 폴더·다른 컴퓨터에서 준비가 필요한 경우를 설명하고, 환경 준비 단계와 `llms.txt`에서 연결했다.
- 2026-10-17 — 시작 전 질문 6개, 질문별 주소, 관리자·확인일·원문 출처, 프로젝트를 설명하는 구조화 데이터와 `llms.txt` 문서 길잡이를 추가했다. 설치 조건과 실행 검증 범위를 보완했다.
- 2026-10-17 — 네이버 IndexNow 갱신 알림을 위한 공개 검증 파일과 운영 안내를 추가했다.
- 2026-10-17 — 검색 제목·설명, 대표 URL, 사이트맵·robots.txt, 사이트·페이지·영상 구조화 데이터, 공유 이미지와 파일형 아이콘을 추가했다. 소개 문단과 페이지 목차를 보완했다.
- 2026-10-17 — 준비물 안내 위에 사용법 영상과 YouTube 바로 가기를 추가했다. 영상은 화면 폭에 맞춰 16:9 비율로 표시된다.
- 2026-10-02 — 빈 Windows 노트북 + 무료 Codex 녹화에서 나온 문제를 반영했다.
  - 환경 준비 첫 단계에서 Node·npm·git 을 확인하고, 없을 때만 설치한다. 새 터미널에서도 쓸 수 있게 한다(AI 도구에 내장된 git 만 쓰고 끝나는 일 방지).
  - 설치 명령은 처음부터 권한을 요청한다(샌드박스 재시도 왕복 방지).
  - 확인 검사는 전체 e2e 대신 편집기 부팅 테스트 하나로 바꿨다.
  - 준비물 안내 문단과 FAQ 두 개(검사 명령이 끝나지 않을 때, `git pull` 이 안 될 때)를 추가했다.
