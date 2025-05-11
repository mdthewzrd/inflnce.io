import type React from "react"
import Header from "@/components/header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-4 sm:py-6">{children}</main>
    </>
  )
}
