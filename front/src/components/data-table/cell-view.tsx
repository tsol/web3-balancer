
import React from 'react';
import { ICellViewProps } from './data-table.model';

const CellView: React.FC<ICellViewProps> = ({ data }) => {
  let value = (typeof data === 'string' ? data : data.value );
  return <>{ value }</>;
}

export default CellView;