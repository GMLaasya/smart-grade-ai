import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Zap } from "lucide-react";
import heroBackground from "@/assets/ai-education-hero.jpg";

interface HeroSectionProps {
  onTeacherClick: () => void;
  onStudentClick: () => void;
}

export const HeroSection = ({ onTeacherClick, onStudentClick }: HeroSectionProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-background/30 to-primary/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-education-primary to-education-secondary rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-education-accent rounded-full flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Smart AI Grading System
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
            Upload answers, get instant grades and personalized feedback powered by AI.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <BookOpen className="w-5 h-5" />
              <span>Instant Grading</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span>Personalized Feedback</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Zap className="w-5 h-5" />
              <span>AI-Powered</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              onClick={onTeacherClick}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              I am a Teacher
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold border-2 border-white/80 text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10"
              onClick={onStudentClick}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              I am a Student
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};