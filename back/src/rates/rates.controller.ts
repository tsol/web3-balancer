import { Controller, Get } from '@nestjs/common';
import { RatesFetchService } from './rates-fetch.service';
import { RatesStoreService } from './rates-store.service';

@Controller('api/marketCap')
export class RatesController {
  constructor(
    private ratesFetch: RatesFetchService,
    private ratesStore: RatesStoreService,
  ) {}

  @Get('')
  async getStoresCoinsRates(): Promise<any> {
    return this.ratesStore.getRates();
  }

  @Get('live')
  async getAllCoinsRates(): Promise<any> {
    const resp = await this.ratesFetch.getAllCoinsRates();
    console.log('RatesController.getData()', resp);
    return resp;
  }
}
