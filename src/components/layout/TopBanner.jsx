import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
// 1. Import useState hook
import { useState } from "react"; 
// 2. Import the new Modal component using the specified relative path
import LoginModel from "../model/LoginModel"; 

const TopBanner = () => {
  // 3. State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false); 

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
          
          {/* Buttons (Modified) */}
          <div className="flex items-center gap-2.5 md:gap-3 flex-shrink-0">
            {/* The "Apply Online" button is removed as requested */}
            
            {/* 4. The new single Login Button */}
            <Button
              // Change from asChild/Link to a simple button
              // 5. Add onClick handler to open the modal
              onClick={() => setIsModalOpen(true)} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase px-5 md:px-6 py-2 rounded-lg shadow-md transition-all hover:scale-105 text-xs md:text-sm whitespace-nowrap"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* 6. Render the Login Modal */}
      {/* Note: I've updated the component name to match your specified path: LoginModel */}
      <LoginModel isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      {/* Marquee Animation Styles (Unchanged) */}
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