
import CourseCard from "./CourseCard";
import { Target, Brain, Shield, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      title: "Mainframe Offensive Security Tester",
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
      isPopular: true,
      link: "/courses/mainframe-offensive-security"
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
      ],
      link: "/courses/cyber-threat-intelligence"
    },
    {
      title: "Infrastructure Pen Testing Fundamentals",
      description: "Build a solid foundation in infrastructure penetration testing. Learn essential techniques for testing networks, systems, and applications in enterprise environments.",
      duration: "4 Days",
      level: "Beginner",
      price: "£1,795",
      features: [
        "Network Reconnaissance",
        "Vulnerability Scanning",
        "Service Enumeration",
        "Exploitation Techniques",
        "Post-Exploitation",
        "Professional Reporting"
      ],
      link: "/courses/infrastructure-pen-testing"
    },
    {
      title: "Red Teaming and Cyber Scenarios",
      description: "Master advanced red team operations and realistic cyber scenarios. Learn to simulate sophisticated attacks and test organizational defenses comprehensively.",
      duration: "5 Days",
      level: "Expert",
      price: "£2,795",
      features: [
        "Red Team Methodology",
        "Advanced Social Engineering",
        "Physical Security Testing",
        "C2 Framework Usage",
        "Evasion Techniques",
        "Purple Team Integration"
      ],
      link: "/courses/red-teaming"
    },
    {
      title: "ICS/OT Security Testing",
      description: "Specialize in Industrial Control Systems and Operational Technology security. Learn to assess critical infrastructure and SCADA systems safely and effectively.",
      duration: "4 Days",
      level: "Advanced",
      price: "£2,295",
      features: [
        "ICS/SCADA Architecture",
        "Industrial Protocol Analysis",
        "HMI Security Testing",
        "PLC Programming Security",
        "Safety System Assessment",
        "Compliance Frameworks"
      ],
      link: "/courses/ics-testing"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3 text-red-400">
              <Target className="h-8 w-8" />
              <Brain className="h-8 w-8" />
              <Shield className="h-8 w-8" />
              <Code className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Training <span className="text-red-400">Courses</span>
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
          <button className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
            Request Corporate Training
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
