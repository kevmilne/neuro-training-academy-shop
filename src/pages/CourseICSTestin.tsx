
import { ArrowLeft, Clock, Users, Award, CheckCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CourseICSTesting = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/#courses" className="inline-flex items-center text-red-400 hover:text-red-300 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-white mb-4">ICS/OT Security Testing</h1>
            <p className="text-xl text-gray-300 mb-8">
              Specialize in Industrial Control Systems and Operational Technology security. Learn to assess 
              critical infrastructure and SCADA systems safely and effectively.
            </p>

            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
              <p className="text-gray-300 mb-6">
                This specialized course focuses on the unique challenges of securing industrial control systems. 
                Learn safe testing methodologies for critical infrastructure, SCADA systems, and operational 
                technology environments.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "ICS/SCADA Architecture",
                  "Industrial Protocol Analysis",
                  "HMI Security Testing",
                  "PLC Programming Security",
                  "Network Segmentation",
                  "Safety System Assessment",
                  "Incident Response for OT",
                  "Compliance Frameworks"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-red-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Course Schedule</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-white">Day 1: ICS/OT Fundamentals</h4>
                  <p className="text-gray-300">Architecture, protocols, and safety considerations</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-white">Day 2: Network Assessment</h4>
                  <p className="text-gray-300">Safe scanning and protocol analysis techniques</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-white">Day 3: Application Testing</h4>
                  <p className="text-gray-300">HMI testing and PLC security assessment</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-white">Day 4: Practical Lab</h4>
                  <p className="text-gray-300">Hands-on testing in simulated ICS environment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-red-400 mb-2">£2,295</div>
                <p className="text-gray-400">Per person</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-red-400" />
                  <span className="text-gray-300">4 Days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-red-400" />
                  <span className="text-gray-300">Max 10 participants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-red-400" />
                  <span className="text-gray-300">Advanced Level</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-red-400" />
                  <span className="text-gray-300">Next: June 10-13, 2024</span>
                </div>
              </div>

              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors mb-4">
                Enroll Now
              </button>
              
              <button className="w-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold py-3 rounded-lg transition-colors">
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

export default CourseICSTesting;
