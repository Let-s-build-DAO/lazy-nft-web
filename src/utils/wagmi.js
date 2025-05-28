import { http, createConfig } from '@wagmi/core'
import { liskSepolia, lisk, rootstockTestnet, rootstock } from '@wagmi/core/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { createWeb3Modal } from '@web3modal/wagmi/react'

export const projectId = process.env.NEXT_PUBLIC_CONNECT_WALLET_ID

export const config = createConfig({
  chains: [lisk, liskSepolia, rootstock, rootstockTestnet],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [lisk.id]: http(),
    [liskSepolia.id]: http(),
    [rootstock.id]: http(),
    [rootstockTestnet.id]: http(),
  },
  ssr: true
})

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})
