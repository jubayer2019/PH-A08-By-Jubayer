import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function ProductCard({ id, name, price, rating, image, brand, category }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{brand}</p>
            <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">{name}</h3>
          </div>
          <div className="flex items-center bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-xs font-bold">
            <Star className="w-3 h-3 fill-orange-500 text-orange-500 mr-1" />
            {rating}
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-black text-gray-900">${price}</span>
          <Link
            href={`/products/${id}`}
            className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-orange-600 transition-colors group/btn"
          >
            <span>Details</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
