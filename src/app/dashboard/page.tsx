"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { LogOut } from "lucide-react";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-nord-0 flex items-center justify-center">
        <span className="text-nord-4 font-black text-2xl animate-pulse tracking-tight">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nord-0 text-nord-6">
      <nav className="flex justify-between items-center p-6 border-b-4 border-nord-3">
        <a href="/" className="text-3xl font-black text-nord-8 border-4 border-nord-8 px-4 py-2 brutal-shadow">
          pfetch.me
        </a>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 px-6 py-2 bg-nord-3 text-nord-6 font-bold brutal-border brutal-shadow hover:bg-nord-2 transition-all"
        >
          <LogOut size={18} />
          Sign out
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center gap-6">
        <div className="w-20 h-20 brutal-border border-4 border-nord-8 bg-nord-1 brutal-shadow flex items-center justify-center text-4xl font-black text-nord-8">
          {user.displayName?.[0]?.toUpperCase() ?? "?"}
        </div>

        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-nord-4">
          Welcome back,<br />
          <span className="text-nord-8">{user.displayName ?? user.email}</span>
        </h1>

        <p className="text-nord-4 font-medium text-xl border-l-4 border-nord-14 pl-4 text-left max-w-xl">
          Your dashboard is coming soon. This is just the beginning.
        </p>

        <div className="mt-8 brutal-border border-4 border-nord-3 bg-nord-1 px-8 py-6 text-left w-full max-w-xl">
          <p className="text-nord-3 text-sm font-bold uppercase tracking-widest mb-3">Signed in as</p>
          <p className="text-nord-6 font-bold text-lg">{user.email}</p>
        </div>
      </main>
    </div>
  );
}
