import { useEffect } from 'react';
import { useMetamask } from '@/hooks/useMetamask';
import * as styles from './account-info.css';

function cutAddressMiddle(address: string) {
  const prefix = address.substring(0, 6);
  const suffix = address.substring(address.length - 6);
  return `${prefix}...${suffix}`;
}

const AccountInfo: React.FC = () => {
  
  const { 
    isMetamaskInstalled,
    isMetamaskConnected,
    isBscNetwork,
    currentAccount,
    connectMetamask
  } = useMetamask();

  useEffect(() => {
    console.log('Metamask is installed:', isMetamaskInstalled);
    console.log('Current network is BSC:', isBscNetwork);
    console.log('Current account:', currentAccount);
  }, [isMetamaskInstalled, isBscNetwork, currentAccount]);

  if (!isMetamaskInstalled) {
    return <div className={styles.warning}>Please install Metamask.</div>;
  }

  if (! isMetamaskConnected ) {
    return <button onClick={connectMetamask}>Connect Metamask</button>
  }

  if (! isBscNetwork) {
    return <div className={styles.warning}>Please change network to BSC Testnet.</div>;
  }

  return (
    <div className={styles.accountDiv}>
      <div className={styles.accountLabel}>Account:</div>
      <div className={styles.accountBox}>{ cutAddressMiddle(currentAccount!) }</div>
    </div>
  );
}

export default AccountInfo;