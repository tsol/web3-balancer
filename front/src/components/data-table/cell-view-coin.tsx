
import React from 'react';
import Image from 'next/image';
import { ICellViewProps } from './data-table.model';
import * as styles from './cell-view-coin.css';

const CellViewCoin: React.FC<ICellViewProps> = ({ data }) => {

  console.log('Cell view', data);
  
  let icon: string = '';
  let value;
  let comment;

  if (typeof data === 'string') {
    value = data;
    icon = data;
    comment = 'Description is optional';
  }
  else {
    icon = ( data.icon ?? '');
    value = data.value;
    comment = data.comment;
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
          alt={value}
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