import React, { ReactNode } from 'react';
import * as styles from './data-table.css';

import { IDataTable, IDataTableRow } from './data-table.model';
import usePagination from '@/hooks/usePagination';

import DataTableHeader from './data-table-header';
import DataTableRow from './data-table-row';
import Pagination from '../pagination';


const DataTable: React.FC<IDataTable> = ({ columns, rows, pageSize = 3 }) => {
  const {slicedData, ... paginationControl} = usePagination<IDataTableRow>(rows, 1, pageSize);

  return <>
    <table className={styles.table}>
      <tbody>
        <DataTableHeader columns={columns} />
        {slicedData.map((row, index) => {
          return <DataTableRow key={index} columns={columns} row={row} />
        })}
      <tr className={styles.row}>
        <td colSpan={columns.length + 2} className={styles.pagination}>
          <Pagination pagination={paginationControl} />
        </td>
      </tr>
      </tbody>
    </table>
  </>;
}

export default DataTable;