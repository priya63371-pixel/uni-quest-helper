import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const CampusFooter = () => {
  return (
    <footer className="bg-campus-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Campus AI</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your intelligent campus assistant, making university life easier with AI-powered support and information.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Campus Map</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Dining Services</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Library</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Student Support</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">IT Services</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Health Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Career Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-white/80">help@campus.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-white/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-white/80">Campus Center, Room 101</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2024 Campus AI. Powered by intelligent technology for student success.</p>
        </div>
      </div>
    </footer>
  );
};

export default CampusFooter;