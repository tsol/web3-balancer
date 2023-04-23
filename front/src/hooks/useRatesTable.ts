import { useStore } from '@/store/store';
import { useEffect, useState } from 'react';
import { fetchRates } from '@/services/rates.service';
import { IDataTable, IDataTableRow } from '@/models/data-table.model';
import CellViewCoin from '@/components/data-table/cell-view-coin';

// {"id":"01coin","symbol":"zoc","name":"01coin","price":0.00110001}

const dataTable: IDataTable = {
  columns: [
    { name: 'symbol', label: 'Token', width: '30%', component: CellViewCoin },
    { name: 'name', label: 'Name' },
    { name: 'price', label: 'Price' },
  ],
  rows: []
}

function useRatesTable() {
  const store = useStore();
  const [rows, setRows] = useState<IDataTableRow[]>([]);
  
  const isLoading = store.isRatesLoading;

  useEffect( () => {
      store.startRatesLoading();
      fetchRates().then( rates => store.setRates(rates) );
  }, []);

  useEffect( () => {
    const newRows = store.rates.map(rate => ( {... rate }));
    setRows(newRows);
  }, [store.rates]);
  
  
  return { ...dataTable, rows, isLoading };
}

export default useRatesTable;
