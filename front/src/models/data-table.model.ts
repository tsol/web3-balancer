
export interface IDataTable {
 columns: IDataTableColumn[];
 rows: IDataTableRow[];
 pageSize?: number;
}

export interface IDataCellComplex {
  value: string;
  comment?: string;
  icon?: string;
}

export const isDataCellComplex = (data: any): data is IDataCellComplex => {
  return data && typeof data === 'object' && 'value' in data;
};

export type DataCellType = IDataCellComplex | string | number | boolean | null;

export interface IDataTableRow {
  [key: string]: DataCellType;
}

export interface ICellViewProps {
  data: DataCellType
}

export interface IDataTableColumn {
  name: string;
  label: string;
  width?: string;
  component?: React.FC<ICellViewProps>
}