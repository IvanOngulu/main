
import React from 'react';
import Input from '../ui/Input';
import { categories } from '../../data/mockData';

interface ProductFiltersProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ activeCategory, onCategoryChange, searchTerm, onSearchChange }) => {
  return (
    <div className="bg-surface p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div>
        <h4 className="font-semibold mb-2">Categories</h4>
        <ul>
          <li className="mb-1">
            <button
              onClick={() => onCategoryChange('all')}
              className={`w-full text-left px-2 py-1 rounded-md transition-colors ${
                activeCategory === 'all' ? 'bg-green-200 text-green-800 font-semibold' : 'hover:bg-green-100'
              }`}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id} className="mb-1">
              <button
                onClick={() => onCategoryChange(cat.id)}
                className={`w-full text-left px-2 py-1 rounded-md transition-colors ${
                  activeCategory === cat.id ? 'bg-green-200 text-green-800 font-semibold' : 'hover:bg-green-100'
                }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilters;
