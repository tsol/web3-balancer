import { useMetamask } from '@/hooks/useMetamask';

function ConnectMetamaskButton() {

  const {
    isMetamaskInstalled,
    isMetamaskConnected,
    connectMetamask
  }= useMetamask();


  if (!isMetamaskInstalled) {
    return <div>Please install Metamask to use this feature.</div>;
  }

  if (isMetamaskConnected) {
    return <div>Metamask is connected.</div>;
  }

  return (
    <button onClick={connectMetamask}>Connect Metamask</button>
  );
}

export default ConnectMetamaskButton;
