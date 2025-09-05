import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "support@smartexam.ai",
      href: "mailto:support@smartexam.ai"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9876543210",
      href: "tel:+919876543210"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "text-sky-500"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "text-gray-800"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-education-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our AI grading system? We're here to help you get started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-education-primary">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-education-primary to-education-secondary rounded-full flex items-center justify-center mx-auto">
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-education-primary mb-1">
                        {contact.label}
                      </h3>
                      {contact.href === "#" ? (
                        <p className="text-muted-foreground">{contact.value}</p>
                      ) : (
                        <a 
                          href={contact.href}
                          className="text-education-secondary hover:text-education-accent transition-colors duration-200"
                        >
                          {contact.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="text-center border-t pt-8">
                <h3 className="text-lg font-semibold text-education-primary mb-4">
                  Follow Us
                </h3>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 border-2 border-education-primary/20 rounded-full flex items-center justify-center hover:border-education-primary hover:bg-education-primary/10 transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className={`w-6 h-6 ${social.color}`} />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};