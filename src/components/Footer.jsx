import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/pets" className="hover:text-gray-300">Pets</Link>
          <Link to="/shelters" className="hover:text-gray-300">Shelters</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Pet Adoption Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
