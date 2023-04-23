import { useEffect } from 'react';
import { useMetamask } from '@/hooks/useMetamask';

const AccountInfo: React.FC = () => {
  
  const { isMetamaskInstalled, isBscNetwork, currentAccount } = useMetamask();

  useEffect(() => {
    console.log('Metamask is installed:', isMetamaskInstalled);
    console.log('Current network is BSC:', isBscNetwork);
    console.log('Current account:', currentAccount);
  }, [isMetamaskInstalled, isBscNetwork, currentAccount]);

  return (
    <div>
      { currentAccount }
    </div>
  );
}

export default AccountInfo;