"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Video, TrendingUp, Share2 } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Video className="w-12 h-12" />,
      title: "Готови видеа",
      description: "Готови видеа, които да популяризират вашия бранд"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Най-новите тенденции",
      description: "Информация за най-новите тенденции при кратките видеа в социалните мрежи"
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Публикуване и популяризиране",
      description: "Публикуване и популяризиране на видеата във всички социални мрежи"
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0000] to-black" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          title="Какво получавате"
          subtitle="Всичко необходимо за успешно присъствие в социалните мрежи"
          theme="dark"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative bg-gradient-to-br from-black/80 via-red-950/30 to-black/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-red-500/50 hover:border-red-400 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 text-center overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-red-500 mb-6 flex justify-center relative z-10">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
