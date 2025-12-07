import React from 'react';
import type { Product } from '../../types';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

interface FeaturedProductProps {
  product: Product;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  return (
    <div className="px-4">
      <div className="flex flex-col items-stretch justify-start rounded-2xl bg-surface-light dark:bg-surface-dark shadow-sm overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.01]">
        <div
          className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover relative"
          style={{ backgroundImage: `url("${product.imageUrl}")` }}
          role="img"
          aria-label={product.altText}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          {product.tag && (
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-xs font-medium tracking-wider uppercase bg-primary px-2 py-0.5 rounded w-fit mb-2">
                {product.tag}
              </p>
            </div>
          )}
        </div>
        <div className="flex w-full grow flex-col gap-2 p-5">
          <div className="flex justify-between items-start">
            <Typography variant="h1" className="text-2xl tracking-[-0.02em] normal-case">
              {product.name}
            </Typography>
            <Typography variant="h3" className="text-lg font-medium">
              {product.price.toFixed(1)}
            </Typography>
          </div>
          <Typography variant="caption" className="mb-3">
            {product.description}
          </Typography>
          <Button variant="primary" className="group-hover:bg-primary">
            <span>Add to Order</span>
            <Icon name="add" size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};
