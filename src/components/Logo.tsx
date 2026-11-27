const Logo = ({ href, className = "text-2xl" }: { href: string; className?: string }) => (
  <a href={href} className={`font-display font-black tracking-tight text-ink ${className}`}>
    Veyalab<span className="text-accent">.</span>
  </a>
);

export default Logo;
