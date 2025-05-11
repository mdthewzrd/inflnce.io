"use client"

import Link from "next/link"
import { Instagram, BookOpen, Wrench, ArrowRight, ExternalLink } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-b from-background to-background-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Boost Your Online Presence with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-light to-green-medium">
                  High Roller
                </span>
              </h1>
              <p className="text-text-secondary text-lg mb-8">
                Your one-stop platform for social media growth, publications, and digital marketing tools.
              </p>

              {/* Enhanced buttons component */}
      {/*         <HeroButtons />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Central glow effect */}
      {/*           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-light/30 via-green-dark/20 to-transparent rounded-full blur-3xl"></div>

                {/* Subtle animated particles */}
      {/*           <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-light/40 rounded-full animate-pulse"></div>
                  <div
                    className="absolute top-3/4 left-1/3 w-2 h-2 bg-green-light/30 rounded-full animate-ping"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-green-light/20 rounded-full animate-ping"
                    style={{ animationDuration: "4s" }}
                  ></div>
                  <div
                    className="absolute top-1/3 left-3/4 w-1 h-1 bg-green-light/40 rounded-full animate-pulse"
                    style={{ animationDuration: "2.5s" }}
                  ></div>
                </div>

                {/* Stats grid */}
      {/*           <div className="relative z-10 grid grid-cols-2 gap-6 py-8">
                  {/* Clients stat */}
      {/*             <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-light/20 to-green-dark/10 rounded-full blur-lg transform scale-125"></div>
                      <div className="relative z-10 w-16 h-16 rounded-full bg-background/40 backdrop-blur-md flex items-center justify-center border border-green-light/20">
                        <Users className="h-8 w-8 text-green-light" />
                      </div>
                    </div>
                    <span className="text-2xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      10k+
                    </span>
                    <span className="text-sm text-text-secondary">Clients</span>
                  </div>

                  {/* Reach stat */}
      {/*             <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-light/20 to-green-dark/10 rounded-full blur-lg transform scale-125"></div>
                      <div className="relative z-10 w-16 h-16 rounded-full bg-background/40 backdrop-blur-md flex items-center justify-center border border-green-light/20">
                        <BarChart3 className="h-8 w-8 text-green-light" />
                      </div>
                    </div>
                    <span className="text-2xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      50M+
                    </span>
                    <span className="text-sm text-text-secondary">Reach</span>
                  </div>

                  {/* Publications stat */}
      {/*             <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-light/20 to-green-dark/10 rounded-full blur-lg transform scale-125"></div>
                      <div className="relative z-10 w-16 h-16 rounded-full bg-background/40 backdrop-blur-md flex items-center justify-center border border-green-light/20">
                        <Globe className="h-8 w-8 text-green-light" />
                      </div>
                    </div>
                    <span className="text-2xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      1,100+
                    </span>
                    <span className="text-sm text-text-secondary">Publications</span>
                  </div>

                  {/* Platforms stat */}
      {/*             <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-light/20 to-green-dark/10 rounded-full blur-lg transform scale-125"></div>
                      <div className="relative z-10 w-16 h-16 rounded-full bg-background/40 backdrop-blur-md flex items-center justify-center border border-green-light/20">
                        <Instagram className="h-8 w-8 text-green-light" />
                      </div>
                    </div>
                    <span className="text-2xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      6+
                    </span>
                    <span className="text-sm text-text-secondary">Platforms</span>
                  </div>

                  {/* Decorative elements */}
      {/*             <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-light/10 to-transparent"></div>
                  <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-green-light/10 to-transparent"></div>
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-light/10 to-transparent"></div>
                </div>

                {/* Subtle grid lines */}
      {/*           <div className="absolute inset-0 z-0 opacity-20">
                  <div className="w-full h-full border border-green-light/5 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Boost Your Online Presence with <span className="text-green-500">inflnce</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 mb-12">
                Your one-stop platform for social media growth, publications, and digital marketing tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#007B01] to-[#4DFF4F] hover:opacity-90 text-white px-8 py-4 rounded-md text-lg font-medium transition-opacity shadow-lg shadow-green-900/20"
                >
                  Get Started <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-black border border-green-500/30 hover:border-green-500/60 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors backdrop-blur-sm"
                >
                  Learn More <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Main Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Social Media Card */}
            <Link
              href="/social-media"
              className="bg-background-secondary border border-border rounded-xl p-6 transition-all hover:border-green-medium hover:shadow-lg hover:shadow-green-dark/10 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-dark/30 flex items-center justify-center group-hover:bg-green-dark/50 transition-colors">
                  <Instagram className="w-6 h-6 text-green-light" />
                </div>
                <h2 className="text-2xl font-bold">Social Media</h2>
              </div>
              <p className="text-text-secondary mb-4">
                Boost your social media presence with our comprehensive range of services for Instagram, TikTok,
                YouTube, Twitter, and more.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag bg-background-tertiary text-text-secondary px-3 py-1 rounded-full text-sm">
                  Instagram
                </span>
                <span className="tag bg-background-tertiary text-text-secondary px-3 py-1 rounded-full text-sm">
                  TikTok
                </span>
                <span className="tag bg-background-tertiary text-text-secondary px-3 py-1 rounded-full text-sm">
                  YouTube
                </span>
                <span className="tag bg-background-tertiary text-text-secondary px-3 py-1 rounded-full text-sm">
                  Twitter
                </span>
              </div>
            </Link>

            {/* Publications Card */}
            <Link
              href="/publications"
              className="bg-background-secondary border border-border rounded-xl p-6 transition-all hover:border-green-medium hover:shadow-lg hover:shadow-green-dark/10 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-dark/30 flex items-center justify-center group-hover:bg-green-dark/50 transition-colors">
                  <BookOpen className="w-6 h-6 text-green-light" />
                </div>
                <h2 className="text-2xl font-bold">Publications</h2>
              </div>
              <p className="text-text-secondary mb-4">
                Get featured in top-tier publications with our extensive network of 1,100+ media outlets across various
                industries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag bg-background-tertiary text-text-secondary px-3 py-1 rounded-full text-sm">
                  News
                </span>
                <span className="tag bg-background-tertiary text-text-secondary px-3 py-1 rounded-full text-sm">
                  Business
                </span>
                <span className="tag bg-background-tertiary text-text-secondary px-3 py-1 rounded-full text-sm">
                  Tech
                </span>
                <span className="tag bg-background-tertiary text-text-secondary px-3 py-1 rounded-full text-sm">
                  Music
                </span>
              </div>
            </Link>

            {/* Tools Card */}
            <Link
              href="/tools"
              className="bg-background-secondary border border-border rounded-xl p-6 transition-all hover:border-green-medium hover:shadow-lg hover:shadow-green-dark/10 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-dark/30 flex items-center justify-center group-hover:bg-green-dark/50 transition-colors">
                  <Wrench className="w-6 h-6 text-green-light" />
                </div>
                <h2 className="text-2xl font-bold">Tools</h2>
              </div>
              <p className="text-text-secondary mb-4">
                Enhance your digital presence with our suite of professional tools for automation, SEO, knowledge panel,
                and web development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag bg-background-tertiary text-text-secondary px-3 py-1 rounded-full text-sm">
                  SEO
                </span>
                <span className="tag bg-background-tertiary text-text-secondary px-3 py-1 rounded-full text-sm">
                  Knowledge Panel
                </span>
                <span className="tag bg-background-tertiary text-text-secondary px-3 py-1 rounded-full text-sm">
                  Automation
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="bg-background-tertiary py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center text-text-tertiary text-sm">
            &copy; {new Date().getFullYear()} High Roller. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
