import Project from "./Project";

const projects = [
  {
    title: "My Review Log",
    period: "2024.12 - 2025.02",
    techStack: "JavaScript, React, Vercel",
    summary: "나만의 영화 및 도서 리뷰 아카이브",
    features: [
      "영화 및 도서 리뷰 등록",
      "최신순 & 별점순, 영화 & 도서 필터링",
      "영화 포스터, 도서 표지 자동 등록",
    ],
    learnings: ["TMDB, Google Books API 추가", "Vercel 배포"],
    challenges: ["드롭다운 useEffect 문제"],
    images: [
      "src/assets/MRL_main.png",
      "src/assets/MRL_new.png",
      "src/assets/MRL_review.png",
      "src/assets/MRL_edit.png",
    ],
    demoLink: "https://my-review-log.vercel.app/",
    detailsLink:
      "https://www.notion.so/My-Review-Log-19f1d19d71d680e4ba9eefb08d84a7c8?pvs=4",
  },
  {
    title: "Portfolio",
    period: "2025.02 - 2025.02",
    techStack: "JavaScript, React, GitHub pages",
    summary: "개인 포트폴리오 웹사이트",
    features: ["프로젝트 목록 관리"],
    learnings: ["GitHub Pages 배포"],
    challenges: ["디자인 구현"],
    images: [
      "src/assets/portfolio_cover.png",
      "src/assets/portfolio_info.png",
      "src/assets/portfolio_project.png",
    ],
    demoLink: "https://heoyedim.github.io/",
    detailsLink: "https://github.com/HeoYedim/HeoYedim.github.io",
  },
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
