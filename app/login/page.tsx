"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [registered, setRegistered] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Auto-redirect to social media page since login is no longer required
  useEffect(() => {
    router.push("/social-media")
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Admin accounts
      const adminAccounts = [
        { email: "lucmikebiz1@gmail.com", password: "highroller1" },
        { email: "mikedurante13@gmail.com", password: "highroller1" },
        { email: "lucasgenova1@gmail.com", password: "highroller1" },
      ]

      // Check if credentials match any admin account
      const matchedAdmin = adminAccounts.find((account) => account.email === email && account.password === password)

      if (matchedAdmin) {
        // Set cookie for authentication with proper settings for production
        const isProduction = process.env.NODE_ENV === "production" || window.location.hostname !== "localhost"
        document.cookie = `user=${email}; path=/; max-age=86400${isProduction ? "; SameSite=Lax" : ""}`

        // Redirect to dashboard or requested page
        const redirect = searchParams?.get("callbackUrl") || "/social-media"
        router.push(redirect)
      } else {
        setError("Invalid email or password")
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("An error occurred during login. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6 bg-background-secondary p-8 rounded-lg border border-border">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold text-text-primary">Login</h1>
          <p className="text-text-secondary mt-2">Enter your credentials to access your account</p>
        </div>

        {error && <div className="bg-red-900/20 border border-red-900 text-red-400 p-4 rounded-md">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-background-tertiary border border-border rounded-md text-text-primary focus:outline-none focus:ring-1 focus:ring-green-medium"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-secondary">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-background-tertiary border border-border rounded-md text-text-primary focus:outline-none focus:ring-1 focus:ring-green-medium"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-medium hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-light"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-text-tertiary">
            Don't have an account?{" "}
            <Link href="/register" className="text-green-medium hover:text-green-light">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
