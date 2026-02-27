"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

export default function VisionMission() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Direction"
          title="Vision & Mission"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg md:p-10"
          >
            <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-primary to-primary-light" />
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="mb-4 font-heading text-2xl font-bold text-dark">
              Our Vision
            </h3>
            <p className="leading-relaxed text-gray-600">
              Our vision is to be a leading diagnostic laboratory known for
              maintaining high standards of quality and excellence in healthcare.
              We aim to provide dependable diagnostic services that support
              accurate clinical decisions and contribute positively to patient
              care. By focusing on precision, consistency, and professional
              integrity, we seek to earn the trust of healthcare professionals
              and the communities we serve.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg md:p-10"
          >
            <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-secondary to-secondary-light" />
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="mb-4 font-heading text-2xl font-bold text-dark">
              Our Mission
            </h3>
            <p className="leading-relaxed text-gray-600">
              Our mission is to deliver accurate, reliable, and timely diagnostic
              services that play an essential role in supporting patient care. We
              strive to ensure precision and consistency in every laboratory
              process by following established quality standards and professional
              practices. Through careful testing and responsible reporting, we
              aim to assist healthcare providers in making well-informed clinical
              decisions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
