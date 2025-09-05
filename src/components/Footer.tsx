import { GraduationCap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-education-primary to-education-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold">Smart Education</div>
          </div>

          {/* Copyright */}
          <div className="text-lg">
            © 2025 Smart Education – AI Grading System. All rights reserved.
          </div>

          {/* Tagline */}
          <div className="text-white/80 text-sm max-w-md mx-auto">
            Empowering education through artificial intelligence and innovative technology
          </div>
        </div>
      </div>
    </footer>
  );
};