
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumeSection = () => {
  const technicalSkills = [
    "Python", "Tableau", "Excel", "MILP", "Optimization Modeling", "Data Analysis", 
    "Supply Chain Management", "Sustainability", "Circular Economy", "Process Improvement"
  ];

  const softSkills = [
    "Strategic Thinking", "Negotiation", "Stakeholder Engagement", "Leadership", 
    "Project Management", "Cross-functional Collaboration", "Communication", "Problem Solving"
  ];

  const certifications = [
    { name: "Supply Chain Analytics", issuer: "Coursera", year: "2023" },
    { name: "Sustainable Business Strategy", issuer: "Harvard Business School Online", year: "2022" },
    { name: "Data Analysis with Python", issuer: "edX", year: "2021" },
    { name: "Circular Economy: An Introduction", issuer: "Ellen MacArthur Foundation", year: "2021" }
  ];

  return (
    <section id="resume" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume & Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My unique blend of technical expertise and business acumen allows me to bridge gaps between data, 
            operations, and sustainability strategy.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Button className="flex items-center gap-2" size="lg">
            <Download size={18} />
            Download Resume PDF
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover-card">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover-card">
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover-card">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-sm bg-white px-2 py-1 rounded font-medium">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
