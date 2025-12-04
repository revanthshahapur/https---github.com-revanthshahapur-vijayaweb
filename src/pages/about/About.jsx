import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in all aspects of education and character development.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Preparing students to be compassionate leaders and lifelong learners in a changing world.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Fostering empathy, kindness, and social responsibility in every student.",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Building character through honesty, respect, and ethical decision-making.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Discover our mission, vision, and commitment to educational excellence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sree Vijaya PU College & Public School was established with a vision to provide 
              quality education that goes beyond textbooks. Located in Honnali Taluk, Davanagere 
              District, our institution has been serving the community by nurturing young minds 
              and preparing them for a successful future.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach combines traditional values with modern teaching methodologies, 
              ensuring that students receive a well-rounded education that prepares them for 
              the challenges of the 21st century.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-lg transition-all hover:scale-105 border-2 hover:border-accent"
                >
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 border-accent/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide holistic education that nurtures academic excellence, moral values, 
                and social responsibility, empowering students to become confident, compassionate, 
                and capable leaders of tomorrow.
              </p>
            </Card>
            
            <Card className="p-8 border-2 border-accent/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading educational institution recognized for excellence in teaching, 
                character development, and community service, preparing students to thrive in 
                a diverse and dynamic world.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


