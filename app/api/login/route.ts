import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Ensure data directory exists
const dataDir = path.join(process.cwd(), "data")
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Ensure users file exists
const usersFile = path.join(dataDir, "users.json")
if (!fs.existsSync(usersFile)) {
  fs.writeFileSync(
    usersFile,
    JSON.stringify(
      [
        {
          id: "admin1",
          email: "lucmikebiz1@gmail.com",
          password: "highroller1",
          name: "Admin User",
          isAdmin: true,
          createdAt: new Date().toISOString(),
        },
        {
          id: "admin2",
          email: "mikedurante13@gmail.com",
          password: "highroller1",
          name: "Mike Durante",
          isAdmin: true,
          createdAt: new Date().toISOString(),
        },
        {
          id: "admin3",
          email: "lucasgenova1@gmail.com",
          password: "highroller1",
          name: "Lucas Genova",
          isAdmin: true,
          createdAt: new Date().toISOString(),
        },
      ],
      null,
      2,
    ),
  )
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    // Read users from file
    const users = JSON.parse(fs.readFileSync(usersFile, "utf8"))

    // Find user
    const user = users.find((u: any) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    // Create a session (simplified for demo)
    const session = {
      id: user.id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
    }

    // Set cookie
    const response = NextResponse.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      },
      redirect: "/social-media",
    })

    // Set cookie with appropriate settings for production
    const isProduction = process.env.NODE_ENV === "production"

    response.cookies.set({
      name: "user",
      value: user.email,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
      sameSite: "lax",
      secure: isProduction,
    })

    response.cookies.set({
      name: "session",
      value: JSON.stringify(session),
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
      sameSite: "lax",
      secure: isProduction,
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ message: "An error occurred during login" }, { status: 500 })
  }
}
