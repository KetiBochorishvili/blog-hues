import BlogHeader from "@/components/BlogHeader";
import HeroArticle from "@/components/HeroArticle";
import ArticleGrid from "@/components/ArticleGrid";
import NewsletterSection from "@/components/NewsletterSection";
import BlogFooter from "@/components/BlogFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <HeroArticle />
      <ArticleGrid />
      <NewsletterSection />
      <BlogFooter />
    </div>
  );
};

export default Index;
