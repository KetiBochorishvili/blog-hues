import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
    >
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Stories delivered to your inbox
        </h2>
        <p className="font-body text-muted-foreground text-lg leading-relaxed">
          Join our community of curious minds. No spam, just thoughtful stories every week.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-5 py-3 rounded-lg bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
          />
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsletterSection;
