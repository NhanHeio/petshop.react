import React from 'react';
import CommerceCart from '../components/commerce/CommerceCart';
import CommerceSearch from '../components/commerce/CommerceSearch';
import CommerceSideBar from '../components/commerce/CommerceSideBar';

const Ecommerce = () => {
  return <div className="h-screen w-full bg-gray-50">
      <CommerceSideBar />
      <CommerceSearch />
      <CommerceCart />
  </div>;
};

export default Ecommerce;
