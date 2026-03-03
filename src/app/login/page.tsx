"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-nord-0 flex items-center justify-center">
        <span className="text-nord-4 font-black text-2xl animate-pulse tracking-tight">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nord-0 text-nord-6 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-16">
          <a href="/" className="text-3xl font-black text-nord-8 border-4 border-nord-8 px-4 py-2 brutal-shadow">
            pfetch.me
          </a>
          <a href="/" className="flex items-center gap-2 text-nord-4 font-bold hover:text-nord-8 transition-colors text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
            </svg>
            Back
          </a>
        </div>

        <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4 text-nord-4">
          Sign in.
        </h1>
        <p className="text-nord-4 font-medium text-lg mb-12 border-l-4 border-nord-9 pl-4">
          Continue to your pfetch dashboard.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-4 bg-nord-1 text-nord-6 font-bold text-lg py-4 px-6 brutal-border brutal-shadow hover:bg-nord-2 transition-all"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#88C0D0" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#A3BE8C" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#EBCB8B" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#BF616A" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <p className="text-nord-3 text-sm font-medium mt-8 text-center">
          By signing in, you agree to pfetch.me&apos;s terms of service.
        </p>
      </div>
    </div>
  );
}
