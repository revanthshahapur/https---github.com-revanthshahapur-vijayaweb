import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import schoolLogo from "@/assets/school-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isActiveParent = (paths) => paths.some(path => location.pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
            <img src={schoolLogo} alt="Sree Vijaya Logo" className="h-12 w-12" />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary-foreground leading-tight">
                Sree Vijaya
              </h1>
              <p className="text-xs text-accent">PU College & Public School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {/* Home */}
              <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-all rounded-md ${
                isActive("/")
                  ? "bg-accent text-accent-foreground"
                  : "text-primary-foreground hover:bg-primary/80"
              }`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`px-3 py-2 text-sm font-medium transition-all rounded-md flex items-center gap-1 ${
                  isActiveParent(["/about", "/overview", "/vision-mission", "/leadership", "/facilities", "/average-college-day", "/college-details", "/average-school-day", "/school-details"])
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground hover:bg-primary/80"
                }`}
              >
                About Us
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[250px]">
                <DropdownMenuItem asChild>
                  <Link to="/overview" className="cursor-pointer">Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/vision-mission" className="cursor-pointer">Vision and Mission</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/leadership" className="cursor-pointer">Leadership</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/facilities" className="cursor-pointer">Facilities</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/average-college-day" className="cursor-pointer">Average College Day College</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/college-details" className="cursor-pointer">College Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/average-school-day" className="cursor-pointer">Average School Day School</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/school-details" className="cursor-pointer">School Details</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Programme Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`px-3 py-2 text-sm font-medium transition-all rounded-md flex items-center gap-1 ${
                  isActiveParent(["/programme"])
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground hover:bg-primary/80"
                }`}
              >
                Programme
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[220px]">
                <DropdownMenuItem asChild>
                  <Link to="/programme/academic" className="cursor-pointer">Academic Programmes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/programme/co-scholastic" className="cursor-pointer">Co-Scholastic</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/programme/extra-curricular" className="cursor-pointer">Extra Curricular</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Admission Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`px-3 py-2 text-sm font-medium transition-all rounded-md flex items-center gap-1 ${
                  isActiveParent(["/admissions", "/admission"])
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground hover:bg-primary/80"
                }`}
              >
                Admission
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[220px]">
                <DropdownMenuItem asChild>
                  <Link to="/admissions" className="cursor-pointer">Admission Process</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/admission/requirements" className="cursor-pointer">Requirements</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/admission/fees" className="cursor-pointer">Fee Structure</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/admission/scholarships" className="cursor-pointer">Scholarships</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mandatory Public Disclosure */}
            <Link
              to="/mandatory-disclosure"
              className={`px-3 py-2 text-sm font-medium transition-all rounded-md ${
                isActive("/mandatory-disclosure")
                  ? "bg-accent text-accent-foreground"
                  : "text-primary-foreground hover:bg-primary/80"
              }`}
            >
              Mandatory Public Disclosure
            </Link>

            {/* Gallery */}
            <Link
              to="/gallery"
              className={`px-3 py-2 text-sm font-medium transition-all rounded-md ${
                isActive("/gallery")
                  ? "bg-accent text-accent-foreground"
                  : "text-primary-foreground hover:bg-primary/80"
              }`}
            >
              Gallery
              </Link>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`px-3 py-2 text-sm font-medium transition-all rounded-md flex items-center gap-1 ${
                  isActiveParent(["/resources"])
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground hover:bg-primary/80"
                }`}
              >
                Resources
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[220px]">
                <DropdownMenuItem asChild>
                  <Link to="/resources/library" className="cursor-pointer">Library</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resources/laboratories" className="cursor-pointer">Laboratories</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resources/student-resources" className="cursor-pointer">Student Resources</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resources/parent-resources" className="cursor-pointer">Parent Resources</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Us */}
              <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-all rounded-md ${
                isActive("/contact")
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground hover:bg-primary/80"
                }`}
              >
              Contact Us
              </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-primary-foreground hover:bg-primary/80 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary-foreground/10">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-all rounded-md ${
                  isActive("/")
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground hover:bg-primary/80"
                }`}
              >
                Home
              </Link>
              
              <div className="px-4 py-2 text-sm font-semibold text-accent">About Us</div>
              <Link
                to="/overview"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Overview
              </Link>
              <Link
                to="/vision-mission"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Vision and Mission
              </Link>
              <Link
                to="/leadership"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Leadership
              </Link>
              <Link
                to="/facilities"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Facilities
              </Link>
              <Link
                to="/average-college-day"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Average College Day College
              </Link>
              <Link
                to="/college-details"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                College Details
              </Link>
              <Link
                to="/average-school-day"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Average School Day School
              </Link>
              <Link
                to="/school-details"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                School Details
              </Link>

              <div className="px-4 py-2 text-sm font-semibold text-accent">Programme</div>
              <Link
                to="/programme/academic"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Academic Programmes
              </Link>
              <Link
                to="/programme/co-scholastic"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Co-Scholastic
              </Link>
              <Link
                to="/programme/extra-curricular"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Extra Curricular
              </Link>

              <div className="px-4 py-2 text-sm font-semibold text-accent">Admission</div>
              <Link
                to="/admissions"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Admission Process
              </Link>
              <Link
                to="/admission/requirements"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Requirements
              </Link>
              <Link
                to="/admission/fees"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Fee Structure
              </Link>
              <Link
                to="/admission/scholarships"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Scholarships
              </Link>

              <Link
                to="/mandatory-disclosure"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-all rounded-md ${
                  isActive("/mandatory-disclosure")
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground hover:bg-primary/80"
                }`}
              >
                Mandatory Public Disclosure
              </Link>

                <Link
                to="/gallery"
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium transition-all rounded-md ${
                  isActive("/gallery")
                      ? "bg-accent text-accent-foreground"
                      : "text-primary-foreground hover:bg-primary/80"
                  }`}
                >
                Gallery
              </Link>

              <div className="px-4 py-2 text-sm font-semibold text-accent">Resources</div>
              <Link
                to="/resources/library"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Library
              </Link>
              <Link
                to="/resources/laboratories"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Laboratories
              </Link>
              <Link
                to="/resources/student-resources"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Student Resources
              </Link>
              <Link
                to="/resources/parent-resources"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-2 text-sm text-primary-foreground/80 hover:bg-primary/80 rounded-md"
              >
                Parent Resources
                </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-all rounded-md ${
                  isActive("/contact")
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground hover:bg-primary/80"
                }`}
              >
                Contact Us
                </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


