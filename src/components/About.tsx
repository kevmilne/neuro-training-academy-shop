
import { Award, Users, CheckCircle, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Students Trained", value: "500+" },
    { icon: Award, label: "Industry Certifications", value: "15+" },
    { icon: CheckCircle, label: "Success Rate", value: "98%" },
    { icon: Target, label: "Years Experience", value: "20+" }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-red-400">Neuro Training Ltd</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded by industry veterans with decades of experience in offensive security, 
              we are dedicated to advancing cybersecurity knowledge through elite training programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To empower cybersecurity professionals with advanced offensive security skills, 
                enabling them to protect critical infrastructure and sensitive data against 
                sophisticated threat actors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>Industry-recognized expert instructors</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>Hands-on practical learning approach</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>Real-world scenario training</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>Continuous curriculum updates</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our unique focus on mainframe security and advanced threat intelligence 
                sets us apart in the cybersecurity training landscape. We provide 
                specialized knowledge that's rarely available elsewhere.
              </p>
              <div className="bg-gray-800 p-6 rounded-lg border border-red-500/20">
                <h4 className="text-lg font-semibold text-red-400 mb-3">Specializations</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Legacy System Security</li>
                  <li>• Mainframe Penetration Testing</li>
                  <li>• Advanced Threat Intelligence</li>
                  <li>• Corporate Security Consulting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-red-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
