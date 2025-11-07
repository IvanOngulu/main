
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import Sidebar from './Sidebar';
import { ShoppingCartIcon, UserIcon, MenuIcon, ChevronDownIcon } from '../ui/Icons';
import { categories } from '../../data/mockData';

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative text-gray-600 hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
        isActive ? 'text-primary after:scale-x-100' : ''
      }`
    }
  >
    {children}
  </NavLink>
);

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-primary">
                Verde
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-8">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/products">All Products</NavItem>
              <div className="relative" onMouseEnter={() => setCategoryDropdownOpen(true)} onMouseLeave={() => setCategoryDropdownOpen(false)}>
                <button className="flex items-center text-gray-600 hover:text-primary transition-colors duration-300">
                  Categories <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>
                {isCategoryDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 animate-fade-in-down">
                    {categories.map(cat => (
                         <Link key={cat.id} to={`/products?category=${cat.id}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                            {cat.name}
                         </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-primary transition-colors duration-300">
                <UserIcon className="w-6 h-6" />
              </Link>
              <Link to="/cart" className="relative text-gray-600 hover:text-primary transition-colors duration-300">
                <ShoppingCartIcon className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                className="md:hidden text-gray-600 hover:text-primary transition-colors duration-300"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
