"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  result: string;
  description?: string;
  rating?: number;
}

export function TestimonialCard({
  name,
  result,
  description,
  rating = 5
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex gap-1 mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
            <div className="text-lg font-semibold text-blue-600 mb-2">
              {result}
            </div>
            {description && (
              <p className="text-gray-600">{description}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}