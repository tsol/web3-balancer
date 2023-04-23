import { Asset } from '@/models/assets.model';
import type { NextApiRequest, NextApiResponse } from 'next'

const assets: Asset[] = [
    { token: 'BTC', balance: 0.234 },
    { token: 'ETH', balance: 0.545 },
    { token: 'DAI', balance: 2223.2 },
    { token: 'SOL', balance: 560.34 },
    { token: 'USDC', balance: 0.0001 },
    { token: 'USDT', balance: 0.0001 },
    { token: 'WBTC', balance: 0.0001 },
    { token: 'ZRX', balance: 0.0001 },
    { token: 'BTC', balance: 2.345 },
    { token: 'ETH', balance: 0.545 },
    { token: 'DAI', balance: 2223.2 },
    { token: 'SOL', balance: 560.34 },
    { token: 'USDC', balance: 0.0001 },
    { token: 'USDT', balance: 0.0001 },
    { token: 'WBTC', balance: 0.0001 },
    { token: 'ZRX', balance: 0.0001 },
    { token: 'USDC', balance: 0.0001 },
    { token: 'USDT', balance: 0.0001 },
    { token: 'WBTC', balance: 0.0001 },
    { token: 'ZRX', balance: 0.0001 },
    { token: 'BTC', balance: 2.345 },
    { token: 'ETH', balance: 0.545 },
    { token: 'DAI', balance: 2223.2 },
    { token: 'SOL', balance: 560.34 },
    { token: 'USDC', balance: 0.0001 },
    { token: 'USDT', balance: 0.0001 },
    { token: 'WBTC', balance: 0.0001 },
    { token: 'ZRX', balance: 0.0001 },
];

type Data = {
  assets: Asset[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ assets })
}
