import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, Award, MessageSquare } from "lucide-react";

interface StudentFormData {
  studentName: string;
  studentEmail: string;
  questionId: string;
  answer: string;
}

interface AIResponse {
  score: number;
  maxMarks: number;
  feedback: string;
}

export const StudentForm = () => {
  const [formData, setFormData] = useState<StudentFormData>({
    studentName: "",
    studentEmail: "",
    questionId: "",
    answer: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.studentName || !formData.studentEmail || !formData.questionId || !formData.answer) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setAiResponse(null);

    try {
      const response = await fetch("https://lucky0045.app.n8n.cloud/webhook-test/216b3332-5fad-483a-85cf-7fa986fcaaa5", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        
        // Assuming the response contains score, maxMarks, and feedback
        setAiResponse({
          score: result.score || 0,
          maxMarks: result.maxMarks || 10,
          feedback: result.feedback || "No feedback provided.",
        });

        toast({
          title: "Answer Submitted!",
          description: "Your answer has been graded by AI.",
        });
      } else {
        throw new Error("Failed to submit answer");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit answer. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof StudentFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      studentName: "",
      studentEmail: "",
      questionId: "",
      answer: "",
    });
    setAiResponse(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-education-secondary">Student Portal</CardTitle>
          <CardDescription>Submit your answer to get instant AI feedback and grading</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="studentName">Student Name *</Label>
                <Input
                  id="studentName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.studentName}
                  onChange={(e) => handleInputChange("studentName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studentEmail">Student Email *</Label>
                <Input
                  id="studentEmail"
                  type="email"
                  placeholder="student@example.com"
                  value={formData.studentEmail}
                  onChange={(e) => handleInputChange("studentEmail", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="questionId">Question ID *</Label>
              <Input
                id="questionId"
                type="text"
                placeholder="Enter the question ID provided by your teacher"
                value={formData.questionId}
                onChange={(e) => handleInputChange("questionId", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="answer">Your Answer *</Label>
              <Textarea
                id="answer"
                placeholder="Write your answer here..."
                value={formData.answer}
                onChange={(e) => handleInputChange("answer", e.target.value)}
                className="min-h-[150px]"
                required
              />
            </div>

            <div className="flex gap-3">
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-education-secondary to-education-accent hover:shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Getting AI Feedback...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Answer
                  </>
                )}
              </Button>
              {aiResponse && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={resetForm}
                  className="border-education-secondary text-education-secondary hover:bg-education-secondary hover:text-white"
                >
                  Submit Another
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* AI Results Display */}
      {aiResponse && (
        <Card className="shadow-lg border-l-4 border-l-education-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-education-primary">
              <Award className="w-6 h-6" />
              AI Grading Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-education-primary/10 to-education-secondary/10 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-education-primary to-education-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {aiResponse.score}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Your Score</h4>
                  <p className="text-muted-foreground">
                    {aiResponse.score} out of {aiResponse.maxMarks} marks
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-education-primary">
                  {Math.round((aiResponse.score / aiResponse.maxMarks) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">Percentage</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-education-secondary" />
                <h4 className="font-semibold text-lg">Personalized Feedback</h4>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-l-education-secondary">
                <p className="text-foreground leading-relaxed">{aiResponse.feedback}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};