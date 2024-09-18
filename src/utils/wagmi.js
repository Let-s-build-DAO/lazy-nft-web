import { http, createConfig } from '@wagmi/core'
import { liskSepolia, lisk, rootstockTestnet, rootstock } from '@wagmi/core/chains'
import { injected  } from '@wagmi/connectors'


export const config = createConfig({
  chains: [lisk, liskSepolia, rootstock, rootstockTestnet],
  transports: {
    [lisk.id]: http(),
    [liskSepolia.id]: http(),
    [rootstock.id]: http(),
    [rootstockTestnet.id]: http(),
  },
  ssr: true
})