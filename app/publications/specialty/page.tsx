"use client"
import Link from "next/link"
import MemberLayout from "@/components/member-layout"

export default function SpecialtyPublicationsPage() {
  return (
    <MemberLayout>
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6 py-4">
            <Link
              href="/publications"
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-background-tertiary text-text-secondary hover:text-text-primary"
            >
              All Publications
            </Link>
            <Link
              href="/publications/specialty"
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-green-dark text-white"
            >
              Specialty Publications
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Specialty Publications</h1>

        <p className="text-text-secondary mb-8">
          Our specialty publications offer unique opportunities to reach niche audiences with targeted content. These
          publications have specific requirements and higher authority metrics.
        </p>

        {/* Content for specialty publications would go here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example specialty publication cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-background-secondary rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-dark/30 rounded-md flex items-center justify-center text-green-light font-bold">
                  SP
                </div>
                <h3 className="text-lg font-bold">Specialty Publication {i}</h3>
              </div>
              <p className="text-text-secondary mb-4">
                High-authority publication with strict editorial guidelines and premium placement.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${i * 500 + 1000}</span>
                <button className="bg-green-medium hover:bg-green-dark text-white font-semibold py-2 px-4 rounded-md transition-colors text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MemberLayout>
  )
}
