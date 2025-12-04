import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, UserCog } from "lucide-react";

const LoginModel = ({ isOpen, setIsOpen }) => {
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[850px] p-8 rounded-2xl bg-white">
        
        <DialogHeader className="text-left pb-6">
          <DialogTitle className="text-3xl font-bold text-[#0A1E3D]">
            Select Your Portal
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <PortalCard
            icon={<UserCog className="w-16 h-16 text-[#8B6914] mb-4" />}
            title="Admin Portal"
            description="Manage student data, update analytics, and oversee college operations."
            linkTo="http://localhost:8080/login"
            external
            buttonText="Login as Admin"
            onClose={handleClose}
          />

          <PortalCard
            icon={<Users className="w-16 h-16 text-[#8B6914] mb-4" />}
            title="Parent Portal"
            description="Access your ward's progress, fee details, and college information."
            linkTo="/parent-login"
            buttonText="Login as parent"
            onClose={handleClose}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PortalCard = ({ icon, title, description, linkTo, buttonText, onClose, external = false }) => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 border-t-4 border-[hsl(var(--accent))] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2">
      {icon}

      <h3 className="text-2xl font-bold mb-3 text-center text-[#0A1E3D]">
        {title}
      </h3>

      <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
        {description}
      </p>

      <Button
        asChild
        onClick={onClose}
        className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-[#0A1E3D] font-bold py-6 rounded-xl text-base"
      >
        {external ? (
          <a href={linkTo} target="_blank" rel="noreferrer">
            {buttonText}
          </a>
        ) : (
          <Link to={linkTo}>{buttonText}</Link>
        )}
      </Button>
    </div>
  );
};

export default LoginModel;
