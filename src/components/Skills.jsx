import { motion } from "motion/react";
import { skills } from "../data/constants";
import SectionHeading from "../ui/SectionHeading";

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-surface-800/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Skills & Technologies</SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-surface-800 rounded-xl p-6 text-center border border-surface-600/50 hover:border-accent-500/30 transition-all duration-300 group"
            >
              <skill.icon
                size={40}
                style={{ color: skill.color }}
                className="mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-medium text-text-primary text-sm mb-3">
                {skill.name}
              </h3>

              {/* Progress bar */}
              <div className="h-1.5 bg-surface-600 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent-500 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                />
              </div>
              <span className="text-xs text-text-muted mt-2 block">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
