
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Training = () => {
  const handleViewAgenda = () => {
    // This will open the PDF agenda in a new tab
    // You can replace this URL with the actual PDF file path
    window.open("/path-to-your-agenda.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="text-red-400">Training</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Advance your cybersecurity career with our specialized training programs
            </p>
          </div>

          {/* Training Boxes */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* M.O.S.T. Course Box */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <img 
                  src="/lovable-uploads/944eeb89-5aaa-433c-9169-a913460b9607.png" 
                  alt="M.O.S.T. - Mainframe Offensive Security Tester" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  M.O.S.T - Mainframe Offensive Security Tester
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Master the art of penetrating legacy mainframe systems. Learn advanced 
                  techniques for identifying and exploiting vulnerabilities in IBM z/OS, 
                  CICS, and other mainframe environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleViewAgenda}
                    className="bg-red-400 hover:bg-red-500 text-white flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    View PDF Agenda
                  </Button>
                  <div className="text-sm text-gray-600 flex items-center">
                    Duration: 5 Days | Level: Advanced
                  </div>
                </div>
              </div>
            </div>

            {/* Neurodiversity Training Box */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">ND</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-700">Coming Soon</h4>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Neurodiversity Training Workshops
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Inclusive cybersecurity training designed to leverage diverse thinking 
                  styles and cognitive approaches. These workshops will focus on creating 
                  supportive learning environments for neurodiverse professionals.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 font-medium text-center">
                    🚀 Coming Soon! Stay tuned for updates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Section */}
          <div className="text-center bg-gray-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Advance Your Career?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join our expert-led training programs and gain the skills needed to excel 
              in offensive security and cybersecurity.
            </p>
            <Link to="/book-now">
              <Button className="bg-red-400 hover:bg-red-500 text-white text-lg px-8 py-4">
                Click - Book Now
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Training;
