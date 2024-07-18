import Trending from '@/components/Trending';
import React from 'react';
import Link from 'next/link';

const Nft = () => {
  return (
    <div className='lg:px-10 px-4'>
      <section className='bg-[#150824] lg:p-6 p-3 rounded-[30px] lg:flex'>
        <div className='lg:w-1/2'>
          <img className='w-full' src="/images/nft.png" alt="" />
        </div>
        <div className='my-auto lg:w-1/2 lg:p-8'>
          <h2 className='lg:text-4xl text-2xl mb-1 mt-2 font-bold'>Cyber Punk #1234</h2>
          <p className='text-sm my-4'>by Daddymuphasa</p>
          <p className='text-sm'>Neon Samurai is a unique digital asset created by Alexis Tanaka. This piece is part of the 'Cyber Legends' collection, which features a series of futuristic warriors and mythical beings set in a neon-lit dystopian world. The artwork showcases a lone samurai clad in cybernetic armor, wielding a glowing katana against a backdrop of towering neon skyscrapers and floating digital billboards. With its stunning animation and interactive elements that respond to the viewer's cursor movement, this NFT stands out as a true collector's item.</p>
          <div className='flex my-4 justify-between'>
            <p className='text-base'>Current Price</p>
            <p className='text-lg font-bold'>3 ETH</p>
          </div>
          <Link className='my-6' href={`/nft?id=1`}>
            <button className='w-full btn p-4 rounded-full'>Buy NFT</button>
          </Link>
        </div>
      </section>
      <Trending title='More From Collections' category='' />
    </div>
  );
};

export default Nft;