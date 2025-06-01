
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import InstructorSection from "@/components/InstructorSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Mission />
      <Services />
      <InstructorSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
