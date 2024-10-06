"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useAccount, } from 'wagmi'
import Modal from './Modal';

const Card = ({ claimNft }) => {
  const account = useAccount()
  const [show, setShow] = useState(false)

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
          <button onClick={() => { account.isConnected ? claimNft() : setShow(true) }} className='w-full btn p-4 rounded-full'>
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
      <Modal isOpen={show} onClose={() => setShow(false)}>
        <h2 className="text-2xl text-[#0D0516] text-center font-semibold mb-4">Hello there!</h2>
        <p className="mb-4 text-[#0D0516] text-xl text-center">It looks like you tried to claim the NFT without connecting your wallet. Please click "Connect Wallet" in the header to continue and complete your claim.</p>
      </Modal>
    </div>
  );
};

export default Card;
