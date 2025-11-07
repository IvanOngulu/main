
import React from 'react';
import { Link } from 'react-router-dom';
import { XIcon } from '../ui/Icons';
import { categories } from '../../data/mockData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-bold text-lg text-primary">Menu</h2>
          <button onClick={onClose} aria-label="Close menu">
            <XIcon className="w-6 h-6 text-gray-600 hover:text-primary" />
          </button>
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-2"><Link to="/" onClick={onClose} className="block py-2 text-gray-700 hover:text-primary">Home</Link></li>
            <li className="mb-2"><Link to="/products" onClick={onClose} className="block py-2 text-gray-700 hover:text-primary">All Products</Link></li>
            <li className="mb-2">
              <span className="block py-2 font-semibold text-gray-800">Categories</span>
              <ul className="pl-4">
                {categories.map(cat => (
                    <li key={cat.id} className="mb-1">
                        <Link to={`/products?category=${cat.id}`} onClick={onClose} className="block py-1 text-gray-600 hover:text-primary">
                            {cat.name}
                        </Link>
                    </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
