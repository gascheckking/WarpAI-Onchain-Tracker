import { useAccount, useConnect, useDisconnect } from 'wagmi';

export default function WalletConnect() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  return (
    <div>
      {isConnected ? (
        <button 
          onClick={() => disconnect()}
          className="bg-gray-700 px-4 py-2 rounded-lg text-sm"
        >
          {address.slice(0, 6)}...{address.slice(-4)}
        </button>
      ) : (
        <button
          onClick={() => connect({ connector: connectors[0] })}
          className="bg-purple-600 px-4 py-2 rounded-lg text-sm"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
