"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark py-14 md:py-16">
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary-light/10 blur-2xl" />

      <div className="container-custom relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <Mail className="h-6 w-6 text-white" />
          </div>

          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Subscribe & Stay Updated
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-white/70">
            Get the latest health tips and lab updates delivered to your inbox
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full border-2 border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 backdrop-blur-sm transition-colors focus:border-white/40 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-white transition-all hover:bg-secondary-light hover:shadow-lg"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
