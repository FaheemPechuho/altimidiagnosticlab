"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  light = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-8 md:mb-10 ${center ? "text-center" : ""}`}
    >
      <span
        className={`mb-3 inline-block text-sm font-semibold uppercase tracking-widest ${
          light ? "text-primary-light" : "text-secondary"
        }`}
      >
        {subtitle}
      </span>
      <h2
        className={`font-heading text-3xl font-bold md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mx-auto mt-4 h-1 w-16 rounded-full ${
          center ? "" : "ml-0"
        } ${light ? "bg-primary-light" : "bg-secondary"}`}
      />
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
