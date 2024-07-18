import React from 'react';

const Hero = () => {
  return (
    <div className='text-center my-10 lg:w-[75%] w-[95%] mx-auto'>
      <h1 className='lg:text-5xl text-4xl font-bold'>Discover, Collect, and Trade Exclusive NFTs</h1>
      <p className='lg:text-xl my-3'>Explore a world of unique digital assets created by artists from around the globe.</p>
      <button className='btn p-4 text-xm rounded-full px-8'>Explore NFT</button>
      <img src="/images/hero.png" alt="" />
    </div>
  );
};

export default Hero;