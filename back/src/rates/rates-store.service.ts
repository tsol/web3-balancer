import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ExchangeRate } from '.prisma/client';

@Injectable()
export class RatesStoreService {
  constructor(private prisma: PrismaService) {}

  async createOrUpdateRates(rates: ExchangeRate[]): Promise<void> {
    await Promise.all(
      rates
        .filter((rate) => rate.price)
        .map(async (exchangeRate) => {
          console.log('UPSERTING:', exchangeRate);
          await this.prisma.exchangeRate.upsert({
            where: { id: exchangeRate.id },
            update: {
              symbol: exchangeRate.symbol,
              name: exchangeRate.name,
              price: exchangeRate.price,
            },
            create: exchangeRate,
          });
        }),
    );
  }

  async getRates(): Promise<ExchangeRate[]> {
    return this.prisma.exchangeRate.findMany();
  }
}
