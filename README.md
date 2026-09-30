# 엔트리 바이브코딩 시작하기 (프롬프트 안내 페이지)

AI 코딩 도우미(Codex, Claude Code 등)에게 [entry-vibe-coding](https://github.com/205sla/entry-vibe-coding)
저장소 링크를 주고 엔트리 작품을 만드는 법을 설명하는 한 페이지짜리 정적 사이트다.
환경 준비·게임 요청 프롬프트를 버튼 하나로 복사할 수 있다.

- 라이브: https://205sla.github.io/entry-vibe-coding-guide/
- 배포: GitHub Pages — `main` 브랜치 루트(`/`). 푸시하면 1~2분 뒤 반영된다.

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
