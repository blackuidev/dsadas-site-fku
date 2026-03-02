import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/lib/data';

interface WishlistState {
    items: Product[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: string) => void;
}

export const useWishlistStore = create<WishlistState>()(
    persist(
        (set) => ({
            items: [],
            addToWishlist: (product) =>
                set((state) => {
                    if (!state.items.some(item => item.id === product.id)) {
                        return { items: [...state.items, product] };
                    }
                    return state;
                }),
            removeFromWishlist: (productId) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== productId),
                })),
        }),
        {
            name: 'wishlist-storage',
        }
    )
);
