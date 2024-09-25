import React from 'react';

const OverlapBanner = () => {
  return (
    <div className='relative bg-blue-500 p-8'>
      <div className='text-center text-white'>
        <h1 className='text-4xl font-bold'>Welcome to Real Estate</h1>
        <p className='mt-2 text-lg'>Your dream home awaits</p>
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold text-gray-800'>Special Offer</h2>
        <p className='mt-2 text-gray-600'>
          Get a 10% discount on your first purchase!
        </p>
      </div>
    </div>
  );
};

export default OverlapBanner;
