"use client";
import useCartStore from "@/store/useCartStore";
import useLikeStore from "@/store/useLikeStore";
import axios from "axios";
import { Heart } from "lucide-react";
import { MdAddShoppingCart } from "react-icons/md";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Products = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const addToCart = useCartStore((state) => state.addToCart);
    const addToLike = useLikeStore((state) => state.addToLike);
    const isLiked = useLikeStore((state) => state.isLiked);

    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products");
                setData(res?.data?.products);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getdata();
    }, []);

    return (
        <div className="container max-w-7xl mx-auto px-6">
            <h1 className="text-2xl font-bold mb-4">Products</h1>

            {loading ? (
                <p>Yuklanmoqda...</p>
            ) : (
                <div className="grid grid-cols-6 gap-6">
                    {data?.map((product) => (
                        <div key={product.id} className="border p-4 rounded-md shadow-md">
                            {/* Heart tugmasi */}
                            <div className="flex justify-end">
                                <button
                                    onClick={() => addToLike(product)}
                                    className={`p-2 rounded-full transition-colors 
                                        ${isLiked(product.id) ? "bg-gray-200 " : "bg-red-200 text-red-400"}`}
                                >
                                    <Heart size={24} />
                                </button>
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

                            <button onClick={() => addToCart(product)} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md flex items-center gap-2">
                                <MdAddShoppingCart />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
