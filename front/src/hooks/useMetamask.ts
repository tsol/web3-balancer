import { useState, useEffect } from 'react';

export function useMetamask() {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [isBscNetwork, setIsBscNetwork] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  
  let isMounted = false;
  const _window = (typeof window !== 'undefined'  ? window as any : null);
  const isMetamaskConnected = currentAccount !== null;

  const connectMetamask = async () => {
    if ( isMetamaskInstalled && !isMetamaskConnected) {
      try {
        await _window.ethereum.enable();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChainChanged = (chainId: any) => {
    if (isMounted) setIsBscNetwork(chainId === '0x61');
  };

  const handleAccountsChanged = (accounts: any) => {
    if (isMounted) setCurrentAccount(accounts[0] || null);
  };

  useEffect(() => {
    isMounted = true;

    if (_window.ethereum && _window.ethereum.isMetaMask) {
      setIsMetamaskInstalled(true);
      _window.ethereum.on('accountsChanged', handleAccountsChanged);
      _window.ethereum.on('chainChanged', handleChainChanged);
      setCurrentAccount(_window.ethereum.selectedAddress || null);
      setIsBscNetwork(_window.ethereum.chainId === '0x61');
    }

    return () => {
      if (_window.ethereum) {
        _window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        _window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
      isMounted = false;
    };
  }, []);

  return {
    isMetamaskInstalled,
    isMetamaskConnected,
    isBscNetwork,
    currentAccount,
    connectMetamask
  };
}
