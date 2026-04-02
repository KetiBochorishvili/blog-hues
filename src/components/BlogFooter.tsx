const BlogFooter = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold text-foreground">The Journal</p>
        <p className="font-body text-xs text-muted-foreground">
          © 2026 The Journal. Crafted with care.
        </p>
        <div className="flex gap-6">
          {["Twitter", "Instagram", "RSS"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
