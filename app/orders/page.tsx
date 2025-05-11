"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Clock, CheckCircle, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function OrdersPage() {
  const [user, setUser] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true

    // Check for user cookie
    const checkUserCookie = () => {
      const cookies = document.cookie.split(";")
      const userCookie = cookies.find((cookie) => cookie.trim().startsWith("user="))

      if (userCookie) {
        const userEmail = decodeURIComponent(userCookie.split("=")[1])
        if (mountedRef.current) {
          setUser(userEmail)
          setIsLoading(false)
        }
      } else {
        if (mountedRef.current) {
          setIsLoading(false)
          router.push("/login")
        }
      }
    }

    // Check immediately
    checkUserCookie()

    return () => {
      mountedRef.current = false
    }
  }, [router])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-text-secondary">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Router will handle redirect
  }

  return (
    <div className="container mx-auto px-4 py-4 sm:py-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">My Orders</h1>

      <div className="bg-background-secondary rounded-lg p-4 sm:p-6 border border-border mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4 sm:gap-0">
          <h2 className="text-lg sm:text-xl font-bold">Active Orders</h2>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-initial bg-background-tertiary hover:bg-background text-text-secondary px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium">
              All
            </button>
            <button className="flex-1 sm:flex-initial bg-green-dark text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium">
              Active
            </button>
            <button className="flex-1 sm:flex-initial bg-background-tertiary hover:bg-background text-text-secondary px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium">
              Completed
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-background-tertiary p-3 sm:p-4 rounded-lg border border-border">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded">
                    In Progress
                  </span>
                  <span className="text-text-tertiary text-xs sm:text-sm">Order #INF-2023-1458</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mt-1">Instagram Professional Package</h3>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <div className="text-text-tertiary text-xs sm:text-sm">Ordered on</div>
                <div className="text-sm">April 28, 2023</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-text-tertiary" />
                <span className="text-text-secondary text-xs sm:text-sm">15 days remaining</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-light">✓</span>
                <span className="text-text-secondary text-xs sm:text-sm">300-400+ likes per post</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-light">✓</span>
                <span className="text-text-secondary text-xs sm:text-sm">3,000-4,000+ views per post</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="w-full sm:w-40 bg-background h-2 rounded-full overflow-hidden">
                  <div className="bg-green-medium h-full rounded-full" style={{ width: "50%" }}></div>
                </div>
                <span className="text-text-secondary text-xs sm:text-sm whitespace-nowrap">50% Complete</span>
              </div>
              <Link
                href="/orders/INF-2023-1458"
                className="text-green-light hover:text-green-medium transition-colors text-sm"
              >
                View Details
              </Link>
            </div>
          </div>

          <div className="bg-background-tertiary p-3 sm:p-4 rounded-lg border border-border">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded">
                    In Progress
                  </span>
                  <span className="text-text-tertiary text-xs sm:text-sm">Order #INF-2023-1459</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mt-1">TikTok Account Recovery</h3>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <div className="text-text-tertiary text-xs sm:text-sm">Ordered on</div>
                <div className="text-sm">April 29, 2023</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-text-tertiary" />
                <span className="text-text-secondary text-xs sm:text-sm">3 days remaining</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <span className="text-text-secondary text-xs sm:text-sm">Additional information required</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="w-full sm:w-40 bg-background h-2 rounded-full overflow-hidden">
                  <div className="bg-yellow-400 h-full rounded-full" style={{ width: "30%" }}></div>
                </div>
                <span className="text-text-secondary text-xs sm:text-sm whitespace-nowrap">30% Complete</span>
              </div>
              <Link
                href="/orders/INF-2023-1459"
                className="text-green-light hover:text-green-medium transition-colors text-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background-secondary rounded-lg p-4 sm:p-6 border border-border">
        <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Completed Orders</h2>

        <div className="space-y-4">
          <div className="bg-background-tertiary p-3 sm:p-4 rounded-lg border border-border">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm bg-green-dark/30 text-green-light px-2 py-0.5 rounded">
                    Completed
                  </span>
                  <span className="text-text-tertiary text-xs sm:text-sm">Order #INF-2023-1450</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mt-1">YouTube Professional Post Campaign</h3>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <div className="text-text-tertiary text-xs sm:text-sm">Completed on</div>
                <div className="text-sm">April 20, 2023</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-light" />
                <span className="text-text-secondary text-xs sm:text-sm">10,500 views delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-light" />
                <span className="text-text-secondary text-xs sm:text-sm">950 likes delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-light" />
                <span className="text-text-secondary text-xs sm:text-sm">65 comments delivered</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="w-full sm:w-40 bg-background h-2 rounded-full overflow-hidden">
                  <div className="bg-green-light h-full rounded-full" style={{ width: "100%" }}></div>
                </div>
                <span className="text-text-secondary text-xs sm:text-sm whitespace-nowrap">100% Complete</span>
              </div>
              <Link
                href="/orders/INF-2023-1450"
                className="text-green-light hover:text-green-medium transition-colors text-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
