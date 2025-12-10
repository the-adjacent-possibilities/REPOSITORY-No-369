// entry point: main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import {
  WagmiConfig,
  createConfig,
  configureChains,
  mainnet,
  sepolia
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  RainbowKitProvider,
  getDefaultWallets
} from '@rainbow-me/rainbowkit';

import '@rainbow-me/rainbowkit/styles.css';

const { chains, publicClient } = configureChains([mainnet, sepolia], [publicProvider()]);
const { connectors } = getDefaultWallets({ appName: 'OmniDAO', chains });

const config = createConfig({ autoConnect: true, connectors, publicClient });

ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiConfig config={config}>
    <RainbowKitProvider chains={chains}>
      <App />
    </RainbowKitProvider>
  </WagmiConfig>
);
