import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll contact you soon.");
    setFormData({
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      grade: "",
      message: "",
    });
  };

  const steps = [
    {
      icon: FileText,
      title: "Fill Application Form",
      description: "Complete the online application form with student details",
    },
    {
      icon: Calendar,
      title: "Schedule Visit",
      description: "Book a campus tour and meet our faculty",
    },
    {
      icon: CheckCircle2,
      title: "Complete Enrollment",
      description: "Submit required documents and complete admission process",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Join our community of learners and begin your journey to excellence
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to begin your child's educational journey with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-lg transition-all border-2 hover:border-accent"
                >
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">Step {index + 1}</div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Application Form
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="studentName">Student Name *</Label>
                  <Input
                    id="studentName"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="Enter student's full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                  <Input
                    id="parentName"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Enter parent/guardian name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Grade Applying For *</Label>
                  <Select 
                    value={formData.grade} 
                    onValueChange={(value) => setFormData({ ...formData, grade: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kindergarten">Kindergarten</SelectItem>
                      <SelectItem value="grade1">Grade 1</SelectItem>
                      <SelectItem value="grade2">Grade 2</SelectItem>
                      <SelectItem value="grade3">Grade 3</SelectItem>
                      <SelectItem value="grade4">Grade 4</SelectItem>
                      <SelectItem value="grade5">Grade 5</SelectItem>
                      <SelectItem value="grade6">Grade 6</SelectItem>
                      <SelectItem value="grade7">Grade 7</SelectItem>
                      <SelectItem value="grade8">Grade 8</SelectItem>
                      <SelectItem value="grade9">Grade 9</SelectItem>
                      <SelectItem value="grade10">Grade 10</SelectItem>
                      <SelectItem value="pu1">PU 1st Year</SelectItem>
                      <SelectItem value="pu2">PU 2nd Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any additional information you'd like to share..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  Submit Application
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;


