import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { TeacherForm } from "@/components/TeacherForm";
import { StudentForm } from "@/components/StudentForm";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type ViewMode = "home" | "teacher" | "student";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewMode>("home");

  const handleTeacherClick = () => setCurrentView("teacher");
  const handleStudentClick = () => setCurrentView("student");
  const handleBackClick = () => setCurrentView("home");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      {currentView !== "home" && (
        <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Button 
              variant="ghost" 
              onClick={handleBackClick}
              className="text-education-primary hover:text-education-secondary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      {currentView === "home" && (
        <>
          <HeroSection 
            onTeacherClick={handleTeacherClick}
            onStudentClick={handleStudentClick}
          />
          <AboutSection />
          <ContactSection />
          <Footer />
        </>
      )}

      {currentView === "teacher" && (
        <div className="container mx-auto px-4 py-12">
          <TeacherForm />
        </div>
      )}

      {currentView === "student" && (
        <div className="container mx-auto px-4 py-12">
          <StudentForm />
        </div>
      )}
    </div>
  );
};

export default Index;
