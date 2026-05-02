"use client";

import products from "@/src/data/products.json";
import ProductCard from "@/src/components/ProductCard";
import { useState } from "react";
import { Search, SlidersHorizontal, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Accessories", "Apparel", "Skincare", "Outdoors"];

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-lg space-y-4">
            <div className="flex items-center space-x-2 text-orange-600 mb-2">
                <Sun className="w-6 h-6" />
                <span className="font-black uppercase tracking-[0.2em] text-xs">The Gallery</span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter">Everything for <br /><span className="text-orange-500 underline decoration-orange-200 decoration-8 underline-offset-8">Summer</span></h1>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">Browse our handpicked collection of high-performance seasonal gear designed to keep you cool and protected.</p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
              <input
                type="text"
                placeholder="Search sunglasses, outfits..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-4 focus:ring-orange-100 focus:bg-white focus:border-orange-200 transition-all w-full sm:w-80 font-bold text-sm"
              />
           </div>
           <div className="relative">
              <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-10 outline-none focus:ring-4 focus:ring-orange-100 focus:bg-white focus:border-orange-200 transition-all appearance-none font-bold text-gray-700 cursor-pointer text-sm"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
           </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4">
           <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-orange-200" />
           </div>
           <h3 className="text-2xl font-black text-gray-900">No results found</h3>
           <p className="text-gray-500 font-medium">Try adjusting your search or category filter for better results.</p>
        </div>
      )}
    </div>
  );
}
