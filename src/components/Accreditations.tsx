"use client";

import { motion } from "framer-motion";
import { Award, Shield, Globe, TrendingUp } from "lucide-react";

const accreditations = [
  { icon: Shield, name: "ISO 15189", status: "In Progress" },
  { icon: Award, name: "CAP Accreditation", status: "Planned" },
  { icon: Globe, name: "JCI Standards", status: "Planned" },
  { icon: TrendingUp, name: "National Recognition", status: "In Progress" },
];

export default function Accreditations() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-secondary">
            Quality Assurance
          </span>
          <h2 className="font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            Ongoing Accreditation Plans
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We look forward to obtaining national and international recognitions
            and accreditations in the future
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {accreditations.map((acc, i) => (
            <motion.div
              key={acc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-xl border-2 border-dashed border-gray-200 bg-lightbg p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary-light/10 text-primary transition-all group-hover:from-primary group-hover:to-primary-dark group-hover:text-white">
                <acc.icon className="h-8 w-8" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-dark">{acc.name}</h4>

              {/* Progress indicator */}
              <div className="mx-auto mt-3 w-full max-w-[120px]">
                <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width:
                        acc.status === "In Progress" ? "50%" : "25%",
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                  />
                </div>
                <span className="mt-1.5 inline-block text-xs font-medium text-primary">
                  {acc.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
