
import React from 'react';
import * as styles from './data-table.css';
import { IDataTableColumn, IDataTableRow } from './data-table.model';
import CircleOutlined from '@mui/icons-material/CircleOutlined'
import CellView from './cell-view';

interface IDataTableRowProps {
  columns: IDataTableColumn[];
  row: IDataTableRow;
}

const DataTableRow: React.FC<IDataTableRowProps> = ({ columns, row }) => {
  return <tr className={styles.row}>
    <td className={styles.checkboxDataCell}>
      <input type="checkbox" className={styles.checkbox} />
    </td>
    {columns.map((column, index) => {
      return <td
        key={index}
        className={styles.dataCell}
        style={{ minWidth: ( column.width ? column.width : 'unset' ) }}
      >
        { column.component ?
          column.component( { data: row[ column.name ] } ) :
          <CellView data={row[ column.name ]} />
        }
      </td>
    })}
    <td className={styles.actionDataCell}>
      <CircleOutlined />
    </td>
  </tr>;
}

export default DataTableRow;