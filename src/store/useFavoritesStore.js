import { create } from 'zustand';

export const useFavoritesStore = create((set) => ({
  items: [],
  add: (id) => set((s) => ({ items: Array.from(new Set([...s.items, id])) })),
  remove: (id) => set((s) => ({ items: s.items.filter(x => x !== id) })),
  toggle: (id) => set((s) => ({
    items: s.items.includes(id) ? s.items.filter(x => x !== id) : [...s.items, id]
  })),
}));
