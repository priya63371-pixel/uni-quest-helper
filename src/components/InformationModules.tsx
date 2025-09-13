import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Utensils, 
  BookOpen, 
  FileText, 
  Users,
  Clock,
  GraduationCap
} from "lucide-react";

const modules = [
  {
    icon: Calendar,
    title: "Academic Schedules",
    description: "View class timetables, exam schedules, and academic calendar",
    features: ["Course schedules", "Exam dates", "Academic deadlines", "Semester calendar"],
    color: "bg-gradient-primary"
  },
  {
    icon: MapPin,
    title: "Facility Timings",
    description: "Check hours and availability of campus facilities",
    features: ["Library hours", "Gym schedules", "Lab availability", "Building access"],
    color: "bg-gradient-secondary"
  },
  {
    icon: Utensils,
    title: "Dining Services",
    description: "Explore dining options, menus, and meal plan information",
    features: ["Menu updates", "Meal plans", "Dietary options", "Dining hours"],
    color: "bg-gradient-primary"
  },
  {
    icon: BookOpen,
    title: "Library Resources",
    description: "Access digital resources, book catalogs, and study spaces",
    features: ["Book search", "Digital resources", "Study rooms", "Research help"],
    color: "bg-gradient-secondary"
  },
  {
    icon: FileText,
    title: "Administrative Procedures",
    description: "Get help with enrollment, transcripts, and campus services",
    features: ["Enrollment info", "Transcript requests", "Financial aid", "Student services"],
    color: "bg-gradient-primary"
  },
  {
    icon: Users,
    title: "Campus Events",
    description: "Stay updated on campus activities and student events",
    features: ["Event calendar", "Club activities", "Workshops", "Social events"],
    color: "bg-gradient-secondary"
  }
];

const InformationModules = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Campus Information Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about campus life, organized and easily accessible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription className="text-base">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="chatbot" className="w-full">
                    Explore {module.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InformationModules;