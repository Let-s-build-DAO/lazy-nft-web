'use client'

import { cookieToInitialState } from 'wagmi'
import { config, projectId } from '../config'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import HeaderNav from './HeaderNav'

// Setup queryClient
const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})


const Nav = () => {
  const initialState = cookieToInitialState(config)

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <HeaderNav />
      </QueryClientProvider>
    </WagmiProvider>
  )
};

export default Nav;
