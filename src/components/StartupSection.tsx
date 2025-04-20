
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

const StartupSection = () => {
  const startupProjects = [
    {
      id: 1,
      name: "Zara CycleWorks",
      tagline: "Closed-loop textile recycling for fast fashion",
      description: "A circular economy initiative designed to transform Zara's waste streams into new product lines, creating value from textile waste.",
      highlights: [
        "20% reduction in virgin material consumption",
        "Customer-facing take-back program with loyalty rewards",
        "In-house recycling technology reducing dependency on third parties"
      ],
      status: "Concept Development"
    },
    {
      id: 2,
      name: "Tide ShoePods",
      tagline: "Sustainable footwear care for the circular economy",
      description: "Biodegradable cleaning pods specifically designed for extending the lifecycle of footwear, reducing waste while increasing product longevity.",
      highlights: [
        "100% biodegradable formula and packaging",
        "Subscription model with recurring revenue",
        "Partnerships with major footwear brands for co-promotion"
      ],
      status: "Business Model Validation"
    }
  ];

  return (
    <section id="startup" className="section-padding bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-blue-100 rounded-full mb-4">
            <Rocket size={28} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Startup & Innovation Lab</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring disruptive ideas at the intersection of sustainability, technology, and consumer products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {startupProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl p-8 shadow-sm hover-card">
              <div className="bg-blue-50 inline-block px-3 py-1 rounded text-xs font-medium text-blue-700 mb-4">
                {project.status}
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-primary font-medium mb-4">{project.tagline}</p>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              
              <h4 className="font-semibold mb-3">Key Highlights:</h4>
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline">View Business Canvas</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupSection;
