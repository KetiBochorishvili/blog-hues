import { motion } from "framer-motion";
import heroImage from "@/assets/hero-blog.jpg";

const HeroArticle = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
      >
        <div className="order-2 lg:order-1 space-y-6">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Featured Story
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
            The Art of Slowing Down in a Fast-Paced World
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg">
            In the quiet moments between the rush, we discover what truly matters.
            A reflection on mindfulness, intention, and the beauty of presence.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="w-10 h-10 rounded-full bg-secondary" />
            <div>
              <p className="font-body text-sm font-semibold text-foreground">Elena Martinez</p>
              <p className="font-body text-xs text-muted-foreground">March 28, 2026 · 8 min read</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 overflow-hidden rounded-lg">
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            src={heroImage}
            alt="A cozy coffee table with notebook and camera"
            className="w-full h-[300px] md:h-[450px] object-cover"
            width={1280}
            height={720}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroArticle;
