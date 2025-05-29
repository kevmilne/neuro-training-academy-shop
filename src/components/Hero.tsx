
import { ArrowRight, Shield, Target, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff41' fill-opacity='0.1'%3E%3Cpath d='M30 30h30v30H30V30zm15 15v-30h-30v30h30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4 text-green-400">
              <Shield className="h-12 w-12" />
              <Target className="h-10 w-10" />
              <Brain className="h-12 w-12" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elite <span className="text-green-400">Offensive Security</span> Training
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Master advanced cybersecurity techniques with industry experts. 
            Specializing in Mainframe Penetration Testing and Cyber Threat Intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Explore Courses</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
