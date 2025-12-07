import React from 'react';
import type { Product } from '../../types';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-3 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div
        className="w-full aspect-square bg-gray-100 dark:bg-white/5 rounded-lg bg-center bg-cover"
        style={{ backgroundImage: `url("${product.imageUrl}")` }}
        role="img"
        aria-label={product.altText}
      />
      <div className="flex flex-col gap-1">
        <Typography variant="h3">{product.name}</Typography>
        <Typography variant="body">{product.description}</Typography>
      </div>
      <div className="flex items-center justify-between mt-auto pt-1">
        <span className="text-[#181311] dark:text-white font-medium text-sm">
          {product.price.toFixed(1)}
        </span>
        <Button variant="add">
          <Icon name="add" size={20} />
        </Button>
      </div>
    </div>
  );
};
