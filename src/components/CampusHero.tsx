import { Button } from "@/components/ui/button";
import heroImage from "@/assets/campus-hero.jpg";

const CampusHero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern university campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Your Intelligent
          <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Campus Assistant
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
          Get instant answers about academic schedules, campus facilities, dining services, 
          and everything you need to know about campus life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-4 h-auto"
          >
            Start Chatting
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampusHero;