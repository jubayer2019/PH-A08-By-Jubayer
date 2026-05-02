"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, UserPlus, Image as ImageIcon, Chrome, AlertCircle } from "lucide-react";
import { signUp, signIn } from "@/src/lib/auth-client";
import { motion } from "motion/react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: signUpError } = await signUp.email({
      name,
      email,
      image: photoUrl,
      password,
    });

    if (signUpError) {
      setError(signUpError.message || "Registration failed. Try again.");
      setLoading(false);
    } else {
      router.push("/login");
    }
  };

  const signInWithGoogle = async () => {
    await signIn.social({
        provider: "google",
        callbackURL: "/"
    });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-20 relative overflow-hidden text-sm">
        {/* Decorative Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl -z-10 opacity-50"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl shadow-orange-100 p-8 border border-orange-50"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Create Account</h1>
          <p className="text-gray-500 font-medium">Join the SunCart community</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
           {error && (
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-red-50 text-red-600 p-4 rounded-2xl flex items-center space-x-3 text-xs font-medium border border-red-100"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-100 text-gray-900 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 rounded-2xl py-4 pl-12 pr-4 transition-all outline-none font-medium text-sm"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-100 text-gray-900 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 rounded-2xl py-4 pl-12 pr-4 transition-all outline-none font-medium text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Photo URL (Optional)</label>
            <div className="relative">
              <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 text-gray-900 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 rounded-2xl py-4 pl-12 pr-4 transition-all outline-none font-medium text-sm"
                placeholder="https://example.com/photo.jpg"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-100 text-gray-900 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 rounded-2xl py-4 pl-12 pr-4 transition-all outline-none font-medium text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white rounded-2xl py-4 font-black text-lg hover:bg-orange-600 disabled:bg-gray-400 transition-all active:scale-95 shadow-lg shadow-gray-200 flex items-center justify-center space-x-2"
          >
             {loading ? <span>Wait...</span> : (
              <>
                <UserPlus className="w-5 h-5" />
                <span>Register</span>
              </>
            )}
          </button>
        </form>

        <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black"><span className="bg-white px-4 text-gray-400">Or join with</span></div>
        </div>

        <button
            onClick={signInWithGoogle}
            className="w-full bg-white border border-gray-200 text-gray-700 rounded-2xl py-4 font-bold hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center space-x-3 mb-8"
        >
            <Chrome className="w-5 h-5 text-orange-500" />
            <span>Google One-Tap</span>
        </button>

        <p className="text-center text-sm font-medium text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-600 font-bold hover:underline">
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
