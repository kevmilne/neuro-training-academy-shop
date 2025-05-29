
import { ArrowLeft, Clock, Users, Award, CheckCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CourseCyberThreatIntelligence = () => {
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
            <h1 className="text-4xl font-bold text-white mb-4">Cyber Threat Intelligence</h1>
            <p className="text-xl text-gray-300 mb-8">
              Develop expertise in collecting, analyzing, and operationalizing threat intelligence. 
              Learn to identify emerging threats and create actionable intelligence reports.
            </p>

            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
              <p className="text-gray-300 mb-6">
                This comprehensive course equips cybersecurity professionals with the skills to gather, 
                analyze, and act on threat intelligence. You'll learn industry-standard methodologies 
                for threat hunting, intelligence collection, and report writing.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Intelligence Collection Methods",
                  "OSINT Techniques",
                  "Malware Analysis Fundamentals",
                  "Threat Actor Profiling",
                  "Intelligence Report Writing",
                  "MITRE ATT&CK Framework",
                  "Threat Hunting Methodologies",
                  "Attribution Techniques"
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
                  <h4 className="font-semibold text-white">Day 1: Introduction to Threat Intelligence</h4>
                  <p className="text-gray-300">Fundamentals, frameworks, and intelligence lifecycle</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 2: Collection and OSINT</h4>
                  <p className="text-gray-300">Open source intelligence gathering and techniques</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 3: Analysis and Attribution</h4>
                  <p className="text-gray-300">Malware analysis and threat actor profiling</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 4: Reporting and Operationalization</h4>
                  <p className="text-gray-300">Creating actionable intelligence reports</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-400 mb-2">£1,995</div>
                <p className="text-gray-400">Per person</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">4 Days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Max 12 participants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Intermediate Level</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Next: March 15-18, 2024</span>
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

export default CourseCyberThreatIntelligence;
