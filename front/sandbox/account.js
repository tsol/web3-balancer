const { ethers } = require('ethers');


const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545');
const address = '0x230c2c12d2d3e3965eacfea3a7b56efeaa823c18'


// https://data-seed-prebsc-1-s1.binance.org:8545/

// const bnbAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'; // address of BNB token on BSC Testnet

// async function getBnbBalance(address) {
//   const bnbContract = new ethers.Contract(bnbAddress, ['function balanceOf(address) view returns (uint256)'], provider);
//   const balance = await bnbContract.balanceOf(address);
//   return balance.toString();
// }

const main = async () => {
  const balance = await provider.getBalance(address)
  console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main();

//getBnbBalance(address).then(balance => console.log(`BNB balance for address ${address}: ${balance}`));
