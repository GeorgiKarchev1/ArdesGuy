"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  number: string;
  label: string;
  description?: string;
  className?: string;
}

export function StatCard({
  number,
  label,
  description,
  className
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card className="text-center p-6 h-full border-0 bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            {number}
          </div>
          <div className="text-lg font-semibold text-gray-700 mb-1">
            {label}
          </div>
          {description && (
            <div className="text-sm text-gray-600">
              {description}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}