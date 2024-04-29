import { create } from 'zustand';

export const ProjectSlideStore = create((set) => ({
  isClicked: false,
  setIsClicked: (isClicked: boolean) => set({ isClicked }),
}));
