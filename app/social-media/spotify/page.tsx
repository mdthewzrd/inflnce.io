"use client"

import PackageCard from "@/components/package-card"
import ServiceCard from "@/components/service-card"
import TelegramConnect from "@/components/telegram-connect"
import SectionDropdown from "@/components/section-dropdown"
import SocialMediaFilters from "@/components/social-media-filters"
import type React from "react"
import PriceFilteredPromotion from "@/components/price-filtered-promotion"
import PlatformButtons from "@/components/platform-buttons"
import PerUnitService from "@/components/per-unit-service"

export default function SpotifyPage() {
  return (
    <>
      {/* Platform Buttons */}
      <PlatformButtons />

      {/* Platform Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg p-6 mb-6 flex items-center gap-4">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
          <SpotifyIcon className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Spotify Services</h1>
          <p className="text-white text-opacity-90">Boost your Spotify presence with our premium services</p>
        </div>
      </div>

      {/* Simplified Price Filter */}
      <SocialMediaFilters accentColor="#16a34a" trackColor="#86efac" />

      {/* Monthly Packages Section */}
      <SectionDropdown title="Monthly Packages">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PackageCard
            title="Spotify Professional"
            price="199.00"
            description="Starter package for artists and podcasters looking to establish a presence on Spotify."
            bestValue={true}
            features={[
              "1,000-2,000+ streams per month",
              "100-200+ saves per month",
              "50-100+ playlist adds",
              "30-50+ followers per month",
              "30 day campaign",
              "Up to 5 tracks/episodes",
            ]}
          />

          <PackageCard
            title="Spotify Business"
            price="349.00"
            description="Intermediate package for growing artists and established podcasters."
            features={[
              "5,000-10,000+ streams per month",
              "500-1,000+ saves per month",
              "200-300+ playlist adds",
              "100-200+ followers per month",
              "30 day campaign",
              "Up to 10 tracks/episodes",
            ]}
          />

          <PackageCard
            title="Spotify Executive"
            price="599.00"
            description="Advanced package for professional artists and established brands seeking substantial growth."
            features={[
              "20,000-50,000+ streams per month",
              "2,000-5,000+ saves per month",
              "500-1,000+ playlist adds",
              "300-500+ followers per month",
              "30 day campaign",
              "Up to 20 tracks/episodes",
            ]}
          />
        </div>
      </SectionDropdown>

      {/* Track/Episode Promotions Section */}
      <SectionDropdown title="Track/Episode Promotions">
        <div className="space-y-6">
          <PriceFilteredPromotion price={59}>
            <div className="bg-background-secondary rounded-lg p-6 border border-border">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Spotify Track Boost</h3>
                  <p className="text-text-secondary mb-4">
                    Enhance streams and engagement for a single track with our professional package. Perfect for new
                    releases.
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-light">✓</span>
                      <span className="text-text-secondary">1,000-2,000+ streams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-light">✓</span>
                      <span className="text-text-secondary">100-200+ saves</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-light">✓</span>
                      <span className="text-text-secondary">20-50+ playlist adds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-light">✓</span>
                      <span className="text-text-secondary">30-50+ followers</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-center mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-green-light mb-1">$59.00</div>
                  <div className="text-text-tertiary mb-3">per track</div>
                  <div className="flex gap-2">
                    <button className="bg-green-medium hover:bg-green-dark text-white font-semibold py-2 px-6 rounded-md transition-colors">
                      Buy Now
                    </button>
                    <button className="border border-border hover:bg-background-tertiary text-text-primary font-semibold py-2 px-3 rounded-md transition-colors">
                      ★
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </PriceFilteredPromotion>

          <PriceFilteredPromotion price={69}>
            <div className="bg-background-secondary rounded-lg p-6 border border-border">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Spotify Podcast Promotion</h3>
                  <p className="text-text-secondary mb-4">
                    Boost your podcast episode with our specialized promotion package. Increase listeners and followers.
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-light">✓</span>
                      <span className="text-text-secondary">1,000-3,000+ plays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-light">✓</span>
                      <span className="text-text-secondary">100-300+ followers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-light">✓</span>
                      <span className="text-text-secondary">50-100+ saves</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-light">✓</span>
                      <span className="text-text-secondary">Improved algorithm ranking</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-center mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-green-light mb-1">$69.00</div>
                  <div className="text-text-tertiary mb-3">per episode</div>
                  <div className="flex gap-2">
                    <button className="bg-green-medium hover:bg-green-dark text-white font-semibold py-2 px-6 rounded-md transition-colors">
                      Buy Now
                    </button>
                    <button className="border border-border hover:bg-background-tertiary text-text-primary font-semibold py-2 px-3 rounded-md transition-colors">
                      ★
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </PriceFilteredPromotion>
        </div>
      </SectionDropdown>

      {/* Account Services Section */}
      <SectionDropdown title="Account Services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="Spotify Verification"
            price={{ value: "1,500", retail: "2,200" }}
            description="Get the verified badge for your Spotify artist profile. Enhance credibility and visibility."
            priority="Medium"
            processingTime="14-21 days"
            successRate="75%"
          />

          <ServiceCard
            title="Spotify Playlist Placement"
            price={{ value: "800", retail: "1,200" }}
            description="Get your tracks placed on popular Spotify playlists with real listeners and followers."
            priority="Medium"
            processingTime="7-14 days"
            successRate="80%"
          />

          <ServiceCard
            title="Spotify Algorithm Boost"
            price={{ value: "1,200", retail: "1,800" }}
            description="Improve your track's position in Spotify's algorithm for better discovery and more organic streams."
            priority="Medium"
            processingTime="14-30 days"
            successRate="70%"
          />

          <ServiceCard
            title="Spotify for Artists Access"
            price={{ value: "500", retail: "800" }}
            description="Get access to Spotify for Artists dashboard for your profile, even if you don't meet the requirements."
            priority="Low"
            processingTime="3-7 days"
            successRate="90%"
          />
        </div>
      </SectionDropdown>

      {/* Engagement Services Section */}
      <SectionDropdown title="Engagement Services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PerUnitService
            title="Spotify Followers"
            description="Grow your audience with high-quality followers"
            pricePerUnit={9.49}
            unit="followers"
            unitAmount={1000}
            icon={<SpotifyIcon className="w-5 h-5 text-green-600" />}
            textColor="text-green-600"
            buttonBgColor="bg-green-600 hover:bg-green-700"
            featured={true}
          />

          <PerUnitService
            title="Spotify Plays"
            description="Increase play count on your tracks"
            pricePerUnit={2.99}
            unit="plays"
            unitAmount={1000}
            icon={<SpotifyIcon className="w-5 h-5 text-green-600" />}
            textColor="text-green-600"
            buttonBgColor="bg-green-600 hover:bg-green-700"
          />

          <PerUnitService
            title="Spotify Monthly Listeners"
            description="Boost your monthly listener count"
            pricePerUnit={7.99}
            unit="listeners"
            unitAmount={1000}
            icon={<SpotifyIcon className="w-5 h-5 text-green-600" />}
            textColor="text-green-600"
            buttonBgColor="bg-green-600 hover:bg-green-700"
          />

          <PerUnitService
            title="Spotify Playlist Adds"
            description="Get your tracks added to playlists"
            pricePerUnit={19.99}
            unit="playlist adds"
            unitAmount={10}
            icon={<SpotifyIcon className="w-5 h-5 text-green-600" />}
            textColor="text-green-600"
            buttonBgColor="bg-green-600 hover:bg-green-700"
          />
        </div>
      </SectionDropdown>

      <TelegramConnect />
    </>
  )
}

function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}
