"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("websites");

  const websitePackages = [
    {
      name: "Starter Website",
      // price: "₹5,999",
      // originalPrice: "₹10,000",
      popular: false,
      features: [
        {
          name: "4-5 Pages (Landing, Pricing, Small Inventory)",
          included: true,
        },
        { name: "Shopify or WordPress", included: true },
        { name: "Limited Theme Installation", included: true },
        { name: "Up to 4-5 Products", included: true },
        { name: "Core Store Elements", included: true },
        { name: "Standard Hero Banners (2)", included: true },
        { name: "Basic Contact Form", included: true },
        { name: "5-7 Business Days", included: true },
        { name: "One-time Setup Support", included: true },
        { name: "Premium Theme + Custom Sections", included: false },
        { name: "Enhanced COD Experience", included: false },
        { name: "2 Months Support", included: false },
      ],
    },
    {
      name: "Essential Website",
      // price: "₹11,999",
      // originalPrice: "₹25,000",
      popular: true,
      features: [
        { name: "6-8 Pages (Home, About, Contact, Blog)", included: true },
        { name: "Shopify or WordPress", included: true },
        { name: "Premium Theme + Custom Sections", included: true },
        { name: "Up to 10 Products", included: true },
        { name: "Fully Customizable Store", included: true },
        { name: "Premium Hero Banners (3+)", included: true },
        { name: "Enhanced Contact Form", included: true },
        { name: "7-10 Business Days", included: true },
        { name: "2 Months Support", included: true },
        { name: "Image Optimization", included: true },
        { name: "Cart + Checkout Flow", included: true },
        { name: "Documentation PDF", included: true },
      ],
    },
  ];

  const ghostwritingServices = [
    {
      name: "Email Copy Pack",
      description: "5 professional emails",
      // price: "₹4,000 - ₹6,000",
    },
    {
      name: "Landing Page Copy",
      description: "Conversion-focused landing page",
      // price: "₹5,000 - ₹7,000",
    },
    {
      name: "Social Media Script Pack",
      description: "10 reels/ad scripts",
      // price: "₹3,500 - ₹5,000",
    },
    {
      name: "Full Brand Voice + Website Content",
      description: "Home, About, Services pages",
      // price: "₹6,000 - ₹8,000",
    },
  ];

  const bundlePackage = {
    name: "Brand Launch Pack",
    description: "Portfolio Website + Landing Page Copy + 5 Emails",
    // price: "₹18,000 - ₹22,000",
    badge: "Best Value",
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Select Your Package To Build A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
              Viral Brand
            </span>
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-card shadow-sm rounded-lg p-2 inline-flex">
            <button
              onClick={() => setActiveTab("websites")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "websites"
                  ? "bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground "
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setActiveTab("ghostwriting")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "ghostwriting"
                  ? "bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Ghostwriting
            </button>
            <button
              onClick={() => setActiveTab("bundles")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "bundles"
                  ? "bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Bundles
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "websites" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {websitePackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-3xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  pkg.popular ? "border-primary" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                      Best For Growing Brands
                    </span>
                  </div>
                )}

                <div className="text-center mb-8 text-foreground">
                  <h3 className="text-2xl font-bold mb-2 text-foreground ">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center justify-center gap-3 mb-4 text-foreground">
                    <span className="text-3xl font-bold text-foreground">
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground line-through ">
                      {pkg.originalPrice}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8 text-foreground">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={`mt-1 ${
                          feature.included
                            ? "text-green-500"
                            : "text-destructive"
                        }`}
                      >
                        {feature.included ? (
                          <Check size={20} />
                        ) : (
                          <X size={20} />
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground "
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <a
  href="https://calendly.com/teampeediyo/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full block bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:shadow-primary/25 text-center"
>
  Book Call →
</a>

              </div>
            ))}
          </div>
        )}

        {activeTab === "ghostwriting" && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Ghostwriting & Copywriting
              </h2>
              <p className="text-muted-foreground">
                Professional content that converts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ghostwritingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "bundles" && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Bundle Pricing</h2>
              <p className="text-muted-foreground">
                Complete solutions for maximum value
              </p>
            </div>

            <div className="relative bg-card rounded-3xl p-8 border-2 border-primary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                  {bundlePackage.badge}
                </span>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">
                  {bundlePackage.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {bundlePackage.description}
                </p>
                <div className="text-4xl font-bold text-primary mb-8">
                  {bundlePackage.price}
                </div>

                <a
  href="https://calendly.com/teampeediyo/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full block bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:shadow-primary/25 text-center"
>
  Book Call →
</a>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
