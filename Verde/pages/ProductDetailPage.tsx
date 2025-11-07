
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products as allProducts } from '../data/mockData';
import { Product } from '../types';
import Button from '../components/ui/Button';
import ProductGrid from '../components/products/ProductGrid';
import Skeleton from '../components/ui/Skeleton';
import { useCart } from '../hooks/useCart';
import { useToast } from '../hooks/useToast';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0,0);
    // Simulate API call
    setTimeout(() => {
      const foundProduct = allProducts.find(p => p.id === parseInt(productId || '0'));
      setProduct(foundProduct || null);
      if(foundProduct){
          const related = allProducts.filter(p => foundProduct.relatedIds.includes(p.id));
          setRelatedProducts(related);
      }
      setIsLoading(false);
    }, 1000);
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      showToast(`${quantity} x ${product.name} added to cart!`);
    }
  };

  if (isLoading) {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div><Skeleton className="w-full h-96 rounded-lg"/></div>
                <div className="space-y-4">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-10 w-3/4" />
                    <Skeleton className="h-8 w-1/3" />
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-12 w-1/2" />
                </div>
            </div>
        </div>
    );
  }

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:text-primary">Home</Link> / 
        <Link to="/products" className="hover:text-primary"> Products</Link> / 
        <span className="text-gray-700"> {product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium text-primary">{product.category}</p>
          <h1 className="text-4xl font-bold my-2">{product.name}</h1>
          <p className="text-3xl font-semibold text-gray-800 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
          
          <div className="flex items-center space-x-4 mb-6">
            <label htmlFor="quantity" className="font-semibold">Quantity:</label>
            <input 
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-20 p-2 border border-gray-300 rounded-md text-center focus:ring-2 focus:ring-green-200 focus:border-green-500"
                min="1"
            />
          </div>

          <Button onClick={handleAddToCart} className="w-full md:w-auto">
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-8">You Might Also Like</h2>
        <ProductGrid products={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
