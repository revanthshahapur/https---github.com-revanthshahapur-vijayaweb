import { Card } from "@/components/ui/card";

const Overview = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Overview</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Learn about Sree Vijaya PU College & Public School
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Institution Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Sree Vijaya PU College & Public School is a premier educational institution committed to 
                  providing quality education that nurtures academic excellence, character development, and 
                  holistic growth. Established with a vision to empower students with knowledge, skills, and 
                  values, our institution has been serving the community with dedication and excellence.
                </p>
                <p>
                  Our institution offers comprehensive educational programs from early childhood to pre-university 
                  level, ensuring a seamless learning journey for students. We believe in creating an environment 
                  where every student can thrive, discover their potential, and prepare for a successful future.
                </p>
                <p>
                  With state-of-the-art facilities, experienced faculty, and a commitment to innovation in 
                  education, Sree Vijaya stands as a beacon of educational excellence in the region.
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Commitment</h3>
                <p className="text-muted-foreground">
                  We are committed to providing a nurturing and stimulating learning environment that 
                  encourages curiosity, critical thinking, and creativity in every student.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Approach</h3>
                <p className="text-muted-foreground">
                  We combine traditional values with modern teaching methodologies to ensure our 
                  students receive a well-rounded education that prepares them for the challenges of tomorrow.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;


