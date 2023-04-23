import { Controller, Param, Get } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('api/assets')
export class AssetsController {
  constructor(private assetsService: AssetsService) {}
  @Get(':account')
  async getData(@Param('account') account: string): Promise<any> {
    return this.assetsService.fetchData(account);
  }
}
