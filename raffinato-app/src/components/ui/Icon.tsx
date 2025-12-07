import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  filled?: boolean;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className, filled }) => {
  return (
    <span
      className={cn("material-symbols-outlined", className, filled && "fill-current")}
      style={{ fontSize: `${size}px` }}
    >
      {name}
    </span>
  );
};
