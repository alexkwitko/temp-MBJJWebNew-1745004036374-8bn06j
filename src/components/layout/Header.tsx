import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { motion } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-900 shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-neutral-50 tracking-wider">MBJJ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
            <Link to="/cart" className="relative text-neutral-50 hover:text-neutral-300 transition-colors">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary-500 text-neutral-50 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link 
              to="/contact" 
              className="bg-secondary-500 hover:bg-secondary-600 text-neutral-50 font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Join Now
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="relative text-neutral-50 mr-4">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary-500 text-neutral-50 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-50 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-neutral-900 shadow-lg py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLinks isScrolled={isScrolled} />
            <Link 
              to="/contact" 
              className="bg-secondary-500 hover:bg-secondary-600 text-neutral-50 font-semibold py-2 px-4 rounded-md transition-colors text-center"
            >
              Join Now
            </Link>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

interface NavLinksProps {
  isScrolled: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isScrolled }) => {
  const location = useLocation();
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Instructors', path: '/instructors' },
    { name: 'Shop', path: '/shop' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link 
          key={link.path}
          to={link.path}
          className={`font-medium transition-colors ${
            location.pathname === link.path 
              ? 'text-secondary-500' 
              : `text-neutral-50 hover:text-neutral-300 ${!isScrolled ? 'md:text-neutral-50' : ''}`
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Header;