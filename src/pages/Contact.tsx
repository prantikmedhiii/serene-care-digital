
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    details: [
      "+1 (800) 123-4567 (Main)",
      "+1 (800) 987-6543 (Emergency)"
    ]
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    details: [
      "info@mirzahospital.com",
      "appointments@mirzahospital.com"
    ]
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Address",
    details: [
      "123 Healthcare Avenue,",
      "Medical District, City, 12345"
    ]
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Hours",
    details: [
      "24/7 Emergency Services",
      "Mon-Fri: 8:00 AM - 8:00 PM",
      "Sat-Sun: 9:00 AM - 5:00 PM"
    ]
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions or need assistance? Our team is here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 text-primary">
                    {info.icon}
                  </div>
                  <h3 className="font-playfair text-lg font-medium mb-3">{info.title}</h3>
                  <div>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (123) 456-7890"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Appointment Inquiry"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please provide details about your inquiry..."
                    className="w-full resize-none h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="rounded-full px-8" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Find Us</h2>
              <p className="text-muted-foreground mb-8">
                We're conveniently located in the heart of the Medical District, with easy access to public transportation and ample parking.
              </p>
              
              <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8583933334133!2d-118.24369502422668!3d34.05349797304908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzEyLjYiTiAxMTjCsDE0JzM1LjgiVw!5e0!3m2!1sen!2sus!4v1620752644889!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Mirza Hospital Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
