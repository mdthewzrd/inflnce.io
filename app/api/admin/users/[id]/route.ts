import { NextResponse } from "next/server"
import { getUsers, saveUsers } from "@/lib/auth"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const users = getUsers()
    const user = users.find((u) => u.id === params.id)

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Return user without password
    const { password, ...safeUser } = user

    return NextResponse.json(safeUser)
  } catch (error) {
    console.error("Error fetching user:", error)
    return NextResponse.json({ message: "Failed to fetch user" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { name, email, password, isAdmin } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ message: "Name and email are required" }, { status: 400 })
    }

    // Get current users
    const users = getUsers()
    const userIndex = users.findIndex((u) => u.id === params.id)

    if (userIndex === -1) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Check if email is already in use by another user
    const emailExists = users.some((u) => u.email === email && u.id !== params.id)
    if (emailExists) {
      return NextResponse.json({ message: "Email already in use by another user" }, { status: 400 })
    }

    // Update user
    const updatedUser = {
      ...users[userIndex],
      name,
      email,
      isAdmin: Boolean(isAdmin),
    }

    // Only update password if provided
    if (password) {
      updatedUser.password = password
    }

    users[userIndex] = updatedUser

    // Save updated users
    saveUsers(users)

    // Return user without password
    const { password: _, ...safeUser } = updatedUser

    return NextResponse.json(safeUser)
  } catch (error) {
    console.error("Error updating user:", error)
    return NextResponse.json({ message: "Failed to update user" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    // Get current users
    const users = getUsers()
    const userIndex = users.findIndex((u) => u.id === params.id)

    if (userIndex === -1) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Remove user
    users.splice(userIndex, 1)

    // Save updated users
    saveUsers(users)

    return NextResponse.json({ message: "User deleted successfully" })
  } catch (error) {
    console.error("Error deleting user:", error)
    return NextResponse.json({ message: "Failed to delete user" }, { status: 500 })
  }
}
