
import { ArrowLeft, Clock, Users, Award, CheckCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CourseMainframeOffensiveSecurity = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/#courses" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="inline-block bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Most Popular
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Mainframe Offensive Security Tester</h1>
            <p className="text-xl text-gray-300 mb-8">
              Master the art of penetrating legacy mainframe systems. Learn advanced techniques for 
              identifying and exploiting vulnerabilities in IBM z/OS, CICS, and other mainframe environments.
            </p>

            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
              <p className="text-gray-300 mb-6">
                This elite course provides hands-on training in mainframe penetration testing. 
                You'll gain deep understanding of mainframe architectures, security mechanisms, 
                and advanced exploitation techniques used by top security professionals.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "z/OS Security Architecture",
                  "RACF/ACF2/Top Secret Analysis",
                  "CICS Application Testing",
                  "JCL Manipulation Techniques",
                  "Mainframe Network Protocols",
                  "TSO/ISPF Exploitation",
                  "Database Security Testing",
                  "Privilege Escalation Methods"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Course Schedule</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 1: Mainframe Fundamentals</h4>
                  <p className="text-gray-300">z/OS architecture, security subsystems, and basic navigation</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 2: Security Analysis</h4>
                  <p className="text-gray-300">RACF/ACF2 analysis and vulnerability identification</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 3: Application Testing</h4>
                  <p className="text-gray-300">CICS testing and JCL manipulation techniques</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 4: Advanced Exploitation</h4>
                  <p className="text-gray-300">Privilege escalation and advanced attack vectors</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 5: Hands-on Lab</h4>
                  <p className="text-gray-300">Comprehensive practical assessment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-8 border-2 border-green-500">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-400 mb-2">£2,495</div>
                <p className="text-gray-400">Per person</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">5 Days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Max 8 participants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Advanced Level</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Next: February 26 - March 1, 2024</span>
                </div>
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition-colors mb-4">
                Enroll Now
              </button>
              
              <button className="w-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold py-3 rounded-lg transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseMainframeOffensiveSecurity;
