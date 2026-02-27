"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  TestTubes,
  Users,
  Clock,
} from "lucide-react";
import Counter from "./ui/Counter";
import { stats } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical,
  TestTubes,
  Users,
  Clock,
};

export default function StatsCounter() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark py-14 md:py-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtNHY0aC0ydjJoMnY0aDJ2Mmg0di00aDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="container-custom relative">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative text-center text-white"
              >
                {i > 0 && (
                  <div className="absolute -left-3 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-white/20 md:-left-4 md:block" />
                )}
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <div className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm text-white/70 md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
