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
}
