"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import Image from "next/image";

export default function ChairmanMessage() {
  return (
    <section className="relative overflow-hidden bg-dark py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-primary/20" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container-custom relative">
        <div className="mb-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary-light"
          >
            Message from our Chairman
          </motion.span>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          {/* Left: Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm md:p-10"
          >
            <Quote className="absolute left-6 top-6 h-10 w-10 text-secondary/30 md:left-8 md:top-8 md:h-12 md:w-12" />

            <div className="relative">
              <p className="mb-4 text-lg leading-relaxed text-gray-300 md:text-xl md:leading-relaxed">
                At Altimi Research & Diagnostic Laboratory, our passion for
                innovation and continuous improvement drives everything we do.
                We are committed to staying at the forefront of medical
                technology by adopting advanced diagnostic techniques and modern
                laboratory systems.
              </p>
              <p className="text-base leading-relaxed text-gray-400 md:text-lg">
                Our goal and commitment extend beyond diagnostics — we aim to
                make a meaningful and lasting impact on the lives of the patients
                we serve, especially those in need of dependable healthcare
                support.
              </p>
            </div>

            {/* Chairman name */}
            <div className="mt-6 border-t border-white/10 pt-6">
              <h4 className="text-lg font-bold text-white">
                {siteConfig.chairman.name}
              </h4>
              <p className="text-sm text-primary-light">
                {siteConfig.chairman.credentials}
              </p>
              <p className="text-sm text-gray-400">
                {siteConfig.chairman.title}
              </p>
            </div>
          </motion.div>

          {/* Right: Chairman photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-dashed border-primary/20" />

              <div className="relative h-80 w-64 overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl md:h-[420px] md:w-80">
                <Image
                  src="/images/chairman.png"
                  alt={siteConfig.chairman.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>

              {/* Name badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-2 shadow-lg">
                <p className="whitespace-nowrap text-xs font-bold text-white">
                  {siteConfig.chairman.title}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
