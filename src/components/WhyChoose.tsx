"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Microscope,
  ShieldCheck,
  UserCheck,
  Award,
  Cpu,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { whyChooseUs } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  Microscope,
  ShieldCheck,
  UserCheck,
  Award,
  Cpu,
};

function FeatureRow({
  item,
  index,
  side,
}: {
  item: (typeof whyChooseUs)[0];
  index: number;
  side: "left" | "right";
}) {
  const Icon = iconMap[item.icon];
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className={`group flex items-center gap-4 p-6 md:px-8 md:py-7 ${
        isLeft ? "" : "flex-row-reverse"
      }`}
    >
      <div
        className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border-2 border-dashed transition-all ${
          isLeft
            ? "border-primary/30 bg-primary/10 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white"
            : "border-white/30 bg-white/10 text-white group-hover:border-white group-hover:bg-white group-hover:text-primary"
        }`}
      >
        {Icon && <Icon className="h-6 w-6" />}
      </div>
      <div className="max-w-[260px]">
        <h3
          className={`mb-1 text-base font-bold leading-snug ${
            isLeft ? "text-dark" : "text-white"
          }`}
        >
          {item.title}
        </h3>
        <p
          className={`text-xs leading-normal ${
            isLeft ? "text-gray-500" : "text-white/60"
          }`}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChoose() {
  const leftItems = whyChooseUs.slice(0, 3);
  const rightItems = whyChooseUs.slice(3, 6);

  return (
    <section className="section-padding bg-lightbg">
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Advantages"
          title="Why Choose Altimi"
          description="Excellence in every aspect of diagnostic services"
        />

        <div className="grid overflow-hidden rounded-2xl shadow-xl lg:grid-cols-[1fr_auto_1fr]">
          {/* Left Column - Light */}
          <div className="rounded-l-2xl bg-white">
            {leftItems.map((item, i) => (
              <div key={item.title}>
                <FeatureRow item={item} index={i} side="left" />
                {i < leftItems.length - 1 && (
                  <div className="mx-8 border-b-2 border-dashed border-primary/30" />
                )}
              </div>
            ))}
          </div>

          {/* Center Divider */}
          <div className="hidden w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 lg:block" />

          {/* Right Column - Dark */}
          <div className="rounded-r-2xl bg-gradient-to-br from-primary-dark to-dark">
            {rightItems.map((item, i) => (
              <div key={item.title}>
                <FeatureRow item={item} index={i} side="right" />
                {i < rightItems.length - 1 && (
                  <div className="mx-8 border-b-2 border-dashed border-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
