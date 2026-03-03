import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaWordpress, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiCanva, SiAdobephotoshop, SiFigma } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin } from "react-icons/fi";

export const personalInfo = {
  name: "Nazir Ahmad Khan",
  role: "Frontend Developer",
  email: "nazirahmadkhantk@gmail.com",
  phone: "+92-349-9308179",
  location: "Karachi, Pakistan",
  github: "https://github.com/nazir-ahmad-khan",
  linkedin: "#",
  resumeUrl: "/resume.pdf",
  heroTagline: "I build responsive, modern web experiences.",
  heroDescription:
    "A passionate Frontend Developer focused on crafting clean, user-friendly interfaces with React and modern CSS frameworks.",
  aboutText:
    "I'm a Frontend Developer based in Karachi, Pakistan, with a strong foundation in building responsive and interactive web applications. I specialize in React.js and modern CSS frameworks like Tailwind CSS. I'm driven by curiosity and a desire to continuously grow as a developer, and I'm eager to contribute to real-world projects in a collaborative team environment.",
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
  { name: "React", icon: FaReact, color: "#61dafb", level: 75 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4", level: 80 },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952b3", level: 80 },
  { name: "WordPress", icon: FaWordpress, color: "#21759b", level: 60 },
  { name: "jQuery", icon: SiJquery, color: "#0769ad", level: 70 },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31a8ff", level: 65 },
  { name: "Canva", icon: SiCanva, color: "#00c4cc", level: 75 },
  { name: "Figma", icon: SiFigma, color: "#f24e1e", level: 65 },
];

export const projects = [
  {
    title: "GTM Sales Development Platform (B2B Marketing Website)",
    description:
      "Built a React-based B2B sales platform with modular architecture, smooth routing, and conversion-driven design, deployed on Vercel.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://new-project-in-react-js-k5su.vercel.app/",
    githubUrl: "https://github.com/nazir-ahmad-khan/new-project-in-react-js/tree/main",
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application with score tracking, timed questions, and a responsive UI built with React and styled using Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://quiz-app-alpha-drab.vercel.app/",
    githubUrl: "https://github.com/nazir-ahmad-khan/quiz-app",
  },
  {
    title: "Weather App",
    description:
      "A weather application that fetches real-time weather data using APIs, displaying current conditions with a clean, intuitive interface.",
    tags: ["React", "HTML", "CSS", "JavaScript", "API"],
    liveUrl: "https://weather-repo-seven.vercel.app/",
    githubUrl: "https://github.com/nazir-ahmad-khan/weather-repo",
  },
  {
    title: "Todo List",
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
