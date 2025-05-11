import type React from "react"
// This is just a temporary file to check the content of app/layout.tsx
// The actual layout.tsx file should not include the Header component
// since it's already included in the MemberLayout component

// Example of what app/layout.tsx should look like:
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "High Roller Platform",
  description: "Digital marketing services platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
