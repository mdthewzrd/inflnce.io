import type React from "react"

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="py-4 sm:py-6">{children}</main>
}
