import { useAccount, useConnect, useDisconnect } from 'wagmi';

const ConnectWallet = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="p-4">
      {!isConnected ? (
        <button
          onClick={() => connect({ connector: connectors[0] })}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </p>
          <button
            onClick={disconnect}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;