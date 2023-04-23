import * as shared from '@/styles/shared.css';
import * as styles from './assets.css';

import Page from '@/components/layout/page';
import PageToolbar from '@/components/layout/page-toolbar';
import PageBottom from '@/components/layout/page-bottom';
import DataTable from '@/components/data-table/data-table';

import useAssetsTable from '@/hooks/useAssetsTable';
import AccountInfo from '@/components/account-info';
import ConnectMetamaskButton from '@/components/connect-button';

export default function Home() {
  const assetsTableData = useAssetsTable();

  return <Page title="your assets">
      <PageToolbar>
        <div className={shared.h5}>Balancer</div>
        <div><AccountInfo /></div>
      </PageToolbar>
      <div>
        <h1 className={styles.title}>Assets</h1>

        <DataTable { ... assetsTableData } />

        <ConnectMetamaskButton />
      </div>
      <PageBottom />
  </Page>;
}
