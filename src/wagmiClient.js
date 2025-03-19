// src/wagmiClient.js
import { createConfig, http } from 'wagmi';
import { mainnet, polygon, goerli } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, polygon, goerli],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [goerli.id]: http(),
  },
  connectors: [
    injected(),
    walletConnect({ projectId: 'your-walletconnect-project-id' }),
  ],
});