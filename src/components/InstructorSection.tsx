
const InstructorSection = () => {
  return (
    <section id="instructors" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expert instructors
          </h2>
          <p className="text-xl text-gray-700">
            Your guides in cybersecurity mastery
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 shadow-lg text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Kev Milne</h3>
            <p className="text-pink-600 font-semibold mb-4">Director and Lead Instructor</p>
            <p className="text-gray-700 leading-relaxed">
              Kev Milne, a seasoned cybersecurity expert, leads the training initiatives 
              at Neuro Training Ltd. His commitment to student success drives his passion 
              for teaching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
