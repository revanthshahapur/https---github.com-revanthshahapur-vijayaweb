import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 text-6xl font-bold text-primary-foreground/10">
          SREE VIJAYA
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Home */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Home</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/overview" className="hover:text-accent">About</Link></li>
              <li><Link to="/overview" className="hover:text-accent">Overview</Link></li>
              <li><Link to="/vision-mission" className="hover:text-accent">Vision and Mission</Link></li>
              <li><Link to="/leadership" className="hover:text-accent">Leadership</Link></li>
              <li><Link to="/facilities" className="hover:text-accent">Facilities</Link></li>
              <li><Link to="/average-school-day" className="hover:text-accent">Average School Day School</Link></li>
              <li><Link to="/school-details" className="hover:text-accent">School Details</Link></li>
            </ul>
          </div>

          {/* Programme */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Programme</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programme/academic" className="hover:text-accent">Scholastic Programme</Link></li>
              <li><Link to="/programme/co-scholastic" className="hover:text-accent">Co-Scholastic Programme</Link></li>
            </ul>
          </div>

          {/* Admission */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Admission</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/admissions" className="hover:text-accent">Admission Process</Link></li>
              <li><Link to="/admission/requirements" className="hover:text-accent">Requirements</Link></li>
              <li><Link to="/admission/fees" className="hover:text-accent">Fee Structure</Link></li>
              <li><Link to="/admission/scholarships" className="hover:text-accent">Scholarships</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/library" className="hover:text-accent">Library</Link></li>
              <li><Link to="/resources/laboratories" className="hover:text-accent">Laboratories</Link></li>
              <li><Link to="/resources/student-resources" className="hover:text-accent">Student Resources</Link></li>
              <li><Link to="/resources/parent-resources" className="hover:text-accent">Parent Resources</Link></li>
            </ul>
          </div>

          {/* Gallery & Others */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Gallery</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/gallery" className="hover:text-accent">Events</Link></li>
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-4 text-accent">Others</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/mandatory-disclosure" className="hover:text-accent">Mandatory Public Disclosure</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <span>H Kadadakatte, Marikoppa Road,<br />Honnali Taluk, Davanagere District,<br />Karnataka 577217, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+919876543210" className="hover:text-accent">+91-9876543210</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@sreevijaya.edu.in" className="hover:text-accent">info@sreevijaya.edu.in</a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4 text-accent">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="h-9 w-9 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Sree Vijaya PU College & Public School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


