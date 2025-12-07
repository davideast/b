import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'icon' | 'nav' | 'add';
  isActive?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isActive,
  className,
  children,
  ...props
}) => {
  const baseStyles = "transition-colors cursor-pointer flex items-center justify-center";

  const variants = {
    primary: "w-full py-3 rounded-lg bg-[#181311] dark:bg-white dark:text-[#181311] text-white text-sm font-bold tracking-wide uppercase gap-2 hover:bg-primary",
    icon: "rounded-full bg-transparent text-[#181311] dark:text-white hover:bg-black/5 dark:hover:bg-white/10",
    nav: cn(
      "flex-col gap-1 p-2",
      isActive
        ? "text-primary"
        : "text-[#896b61] dark:text-[#a08c84] hover:text-primary"
    ),
    add: "size-8 rounded-full bg-background-light dark:bg-background-dark text-[#181311] dark:text-white hover:bg-primary hover:text-white"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
