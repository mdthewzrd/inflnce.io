import fs from "fs"
import path from "path"

// Define user types
export interface User {
  id: string
  email: string
  password: string
  name: string
  createdAt: string
  lastLogin?: string
  isAdmin: boolean
}

// Path to users data file
const usersFilePath = path.join(process.cwd(), "data", "users.json")

// Ensure data directory exists
export const ensureDataDir = () => {
  const dataDir = path.join(process.cwd(), "data")
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir)
  }

  if (!fs.existsSync(usersFilePath)) {
    fs.writeFileSync(usersFilePath, JSON.stringify([], null, 2))
  }
}

// Get all users
export const getUsers = (): User[] => {
  ensureDataDir()
  try {
    const data = fs.readFileSync(usersFilePath, "utf8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading users file:", error)
    return []
  }
}

// Save users
export function saveUsers(users: any[]) {
  const dataDir = path.join(process.cwd(), "data")
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  const usersFile = path.join(dataDir, "users.json")
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2))
  return true
}

// Find user by email
export function findUserByEmail(email: string) {
  const users = getUsers()
  return users.find((user) => user.email === email)
}

// Find user by ID
export const findUserById = (id: string): User | undefined => {
  const users = getUsers()
  return users.find((user) => user.id === id)
}

// Create a new user
export const createUser = (userData: Omit<User, "id" | "createdAt">): User => {
  const users = getUsers()

  // Check if user already exists
  if (findUserByEmail(userData.email)) {
    throw new Error("User with this email already exists")
  }

  const newUser: User = {
    ...userData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }

  users.push(newUser)
  saveUsers(users)

  return newUser
}

// Update user
export const updateUser = (id: string, userData: Partial<User>): User => {
  const users = getUsers()
  const userIndex = users.findIndex((user) => user.id === id)

  if (userIndex === -1) {
    throw new Error("User not found")
  }

  // If email is being updated, check it's not already in use
  if (userData.email && userData.email !== users[userIndex].email) {
    const existingUser = findUserByEmail(userData.email)
    if (existingUser && existingUser.id !== id) {
      throw new Error("Email already in use")
    }
  }

  users[userIndex] = {
    ...users[userIndex],
    ...userData,
  }

  saveUsers(users)
  return users[userIndex]
}

// Delete user
export const deleteUser = (id: string): boolean => {
  const users = getUsers()
  const filteredUsers = users.filter((user) => user.id !== id)

  if (filteredUsers.length === users.length) {
    return false // No user was deleted
  }

  return saveUsers(filteredUsers)
}

// Update last login
export const updateLastLogin = (id: string): User | undefined => {
  try {
    const user = findUserById(id)
    if (!user) return undefined

    return updateUser(id, { lastLogin: new Date().toISOString() })
  } catch (error) {
    console.error("Error updating last login:", error)
    return undefined
  }
}

// Authenticate user
export const authenticateUser = (email: string, password: string): User | null => {
  const user = findUserByEmail(email)

  if (!user || user.password !== password) {
    return null
  }

  // Update last login time
  updateLastLogin(user.id)

  return user
}

// Initialize admin accounts
export const initializeAdminAccounts = () => {
  const adminAccounts = [
    {
      email: "lucmikebiz1@gmail.com",
      password: "highroller1",
      name: "Luc Mike",
      isAdmin: true,
    },
    {
      email: "mikedurante13@gmail.com",
      password: "highroller1",
      name: "Mike Durante",
      isAdmin: true,
    },
    {
      email: "lucasgenova1@gmail.com",
      password: "highroller1",
      name: "Lucas Genova",
      isAdmin: true,
    },
    {
      email: "mattyoisgay@gmail.com",
      password: "highroller1",
      name: "Regular User",
      isAdmin: false,
    },
  ]

  const users = getUsers()

  for (const adminData of adminAccounts) {
    // Check if admin already exists
    const existingAdmin = findUserByEmail(adminData.email)

    if (!existingAdmin) {
      // Create new admin
      const newAdmin: User = {
        ...adminData,
        id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
        createdAt: new Date().toISOString(),
      }
      users.push(newAdmin)
    } else if (!existingAdmin.isAdmin) {
      // Update existing user to be admin
      existingAdmin.isAdmin = true
      const index = users.findIndex((u) => u.id === existingAdmin.id)
      users[index] = existingAdmin
    }
  }

  saveUsers(users)
}
