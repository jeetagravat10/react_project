import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { Star, Users, Trophy, Zap, Mail, Phone, MapPin } from 'lucide-react';

// Page Components
const HomePage = () => (
  <div>
    <Hero />
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Content</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          This is the home page content. You can add more sections, components, and features here.
        </p>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="pt-20 pb-20 min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are passionate developers creating amazing web experiences with React and modern technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To build cutting-edge web applications that provide exceptional user experiences and drive business growth.
          </p>
          <p className="text-gray-600">
            We believe in the power of modern web technologies to transform how people interact with digital products.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3">
            <li className="flex items-center"><Star className="w-5 h-5 mr-3" />Modern Technologies</li>
            <li className="flex items-center"><Users className="w-5 h-5 mr-3" />Expert Team</li>
            <li className="flex items-center"><Trophy className="w-5 h-5 mr-3" />Proven Results</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with React and modern technologies.',
      icon: Zap
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that engage your users.',
      icon: Star
    },
    {
      title: 'Consulting',
      description: 'Expert guidance on technology choices and project planning.',
      icon: Users
    }
  ];

  return (
    <div className="pt-20 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive web development services to help your business succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => (
  <div className="pt-20 pb-20 min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with us. We'd love to hear from you and discuss your project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">info@reactapp.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+91-9897452356</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">123 Tech Street, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;