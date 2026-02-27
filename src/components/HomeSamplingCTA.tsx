"use client";

import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  Sparkles,
  CalendarCheck,
  UserCheck,
  FileCheck2,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";

const steps = [
  {
    num: "01",
    icon: CalendarCheck,
    title: "Book a Visit",
    desc: "Call or WhatsApp to schedule a convenient time slot",
  },
  {
    num: "02",
    icon: UserCheck,
    title: "We Come to You",
    desc: "Certified phlebotomist arrives at your doorstep",
  },
  {
    num: "03",
    icon: FileCheck2,
    title: "Get Results",
    desc: "Receive accurate reports digitally within 24 hrs",
  },
];

export default function HomeSamplingCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-dark py-12 md:py-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIvPjwvZz48L3N2Zz4=')] opacity-80" />

      <div className="container-custom relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_minmax(340px,400px)]">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-secondary/30"
            >
              <Sparkles className="h-4 w-4" />
              100% Free Service
            </motion.div>

            <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Free Home
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Sampling</span>
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80 md:text-lg lg:mx-0">
              Professional sample collection at your doorstep — no travel, no
              waiting rooms. Our trained phlebotomists come to you with full
              safety protocols.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href={`tel:${siteConfig.mobile}`}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-primary transition-all hover:shadow-xl hover:shadow-white/20"
              >
                <Phone className="h-4 w-4" />
                Schedule Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.mobile.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Right: "How It Works" glass card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md"
          >
            <h3 className="mb-5 text-center text-sm font-bold uppercase tracking-widest text-primary-light">
              How It Works
            </h3>

            <div className="space-y-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.12, duration: 0.4 }}
                    className="group flex items-start gap-4"
                  >
                    {/* Step number + connector line */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/15 text-white transition-colors group-hover:bg-white group-hover:text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      {i < steps.length - 1 && (
                        <div className="mt-1 h-4 w-px bg-white/20" />
                      )}
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs font-bold text-primary-light/60">
                          {step.num}
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          {step.title}
                        </h4>
                      </div>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/55">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Phone strip at bottom */}
            <a
              href={`tel:${siteConfig.mobile}`}
              className="mt-5 flex items-center justify-center gap-3 rounded-xl bg-white/10 px-4 py-3 transition-colors hover:bg-white/20"
            >
              <div className="relative">
                <div className="absolute inset-0 animate-pulse-ring rounded-full bg-white/30" />
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white">
                  <Phone className="h-4 w-4" />
                </div>
              </div>
              <div className="text-left">
                <p className="text-lg font-bold leading-tight text-white">
                  {siteConfig.mobile}
                </p>
                <p className="text-[11px] text-white/50">
                  Available 7 days a week
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
