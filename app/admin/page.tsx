"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/admin/dashboard")
  }, [router])

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p>Redirecting to admin dashboard...</p>
    </div>
  )
}
