"use client"

import Navigation from "@/components/navigation"
import SubNavigation from "@/components/sub-navigation"
import PremiumServiceCard from "@/components/premium-service-card"
import AnimatedBackground from "@/components/animated-background"
import TelegramConnect from "@/components/telegram-connect"
import { motion } from "framer-motion"
import { automationServices } from "@/lib/config"
import * as LucideIcons from "lucide-react"

const toolSubNavItems = [
  { name: "All Tools", href: "/tools" },
  { name: "Automation", href: "/tools/automation" },
  { name: "SEO", href: "/tools/seo" },
  { name: "Knowledge Panel", href: "/tools/knowledge-panel" },
  { name: "Web Development", href: "/tools/web-development" },
]

export default function AutomationPage() {
  // Helper function to get the icon component
  const getIcon = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons]
    return Icon ? <Icon className="w-6 h-6 text-green-light" /> : null
  }

  // Split services into two groups for display
  const mainServices = automationServices.slice(0, 3)
  const advancedServices = automationServices.slice(3)

  return (
    <div className="relative min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <AnimatedBackground />
      </div>

      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <SubNavigation items={toolSubNavItems} active="/tools/automation" />

        <motion.h1
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Automation Tools
        </motion.h1>

        <motion.p
          className="text-text-secondary mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Streamline your workflow and boost productivity with our advanced automation solutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <PremiumServiceCard
                title={service.title}
                description={service.description}
                price={service.price}
                tags={service.tags}
                icon={getIcon(service.icon || "")}
                buttonText={service.buttonText}
                buttonLink={service.buttonLink}
                graphicType={service.graphicType}
              />
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Advanced Automation Solutions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {advancedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <PremiumServiceCard
                title={service.title}
                description={service.description}
                price={service.price}
                tags={service.tags}
                icon={getIcon(service.icon || "")}
                buttonText={service.buttonText}
                buttonLink={service.buttonLink}
                graphicType={service.graphicType}
              />
            </motion.div>
          ))}
        </div>

        {/* Telegram Connect Component */}
        <TelegramConnect />
      </div>
    </div>
  )
}
