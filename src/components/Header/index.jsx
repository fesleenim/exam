"use client";
import { Search, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import useLikeStore from "@/store/useLikeStore";
import useCartStore from "@/store/useCartStore";

const Header = () => {
    const likeCount = useLikeStore((state) => state.like.length);
    const cartCount = useCartStore((state) => state.cart.length); // Savatchadagi mahsulotlar soni

    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="container max-w-7xl mx-auto flex items-center justify-between px-6">
                <Link href="/"><div className="text-2xl font-bold text-blue-600">EBR</div></Link>

                <div className="flex items-center border rounded-full px-4 py-2 w-1/3">
                    <Search size={20} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Qidirish..."
                        className="ml-2 w-full outline-none"
                    />
                </div>

                <div className="flex items-center gap-4 relative">
                    {/* Yoqtirganlar */}
                    <Link href="/like" className="relative">
                        <Heart size={28} className="text-gray-700 cursor-pointer" />
                        {likeCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                                {likeCount}
                            </span>
                        )}
                    </Link>

                    {/* Savatcha */}
                    <Link href="/cart" className="relative">
                        <ShoppingCart size={28} className="text-gray-700 cursor-pointer" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2 py-1">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
