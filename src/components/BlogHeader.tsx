import { motion } from "framer-motion";

const BlogHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 border-b border-border"
    >
      <a href="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
        The Journal
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {["Stories", "Travel", "Food", "Lifestyle", "Design"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-body text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>
      <button className="font-body text-sm font-semibold tracking-wide uppercase text-primary hover:text-foreground transition-colors duration-300">
        Subscribe
      </button>
    </motion.header>
  );
};

export default BlogHeader;
