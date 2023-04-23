import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { RatesStoreService } from 'src/rates/rates-store.service';
import { RatesFetchService } from 'src/rates/rates-fetch.service';

@Injectable()
export class RatesUpdateTask {
  constructor(
    private ratesFetch: RatesFetchService,
    private ratesStore: RatesStoreService,
  ) {}

  @Cron('0 * * * * *')
  async handleCron() {
    console.log('[TASK] RatesUpdate');
    const rates = await this.ratesFetch.getNextBatch();
    await this.ratesStore.createOrUpdateRates(rates);
  }
}
