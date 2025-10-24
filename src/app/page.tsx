import { Hero } from "@/components/Hero";
import { Header } from "@/components/layout/Header";
import { BlogCard } from "@/components/BlogCard";

const Index = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog/blog-nature.jpg",
      category: "ART",
      title: "When Chocolate was Medicine: Colmenero, Wadsworth, and Dufour",
      excerpt: "Between 1943 and 1945, with the help of Warner Bros.' finest, the U.S. Army produced a series of 27 propaganda cartoons...",
      author: {
        name: "Peter Reid",
        avatar: "/images/blog/avatar-1.jpg",
      },
      date: "Feb 8, 2020",
    },
    {
      id: 2,
      image: "/images/blog/blog-design.jpg",
      category: "MARKETING",
      title: "The Human Pyramids of Juste De Juste (ca. 1540)",
      excerpt: "Discover the fascinating history of human pyramids and their cultural significance in Renaissance Europe...",
      author: {
        name: "Sarah Mitchell",
        avatar: "/images/blog/avatar-1.jpg",
      },
      date: "Oct 4, 2020",
    },
    {
      id: 3,
      image: "/images/blog/blog-tech.jpg",
      category: "TECH",
      title: "Building Modern Web Applications with TypeScript",
      excerpt: "Explore the power of TypeScript, Express, and Next.js in creating robust, scalable web applications with PostgreSQL and Redis...",
      author: {
        name: "Alex Chen",
        avatar: "/images/blog/avatar-1.jpg",
      },
      date: "Jan 15, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Video */}
      <section id="home">
        <Hero />
      </section>
      
      <main id="blog" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Blog Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Stories Worth Reading
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover captivating narratives, insightful perspectives, and beautiful design inspiration from our curated collection of articles.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-12 md:space-y-16">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-4">Want more stories like these?</p>
          <button className="font-medium text-primary hover:underline underline-offset-4 transition-all">
            View All Articles →
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;