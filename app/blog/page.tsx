"use client"

import { useState } from "react"
import { ArrowRight, Tag, Rss } from "lucide-react"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const blogPosts = [
    {
      id: 1,
      title: "10 Facebook Ad Strategies That Actually Work in 2024",
      excerpt: "Discover the latest Facebook advertising tactics that are driving real results for our clients.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Paid Ads",
      tags: ["Facebook Ads", "Social Media", "Strategy"],
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "How to Create Content That Converts: A Complete Guide",
      excerpt: "Learn the psychology behind high-converting content and how to apply it to your marketing.",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      category: "Content Marketing",
      tags: ["Content", "SEO", "Copywriting"],
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "The Future of Social Media Marketing: Trends to Watch",
      excerpt: "Stay ahead of the competition with these emerging social media trends and strategies.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Social Media",
      tags: ["Social Media", "Trends", "Strategy"],
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Mastering Google Ads: A Beginner's Guide to PPC Success",
      excerpt: "Unlock the power of Google Ads with our comprehensive guide for beginners.",
      date: "Nov 28, 2024",
      readTime: "10 min read",
      category: "Paid Ads",
      tags: ["Google Ads", "PPC", "Beginner"],
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "SEO Best Practices for Local Businesses in 2024",
      excerpt: "Boost your local visibility and attract more customers with these essential SEO tips.",
      date: "Nov 20, 2024",
      readTime: "7 min read",
      category: "SEO",
      tags: ["Local SEO", "Small Business", "Optimization"],
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory
    return matchesCategory
  })

  const categories = ["all", "Paid Ads", "Content Marketing", "Social Media", "SEO"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary overflow-x-hidden text-foreground">
      <div className="h-24"></div> {/* To push content below fixed nav */}
      {/* Blog Hero / Intro */}
      <section id="blog-hero" className="pt-16 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Blog:
            <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              {" "}
              Marketing Insights & Resources
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay ahead of the curve with our latest articles, guides, and expert insights on digital marketing, SEO,
            paid ads, content strategy, and more.
          </p>
        </div>
      </section>
      {/* Search & Filters */}
      <section id="blog-filters" className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {category === "all" ? "All" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Articles Grid */}
      <section id="blog-articles" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-card backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:bg-accent transition-all duration-300"
                >
                  <img
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="flex items-center px-2 py-1 bg-muted rounded-full text-muted-foreground text-xs"
                        >
                          <Tag className="w-3 h-3 mr-1" /> {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">{post.date}</span>
                      <button className="text-primary hover:text-primary/90 font-medium flex items-center">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-muted-foreground text-lg py-10">
                No articles found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Newsletter CTA */}
      <section id="newsletter-cta" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get the latest marketing insights, tips, and exclusive content delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-yellow-400 hover:from-amber-400 hover:to-yellow-700 text-primary-foreground px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105"
              >
                Subscribe <Rss className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
