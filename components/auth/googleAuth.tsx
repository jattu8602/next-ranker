"use client"

import { signIn } from "next-auth/react"

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="px-4 py-2 border border-foreground rounded transition-colors text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
    >
      Sign in with Google
    </button>
  )
}