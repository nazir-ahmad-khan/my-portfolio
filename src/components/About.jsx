import { motion } from "motion/react";
import { personalInfo } from "../data/constants";
import SectionHeading from "../ui/SectionHeading";
import AboutImg from "../assets/Nazir-Ahmad.gif";

const stats = [
  { number: "4+", label: "Projects Built" },
  { number: "11", label: "Technologies" },
  { number: "1+", label: "Year Learning" },
  { number: "100%", label: "Dedication" },
];

function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>About Me</SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            {/* bg-gradient-to-br from-accent-500/20 to-purple-500/20 */}
            <div className="relative">
              <div className="w-64 h-64 md:w-100 md:h-100 rounded-2xl border-2 border-accent-500/20 flex items-center justify-center overflow-hidden">
                <span className="text-7xl font-bold text-accent-400/40">
                  <img src={AboutImg} alt="Nazir Ahmad" />
                </span>
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-accent-500/40 rounded-br-2xl" />
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-purple-500/40 rounded-tl-2xl" />
            </div>
          </motion.div>

          {/* Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-text-secondary leading-relaxed text-lg">
              {personalInfo.aboutText}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface-800 rounded-xl p-4 text-center border border-surface-600/50 hover:border-accent-500/30 transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold text-accent-400">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
