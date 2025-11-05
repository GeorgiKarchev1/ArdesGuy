"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: ReactNode;
  centered?: boolean;
  className?: string;
  theme?: "light" | "dark";
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  theme = "light"
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight",
        theme === "light" ? "text-gray-900" : "text-white"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl max-w-3xl mx-auto leading-relaxed",
          theme === "light" ? "text-gray-600" : "text-gray-300"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}