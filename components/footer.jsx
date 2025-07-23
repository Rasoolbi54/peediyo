import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary/90 text-primary-foreground dark:bg-background dark:text-muted py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Grid Columns */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <Link
              href="/"
              className="text-3xl font-bold mb-4 block dark:text-primary transition-colors"
            >
              Peediyo<span className="text-white">.</span>
            </Link>
            <p className="text-primary-foreground/90 dark:text-muted-foreground mb-6">
              Award-winning marketing agency helping businesses scale with
              data-driven strategies.
            </p>

            <div className="space-y-3 text-primary-foreground/90 dark:text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 6200 554 124</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span> houseofpeediyo@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Sikandara Road , Mandi House , New Delhi - 110001</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-primary-foreground dark:text-foreground text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-primary-foreground/90 dark:text-muted-foreground">
              {[
                "Social Media Marketing",
                "Paid Advertising",
                "Content Creation",
                "SEO & Strategy",
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-primary-foreground dark:text-foreground text-lg font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-primary-foreground/90 dark:text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li> */}
              {/* <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 dark:border-border flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70 dark:text-muted-foreground">
          <p className="mb-4 md:mb-0">
            &copy; 2024 Peediyo Marketing Agency. All rights reserved.
          </p>
          {/* <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Terms of Service"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Cookie Policy"
            >
              Cookie Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
