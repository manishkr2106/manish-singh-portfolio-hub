
import { Button } from '@/components/ui/button';

type Article = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  category: string;
};

const ThoughtLeadershipSection = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: "Why Fashion Needs Reverse Logistics to Survive",
      excerpt: "Examining the critical role of reverse logistics in transforming fashion from a linear to circular business model...",
      date: "March 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80",
      category: "Circular Economy"
    },
    {
      id: 2,
      title: "Designing for Circularity in Retail: Beyond Recyclability",
      excerpt: "How retailers can implement circular design principles to create products that maintain value throughout multiple lifecycles...",
      date: "January 28, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?auto=format&fit=crop&w=600&q=80",
      category: "Sustainable Design"
    },
    {
      id: 3,
      title: "The Data-Driven Supply Chain: Balancing Efficiency and Resilience",
      excerpt: "Using big data to build supply chains that can withstand disruptions while maintaining operational excellence...",
      date: "November 10, 2022",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=80",
      category: "Supply Chain"
    }
  ];

  return (
    <section id="thought-leadership" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thought Leadership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights and perspectives on supply chain optimization, sustainability, and circular economy innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="rounded-xl overflow-hidden shadow-sm hover-card">
              {article.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6 bg-white">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium text-primary bg-blue-50 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <div className="text-xs text-muted-foreground">{article.date} · {article.readTime}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-blue-50 p-0">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadershipSection;
