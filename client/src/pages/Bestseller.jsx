import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import Avatar from './Avatar';

const Bestseller = () => {
  return (
    <section className='p-4 py-24 text-white'>
      <div className='container max-w-6xl mx-auto'>
        <div className='flex flex-col md:items-start justify-between items-center space-y-5'>
          <h1 className='text-2xl md:text-3xl font-medium'>
            Best Sellers
          </h1>
          <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 text-indigo-600 font-semibold'>
            <p className='text-slate-400'>Best seller of the week’s NFT</p>
            <div className='hidden md:flex items-center space-x-2'>
              <p>See more</p>
              <AiOutlineRight size={12} />
            </div>
          </div>
        </div>
        <Avatar />
      </div>
    </section>
  );
}

export default Bestseller;
