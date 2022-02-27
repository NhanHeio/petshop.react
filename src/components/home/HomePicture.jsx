import React from 'react';

const HomePicture = () => {
    const bgImg = {
        width: '100%',
        backgroundImage: `url("https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min.jpg")`,
        borderRadius: 10,
        boxShadow: true
    }
    const fontColor = {
        color: 'rgba(249,250,251,0.7)',

    }
  return <div>
  <div style={bgImg} className="h-screen bg-cover flex flex-col justify-center items-center">
      <h1 style={fontColor} className="pb-5 font-semibold text-8xl">Pet Shop</h1>
      <h2 style={fontColor} className="pt-5 text-3xl">Dịch vụ chăm sóc thú cưng hàng đầu</h2>
  </div>
  </div>;
};

export default HomePicture;
