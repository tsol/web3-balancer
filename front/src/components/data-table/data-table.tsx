import React, { ReactNode } from 'react';
import * as styles from './data-table.css';

import { IDataTable, IDataTableRow } from '../../models/data-table.model';
import usePagination from '@/hooks/usePagination';

import DataTableHeader from './data-table-header';
import DataTableRow from './data-table-row';
import Pagination from '../pagination';
import { ClipLoader } from 'react-spinners';


const DataTable: React.FC<IDataTable> = ({ columns, rows, pageSize = 3, isLoading }) => {
  const { slicedData, ...paginationControl } = usePagination<IDataTableRow>(rows, 1, pageSize);
        
  const content = isLoading ?
    <tr className={styles.row}>
      <td colSpan={columns.length + 2} >
          <div className={styles.loadingDiv}>
            <ClipLoader size={50} color={"#123abc"} loading={true} />
          </div>
      </td>
    </tr> :
    slicedData.map((row, index) =>
      <DataTableRow key={index} columns={columns} row={row} />);

  return <>
    <table className={styles.table}>
      <tbody>
        <DataTableHeader columns={columns} />

        {content}

        { !isLoading && <tr className={styles.row}>
          <td colSpan={columns.length + 2} className={styles.pagination}>
            <Pagination pagination={paginationControl} />
          </td>
        </tr>
        }
      </tbody>
    </table>
  </>;
}

export default DataTable;