import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Users, CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Grading",
      description: "Advanced AI algorithms provide accurate and consistent grading for all types of answers."
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get immediate feedback and scores, saving valuable time for both teachers and students."
    },
    {
      icon: Users,
      title: "Personalized Feedback",
      description: "Detailed, constructive feedback helps students understand and improve their performance."
    },
    {
      icon: CheckCircle,
      title: "Consistent Evaluation",
      description: "Eliminates human bias and ensures fair, standardized grading across all submissions."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-education-primary mb-4">
            About Smart Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our AI-powered grading system helps teachers save time and students improve faster 
            by giving instant scores and personalized feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-6 pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-education-primary to-education-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-education-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-education-primary">95%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-education-secondary">10x</div>
            <div className="text-muted-foreground">Faster Grading</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-education-accent">24/7</div>
            <div className="text-muted-foreground">Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};