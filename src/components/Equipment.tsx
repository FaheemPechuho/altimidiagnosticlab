"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Activity,
  ShieldCheck,
  Globe,
  Award,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { equipment } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical,
  Activity,
};

const badges = [
  { icon: ShieldCheck, label: "ISO Compliance" },
  { icon: Globe, label: "International Standards" },
  { icon: Award, label: "Quality Certified" },
];

export default function Equipment() {
  return (
    <section id="equipment" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Technology"
          title="Advanced Equipment"
          description="Limitless Solutions for Accurate Diagnostics"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-gray-600">
              Our team is proficient in sample analysis, equipment calibration,
              and the implementation of standardized laboratory procedures in
              compliance with international best practices. Through continuous
              monitoring and validation processes, we maintain the highest
              standards of laboratory performance.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              With a proven track record of enhancing sample throughput and
              optimizing workflow efficiency, Altimi Research & Diagnostic
              Laboratory is well equipped to meet the demands of fast-paced
              clinical environments.
            </p>

            {/* Quality badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                >
                  <badge.icon className="h-4 w-4" />
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Equipment cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {equipment.map((eq, i) => {
              const Icon = iconMap[eq.icon];
              return (
                <motion.div
                  key={eq.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="group rounded-xl border-2 border-transparent bg-lightbg p-6 transition-all hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-dark">
                        {eq.name}
                      </h4>
                      <p className="mb-2 text-sm font-medium text-primary">
                        {eq.type}
                      </p>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {eq.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
