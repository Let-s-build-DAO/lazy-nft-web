"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { writeContract } from "@wagmi/core";
import { useAccount } from "wagmi";
// import { motion } from "framer-motion";

import MARKETPLACE_ABI from "@/utils/marketPlaceAbi";
import { MARKETPLACE_CONTRACT } from "@/config/constants";
import { config } from "@/utils/wagmi";

const Modal = dynamic(() => import("./Modal"), { ssr: false });

const Hero = () => {
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const account = useAccount();

  const getClaimable = async () => {
    // Placeholder for potential future logic
  };

  useEffect(() => {
    getClaimable();
  }, []);

  const claimNft = async () => {
    const result = await writeContract(config, {
      abi: MARKETPLACE_ABI,
      address: MARKETPLACE_CONTRACT,
      functionName: "claimNft",
      args: [1n],
    });

    console.log(result);
    setModal(true);
  };

  return (
    <section className="text-white min-h-screen flex items-center justify-center p-8">
      <div
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8 }}
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10"
      >
        <div
          className="flex-1"
          // initial={{ opacity: 0, scale: 0.9 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img
            src="/images/nft-6.jpg"
            alt="NFT Character"
            className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
          />
        </div>

        <div
          className="flex-1 text-center md:text-left"
          // initial={{ opacity: 0, x: 50 }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Unlock the Future with Lazy NFTs
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Welcome to the gateway of the Let's Build DAO ecosystem — where your NFT is more than just art. It's your all-access pass to the new economy of skills, community, and power.
            <br />
            Build it lazy! <br /> Build it anyways
          </p>

          {account.isConnected ? (
            <button
              onClick={claimNft}
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              className="inline-block btn transition text-white font-semibold px-6 py-3 rounded-xl"
            >
              Claim NFT
            </button>
          ) : (
            <div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{ delay: 1 }}
              className="lg:block flex justify-center"
            >
              <ConnectButton />
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <p className="mb-4 text-[#0D0516] text-xl text-center">
          You have claimed our NFT, to continue your registration on our academy, click the button below.
        </p>
        <div className="flex justify-center">
          <a
            href="https://academy.letsbuilddao.org/auth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn p-3 rounded-md text-white px-6">
              Continue Registration
            </button>
          </a>
        </div>
      </Modal>

      {/* <Modal isOpen={show} onClose={() => setShow(false)}>
        <h2 className="text-2xl text-[#0D0516] text-center font-semibold mb-4">
          Hello there!
        </h2>
        <p className="mb-4 text-[#0D0516] text-xl text-center">
          It looks like you tried to claim the NFT without connecting your wallet. Please click "Connect Wallet" in the header to continue and complete your claim.
        </p>
      </Modal> */}
    </section>
  );
};

export default Hero;
