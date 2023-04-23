import { Asset } from "@/../../../back/src/models/assets.model";

export const fetchAssets = async (account: string): Promise<Asset[]> => {
  console.log('fetchAssets: ', account);
  return fetch(`http://localhost:3001/api/assets/${account}`)
    .then( response => response.json() )
    .then( data => data.assets );
}

