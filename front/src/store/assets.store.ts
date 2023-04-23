import { create } from 'zustand'

import { Asset } from "@/../../../back/src/models/assets.model";

type AssetsStore = {
  assets: Asset[],
  isLoading: boolean,
  setAssets: (assets: Asset[]) => void,
  startLoading: () => void,
}

export const useAssetsStore = create<AssetsStore>(set => ({
  assets: [],
  isLoading: false,
  setAssets: (assets: Asset[]) => {
    console.log('setAssets:', assets);
    return set({ assets, isLoading: false });
  },
  startLoading: () => set({ isLoading: true }),
}))

