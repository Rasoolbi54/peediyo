"use client"

import { useState } from "react"
import { Check, ChevronRight } from "lucide-react"

export default function PricingPage() {
  const [planType, setPlanType] = useState("monthly") // 'monthly' or 'one-time'

  const monthlyPlans = [
    {
      name: "Starter",
      price: "$999",
      duration: "/month",
      description: "Ideal for small businesses looking to establish a digital presence.",
      features: [
        "Basic Social Media Management",
        "Content Strategy (2 posts/week)",
        "Monthly Performance Report",
        "Email Support",
        "1-on-1 Strategy Call (Monthly)",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Growth",
      price: "$2,499",
      duration: "/month",
      description: "Designed for growing businesses ready to scale their marketing efforts.",
      features: [
        "Advanced Social Media Management",
        "Performance Ads (Google & Meta)",
        "Content Creation (4 posts/week)",
        "SEO Optimization (Basic)",
        "Dedicated Account Manager",
        "Priority Email & Phone Support",
        "Bi-weekly Strategy Calls",
      ],
      cta: "Choose Plan",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "",
      description: "Tailored solutions for large enterprises with complex marketing needs.",
      features: [
        "Full-Service Digital Marketing",
        "Custom Funnel Building",
        "Advanced SEO & Analytics",
        "Influencer Marketing",
        "Dedicated Team",
        "24/7 Premium Support",
        "Weekly Strategy Sessions",
      ],
      cta: "Contact for Quote",
      highlight: false,
    },
  ]

  const oneTimePackages = [
    {
      name: "Brand Launch",
      price: "$1,500",
      duration: "one-time",
      description: "Establish your brand identity and initial online presence.",
      features: [
        "Logo & Brand Guide",
        "Basic Website Setup (1-page)",
        "Social Media Profile Setup",
        "Initial Content Pack (3 posts)",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Ad Campaign Kickstart",
      price: "$1,200",
      duration: "one-time",
      description: "Launch your first high-performing paid advertising campaign.",
      features: [
        "Ad Account Setup",
        "Audience Research",
        "Ad Copy & Creative (3 variants)",
        "Campaign Launch & Monitoring (1 week)",
        "Performance Report",
      ],
      cta: "Launch Campaign",
      highlight: false,
    },
    {
      name: "SEO Audit & Strategy",
      price: "$800",
      duration: "one-time",
      description: "Comprehensive analysis of your SEO and a roadmap for improvement.",
      features: [
        "Full Website SEO Audit",
        "Keyword Research",
        "Competitor Analysis",
        "Custom SEO Strategy Document",
        "1-on-1 Strategy Session",
      ],
      cta: "Get Audit",
      highlight: false,
    },
  ]

  const currentPlans = planType === "monthly" ? monthlyPlans : oneTimePackages

  const faqs = [
    {
      question: "What is a 'Free Strategy Call'?",
      answer:
        "It's a no-obligation 30-minute call where we discuss your business goals, current marketing challenges, and how Peediyo can help you achieve measurable results. It's a chance for us to understand your needs and for you to learn about our approach.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "Absolutely not. Our pricing is transparent, and all costs are outlined upfront. We believe in clear communication and building trust with our clients.",
    },
    {
      question: "Can I customize a plan?",
      answer:
        "Yes! While we offer structured plans, we understand that every business is unique. For our Enterprise plan or specific project needs, we offer custom quotes and tailored solutions. Contact us to discuss your requirements.",
    },
    {
      question: "What is your typical ROI for clients?",
      answer:
        "Our average client sees a 300% ROI increase within the first 6-12 months, but results can vary based on industry, budget, and market conditions. We focus on strategies that deliver measurable returns.",
    },
    {
      question: "How long are your contracts?",
      answer:
        "Our monthly plans typically start with a 3-month minimum commitment to ensure enough time to implement strategies and see results. After that, they convert to month-to-month. One-time packages are project-based.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary overflow-x-hidden text-foreground">
      <div className="h-24"></div> {/* To push content below fixed nav */}
      {/* Pricing Hero */}
      <section id="pricing-hero" className="pt-16 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Plans:
            <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              {" "}
              Flexible Solutions for Every Business
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose the perfect marketing plan that aligns with your business goals and budget. From comprehensive
            monthly partnerships to targeted one-time projects, we have you covered.
          </p>
        </div>
      </section>
      {/* Plan Type Toggle */}
      <section id="plan-toggle" className="py-8 px-6 text-center">
        <div className="max-w-xs mx-auto bg-card backdrop-blur-sm border border-border rounded-full p-1 flex justify-center">
          <button
            onClick={() => setPlanType("monthly")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              planType === "monthly"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly Plans
          </button>
          <button
            onClick={() => setPlanType("one-time")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              planType === "one-time"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            One-Time Packages
          </button>
        </div>
      </section>
      {/* Pricing Cards */}
      <section id="pricing-cards" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card backdrop-blur-sm border rounded-xl p-8 flex flex-col ${
                plan.highlight ? "border-primary scale-105 shadow-lg" : "border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <div className="flex items-baseline justify-center mb-8 md:flex-col">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                  {plan.price}
                </span>
                {plan.duration && (
                  <span className="text-muted-foreground text-base sm:text-lg md:text-xl ml-2 md:ml-0">
                    {plan.duration}
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            <a
  href="https://wa.me/916200554124"
  target="_blank"
  rel="noopener noreferrer"
  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl ${
    plan.highlight
      ? "bg-gradient-to-r from-primary to-yellow-500 hover:to-amber-400 text-primary-foreground"
      : "border border-primary text-primary hover:bg-primary/10 hover:text-primary"
  }`}
>
  {plan.cta}
</a>

            </div>
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg mb-4">
            Need something more specific? We offer custom solutions tailored to your unique needs.
          </p>
          <button className="border border-primary/20 hover:border-primary/40 text-primary hover:text-primary/90 px-8 py-3 rounded-lg font-semibold transition-all hover:bg-primary/5">
            Get a Custom Quote
          </button>
        </div> */}
      </section>
      {/* Pricing FAQ */}
      <section id="pricing-faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 cursor-pointer group"
                onClick={(e) => {
                  const target = e.currentTarget.querySelector(".faq-answer") as HTMLElement
                  if (target) {
                    target.classList.toggle("hidden")
                    e.currentTarget.querySelector(".faq-arrow")?.classList.toggle("rotate-90")
                  }
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-foreground">{faq.question}</h3>
                  <ChevronRight className="w-6 h-6 text-primary transition-transform faq-arrow" />
                </div>
                <p className="faq-answer hidden text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
