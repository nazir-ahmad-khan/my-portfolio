function Button({ children, href, variant = "primary", download, ...props }) {
  const base =
    "px-6 py-3 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2 cursor-pointer";
  const variants = {
    primary:
      "bg-gradient-to-r from-accent-500 to-purple-500 text-white hover:shadow-lg hover:shadow-accent-500/25 hover:scale-105",
    outline:
      "border border-accent-500/50 text-accent-400 hover:bg-accent-500/10 hover:scale-105",
  };

  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      download={download}
      className={`${base} ${variants[variant]}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Button;
