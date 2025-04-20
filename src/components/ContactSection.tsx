
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to consulting, collaborations, and full-time opportunities in supply chain optimization, 
            sustainability, and circular economy innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a href="mailto:manish@example.com" className="group">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover-card flex flex-col items-center h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-4">Drop me a message anytime, I usually respond within 24 hours</p>
              <p className="text-primary font-medium">manish@example.com</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover-card flex flex-col items-center h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Linkedin size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect on LinkedIn</h3>
              <p className="text-muted-foreground mb-4">Let's build our professional network and stay connected</p>
              <p className="text-primary font-medium">linkedin.com/in/manish</p>
            </div>
          </a>

          <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover-card flex flex-col items-center h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Calendar size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule a Call</h3>
              <p className="text-muted-foreground mb-4">Book a 30-minute call to discuss potential collaborations</p>
              <p className="text-primary font-medium">View Availability</p>
            </div>
          </a>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Based in Boston, MA but open to remote opportunities worldwide</p>
          <Button size="lg">
            Download My Press Kit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
