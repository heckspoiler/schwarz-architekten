import { create } from 'zustand';

export const ImpressumVisible = create((set) => ({
  isVisible: false,
  setIsVisible: (isVisible: boolean) => set({ isVisible }),
}));
