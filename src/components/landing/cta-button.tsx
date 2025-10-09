"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "default" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function CTAButton({
  children,
  variant = "primary",
  size = "default",
  className,
  onClick,
  href
}: CTAButtonProps) {
  const baseClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg hover:shadow-xl border-2 border-blue-700",
    secondary: "bg-gray-900 hover:bg-gray-800 text-white font-bold border-2 border-gray-800",
    outline: "border-2 border-gray-900 hover:bg-gray-900 hover:text-white font-bold bg-white text-gray-900"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };


  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        variant="default"
        size={size === "xl" ? "lg" : size}
        className={cn(
          baseClasses[variant],
          sizeClasses[size],
          "rounded-lg transition-all duration-200",
          className
        )}
        onClick={onClick}
        asChild={!!href}
      >
        {href ? (
          <a href={href} className="inline-flex items-center gap-2">
            {children}
          </a>
        ) : (
          <span className="inline-flex items-center gap-2">{children}</span>
        )}
      </Button>
    </motion.div>
  );
}