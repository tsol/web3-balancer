import { Test, TestingModule } from '@nestjs/testing';
import { RatesFetchService } from './rates-fetch.service';

describe('RatesFetchService', () => {
  let service: RatesFetchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RatesFetchService],
    }).compile();

    service = module.get<RatesFetchService>(RatesFetchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
