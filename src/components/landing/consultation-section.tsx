"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { Clock } from "lucide-react";

export function ConsultationSection() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Dramatic Red Spotlight */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0000] via-black to-black" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.25) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-red-950/40 via-black/80 to-black/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border-4 border-red-500/80 shadow-2xl shadow-red-500/40 text-center overflow-hidden"
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.2)_0%,_transparent_70%)]" />

            {/* Icon + Title - Centered Stack on Mobile */}
            <div className="flex flex-col items-center justify-center gap-3 mb-6 relative z-10">
              <Clock className="w-8 h-8 md:w-10 md:h-10 text-red-500 flex-shrink-0" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center leading-tight">
                Запази 1 час консултация сега
              </h2>
            </div>

            {/* Price - Centered Stack on Mobile */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-8 relative z-10">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-400 line-through font-semibold">138 лв.</span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]">БЕЗПЛАТНО</span>
            </div>

            {/* Button - Fully Centered */}
            <div className="flex justify-center relative z-10">
              <CTAButton
                size="xl"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-2xl shadow-red-500/50 border border-red-500/50 w-full sm:w-auto"
                href="https://calendly.com/danieldimitrov/30min"
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl whitespace-normal text-center px-2">
                  Запази безплатна консултация
                </span>
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
