
import { ArrowLeft, Clock, Users, Award, CheckCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CourseRedTeaming = () => {
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
            <h1 className="text-4xl font-bold text-white mb-4">Red Teaming and Cyber Scenarios</h1>
            <p className="text-xl text-gray-300 mb-8">
              Master advanced red team operations and realistic cyber scenarios. Learn to simulate 
              sophisticated attacks and test organizational defenses comprehensively.
            </p>

            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
              <p className="text-gray-300 mb-6">
                This advanced course covers full-spectrum red team operations, from initial reconnaissance 
                to objective completion. You'll learn to think like an adversary and conduct realistic 
                attack simulations that test people, processes, and technology.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Red Team Methodology",
                  "Advanced Social Engineering",
                  "Physical Security Testing",
                  "C2 Framework Usage",
                  "Evasion Techniques",
                  "Living off the Land",
                  "Scenario Development",
                  "Purple Team Integration"
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
                  <h4 className="font-semibold text-white">Day 1: Red Team Fundamentals</h4>
                  <p className="text-gray-300">Methodology, planning, and target analysis</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 2: Initial Access</h4>
                  <p className="text-gray-300">Phishing, physical access, and social engineering</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 3: Persistence and Evasion</h4>
                  <p className="text-gray-300">C2 frameworks and defense evasion techniques</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 4: Advanced Scenarios</h4>
                  <p className="text-gray-300">Complex attack chains and scenario development</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Day 5: Practical Exercise</h4>
                  <p className="text-gray-300">Full red team simulation and debrief</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-400 mb-2">£2,795</div>
                <p className="text-gray-400">Per person</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">5 Days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Max 10 participants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Expert Level</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Next: May 13-17, 2024</span>
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

export default CourseRedTeaming;
