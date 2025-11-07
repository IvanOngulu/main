
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import Button from '../ui/Button';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../hooks/useToast';
import { ShoppingCartIcon } from '../ui/Icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
    showToast(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-green-200">
        <div className="relative overflow-hidden h-56">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
             <Button
                variant="primary"
                className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                onClick={handleAddToCart}
            >
                <ShoppingCartIcon className="w-4 h-4 mr-2" />
                Quick Add
            </Button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-500 mb-1">{product.category}</p>
          <h3 className="text-md font-semibold text-gray-800 truncate group-hover:text-primary">{product.name}</h3>
          <p className="mt-2 text-lg font-bold text-primary transition-colors duration-300">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
