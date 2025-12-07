export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  altText: string;
  isFeatured?: boolean;
  tag?: string;
  category?: string;
}

export interface Category {
  id: string;
  label: string;
  isActive: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  isActive?: boolean;
}
