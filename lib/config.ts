// Types
export interface Price {
  value: string
  period?: string
}

export interface Tag {
  text: string
  color: string
}

export interface Service {
  id: string
  title: string
  description: string
  price: Price | string
  tags?: Tag[]
  features?: string[]
  icon?: string
  buttonText?: string
  buttonLink?: string
  graphicType?: "network" | "wave" | "particles" | "grid"
}

export interface GlobalConfig {
  telegramBotUsername: string
  telegramConnectLink: string
  defaultCurrency: string
  defaultButtonText: string
  defaultBookCallText: string
  defaultBookCallLink: string
  defaultBuyNowLink: string
}

// Global configuration
export const globalConfig: GlobalConfig = {
  telegramBotUsername: "@inflnce_bot",
  telegramConnectLink: "https://t.me/inflnce_bot",
  defaultCurrency: "$",
  defaultButtonText: "Buy Now",
  defaultBookCallText: "Book a Call",
  defaultBookCallLink: "https://calendly.com/highroller/consultation",
  defaultBuyNowLink: "https://checkout.highroller.io/",
}

// Automation services
export const automationServices: Service[] = [
  {
    id: "email-flow-automation",
    title: "Email Flow Automation",
    description: "Automate your email marketing campaigns with our advanced email flow automation service.",
    price: { value: "$199", period: "month" },
    tags: [
      { text: "Automation", color: "tag-green" },
      { text: "Email", color: "tag-blue" },
    ],
    icon: "Mail",
    buttonText: "Buy Now",
    buttonLink: "https://checkout.highroller.io/email-flow",
    graphicType: "network",
  },
  {
    id: "social-media-automation",
    title: "Social Media Automation",
    description: "Schedule and automate your social media posts across multiple platforms.",
    price: { value: "$149", period: "month" },
    tags: [
      { text: "Automation", color: "tag-green" },
      { text: "Social", color: "tag-purple" },
    ],
    icon: "Share2",
    buttonText: "Buy Now",
    buttonLink: "https://checkout.highroller.io/social-automation",
    graphicType: "wave",
  },
  // Add more automation services as needed
]

// SEO services
export const seoServices: Service[] = [
  {
    id: "seo-audit",
    title: "SEO Audit",
    description: "Comprehensive analysis of your website's SEO performance with actionable recommendations.",
    price: "$499",
    features: [
      "Full website analysis",
      "Keyword research",
      "Competitor analysis",
      "Technical SEO audit",
      "Content optimization recommendations",
    ],
    icon: "Search",
    buttonText: "Book a Call",
    buttonLink: "https://calendly.com/highroller/seo-consultation",
  },
  {
    id: "monthly-seo",
    title: "Monthly SEO Service",
    description: "Ongoing SEO optimization and management to improve your website's search engine rankings.",
    price: { value: "$999", period: "month" },
    features: [
      "Keyword optimization",
      "Content creation",
      "Link building",
      "Monthly reporting",
      "Technical SEO maintenance",
    ],
    icon: "TrendingUp",
    buttonText: "Book a Call",
    buttonLink: "https://calendly.com/highroller/seo-consultation",
  },
  // Add more SEO services as needed
]

// Knowledge Panel services
export const knowledgePanelServices: Service[] = [
  {
    id: "knowledge-panel-creation",
    title: "Knowledge Panel Creation",
    description: "Get your business or personal brand featured in Google's Knowledge Panel.",
    price: "$1,499",
    features: [
      "Entity creation",
      "Wikipedia strategy",
      "Wikidata optimization",
      "Citation building",
      "Verification assistance",
    ],
    icon: "Info",
    buttonText: "Book a Call",
    buttonLink: "https://calendly.com/highroller/knowledge-panel",
  },
  // Add more Knowledge Panel services as needed
]

// Web Development services
export const webDevelopmentServices: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    description: "Custom website development tailored to your business needs.",
    price: "Starting at $2,999",
    features: [
      "Custom design",
      "Responsive layout",
      "SEO optimization",
      "Content management system",
      "Analytics integration",
    ],
    icon: "Code",
    buttonText: "Get Quote",
    buttonLink: "https://checkout.highroller.io/web-quote",
  },
  // Add more Web Development services as needed
]

// Social Media services
export const socialMediaServices = {
  instagram: [
    // Instagram services
  ],
  youtube: [
    // YouTube services
  ],
  // Add more platforms as needed
}
