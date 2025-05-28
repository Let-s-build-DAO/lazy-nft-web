'use client'

import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { config } from "@/utils/wagmi";
import { projectId } from "@/config";
import { cookieToInitialState } from 'wagmi'
import FooterNav from './FooterNav';
import HeaderNav from './HeaderNav'
import Hero from './Hero'

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

export default function HomeComp() {
  const initialState = cookieToInitialState(config)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // if (typeof window !== 'undefined') {
    // createWeb3Modal({
    //   wagmiConfig: config,
    //   projectId,
    //   enableAnalytics: true,
    //   enableOnramp: true,
    // })
    setMounted(true)
    // }
  }, [])

  if (!mounted) return <Loader /> // or show a loader here


  return (
    <main className="">
      <WagmiProvider config={config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          <HeaderNav />
          <Hero />
          <FooterNav />
        </QueryClientProvider>
      </WagmiProvider>
    </main>
  );
}
