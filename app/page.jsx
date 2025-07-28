"use client";

import ServicesSection from "./bundles/ServiceSection";
import Fammsection from './bundles/Fammsection'
import { useState } from "react";

import {
  ChevronRight,
  Play,
  Award,
  MessageSquare,
  PenTool,
  Search,
  BarChart3,
  TrendingUp,
  Target,
  Users,
  Shield,
  Palette,
  Globe,
  Video,
  ShoppingCart,
  Cog,
  Instagram,
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Facebook,
} from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Do you also handle hosting and domain purchase?",
      answer:
        "We can guide you in buying hosting and domain from trusted providers. Hosting/domain costs are not included in our service fees, but we’ll set them up if you give access.",
    },
    {
      question: "What platforms do you build websites on?",
      answer:
        "We specialize in Shopify, WordPress, and custom portfolio sites. We’ll suggest the platform that fits your business needs and budget.",
    },
    {
      question: "Do you provide ongoing support or maintenance after delivery?",
      answer:
        "Ongoing support or maintenance will depend on the service plan you choose. Everything related to post-delivery support is clearly mentioned in the respective plans.",
    },
    {
      question: "Do you offer refunds if I don’t like the work?",
      answer:
        "We don’t offer refunds once work has started, but we give 2 free rounds of revisions to make sure you’re 100% happy with the result.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "A basic website: 7–10 days.\nA full Shopify or complex website: 2–4 weeks.\nContent writing (emails, landing pages): 3–5 days.\n(Timelines may change based on revisions and your feedback speed.)",
    },
    {
      question:
        "Do I have to give you all the content and images for my website?",
      answer:
        "No, we can handle content writing and stock images if needed. But any brand-specific images, product details, or login credentials must come from you.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="h-24"></div>

      {/* Hero Banner */}
      <section id="hero" className="pt-16 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border text-primary text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning Marketing Agency
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Because your brand deserves
            <span className="text-primary block mt-2">
              more than a template.
            </span>
          </h1>
          <p className="md:text-xl text-md text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            We craft conversion-led copy that speaks your brand’s truth —
            quietly persuasive, emotionally true, and enduring. No noise. No
            gimmicks. Just a timeless digital presence made to elevate trust and
            sell with a story.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/teampeediyo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold flex items-center transition-all shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Fammsection />

      {/* Services Preview */}
      <section id="services" className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-foreground mb-4">
        Our Services
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Copywriting crafted to spark emotion, build trust, and drive action —
        because great writing doesn't just talk, it converts.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Email Copywriting",
          description:
            "Not just emails. I create campaigns that nurture, seduce, and sell — making your audience look forward to every send.",
          icon: <Mail className="w-6 h-6" />,
          color:
            "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400",
        },
        {
          title: "Landing Page Copy",
          description:
            "Your offer deserves more than a template. I build persuasive journeys that guide readers straight to “yes” — with trust and clarity.",
          icon: <Globe className="w-6 h-6" />,
          color:
            "bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400",
        },
        {
          title: "Script Pack / Ad Scripts",
          description:
            "From 15-second scroll-stoppers to long-form launches — I write for the screen like a director, not a salesperson.",
          icon: <Video className="w-6 h-6" />,
          color:
            "bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400",
        },
        {
          title: "Brand Voice Development",
          description:
            "Every brand has a soul. I help you find it, speak it, and scale it — so your content never sounds like anyone else.",
          icon: <Palette className="w-6 h-6" />,
          color:
            "bg-yellow-50 text-yellow-400 dark:bg-yellow-950/50 dark:text-yellow-400",
        },
        {
          title: "Website Copy",
          description:
            "The words on your site decide if they stay, scroll, or buy. I make sure they do all three — with elegance, power, and precision.",
          icon: <PenTool className="w-6 h-6" />,
          color:
            "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
        >
          <div
            className={`inline-flex p-3 rounded-lg ${service.color} mb-6`}
          >
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {service.description}
          </p>
          {/* <button className="text-primary hover:text-primary/90 font-medium flex items-center">
            Learn More <ArrowRight className="w-4 h-6 ml-2" />
          </button> */}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section id="why-us" className="py-24 px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Peediyo
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proven methodology and commitment to excellence set us apart
              in the digital marketing landscape
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Proven Results",
                description:
                  "Track record of delivering measurable ROI and sustainable growth for our clients.",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                title: "Expert Team",
                description:
                  "Certified professionals with extensive experience across all digital marketing channels.",
                icon: <Users className="w-8 h-8" />,
                color: "text-green-600 dark:text-green-400",
              },
              {
                title: "Data-Driven",
                description:
                  "Every strategy is backed by comprehensive analytics and performance metrics.",
                icon: <BarChart3 className="w-8 h-8" />,
                color: "text-purple-600 dark:text-purple-400",
              },
              {
                title: "Full Transparency",
                description:
                  "Complete visibility into campaign performance with detailed reporting and insights.",
                icon: <Shield className="w-8 h-8" />,
                color: "text-amber-400 dark:text-amber-400",
              },
            ].map((point, index) => (
              <div key={index} className="text-center">
                <div className={`${point.color} mb-6 flex justify-center`}>
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Sections */}
      <ServicesSection />

      {/* FAQ Section */}
      {/* <section className=" py-16 text-foreground bg-background mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-10 text-center">FAQs</h2>

          
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="flex-1 space-y-6">
              {faqData
                .filter((_, i) => i % 2 === 0)
                .map((faq, index) => {
                  const realIndex = index * 2;
                  return (
                    <div
                      key={realIndex}
                      className={`border rounded-md transition-all duration-300 ${
                        activeIndex === realIndex
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-primary"
                      }`}
                    >
                      <button
                        className="w-full flex justify-between items-center text-left text-lg font-semibold p-4 transition duration-300"
                        onClick={() => toggleFAQ(realIndex)}
                      >
                        {faq.question}
                        {activeIndex === realIndex ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      {activeIndex === realIndex && (
                        <div className="p-4 text-sm text-muted-foreground bg-card border-t border-primary">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
            <div className="flex-1 space-y-6 mt-6 md:mt-0">
              {faqData
                .filter((_, i) => i % 2 !== 0)
                .map((faq, index) => {
                  const realIndex = index * 2 + 1;
                  return (
                    <div
                      key={realIndex}
                      className={`border rounded-md transition-all duration-300 ${
                        activeIndex === realIndex
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-primary"
                      }`}
                    >
                      <button
                        className="w-full flex justify-between items-center text-left text-lg font-semibold p-4 transition duration-300"
                        onClick={() => toggleFAQ(realIndex)}
                      >
                        {faq.question}
                        {activeIndex === realIndex ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      {activeIndex === realIndex && (
                        <div className="p-4 text-sm text-muted-foreground bg-card border-t border-primary">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image Card */}
            <div className="relative flex-shrink-0">
              {/* amber background cards */}
              <div className="absolute -top-4 -left-4 w-80 h-[420px] bg-primary rounded-xl rotate-2 z-0"></div>
              <div className="absolute -top-2 -left-2 w-80 h-[420px] bg-primary/80 rounded-xl rotate-1 z-10"></div>

              {/* Main image card */}
              <div className="relative w-80 h-[420px] bg-card rounded-xl overflow-hidden shadow-xl z-20">
                <img
                  src="prachee.jpg"
                  alt="Prachee, CEO & Lead Strategist"
                  className="w-full h-full object-cover"
                />

                {/* Social badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-md">
                  <div className="flex items-center gap-2">
                    <Instagram size={16} />
                    <span>Prachee</span>
                  </div>
                  <div className="text-xs mt-1 opacity-90">
                    2+ Years Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 text-left">
              <div className="mb-8">
                <h3 className="text-foreground text-lg font-medium mb-2">
                  <span className="text-foreground">Meet</span>{" "}
                  <span className="text-primary">The Founder</span>
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Prachee
                </h2>
                <div className="text-primary text-lg md:text-xl font-semibold">
                  2+ Years Experience | Content Creator
                </div>
                <div className="text-primary text-lg md:text-xl font-semibold ">
                  Founder & Lead Strategist at PeeDiYo Partners
                </div>
              </div>

              <div className="space-y-4 text-foreground text-base md:text-lg leading-relaxed">
                <p>
                  With 2+ years of hands-on experience in content creation and
                  copywriting, Prachee has mastered the art of connecting brands
                  with audiences through engaging stories and
                  high-converting strategies.
                </p>

                <p>
                  A natural storyteller and multi-talented artist (dance,
                  singing, acting, and pageantry), she brings creativity and
                  strategy together. Currently writing two novels and working on
                  luxury brand copy, Prachee leverages her diverse skill set to
                  craft content that sells while building PeeDiYo into a
                  future powerhouse.
                </p>

                <p>
                  Her journey spans across multiple fields — from content
                  writing, blog building, and affiliate marketing to prompt
                  engineering, dropshipping, and graphic design. As a creator
                  with 2k+ followers on Instagram and proven engagement, she
                  knows how to build attention organically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let’s Connect
            <span className="text-primary">First.</span>
          </h2>
          <p className=" max-w-xl mx-auto mb-12 text-foreground  text-start md:text-center ">
            Every brand is different. Every story deserves its own attention. We
            don’t throw prices. We build aligned partnerships. If it’s a fit —
            we move with intention.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-start md:text-center gap-4">
            {/* Book Call Button */}
            <a
              href="https://calendly.com/teampeediyo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
            >
              Book Call
            </a>

            {/* WhatsApp Chat Button */}
            <a
              href="https://wa.me/916200554124"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white  font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
            >
              Chat On Whatsapp
            </a>
          </div>

          {/* Other Links */}
          <div className="mt-12 text-center">
            <p className="text-foreground mb-4">
              You can also reach out on socials:
            </p>
            <div className="flex justify-center gap-6 text-foreground">
              <a
                href="https://instagram.com/house_of_peediyo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/posts/prache-rayne-0296b2370_a-few-months-ago-i-was-sitting-on-my-hostel-activity-7345672935287783425-s-x2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="hover:text-primary" />
              </a>
              <a
                href="https://www.facebook.com/houseofpeediyo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Footer note */}
          <p className="mt-10 text-sm text-muted-foreground">
            We’ll get back to you as soon as possible. Available 8am–6pm on
            weekdays.
          </p>
        </div>
      </section>
    </div>
  );
}
