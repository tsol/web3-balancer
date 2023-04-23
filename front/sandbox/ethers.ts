// import ethers library
const { ethers } = require('ethers');
const w = window as any;

// check for Metamask presence
if (w && w.ethereum && w.ethereum.isMetaMask) {
  console.log('Metamask is present');
} else {
  console.log('Metamask is not present');
}

export async function getCurrentAccount() {
  await w.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(w.ethereum);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  return address;
}

export async function getBalance() {
  const address = await getCurrentAccount();
  const provider = new ethers.providers.Web3Provider(w.ethereum);
  const balance = await provider.getBalance(address);
  return balance;
}

export async function getNetwork() {
  const provider = new ethers.providers.Web3Provider(w.ethereum);
  const network = await provider.getNetwork();
  return network;
}

export async function isConnectedToBscTestnet() {
  const network = await getNetwork();
  return network.chainId === 97;
}

export async function getBlockNumber() {
  const provider = new ethers.providers.Web3Provider(w.ethereum);
  const blockNumber = await provider.getBlockNumber();
  return blockNumber;
}

