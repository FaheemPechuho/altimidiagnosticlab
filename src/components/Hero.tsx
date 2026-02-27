"use client";

import { motion } from "framer-motion";
import { FlaskConical, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-lightbg via-white to-primary/5 pb-16 pt-24 md:pb-16 md:pt-28 lg:min-h-screen lg:pb-0 lg:pt-20"
    >
      {/* Decorative blobs */}
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-light/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />

      <div className="container-custom relative flex items-center lg:min-h-[calc(100vh-5rem)]">
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <FlaskConical className="h-4 w-4" />
              Welcome to ARDL
            </motion.div>

            <h1 className="font-heading text-3xl font-bold leading-tight text-dark md:text-4xl lg:text-5xl xl:text-6xl">
              A Clearer View{" "}
              <span className="text-primary">Leads To</span> A Brighter
              Future
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:text-lg">
              Altimi Research & Diagnostic Laboratory provides accurate,
              reliable services with a strong focus on quality, efficiency, and
              ethical healthcare support.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3.5 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Rotating badge */}
            <div className="absolute -left-4 top-8 z-10 lg:left-0 lg:top-16">
              <div className="relative h-32 w-32 md:h-40 md:w-40">
                <svg
                  className="rotating-text h-full w-full"
                  viewBox="0 0 200 200"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text
                    className="fill-primary text-[11px] font-semibold uppercase"
                    style={{ letterSpacing: "6px" }}
                  >
                    <textPath href="#circlePath">
                      Altimi Research • Altimi Diagnostics •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg md:h-16 md:w-16">
                    <FlaskConical className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image composition */}
            <div className="relative h-[320px] w-full max-w-[450px] lg:h-[400px]">
              {/* Main circle background */}
              <div className="absolute right-0 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/30 md:h-80 md:w-80" />

              {/* Photo circle 1 -- large, top right */}
              <div className="absolute right-4 top-4 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg md:right-8 md:h-28 md:w-28">
                <Image
                  src="/images/hero-1.jpg"
                  alt="Lab diagnostics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80px, 112px"
                />
              </div>

              {/* Photo circle 2 -- small, top left area */}
              <div className="absolute right-28 top-0 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg md:right-40 md:h-20 md:w-20">
                <Image
                  src="/images/hero-2.jpg"
                  alt="Lab equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 64px, 80px"
                />
              </div>

              {/* Photo circle 3 -- bottom right */}
              <div className="absolute bottom-12 right-2 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg md:right-4 md:h-24 md:w-24">
                <Image
                  src="/images/hero-3.jpg"
                  alt="Lab professionals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 64px, 96px"
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-4 left-4 rounded-xl bg-white p-4 shadow-xl md:left-0 md:p-5"
              >
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  6+
                </div>
                <div className="text-sm text-gray-500">
                  Diagnostic Departments
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
