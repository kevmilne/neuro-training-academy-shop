
const Hero = () => {
  return (
    <section id="home" className="bg-white py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-pink-600 font-bold text-lg border-l-4 border-pink-600 pl-4">
                INVEST IN YOUR OFFENSIVE SECURITY CAREER
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expert in Offensive Mainframe Security Training
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide the only publicly available Penetration Testing course focused 
              exclusively on Mainframes. If you want to elevate your value as an Offensive 
              Security expert, or bring cutting-edge mainframe skills to your security team, 
              we are here to help. Our comprehensive training provides the expertise and 
              practical techniques required to assess and test these critical systems — 
              offered at a highly competitive price. <strong>M.O.S.T - Mainframe Offensive Security Tester.</strong>
            </p>
            
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-4 transition-colors">
              View services
            </button>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/5af4a4cf-a433-40b1-a7b2-5546ffbdc8de.png" 
              alt="Cybersecurity workspace" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
