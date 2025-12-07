import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { Badge } from '../ui/Badge';
import { Typography } from '../ui/Typography';
import { CategoryTabs } from '../domain/CategoryTabs';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-black/5 dark:border-white/10 transition-colors duration-300">
      <Container className="flex items-center p-4 pb-2 justify-between">
        <Button variant="icon" className="size-12 shrink-0 justify-start hover:text-primary">
          <Icon name="menu" size={28} />
        </Button>
        <Typography variant="h1" className="flex-1 text-center">
          RAFFINATO
        </Typography>
        <div className="flex w-12 items-center justify-end">
          <Button variant="icon" className="size-10 overflow-hidden relative">
            <Icon name="shopping_bag" size={24} />
            <Badge />
          </Button>
        </div>
      </Container>
      <CategoryTabs />
    </header>
  );
};
