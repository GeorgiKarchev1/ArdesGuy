"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { TrendingUp } from "lucide-react";

export function StorySection() {
  const timelineData = [
    {
      year: "2021",
      views: "3 млн.",
      description: "гледания",
      followers: ""
    },
    {
      year: "2022",
      views: "40 млн.",
      description: "гледания",
      followers: "100К последователи"
    },
    {
      year: "2023",
      views: "150 млн.",
      description: "гледания",
      followers: "150К последователи"
    },
    {
      year: "2024",
      views: "370 млн.",
      description: "гледания",
      followers: "200К+ последователи"
    },
    {
      year: "2025",
      views: "450 млн.",
      description: "гледания",
      followers: "16 млн. на 1 международно видео"
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Layered Dark Background with Red Accent */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0000] via-black to-[#0d0000]" />

        {/* Animated Red Glow from Bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[600px] blur-[120px]"
          style={{
            background: 'linear-gradient(to top, rgba(220, 38, 38, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          title="16 млн. гледания на 1 видео"
          subtitle="От нула до милиони гледания - вижте какво постигнахме през годините"
          theme="dark"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-black/60 via-red-950/30 to-black/60 backdrop-blur-sm p-6 rounded-2xl border-2 border-red-500/40 h-full shadow-xl shadow-red-500/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(220,38,38,0.08)_0%,_transparent_50%)]" />
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <TrendingUp className="w-6 h-6 text-red-500" />
                    <span className="text-2xl font-bold text-white">{item.year}</span>
                  </div>

                  <div className="space-y-2 relative z-10">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      {item.views}
                    </div>
                    <div className="text-gray-300 font-medium">
                      {item.description}
                    </div>
                    {item.followers && (
                      <div className="text-sm text-gray-400 mt-2">
                        {item.followers}
                      </div>
                    )}
                  </div>
                </div>

                {index < timelineData.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-red-900/60 via-black to-red-900/60 backdrop-blur-sm text-white p-8 rounded-2xl text-center shadow-2xl shadow-red-500/20 border-2 border-red-500/40 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.15)_0%,_transparent_70%)]" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
              Резултати: Над 1 млрд. гледаемост от всички акаунти, които поддържаме
            </h3>
            <p className="text-lg opacity-90 relative z-10">
              Доказано работещи стратегии за растеж в социалните мрежи
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}