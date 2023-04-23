import React, { ReactNode } from 'react';
import * as styles from './page.css';
import PageToolbar from './page-toolbar';

interface PageBottomProps {
  children?: ReactNode
}

const PageBottom: React.FC<PageBottomProps> = ({ children }) => {
  return <div className={styles.contentBottom}>
    {children ?? <div> {children} </div>}

    <PageToolbar>
      <div className={styles.privacy}><a href="#">Privacy policy</a></div>
      <div className={styles.rights}>© 2023 All rights reserved</div>
    </PageToolbar>
    {children}
  </div>;
}

export default PageBottom;