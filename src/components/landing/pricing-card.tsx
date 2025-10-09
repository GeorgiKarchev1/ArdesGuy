"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "./cta-button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  originalPrice?: string;
  currentPrice: string;
  badge?: string;
  features: string[];
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  highlighted?: boolean;
  className?: string;
}

export function PricingCard({
  title,
  originalPrice,
  currentPrice,
  badge,
  features,
  ctaText,
  ctaHref,
  onCtaClick,
  highlighted = false,
  className
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={className}
    >
      <Card className={cn(
        "relative h-full border-2 transition-all duration-300",
        highlighted
          ? "border-purple-500 shadow-2xl bg-gradient-to-b from-purple-50 to-white"
          : "border-gray-200 hover:border-gray-300 shadow-lg"
      )}>
        {badge && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-red-500 text-white px-3 py-1">
              {badge}
            </Badge>
          </div>
        )}

        <CardHeader className="text-center pb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

          <div className="mb-6">
            {originalPrice && (
              <div className="text-gray-500 line-through text-lg mb-1">
                {originalPrice}
              </div>
            )}
            <div className="text-4xl font-bold text-gray-900">
              {currentPrice}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <CTAButton
            variant="primary"
            size="lg"
            className="w-full"
            href={ctaHref}
            onClick={onCtaClick}
          >
            {ctaText}
          </CTAButton>
        </CardContent>
      </Card>
    </motion.div>
  );
}