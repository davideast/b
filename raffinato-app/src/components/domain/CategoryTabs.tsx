import React from 'react';
import { Container } from '../ui/Container';
import { Typography } from '../ui/Typography';
import { CATEGORIES } from '../../data/mockData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CategoryTabs: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide pb-0">
      <Container className="flex px-4 gap-8 min-w-max">
        {CATEGORIES.map((category) => (
          <a
            key={category.id}
            href="#"
            className={cn(
              "flex flex-col items-center justify-center pb-3 pt-2 border-b-[3px] transition-colors",
              category.isActive
                ? "border-primary text-[#181311] dark:text-white"
                : "border-transparent text-[#896b61] dark:text-[#a08c84] hover:text-primary dark:hover:text-primary"
            )}
          >
            <Typography variant="body" className="font-bold tracking-wider uppercase text-sm">
              {category.label}
            </Typography>
          </a>
        ))}
      </Container>
    </div>
  );
};
