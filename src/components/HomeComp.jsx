'use client'

import dynamic from "next/dynamic";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/utils/wagmi";
import { cookieToInitialState } from 'wagmi'
import FooterNav from './FooterNav';
import HeaderNav from './HeaderNav'
const Hero = dynamic(() => import("./Hero"), { ssr: false });

// import Hero from './Hero'
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

const queryClient = new QueryClient();


export default function HomeComp() {
  const initialState = cookieToInitialState(config)

  return (
    <main className="">
      <WagmiProvider config={config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <HeaderNav />
            <Hero />
            <FooterNav />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </main>
  );
}
