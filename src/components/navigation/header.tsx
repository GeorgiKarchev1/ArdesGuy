"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CTAButton } from "../landing/cta-button";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-500/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <Image
              src="/ai-marketing-logo_02.png"
              alt="AI Marketing"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </motion.div>

          {/* CTA Button */}
          <CTAButton className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-xl shadow-red-500/30 border border-red-500/50">
            Запази консултация
          </CTAButton>
        </div>
      </div>
    </motion.header>
  );
}
