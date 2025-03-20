import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],

    // Savatga qo‘shish
    addToCart: (product) =>
        set((state) => {
            const isExist = state.cart.some((item) => item.id === product.id);
            if (isExist) return state;
            return { cart: [...state.cart, product] };
        }),

    // Savatdan o‘chirish
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        })),
}));

export default useCartStore;
