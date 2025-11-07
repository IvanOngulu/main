
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilters from '../components/products/ProductFilters';
import Skeleton from '../components/ui/Skeleton';
import { products as allProducts } from '../data/mockData';
import { Product } from '../types';

const PRODUCTS_PER_PAGE = 8;

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get('category') || 'all';
  const searchTerm = searchParams.get('search') || '';
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setProducts(allProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => activeCategory === 'all' || p.category.toLowerCase().replace(' ', '-') === activeCategory)
      .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [products, activeCategory, searchTerm]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);
  
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handleCategoryChange = (categoryId: string) => {
    setSearchParams(params => {
      params.set('category', categoryId);
      params.delete('page');
      return params;
    });
  };

  const handleSearchChange = (term: string) => {
     setSearchParams(params => {
      if (term) {
        params.set('search', term);
      } else {
        params.delete('search');
      }
      params.delete('page');
      return params;
    });
  };
  
  const handlePageChange = (page: number) => {
    setSearchParams(params => {
        params.set('page', page.toString());
        return params;
    })
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-gray-600 mt-2">Find the perfect item from our curated collection.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <ProductFilters 
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </aside>

        <main className="lg:col-span-3">
          {isLoading ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-2">
                    <Skeleton className="h-56 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-6 w-1/2" />
                </div>
                ))}
            </div>
          ) : (
            <>
              {paginatedProducts.length > 0 ? (
                <ProductGrid products={paginatedProducts} />
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-semibold">No products found</h2>
                  <p className="text-gray-500 mt-2">Try adjusting your filters.</p>
                </div>
              )}
              {totalPages > 1 && (
                 <div className="mt-8 flex justify-center space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button key={page} onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 rounded-full transition-colors ${
                                currentPage === page 
                                ? 'bg-primary text-white' 
                                : 'bg-white text-gray-700 border hover:bg-green-50'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                 </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;
