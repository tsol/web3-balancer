
import React from 'react';
import * as styles from './data-table.css';
import { IDataTableColumn } from '../../models/data-table.model';

interface IDataTableHeaderProps {
  columns: IDataTableColumn[];
}

const DataTableHeader: React.FC<IDataTableHeaderProps> = ({ columns }) => {
  return <tr className={styles.row}>
    <th className={styles.checkboxHeaderCell}>
      <input type="checkbox" className={styles.checkbox} />
    </th>
    {columns.map((column, index) => {
      return <th
        key={index}
        className={styles.headerCell}
        style={{ width: ( column.width ? column.width : 'auto' ) }}
      >
        {column.label}
      </th>
    })}
    <th className={styles.actionHeaderCell}>
      &nbsp;
    </th>
  </tr>;
}

export default DataTableHeader;