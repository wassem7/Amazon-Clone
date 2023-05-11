import React from 'react';
import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
const Header = () => {
  return (
    <header>
      {/* Top nav */}
      <div className='bg-amazon_blue p-1 flex items-center py-2 flex-grow'>
        {/* logo */}
        <div className='flex items-center mt-2 flex-grow sm:flex-grow-0'>
          <Image
            width={150}
            height={40}
            src='https://links.papareact.com/f90'
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>

        {/* Search bar */}
        <div className='bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center rounded-md flex-grow hover:cursor-pointer h-10'>
          <input
            type='text'
            className='h-full w-6 rounded-l-md flex flex-grow flex-shrink focus:outline-none px-4'
          />
          <SearchIcon className='h-12 p-4' />
        </div>
        {/* Right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello Wassem Darkwa</p>
            <p className='font-extrabold md:text-sm'>
              Accounts & List
            </p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& orders</p>
          </div>
          <div className='relative link flex items-center '>
            <span className='absolute top-0 right-0 md:right-10 bg-yellow-400 h-4 w-4 rounded-full text-black font-bold text-center'>
              0
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='font-extrabold md:text-sm hidden md:inline mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div></div>
    </header>
  );
};

export default Header;
