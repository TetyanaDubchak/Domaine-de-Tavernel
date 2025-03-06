import { create } from "zustand";

export const useBasketStore = create((set) => ({

    isBasketOpen: false,
    
    openBasket: () => set({ isBasketOpen: true}),
    closeBasket: () => set({ isBasketOpen: false }),
}))