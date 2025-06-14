import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Training = () => {
  const handleViewAgenda = () => {
    // Opens the PDF directly from GitHub
    window.open("https://github.com/kevmilne/MOST-agenda/raw/main/pdf-agenda.pdf", "_blank");
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
              Advance your career with our specialized training programs
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
                  This unique two-day mainframe hacking course provides practical techniques for conducting effective mainframe penetration tests. Delivered over weekends only, the course takes place in a secure, remote-access lab environment where the instructor actively teaches and shadows students throughout. The course is suitable for mainframers, penetration testers, and those pivoting into cyber security roles. As the only publicly available course of its kind—designed and priced to be accessible to both corporate clients and individual learners—it offers significant value and will give you or your team a distinct competitive edge. The course covers the fundamentals of mainframes and penetration testing, with a strong emphasis on hands-on learning to ensure students can fully develop their skills. It also includes a Capture The Flag (CTF) challenge and provides a certificate of completion. Early bird and student discounts are always available, and all participants are entered into a prize draw where one student will win a full course refund. See the full agenda for the weekend's events.
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
                    Duration: 2 Days | Level: Intermediate - Some Linux Skills required but will be provided.
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
                  Inclusive neurodiversity training designed to leverage diverse thinking 
                  styles and cognitive approaches. These workshops will focus on creating 
                  supportive learning environments for professionals and cover a variety of topics.
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
