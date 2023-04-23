
import React from 'react';
import { ICellViewProps, isDataCellComplex } from '../../models/data-table.model';

const CellView: React.FC<ICellViewProps> = ({ data }) => {
  let value = 
    isDataCellComplex(data) ? data.value : data;
  return <>{value}</>;
}

export default CellView;