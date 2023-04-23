import * as shared from '@/styles/shared.css';
import * as styles from './assets.css';

import Page from '@/components/layout/page';
import PageToolbar from '@/components/layout/page-toolbar';
import PageBottom from '@/components/layout/page-bottom';
import DataTable from '@/components/data-table/data-table';

import useAssetsTable from '@/hooks/useAssetsTable';
import AccountInfo from '@/components/account-info';
import { useMetamask } from '@/hooks/useMetamask';
import { useEffect, useLayoutEffect, useRef } from 'react';

export default function Home() {
  const { currentAccount } = useMetamask();
  const { isMetamaskConnected, isMetamaskInstalled, connectMetamask } = useMetamask();
  const assetsTableData = useAssetsTable(currentAccount);
  const suggestedOnce = useRef(false);

  useLayoutEffect(() => {
    if (!isMetamaskConnected && isMetamaskInstalled && !suggestedOnce.current) {
      console.log('connecting metamask');
      connectMetamask();
      suggestedOnce.current = true;
    }
  }, [isMetamaskConnected, isMetamaskInstalled]);

  return <Page title="your assets">
      <PageToolbar>
        <div className={shared.h5}>Balancer</div>
        <div>
          <AccountInfo />
        </div>
      </PageToolbar>
      <div>
        <h1 className={styles.title}>Assets</h1>

        <DataTable { ... assetsTableData } />

      </div>
      <PageBottom />
  </Page>;
}
