import type React from "react"

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="py-4 sm:py-6">{children}</main>
}
