"use client"

import { Linkedin } from "lucide-react"
import PlatformButtons from "@/components/platform-buttons"
import SocialMediaFilters from "@/components/social-media-filters"
import SectionDropdown from "@/components/section-dropdown"
import PriceFilteredPromotion from "@/components/price-filtered-promotion"
import PackageCard from "@/components/package-card"
import ServiceCard from "@/components/service-card"
import PerUnitService from "@/components/per-unit-service"
import TelegramConnect from "@/components/telegram-connect"

export default function LinkedinPage() {
  return (
    <>
      {/* Platform navigation */}
      <PlatformButtons />

      {/* Platform Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <Linkedin className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">LinkedIn Services</h1>
            <p className="text-white/80">Boost your LinkedIn presence with our premium services</p>
          </div>
        </div>
      </div>

      {/* Simplified Price Filter */}
      <SocialMediaFilters accentColor="#1d4ed8" trackColor="#93c5fd" />

      {/* Post Promotions Section */}
      <SectionDropdown title="Post Promotions">
        <div className="space-y-6">
          <PriceFilteredPromotion price={49}>
            <div className="bg-background-secondary rounded-lg p-6 border border-border">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Basic Post Promotion</h3>
                  <p className="text-text-secondary mb-4">
                    Enhance engagement on a single LinkedIn post with our basic package. Perfect for testing our
                    services.
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-700">✓</span>
                      <span className="text-text-secondary">500-1,000+ impressions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-700">✓</span>
                      <span className="text-text-secondary">50-100+ reactions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-700">✓</span>
                      <span className="text-text-secondary">5-10+ comments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-700">✓</span>
                      <span className="text-text-secondary">3-5+ shares</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-center mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-blue-700 mb-1">$49.00</div>
                  <div className="text-text-tertiary mb-3">per post</div>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-md transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </PriceFilteredPromotion>

          <PriceFilteredPromotion price={99}>
            <div className="bg-background-secondary rounded-lg p-6 border border-border">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Standard Post Promotion</h3>
                  <p className="text-text-secondary mb-4">
                    Medium-level engagement boost for a single post. Ideal for professionals wanting to increase
                    visibility.
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-700">✓</span>
                      <span className="text-text-secondary">2,000-3,000+ impressions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-700">✓</span>
                      <span className="text-text-secondary">150-250+ reactions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-700">✓</span>
                      <span className="text-text-secondary">15-25+ comments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-700">✓</span>
                      <span className="text-text-secondary">10-15+ shares</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-center mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-blue-700 mb-1">$99.00</div>
                  <div className="text-text-tertiary mb-3">per post</div>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-md transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </PriceFilteredPromotion>
        </div>
      </SectionDropdown>

      {/* Monthly Packages Section */}
      <SectionDropdown title="Monthly Packages">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PackageCard
            title="Professional"
            price="199.00"
            retailPrice="299.00"
            description="Starter package for professionals looking to establish a presence on LinkedIn."
            bestValue={true}
            features={[
              "8 posts per month",
              "500-1,000+ impressions per post",
              "50-100+ reactions per post",
              "5-10+ comments per post",
              "3-5+ shares per post",
              "Monthly analytics report",
            ]}
          />

          <PackageCard
            title="Executive"
            price="399.00"
            retailPrice="599.00"
            description="Intermediate package for growing professionals seeking consistent engagement."
            features={[
              "15 posts per month",
              "2,000-3,000+ impressions per post",
              "150-250+ reactions per post",
              "15-25+ comments per post",
              "10-15+ shares per post",
              "Monthly analytics report",
              "Basic content strategy",
            ]}
          />

          <PackageCard
            title="Thought Leader"
            price="799.00"
            retailPrice="1,199.00"
            description="Advanced package for established professionals seeking substantial growth and industry recognition."
            features={[
              "25 posts per month",
              "5,000-10,000+ impressions per post",
              "500-800+ reactions per post",
              "50-80+ comments per post",
              "30-50+ shares per post",
              "Algorithm optimization",
              "Advanced content strategy",
              "Industry thought leadership positioning",
            ]}
          />
        </div>
      </SectionDropdown>

      {/* Engagement Services Section */}
      <SectionDropdown title="Engagement Services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PerUnitService
            title="LinkedIn Connections"
            description="Grow your network with high-quality connections"
            pricePerUnit={14.99}
            unit="connections"
            unitAmount={1000}
            icon={<Linkedin className="w-5 h-5 text-blue-700" />}
            textColor="text-blue-700"
            buttonBgColor="bg-blue-700 hover:bg-blue-800"
            featured={true}
          />

          <PerUnitService
            title="LinkedIn Followers"
            description="Increase your followers for better content reach"
            pricePerUnit={11.99}
            unit="followers"
            unitAmount={1000}
            icon={<Linkedin className="w-5 h-5 text-blue-700" />}
            textColor="text-blue-700"
            buttonBgColor="bg-blue-700 hover:bg-blue-800"
          />

          <PerUnitService
            title="LinkedIn Reactions"
            description="Boost engagement with high-quality reactions"
            pricePerUnit={2.99}
            unit="reactions"
            unitAmount={100}
            icon={<Linkedin className="w-5 h-5 text-blue-700" />}
            textColor="text-blue-700"
            buttonBgColor="bg-blue-700 hover:bg-blue-800"
          />

          <PerUnitService
            title="LinkedIn Comments"
            description="Add authentic comments to your posts"
            pricePerUnit={4.99}
            unit="comments"
            unitAmount={10}
            icon={<Linkedin className="w-5 h-5 text-blue-700" />}
            textColor="text-blue-700"
            buttonBgColor="bg-blue-700 hover:bg-blue-800"
          />
        </div>
      </SectionDropdown>

      {/* Account Services Section */}
      <SectionDropdown title="Account Services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="LinkedIn Profile Optimization"
            price={{ value: "299", retail: "499" }}
            description="Get your LinkedIn profile professionally optimized for maximum visibility and impact."
            priority="High"
            processingTime="3-5 days"
            successRate="100%"
          />

          <ServiceCard
            title="LinkedIn Company Page Setup"
            price={{ value: "499", retail: "799" }}
            description="Professional setup and optimization of your LinkedIn company page for brand visibility."
            priority="Medium"
            processingTime="5-7 days"
            successRate="100%"
          />
        </div>
      </SectionDropdown>

      <TelegramConnect />
    </>
  )
}
