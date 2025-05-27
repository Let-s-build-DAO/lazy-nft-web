'use client'


import dynamic from 'next/dynamic';
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { config } from "@/utils/wagmi";
import { projectId } from "@/config";
import { cookieToInitialState } from 'wagmi'
const HeaderNav = dynamic(() => import('@/components/HeaderNav'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false, // Disable SSR for this component
});

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

export default function Home() {
  const initialState = cookieToInitialState(config)

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
