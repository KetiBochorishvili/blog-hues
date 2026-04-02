import { motion } from "framer-motion";

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  index: number;
}

const ArticleCard = ({ image, category, title, excerpt, author, date, readTime, index }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden rounded-lg mb-5">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
          loading="lazy"
          width={768}
          height={512}
        />
      </div>
      <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {category}
      </span>
      <h3 className="font-display text-xl md:text-2xl font-semibold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
        {title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
        {excerpt}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-secondary" />
        <p className="font-body text-xs text-muted-foreground">
          {author} · {date} · {readTime}
        </p>
      </div>
    </motion.article>
  );
};

export default ArticleCard;
