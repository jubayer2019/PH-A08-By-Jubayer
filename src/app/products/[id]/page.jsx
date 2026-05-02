"use client";

import Link from "next/link";
import { useParams, redirect } from "next/navigation";
import { Star, Truck, ShieldCheck, Heart, ArrowLeft, ShoppingBag } from "lucide-react";
import products from "@/src/data/products.json";
import { motion } from "framer-motion";
import { useSession } from "@/src/lib/auth-client";

export default function ProductDetailsPage() {
  const params = useParams(); // ✅ FIX: no duplicate variable name
  const id = params?.id;

  const { data: session, isPending } = useSession();

  if (isPending) return null;
  if (!session) redirect("/login");

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found.</h2>
        <Link href="/products" className="text-orange-600 font-bold mt-4 block">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/products"
        className="inline-flex items-center space-x-2 text-gray-500 hover:text-orange-600 font-medium mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Gallery</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-square rounded-[2rem] overflow-hidden bg-gray-50 shadow-sm border border-orange-50"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Product Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                {product.category}
              </span>

              <div className="flex items-center bg-gray-50 px-2 py-1 rounded-lg text-sm text-gray-600 font-bold">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                {product.rating}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              {product.name}
            </h1>

            <p className="text-lg text-orange-600 font-black tracking-tight">
              {product.brand}
            </p>
          </div>

          <div className="flex items-center space-x-4 pb-8 border-b border-gray-100">
            <span className="text-5xl font-black text-gray-900">
              ${product.price}
            </span>

            <span className="text-gray-400 font-medium line-through decoration-orange-500/50 decoration-2">
              ${(product.price * 1.5).toFixed(0)}
            </span>

            <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold text-xs">
              SUMMER_OFFER_50
            </span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-2xl flex items-center space-x-3">
              <Truck className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-gray-700">
                Fast Delivery
              </span>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-gray-700">
                1 Year Warranty
              </span>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <button className="flex-1 bg-gray-900 text-white py-5 rounded-3xl font-black text-lg hover:bg-orange-600 transition-all flex items-center justify-center space-x-3 shadow-xl active:scale-95">
              <ShoppingBag className="w-6 h-6" />
              <span>Purchase Now</span>
            </button>

            <button className="w-16 h-16 border-2 border-gray-100 rounded-3xl flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 transition-all active:scale-95">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          <div className="pt-4">
            <p className="text-sm text-gray-400 font-medium italic">
              * Only {product.stock} items left in stock. Order soon to beat the heat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}