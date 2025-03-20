"use client";
import useCartStore from "@/store/useCartStore";
import useLikeStore from "@/store/useLikeStore";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

const Cart = () => {
    const cart = useCartStore((store) => store.cart);
    const removeFromCart = useCartStore((store) => store.removeFromCart);
    const addToLike = useLikeStore((store) => store.addToLike);

    return (
        <div className="container max-w-7xl mx-auto px-6">
            <h1 className="text-2xl font-bold mb-4">Savat</h1>

            {cart.length === 0 ? (
                <p>Savat bo‘sh</p>
            ) : (
                <div className="grid grid-cols-3 gap-6">
                    {cart.map((product) => (
                        <div key={product.id} className="border p-4 rounded-md shadow-md">
                            <div className="flex justify-end cursor-pointer text-gray-500 hover:text-gray-700">
                                <Heart
                                    onClick={() => addToLike(product)}
                                    className="text-blue-400"
                                    size={20}
                                />
                            </div>
                            <div className="relative w-full p-5 h-[200px]">
                                <Image
                                    src={product.images[0]}
                                    alt="product image"
                                    width={150}
                                    height={150}
                                    className="rounded-md"
                                />
                            </div>
                            <h2 className="text-sm font-light mt-2">{product.title}</h2>

                            <button
                                onClick={() => removeFromCart(product.id)}
                                className="mt-2 bg-red-500 text-white py-2 px-4 rounded-md"
                            >
                                <ShoppingCart className="inline-block mr-2" /> Olib tashlash
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
