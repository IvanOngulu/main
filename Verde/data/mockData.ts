
import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', imageUrl: 'https://picsum.photos/seed/electronics/400/400', productCount: 3 },
  { id: 'apparel', name: 'Apparel', imageUrl: 'https://picsum.photos/seed/apparel/400/400', productCount: 3 },
  { id: 'home-goods', name: 'Home Goods', imageUrl: 'https://picsum.photos/seed/home/400/400', productCount: 3 },
  { id: 'books', name: 'Books', imageUrl: 'https://picsum.photos/seed/books/400/400', productCount: 3 },
];

export const products: Product[] = [
  // Electronics
  { id: 1, name: 'Smartwatch', price: 199.99, category: 'Electronics', description: 'A sleek and powerful smartwatch for your active lifestyle.', imageUrl: 'https://picsum.photos/seed/product1/600/600', relatedIds: [2, 3] },
  { id: 2, name: 'Wireless Headphones', price: 149.99, category: 'Electronics', description: 'High-fidelity sound with noise-cancellation.', imageUrl: 'https://picsum.photos/seed/product2/600/600', relatedIds: [1, 3] },
  { id: 3, name: 'Portable Speaker', price: 79.99, category: 'Electronics', description: 'Compact and waterproof for music on the go.', imageUrl: 'https://picsum.photos/seed/product3/600/600', relatedIds: [1, 2] },
  
  // Apparel
  { id: 4, name: 'Organic Cotton T-Shirt', price: 29.99, category: 'Apparel', description: 'Soft, breathable, and sustainably made.', imageUrl: 'https://picsum.photos/seed/product4/600/600', relatedIds: [5, 6] },
  { id: 5, name: 'All-Weather Jacket', price: 129.99, category: 'Apparel', description: 'Waterproof and wind-resistant for any adventure.', imageUrl: 'https://picsum.photos/seed/product5/600/600', relatedIds: [4, 6] },
  { id: 6, name: 'ComfortFit Jeans', price: 89.99, category: 'Apparel', description: 'Stretchy and stylish for everyday wear.', imageUrl: 'https://picsum.photos/seed/product6/600/600', relatedIds: [4, 5] },
  
  // Home Goods
  { id: 7, name: 'Aesthetic Ceramic Mug', price: 24.99, category: 'Home Goods', description: 'Handcrafted mug for your favorite beverage.', imageUrl: 'https://picsum.photos/seed/product7/600/600', relatedIds: [8, 9] },
  { id: 8, name: 'Linen Throw Blanket', price: 69.99, category: 'Home Goods', description: 'Cozy and lightweight, perfect for any season.', imageUrl: 'https://picsum.photos/seed/product8/600/600', relatedIds: [7, 9] },
  { id: 9, name: 'Scented Soy Candle', price: 34.99, category: 'Home Goods', description: 'A calming aroma to fill your space.', imageUrl: 'https://picsum.photos/seed/product9/600/600', relatedIds: [7, 8] },

  // Books
  { id: 10, name: 'The Art of React', price: 39.99, category: 'Books', description: 'Master modern web development with React.', imageUrl: 'https://picsum.photos/seed/product10/600/600', relatedIds: [11, 12] },
  { id: 11, name: 'Tailwind CSS Deep Dive', price: 44.99, category: 'Books', description: 'From utility-first principles to advanced customization.', imageUrl: 'https://picsum.photos/seed/product11/600/600', relatedIds: [10, 12] },
  { id: 12, name: 'Minimalist Design', price: 32.99, category: 'Books', description: 'Exploring the philosophy of "less is more" in design.', imageUrl: 'https://picsum.photos/seed/product12/600/600', relatedIds: [10, 11] },
];
