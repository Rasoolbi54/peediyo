"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:to-[#16213e] overflow-x-hidden text-foreground">
      <div className="h-24" />

      {/* Contact Hero */}
      <section id="contact-hero" className="pt-16 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Get In Touch:
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              {" "}
              Let's Build Your Success
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Have a question, a project in mind, or just want to say hello? We'd love to hear from you.
            Reach out to our team and let's start a conversation about your growth.
          </p>
        </div>
      </section>

      {/* Contact Info & Booking */}
      <section id="contact-details" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white dark:bg-white/5 rounded-xl shadow-md border border-gray-200 dark:border-white/10 p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <a
                href="mailto:hello@peediyo.com"
                className="flex items-center hover:text-orange-500 transition-colors"
              >
                <Mail className="w-6 h-6 mr-4 text-orange-500" />
               houseofpeediyo@gmail.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center hover:text-orange-500 transition-colors"
              >
                <Phone className="w-6 h-6 mr-4 text-orange-500" />
                +91 6200 554 124
              </a>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-orange-500" />
                <span>Sikandara Road , Mandi House , New Delhi - 110001</span>
              </div>
            </div>
          </div>

          {/* Calendly Embed */}
          <div className="bg-white dark:bg-white/5 rounded-xl shadow-md border border-gray-200 dark:border-white/10 p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Book a Free Strategy Call</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Schedule a 30-minute consultation with our experts to discuss your goals and how we can help.
            </p>
            <div className="w-full h-[500px]">
              <iframe
                src="https://calendly.com/teampeediyo/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-lg"
                title="Schedule a Call"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
