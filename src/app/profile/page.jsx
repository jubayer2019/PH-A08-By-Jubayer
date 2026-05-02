"use client";

import { useSession } from "@/src/lib/auth-client";
import Link from "next/link";
import { User, Mail, Calendar, Edit3, ArrowRight, Shield } from "lucide-react";
import { motion } from "motion/react";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();

  if (isPending) return null;
  if (!session) redirect("/login");

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-sm">
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-orange-100/50 overflow-hidden border border-orange-50">
        {/* Profile Header Background */}
        <div className="h-48 bg-gradient-to-r from-orange-500 to-yellow-400 relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -bottom-16 left-12">
                <div className="relative group">
                    <img
                        src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}`}
                        alt={session.user.name}
                        className="w-32 h-32 rounded-3xl object-cover ring-8 ring-white shadow-xl"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-center justify-center">
                        <User className="text-white w-8 h-8" />
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-20 px-12 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">{session.user.name}</h1>
                <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest">Premium Member</span>
              </div>
              <p className="text-gray-500 font-medium text-lg">{session.user.email}</p>
            </div>
            
            <Link
              href="/profile/update"
              className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black flex items-center space-x-2 hover:bg-orange-600 transition-all active:scale-95 shadow-lg"
            >
              <Edit3 className="w-5 h-5" />
              <span>Edit Profile</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm"><Mail className="w-5 h-5 text-orange-500" /></div>
                <div>
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email Status</h4>
                    <p className="text-gray-900 font-bold">Verified Account</p>
                </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm"><Calendar className="w-5 h-5 text-orange-500" /></div>
                <div>
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Member Since</h4>
                    <p className="text-gray-900 font-bold">{new Date(session.user.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-orange-50 rounded-3xl border border-orange-100 relative overflow-hidden group">
              <Shield className="absolute -right-4 -bottom-4 w-32 h-32 text-orange-100 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-black text-gray-900">Security Checkup</h3>
                  <p className="text-gray-600 text-xs max-w-md font-medium leading-relaxed">
                      Your account is currently protected with better-auth standard security. Keep your information updated to ensure full access to summer perks.
                  </p>
                  <button className="text-orange-600 font-black text-sm flex items-center space-x-2 hover:translate-x-1 transition-transform">
                      <span>Enable 2FA</span>
                      <ArrowRight className="w-4 h-4" />
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
