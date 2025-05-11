import Link from "next/link"
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LearnPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-black to-background">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="px-3 py-1 rounded-full border border-green-500/30 text-green-400 text-sm font-medium">
                Learn More About inflnce
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-400">
              Your Complete Social Media Growth Solution
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Discover how inflnce can help you grow your online presence and reach your target audience effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-6 h-auto text-lg font-medium rounded-md transition-all shadow-lg shadow-green-900/20 hover:shadow-green-900/30 hover:translate-y-[-2px]"
              >
                <Link href="/login">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container px-4 mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <div className="px-3 py-1 rounded-full bg-green-950 text-green-400 text-sm font-medium">
                About inflnce
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              inflnce is a comprehensive platform designed to help individuals and businesses grow their online presence
              across multiple social media platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                We believe that everyone deserves a strong online presence. Our mission is to provide accessible,
                effective, and transparent social media growth services that deliver real results.
              </p>

              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-muted-foreground mb-6">
                We use a combination of proven strategies, cutting-edge technology, and industry expertise to help you
                grow your social media presence organically and sustainably.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Organic growth strategies that comply with platform guidelines</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Targeted audience engagement to increase your reach</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Transparent reporting and measurable results</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Dedicated support from social media experts</p>
                </div>
              </div>
            </div>

            <div className="bg-background-secondary rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Platforms We Support</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-background rounded-lg hover:bg-green-950/10 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-purple-600/20 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <span className="ml-3 font-medium">Instagram</span>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </div>

                <div className="flex items-center p-3 bg-background rounded-lg hover:bg-green-950/10 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span className="ml-3 font-medium">YouTube</span>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </div>

                <div className="flex items-center p-3 bg-background rounded-lg hover:bg-green-950/10 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-pink-600/20 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                    <span className="ml-3 font-medium">TikTok</span>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </div>

                <div className="flex items-center p-3 bg-background rounded-lg hover:bg-green-950/10 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                    <span className="ml-3 font-medium">Twitter</span>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </div>

                <div className="flex items-center p-3 bg-background rounded-lg hover:bg-green-950/10 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-green-600/20 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    <span className="ml-3 font-medium">Spotify</span>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background-secondary relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,2,0.03),transparent_70%)]"></div>
        <div className="container px-4 mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <div className="px-3 py-1 rounded-full bg-green-950 text-green-400 text-sm font-medium">How It Works</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Process, Powerful Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes it easy to get started and see results quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose Your Platform</h3>
              <p className="text-muted-foreground mb-4">
                Select the social media platform you want to grow, whether it's Instagram, TikTok, YouTube, Twitter,
                LinkedIn, or Spotify.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Select Your Package</h3>
              <p className="text-muted-foreground mb-4">
                Choose from our range of packages designed to meet your specific needs and budget. From basic growth to
                comprehensive management.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Watch Your Growth</h3>
              <p className="text-muted-foreground mb-4">
                Sit back and watch as your social media presence grows. Track your progress through our detailed
                analytics dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background relative">
        <div className="container px-4 mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <div className="px-3 py-1 rounded-full bg-green-950 text-green-400 text-sm font-medium">FAQ</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background-secondary p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Is this growth organic?</h3>
              <p className="text-muted-foreground">
                Yes, we use organic growth strategies that comply with platform guidelines. We focus on real engagement
                and authentic growth rather than bots or fake accounts.
              </p>
            </div>

            <div className="bg-background-secondary p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">How long does it take to see results?</h3>
              <p className="text-muted-foreground">
                Most clients start seeing results within the first week, with significant growth typically occurring
                within the first month. However, results can vary depending on your starting point, niche, and chosen
                package.
              </p>
            </div>

            <div className="bg-background-secondary p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Do I need to provide my password?</h3>
              <p className="text-muted-foreground">
                For some services, we may need access to your account to implement growth strategies. However, we use
                secure methods and never store your passwords. You can also choose from our many services that don't
                require account access.
              </p>
            </div>

            <div className="bg-background-secondary p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can cancel your subscription at any time. There are no long-term contracts or hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-background-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,2,0.05),transparent_70%)]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-3">
              <div className="px-3 py-1 rounded-full bg-green-950 text-green-400 text-sm font-medium">
                Ready to Grow?
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Social Media Growth Journey Today</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of individuals and businesses who have transformed their online presence with inflnce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-6 h-auto text-lg font-medium rounded-md transition-all shadow-lg shadow-green-900/20 hover:shadow-green-900/30 hover:translate-y-[-2px]"
              >
                <Link href="/login">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
