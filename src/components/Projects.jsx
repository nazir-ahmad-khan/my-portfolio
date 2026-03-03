import { motion } from "motion/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/constants";
import SectionHeading from "../ui/SectionHeading";

function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Featured Projects</SectionHeading>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="bg-surface-800 rounded-2xl overflow-hidden border border-surface-600/50 hover:border-accent-500/30 transition-all duration-300 group h-full flex flex-col">
                {/* Project image placeholder */}
                <div className="h-48 bg-gradient-to-br from-surface-700 to-surface-600 relative overflow-hidden">
                  {/* Decorative grid pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #06b6d4 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-text-secondary/30 group-hover:text-accent-400/30 transition-colors duration-300">
                      {project.title}
                    </span>
                  </div>

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/10 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-surface-900/80 rounded-full flex items-center justify-center text-accent-400 hover:bg-accent-500 hover:text-white transition-all duration-200"
                        aria-label="Live Demo">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-surface-900/80 rounded-full flex items-center justify-center text-accent-400 hover:bg-accent-500 hover:text-white transition-all duration-200"
                      aria-label="Source Code">
                      <FiGithub size={18} />
                    </a>
                  </div>
                </div>


                

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links row */}
                  <div className="flex gap-4 mt-4 pt-4 border-t border-surface-600/50">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent-400 hover:text-accent-300 flex items-center gap-1.5 transition-colors"
                      >
                        <FiExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-secondary hover:text-accent-400 flex items-center gap-1.5 transition-colors"
                    >
                      <FiGithub size={14} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
