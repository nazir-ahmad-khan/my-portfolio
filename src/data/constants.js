import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaWordpress, FaGithub, FaLinkedin, FaNode, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiCanva, SiAdobephotoshop, SiFigma, SiMysql, SiExpress, SiNextdotjs, SiAstro, SiMongodb } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { BiLogoTypescript } from "react-icons/bi";
import MarketingWebsiteImg from "../assets/Marketing-Website.gif";
import QuizAppImg from "../assets/Quiz-App.gif";
import WeatherAppImg from "../assets/Weather-App.gif";
import TodoListImg from "../assets/Todo-List.gif";


export const personalInfo = {
  name: "Nazir Ahmad Khan",
  role: "Full Stack Developer",
  email: "nazirahmadkhantk@gmail.com",
  phone: "+92-349-9308179",
  location: "D.I Khan, Pakistan",
  github: "https://github.com/nazir-ahmad-khan",
  linkedin: "https://www.linkedin.com/in/nazir-ahmad-128a37370/",
  // resumeUrl: "/resume.pdf",
  // resumeUrl: "../assets/Nazeer-Resume.pdf",
  resumeUrl: "/Nazeer-Resume.pdf",
  heroTagline: "I build modern, scalable, and high-performance full-stack web applications.",
  heroDescription:
    "A passionate Full Stack Developer specializing in React, Next.js, Node.js, Express.js, and MongoDB, focused on building responsive, secure, and user-centric web applications.",
  aboutText:
    "I'm a Full Stack Developer based in Karachi, Pakistan, with hands-on experience in designing and developing modern web applications from frontend to backend. I specialize in React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL, building responsive user interfaces, RESTful APIs, and scalable backend systems. I enjoy solving real-world problems, writing clean and maintainable code, and continuously improving my skills through practical projects and collaborative development.",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#e34f26", level: 90 },
  { name: "CSS", icon: FaCss3Alt, color: "#1572b6", level: 85 },
  { name: "JavaScript", icon: FaJs, color: "#f7df1e", level: 75 },
  { name: "TypeScript", icon: BiLogoTypescript, color: "#3178C6", level: 75 },
  { name: "React", icon: FaReact, color: "#61DAFB", level: 75 },
  { name: "Next Js", icon: SiNextdotjs, color: "#FFFFFF", level: 75 },
  { name: "Astro Js", icon: SiAstro, color: "#FF5D01", level: 75 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4", level: 80 },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952b3", level: 80 },
  { name: "WordPress", icon: FaWordpress, color: "#21759b", level: 60 },
  { name: "jQuery", icon: SiJquery, color: "#0769ad", level: 70 },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31a8ff", level: 65 },
  { name: "Canva", icon: SiCanva, color: "#00c4cc", level: 75 },
  { name: "Figma", icon: SiFigma, color: "#f24e1e", level: 65 },
  { name: "Node Js", icon: FaNode, color: "#5FA04E", level: 75 },
  { name: "Python", icon: FaPython, color: "#3776AB", level: 75 },
  { name: "Express", icon: SiExpress, color: "#ffffff", level: 75 },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 75 },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 75 },
];

export const projects = [
  {
    title: "GTM Sales Development Platform (B2B Marketing Website)",
    image: MarketingWebsiteImg,
    description:
      "Built a React-based B2B sales platform with modular architecture, smooth routing, and conversion-driven design, deployed on Vercel.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://new-project-in-react-js-k5su.vercel.app/",
    githubUrl: "https://github.com/nazir-ahmad-khan/new-project-in-react-js/tree/main",
  },
  {
    title: "Quiz App",
    image: QuizAppImg,
    description:
      "An interactive quiz application with score tracking, timed questions, and a responsive UI built with React and styled using Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://quiz-app-alpha-drab.vercel.app/",
    githubUrl: "https://github.com/nazir-ahmad-khan/quiz-app",
  },
  {
    title: "Weather App",
    image: WeatherAppImg,
    description:
      "A weather application that fetches real-time weather data using APIs, displaying current conditions with a clean, intuitive interface.",
    tags: ["React", "HTML", "CSS", "JavaScript", "API"],
    liveUrl: "https://weather-repo-seven.vercel.app/",
    githubUrl: "https://github.com/nazir-ahmad-khan/weather-repo",
  },
  {
    title: "Todo List",
    image: TodoListImg,
    description:
      "A task management app with add, edit, delete, and completion features. Built with React for a seamless, interactive user experience.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://react-todo-app-project-nu.vercel.app/",
    githubUrl: "https://github.com/nazir-ahmad-khan/react-todo-app-project",
  },
];

export const socialLinks = [
  { icon: FaGithub, url: "https://github.com/nazir-ahmad-khan/new-project-in-react-js", label: "GitHub" },
  { icon: FaLinkedin, url: "#", label: "LinkedIn" },
  { icon: HiOutlineMail, url: "mailto:nazirahmadkhantk@gmail.com", label: "Email" },
];

export const contactInfo = [
  { icon: HiOutlineMail, label: "Email", value: "nazirahmadkhantk@gmail.com", href: "mailto:nazirahmadkhantk@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+92-349-9308179", href: "tel:+923499308179" },
  { icon: FiMapPin, label: "Location", value: "Karachi, Pakistan", href: null },
];
