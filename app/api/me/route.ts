import { type NextRequest, NextResponse } from "next/server"
import { getSession } from "@/lib/session"
import { findUserById } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const session = getSession()

    if (!session) {
      return NextResponse.json({ user: null }, { status: 401 })
    }

    const user = findUserById(session.userId)

    if (!user) {
      return NextResponse.json({ user: null }, { status: 401 })
    }

    // Return user data without password
    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      },
    })
  } catch (error) {
    console.error("Error getting current user:", error)
    return NextResponse.json({ error: "An error occurred while getting user data" }, { status: 500 })
  }
}
