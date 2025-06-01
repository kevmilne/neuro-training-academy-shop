
const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mainframe Offensive Security Training
          </h2>
          <p className="text-xl text-gray-700">
            Empowering ethical hackers & professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mainframe Penetration Testing
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Master the art of Mainframe Offensive Security with our online, 
              instructor-led course.
            </p>
            <button className="text-red-400 font-semibold hover:text-red-500 transition-colors">
              Read more
            </button>
          </div>

          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Group training workshops
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Join our interactive workshops designed for collaborative learning experiences.
            </p>
            <button className="text-red-400 font-semibold hover:text-red-500 transition-colors">
              Read more
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-400 hover:bg-red-500 text-white font-bold px-8 py-4 transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
