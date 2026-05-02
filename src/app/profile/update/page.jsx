"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Image as ImageIcon, CheckCircle, ArrowLeft, Loader2 } from "lucide-react";
import { useSession, updateUser } from "@/src/lib/auth-client";
import { motion } from "motion/react";
import { redirect } from "next/navigation";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // Handle initialization
  useState(() => {
    if (session) {
      setName(session.user.name);
      setImage(session.user.image || "");
    }
  }, [session]);

  if (isPending) return null;
  if (!session) redirect("/login");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const { error } = await updateUser({
      name,
      image,
    });

    if (error) {
      alert("Update failed: " + error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      setTimeout(() => router.push("/profile"), 1500);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-sm">
       <button 
        onClick={() => router.back()}
        className="flex items-center space-x-2 text-gray-500 hover:text-orange-600 font-bold mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Go Back</span>
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] shadow-2xl p-10 border border-orange-50"
      >
        <div className="mb-10">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Update Information</h1>
          <p className="text-gray-500 font-medium">Keep your summer profile fresh and updated</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">New Display Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-100 text-gray-900 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 rounded-2xl py-4 pl-12 pr-4 transition-all outline-none font-bold"
                placeholder="Ex. Sunny John"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">New Profile Image URL</label>
            <div className="relative">
              <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 text-gray-900 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 rounded-2xl py-4 pl-12 pr-4 transition-all outline-none font-bold"
                placeholder="https://example.com/me.jpg"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-4 pt-4">
            <button
                type="submit"
                disabled={loading || success}
                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-orange-600 disabled:bg-gray-300 transition-all active:scale-95 shadow-xl flex items-center justify-center space-x-3"
            >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                    success ? <div className="flex items-center space-x-2"><CheckCircle className="w-6 h-6 text-green-400" /><span>Profile Updated!</span></div> : <span>Update Information</span>
                )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
