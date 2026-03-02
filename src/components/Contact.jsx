import { useState } from "react";
import { motion } from "motion/react";
import { personalInfo, contactInfo, socialLinks } from "../data/constants";
import SectionHeading from "../ui/SectionHeading";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const inputClasses =
    "w-full bg-surface-800 border border-surface-600/50 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/25 transition-all duration-200";

  return (
    <section id="contact" className="py-20 px-4 bg-surface-800/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Get In Touch</SectionHeading>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-text-primary">
              Let's work together
            </h3>
            <p className="text-text-secondary mt-4 leading-relaxed">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out if you'd like to work together or just want to say
              hello!
            </p>

            <div className="space-y-5 mt-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-text-primary hover:text-accent-400 transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-primary text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="w-11 h-11 rounded-xl border border-surface-600/50 flex items-center justify-center text-text-secondary hover:text-accent-400 hover:border-accent-500/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className={`${inputClasses} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-accent-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-accent-500/25 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
