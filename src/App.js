// src/App.jsx
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './wagmiClient';
import ConnectWallet from './components/web3/ConnectWallet';
import NetworkStatus from './components/web3/NetworkStatus';

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">Web3 React App</h1>
              <ConnectWallet />
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-4 py-8">
            <NetworkStatus />
            {/* Add your main content here */}
          </main>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;