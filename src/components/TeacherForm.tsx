import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload, CheckCircle } from "lucide-react";

interface TeacherFormData {
  teacherName: string;
  teacherEmail: string;
  questionId: string;
  question: string;
  modelAnswer: string;
  maxMarks: number;
}

export const TeacherForm = () => {
  const [formData, setFormData] = useState<TeacherFormData>({
    teacherName: "",
    teacherEmail: "",
    questionId: "",
    question: "",
    modelAnswer: "",
    maxMarks: 10,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.teacherName || !formData.teacherEmail || !formData.questionId || !formData.question || !formData.modelAnswer) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://laasya586.app.n8n.cloud/webhook-test/3bacfa1c-0bd3-459b-b69f-f23e4d246a90", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Success!",
          description: "Question uploaded successfully!",
        });
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            teacherName: "",
            teacherEmail: "",
            questionId: "",
            question: "",
            modelAnswer: "",
            maxMarks: 10,
          });
          setIsSuccess(false);
        }, 3000);
      } else {
        throw new Error("Failed to upload question");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload question. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof TeacherFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-success mb-2">Question uploaded successfully!</h3>
            <p className="text-muted-foreground">Your question has been added to the system and is ready for students to answer.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-education-primary">Teacher Portal</CardTitle>
        <CardDescription>Upload questions with model answers for AI grading</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="teacherName">Teacher Name *</Label>
              <Input
                id="teacherName"
                type="text"
                placeholder="Enter your full name"
                value={formData.teacherName}
                onChange={(e) => handleInputChange("teacherName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="teacherEmail">Teacher Email *</Label>
              <Input
                id="teacherEmail"
                type="email"
                placeholder="teacher@example.com"
                value={formData.teacherEmail}
                onChange={(e) => handleInputChange("teacherEmail", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="questionId">Question ID *</Label>
            <Input
              id="questionId"
              type="text"
              placeholder="Enter unique question ID (e.g., Q001, MATH-01)"
              value={formData.questionId}
              onChange={(e) => handleInputChange("questionId", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="question">Question *</Label>
            <Textarea
              id="question"
              placeholder="Enter the question you want students to answer..."
              value={formData.question}
              onChange={(e) => handleInputChange("question", e.target.value)}
              className="min-h-[100px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modelAnswer">Model Answer *</Label>
            <Textarea
              id="modelAnswer"
              placeholder="Provide the ideal/model answer that will be used for comparison..."
              value={formData.modelAnswer}
              onChange={(e) => handleInputChange("modelAnswer", e.target.value)}
              className="min-h-[120px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxMarks">Maximum Marks</Label>
            <Input
              id="maxMarks"
              type="number"
              min="1"
              max="100"
              value={formData.maxMarks}
              onChange={(e) => handleInputChange("maxMarks", parseInt(e.target.value) || 10)}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-education-primary to-education-secondary hover:shadow-lg transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Uploading Question...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Upload Question
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};