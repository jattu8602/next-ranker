import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container grid grid-cols-3 h-16 items-center">
        {/* Left: Logo */}
        <div className="flex items-center pl-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-primary tracking-tight">
              Next-Ranker
            </span>
          </Link>
        </div>

        {/* Center: Nav */}
        <nav className="hidden md:flex items-center justify-center gap-10 text-base font-semibold">
          <Link href="/tests" className="transition-colors text-foreground/80 hover:text-foreground">
            Tests
          </Link>
          <Link href="/refer-earn" className="transition-colors text-foreground/80 hover:text-foreground">
            Refer &amp; Earn
          </Link>
          <Link href="/leaderboard" className="transition-colors text-foreground/80 hover:text-foreground">
            Leaderboard
          </Link>
          <Link href="/customize" className="transition-colors text-foreground/80 hover:text-foreground">
            Customize
          </Link>
        </nav>

        {/* Right: Auth buttons */}
        <div className="flex items-center justify-end gap-4 pr-4">
          <Button variant="ghost" size="sm" className="text-base font-semibold">
            Login
          </Button>
          <Button size="sm" className="text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
