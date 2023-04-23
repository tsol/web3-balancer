import { create } from 'zustand'

import { Asset } from '@/models/assets.model'

type AssetsStore = {
  assets: Asset[],
  setAssets: (assets: Asset[]) => void,
}

export const useAssetsStore = create<AssetsStore>(set => ({
  assets: [],
  setAssets: (assets: Asset[]) => set({ assets }),
}))

