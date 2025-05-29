
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 border-b border-green-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-green-400" />
            <div>
              <h1 className="text-xl font-bold text-white">Neuro Training Ltd</h1>
              <p className="text-xs text-green-400">Offensive Security Excellence</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
            <a href="#courses" className="text-gray-300 hover:text-green-400 transition-colors">Courses</a>
            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-green-500/20 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
              <a href="#courses" className="text-gray-300 hover:text-green-400 transition-colors">Courses</a>
              <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
