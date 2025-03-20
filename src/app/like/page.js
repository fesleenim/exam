"use client";
import useLikeStore from "@/store/useLikeStore";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const LikedProducts = () => {
    const like = useLikeStore((state) => state.like); // Yoqtirgan mahsulotlar ro‘yxati
    const removeFromLike = useLikeStore((state) => state.removeFromLike); // FUNKSIYA TO‘G‘RI OLINGANLIGINI TEKSHIRING

    return (
        <div className="container max-w-7xl mx-auto px-6">
            <h1 className="text-2xl font-bold mb-4">Yoqtirgan mahsulotlar</h1>

            {like.length === 0 ? (
                <p>Hali hech qanday mahsulot yoqtirilmagan.</p>
            ) : (
                <div className="grid grid-cols-6 gap-6">
                    {like.map((product) => (
                        <div key={product.id} className="border p-4 rounded-md shadow-md">
                            {/* Heart tugmasi (yoqtirishdan chiqarish) */}
                            <div className="flex justify-end cursor-pointer">
                                <Heart
                                    onClick={() => removeFromLike(product.id)}
                                    className="text-red-500"
                                    size={24}
                                />
                            </div>

                            <div className="relative w-full p-5 h-[200px]">
                                <Image
                                    src={product.images[0]}
                                    alt="product image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <h2 className="text-sm font-light mt-2">{product.title}</h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LikedProducts;
