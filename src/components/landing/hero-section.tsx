"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-black py-20 md:py-32 overflow-hidden">
      {/* Cinematic Background with Radial Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a0000] to-black" />

      {/* Animated Red Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.25) 0%, rgba(139, 0, 0, 0.1) 40%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(185, 28, 28, 0.2) 0%, rgba(127, 29, 29, 0.08) 50%, transparent 70%)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(153, 27, 27, 0.05) 60%, transparent 80%)',
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Subtle Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ef4444 1px, transparent 1px),
              linear-gradient(to bottom, #ef4444 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Light Sweep Effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(239, 68, 68, 0.03) 50%, transparent 100%)',
          }}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* AI Marketing Logo Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center gap-3 bg-gradient-to-br from-red-600/20 to-black/50 backdrop-blur-sm px-10 py-5 rounded-2xl border border-red-500/30 shadow-2xl shadow-red-500/20">
                <div className="text-4xl md:text-5xl font-bold text-white">AI</div>
                <div className="text-4xl md:text-5xl font-bold text-red-500">Marketing</div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              Ние не следваме трендове,<br/>ние ги създаваме.
            </h1>

            <div className="mb-12">
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl border-2 border-red-500/50 shadow-2xl shadow-red-500/20 overflow-hidden">
                <video
                  className="w-full h-auto"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/thumbnails/videoAImarketing2.jpg"
                >
                  <source src="/ai-marketing-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}