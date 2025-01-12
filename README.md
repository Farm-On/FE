# 🌱 UMC FarmON FrontEnd

농업 전문가와 농업인을 연결하는 매칭 플랫폼의 프론트엔드 레포지토리입니다.

## 🛠 기술 스택

- **Language**: TypeScript
- **Framework**: React + Vite
- **Styling**: Styled-Components
- **API Communication**: Axios
- **Code Quality**: ESLint, Prettier

## 📌 Git Flow 브랜치 전략

### 브랜치 설명
1. `main` (CD)
   - 실제 배포되는 프로덕션 코드
   - 안정적이고 검증된 코드만 포함
   - 직접 커밋 불가, PR을 통해서만 merge 가능

2. `develop` (CI)
   - 다음 버전을 위한 개발 통합 브랜치
   - 완성된 기능들을 합치고 테스트하는 브랜치
   - feature 브랜치들이 merge되는 곳

3. `feature/*`
   - 실제 기능 개발이 이루어지는 브랜치
   - develop 브랜치에서 분기
   - 예: feature/login, feature/expert-list

4. `hotfix/*`
   - 프로덕션의 긴급한 버그 수정
   - main 브랜치에서 분기
   - 수정 후 main과 develop 모두에 merge

## 💻 Commit Convention

| 태그 이름 | 설명 |
|----------|------|
| [chore] | 코드 수정, 내부 파일 수정 |
| [feat] | 새로운 기능 구현 |
| [add] | FEAT 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 |
| [hotfix] | issue나 QA에서 급한 버그 수정에 사용 |
| [fix] | 버그, 오류 해결 |
| [del] | 쓸모 없는 코드 삭제 |
| [docs] | README나 WIKI 등의 문서 개정 |
| [correct] | 주로 문법의 오류나 타입의 변경, 이름 변경에 사용 |
| [move] | 프로젝트 내 파일이나 코드의 이동 |
| [rename] | 파일 이름 변경이 있을 때 사용 |
| [improve] | 향상이 있을 때 사용 |
| [refactor] | 전면 수정이 있을 때 사용 |
| [style] | CSS 및 스타일 수정시 사용 |
| [link] | 라우팅 연결 시 사용 |

예시: `✨ feat: 로그인 기능 추가`

## 🤝 PR 규칙

### PR 생성 전 체크리스트
- [ ] develop 브랜치의 최신 내용을 반영했는지 확인
- [ ] ESLint/Prettier 검사 통과
- [ ] 불필요한 console.log 제거

### PR 크기
- PR은 하나의 기능 단위로 작성
- 가능한 300줄 이내로 제한
- 큰 기능의 경우 작은 단위로 분리하여 PR 생성

### PR 설명
- PR 템플릿 모든 항목 작성
- 스크린샷 또는 gif 첨부 (UI 변경시 필수)
- 관련 이슈 연결

## 👥 코드 리뷰 규칙
- "확인했습니다" 댓글 필수 (최소 1명 이상)
- 리뷰어의 의견을 존중하고 성실히 반영
- 건설적인 피드백 작성

## ⭐️ 협업 규칙
1. (중요) 시간 약속 잘 지키기
2. 🌟(중요) 탈주 금지
3. 원활한 소통과 존중하는 태도 유지
4. 이슈 발생 시 즉시 공유

## 🎨 스타일 가이드
- Styled-Components 사용
- 컴포넌트 재사용성 고려
- 일관된 네이밍 컨벤션 유지

## 🚀 시작하기

```bash
# 프로젝트 클론
git clone https://github.com/Farm-On/FE.git

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

## 📁 폴더 구조
```
src/
├── assets/          # 이미지, 폰트 등 정적 파일
├── components/      # 재사용 가능한 컴포넌트
├── pages/          # 페이지 컴포넌트
├── hooks/          # 커스텀 훅
├── api/            # API 관련 로직
├── store/          # 전역 상태 관리
├── styles/         # 글로벌 스타일, 테마
├── types/          # TypeScript 타입 정의
└── utils/          # 유틸리티 함수
```
