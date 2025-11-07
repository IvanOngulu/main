
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import Button from '../components/ui/Button';
import { Trash2Icon } from '../components/ui/Icons';
import { useToast } from '../hooks/useToast';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { showToast } = useToast();

  const handleRemove = (productId: number, productName: string) => {
    removeFromCart(productId);
    showToast(`${productName} removed from cart.`, 'error');
  };

  const handleClearCart = () => {
    clearCart();
    showToast('Cart cleared.', 'error');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-surface rounded-lg">
          <h2 className="text-2xl font-semibold">Your cart is empty.</h2>
          <p className="text-gray-500 mt-2 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products">
            <Button variant="primary">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-sm border">
                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-4">
                   <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 p-1 border border-gray-300 rounded-md text-center"
                        min="1"
                    />
                   <p className="font-semibold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                   <button onClick={() => handleRemove(item.id, item.name)} className="text-gray-500 hover:text-red-500">
                     <Trash2Icon className="w-5 h-5"/>
                   </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-surface p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className="border-t my-4"></div>
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <Button className="w-full mt-6">Proceed to Checkout</Button>
                <Button variant="outline" onClick={handleClearCart} className="w-full mt-2">Clear Cart</Button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartPage;
