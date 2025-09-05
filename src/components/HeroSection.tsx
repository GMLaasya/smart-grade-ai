import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Zap } from "lucide-react";

interface HeroSectionProps {
  onTeacherClick: () => void;
  onStudentClick: () => void;
}

export const HeroSection = ({ onTeacherClick, onStudentClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-education-primary/5 via-education-secondary/5 to-education-accent/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-education-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-education-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
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
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-education-primary via-education-secondary to-education-accent bg-clip-text text-transparent mb-6 leading-tight">
            Smart AI Grading System
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Upload answers, get instant grades and personalized feedback powered by AI.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 text-education-primary">
              <BookOpen className="w-5 h-5" />
              <span>Instant Grading</span>
            </div>
            <div className="flex items-center gap-2 text-education-secondary">
              <Users className="w-5 h-5" />
              <span>Personalized Feedback</span>
            </div>
            <div className="flex items-center gap-2 text-education-accent">
              <Zap className="w-5 h-5" />
              <span>AI-Powered</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold bg-gradient-to-r from-education-primary to-education-secondary hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={onTeacherClick}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              I am a Teacher
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold border-2 border-education-primary text-education-primary hover:bg-education-primary hover:text-white transition-all duration-300 transform hover:scale-105"
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