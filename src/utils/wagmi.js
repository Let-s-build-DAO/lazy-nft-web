import { http, createConfig } from '@wagmi/core'
import { liskSepolia } from '@wagmi/core/chains'
import { injected  } from '@wagmi/connectors'


export const config = createConfig({
  chains: [liskSepolia],
  transports: {
    [liskSepolia.id]: http(),
  },
  ssr: true
})