import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// ✅ Use relative imports (no alias errors)
import heroImage1 from "@/assets/hero-banner1.jpg";
import heroImage2 from "@/assets/hero-banner2.jpg";
import heroImage3 from "@/assets/hero-banner3.jpg";

// ✅ Slide data
const slides = [
  {
    image: heroImage1,
    title: "Welcome to",
    highlight: "Sree Vijaya",
    subtitle: "PU College & Public School",
    description: "Empowering Education for Tomorrow's Leaders",
  },
  {
    image: heroImage2,
    title: "Nurturing Minds,",
    highlight: "Building Futures",
    subtitle: "Academic Excellence with Modern Learning",
    description: "A Journey of Growth, Confidence & Success",
  },
  {
    image: heroImage3,
    title: "Discover Your",
    highlight: "Potential",
    subtitle: "Innovative Learning Environment",
    description: "Shaping Students into Tomorrow's Achievers",
  },
];

const HeroBanner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper && prevRef.current && nextRef.current) {
      if (typeof swiper.params.navigation !== 'boolean') {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        onSwiper={setSwiper}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 h-full flex items-center z-10">
              <div className="max-w-2xl text-primary-foreground space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slide.title}{" "}
                  <span className="text-accent">{slide.highlight}</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold font-semibold transition-transform duration-300 hover:scale-105 text-base px-8 py-6"
                  >
                    <Link to="/admissions">Apply Now</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary-foreground bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold transition-transform duration-300 hover:scale-105 text-base px-8 py-6"
                  >
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Arrows */}
      <button 
        ref={prevRef}
        onClick={() => swiper?.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center text-primary-foreground shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        ref={nextRef}
        onClick={() => swiper?.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center text-primary-foreground shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Custom Pagination Styles */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: hsl(var(--primary)) !important;
          opacity: 0.5;
          width: 12px;
          height: 12px;
          margin: 0 6px;
        }
        .swiper-pagination-bullet-active {
          background-color: hsl(var(--accent)) !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;


