"use client";

import {
  PenTool,
  Globe,
  Video,
  Palette,
  Mail,
  Sparkles,
} from "lucide-react";

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
            Copywriting Services That Convert
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Services:
            <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              {" "} Words That Work For You
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Peediyo, we craft copy that captivates, persuades, and converts. Our services are tailored to elevate your brand's voice, engage your audience, and drive meaningful action.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Email Copywriting",
                icon: <Mail className="w-6 h-6" />,
                description:
                  "Not just emails. I create campaigns that nurture, seduce, and sell — making your audience look forward to every send.",
                color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400",
              },
              {
                name: "Landing Page Copy",
                icon: <Globe className="w-6 h-6" />,
                description:
                  "Your offer deserves more than a template. I build persuasive journeys that guide readers straight to “yes” — with trust and clarity.",
                color: "bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400",
              },
              {
                name: "Script Pack / Ad Scripts",
                icon: <Video className="w-6 h-6" />,
                description:
                  "From 15-second scroll-stoppers to long-form launches — I write for the screen like a director, not a salesperson.",
                color: "bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400",
              },
              {
                name: "Brand Voice Development",
                icon: <Palette className="w-6 h-6" />,
                description:
                  "Every brand has a soul. I help you find it, speak it, and scale it — so your content never sounds like anyone else.",
                color: "bg-yellow-50 text-yellow-400 dark:bg-yellow-950/50 dark:text-yellow-400",
              },
              {
                name: "Website Copy",
                icon: <PenTool className="w-6 h-6" />,
                description:
                  "The words on your site decide if they stay, scroll, or buy. I make sure they do all three — with elegance, power, and precision.",
                color: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-card backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-accent transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Icon Style Updated */}
                <div
                  className={`inline-flex p-3 rounded-lg ${service.color} mb-6`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Unchanged) */}
      <section id="cta" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-primary/10 to-yellow-500/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-yellow-500/20 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl translate-y-24 -translate-x-24" />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Free Strategy Session
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Elevate Your Marketing?
              </h2>

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
  );
}
