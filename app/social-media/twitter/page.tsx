"use client"

import { Twitter } from "lucide-react"
import PlatformButtons from "@/components/platform-buttons"
import SocialMediaFilters from "@/components/social-media-filters"
import SectionDropdown from "@/components/section-dropdown"
import PriceFilteredPromotion from "@/components/price-filtered-promotion"
import PackageCard from "@/components/package-card"
import ServiceCard from "@/components/service-card"
import PerUnitService from "@/components/per-unit-service"
import TelegramConnect from "@/components/telegram-connect"

export default function TwitterPage() {
  return (
    <>
      {/* Platform navigation */}
      <PlatformButtons />

      {/* Platform Header */}
      <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <Twitter className="w-6 h-6 text-sky-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">X (Twitter) Services</h1>
            <p className="text-white/80">Boost your X presence with our premium services</p>
          </div>
        </div>
      </div>

      {/* Simplified Price Filter */}
      <SocialMediaFilters accentColor="#0ea5e9" trackColor="#bae6fd" />

      {/* Tweet Promotions Section */}
      <SectionDropdown title="Tweet Promotions">
        <div className="space-y-6">
          <PriceFilteredPromotion price={29}>
            <div className="bg-background-secondary rounded-lg p-6 border border-border">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Basic Tweet Promotion</h3>
                  <p className="text-text-secondary mb-4">
                    Enhance engagement on a single tweet with our basic package. Perfect for testing our services.
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sky-500">✓</span>
                      <span className="text-text-secondary">500-1,000+ impressions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sky-500">✓</span>
                      <span className="text-text-secondary">50-100+ likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sky-500">✓</span>
                      <span className="text-text-secondary">10-20+ retweets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sky-500">✓</span>
                      <span className="text-text-secondary">5-10+ replies</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-center mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-sky-500 mb-1">$29.00</div>
                  <div className="text-text-tertiary mb-3">per tweet</div>
                  <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-md transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </PriceFilteredPromotion>

          <PriceFilteredPromotion price={69}>
            <div className="bg-background-secondary rounded-lg p-6 border border-border">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Standard Tweet Promotion</h3>
                  <p className="text-text-secondary mb-4">
                    Medium-level engagement boost for a single tweet. Ideal for content creators wanting to increase
                    visibility.
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sky-500">✓</span>
                      <span className="text-text-secondary">2,000-3,000+ impressions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sky-500">✓</span>
                      <span className="text-text-secondary">150-250+ likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sky-500">✓</span>
                      <span className="text-text-secondary">30-50+ retweets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sky-500">✓</span>
                      <span className="text-text-secondary">15-25+ replies</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-center mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-sky-500 mb-1">$69.00</div>
                  <div className="text-text-tertiary mb-3">per tweet</div>
                  <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-md transition-colors">
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
            price="149.00"
            retailPrice="249.00"
            description="Starter package for small X accounts looking to establish a presence."
            bestValue={true}
            features={[
              "15 tweets per month",
              "500-1,000+ impressions per tweet",
              "50-100+ likes per tweet",
              "10-20+ retweets per tweet",
              "5-10+ replies per tweet",
              "Monthly analytics report",
            ]}
          />

          <PackageCard
            title="Influencer"
            price="299.00"
            retailPrice="499.00"
            description="Intermediate package for growing X accounts seeking consistent engagement."
            features={[
              "30 tweets per month",
              "2,000-3,000+ impressions per tweet",
              "150-250+ likes per tweet",
              "30-50+ retweets per tweet",
              "15-25+ replies per tweet",
              "Monthly analytics report",
              "Basic trend analysis",
            ]}
          />

          <PackageCard
            title="Viral"
            price="599.00"
            retailPrice="999.00"
            description="Advanced package for established X users seeking substantial growth and viral potential."
            features={[
              "50 tweets per month",
              "5,000-10,000+ impressions per tweet",
              "500-800+ likes per tweet",
              "100-200+ retweets per tweet",
              "50-100+ replies per tweet",
              "Algorithm optimization",
              "Advanced trend analysis",
              "Viral potential strategy",
            ]}
          />
        </div>
      </SectionDropdown>

      {/* Engagement Services Section */}
      <SectionDropdown title="Engagement Services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PerUnitService
            title="X Followers"
            description="Grow your audience with high-quality followers"
            pricePerUnit={9.99}
            unit="followers"
            unitAmount={1000}
            icon={<Twitter className="w-5 h-5 text-sky-500" />}
            textColor="text-sky-500"
            buttonBgColor="bg-sky-500 hover:bg-sky-600"
            featured={true}
          />

          <PerUnitService
            title="X Impressions"
            description="Increase visibility of your tweets"
            pricePerUnit={1.99}
            unit="impressions"
            unitAmount={1000}
            icon={<Twitter className="w-5 h-5 text-sky-500" />}
            textColor="text-sky-500"
            buttonBgColor="bg-sky-500 hover:bg-sky-600"
          />

          <PerUnitService
            title="X Likes"
            description="Boost engagement with high-quality likes"
            pricePerUnit={2.49}
            unit="likes"
            unitAmount={100}
            icon={<Twitter className="w-5 h-5 text-sky-500" />}
            textColor="text-sky-500"
            buttonBgColor="bg-sky-500 hover:bg-sky-600"
          />

          <PerUnitService
            title="X Retweets"
            description="Expand your reach with authentic retweets"
            pricePerUnit={3.99}
            unit="retweets"
            unitAmount={10}
            icon={<Twitter className="w-5 h-5 text-sky-500" />}
            textColor="text-sky-500"
            buttonBgColor="bg-sky-500 hover:bg-sky-600"
          />
        </div>
      </SectionDropdown>

      {/* Account Services Section */}
      <SectionDropdown title="Account Services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="X Verification"
            price={{ value: "1,999", retail: "2,999" }}
            description="Get the verified badge for your X account to enhance credibility and visibility."
            priority="High"
            processingTime="30-45 days"
            successRate="70%"
          />

          <ServiceCard
            title="X Premium Setup"
            price={{ value: "199", retail: "299" }}
            description="Get your X Premium account set up with all features optimized for maximum engagement."
            priority="Medium"
            processingTime="1-3 days"
            successRate="100%"
          />
        </div>
      </SectionDropdown>

      <TelegramConnect />
    </>
  )
}
