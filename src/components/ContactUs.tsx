"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { siteConfig, services } from "@/lib/constants";

const contactInfo = [
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: Phone, label: "Mobile", value: siteConfig.mobile, href: `tel:${siteConfig.mobile}` },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Address", value: siteConfig.address, href: "#" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 8:00 AM – 10:00 PM", href: "#" },
];

export default function ContactUs() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Reach Out"
          title="Get In Touch"
          description="We are always available to assist you with any questions or information regarding our diagnostic services"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 rounded-2xl bg-lightbg p-6 md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+92 XXX XXXXXXX"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                  required
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg sm:w-auto"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 rounded-lg border border-gray-100 p-4 transition-all hover:border-primary/20 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {info.label}
                    </span>
                    <span className="text-sm font-medium text-dark">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.33232776251702!2d67.0794366158119!3d24.818852988552777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d001fb5dcb9%3A0x913ac73e16776265!2sAltimi%20Biosciences%20Private%20Limited!5e0!3m2!1sen!2sus!4v1772184607792!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Altimi Lab Location"
                className="grayscale transition-all hover:grayscale-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
