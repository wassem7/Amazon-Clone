import React from 'react';
import Image from 'next/image';
const Header = () => {
  return (
    <header>
      {/* Top nav */}
      <div className='bg-amazon_blue p-1 flex items-center py-2 flex-grow'>
        {/* logo */}
        <div className='bg-red-400 flex items-center mt-2 flex-grow sm:flex-grow-0'>
          <Image
            width={150}
            height={40}
            src='https://links.papareact.com/f90'
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
      </div>

      {/* Bottom Nav */}
      <div></div>
    </header>
  );
};

export default Header;
