
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

const departments = [
  { 
    name: "Cardiology", 
    icon: "❤️", 
    description: "Advanced cardiac care with state-of-the-art technology for heart conditions." 
  },
  { 
    name: "Neurology", 
    icon: "🧠", 
    description: "Specialized treatment for disorders of the nervous system and brain." 
  },
  { 
    name: "Orthopedics", 
    icon: "🦴", 
    description: "Expert care for bone and joint injuries, diseases, and disorders." 
  },
  { 
    name: "Pediatrics", 
    icon: "👶", 
    description: "Compassionate healthcare for infants, children, and adolescents." 
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    quote: "The care I received at Mirza Hospital was exceptional. The staff was attentive and the facilities are world-class.",
    avatar: "/src/assets/patient1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Patient",
    quote: "I'm grateful for the expert care provided by the cardiac team. They made a difficult time much easier with their professionalism.",
    avatar: "/src/assets/patient2.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Patient",
    quote: "From admission to discharge, every aspect of my stay was handled with care and attention to detail. Truly impressive.",
    avatar: "/src/assets/patient3.jpg"
  }
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen flex items-center bg-hero-pattern bg-cover bg-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl glass p-8 md:p-12 rounded-xl animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Advanced Care.<br />Trusted Experts.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              At Mirza Hospital, we combine cutting-edge medical technology with compassionate care to provide the best healthcare experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white">
                <Link to="/departments">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="/src/assets/hospital-building.jpg" 
                  alt="Mirza Hospital Building" 
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-full p-3 text-white">
                      <span className="text-2xl font-bold">25+</span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Years of</p>
                      <p className="font-medium">Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">We Provide Exceptional Healthcare</h2>
              <p className="mb-6 text-muted-foreground">
                Mirza Hospital has been delivering world-class healthcare services since 1998. Our state-of-the-art facilities and expert medical professionals are committed to providing the highest quality of care.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <Check className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Cutting-edge Technology</h4>
                    <p className="text-sm text-muted-foreground">Our hospital is equipped with the latest medical technology for accurate diagnosis and effective treatment.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <Check className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Expert Medical Team</h4>
                    <p className="text-sm text-muted-foreground">Our doctors and medical staff are highly qualified experts in their respective fields.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <Check className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Patient-Centered Approach</h4>
                    <p className="text-sm text-muted-foreground">We prioritize our patients' comfort, privacy, and individual needs throughout their healthcare journey.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="rounded-full">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Specialized Departments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mirza Hospital offers a comprehensive range of medical specialties to address all your healthcare needs under one roof.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover-lift overflow-hidden border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">{dept.icon}</div>
                  <h3 className="text-xl font-playfair font-medium mb-2">{dept.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{dept.description}</p>
                  <Button variant="link" asChild className="mt-auto">
                    <Link to={`/departments#${dept.name.toLowerCase()}`} className="flex items-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/departments">View All Departments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">What Our Patients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our patients have to say about their experience at Mirza Hospital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-muted/20 border-none shadow-md overflow-hidden hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-gray-200 h-12 w-12 flex items-center justify-center">
                      <span className="text-lg font-medium">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-cta-pattern bg-cover bg-center text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Experience Premium Healthcare?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Schedule your appointment today and let our expert medical team provide the care you deserve.
          </p>
          <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
            <Link to="/appointment">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
