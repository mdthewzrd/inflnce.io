import type React from "react"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="container mx-auto px-4 py-4 sm:py-6">{children}</main>
}
