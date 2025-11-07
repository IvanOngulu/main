
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
  relatedIds: number[];
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  productCount: number;
}

export interface CartItem extends Product {
  quantity: number;
}
