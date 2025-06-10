// store/currencyStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CurrencyState = {
  currency: string;
  setCurrency: (currency: string) => void;
};

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: "SAR",
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: "currency-store", // key in localStorage
    }
  )
);

console.log(useCurrencyStore.getState().currency, "currency setted");

export default useCurrencyStore;