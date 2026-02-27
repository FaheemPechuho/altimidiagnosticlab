"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Cpu,
  HeartHandshake,
  Quote,
} from "lucide-react";

const highlights = [
  { icon: Lightbulb, text: "Innovation", desc: "Pioneering new approaches in diagnostics" },
  { icon: ShieldCheck, text: "Quality", desc: "Strict protocols ensuring reliable results" },
  { icon: Cpu, text: "Advanced Technology", desc: "State-of-the-art diagnostic instruments" },
  { icon: HeartHandshake, text: "Patient-Centered", desc: "Compassionate care at every step" },
];

export default function Introduction() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Top row: heading left, quote right */}
        <div className="mb-8 grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-secondary">
              Who We Are
            </span>
            <h2 className="font-heading text-3xl font-bold text-dark md:text-4xl">
              Introduction
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-secondary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-start gap-3 rounded-xl border-l-4 border-primary bg-primary/5 p-4"
          >
            <Quote className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary/40" />
            <p className="text-sm italic leading-relaxed text-gray-600">
              We are committed to maintaining high standards in laboratory
              testing through skilled professionals, modern diagnostic
              technologies, and strict quality control procedures.
            </p>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8 max-w-3xl text-base leading-relaxed text-gray-600"
        >
          Altimi Research & Diagnostic Laboratory is dedicated to advancing
          healthcare by providing accurate, timely, and reliable diagnostic
          services. We use state-of-the-art technology and believe in the power
          of innovation and commitment to quality, ensuring the highest
          standards in every test we perform.
        </motion.p>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.1 + 0.15, duration: 0.4 }}
                className="group rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold leading-tight text-dark">
                      {item.text}
                    </h4>
                    <p className="mt-0.5 text-xs leading-snug text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
