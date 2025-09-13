import CampusNavigation from "@/components/CampusNavigation";
import CampusHero from "@/components/CampusHero";
import ChatInterface from "@/components/ChatInterface";
import InformationModules from "@/components/InformationModules";
import CampusFooter from "@/components/CampusFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CampusNavigation />
      <main>
        <CampusHero />
        <div id="chat">
          <ChatInterface />
        </div>
        <div id="services">
          <InformationModules />
        </div>
      </main>
      <CampusFooter />
    </div>
  );
};

export default Index;
