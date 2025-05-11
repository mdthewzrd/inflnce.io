"use client"

import { useState } from "react"
import {
  User,
  Bell,
  Shield,
  CreditCard,
  HelpCircle,
  LogOut,
  Lock,
  CreditCardIcon,
  KeyIcon,
  AlertTriangle,
  CheckCircle,
  FileText,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile")
  const router = useRouter()

  const tabs = [
    { name: "Profile", icon: User },
    { name: "Notifications", icon: Bell },
    { name: "Security", icon: Shield },
    { name: "Billing", icon: CreditCard },
    { name: "Support", icon: HelpCircle },
  ]

  const handleLogout = () => {
    document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    router.push("/login")
  }

  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Settings</h1>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        <div className="md:w-full md:max-w-[250px]">
          <div className="bg-background-secondary rounded-lg p-4 border border-border">
            <div className="flex md:flex-col flex-wrap gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={`flex-1 min-w-[120px] flex items-center gap-3 px-3 py-2 rounded-md text-left ${
                    activeTab === tab.name
                      ? "bg-green-dark text-white"
                      : "text-text-secondary hover:bg-background-tertiary hover:text-text-primary"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
              <button
                className="flex-1 min-w-[120px] flex items-center gap-3 px-3 py-2 rounded-md text-left text-text-secondary hover:bg-background-tertiary hover:text-text-primary"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        <div className="md:flex-1">
          <div className="bg-background-secondary rounded-lg p-4 sm:p-6 border border-border">
            {activeTab === "Profile" && (
              <div>
                <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Profile Settings</h2>

                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-background-tertiary rounded-full flex items-center justify-center text-2xl font-bold mx-auto sm:mx-0">
                      JD
                    </div>
                    <div className="text-center sm:text-left">
                      <button className="bg-green-medium hover:bg-green-dark text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
                        Change Avatar
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full bg-background-tertiary border border-border rounded-md py-2 px-3 text-text-primary focus:outline-none focus:ring-1 focus:ring-green-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full bg-background-tertiary border border-border rounded-md py-2 px-3 text-text-primary focus:outline-none focus:ring-1 focus:ring-green-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Phone Number</label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full bg-background-tertiary border border-border rounded-md py-2 px-3 text-text-primary focus:outline-none focus:ring-1 focus:ring-green-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Company</label>
                      <input
                        type="text"
                        defaultValue="Acme Inc."
                        className="w-full bg-background-tertiary border border-border rounded-md py-2 px-3 text-text-primary focus:outline-none focus:ring-1 focus:ring-green-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="bg-green-medium hover:bg-green-dark text-white font-semibold py-2 px-6 rounded-md transition-colors w-full sm:w-auto">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === "Notifications" && (
              <div>
                <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Notification Settings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium mb-3">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Order Updates</div>
                          <div className="text-sm text-text-secondary">Receive updates about your orders</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-background-tertiary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-medium"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Promotional Emails</div>
                          <div className="text-sm text-text-secondary">Receive promotional offers and discounts</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-background-tertiary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-medium"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-medium mb-3">Telegram Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Order Status Updates</div>
                          <div className="text-sm text-text-secondary">Receive real-time updates via Telegram</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-background-tertiary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-medium"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Analytics Reports</div>
                          <div className="text-sm text-text-secondary">Receive weekly analytics reports</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-background-tertiary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-medium"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button className="bg-green-medium hover:bg-green-dark text-white font-semibold py-2 px-6 rounded-md transition-colors w-full sm:w-auto">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === "Security" && (
              <div>
                <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-light" />
                  Security Settings
                </h2>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-dark/20 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-green-light" />
                      </div>
                      <div>
                        <h3 className="font-medium">Password</h3>
                        <p className="text-sm text-text-secondary">Last changed 30 days ago</p>
                      </div>
                    </div>
                    <button className="bg-background-tertiary hover:bg-background text-text-primary font-medium py-2 px-4 rounded-md transition-colors text-sm">
                      Change Password
                    </button>
                  </div>

                  <div className="bg-background-tertiary p-4 rounded-lg mb-6">
                    <h4 className="font-medium mb-3">Password Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-light" />
                        <span>Minimum 8 characters</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-light" />
                        <span>At least one uppercase letter</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-light" />
                        <span>At least one number</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-light" />
                        <span>At least one special character</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-dark/20 flex items-center justify-center">
                        <KeyIcon className="w-5 h-5 text-green-light" />
                      </div>
                      <div>
                        <h3 className="font-medium">Two-Factor Authentication</h3>
                        <p className="text-sm text-text-secondary">Add an extra layer of security</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-background-tertiary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-medium"></div>
                    </label>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-dark/20 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="font-medium">Login Sessions</h3>
                        <p className="text-sm text-text-secondary">Manage your active sessions</p>
                      </div>
                    </div>
                    <button className="bg-background-tertiary hover:bg-background text-text-primary font-medium py-2 px-4 rounded-md transition-colors text-sm">
                      View All
                    </button>
                  </div>

                  <div className="bg-background-tertiary p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-dark/30 flex items-center justify-center text-green-light">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Current Session</div>
                          <div className="text-xs text-text-tertiary">Chrome on Windows • New York, USA</div>
                        </div>
                      </div>
                      <div className="text-xs text-text-tertiary">Active now</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Billing" && (
              <div>
                <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                  <CreditCardIcon className="w-5 h-5 text-green-light" />
                  Billing & Payments
                </h2>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-dark/20 flex items-center justify-center">
                        <CreditCardIcon className="w-5 h-5 text-green-light" />
                      </div>
                      <div>
                        <h3 className="font-medium">Payment Methods</h3>
                        <p className="text-sm text-text-secondary">Manage your payment methods</p>
                      </div>
                    </div>
                    <button className="bg-green-medium hover:bg-green-dark text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
                      Add New
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-background-tertiary p-4 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-background flex items-center justify-center rounded-md">
                          <svg
                            width="32"
                            height="20"
                            viewBox="0 0 32 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="32" height="20" rx="4" fill="#252525" />
                            <path d="M21.5 12.5H19.5V7.5H21.5V12.5Z" fill="#FF5F00" />
                            <path
                              d="M19.75 10C19.75 8.5 20.5 7.25 21.5 6.5C20.75 5.75 19.75 5.5 18.75 5.5C16.5 5.5 14.75 7.5 14.75 10C14.75 12.5 16.5 14.5 18.75 14.5C19.75 14.5 20.75 14 21.5 13.5C20.5 12.5 19.75 11.25 19.75 10Z"
                              fill="#EB001B"
                            />
                            <path
                              d="M26.5 10C26.5 12.5 24.75 14.5 22.5 14.5C21.5 14.5 20.5 14 19.75 13.5C20.75 12.5 21.5 11.25 21.5 10C21.5 8.5 20.75 7.25 19.75 6.5C20.5 5.75 21.5 5.5 22.5 5.5C24.75 5.5 26.5 7.5 26.5 10Z"
                              fill="#F79E1B"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Mastercard ending in 4242</div>
                          <div className="text-xs text-text-tertiary">Expires 12/2025</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-green-dark/30 text-green-light px-2 py-0.5 rounded">Default</span>
                        <button className="text-text-tertiary hover:text-text-primary text-sm">Edit</button>
                      </div>
                    </div>

                    <div className="bg-background-tertiary p-4 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-background flex items-center justify-center rounded-md">
                          <svg
                            width="32"
                            height="20"
                            viewBox="0 0 32 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="32" height="20" rx="4" fill="#252525" />
                            <path
                              d="M11.5 13.5H9.5L7.5 8L5.5 13.5H3.5L1 6.5H3L4.5 12L6.5 6.5H8.5L10.5 12L12 6.5H14L11.5 13.5Z"
                              fill="#3C8EE5"
                            />
                            <path
                              d="M14.5 13.5V6.5H19C20.5 6.5 21.5 7.5 21.5 9C21.5 10.5 20.5 11.5 19 11.5H16.5V13.5H14.5ZM16.5 8.5V9.5H18.5C19 9.5 19.5 9.25 19.5 9C19.5 8.75 19 8.5 18.5 8.5H16.5Z"
                              fill="#3C8EE5"
                            />
                            <path
                              d="M27 13.5L25.5 11.5L24 13.5H21.5L24.5 10L21.5 6.5H24L25.5 8.5L27 6.5H29.5L26.5 10L29.5 13.5H27Z"
                              fill="#3C8EE5"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Visa ending in 1234</div>
                          <div className="text-xs text-text-tertiary">Expires 08/2024</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-text-tertiary hover:text-text-primary text-sm">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-dark/20 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-green-light" />
                      </div>
                      <div>
                        <h3 className="font-medium">Billing History</h3>
                        <p className="text-sm text-text-secondary">View your recent invoices</p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto -mx-4 px-4">
                    <div className="min-w-[600px]">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-background-tertiary">
                            <th className="py-3 px-4 text-left text-xs font-medium text-text-secondary">INVOICE</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-text-secondary">DATE</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-text-secondary">AMOUNT</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-text-secondary">STATUS</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-text-secondary"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="py-3 px-4 text-sm">#INV-2023-042</td>
                            <td className="py-3 px-4 text-sm">Apr 28, 2023</td>
                            <td className="py-3 px-4 text-sm">$149.00</td>
                            <td className="py-3 px-4">
                              <span className="text-xs bg-green-dark/30 text-green-light px-2 py-0.5 rounded">
                                Paid
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button className="text-green-light hover:text-green-medium text-sm">Download</button>
                            </td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 px-4 text-sm">#INV-2023-036</td>
                            <td className="py-3 px-4 text-sm">Mar 15, 2023</td>
                            <td className="py-3 px-4 text-sm">$249.00</td>
                            <td className="py-3 px-4">
                              <span className="text-xs bg-green-dark/30 text-green-light px-2 py-0.5 rounded">
                                Paid
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button className="text-green-light hover:text-green-medium text-sm">Download</button>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 text-sm">#INV-2023-028</td>
                            <td className="py-3 px-4 text-sm">Feb 02, 2023</td>
                            <td className="py-3 px-4 text-sm">$149.00</td>
                            <td className="py-3 px-4">
                              <span className="text-xs bg-green-dark/30 text-green-light px-2 py-0.5 rounded">
                                Paid
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button className="text-green-light hover:text-green-medium text-sm">Download</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Support" && (
              <div>
                <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-green-light" />
                  Support Center
                </h2>

                <div className="mb-8">
                  <div className="bg-green-dark/10 border border-green-dark/20 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-dark/20 flex-shrink-0 flex items-center justify-center mt-1">
                        <HelpCircle className="w-5 h-5 text-green-light" />
                      </div>
                      <div>
                        <h3 className="font-medium text-green-light mb-1">Need help with your orders?</h3>
                        <p className="text-sm text-text-secondary mb-3">
                          Our support team is available 24/7 to assist you with any questions or issues you may have.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <button className="bg-green-medium hover:bg-green-dark text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
                            Contact Support
                          </button>
                          <button className="bg-background-tertiary hover:bg-background text-text-primary font-medium py-2 px-4 rounded-md transition-colors text-sm">
                            View FAQs
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-medium mb-4">Support Tickets</h3>

                  <div className="space-y-3 mb-6">
                    <div className="bg-background-tertiary p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">#TKT-2023-042: Payment Issue</div>
                        <span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded">
                          In Progress
                        </span>
                      </div>
                      <div className="text-sm text-text-secondary mb-3">Last updated: 2 hours ago</div>
                      <button className="text-green-light hover:text-green-medium text-sm">View Details</button>
                    </div>

                    <div className="bg-background-tertiary p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">#TKT-2023-039: Account Verification</div>
                        <span className="text-xs bg-green-dark/30 text-green-light px-2 py-0.5 rounded">Resolved</span>
                      </div>
                      <div className="text-sm text-text-secondary mb-3">Last updated: 3 days ago</div>
                      <button className="text-green-light hover:text-green-medium text-sm">View Details</button>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-medium mb-4">Frequently Asked Questions</h3>

                  <div className="space-y-3">
                    <div className="bg-background-tertiary p-4 rounded-lg">
                      <h4 className="font-medium mb-2">How do I track my order status?</h4>
                      <p className="text-sm text-text-secondary">
                        You can track your order status in the "My Orders" section of your dashboard. Each order will
                        show its current status and progress.
                      </p>
                    </div>

                    <div className="bg-background-tertiary p-4 rounded-lg">
                      <h4 className="font-medium mb-2">What payment methods do you accept?</h4>
                      <p className="text-sm text-text-secondary">
                        We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We
                        also support cryptocurrency payments.
                      </p>
                    </div>

                    <div className="bg-background-tertiary p-4 rounded-lg">
                      <h4 className="font-medium mb-2">How long does it take to see results?</h4>
                      <p className="text-sm text-text-secondary">
                        Results typically begin to appear within 24-48 hours of starting your campaign. Full results
                        will be delivered according to the timeframe specified in your package.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
