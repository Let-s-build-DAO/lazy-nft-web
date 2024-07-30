'use client'

import { cookieToInitialState } from 'wagmi'
import { config, projectId } from '../config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import HeaderNav from './HeaderNav'

// Create modal



const Nav = () => {
  const initialState = cookieToInitialState(config)

  return (
        <HeaderNav />
  )
};

export default Nav;
