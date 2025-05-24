"use client"

import Card from './Card';
import React, { useEffect, useState } from 'react';
import MARKETPLACE_ABI from '@/utils/marketPlaceAbi';
import { MARKETPLACE_CONTRACT } from '@/config/constants';
import { writeContract } from '@wagmi/core'
import Modal from './Modal';
import { config } from '@/utils/wagmi';
import { useAccount, } from 'wagmi'


const Hero = () => {
  const [claimable, setClaimable] = useState([])
  const [modal, setModal] = useState(false)
  const account = useAccount()
  const [show, setShow] = useState(false)


  // console.log(contract)

  const getClaimable = async () => {
    // const data = await contract.fetchClaimableItems()
    // // console.log(data)
    // setClaimable(data)

  }

  useEffect(() => {
    getClaimable()
  }, [])

  const claimNft = async () => {
    const result = await writeContract(config, {
      abi: MARKETPLACE_ABI,
      address: MARKETPLACE_CONTRACT,
      functionName: 'claimNft',
      args: [
        1n,
      ],
    })

    console.log(result)
    setModal(true)
  }

  return (
    <section className=" text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">

        <div className="flex-1">
          <img src="/images/nft-6.jpg" alt="NFT Character" className="rounded-2xl shadow-lg w-full max-w-md mx-auto" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Unlock the Future with Lazy NFTs
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Welcome to the gateway of the Let's Build DAO ecosystem — where your NFT is more than just art. It's your all-access pass to the new economy of skills, community, and power.
            <br />
            Build it lazy! <br /> Build it anyways
          </p>

          <button onClick={() => { account.isConnected ? claimNft() : setShow(true) }} className="inline-block btn transition text-white font-semibold px-6 py-3 rounded-xl">
            Claim Nft
          </button>
        </div>
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

      <Modal isOpen={show} onClose={() => setShow(false)}>
        <h2 className="text-2xl text-[#0D0516] text-center font-semibold mb-4">Hello there!</h2>
        <p className="mb-4 text-[#0D0516] text-xl text-center">It looks like you tried to claim the NFT without connecting your wallet. Please click "Connect Wallet" in the header to continue and complete your claim.</p>
      </Modal>
    </section>

  );
};

export default Hero;