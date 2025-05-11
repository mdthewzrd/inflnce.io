import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import type { User } from "./auth"

// Session interface
export interface Session {
  userId: string
  email: string
  name: string
  isAdmin: boolean
}

// Create session from user
export const createSession = (user: User): Session => {
  return {
    userId: user.id,
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin || false,
  }
}

// Set session cookie
export const setSessionCookie = (session: Session) => {
  const cookieStore = cookies()

  cookieStore.set({
    name: "session",
    value: JSON.stringify(session),
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })
}

// Clear session cookie
export const clearSessionCookie = () => {
  const cookieStore = cookies()
  cookieStore.delete("session")
}

// Get session from cookie
export const getSessionFromCookie = (request: NextRequest): Session | null => {
  const sessionCookie = request.cookies.get("session")

  if (!sessionCookie) {
    return null
  }

  try {
    return JSON.parse(sessionCookie.value)
  } catch (error) {
    return null
  }
}

// Get session from server component
export const getSession = (): Session | null => {
  const cookieStore = cookies()
  const sessionCookie = cookieStore.get("session")

  if (!sessionCookie) {
    return null
  }

  try {
    return JSON.parse(sessionCookie.value)
  } catch (error) {
    return null
  }
}

export const clearSession = () => {
  clearSessionCookie()
}

export const getCurrentUser = (): Session | null => {
  return getSession()
}
