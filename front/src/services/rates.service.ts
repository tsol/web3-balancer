import { ExchangeRate } from "@/../../../back/node_modules/.prisma/client/index";

export const fetchRates = async (): Promise<ExchangeRate[]> => {
  console.log('fetchRates');
  return fetch('http://localhost:3001/api/marketCap')
    .then( response => response.json() );
}

