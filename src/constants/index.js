import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  commerciax,
  empyreal,
  jbull,
  simform,
  tictactoeCover,
  loginCover,
  clockCover,
  calculatorCover,
  pongCover,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI / ML Engineer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Senior Flutter Developer",
    icon: mobile,
  },
  {
    title: "Co-founder & CTO",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// Real work history, oldest to most recent, with real company logos.
const experiences = [
  {
    title: "Flutter Developer · Intern",
    company_name: "Empyreal Infotech",
    icon: empyreal,
    iconBg: "#0a0a0a",
    date: "Jan 2022 - Jun 2022",
    points: [
      "Built 'Expense Management', a Flutter-based personal finance app, as part of a 4-person team.",
      "Owned the UI design and overall application architecture end to end.",
      "Integrated pub.dev packages to ship a clean, responsive mobile experience.",
    ],
  },
  {
    title: "Trainee Engineer · Apprenticeship",
    company_name: "Simform",
    icon: simform,
    iconBg: "#3a0d52",
    date: "Feb 2023 - Aug 2023",
    points: [
      "Completed an intensive full-stack apprenticeship across Flutter, Dart, Java, Swift, Node, Express and Python.",
      "Worked with Firebase, MongoDB Atlas, SQLite and Hive for data and persistence.",
      "Gained a comprehensive, production-grade understanding of the Flutter framework.",
    ],
  },
  {
    title: "Flutter → Senior Flutter → Full-Stack Developer",
    company_name: "J Bulls Infotech",
    icon: jbull,
    iconBg: "#3a1145",
    date: "Aug 2023 - Mar 2024",
    points: [
      "Designed the UI/UX for an interactive 3D Chess app using Rive animations in Flutter.",
      "Promoted to Senior Flutter Developer, architecting features with the BLoC pattern.",
      "Built the MVP for GameBullz — a Flutter + Node.js app to find and book gaming venues like box cricket pitches and football turfs.",
    ],
  },
  {
    title: "Co-founder & CTO",
    company_name: "Commerciax Infotech · neweb.ai",
    icon: commerciax,
    iconBg: "#000000",
    date: "Mar 2024 - Present",
    points: [
      "Co-founded Commerciax Infotech and lead engineering for neweb.ai, an autonomous AI website platform.",
      "Architect full-stack systems and AI/ML pipelines across the product.",
      "Drive technical strategy end to end — from infrastructure and DevOps to user-facing features.",
    ],
  },
];

// Testimonials removed from the page (no honest testimonials for an archive).
const testimonials = [];

const projects = [
  {
    name: "Tic Tac Toe",
    description:
      "A two-player Tic Tac Toe built with vanilla JavaScript and hands-on DOM manipulation.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: tictactoeCover,
    source_code_link:
      "https://uditrajmr3.github.io/uditrajmr3/Tic%20Tac%20Toe/index.html",
  },
  {
    name: "Login Page",
    description:
      "An animated glassmorphism login screen with falling-leaf parallax — pure HTML and CSS.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: loginCover,
    source_code_link:
      "https://uditrajmr3.github.io/uditrajmr3/Login%20Page/index.html",
  },
  {
    name: "Analog Clock",
    description:
      "A real-time analog clock driven by the JavaScript Date API and CSS transforms.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: clockCover,
    source_code_link:
      "https://uditrajmr3.github.io/uditrajmr3/Analog%20Clock/index.html",
  },
  {
    name: "Calculator with Secret Stash",
    description:
      "A working calculator hiding a secret stash — a playful twist on a classic build.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: calculatorCover,
    source_code_link:
      "https://uditrajmr3.github.io/uditrajmr3/Calculator%20with%20Secret%20Stash/index.html",
  },
  {
    name: "Pong",
    description:
      "The arcade classic, rebuilt from scratch with vanilla JavaScript and the canvas API.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "canvas", color: "pink-text-gradient" },
    ],
    image: pongCover,
    source_code_link:
      "https://uditrajmr3.github.io/uditrajmr3/Pong%20Game/index.html",
  },
];

export { services, technologies, experiences, testimonials, projects };
