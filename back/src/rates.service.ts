import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ExchangeRate, Prisma } from '@prisma/client';

@Injectable()
export class ExchangeRateService {
  constructor(private prisma: PrismaService) {}

  async ExchangeRate(
    ExchangeRateWhereUniqueInput: Prisma.ExchangeRateWhereUniqueInput,
  ): Promise<ExchangeRate | null> {
    return this.prisma.exchangeRate.findUnique({
      where: ExchangeRateWhereUniqueInput,
    });
  }

  async ExchangeRates(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExchangeRateWhereUniqueInput;
    where?: Prisma.ExchangeRateWhereInput;
    orderBy?: Prisma.ExchangeRateOrderByWithRelationInput;
  }): Promise<ExchangeRate[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.exchangeRate.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createExchangeRate(
    data: Prisma.ExchangeRateCreateInput,
  ): Promise<ExchangeRate> {
    return this.prisma.exchangeRate.create({
      data,
    });
  }

  async updateExchangeRate(params: {
    where: Prisma.ExchangeRateWhereUniqueInput;
    data: Prisma.ExchangeRateUpdateInput;
  }): Promise<ExchangeRate> {
    const { where, data } = params;
    return this.prisma.exchangeRate.update({
      data,
      where,
    });
  }

  async deleteExchangeRate(
    where: Prisma.ExchangeRateWhereUniqueInput,
  ): Promise<ExchangeRate> {
    return this.prisma.exchangeRate.delete({
      where,
    });
  }
}
