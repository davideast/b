import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'tiny';
  component?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const styles = {
  h1: "text-[#181311] dark:text-white text-2xl font-bold leading-tight tracking-[-0.03em] uppercase",
  h2: "text-[#181311] dark:text-white text-xl font-bold leading-tight tracking-tight",
  h3: "text-[#181311] dark:text-white text-base font-bold leading-tight",
  body: "text-[#896b61] dark:text-[#a08c84] text-xs leading-normal",
  caption: "text-[#896b61] dark:text-[#cfbcb6] text-sm leading-relaxed",
  tiny: "text-[10px] font-medium tracking-wide uppercase",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  component,
  className,
  children,
  ...props
}) => {
  const Component = component ||
    (variant === 'h1' ? 'h1' :
     variant === 'h2' ? 'h2' :
     variant === 'h3' ? 'h3' : 'p');

  return (
    <Component className={cn(styles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
