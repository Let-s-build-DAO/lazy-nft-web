"use client"

import Card from '@/components/Card';
import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import LazyAbi from '../../utils/marketPlaceAbi'
import { provider } from '../../components/HeaderNav'
import { marketPlaceAddress } from '../../components/HeaderNav'
import Modal from '@/components/Modal';


const Claim = () => {
  const [claimable, setClaimable] = useState([])
  const [modal, setModal] = useState(false)


  const contract = new ethers.Contract(marketPlaceAddress, LazyAbi, provider)
  // console.log(contract)

  const getClaimable = async () => {
    const data = await contract.fetchClaimableItems()
    // console.log(data)
    setClaimable(data)
  }

  useEffect(() => {
    getClaimable()
  }, [])

  const claimNft = async () => {
    const claimId = ethers.utils.formatUnits(claimable[0].itemId, 18)
    const data = await contract.claimNft(claimId)
    console.log(data)
    setModal(true)
  }

  return (
    <main className="lg:px-10 py-8 px-4">
      <div className='lg:flex justify-between'>
        <Card claimNft={() => claimNft()} />
      </div>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <p className="mb-4 text-[#0D0516] text-xl text-center">You have claimed our NFT, to continue your registration on our academy, click the button below.</p>
        <div className="flex justify-center">
          <a
            href="https://lets-build-academy.vercel.app/auth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className='btn p-3 rounded-md text-white px-6'>Continue Registration</button>
          </a>
        </div>
      </Modal>
    </main>
  );
};

export default Claim;