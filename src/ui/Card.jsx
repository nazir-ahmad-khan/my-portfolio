function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-surface-800 rounded-2xl border border-surface-600/50 hover:border-accent-500/30 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
