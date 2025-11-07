
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Shop</h3>
            <ul>
              <li className="mb-2"><Link to="/products" className="hover:text-primary">All Products</Link></li>
              <li className="mb-2"><Link to="/products?category=electronics" className="hover:text-primary">Electronics</Link></li>
              <li className="mb-2"><Link to="/products?category=apparel" className="hover:text-primary">Apparel</Link></li>
              <li className="mb-2"><Link to="/products?category=home-goods" className="hover:text-primary">Home Goods</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">About Us</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-primary">Our Story</a></li>
              <li className="mb-2"><a href="#" className="hover:text-primary">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:text-primary">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-primary">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:text-primary">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-primary">Shipping & Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Verde</h3>
            <p className="text-sm">Sustainable products for a better planet. Quality and design in harmony with nature.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-200 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Verde. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
