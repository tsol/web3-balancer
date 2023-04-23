import { useAssetsStore } from '@/store/assets.store';
import { useEffect } from 'react';
import { fetchAssets } from '@/services/assets.service';
import { IDataTable } from '@/models/data-table.model';
import CellViewCoin from '@/components/data-table/cell-view-coin';

const assets: IDataTable = {
  columns: [
    { name: 'token', label: 'Token', width: '50%', component: CellViewCoin },
    { name: 'balance', label: 'Balance' },
  ],
  rows: []
}
function useAssetsTable() {
  const store = useAssetsStore();

  useEffect( () => {
    fetchAssets().then( assets => store.setAssets(assets) );
  }, []);

  useEffect( () => {
    assets.rows = store.assets.map(asset => ({
      token: asset.token,
      balance: asset.balance
    }));
  }, [store.assets]);

  return assets;
}

export default useAssetsTable;
