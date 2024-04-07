
'use client';

import NavigationMenuComponent from '../../components/ui/navbar/Navigation-menu';
import React from 'react';
import ProductForm from '../../components/ui/newProductForm/ProductForm';
const HomePage = () => {
  return (
    <div>
      <NavigationMenuComponent />
      <div>Home Page</div>
     <div>	
     <ProductForm />
     </div>
    </div>
  );
};

export default HomePage;
