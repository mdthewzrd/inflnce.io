"use client"

import Navigation from "@/components/navigation"
import SubNavigation from "@/components/sub-navigation"
import PremiumServiceCard from "@/components/premium-service-card"
import AnimatedBackground from "@/components/animated-background"
import { Code, Globe, Server, Layout } from "lucide-react"
import { motion } from "framer-motion"

const toolSubNavItems = [
  { name: "All Tools", href: "/tools" },
  { name: "Automation", href: "/tools/automation" },
  { name: "SEO", href: "/tools/seo" },
  { name: "Knowledge Panel", href: "/tools/knowledge-panel" },
  { name: "Web Development", href: "/tools/web-development" },
]

export default function WebDevelopmentPage() {
  return (
    <div className="relative min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <AnimatedBackground />
      </div>

      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <SubNavigation items={toolSubNavItems} active="/tools/web-development" />

        <motion.h1
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Web Development Services
        </motion.h1>

        <motion.p
          className="text-text-secondary mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Custom web solutions designed to elevate your online presence and drive results.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <PremiumServiceCard
              title="Landing Page Development"
              description="Custom landing page development with modern design, responsive layout, and optimized for conversions."
              price={{ value: "$499", period: "" }}
              tags={[
                { text: "Development", color: "tag-blue" },
                { text: "Fast Turnaround", color: "tag-green" },
              ]}
              icon={<Layout className="w-6 h-6 text-green-light" />}
              buttonText="View More"
              graphicType="grid"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <PremiumServiceCard
              title="Full Website Development"
              description="Complete website development including design, development, and deployment. Includes up to 5 pages, responsive design, SEO optimization, and basic analytics integration."
              price={{ value: "$1,499", period: "" }}
              tags={[
                { text: "Development", color: "tag-blue" },
                { text: "Full Service", color: "tag-purple" },
              ]}
              icon={<Globe className="w-6 h-6 text-green-light" />}
              buttonText="View More"
              graphicType="network"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PremiumServiceCard
              title="E-commerce Website"
              description="Full e-commerce website with product catalog, shopping cart, payment processing, and order management."
              price={{ value: "$2,499", period: "" }}
              tags={[
                { text: "E-commerce", color: "tag-green" },
                { text: "Full Service", color: "tag-purple" },
              ]}
              icon={<Globe className="w-6 h-6 text-green-light" />}
              buttonText="View More"
              graphicType="particles"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <PremiumServiceCard
              title="Web Application Development"
              description="Custom web application development with user authentication, database integration, and API development."
              price={{ value: "$3,999", period: "" }}
              tags={[
                { text: "Development", color: "tag-blue" },
                { text: "Advanced", color: "tag-purple" },
              ]}
              icon={<Code className="w-6 h-6 text-green-light" />}
              buttonText="View More"
              graphicType="wave"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <PremiumServiceCard
              title="API Development & Integration"
              description="Custom API development and integration with third-party services and platforms."
              price={{ value: "$1,299", period: "" }}
              tags={[
                { text: "API", color: "tag-orange" },
                { text: "Integration", color: "tag-blue" },
              ]}
              icon={<Server className="w-6 h-6 text-green-light" />}
              buttonText="View More"
              graphicType="grid"
            />
          </motion.div>
        </div>

        <motion.div
          className="bg-background-secondary rounded-lg p-6 border border-background-tertiary/30 mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {/* Background animation */}
          <div className="absolute inset-0 opacity-10">
            <AnimatedBackground className="opacity-20" />
          </div>

          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4">Why Choose Our Web Development Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 green-gradient-text">Fast Turnaround</h3>
                <p className="text-text-secondary">
                  We deliver high-quality web development projects with industry-leading turnaround times.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 green-gradient-text">Modern Technologies</h3>
                <p className="text-text-secondary">
                  We use the latest technologies and frameworks to ensure your website is fast, secure, and scalable.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 green-gradient-text">Dedicated Support</h3>
                <p className="text-text-secondary">
                  Our team provides ongoing support and maintenance to ensure your website continues to perform at its
                  best.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
