'use client'

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
// import { config } from "@/utils/wagmi";
import { projectId, config } from "@/config";
import { WagmiConfig } from 'wagmi'
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
// const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

export default function HomeComp() {
  // const initialState = cookieToInitialState(config)

  return (
    <main className="">
      {/* <WagmiProvider config={config} initialState={initialState}>
        <QueryClientProvider client={queryClient}> */}
      <WagmiConfig config={config}>
        <HeaderNav />
        <Hero />
        <FooterNav />
      </WagmiConfig>
      {/* </QueryClientProvider>
      </WagmiProvider> */}
    </main>
  );
}
