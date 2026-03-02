import { socialLinks } from "../data/constants";

function Footer() {
  return (
    <footer className="py-8 bg-surface-800 border-t border-surface-600/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Nazir Ahmad Khan. All rights
            reserved.
          </p>
          <div className="flex gap-4">
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
                className="text-text-muted hover:text-accent-400 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
