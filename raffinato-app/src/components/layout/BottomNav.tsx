import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { Typography } from '../ui/Typography';
import { NAV_ITEMS } from '../../data/mockData';

export const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-black/5 dark:border-white/10 pb-safe z-40">
      <Container className="flex justify-around items-center h-16 px-2">
        {NAV_ITEMS.map((item) => (
          <Button key={item.id} variant="nav" isActive={item.isActive}>
            <Icon name={item.icon} size={24} filled={item.isActive} />
            <Typography variant="tiny">{item.label}</Typography>
          </Button>
        ))}
      </Container>
    </nav>
  );
};
