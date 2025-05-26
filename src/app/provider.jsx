"use client";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { config } from "@/utils/wagmi";
import { projectId } from "@/config";
import { useEffect } from "react";

export default function Providers({ children }) {
  const queryClient = new QueryClient();

  useEffect(() => {
    // Run only in the browser
    createWeb3Modal({
      wagmiConfig: config,
      projectId,
      enableAnalytics: true,
      enableOnramp: true
    });
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
