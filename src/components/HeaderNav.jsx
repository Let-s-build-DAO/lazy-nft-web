'use client'

import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Assuming you use Heroicons
import Link from 'next/link';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='p-4 lg:px-10 flex justify-between items-center'>
      <Link href={'/'}>
        <img src="/images/LABSS.png" alt="Logo" className='h-8' />
      </Link>
      <div className='hidden md:flex w-[30%] justify-between'>
        <div className='my-auto text-sm'>
          <Link href={'/'}>Home</Link>
        </div>
        <div className='my-auto text-sm'>
          <Link href={'/marketplace'}>Marketplace</Link>
        </div>
        <button className='p-4 text-sm px-6 rounded-full border-2 border-[#40196C]'>Connect Wallet</button>
      </div>
      <div className='md:hidden my-auto'>
        <button onClick={toggleMenu} className='focus:outline-none '>
          {isOpen ? <XIcon className='h-8 w-8' /> : <MenuIcon className='h-8 w-8' />}
        </button>
      </div>
      {isOpen && (
        <div className='absolute z-10 top-16 left-0 w-full mp-10 bg-[#150824] flex flex-col items-center md:hidden'>
          <div onClick={() => setIsOpen(false)} className='my-4 text-sm '>
            <Link href={'/'}>Home</Link>
          </div>
          <div onClick={() => setIsOpen(false)} className='my-4 text-sm'>
            <Link href={'/marketplace'}>Marketplace</Link>
          </div>
          <button className='p-2 text-sm px-6 rounded-full border-2 border-[#40196C] mb-6'>Connect Wallet</button>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
