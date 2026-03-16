"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import LoginButton from "@/components/auth/googleAuth";
import { BrandButton } from "@/components/layout/Button";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container grid grid-cols-3 h-16 items-center">
        {/* Left: Logo Area with Animated Button */}
        <div className="flex items-center pl-4">
          <Link href="/">
            <BrandButton />
          </Link>
        </div>

        {/* Center: Nav */}
        <nav className="hidden md:flex items-center justify-center gap-6 text-base font-semibold">
          <Link href="/tests" className="group relative px-4 py-2 rounded-md transition-all duration-300 text-foreground hover:bg-primary hover:text-primary-foreground hover:rounded-full hover:scale-[1.07] hover:-translate-y-1 hover:shadow-xl active:scale-95">
            <span className="inline-block group-hover:scale-110 transition-all">Tests</span>
            {/* Notification Dot */}
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent animate-pulse" />
          </Link>
          <Link href="/refer-earn" className="group px-4 py-2 rounded-md transition-all duration-300 text-foreground hover:bg-primary hover:text-primary-foreground hover:rounded-full hover:scale-[1.07] hover:-translate-y-1 hover:shadow-xl active:scale-95">
            <span className="inline-block group-hover:scale-110 transition-all">Refer &amp; Earn</span>
          </Link>
          <Link href="/leaderboard" className="group px-4 py-2 rounded-md transition-all duration-300 text-foreground hover:bg-primary hover:text-primary-foreground hover:rounded-full hover:scale-[1.07] hover:-translate-y-1 hover:shadow-xl active:scale-95">
            <span className="inline-block group-hover:scale-110 transition-all">Leaderboard</span>
          </Link>
          <Link href="/customize" className="group px-4 py-2 rounded-md transition-all duration-300 text-foreground hover:bg-primary hover:text-primary-foreground hover:rounded-full hover:scale-[1.07] hover:-translate-y-1 hover:shadow-xl active:scale-95">
            <span className="inline-block group-hover:scale-110 transition-all">Customize</span>
          </Link>
        </nav>

        {/* Right: Auth buttons */}
        <div className="flex items-center justify-end gap-4 pr-4">
          {session ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 border border-input rounded-full bg-muted/30 transition-all duration-300 hover:scale-[1.05] hover:shadow-md">
                {session.user?.image && (
                  <img 
                    src={session.user.image} 
                    alt={session.user.name || "User"} 
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 rounded-full border border-background"
                  />
                )}
                <span className="text-sm font-bold text-foreground">{session.user?.name}</span>
              </div>
              <Button onClick={() => signOut()} className="group px-4 py-2 rounded-full border border-input bg-transparent text-base font-semibold text-foreground transition-all duration-300 hover:bg-accent hover:text-white hover:scale-[1.07] hover:-translate-y-1 hover:shadow-xl active:scale-95">
                <span className="group-hover:scale-110 transition-all">Sign Out</span>
              </Button>
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
}
