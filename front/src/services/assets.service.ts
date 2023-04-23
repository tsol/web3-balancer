import { Asset } from "@/models/assets.model"

export const fetchAssets = async (): Promise<Asset[]> => {
  return fetch('/api/assets')
    .then( response => response.json() )
    .then( data => data.assets );
}

