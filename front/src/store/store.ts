import { create } from 'zustand'

import { Asset } from "@/../../../back/src/models/assets.model";
import { ExchangeRate } from "@/../../../back/node_modules/.prisma/client/index";

type Store = {
  assets: Asset[],
  rates: ExchangeRate[],
  isAssetsLoading: boolean,
  isRatesLoading: boolean,
  setAssets: (assets: Asset[]) => void,
  setRates: (rates: ExchangeRate[]) => void,
  startAssetsLoading: () => void,
  startRatesLoading: () => void,
}

export const useStore = create<Store>(set => ({
  assets: [],
  rates: [],
  isAssetsLoading: false,
  isRatesLoading: false,
  setAssets: (assets: Asset[]) => {
    console.log('setAssets:', assets);
    return set({ assets, isAssetsLoading: false });
  },
  setRates: (rates: ExchangeRate[]) => {
    console.log('setRates:', rates);
    return set({ rates, isRatesLoading: false });
  },
  startRatesLoading: () => set({ isRatesLoading: true }),
  startAssetsLoading: () => set({ isAssetsLoading: true }),
}))

