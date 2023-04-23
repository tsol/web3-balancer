import { BadRequestException, Injectable } from '@nestjs/common';

import { ethers } from 'ethers';

const ERC20_ABI = ['function balanceOf(address) view returns (uint)'];

const contractAddresses = {
  BTC: '0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8',
  ETH: '0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378',
  XRP: '0xa83575490D7df4E2F47b7D38ef351a2722cA45b9',
  BUSD: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
  USDT: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
  USDC: '0x64544969ed7EBf5f083679233325356EbE738930',
  DAI: '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
};

const provider = new ethers.providers.JsonRpcProvider(
  'https://data-seed-prebsc-1-s1.binance.org:8545',
);

const contracts = {};

Object.entries(contractAddresses).forEach(([token, address]) => {
  console.log('Adding token:', token, ' address:', address);
  contracts[token] = {
    token,
    address,
    contract: new ethers.Contract(address, ERC20_ABI, provider),
  };
});

const getBalance = async (token, walletAddress) => {
  const contract = contracts[token].contract;
  const balance = await contract.balanceOf(walletAddress);
  const formattedBalance = ethers.utils.formatEther(balance);
  return { [token]: formattedBalance };
};

const getBalances = async (address) => {
  const balanceRequests = Object.keys(contractAddresses).map((token) =>
    getBalance(token, address),
  );
  const results = await Promise.all(balanceRequests);
  const balances = results.reduce(
    (acc, result) => Object.assign(acc, result),
    {},
  );
  return balances;
};

@Injectable()
export class AssetsService {
  async fetchData(account: string): Promise<any> {
    if (!ethers.utils.isAddress(account)) {
      throw new BadRequestException('Invalid account address');
    }
    return getBalances(account);
  }
}
