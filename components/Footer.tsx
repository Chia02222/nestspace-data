
import React from 'react';

interface ContactInfo {
    name: string;
    mobile: string;
    email: string;
    website: string;
}

interface FooterProps {
    contactInfo: ContactInfo;
}

const Footer: React.FC<FooterProps> = ({ contactInfo }) => {
  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">For More Info</h2>
            <p className="text-gray-400 text-lg">{contactInfo.name}</p>
            <div className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
                <a href={`tel:${contactInfo.mobile}`} className="text-indigo-400 hover:text-indigo-300">{contactInfo.mobile}</a>
                <a href={`mailto:${contactInfo.email}`} className="text-indigo-400 hover:text-indigo-300">{contactInfo.email}</a>
                <a href={`http://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">{contactInfo.website}</a>
            </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Nestspace Malaysia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
