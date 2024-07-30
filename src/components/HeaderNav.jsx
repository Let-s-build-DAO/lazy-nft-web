'use client'

import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Assuming you use Heroicons
import Link from 'next/link';
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useDisconnect, useAccount } from 'wagmi'
import { ethers } from "ethers";
import LazyAbi from '../utils/marketPlaceAbi'
const { ethereum } = window

export const provider = new ethers.providers.JsonRpcProvider('https://rpc.sepolia-api.lisk.com')
export const marketPlaceAddress = '0x35841e7AeF3dF083eFF01332e301489c3E202392'

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { open, close } = useWeb3Modal()
  const account = useAccount()
  const [dropdown, setDropdown] = useState(false)
  const { disconnect } = useDisconnect()

  // const contract = new ethers.Contract(marketPlaceAddress, LazyAbi, provider)
  // console.log(contract)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (account.status === 'connected') {
    }
  }, [account])

  return (
    <header className='p-4 lg:px-10 flex justify-between items-center'>
      <Link href={'/'}>
        <img src="/images/LABSS.png" alt="Logo" className='h-8' />
      </Link>
      <div className='hidden md:flex w-[40%] justify-between'>
        <div className='my-auto text-sm'>
          <Link href={'/'}>Home</Link>
        </div>
        <div className='my-auto text-sm'>
          <Link href={'/claim'}>Claim NFT</Link>
        </div>
        <div className='my-auto text-sm'>
          <Link href={'/marketplace'}>Marketplace</Link>
        </div>
        {account.isConnected ? <button onClick={() => setDropdown(!dropdown)} className='border-2 border-[#40196C] w-40 px-6 flex p-3 rounded-full'>
          <img className='w-6 mr-2' src="/images/MetaMask.png" alt="" />
          <p className='text-clip overflow-hidden'>{account.address}</p>
        </button> : <button onClick={() => open()} className='p-4 text-sm px-6 rounded-full border-2 border-[#40196C]'>Connect Wallet</button>}
      </div>
      <div className='md:hidden my-auto'>
        <button onClick={toggleMenu} className='focus:outline-none '>
          {isOpen ? <XIcon className='h-8 w-8' /> : <MenuIcon className='h-8 w-8' />}
        </button>
      </div>
      {isOpen && (
        <div className='absolute z-10 top-16 left-0 w-full mp-10 bg-[#150824] flex flex-col items-center md:hidden'>
          <div onClick={() => toggleMenu()} className='my-4 text-sm '>
            <Link href={'/'}>Home</Link>
          </div>
          <div onClick={() => toggleMenu()} className='my-4 text-sm'>
            <Link href={'/marketplace'}>Marketplace</Link>
          </div>
          <div onClick={() => toggleMenu()} className='my-4 text-sm '>
            <Link href={'/claim'}>Clain NFT</Link>
          </div>
          {account.isConnected ? <button onClick={() => { toggleMenu(); setDropdown(!dropdown) }} className='border-2 mb-6 border-[#40196C] w-40 px-6 flex p-3 rounded-full'>
            <img className='w-6 mr-2' src="/images/MetaMask.png" alt="" />
            <p className='text-clip overflow-hidden'>{account.address}</p>
          </button> : <button onClick={() => open()} className='p-4 text-sm px-6 rounded-full mb-6 border-2 border-[#40196C]'>Connect Wallet</button>}
        </div>
      )}
      {dropdown && <div className='bg-[#0D0516] lg:w-72 w-[90%] border-2 border-[#40196C] p-4 rounded-xl fixed top-20 lg:right-20 right-4'>
        <button onClick={() => setDropdown(false)} className='float-right'><XIcon className='h-6 w-6' /></button>
        <p className='font-bold mt-6 text-lg'>My Wallet</p>
        <div className='flex my-6'>
          <img src="/images/NFT-icon.png" alt="" />
          <p className='text-xxm ml-3'>My Purchased NFTs</p>
        </div>
        <button onClick={() => disconnect()} className='p-4 text-sm px-6 w-full rounded-full border-2 border-[#40196C]'>Disconnect</button>
      </div>}
    </header>
  );
};

export default HeaderNav;
