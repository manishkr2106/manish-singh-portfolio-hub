
import { Button } from '@/components/ui/button';
import { Code, Database, FileText } from 'lucide-react';

const SkillJournalSection = () => {
  const skillEntries = [
    {
      id: 1,
      title: "Predictive Analytics with Python",
      description: "Built time-series forecasting models for retail inventory optimization using ARIMA and Prophet.",
      icon: <Code className="h-10 w-10 text-primary" />,
      link: "#"
    },
    {
      id: 2,
      title: "Interactive Tableau Dashboards",
      description: "Created interactive dashboards for visualizing supply chain performance metrics and identifying bottlenecks.",
      icon: <Database className="h-10 w-10 text-primary" />,
      link: "#"
    },
    {
      id: 3,
      title: "Circular Economy Analysis",
      description: "Conducted lifecycle analysis for product packaging to identify opportunities for waste reduction.",
      icon: <FileText className="h-10 w-10 text-primary" />,
      link: "#"
    }
  ];

  const certificationBadges = [
    {
      id: 1,
      name: "Python for Data Science",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=150&q=80",
      issuer: "Coursera"
    },
    {
      id: 2,
      name: "Tableau Desktop Specialist",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=150&q=80",
      issuer: "Tableau"
    },
    {
      id: 3,
      name: "Supply Chain Analytics",
      image: "https://images.unsplash.com/photo-1579225663317-c0505f2d1c62?auto=format&fit=crop&w=150&q=80",
      issuer: "edX"
    },
    {
      id: 4,
      name: "Circular Economy Design",
      image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=150&q=80",
      issuer: "Ellen MacArthur Foundation"
    }
  ];

  return (
    <section id="skill-journal" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skill Journal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Documenting my continuous learning journey and skill development in data analysis, 
            visualization, and sustainable business practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillEntries.map((entry) => (
            <div key={entry.id} className="bg-blue-50 rounded-xl p-6 flex flex-col h-full hover-card">
              <div className="mb-4">
                {entry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{entry.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{entry.description}</p>
              <Button variant="outline" className="mt-auto" asChild>
                <a href={entry.link}>View Project</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Certification Badges</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {certificationBadges.map((badge) => (
              <div key={badge.id} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 bg-white p-1 shadow-sm">
                  <img 
                    src={badge.image} 
                    alt={badge.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="font-medium text-sm mb-1">{badge.name}</h4>
                <p className="text-xs text-muted-foreground">{badge.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillJournalSection;
