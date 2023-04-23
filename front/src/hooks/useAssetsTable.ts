import { useAssetsStore } from '@/store/assets.store';
import { useEffect, useState } from 'react';
import { fetchAssets } from '@/services/assets.service';
import { IDataTable, IDataTableRow } from '@/models/data-table.model';
import CellViewCoin from '@/components/data-table/cell-view-coin';
import { useMetamask } from './useMetamask';

const assets: IDataTable = {
  columns: [
    { name: 'token', label: 'Token', width: '50%', component: CellViewCoin },
    { name: 'balance', label: 'Balance' },
  ],
  rows: []
}
function useAssetsTable(account: string | null) {
  const store = useAssetsStore();
  const { isMetamaskConnected, isBscNetwork } = useMetamask();
  const [rows, setRows] = useState<IDataTableRow[]>([]);
  
  const isLoading = store.isLoading || !isMetamaskConnected || !isBscNetwork;

  useEffect( () => {
    if (isMetamaskConnected && isBscNetwork && account) {
      store.startLoading();
      fetchAssets(account).then( assets => store.setAssets(assets) );
    }
  }, [account, isMetamaskConnected, isBscNetwork]);

  useEffect( () => {
    const newRows = store.assets.map(asset => ({
      token: asset.token,
      balance: asset.balance
    }));
    setRows(newRows);
  }, [store.assets]);
  
  
  return { ...assets, rows, isLoading };
}

export default useAssetsTable;
