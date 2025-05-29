
import { Mail, Linkedin, Award, BookOpen, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Instructors = () => {
  const instructors = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Lead Security Researcher",
      specialization: "Mainframe Security & Threat Intelligence",
      bio: "With over 15 years of experience in offensive security, Dr. Mitchell is a recognized expert in mainframe penetration testing and cyber threat intelligence. She has worked with Fortune 500 companies and government agencies to strengthen their security postures.",
      credentials: [
        "Ph.D. in Computer Science",
        "CISSP, CISM, CEH",
        "Published 20+ research papers",
        "Black Hat/DEF CON speaker"
      ],
      courses: [
        "Mainframe Offensive Security Tester",
        "Cyber Threat Intelligence",
        "Advanced Persistent Threat Analysis"
      ],
      image: "/placeholder.svg"
    },
    {
      name: "Marcus Rodriguez",
      title: "Senior Penetration Tester",
      specialization: "Red Teaming & Infrastructure Testing",
      bio: "Marcus brings 12 years of hands-on experience in penetration testing and red team operations. He has led numerous engagements for critical infrastructure organizations and specializes in complex attack simulations.",
      credentials: [
        "M.S. in Cybersecurity",
        "OSCP, OSCE, CRTP",
        "Former military cyber operations",
        "Industry conference speaker"
      ],
      courses: [
        "Red Teaming and Cyber Scenarios",
        "Infrastructure Pen Testing Fundamentals",
        "ICS/OT Security Testing"
      ],
      image: "/placeholder.svg"
    },
    {
      name: "Available Position",
      title: "Senior Security Instructor",
      specialization: "Specialized Security Domains",
      bio: "We are currently seeking an experienced security professional to join our world-class training team. The ideal candidate will have deep expertise in emerging security technologies and a passion for education.",
      credentials: [
        "Advanced degree preferred",
        "Industry certifications required",
        "5+ years teaching experience",
        "Recognized industry expertise"
      ],
      courses: [
        "Emerging Technologies",
        "Specialized Workshops",
        "Custom Training Programs"
      ],
      image: "/placeholder.svg",
      isOpen: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Your <span className="text-green-400">Instructors</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry experts with real-world experience in offensive security, 
            threat intelligence, and advanced penetration testing techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className={`bg-gray-800 rounded-xl p-6 ${instructor.isOpen ? 'border-2 border-dashed border-green-500/50' : 'border border-gray-700'}`}>
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {instructor.isOpen ? (
                    <Users className="h-16 w-16 text-green-400" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{instructor.name}</h3>
                <p className="text-green-400 font-semibold mb-1">{instructor.title}</p>
                <p className="text-gray-400 text-sm">{instructor.specialization}</p>
              </div>

              <div className="mb-6">
                <p className="text-gray-300 text-sm leading-relaxed">{instructor.bio}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Award className="h-4 w-4 mr-2 text-green-400" />
                  Credentials & Expertise
                </h4>
                <ul className="space-y-1">
                  {instructor.credentials.map((credential, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-green-400" />
                  Courses Taught
                </h4>
                <ul className="space-y-1">
                  {instructor.courses.map((course, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

              {!instructor.isOpen && (
                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </button>
                  <button className="flex-1 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </button>
                </div>
              )}

              {instructor.isOpen && (
                <div className="text-center">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors">
                    Apply for Position
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Expert Faculty</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for experienced security professionals who are passionate about 
              sharing their knowledge. If you have expertise in cybersecurity and enjoy teaching, 
              we'd love to hear from you.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors">
              Become an Instructor
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Instructors;
