import { createPublicClient, createWalletClient, http, custom } from 'viem'
import { liskSepolia } from 'viem/chains'
import { EthereumProvider } from '@walletconnect/ethereum-provider'
import { publicActionsL2 } from 'viem/op-stack'

export const publicClient = createPublicClient({
  chain: liskSepolia,
  transport: http(),
}).extend(publicActionsL2());

// eg: Metamask
export const walletClient = createWalletClient({
  chain: liskSepolia,
  transport: custom(window.ethereum),
})

// eg: WalletConnect
const provider = await EthereumProvider.init({
  projectId: "abcd1234",
  showQrModal: true,
  chains: [1],
})

export const walletClientWC = createWalletClient({
  chain: liskSepolia,
  transport: custom(provider),
})