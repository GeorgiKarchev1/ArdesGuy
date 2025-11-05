"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { PlayCircle } from "lucide-react";

export function AchievementsSection() {
  return (
    <section className="pt-8 pb-10 bg-gradient-to-br from-gray-900 to-black text-white">


        <div className="max-w-6xl mx-auto">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-red-500">
              <video
                controls
                className="w-full h-auto"
                poster="/thumbnails/videoAImarketing1.jpg"
              >
                <source src="/ai-marketing-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

         

            {/* Lora's Part */}
           

          {/* Final Call to Action */}
       
        </div>

    </section>
  );
}
