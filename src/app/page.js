"use client";

import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Truck, Droplets, Sun, Sparkles } from "lucide-react";
import ProductCard from "@/src/components/ProductCard";
import products from "@/src/data/products.json";
import { motion } from "motion/react";
import Lottie from "lottie-react";

export default function Home() {
  const popularProducts = products.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
            alt="Summer Beach"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <span className="inline-flex items-center space-x-2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
              <Zap className="w-4 h-4" />
              <span>Hot Summer Sale</span>
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              SUMMER <br />
              <span className="text-orange-500">ESSENTIALS</span>
            </h1>
            <p className="text-xl text-gray-200 font-medium max-w-lg leading-relaxed">
               Up to <span className="text-orange-400 font-black text-2xl">50% OFF</span> on all high-protection gear and seasonal outfits.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/products"
                className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/20 flex items-center space-x-2 group"
              >
                <span>Shop the Sale</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <div className="hidden lg:block w-96 h-96">
            <Lottie 
                animationData={{
                    v: "5.5.7",
                    fr: 30,
                    ip: 0,
                    op: 60,
                    w: 500,
                    h: 500,
                    nm: "Summer Sun",
                    ddd: 0,
                    assets: [],
                    layers: [
                        {
                            ddd: 0,
                            ind: 1,
                            ty: 4,
                            nm: "Sun",
                            sr: 1,
                            ks: {
                                o: { k: 100 },
                                r: { k: [{ t: 0, s: [0] }, { t: 60, s: [360] }] },
                                p: { k: [250, 250] },
                                a: { k: [0, 0] },
                                s: { k: [100, 100] }
                            },
                            shapes: [
                                {
                                    ty: "gr",
                                    it: [
                                        { ty: "el", s: { k: [200, 200] }, p: { k: [0, 0] }, nm: "Circle" },
                                        { ty: "fl", c: { k: [1, 0.64, 0, 1] }, o: { k: 100 }, nm: "Fill" }
                                    ]
                                }
                            ]
                        }
                    ]
                }} 
                loop={true} 
            />
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">Curated for you</span>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Popular Products</h2>
          </div>
          <Link href="/products" className="text-orange-600 font-bold flex items-center space-x-2 hover:underline">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Summer Care Tips */}
      <section id="tips" className="bg-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight flex items-center justify-center space-x-3">
              <Sparkles className="w-8 h-8 text-orange-500" />
              <span>Summer Care Tips</span>
            </h2>
            <p className="text-gray-600 font-medium">Keep your skin glowing and your body hydrated during the golden season.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Sun className="w-8 h-8" />, 
                title: "Apply Sunscreen", 
                desc: "Apply SPF 50+ every 2 hours, especially after swimming. Protect your skin from harmful UV rays." 
              },
              { 
                icon: <Droplets className="w-8 h-8" />, 
                title: "Stay Hydrated", 
                desc: "Drink at least 3-4 liters of water daily. Use a spray mist to stay cool and refreshed." 
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Light Outfits", 
                desc: "Wear linen and organic cotton to allow your skin to breathe and reduce heat absorption." 
              },
            ].map((tip, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Brands */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-[0.2em]">Partnering Brands</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["SunShade", "PureGuard", "IslandVibe", "AquaFlow"].map((brand) => (
            <div 
              key={brand}
              className="h-32 flex items-center justify-center bg-gray-50 rounded-2xl grayscale hover:grayscale-0 transition-all border border-gray-100 group"
            >
              <span className="text-3xl font-black text-gray-300 group-hover:text-orange-500 transition-colors uppercase italic">{brand}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
