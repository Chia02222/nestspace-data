
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-2xl font-bold text-indigo-600">
          Nestspace
        </a>
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white pb-4">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="block py-2 px-6 text-gray-600 hover:bg-indigo-50">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
