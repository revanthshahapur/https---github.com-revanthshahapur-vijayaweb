import HeroBanner from "@/components/HeroBanner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
// import principalImage from "@/assets/principal.jpg";
import studentsImage from "@/assets/students-learning.jpg";
import classroomLearningImage from "@/assets/Classroom learning.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Index = () => {
  // Scholastic Programs Data
  const scholasticPrograms = [
    {
      subheading: "Primary Education",
      heading: "Primary School",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      link: "/programme/academic",
    },
    {
      subheading: "Secondary Education",
      heading: "High School",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop",
      link: "/programme/academic",
    },
    {
      subheading: "Pre-University",
      heading: "PU College (Science & Commerce)",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      link: "/programme/academic",
    },
  ];

  // Co-Scholastic Programs Data
  const coScholasticPrograms = [
    {
      heading: "Arts Education",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      link: "/programme/co-scholastic",
    },
    {
      heading: "Physical Education",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      link: "/programme/co-scholastic",
    },
    {
      heading: "Life Skills Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      link: "/programme/co-scholastic",
    },
    {
      heading: "Newspaper in Education (NIE)",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop",
      link: "/programme/co-scholastic",
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Ms. Priya Sharma",
      text: "Sree Vijaya PU College & Public School has provided an exceptional learning environment for my child. The dedicated faculty and comprehensive curriculum have helped my daughter excel both academically and personally. The school's commitment to holistic education is truly commendable.",
    },
    {
      name: "Mr. Ramesh Kumar",
      text: "As a parent, I am extremely satisfied with the quality of education at Sree Vijaya. The teachers are highly qualified and dedicated to student success. My son has shown remarkable improvement in both academics and co-curricular activities since joining the school.",
    },
    {
      name: "Mrs. Anjali Reddy",
      text: "The infrastructure and facilities at Sree Vijaya are outstanding. The school provides a perfect balance of academic rigor and extracurricular activities. My daughter loves going to school every day and has developed a genuine love for learning.",
    },
    {
      name: "Dr. Suresh Patel",
      text: "Sree Vijaya has exceeded our expectations in every way. The personalized attention given to each student, along with the innovative teaching methods, has helped my child achieve excellent results. The school truly prepares students for future challenges.",
    },
    {
      name: "Mrs. Kavitha Nair",
      text: "We chose Sree Vijaya for its reputation and we haven't been disappointed. The holistic approach to education, focusing on character building along with academics, is exactly what we wanted for our children. Highly recommended to all parents!",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroBanner />

      {/* Our Philosophy Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <div className="absolute bottom-0 left-10 w-20 h-20 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-accent/30 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Column */}
                <div className="relative h-full min-h-[400px]">
                  <img 
                    src={classroomLearningImage}
                    alt="Classroom learning"
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative geometric pattern overlay */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 opacity-90">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon points="0,100 50,50 0,0" fill="#F9B500" opacity="0.6"/>
                      <rect x="30" y="30" width="20" height="20" fill="#8B6914" opacity="0.5"/>
                      <circle cx="70" cy="70" r="15" fill="#DAA520" opacity="0.4"/>
                    </svg>
                  </div>
                </div>
                
                {/* Text Column */}
                <div className="p-12 flex flex-col justify-center bg-white">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                    Our Philosophy
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Sree Vijaya PU College & Public School, we believe that education is a transformative 
                    journey that goes beyond academic excellence. Our philosophy centers on nurturing well-rounded 
                    individuals who are equipped with knowledge, values, and skills to thrive in an ever-changing 
                    world. We foster an environment where curiosity is encouraged, creativity is celebrated, and 
                    character is built through meaningful experiences and ethical guidance.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Message from Leadership Section */}
      <section className="py-20 bg-primary text-primary-foreground relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Headers */}
            <div className="text-center mb-4">
              <p className="text-sm uppercase tracking-wider text-primary-foreground/70 mb-2">Leadership</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Message from Leadership</h2>
            </div>
            <div className="text-right mb-8">
              <p className="text-lg text-primary-foreground/80">A Message from Our Chairman</p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Circular Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl bg-primary/20 flex items-center justify-center">
                    <div className="text-6xl text-primary-foreground/30 font-bold"></div>
                  </div>
                </div>
              </div>

              {/* Message Text */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Dr. Chairman</h3>
                <p className="text-primary-foreground/80 text-sm">Chairman, Sree Vijaya Educational Trust</p>
                <p className="text-lg leading-relaxed text-primary-foreground/90">
                  Education is the foundation upon which great futures are built. At Sree Vijaya PU College & 
                  Public School, we are committed to providing a world-class education that combines academic 
                  rigor with character development. Our mission is to empower every student to realize their 
                  full potential and become responsible, compassionate leaders of tomorrow. We believe in 
                  creating an inclusive learning environment where each child is valued and encouraged to excel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholastic Programme Section */}
      <section className="py-20 bg-secondary relative">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Scholastic Programme</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Board and Curriculum</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {scholasticPrograms.map((program, index) => (
              <Card key={index} className="rounded-xl overflow-hidden border-2 hover:border-accent/50 transition-all hover:shadow-xl group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.heading}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Geometric pattern overlay */}
                  <div className="absolute bottom-0 left-0 w-24 h-24 opacity-80">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon points="0,100 50,50 0,0" fill="#F9B500"/>
                      <rect x="25" y="25" width="15" height="15" fill="#8B6914" opacity="0.7"/>
                      <circle cx="70" cy="70" r="12" fill="#DAA520" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase text-muted-foreground mb-2">{program.subheading}</p>
                  <h3 className="text-xl font-bold text-primary mb-4">{program.heading}</h3>
                  <Link 
                    to={program.link}
                    className="text-primary font-semibold text-sm hover:text-accent flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Know more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Scholastic Programs Section */}
      <section className="py-20 bg-secondary relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Co-Scholastic Programs</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Unlocking Potential Beyond Academics
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coScholasticPrograms.map((program, index) => (
              <Card key={index} className="rounded-xl overflow-hidden border-2 hover:border-accent/50 transition-all hover:shadow-xl group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.heading}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Geometric pattern overlay */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 opacity-80">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon points="0,100 50,50 0,0" fill="#F9B500"/>
                      <rect x="25" y="25" width="15" height="15" fill="#8B6914" opacity="0.7"/>
                      <circle cx="70" cy="70" r="12" fill="#DAA520" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">{program.heading}</h3>
                  <Link 
                    to={program.link}
                    className="text-primary font-semibold text-sm hover:text-accent flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Know more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Today Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Geometric pattern on sides */}
        <div className="absolute left-0 top-0 w-40 h-full opacity-20">
          <svg viewBox="0 0 200 800" className="w-full h-full">
            <polygon points="0,0 100,100 0,200 50,150" fill="#F9B500"/>
            <rect x="20" y="300" width="60" height="60" fill="#DAA520" opacity="0.6"/>
            <circle cx="80" cy="500" r="40" fill="#8B6914" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-40 h-full opacity-20">
          <svg viewBox="0 0 200 800" className="w-full h-full">
            <polygon points="200,0 100,100 200,200 150,150" fill="#F9B500"/>
            <rect x="120" y="300" width="60" height="60" fill="#DAA520" opacity="0.6"/>
            <circle cx="120" cy="500" r="40" fill="#8B6914" opacity="0.4"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - CTA */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Join Us Today!</h2>
              <h3 className="text-2xl font-semibold text-primary-foreground/90">
                Experience the Difference at Sree Vijaya
              </h3>
              <p className="text-lg leading-relaxed text-primary-foreground/80">
                Become part of a community dedicated to excellence in education. At Sree Vijaya PU College & 
                Public School, we provide a nurturing environment where students thrive academically, 
                socially, and personally. Discover how we can help shape your child's future.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 rounded-lg shadow-xl"
              >
                <Link to="/admissions" className="flex items-center gap-2">
                  ENQUIRY NOW
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Right Column - Images */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=400&fit=crop"
                    alt="Student learning"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=300&h=400&fit=crop"
                    alt="Student studying"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=400&fit=crop"
                    alt="Classroom"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=400&fit=crop"
                    alt="Students"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop"
                    alt="Activities"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Parents Say About Us
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet testimonial-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active',
              }}
              loop={true}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card className="p-12 border-2 border-accent/20 rounded-2xl h-full">
                    <div className="relative">
                      <Quote className="h-16 w-16 text-accent mb-6" />
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {testimonial.name}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Styles */}
            <style>{`
              .testimonials-swiper .swiper-pagination {
                position: relative;
                margin-top: 2rem;
                bottom: 0;
              }
              .testimonial-bullet {
                width: 12px;
                height: 12px;
                background: hsl(var(--muted-foreground));
                opacity: 0.3;
                margin: 0 4px;
                border-radius: 50%;
                transition: all 0.3s ease;
              }
              .testimonial-bullet-active {
                background: hsl(var(--primary));
                opacity: 1;
                width: 32px;
                border-radius: 6px;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Teacher Training Section */}
      <section className="py-20 bg-secondary relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Teacher Training</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Continuous Professional Development
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image Column */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=600&fit=crop"
                alt="Teacher training"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Column */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                Sree Vijaya lays a huge emphasis on enhancing teacher's skills through continuous 
                professional development courses.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that excellent teachers are the cornerstone of outstanding education. Our 
                comprehensive professional development program ensures that our educators stay at the 
                forefront of pedagogical innovation and best practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through regular workshops, training sessions, and collaborative learning opportunities, 
                we empower our teachers with the latest teaching methodologies, technological tools, and 
                educational strategies. This commitment to continuous growth directly translates into 
                enriched learning experiences for our students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;


