import { create } from "zustand";

const useLikeStore = create((set) => ({
    like: [],

    // Mahsulotni yoqtirish
    addToLike: (product) =>
        set((state) => {
            const isExist = state.like.some((item) => item.id === product.id);
            if (isExist) return state; // Agar allaqachon mavjud bo‘lsa, qo‘shmaydi
            return { like: [...state.like, product] };
        }),

    // Mahsulotni yoqtirishdan chiqarish
    removeFromLike: (id) =>
        set((state) => ({
            like: state.like.filter((item) => item.id !== id),
        })),

    // Tekshirish (mahsulot yoqtirilganmi?)
    isLiked: (id) => (state) => state.like.some((item) => item.id === id),
}));

export default useLikeStore;
