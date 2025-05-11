"use client"

import { Youtube } from "lucide-react"
import PlatformButtons from "@/components/platform-buttons"
import SocialMediaFilters from "@/components/social-media-filters"
import SectionDropdown from "@/components/section-dropdown"
import PriceFilteredPromotion from "@/components/price-filtered-promotion"
import PackageCard from "@/components/package-card"
import ServiceCard from "@/components/service-card"
import PerUnitService from "@/components/per-unit-service"
import TelegramConnect from "@/components/telegram-connect"

export default function YoutubePage() {
  return (
    <>
      {/* Platform navigation */}
      <PlatformButtons />

      {/* Platform Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <Youtube className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">YouTube Services</h1>
            <p className="text-white/80">Boost your YouTube presence with our premium services</p>
          </div>
        </div>
      </div>

      {/* Simplified Price Filter */}
      <SocialMediaFilters accentColor="#ef4444" trackColor="#fca5a5" />

      {/* Video Promotions Section */}
      <SectionDropdown title="Video Promotions">
        <div className="space-y-6">
          <PriceFilteredPromotion price={49}>
            <div className="bg-background-secondary rounded-lg p-6 border border-border">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Basic Video Promotion</h3>
                  <p className="text-text-secondary mb-4">
                    Enhance engagement on a single YouTube video with our basic package. Perfect for testing our
                    services.
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✓</span>
                      <span className="text-text-secondary">500-1,000+ views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✓</span>
                      <span className="text-text-secondary">50-100+ likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✓</span>
                      <span className="text-text-secondary">5-10+ comments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✓</span>
                      <span className="text-text-secondary">Retention boost</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-center mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-red-500 mb-1">$49.00</div>
                  <div className="text-text-tertiary mb-3">per video</div>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">
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
                  <h3 className="text-xl font-bold mb-2">Standard Video Promotion</h3>
                  <p className="text-text-secondary mb-4">
                    Medium-level engagement boost for a single video. Ideal for content creators wanting to increase
                    visibility.
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✓</span>
                      <span className="text-text-secondary">2,000-3,000+ views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✓</span>
                      <span className="text-text-secondary">150-250+ likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✓</span>
                      <span className="text-text-secondary">15-25+ comments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✓</span>
                      <span className="text-text-secondary">Enhanced retention</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-center mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-red-500 mb-1">$99.00</div>
                  <div className="text-text-tertiary mb-3">per video</div>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">
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
            title="Creator"
            price="199.00"
            description="Starter package for small YouTube channels looking to establish a presence."
            bestValue={true}
            features={[
              "5 videos per month",
              "500-1,000+ views per video",
              "50-100+ likes per video",
              "5-10+ comments per video",
              "Basic retention boost",
              "Monthly analytics report",
            ]}
          />

          <PackageCard
            title="Professional"
            price="399.00"
            description="Intermediate package for growing YouTube channels seeking consistent engagement."
            features={[
              "10 videos per month",
              "2,000-3,000+ views per video",
              "150-250+ likes per video",
              "15-25+ comments per video",
              "Enhanced retention boost",
              "Monthly analytics report",
              "Basic SEO optimization",
            ]}
          />

          <PackageCard
            title="Influencer"
            price="799.00"
            description="Advanced package for established YouTubers seeking substantial growth."
            features={[
              "15 videos per month",
              "5,000-10,000+ views per video",
              "500-800+ likes per video",
              "50-80+ comments per video",
              "Premium retention boost",
              "Algorithm optimization",
              "Advanced SEO optimization",
              "Trending potential",
            ]}
          />
        </div>
      </SectionDropdown>

      {/* Engagement Services Section */}
      <SectionDropdown title="Engagement Services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PerUnitService
            title="YouTube Subscribers"
            description="Grow your channel with high-quality subscribers"
            pricePerUnit={12.99}
            unit="subscribers"
            unitAmount={1000}
            icon={<Youtube className="w-5 h-5 text-red-500" />}
            textColor="text-red-500"
            buttonBgColor="bg-red-600 hover:bg-red-700"
            featured={true}
          />

          <PerUnitService
            title="YouTube Views"
            description="Increase view count on your videos"
            pricePerUnit={1.99}
            unit="views"
            unitAmount={1000}
            icon={<Youtube className="w-5 h-5 text-red-500" />}
            textColor="text-red-500"
            buttonBgColor="bg-red-600 hover:bg-red-700"
          />

          <PerUnitService
            title="YouTube Likes"
            description="Boost engagement with high-quality likes"
            pricePerUnit={2.49}
            unit="likes"
            unitAmount={100}
            icon={<Youtube className="w-5 h-5 text-red-500" />}
            textColor="text-red-500"
            buttonBgColor="bg-red-600 hover:bg-red-700"
          />

          <PerUnitService
            title="YouTube Comments"
            description="Add authentic comments to your videos"
            pricePerUnit={3.99}
            unit="comments"
            unitAmount={10}
            icon={<Youtube className="w-5 h-5 text-red-500" />}
            textColor="text-red-500"
            buttonBgColor="bg-red-600 hover:bg-red-700"
          />
        </div>
      </SectionDropdown>

      {/* Account Services Section */}
      <SectionDropdown title="Account Services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="YouTube Channel Monetization"
            price={{ value: "999", retail: "1,499" }}
            description="Get your YouTube channel monetized with our premium service. We'll help you reach the required watch time and subscriber count."
            priority="High"
            processingTime="30-60 days"
            successRate="90%"
          />

          <ServiceCard
            title="YouTube Verification"
            price={{ value: "2,000", retail: "3,000" }}
            description="Get the verified badge for your YouTube channel to enhance credibility and visibility."
            priority="Medium"
            processingTime="30-45 days"
            successRate="70%"
          />
        </div>
      </SectionDropdown>

      <TelegramConnect />
    </>
  )
}
