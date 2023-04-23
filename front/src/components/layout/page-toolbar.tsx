import React, { ReactNode } from 'react';
import * as styles from './page-toolbar.css';

interface PageToolbarProps {
  children: ReactNode
}

const PageToolbar: React.FC<PageToolbarProps> = ({ children }) => {
  return <div className={styles.toolbar}>
    {children}
  </div>;
}

export default PageToolbar;