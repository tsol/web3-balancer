
import React from 'react';
import Image from 'next/image';
import { ICellViewProps, isDataCellComplex } from '../../models/data-table.model';
import * as styles from './cell-view-coin.css';

const CellViewCoin: React.FC<ICellViewProps> = ({ data }) => {
  
  let value;
  let icon: string = '';
  let comment: string = '';
  let alt: string = '';

  if (isDataCellComplex(data)) {
    icon = ( data.icon ?? '');
    value = data.value;
    comment = data.comment ?? ''
    alt = data.value ?? '';
  }
  else if (data) {
    value = data;
    icon = ( typeof data === 'string' ? data : '' );
    alt = ( typeof data === 'string' ? data : '' );
    comment = 'Description is optional';
  }
 
  const svg = icon && `icons/${icon.toLowerCase()}.svg`;

  return <div className={styles.coinView}>

    {svg &&
      <div className={styles.icon}>
        <Image
          priority
          src={svg}
          width="36"
          height="36"
          alt={alt}
        />
      </div>
    }

    <div className={styles.info}>
      <div className={styles.label}>
        {value}
      </div>
      {comment &&
        <div className={styles.comment}>
          {comment}
        </div>
      }
    </div>

  </div>;
}

export default CellViewCoin;