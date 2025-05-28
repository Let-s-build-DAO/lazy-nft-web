'use client'

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/utils/wagmi";
import { cookieToInitialState } from 'wagmi'
import FooterNav from './FooterNav';
import HeaderNav from './HeaderNav'
import Hero from './Hero'

const queryClient = new QueryClient();


export default function HomeComp() {
  const initialState = cookieToInitialState(config)


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
