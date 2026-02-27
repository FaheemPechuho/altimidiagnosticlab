"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  ClipboardList,
  Shield,
  Microscope,
  Syringe,
  HandHelping,
  Megaphone,
  Bike,
  Phone,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { teamRoles } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  ClipboardList,
  Shield,
  Microscope,
  Syringe,
  HandHelping,
  Megaphone,
  Bike,
  Phone,
};

export default function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Our People"
          title="Our Trusted Team"
          description="Dedicated Professionals Behind Every Result"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:gap-6">
          {teamRoles.map((role, i) => {
            const Icon = iconMap[role.icon];
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:border-primary/20 hover:shadow-md xl:p-6"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h4 className="text-sm font-bold text-dark md:text-base">
                  {role.title}
                </h4>
                <p className="mt-1 text-xs text-gray-500">
                  {role.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
