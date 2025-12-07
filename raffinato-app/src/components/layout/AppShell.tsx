import React from 'react';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen relative flex flex-col font-display overflow-x-hidden selection:bg-primary selection:text-white">
      {children}
    </div>
  );
};
