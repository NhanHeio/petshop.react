import React from 'react';
import CommerceContent from '../components/commerce/CommerceContent';
import CommerceHeader from '../components/commerce/CommerceHeader';
import CommerceSideBar from '../components/commerce/CommerceSideBar';

const Ecommerce = () => {
  return <div className="h-full w-full bg-gray-50">
    <CommerceHeader />
    <CommerceSideBar />
    <CommerceContent />
  </div>;
};

export default Ecommerce;
