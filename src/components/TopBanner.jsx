import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TopBanner = () => {
  const scrollingText = "REGISTRATIONS ARE OPEN FOR ADMISSIONS FOR THIS YEAR";
  const textContent = `${scrollingText} • ${scrollingText} • ${scrollingText} • ${scrollingText} • `;
  
  return (
    <div className="w-full bg-[#DAA520] border-t-2 border-[#8B6914] border-b-2 border-[#8B6914]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 py-2.5 md:py-3">
          {/* Scrolling Message */}
          <div className="flex-1 overflow-hidden relative min-w-0">
            <div className="marquee-wrapper">
              <div className="marquee-track">
                <div className="marquee-item font-semibold text-sm md:text-base text-gray-900 whitespace-nowrap">
                  {textContent}
                </div>
                <div className="marquee-item font-semibold text-sm md:text-base text-gray-900 whitespace-nowrap" aria-hidden="true">
                  {textContent}
                </div>
              </div>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex items-center gap-2.5 md:gap-3 flex-shrink-0">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase px-5 md:px-6 py-2 rounded-lg shadow-md transition-all hover:scale-105 text-xs md:text-sm whitespace-nowrap"
            >
              <Link to="/admissions">Apply Online</Link>
            </Button>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase px-5 md:px-6 py-2 rounded-lg shadow-md transition-all hover:scale-105 text-xs md:text-sm whitespace-nowrap"
            >
              <Link to="/contact">Parent Login</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 20s linear infinite;
          will-change: transform;
        }
        
        .marquee-item {
          flex-shrink: 0;
          padding-right: 4rem;
        }
        
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
        
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TopBanner;


