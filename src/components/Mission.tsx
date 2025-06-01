
const Mission = () => {
  return (
    <section id="mission" className="bg-white py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-pink-600 font-bold text-lg border-l-4 border-pink-600 pl-4">
                OUR MISSION
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your partner in offensive security training
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Neuro Training Ltd, we specialize in providing top-tier cybersecurity 
              training focused on Mainframe Offensive Security (IBM z/Series). Led by 
              industry expert Kev Milne, our comprehensive MOST (Mainframe Offensive 
              Security Tester) program equips ethical hackers and security professionals 
              with the critical skills needed to navigate today's complex digital landscape. 
              Our mission is to empower individuals and organizations to stay secure in an 
              inclusive digital world, ensuring they are well-prepared to tackle emerging 
              security challenges.
            </p>
            
            <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold px-8 py-4 transition-all">
              Get in touch
            </button>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/b32da72b-d708-4f46-a49d-5457ad9acabf.png" 
              alt="Cybersecurity workspace" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
