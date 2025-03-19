import { useNetwork } from 'wagmi';

const NetworkStatus = () => {
  const { chain } = useNetwork();

  const getNetworkName = () => {
    if (!chain) return 'Unknown Network';
    return chain.name;
  };

  return (
    <div className="p-4">
      {chain && (
        <p className="text-sm">
          Network: {getNetworkName()} ({chain.id})
        </p>
      )}
    </div>
  );
};

export default NetworkStatus;