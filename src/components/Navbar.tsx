"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Search, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg shadow-primary/20"
          : "bg-dark/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <nav className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/images/altimi_logo.png"
              alt={siteConfig.name}
              width={48}
              height={48}
              className="h-10 w-10 rounded-full bg-white p-0.5 md:h-12 md:w-12"
            />
            <div className="hidden sm:block">
              <span className="block text-lg font-bold leading-tight text-white">
                ALTIMI
              </span>
              <span className="block text-[10px] uppercase tracking-wider text-primary-light">
                Research & Diagnostic Lab
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.mobile}`}
              className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{siteConfig.mobile}</span>
            </a>
            <a
              href="#contact"
              className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-secondary-light hover:shadow-lg"
            >
              Book a Test
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-dark/95 backdrop-blur-md transition-all duration-300 md:top-20 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-custom flex flex-col gap-2 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-lg font-medium text-white transition-colors hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <a
              href={`tel:${siteConfig.mobile}`}
              className="flex items-center gap-3 px-4 py-2 text-white/80"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.mobile}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-secondary px-6 py-3 text-center text-lg font-semibold text-white"
            >
              Book a Test
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
