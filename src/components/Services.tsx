"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Bug,
  FlaskConical,
  Microscope,
  HeartPulse,
  Home,
  ArrowRight,
  Phone,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { services, siteConfig } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  Bug,
  FlaskConical,
  Microscope,
  HeartPulse,
  Home,
};

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const Icon = iconMap[current.icon];
  const num = String(active + 1).padStart(2, "0");
  const isHomeSampling = active === services.length - 1;

  return (
    <section id="services" className="section-padding bg-lightbg">
      <div className="container-custom">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
          description="Comprehensive Diagnostic Solutions for every healthcare need"
        />

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          {/* Left: Clickable list */}
          <div className="flex flex-col">
            {services.map((service, i) => {
              const SvcIcon = iconMap[service.icon];
              const isActive = i === active;
              const sNum = String(i + 1).padStart(2, "0");

              return (
                <button
                  key={service.title}
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-center gap-4 border-b border-gray-200 px-5 py-4 text-left transition-all duration-300 last:border-b-0 ${
                    isActive
                      ? "rounded-xl border-transparent bg-primary text-white shadow-lg shadow-primary/20"
                      : "hover:bg-white/80"
                  }`}
                >
                  <span
                    className={`font-heading text-lg font-bold transition-colors ${
                      isActive ? "text-white/50" : "text-primary/30"
                    }`}
                  >
                    {sNum}
                  </span>

                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {SvcIcon && <SvcIcon className="h-5 w-5" />}
                  </div>

                  <span
                    className={`flex-1 text-sm font-semibold transition-colors md:text-base ${
                      isActive ? "text-white" : "text-dark"
                    }`}
                  >
                    {service.title}
                  </span>

                  <ArrowRight
                    className={`h-4 w-4 flex-shrink-0 transition-all ${
                      isActive
                        ? "translate-x-0 text-white/70"
                        : "-translate-x-1 text-gray-300 group-hover:translate-x-0 group-hover:text-primary"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detail card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`relative overflow-hidden rounded-2xl p-7 shadow-xl md:p-9 ${
                isHomeSampling
                  ? "bg-gradient-to-br from-secondary to-secondary-light text-white"
                  : "bg-white"
              }`}
            >
              {/* Watermark number */}
              <span
                className={`pointer-events-none absolute -right-2 -top-4 font-heading text-[140px] font-bold leading-none md:text-[180px] ${
                  isHomeSampling ? "text-white/[0.08]" : "text-gray-100"
                }`}
              >
                {num}
              </span>

              <div className="relative">
                {/* Icon */}
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl shadow-md ${
                    isHomeSampling
                      ? "bg-white/20 text-white backdrop-blur-sm"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {Icon && <Icon className="h-8 w-8" />}
                </div>

                {/* Title */}
                <h3
                  className={`mb-3 font-heading text-2xl font-bold md:text-3xl ${
                    isHomeSampling ? "text-white" : "text-dark"
                  }`}
                >
                  {current.title}
                </h3>

                {/* Description */}
                <p
                  className={`leading-relaxed ${
                    isHomeSampling
                      ? "text-white/80"
                      : "text-gray-600"
                  }`}
                >
                  {current.description}
                </p>

                {/* CTA */}
                {isHomeSampling ? (
                  <a
                    href={`tel:${siteConfig.mobile}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-secondary transition-all hover:shadow-lg"
                  >
                    <Phone className="h-4 w-4" />
                    Book Free Home Sampling
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
                  >
                    Book This Test
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
