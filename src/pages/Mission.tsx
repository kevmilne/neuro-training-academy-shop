
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

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

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet the Instructors
              </h2>
              <p className="text-xl text-gray-700">
                Expert guidance from industry professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Kev Milne */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/fc57f171-f493-40e6-a4e1-d91a9f891bce.png" 
                      alt="Kev Milne" 
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-red-400"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Kev Milne</h3>
                  <p className="text-red-400 font-semibold mb-4">Director and Lead Instructor</p>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Bio</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Kev is the Director and Lead Instructor at Neuro Training Ltd, delivering specialised cyber security courses.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      With a career spanning over 20 years in the financial sector and a further decade in consultancy, Kev has held roles across both blue and red teams, providing a comprehensive perspective on cyber security operations. Over the past 30 years, he has developed numerous cyber security training programmes.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Kev has authored the only publicly currently available penetration testing course for the IBM z/Series mainframe, MOST Mainframe Offensive Security Tester. He is also writing a book on mainframe hacking for No Starch Press and has presented at multiple conferences, as well as featuring in cyber security podcasts and publications.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Second Instructor */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/1ebb195e-9fa1-4b71-8dba-92abb1639399.png" 
                      alt="Instructor" 
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-red-400"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Instructor Name</h3>
                  <p className="text-red-400 font-semibold mb-4">Position Title</p>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Bio</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Bio content will be added here for the second instructor.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Mission;
