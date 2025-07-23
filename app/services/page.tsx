"use client"

import {
  ArrowRight,
  MessageSquare,
  Target,
  Palette,
  Code,
  Search,
  FilterIcon as Funnel,
  Mail,
  Users,
  Video,
  Sparkles,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary overflow-x-hidden text-foreground">
      {/* Navigation Placeholder */}
      <div className="h-24"></div>

      {/* Intro Section */}
      <section id="intro" className="pt-16 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Comprehensive Digital Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Services:
            <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              {" "}
              Solutions That Drive Growth
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Peediyo, we don't just offer services; we provide tailored strategies designed to solve your unique
            business challenges, attract your ideal customers, and significantly boost your revenue. Our expertise spans
            the entire digital marketing landscape, ensuring comprehensive and impactful results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Social Media Marketing",
                icon: <MessageSquare className="w-8 h-8" />,
                description:
                  "Build vibrant communities and drive engagement across all major social platforms with strategic content and community management.",
                color: "from-blue-500 to-cyan-500",
                features: ["Content Strategy", "Community Management", "Analytics & Reporting"],
              },
              {
                name: "Performance Ads (PPC)",
                icon: <Target className="w-8 h-8" />,
                description:
                  "Drive immediate results with targeted advertising campaigns across Google, Facebook, and other platforms that maximize ROI.",
                color: "from-primary to-red-500",
                features: ["Google Ads", "Facebook Ads", "Campaign Optimization"],
              },
              {
                name: "Branding & Design",
                icon: <Palette className="w-8 h-8" />,
                description:
                  "Craft compelling brand identities and stunning visual assets that resonate with your target audience and build trust.",
                color: "from-purple-500 to-yellow-500",
                features: ["Logo Design", "Brand Guidelines", "Visual Assets"],
              },
              {
                name: "Web Development",
                icon: <Code className="w-8 h-8" />,
                description:
                  "Develop high-performing, user-friendly websites optimized for conversion and built with modern technologies.",
                color: "from-green-500 to-emerald-500",
                features: ["Responsive Design", "E-commerce", "Performance Optimization"],
              },
              {
                name: "SEO Optimization",
                icon: <Search className="w-8 h-8" />,
                description:
                  "Improve your organic search rankings and drive qualified traffic to your site with proven SEO strategies.",
                color: "from-indigo-500 to-purple-500",
                features: ["Keyword Research", "Technical SEO", "Content Optimization"],
              },
              {
                name: "Funnel Building & Optimization",
                icon: <Funnel className="w-8 h-8" />,
                description:
                  "Design and optimize sales funnels that convert visitors into loyal customers through strategic user journey mapping.",
                color: "from-yellow-500 to-primary",
                features: ["Landing Pages", "A/B Testing", "Conversion Optimization"],
              },
              {
                name: "Email Marketing",
                icon: <Mail className="w-8 h-8" />,
                description:
                  "Create engaging email campaigns that nurture leads and drive repeat business with personalized messaging.",
                color: "from-teal-500 to-blue-500",
                features: ["Automation Sequences", "Newsletter Design", "List Segmentation"],
              },
              {
                name: "Influencer Campaigns",
                icon: <Users className="w-8 h-8" />,
                description:
                  "Connect with key influencers to amplify your brand message and reach new audiences through authentic partnerships.",
                color: "from-red-500 to-primary",
                features: ["Influencer Matching", "Campaign Management", "Performance Tracking"],
              },
              {
                name: "UGC & Video Editing",
                icon: <Video className="w-8 h-8" />,
                description:
                  "Produce authentic user-generated content and professional video ads that convert viewers into customers.",
                color: "from-yellow-500 to-purple-500",
                features: ["Video Production", "UGC Campaigns", "Post-Production"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-card backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-accent transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-background/90 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 text-primary-foreground shadow-lg`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">{service.description}</p>

                {/* Feature list */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section id="cta" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-primary/10 to-yellow-500/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-yellow-500/20 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl translate-y-24 -translate-x-24" />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Free Strategy Session
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Elevate Your Marketing?</h2>

              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Book a free 30-minute strategy call and discover how our services can transform your business. No sales
                pitch, just actionable insights tailored to your goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
               <a
  href="https://calendly.com/teampeediyo/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-primary to-yellow-500 hover:from-amber-400 hover:to-amber-500 text-primary-foreground px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
>
  Book Free Strategy Call
</a>

                {/* <button className="border-2 border-primary/20 hover:border-primary/40 text-foreground px-10 py-4 rounded-xl font-semibold transition-all hover:bg-primary/5">
                  Get Custom Quote
                </button> */}
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  No commitment required
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  100% free consultation
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Actionable insights guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <div className="h-24"></div>
    </div>
  )
}
