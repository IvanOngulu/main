
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/products/ProductGrid';
import Button from '../components/ui/Button';
import Skeleton from '../components/ui/Skeleton';
import { products as allProducts, categories } from '../data/mockData';
import { Product, Category } from '../types';

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
    <Link to={`/products?category=${category.id}`} className="group relative block overflow-hidden rounded-lg">
        <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">{category.name}</h3>
        </div>
    </Link>
);

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setFeaturedProducts(allProducts.slice(0, 4));
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero Section */}
      <section className="bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Quality Goods, <span className="text-primary">Sustainably Sourced.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover a curated collection of products that are good for you and the planet.
          </p>
          <Link to="/products">
            <Button variant="primary" className="text-lg px-8 py-3">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(cat => <CategoryCard key={cat.id} category={cat} />)}
         </div>
      </section>


      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-56 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <ProductGrid products={featuredProducts} />
        )}
      </section>
    </div>
  );
};

export default HomePage;
