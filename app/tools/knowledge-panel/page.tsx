"use client"

import Navigation from "@/components/navigation"
import SubNavigation from "@/components/sub-navigation"
import TelegramConnect from "@/components/telegram-connect"
import { ArrowRight, Award, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { knowledgePanelServices, globalConfig } from "@/lib/config"

export default function KnowledgePanelPage() {
  const toolSubNavItems = [
    { name: "All Tools", href: "/tools" },
    { name: "Automation", href: "/tools/automation" },
    { name: "SEO", href: "/tools/seo" },
    { name: "Knowledge Panel", href: "/tools/knowledge-panel" },
    { name: "Web Development", href: "/tools/web-development" },
  ]

  // Get the first Knowledge Panel service for the main display
  const mainService = knowledgePanelServices[0]

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SubNavigation items={toolSubNavItems} active="/tools/knowledge-panel" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-12 overflow-hidden rounded-xl border border-border bg-background-secondary">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-dark/10 to-green-medium/5 overflow-hidden">
              <div className="absolute w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-green-medium/10"
                    style={{
                      width: `${Math.random() * 10 + 5}px`,
                      height: `${Math.random() * 10 + 5}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="bg-green-medium/10 p-4 rounded-full border border-green-medium/20 mb-6">
                  <Award className="w-12 h-12 text-green-medium" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Knowledge Panel Services</h1>
                <p className="text-lg text-text-secondary max-w-2xl">
                  Establish your authority and enhance your online presence with a Google Knowledge Panel that showcases
                  your brand or personal identity.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-medium mt-0.5 shrink-0" />
                      <span>Comprehensive digital presence audit</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-medium mt-0.5 shrink-0" />
                      <span>Entity establishment strategy</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-medium mt-0.5 shrink-0" />
                      <span>Structured data implementation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-medium mt-0.5 shrink-0" />
                      <span>Authority building through strategic content</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-medium mt-0.5 shrink-0" />
                      <span>Citation building across trusted platforms</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Available For</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-medium mt-0.5 shrink-0" />
                      <span>Personal brands and public figures</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-medium mt-0.5 shrink-0" />
                      <span>Businesses and organizations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-medium mt-0.5 shrink-0" />
                      <span>Products and brands</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-medium mt-0.5 shrink-0" />
                      <span>Celebrities and influencers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-medium mt-0.5 shrink-0" />
                      <span>Local businesses and services</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-background-primary rounded-lg p-6 mb-8 border border-border">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Starting at</h3>
                    <div className="text-3xl font-bold text-green-medium">
                      {typeof mainService.price === "string" ? mainService.price : mainService.price.value}
                    </div>
                    <p className="text-text-secondary mt-1">Custom strategy based on your entity type</p>
                  </div>
                  <Button
                    className="mt-4 md:mt-0 bg-green-medium hover:bg-green-dark text-white font-semibold py-3 px-8 rounded-md transition-colors text-lg flex items-center gap-2 group"
                    onClick={() => (window.location.href = mainService.buttonLink || globalConfig.defaultBookCallLink)}
                  >
                    {mainService.buttonText || globalConfig.defaultBookCallText}
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              <div className="text-center text-text-secondary text-sm">
                <p>
                  Knowledge Panels require a custom approach based on your specific situation. Schedule a consultation
                  to discuss your goals and receive a tailored strategy.
                </p>
              </div>
            </div>
          </div>

          {/* Telegram Connect Component */}
          <TelegramConnect />
        </div>
      </div>
    </div>
  )
}
