
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

export type DataCellType = IDataCellComplex | string;

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