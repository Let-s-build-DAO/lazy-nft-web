'use client'

import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useDisconnect, useAccount } from 'wagmi';
import { readContract } from '@wagmi/core';
import MarkeplaceAbi from '../utils/marketPlaceAbi';
import { MARKETPLACE_CONTRACT } from '@/config/constants';
import { config } from '@/utils/wagmi';


const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { open } =  useWeb3Modal()
  const { disconnect } = useDisconnect();
  const account = useAccount();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const fetchItem = async () => {
    const result = await readContract(config, {
      abi: MarkeplaceAbi,
      address: MARKETPLACE_CONTRACT,
      functionName: 'fetchClaimableItems',
    });
    console.log(result);
  };

  useEffect(() => {
    if (account.status === 'connected') {
      fetchItem();
    }
  }, [account]);

  return (
    <header className="p-4 lg:px-32 flex  justify-between items-center bg-[#0D0516] shadow-md relative">
      <Link href="/">
        <img src="/images/LABSS.png" alt="Logo" className="h-10" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-sm hover:text-purple-400 transition">Home</Link>
        <Link href="https://academy.letsbuilddao.org/" className="text-sm hover:text-purple-400 transition">Academy</Link>

        {account.isConnected ? (
          <button
            onClick={toggleDropdown}
            className="flex items-center border-2 border-[#40196C] px-4 py-2 rounded-full text-sm hover:bg-[#40196C]/10"
          >
            <img src="/images/MetaMask.png" alt="MetaMask" className="w-5 h-5 mr-2" />
            <span className="truncate">{account.address}</span>
          </button>
        ) : (
          <button
            onClick={open}
            className="border-2 border-[#40196C] px-6 py-2 rounded-full text-sm hover:bg-[#40196C]/10"
          >
            Connect Wallet
          </button>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#150824] z-50 py-6 space-y-4 text-center md:hidden">
          <Link href="/" className="block text-sm" onClick={toggleMenu}>Home</Link>
          <Link href="https://academy.letsbuilddao.org/" className="block text-sm" onClick={toggleMenu}>Academy</Link>
          {account.isConnected ? (
            <button
              onClick={() => { toggleMenu(); toggleDropdown(); }}
              className="flex items-center mx-auto border-2 border-[#40196C] px-4 py-2 rounded-full text-sm"
            >
              <img src="/images/MetaMask.png" alt="MetaMask" className="w-5 h-5 mr-2" />
              <span className="truncate">{account.address}</span>
            </button>
          ) : (
            <button
              onClick={() => { toggleMenu(); open(); }}
              className="border-2 border-[#40196C] px-6 py-2 rounded-full text-sm"
            >
              Connect Wallet
            </button>
          )}
        </div>
      )}

      {/* Wallet Dropdown */}
      {dropdownOpen && (
        <div className="absolute top-20 right-4 md:right-10 w-[90%] md:w-72 bg-[#0D0516] border-2 border-[#40196C] rounded-xl p-4 z-50">
          <button className="float-right" onClick={toggleDropdown}>
            <XIcon className="h-5 w-5" />
          </button>
          <div className="mt-6">
            <button
              onClick={disconnect}
              className="w-full text-sm px-6 py-2 rounded-full border-2 border-[#40196C] hover:bg-[#40196C]/10"
            >
              Disconnect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
