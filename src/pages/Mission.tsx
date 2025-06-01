
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Mission = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-red-400 font-bold text-lg border-l-4 border-red-400 pl-4">
                OUR MISSION
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Our Mission
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Offensivesec.org, part of Neuro Training Ltd, equips individuals and organizations 
              with the skills to navigate the digital world securely. Through expert-led 
              cybersecurity training, we empower people to protect themselves and their businesses 
              while fostering an inclusive learning environment that welcomes diverse perspectives.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Mission;
