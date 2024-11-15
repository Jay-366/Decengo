// src/app/page.tsx
'use client';
import { useState } from 'react';
import VenueHighlight from './components/VenueHighlight';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [ , setBlockscoutLink] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    setError('');
    setIsLoading(true);

    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        setWalletAddress(address);
        setIsConnected(true);
        setBlockscoutLink(`https://eth.blockscout.com/address/${address}`);

        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', handleChainChanged);
      } catch (error: any) {
        console.error('Error:', error);
        switch (error?.code) {
          case 4001:
            setError('Please connect your wallet to continue. You rejected the connection request.');
            break;
          case -32002:
            setError('Please open your MetaMask and complete the pending connection request.');
            break;
          default:
            setError('An error occurred while connecting to your wallet. Please try again.');
        }
      }
    } else {
      setError('Please install MetaMask or another Web3 wallet to continue.');
    }
    setIsLoading(false);
  };

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      disconnectWallet();
    } else {
      setWalletAddress(accounts[0]);
      setBlockscoutLink(`https://eth.blockscout.com/address/${accounts[0]}`);
    }
  };

  const handleChainChanged = (chainId: string) => {
    window.location.reload();
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    setBlockscoutLink('');
    setError('');
    if (window.ethereum) {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    }
  };

  return (
    <header className="flex items-center justify-between w-full bg-gray-100 p-4 shadow-md">
      <h1 className="text-lg font-semibold">Wallet Connect Demo</h1>

      {error && (
        <div className="text-xs text-red-500 mr-2">
          {error}
        </div>
      )}

      <div className="flex items-center gap-2">
        {!isConnected ? (
          <button
            onClick={connectWallet}
            disabled={isLoading}
            className={`${
              isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
            } text-white text-sm font-medium py-1 px-2 rounded`}
          >
            {isLoading ? (
              <>
                <span className="animate-spin">⚡</span>
                Connecting...
              </>
            ) : (
              'Connect Wallet'
            )}
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-xs text-green-700">Connected!</span>

            <a
              href={`https://eth.blockscout.com/address/${walletAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-xs hover:underline"
            >
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </a>

            <button
              onClick={disconnectWallet}
              className="bg-red-500 hover:bg-red-700 text-white text-xs font-medium py-1 px-2 rounded"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
