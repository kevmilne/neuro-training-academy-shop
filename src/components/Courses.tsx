
import CourseCard from "./CourseCard";
import { Target, Brain, Shield, Code } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Mainframe Penetration Testing",
      description: "Master the art of penetrating legacy mainframe systems. Learn advanced techniques for identifying and exploiting vulnerabilities in IBM z/OS, CICS, and other mainframe environments.",
      duration: "5 Days",
      level: "Advanced",
      price: "£2,495",
      features: [
        "z/OS Security Architecture",
        "RACF/ACF2/Top Secret Analysis",
        "CICS Application Testing",
        "JCL Manipulation Techniques",
        "Mainframe Network Protocols",
        "Hands-on Lab Environment"
      ],
      isPopular: true
    },
    {
      title: "Cyber Threat Intelligence",
      description: "Develop expertise in collecting, analyzing, and operationalizing threat intelligence. Learn to identify emerging threats and create actionable intelligence reports.",
      duration: "4 Days",
      level: "Intermediate",
      price: "£1,995",
      features: [
        "Intelligence Collection Methods",
        "OSINT Techniques",
        "Malware Analysis Fundamentals",
        "Threat Actor Profiling",
        "Intelligence Report Writing",
        "MITRE ATT&CK Framework"
      ]
    },
    {
      title: "Advanced Persistent Threat (APT) Analysis",
      description: "Deep dive into APT tactics, techniques, and procedures. Learn to identify, track, and counter advanced threat actors in enterprise environments.",
      duration: "3 Days",
      level: "Expert",
      price: "£2,195",
      features: [
        "APT Campaign Analysis",
        "Attribution Techniques",
        "Advanced Forensics",
        "Incident Response Planning",
        "Threat Hunting Methodologies",
        "Real-world Case Studies"
      ]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3 text-green-400">
              <Target className="h-8 w-8" />
              <Brain className="h-8 w-8" />
              <Shield className="h-8 w-8" />
              <Code className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Training <span className="text-green-400">Courses</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-leading cybersecurity training designed by experts, for experts. 
            Gain hands-on experience with cutting-edge techniques and tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Need custom training for your organization?</p>
          <button className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300">
            Request Corporate Training
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
