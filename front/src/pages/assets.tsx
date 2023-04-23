import * as shared from '@/styles/shared.css';

import Page from '@/components/layout/page';
import PageToolbar from '@/components/layout/page-toolbar';
import PageBottom from '@/components/layout/page-bottom';
import DataTable from '@/components/data-table/data-table';
import CellViewCoin from '@/components/data-table/cell-view-coin';

import { IDataTable } from '@/components/data-table/data-table.model';
import * as styles from './assets.css';

const assets: IDataTable = {
  columns: [
    { name: 'token', label: 'Token', width: '50%', component: CellViewCoin },
    { name: 'balance', label: 'Balance' },
  ],
  rows: [
    { token: 'BTC', balance: '2.345$' },
    { token: 'ETH', balance: '0.545$' },
    { token: 'DAI', balance: '2223.2$' },
    { token: 'SOL', balance: '560.34$' },
    { token: 'USDC', balance: '0.0001$' },
    { token: 'USDT', balance: '0.0001$' },
    { token: 'WBTC', balance: '0.0001$' },
    { token: 'ZRX', balance: '0.0001$' },
    { token: 'BTC', balance: '2.345$' },
    { token: 'ETH', balance: '0.545$' },
    { token: 'DAI', balance: '2223.2$' },
    { token: 'SOL', balance: '560.34$' },
    { token: 'USDC', balance: '0.0001$' },
    { token: 'USDT', balance: '0.0001$' },
    { token: 'WBTC', balance: '0.0001$' },
    { token: 'ZRX', balance: '0.0001$' },
    { token: 'USDC', balance: '0.0001$' },
    { token: 'USDT', balance: '0.0001$' },
    { token: 'WBTC', balance: '0.0001$' },
    { token: 'ZRX', balance: '0.0001$' },
    { token: 'BTC', balance: '2.345$' },
    { token: 'ETH', balance: '0.545$' },
    { token: 'DAI', balance: '2223.2$' },
    { token: 'SOL', balance: '560.34$' },
    { token: 'USDC', balance: '0.0001$' },
    { token: 'USDT', balance: '0.0001$' },
    { token: 'WBTC', balance: '0.0001$' },
    { token: 'ZRX', balance: '0.0001$' },
  ]
}

export default function Home() {

  return <Page title="your assets">
      <PageToolbar>
        <div className={shared.h5}>Balancer</div>
        <div></div>
      </PageToolbar>
      <div>
        <h1 className={styles.title}>Assets</h1>

        <DataTable { ... assets } />

      </div>

      <PageBottom />
  </Page>;
}
