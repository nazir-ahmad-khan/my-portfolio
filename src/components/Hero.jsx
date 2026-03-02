import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiDownload } from "react-icons/hi";
import { personalInfo } from "../data/constants";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent-400 tracking-widest uppercase text-sm font-medium mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-accent-400 via-purple-400 to-accent-400 bg-clip-text text-transparent"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-text-secondary font-light mb-6"
        >
          {personalInfo.role}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.heroDescription}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <Button href="#contact" variant="primary">
            Contact Me
          </Button>
          <Button
            href={personalInfo.resumeUrl}
            variant="outline"
            download="Nazir_Ahmad_Khan_Resume.pdf"
          >
            <HiDownload size={18} />
            Download CV
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-5"
        >
          {[
            { icon: FaGithub, url: personalInfo.github, label: "GitHub" },
            { icon: FaLinkedin, url: personalInfo.linkedin, label: "LinkedIn" },
            {
              icon: HiOutlineMail,
              url: `mailto:${personalInfo.email}`,
              label: "Email",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-11 h-11 rounded-full border border-surface-600/50 flex items-center justify-center text-text-secondary hover:text-accent-400 hover:border-accent-500/50 hover:scale-110 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
