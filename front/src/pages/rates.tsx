import * as shared from '@/styles/shared.css';
import * as styles from './assets.css';

import Page from '@/components/layout/page';
import PageToolbar from '@/components/layout/page-toolbar';
import PageBottom from '@/components/layout/page-bottom';
import DataTable from '@/components/data-table/data-table';

import useRatesTable from '@/hooks/useRatesTable';
import AccountInfo from '@/components/account-info';

export default function Home() {
  const ratesDataTable = useRatesTable();

  return <Page title="exchange rates">
      <PageToolbar>
        <div className={shared.h5}>Balancer</div>
        <div>
          <AccountInfo />
        </div>
      </PageToolbar>
      <div>
        <h1 className={styles.title}>Exchange rates</h1>

        <DataTable { ... ratesDataTable } />

      </div>
      <PageBottom />
  </Page>;
}
