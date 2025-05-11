"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Star,
  Trash2,
  Instagram,
  Youtube,
  FileText,
  PenToolIcon as Tool,
  Code,
  Linkedin,
  Twitter,
  Music,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import MemberLayout from "@/components/member-layout"

type FavoriteItem = {
  id: string
  title: string
  price: string
  type: string
  category: string
  platform?: string
  platformSpecific?: string
  icon?: React.ReactNode
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Function to load favorites from localStorage
  const loadFavorites = () => {
    if (typeof window !== "undefined") {
      const storedFavorites = localStorage.getItem("favorites")
      if (storedFavorites) {
        try {
          const parsedFavorites = JSON.parse(storedFavorites)
          // Convert object to array
          const favoritesArray = Object.keys(parsedFavorites).map((key) => {
            const item = parsedFavorites[key]

            // Determine icon based on platform and category
            let icon = <Tool className="w-5 h-5 text-white" />

            if (item.platformSpecific) {
              if (item.platformSpecific === "instagram") {
                icon = <Instagram className="w-5 h-5 text-white" />
              } else if (item.platformSpecific === "youtube") {
                icon = <Youtube className="w-5 h-5 text-white" />
              } else if (item.platformSpecific === "twitter") {
                icon = <Twitter className="w-5 h-5 text-white" />
              } else if (item.platformSpecific === "linkedin") {
                icon = <Linkedin className="w-5 h-5 text-white" />
              } else if (item.platformSpecific === "tiktok") {
                icon = <MessageCircle className="w-5 h-5 text-white" />
              } else if (item.platformSpecific === "spotify") {
                icon = <Music className="w-5 h-5 text-white" />
              }
            } else if (item.platform) {
              if (item.platform.includes("instagram")) {
                icon = <Instagram className="w-5 h-5 text-white" />
              } else if (item.platform.includes("youtube")) {
                icon = <Youtube className="w-5 h-5 text-white" />
              } else if (item.platform.includes("twitter")) {
                icon = <Twitter className="w-5 h-5 text-white" />
              } else if (item.platform.includes("linkedin")) {
                icon = <Linkedin className="w-5 h-5 text-white" />
              } else if (item.platform.includes("publications")) {
                icon = <FileText className="w-5 h-5 text-white" />
              } else if (item.platform.includes("tools")) {
                if (item.title.toLowerCase().includes("web") || item.title.toLowerCase().includes("develop")) {
                  icon = <Code className="w-5 h-5 text-white" />
                } else {
                  icon = <Tool className="w-5 h-5 text-white" />
                }
              }
            } else if (item.type === "publication") {
              icon = <FileText className="w-5 h-5 text-white" />
            }

            return {
              id: key,
              title: item.title,
              price: item.price,
              type: item.type,
              category: item.category || "social-media", // Default category
              platform: item.platform,
              platformSpecific: item.platformSpecific,
              icon,
            }
          })

          setFavorites(favoritesArray)
          return
        } catch (e) {
          console.error("Error parsing favorites:", e)
          setFavorites([])
        }
      } else {
        setFavorites([])
      }
    }
  }

  useEffect(() => {
    // Load favorites when component mounts
    loadFavorites()

    // Add event listener for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "favorites") {
        loadFavorites()
      }
    }

    window.addEventListener("storage", handleStorageChange)

    // Custom event for same-tab updates
    const handleCustomEvent = () => loadFavorites()
    window.addEventListener("favoritesUpdated", handleCustomEvent)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("favoritesUpdated", handleCustomEvent)
    }
  }, [])

  const removeFavorite = (id: string) => {
    // Update state
    setFavorites(favorites.filter((item) => item.id !== id))

    // Update localStorage
    if (typeof window !== "undefined") {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "{}")
      delete storedFavorites[id]
      localStorage.setItem("favorites", JSON.stringify(storedFavorites))

      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event("favoritesUpdated"))
    }
  }

  const filteredFavorites =
    activeCategory === "all" ? favorites : favorites.filter((item) => item.category === activeCategory)

  const getCategoryBgColor = (category: string, platform?: string, platformSpecific?: string) => {
    if (platformSpecific) {
      if (platformSpecific === "instagram") return "bg-gradient-to-r from-purple-600 to-pink-500"
      if (platformSpecific === "youtube") return "bg-red-600"
      if (platformSpecific === "twitter") return "bg-blue-500"
      if (platformSpecific === "linkedin") return "bg-blue-700"
      if (platformSpecific === "tiktok") return "bg-black"
      if (platformSpecific === "spotify") return "bg-green-600"
    } else if (platform) {
      if (platform.includes("instagram")) return "bg-gradient-to-r from-purple-600 to-pink-500"
      if (platform.includes("youtube")) return "bg-red-600"
      if (platform.includes("twitter")) return "bg-blue-500"
      if (platform.includes("linkedin")) return "bg-blue-700"
      if (platform.includes("tiktok")) return "bg-black"
      if (platform.includes("spotify")) return "bg-green-600"
    }

    switch (category) {
      case "social-media":
        return "bg-gradient-to-r from-instagram-from to-instagram-to"
      case "publications":
        return "bg-green-dark"
      case "tools":
        return "bg-blue-900"
      default:
        return "bg-background-tertiary"
    }
  }

  // Get platform-specific URL for the View button
  const getPlatformUrl = (item: FavoriteItem) => {
    if (item.platformSpecific && item.platform) {
      // If we have a specific platform, use it
      return `/${item.platform}/${item.platformSpecific}`
    } else if (item.platform) {
      return `/${item.platform}`
    }

    // Otherwise, use a default based on category
    switch (item.category) {
      case "social-media":
        return "/social-media"
      case "publications":
        return "/publications"
      case "tools":
        return "/tools"
      default:
        return "/"
    }
  }

  return (
    <MemberLayout>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <Star className="w-6 h-6 text-yellow-500" />
        </div>
        <h1 className="text-2xl font-bold">My Favorites</h1>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-green-dark text-white"
              : "bg-background-tertiary text-text-secondary hover:text-text-primary"
          }`}
        >
          All Favorites
        </button>
        <button
          onClick={() => setActiveCategory("social-media")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeCategory === "social-media"
              ? "bg-green-dark text-white"
              : "bg-background-tertiary text-text-secondary hover:text-text-primary"
          }`}
        >
          Social Media
        </button>
        <button
          onClick={() => setActiveCategory("publications")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeCategory === "publications"
              ? "bg-green-dark text-white"
              : "bg-background-tertiary text-text-secondary hover:text-text-primary"
          }`}
        >
          Publications
        </button>
        <button
          onClick={() => setActiveCategory("tools")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeCategory === "tools"
              ? "bg-green-dark text-white"
              : "bg-background-tertiary text-text-secondary hover:text-text-primary"
          }`}
        >
          Tools
        </button>
      </div>

      {filteredFavorites.length === 0 ? (
        <div className="bg-background-secondary rounded-lg p-6 border border-border text-center">
          <div className="w-16 h-16 rounded-full bg-background-tertiary flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-yellow-500 opacity-50" />
          </div>
          <h2 className="text-xl font-bold mb-2">No favorites yet</h2>
          <p className="text-text-secondary mb-4">
            Start adding favorites by clicking the star icon on any service, package, or tool.
          </p>
          <Link
            href="/"
            className="bg-green-medium hover:bg-green-dark text-white font-semibold py-2 px-6 rounded-md transition-colors inline-flex"
          >
            Browse Services
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFavorites.map((item) => (
            <div key={item.id} className="bg-background-secondary rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${getCategoryBgColor(
                      item.category,
                      item.platform,
                      item.platformSpecific,
                    )} flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-green-light font-medium">${item.price}</span>
                      <span className="text-xs bg-background-tertiary text-text-secondary px-2 py-0.5 rounded-full">
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={getPlatformUrl(item)}
                    className="bg-green-medium hover:bg-green-dark text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => removeFavorite(item.id)}
                    className="bg-background-tertiary hover:bg-red-900/20 hover:text-red-400 text-text-tertiary p-2 rounded-full transition-colors"
                    aria-label="Remove from favorites"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </MemberLayout>
  )
}
