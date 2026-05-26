## 파일 트리 구조
이 프로젝트 프론트엔드 부분의 기본적인 파일 트리 구조는 다음과 같다.

```txt
PROJECT-LIMC-FE/
├── .next/
├── app/
├── components/
│   ├── common/     # 자주 사용되는 공용 컴포넌트
│   ├── domain/     # 기능/도메인 컴포넌트
│   ├── forms/      # form 관련
│   ├── layout/     # 헤더/푸터/사이드바
│   └── ui/         # shadcn 기본 ui 
├── hooks/
├── lib/
│   └── utils.ts
├── node_modules/
├── public/
├── services/       # api
├── store/          # 전체 상태 관리
├── types/          # 타입 정의
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```
