import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed w-full bg-navy/90 backdrop-blur-sm z-50 border-b border-lightest-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue">
            Deepline Operations
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-blue'
                    : 'text-light-slate hover:text-lightest-slate'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="bg-blue text-navy px-6 py-2 rounded-md font-medium hover:bg-blue/90 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-light-slate hover:text-lightest-slate"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-lightest-navy">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-blue'
                      : 'text-light-slate hover:text-lightest-slate'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue text-navy px-6 py-2 rounded-md font-medium hover:bg-blue/90 transition-colors duration-200 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;