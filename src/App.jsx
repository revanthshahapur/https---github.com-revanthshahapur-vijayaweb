import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBanner from "@/components/layout/TopBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import Overview from "@/pages/about/Overview";
import VisionMission from "@/pages/about/VisionMission";
import Leadership from "@/pages/about/Leadership";
import Facilities from "@/pages/about/Facilities";
import AverageCollegeDay from "@/pages/about/AverageCollegeDay";
import CollegeDetails from "@/pages/about/CollegeDetails";
import AverageSchoolDay from "@/pages/about/AverageSchoolDay";
import SchoolDetails from "@/pages/about/SchoolDetails";
import Gallery from "@/pages/about/Gallery";
import ProgrammeAcademic from "@/pages/programmes/ProgrammeAcademic";
import ProgrammeCoScholastic from "@/pages/programmes/ProgrammeCoScholastic";
import ProgrammeExtraCurricular from "@/pages/programmes/ProgrammeExtraCurricular";
import Admissions from "@/pages/admissions/Admissions";
import AdmissionRequirements from "@/pages/admissions/AdmissionRequirements";
import AdmissionFees from "@/pages/admissions/AdmissionFees";
import AdmissionScholarships from "@/pages/admissions/AdmissionScholarships";
import MandatoryDisclosure from "@/pages/mandatory/MandatoryDisclosure";
import ResourcesLibrary from "@/pages/resources/ResourcesLibrary";
import ResourcesLaboratories from "@/pages/resources/ResourcesLaboratories";
import ResourcesStudent from "@/pages/resources/ResourcesStudent";
import ResourcesParent from "@/pages/resources/ResourcesParent";
import Blog from "@/pages/blog/Blog";
import Contact from "@/pages/contact/Contact";
import NotFound from "@/pages/not-found/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <TopBanner />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* About Us Routes */}
              <Route path="/about" element={<About />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/vision-mission" element={<VisionMission />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/average-college-day" element={<AverageCollegeDay />} />
              <Route path="/college-details" element={<CollegeDetails />} />
              <Route path="/average-school-day" element={<AverageSchoolDay />} />
              <Route path="/school-details" element={<SchoolDetails />} />
              
              {/* Programme Routes */}
              <Route path="/programme/academic" element={<ProgrammeAcademic />} />
              <Route path="/programme/co-scholastic" element={<ProgrammeCoScholastic />} />
              <Route path="/programme/extra-curricular" element={<ProgrammeExtraCurricular />} />
              
              {/* Admission Routes */}
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/admission/requirements" element={<AdmissionRequirements />} />
              <Route path="/admission/fees" element={<AdmissionFees />} />
              <Route path="/admission/scholarships" element={<AdmissionScholarships />} />
              
              {/* Other Routes */}
              <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
              <Route path="/gallery" element={<Gallery />} />
              
              {/* Resources Routes */}
              <Route path="/resources/library" element={<ResourcesLibrary />} />
              <Route path="/resources/laboratories" element={<ResourcesLaboratories />} />
              <Route path="/resources/student-resources" element={<ResourcesStudent />} />
              <Route path="/resources/parent-resources" element={<ResourcesParent />} />
              
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

