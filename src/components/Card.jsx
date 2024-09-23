"use client";

import Link from 'next/link';
import React from 'react';

const Card = ({ claimNft }) => {
  return (
    <div className='card lg:w-[24%]'>
      <img className='w-full' src="/images/academy.png" alt="NFT" />
      <div>
        <h2 className='text-xl mb-1 mt-2 font-bold'>LBD NFT #001</h2>
        <p className='text-xs mb-4'>by LBD Team</p>
        <div className='flex mb-2 justify-between'>
          {/* <p className='text-sm'>Current Price</p>
          <p className='text-lg font-bold'>3 ETH</p> */}
        </div>
        {claimNft ? (
          <button onClick={() => claimNft()} className='w-full btn p-4 rounded-full'>
            Claim NFT
          </button>
        ) : (
          <Link href={`/nft?id=1`}>
            <button className='w-full btn p-4 rounded-full'>
              Buy NFT
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
