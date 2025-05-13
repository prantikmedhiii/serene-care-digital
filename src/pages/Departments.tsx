
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

const departmentsData = [
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "❤️",
    description: "Our cardiology department offers comprehensive diagnosis and treatment of heart conditions with state-of-the-art facilities.",
    procedures: [
      "Electrocardiogram (ECG/EKG)",
      "Echocardiography",
      "Cardiac Catheterization",
      "Coronary Angioplasty",
      "Pacemaker Implantation"
    ],
    specialists: [
      { name: "Dr. Robert Chen", title: "Head of Cardiology", expertise: "Interventional Cardiology" },
      { name: "Dr. Sarah Miller", title: "Senior Cardiologist", expertise: "Electrophysiology" }
    ]
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: "🧠",
    description: "Our neurology department provides expert care for disorders of the brain, spine, and nervous system with advanced diagnostic capabilities.",
    procedures: [
      "Electroencephalogram (EEG)",
      "Electromyography (EMG)",
      "Lumbar Puncture",
      "Nerve Conduction Studies",
      "Neuropsychological Testing"
    ],
    specialists: [
      { name: "Dr. Emily Jackson", title: "Head of Neurology", expertise: "Stroke & Cerebrovascular Diseases" },
      { name: "Dr. Michael Patel", title: "Senior Neurologist", expertise: "Movement Disorders" }
    ]
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: "🦴",
    description: "Our orthopedics department specializes in the diagnosis, treatment, and rehabilitation of musculoskeletal conditions.",
    procedures: [
      "Arthroscopy",
      "Joint Replacement Surgery",
      "Fracture Repair",
      "Spinal Surgery",
      "Sports Injury Treatment"
    ],
    specialists: [
      { name: "Dr. James Wilson", title: "Head of Orthopedics", expertise: "Joint Replacement" },
      { name: "Dr. Lisa Rodriguez", title: "Senior Orthopedic Surgeon", expertise: "Sports Medicine" }
    ]
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: "👶",
    description: "Our pediatrics department provides comprehensive healthcare for infants, children, and adolescents in a child-friendly environment.",
    procedures: [
      "Well-Child Visits",
      "Vaccinations",
      "Growth & Development Monitoring",
      "Pediatric Acute Care",
      "Behavioral Health Assessment"
    ],
    specialists: [
      { name: "Dr. Amanda Thompson", title: "Head of Pediatrics", expertise: "General Pediatrics" },
      { name: "Dr. David Kim", title: "Senior Pediatrician", expertise: "Pediatric Allergies" }
    ]
  },
  {
    id: "oncology",
    name: "Oncology",
    icon: "🔬",
    description: "Our oncology department offers comprehensive cancer care with the latest treatments and personalized therapy plans.",
    procedures: [
      "Chemotherapy",
      "Radiation Therapy",
      "Surgical Oncology",
      "Immunotherapy",
      "Targeted Therapy"
    ],
    specialists: [
      { name: "Dr. Sophia Lee", title: "Head of Oncology", expertise: "Medical Oncology" },
      { name: "Dr. Thomas Brown", title: "Senior Oncologist", expertise: "Radiation Oncology" }
    ]
  },
  {
    id: "gynecology",
    name: "Gynecology",
    icon: "👩‍⚕️",
    description: "Our gynecology department offers comprehensive women's health services with a focus on comfort and dignity.",
    procedures: [
      "Pap Smears",
      "Colposcopy",
      "Ultrasounds",
      "Laparoscopic Surgery",
      "Family Planning Services"
    ],
    specialists: [
      { name: "Dr. Rebecca Martinez", title: "Head of Gynecology", expertise: "Reproductive Endocrinology" },
      { name: "Dr. John Garcia", title: "Senior Gynecologist", expertise: "Minimally Invasive Surgery" }
    ]
  }
];

const Departments = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Specialized Departments</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mirza Hospital offers comprehensive healthcare through our specialized departments, 
            each equipped with cutting-edge technology and staffed by expert medical professionals.
          </p>
        </div>
      </section>

      {/* Departments Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="cardiology" className="w-full">
            <div className="mb-8 overflow-x-auto pb-2">
              <TabsList className="gap-2">
                {departmentsData.map(dept => (
                  <TabsTrigger key={dept.id} value={dept.id} className="py-3 px-4">
                    <span className="mr-2">{dept.icon}</span> {dept.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {departmentsData.map(dept => (
              <TabsContent key={dept.id} value={dept.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-playfair font-bold mb-4 flex items-center gap-3">
                      <span className="text-4xl">{dept.icon}</span>
                      {dept.name} Department
                    </h2>
                    <p className="text-muted-foreground mb-6">{dept.description}</p>
                    
                    <h3 className="text-xl font-playfair font-medium mb-3">Procedures & Services</h3>
                    <ul className="list-disc pl-5 mb-6 space-y-1 text-muted-foreground">
                      {dept.procedures.map((procedure, idx) => (
                        <li key={idx}>{procedure}</li>
                      ))}
                    </ul>
                    
                    <Button className="rounded-full">Book an Appointment</Button>
                  </div>
                  
                  <div>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-medium mb-4">Specialist Doctors</h3>
                        <div className="space-y-4">
                          {dept.specialists.map((specialist, idx) => (
                            <div key={idx} className="pb-4 border-b last:border-0">
                              <h4 className="font-medium">{specialist.name}</h4>
                              <p className="text-sm">{specialist.title}</p>
                              <p className="text-xs text-muted-foreground">Expertise: {specialist.expertise}</p>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full mt-4 flex items-center justify-center gap-1">
                          View Full Team <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-cta-pattern bg-cover bg-center text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Need a Consultation?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Our specialists are ready to provide expert advice and care tailored to your needs.
          </p>
          <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
            <a href="/appointment">Schedule a Consultation</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Departments;
