'use client'


import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from '@web3modal/wagmi/react'
// import { config } from "@/utils/wagmi";
import { projectId, config } from "@/config";
import { cookieToInitialState } from 'wagmi'
const HeaderNav = dynamic(() => import('./HeaderNav'), { ssr: false });
const Hero = dynamic(() => import('./Hero'), {
  ssr: false, // Disable SSR for this component
});

const queryClient = new QueryClient();

// createWeb3Modal({
//   wagmiConfig: config,
//   projectId,
//   enableAnalytics: true, // Optional - defaults to your Cloud configuration
//   enableOnramp: true // Optional - false as default
// })

export default function HomeComp() {
  const initialState = cookieToInitialState(config)

  useEffect(() => {
    // if (typeof window !== 'undefined') {
    createWeb3Modal({
      wagmiConfig: config,
      projectId,
      enableAnalytics: true,
      enableOnramp: true
    });
    // }
  }, []);

  return (
    <main className="">
      <WagmiProvider config={config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          <HeaderNav />
          <Hero />
        </QueryClientProvider>
      </WagmiProvider>
    </main>
  );
}
