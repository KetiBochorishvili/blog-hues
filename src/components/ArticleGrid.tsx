import ArticleCard from "./ArticleCard";
import blogTravel from "@/assets/blog-travel.jpg";
import blogFood from "@/assets/blog-food.jpg";
import blogLifestyle from "@/assets/blog-lifestyle.jpg";
import blogDesign from "@/assets/blog-design.jpg";
import blogNature from "@/assets/blog-nature.jpg";

const articles = [
  {
    image: blogTravel,
    category: "Travel",
    title: "Lost in the White Streets of Santorini",
    excerpt: "Wandering through ancient pathways where the Aegean breeze carries stories of centuries past.",
    author: "James Cole",
    date: "Mar 25",
    readTime: "6 min",
  },
  {
    image: blogFood,
    category: "Food",
    title: "Farm to Table: A Morning in Provence",
    excerpt: "Fresh ingredients, simple techniques, and the philosophy of letting quality speak for itself.",
    author: "Sophie Laurent",
    date: "Mar 22",
    readTime: "5 min",
  },
  {
    image: blogLifestyle,
    category: "Lifestyle",
    title: "Rainy Days and the Books That Save Us",
    excerpt: "There's a particular magic in curling up with a book while the world outside is washed in grey.",
    author: "Mia Chen",
    date: "Mar 20",
    readTime: "4 min",
  },
  {
    image: blogDesign,
    category: "Design",
    title: "Biophilic Design: Bringing Nature Indoors",
    excerpt: "How integrating natural elements into our workspaces transforms creativity and wellbeing.",
    author: "Luca Rossi",
    date: "Mar 18",
    readTime: "7 min",
  },
  {
    image: blogNature,
    category: "Nature",
    title: "Dawn on the Forest Trail",
    excerpt: "When the first light breaks through the canopy, every step becomes a meditation.",
    author: "Anika Patel",
    date: "Mar 15",
    readTime: "5 min",
  },
];

const ArticleGrid = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
        Recent Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <ArticleCard key={article.title} {...article} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;
