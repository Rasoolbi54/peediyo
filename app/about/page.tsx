"use client"

import { Lightbulb, Target, HeartHandshake, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary overflow-x-hidden text-foreground">
      <div className="h-24"></div> {/* To push content below fixed nav */}
      {/* Our Story */}
      <section id="our-story" className="pt-16 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Story:
            <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              {" "}
              Building Brands, Driving Growth
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Peediyo was founded in 2018 with a simple yet powerful vision: to empower businesses with cutting-edge
            digital marketing strategies that deliver tangible, measurable results. What started as a small team of
            passionate marketers has grown into a full-service agency, trusted by hundreds of clients worldwide to
            transform their online presence into revenue-generating machines.
          </p>
        </div>
      </section>
      {/* Mission / Vision / Values */}
      <section
  id="mission-values"
  className="py-20 px-6 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
    <div className="text-center">
      <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
      <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
      <p className="text-muted-foreground leading-relaxed">
        To deliver innovative, data-driven marketing solutions that accelerate
        our clients' growth and establish their lasting presence in the digital landscape.
      </p>
    </div>
    <div className="text-center">
      <Target className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
      <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
      <p className="text-muted-foreground leading-relaxed">
        To be the leading digital marketing partner, recognized for exceptional
        results, transparent processes, and unwavering commitment to client success.
      </p>
    </div>
    <div className="text-center">
      <HeartHandshake className="w-16 h-16 text-purple-500 mx-auto mb-6" />
      <h3 className="text-3xl font-bold text-foreground mb-4">Our Values</h3>
      <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
        <li>Integrity & Transparency</li>
        <li>Innovation & Adaptability</li>
        <li>Client-Centric Approach</li>
        <li>Excellence & Accountability</li>
      </ul>
    </div>
  </div>
</section>

      {/* Our Leadership */}
     
       <section id="meet-the-founder" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">Meet Our Founder</h2>
          <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-8 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <img
              src="prachee.jpg"
              alt="Jane Doe, CEO & Lead Strategist"
              className="w-48 h-48 rounded-full object-cover border-4 border-accent flex-shrink-0"
            />
            <div className="text-left">
              <h3 className="text-3xl font-semibold text-foreground mb-2">Prachee</h3>
              <p className="text-primary text-lg mb-4">CEO & Lead Strategist</p>
             <p className="text-foreground leading-relaxed">
  Prachee is a multi-skilled creator with 2+ years of experience in content writing, copy, and brand storytelling. As the founder of PeeDiYo, she combines creativity and strategy to craft content that connects and converts.
</p>

            </div>
          </div>
        </div>
      </section>
     
    </div>
  )
}
