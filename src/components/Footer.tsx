"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { siteConfig, navLinks, services } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark text-gray-400">
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-light to-secondary" />

      <div className="container-custom pb-8 pt-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/altimi_logo.png"
                alt={siteConfig.name}
                width={44}
                height={44}
                className="rounded-full bg-white p-0.5"
              />
              <div>
                <span className="block text-lg font-bold text-white">
                  ALTIMI
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-primary-light">
                  Research & Diagnostic Lab
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Providing accurate, reliable, and timely diagnostic services with a
              strong focus on quality, efficiency, and ethical healthcare support.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all hover:bg-primary hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-base font-bold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="mb-4 text-base font-bold text-white">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm transition-colors hover:text-primary-light"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="mb-4 text-base font-bold text-white">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-light" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-light" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-primary-light"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-light" />
                <a
                  href={`tel:${siteConfig.mobile}`}
                  className="transition-colors hover:text-primary-light"
                >
                  {siteConfig.mobile}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-light" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-primary-light"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; 2026 {siteConfig.name}. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-primary-light"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
