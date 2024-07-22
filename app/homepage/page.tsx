import React, { ReactNode } from 'react';

interface HomepageProps {
  carosal: ReactNode;
  topproducts: ReactNode;
  offers: ReactNode;
  children: ReactNode;
}

const Homepage: React.FC<HomepageProps> = ({ carosal, topproducts, offers, children }) => {
  return (
    <div>
      <div>{carosal}</div>
      <div>{offers}</div>
      <div>{topproducts}</div>
      <div>{children}</div>
    </div>
  );
};

export default Homepage;
