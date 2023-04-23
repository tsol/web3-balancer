import Page from '@/components/layout/page';
import PageToolbar from '@/components/layout/page-toolbar';
import PageBottom from '@/components/layout/page-bottom';

import Shapes from '@/components/shapes';

import * as shared from '@/styles/shared.css';
import * as styles from './index.css';

import useIsClient from '@/hooks/useIsClient';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const isClient = useIsClient();

  const handleClick = () => {
    router.push('/assets');
  };

  return <Page title="Balancer: track your assets with ease" dark>
    
      <PageToolbar>
        <div className={shared.h5}>Balancer</div>
        <div></div>
      </PageToolbar>

      <div className={styles.contentBody}>
        <div className={styles.contentLeft}>
          <h1 className={styles.title}>
            Track Your Crypto Wealth with Our Wallet Balance Service
          </h1>
          <button onClick={handleClick} >METAMASK</button>
        </div>
        <div className={styles.contentRight}>
          { isClient && <Shapes /> }
        </div>
      </div>

      <PageBottom />

  </Page>;
}
