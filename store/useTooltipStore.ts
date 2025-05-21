import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TooltipStore {
  showTooltip: boolean;
  hideTooltip: () => void;
  resetTooltip: () => void;
}

export const useTooltipStore = create<TooltipStore>()(
  persist(
    (set) => ({
      showTooltip: true, // Initially, the tooltip is visible
      hideTooltip: () => set({ showTooltip: false }), // Hide tooltip
      resetTooltip: () => set({ showTooltip: true }), // Reset if needed
    }),
    {
      name: "tooltip-storage", // LocalStorage key
    }
  )
);
