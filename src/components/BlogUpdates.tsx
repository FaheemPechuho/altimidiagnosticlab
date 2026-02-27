"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { blogPosts } from "@/lib/constants";

export default function BlogUpdates() {
  return (
    <section id="blog" className="section-padding bg-lightbg">
      <div className="container-custom">
        <SectionHeading
          subtitle="Stay Informed"
          title="Latest Updates"
          description="Healthcare insights and diagnostic knowledge for your wellbeing"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary-light/20">
                <div className="flex h-full items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary/30" />
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <h3 className="mb-2 text-lg font-bold text-dark transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
