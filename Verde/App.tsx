
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './hooks/useToast';
import { CartProvider } from './hooks/useCart';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <HashRouter>
          <div className="flex flex-col min-h-screen bg-white font-sans">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:productId" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
