import React from 'react';
import { FaPhone } from 'react-icons/fa';

const CallUs = () => {
  return (
    <div className='fixed bottom-10 right-10 bg-secondary rounded-full text-light p-4'>
      <button
        className='flex items-center gap-2'
        onClick={() => {
          window.open('tel:+91-1234567890');
        }}>
        Call Us
        <FaPhone />
      </button>
    </div>
  );
};

export default CallUs;
