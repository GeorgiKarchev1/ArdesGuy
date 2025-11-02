"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { Star } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-red-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center px-4">
            {/* Stars - Responsive Size */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-6">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
            </div>

            {/* Title - Fully Responsive */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight px-2">
              Ако искаш бизнеса ти да стане известен в социалните мрежи
            </h2>

            {/* Button - Fully Responsive and Centered */}
            <div className="mb-12 flex justify-center">
              <CTAButton
                size="xl"
                variant="secondary"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold shadow-2xl w-full sm:w-auto max-w-full"
                href="https://calendly.com/danieldimitrov/30min"
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl whitespace-normal text-center">
                  Запази безплатна консултация сега
                </span>
              </CTAButton>
            </div>

            </div>


      </div>

    </section>
  );
}