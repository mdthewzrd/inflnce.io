import { NextResponse } from "next/server"
import { getUsers, saveUsers, findUserByEmail } from "@/lib/auth"
import { v4 as uuidv4 } from "uuid"

export async function GET() {
  try {
    const users = getUsers()

    // Return users without passwords
    const safeUsers = users.map(({ password, ...user }) => user)

    return NextResponse.json(safeUsers)
  } catch (error) {
    console.error("Error fetching users:", error)
    return NextResponse.json({ message: "Failed to fetch users" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, password, isAdmin } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Name, email, and password are required" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = findUserByEmail(email)
    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 400 })
    }

    // Get current users
    const users = getUsers()

    // Create new user
    const newUser = {
      id: uuidv4(),
      name,
      email,
      password,
      isAdmin: Boolean(isAdmin),
      createdAt: new Date().toISOString(),
    }

    // Add to users array
    users.push(newUser)

    // Save updated users
    saveUsers(users)

    // Return user without password
    const { password: _, ...safeUser } = newUser

    return NextResponse.json(safeUser, { status: 201 })
  } catch (error) {
    console.error("Error creating user:", error)
    return NextResponse.json({ message: "Failed to create user" }, { status: 500 })
  }
}
