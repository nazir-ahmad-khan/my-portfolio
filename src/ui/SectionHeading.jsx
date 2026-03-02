import { motion } from "motion/react";

function SectionHeading({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
        {children}
      </h2>
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full" />
    </motion.div>
  );
}

export default SectionHeading;
