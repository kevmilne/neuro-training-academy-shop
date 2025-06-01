
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '', consent: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in touch
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              We're here to assist you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-pink-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                  Email address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@website.com"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-pink-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2">
                  Phone number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="555-555-5555"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-pink-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-pink-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-gray-700 text-sm">
                  I allow this website to store my submission so they can respond to my inquiry. *
                </label>
              </div>

              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-4 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="lg:pl-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in touch</h3>
              <p className="text-gray-700">
                <a href="mailto:kev.milne@offensivesec.org" className="text-pink-600 hover:text-pink-700 transition-colors">
                  kev.milne@offensivesec.org
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-700">Livingston, SCT GB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
