
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center">
        {/* Logo Section */}
        <div className="bg-white p-4 border-r border-gray-200">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/02b66ca6-f406-4786-9007-99e373abceef.png" 
              alt="OffensiveSec.org" 
              className="h-12"
            />
          </Link>
        </div>
        
        {/* Navigation Section */}
        <div className="flex-1 bg-red-400">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8 py-4">
                <a href="/#home" className="text-white hover:text-red-200 transition-colors font-medium">Home</a>
                <a href="/#about" className="text-white hover:text-red-200 transition-colors font-medium">About</a>
                <a href="/#services" className="text-white hover:text-red-200 transition-colors font-medium">Training</a>
                <a href="/#contact" className="text-white hover:text-red-200 transition-colors font-medium">Contact</a>
                <Link to="/mission" className="text-white hover:text-red-200 transition-colors font-medium">Mission</Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white py-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              {/* Contact Icon */}
              <div className="hidden md:block">
                <a href="mailto:kev.milne@offensivesec.org" className="text-white hover:text-red-200 transition-colors">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <nav className="md:hidden pb-4 border-t border-red-500 pt-4">
                <div className="flex flex-col space-y-3">
                  <a href="/#home" className="text-white hover:text-red-200 transition-colors font-medium">Home</a>
                  <a href="/#about" className="text-white hover:text-red-200 transition-colors font-medium">About</a>
                  <a href="/#services" className="text-white hover:text-red-200 transition-colors font-medium">Training</a>
                  <a href="/#contact" className="text-white hover:text-red-200 transition-colors font-medium">Contact</a>
                  <Link to="/mission" className="text-white hover:text-red-200 transition-colors font-medium">Mission</Link>
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
