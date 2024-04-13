import { create } from 'zustand';

export const SliderStore = create((set) => ({
  activeView: 'slide',
  setActiveView: (activeView: string) => set({ activeView }),
}));
