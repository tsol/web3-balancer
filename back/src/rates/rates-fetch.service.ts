import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { knownTokens } from './utils/known-tokens';
interface CoinListItem {
  id: string;
  symbol: string;
  name: string;
}

const BATCH_SIZE = 30;
let lastFetchIndex = 0;

@Injectable()
export class RatesFetchService {
  constructor(private readonly httpService: HttpService) {}

  async getCoinsList() {
    const url = 'https://api.coingecko.com/api/v3/coins/list';
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async getCoinsPrice(ids: string[]) {
    const allIds = ids.join(',');
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${allIds}&vs_currencies=usd`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async getNextBatch() {
    const list = await this.getCoinsList();
    const ids = list
      .filter((item: CoinListItem) => knownTokens[item.symbol])
      .map((item: CoinListItem) => item.id);

    const result = [];

    const batchIds = ids.slice(lastFetchIndex, lastFetchIndex + BATCH_SIZE);

    // eslint-disable-next-line prettier/prettier
    console.log('Fetching rates batch:', lastFetchIndex, ' => ', lastFetchIndex + BATCH_SIZE);

    lastFetchIndex += BATCH_SIZE;
    if (lastFetchIndex >= ids.length) {
      lastFetchIndex = 0;
    }

    const batchPrices = await this.getCoinsPrice(batchIds);
    Object.entries<any>(batchPrices).forEach(([id, value]) => {
      const price = value.usd;
      const item = list.find((item: CoinListItem) => item.id === id);
      result.push({ ...item, price });
    });

    return result;
  }
}
