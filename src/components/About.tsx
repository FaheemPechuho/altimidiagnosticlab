"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Zap,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";

const features = [
  { icon: ShieldCheck, label: "Quality Control" },
  { icon: Globe, label: "International Standards" },
  { icon: Zap, label: "Fast Turnaround" },
  { icon: Lightbulb, label: "Innovation" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-lightbg">
      <div className="container-custom">
        <SectionHeading subtitle="Our Story" title="About Company" />

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about.jpeg"
                alt="Altimi Research & Diagnostic Laboratory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary p-4 text-white shadow-xl md:-bottom-6 md:-right-6 md:p-6">
              <div className="text-2xl font-bold md:text-3xl">2026</div>
              <div className="text-xs text-white/70 md:text-sm">
                Established
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-gray-600">
              Altimi Research & Diagnostic Laboratory is a highly skilled and
              dedicated diagnostic facility with extensive experience in
              pharmaceutical research and clinical laboratory services. We are
              committed to delivering accurate, reliable, and timely diagnostic
              results that support effective patient care and clinical decision
              making.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our laboratory operates under strict quality control protocols,
              ensuring precision and consistency at every stage of testing. Our
              team is proficient in sample analysis, equipment calibration, and
              the implementation of standardized laboratory procedures in
              compliance with international best practices.
            </p>

            {/* Highlight callout */}
            <div className="mt-6 rounded-lg border border-primary/20 bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-gray-700">
                We utilize advanced analytical instruments, including{" "}
                <strong className="text-primary">Randox RX Imola</strong> and{" "}
                <strong className="text-primary">Sysmex analyzers</strong>, to
                perform a wide range of diagnostic investigations with high
                efficiency and accuracy.
              </p>
            </div>

            {/* Feature icons */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {features.map((f) => (
                <div key={f.label} className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-gray-600">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
