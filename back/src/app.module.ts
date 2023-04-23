import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsService } from './assets/assets.service';
import { AssetsController } from './assets/assets.controller';
import { RatesFetchService } from './rates/rates-fetch.service';
import { RatesController } from './rates/rates.controller';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { RatesUpdateTask } from './tasks/rates-update.task';
import { RatesStoreService } from './rates/rates-store.service';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [HttpModule, ScheduleModule.forRoot()],
  controllers: [AppController, AssetsController, RatesController],
  providers: [
    AppService,
    AssetsService,
    RatesFetchService,
    RatesUpdateTask,
    RatesStoreService,
    PrismaService,
  ],
})
export class AppModule {}
