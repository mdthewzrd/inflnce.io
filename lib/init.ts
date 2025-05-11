import { ensureDataDir, initializeAdminAccounts } from "./auth"

export const initializeSystem = () => {
  // Ensure data directory exists
  ensureDataDir()

  // Initialize admin accounts
  initializeAdminAccounts()

  console.log("System initialized with admin accounts")
}
