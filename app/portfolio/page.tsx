"use client"

import { useState } from "react"
import { ArrowRight, BarChart3, CheckCircle, Lightbulb } from "lucide-react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const caseStudies = [
    {
      id: 1,
      client: "FashionNova",
      category: "Ecom",
      problem: "Stagnant sales & high ad costs.",
      strategy: "Implemented a full-funnel Meta Ads strategy with dynamic retargeting.",
      result: "400% ROAS increase & 2x revenue.",
      metrics: ["4.0x ROAS", "2M Impressions", "15% CTR"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      client: "MindfulCoach",
      category: "Coaching",
      problem: "Struggling to acquire high-ticket coaching clients.",
      strategy: "Developed a LinkedIn lead generation system & webinar funnel.",
      result: "300% increase in qualified leads & 50% conversion rate.",
      metrics: ["300% Leads", "50% Conversion", "25% Lower CPA"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      client: "Local Eats Diner",
      category: "Local Biz",
      problem: "Low foot traffic & online visibility.",
      strategy: "Launched local SEO campaign & geo-targeted social media ads.",
      result: "60% increase in walk-ins & 4.8-star Google rating.",
      metrics: ["60% Traffic", "4.8★ Rating", "50K Engagements"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      client: "SaaS Innovate",
      category: "SaaS",
      problem: "High churn rate and low trial-to-paid conversions.",
      strategy: "Implemented email nurturing sequences and in-app messaging.",
      result: "Reduced churn by 20% and increased conversion by 15%.",
      metrics: ["20% Churn Reduction", "15% Conversion Boost", "100K MRR"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      client: "FitLife Gym",
      category: "Local Biz",
      problem: "Struggling to fill new membership slots.",
      strategy: "Ran local Facebook lead ads and SMS follow-up campaigns.",
      result: "Filled 100 new memberships in 30 days.",
      metrics: ["100 New Members", "2x ROI", "90% Show-up Rate"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      client: "EduTech Platform",
      category: "SaaS",
      problem: "Low course enrollments despite high website traffic.",
      strategy: "Optimized landing pages, implemented retargeting, and A/B tested CTAs.",
      result: "Increased course enrollments by 80% and reduced CPA by 30%.",
      metrics: ["80% Enrollments", "30% Lower CPA", "500K Views"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const filteredCaseStudies =
    activeFilter === "all" ? caseStudies : caseStudies.filter((study) => study.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary overflow-x-hidden text-foreground">
      <div className="h-24"></div> {/* To push content below fixed nav */}
      {/* Hero Intro */}
      <section id="portfolio-hero" className="pt-16 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Results:
            <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              {" "}
              Where Strategy Meets Success
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe in measurable outcomes. Explore our portfolio of successful case studies where we've transformed
            challenges into significant growth for our clients across various industries.
          </p>
        </div>
      </section>
      {/* Filter Buttons */}
      <section id="portfolio-filters" className="py-8 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {["all", "Ecom", "Coaching", "Local Biz", "SaaS"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:bg-accent"
              }`}
            >
              {filter === "all" ? "All Categories" : filter}
            </button>
          ))}
        </div>
      </section>
      {/* Grid of Case Studies */}
      <section id="case-studies-grid" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-card backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:bg-accent transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-yellow-500/20 flex items-center justify-center">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={`Screenshot of ${study.client} project`}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{study.client}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {study.problem.split(":")[0]} &gt; {study.result.split(":")[0]}
                  </h3>
                  <div className="space-y-2 text-muted-foreground mb-4">
                    <p className="flex items-start">
                      <Lightbulb className="w-5 h-5 mr-2 flex-shrink-0 text-primary" />
                      <span className="font-semibold text-foreground">Problem:</span> {study.problem}
                    </p>
                    <p className="flex items-start">
                      <BarChart3 className="w-5 h-5 mr-2 flex-shrink-0 text-yellow-500" />
                      <span className="font-semibold text-foreground">Strategy:</span> {study.strategy}
                    </p>
                    <p className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 text-green-500" />
                      <span className="font-semibold text-foreground">Result:</span> {study.result}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  <button className="text-primary hover:text-primary/90 font-medium flex items-center">
                    View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
