
const Hero = () => {
  return (
    <section 
      id="home" 
      className="bg-white py-20 relative"
      style={{
        backgroundImage: 'url(/lovable-uploads/18600289-3176-4a66-bd74-a7d48c46894b.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay to make background faint */}
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-red-400 font-bold text-lg border-l-4 border-red-400 pl-4">
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
            
            <button className="bg-red-400 hover:bg-red-500 text-white font-bold px-8 py-4 transition-colors">
              View services
            </button>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/944eeb89-5aaa-433c-9169-a913460b9607.png" 
              alt="Mainframe Security Training" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
