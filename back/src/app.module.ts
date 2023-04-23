import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsService } from './assets/assets.service';
import { AssetsController } from './assets/assets.controller';

@Module({
  imports: [],
  controllers: [AppController, AssetsController],
  providers: [AppService, AssetsService],
})
export class AppModule {}
