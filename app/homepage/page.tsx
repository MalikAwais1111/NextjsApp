import React, { ReactNode } from 'react';
import Carosal from './@carosal/page';
import Offers from './@offers/page';
import Topproducts from './@topproducts/page';

const Homepage = () => {
  return (
    <div>
      <div>{<Carosal/>}</div>
      <div>{<Offers/>}</div>
      <div>{<Topproducts/>}</div>
      {/* // <div>{children}</div> */}
    </div>
  );
};

export default Homepage;
