"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { PlayCircle, Star, ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-red-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-red-400" />
              <Star className="w-6 h-6 text-red-400" />
              <Star className="w-6 h-6 text-red-400" />
              <Star className="w-6 h-6 text-red-400" />
              <Star className="w-6 h-6 text-red-400" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ако искаш бизнеса ти да стане известен в социалните мрежи
            </h2>

            

            <div className="mb-12">
              <CTAButton
                size="xl"
                variant="secondary"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold shadow-2xl text-xl px-12 py-6"
              >
                <PlayCircle className="w-6 h-6 mr-2" />
                Запази безплатна консултация сега
                <ArrowRight className="w-6 h-6 ml-2" />
              </CTAButton>
            </div>

            </div>


      </div>

    </section>
  );
}