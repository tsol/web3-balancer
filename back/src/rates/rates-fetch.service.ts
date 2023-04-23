import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

interface CoinListItem {
  id: string;
  symbol: string;
  name: string;
}

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

  async getAllCoinsRates() {
    const list = await this.getCoinsList();
    const ids = list.map((item: CoinListItem) => item.id).slice(0, 30);
    const prices = await this.getCoinsPrice(ids);
    const result = [];

    Object.entries<any>(prices).forEach(([id, value]) => {
      const price = value.usd;
      const item = list.find((item: CoinListItem) => item.id === id);
      result.push({ ...item, price });
    });

    return result;
  }
}
