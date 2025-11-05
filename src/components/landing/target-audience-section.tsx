"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Sparkles, Building, UtensilsCrossed, Shirt, Dumbbell, GraduationCap, Scissors, Hotel, Wrench, Store } from "lucide-react";

export function TargetAudienceSection() {
  const businessTypes = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Бюти и лични услуги"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Недвижими имоти и брокери"
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: "Храни и заведения"
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Модни брандове и бутици"
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Фитнеси"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Образование и обучения"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Козметика и лични брандове"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Технологии и ИТ компании"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Салони за красота"
    },
    {
      icon: <Hotel className="w-6 h-6" />,
      title: "Хотели"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Фирми за почистване, услуги, ремонт"
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Малки локални бизнеси с лице зад бранда"
    }
  ];

  return (
    <section className="relative pt-4 pb-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0000] via-black to-[#1a0000]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          title="За кого е подходящо"
          subtitle="Работим с всички типове бизнеси, които искат да растат в социалните мрежи"
          theme="dark"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="flex items-center gap-4 bg-gradient-to-br from-black/60 via-red-950/20 to-black/60 backdrop-blur-sm p-6 rounded-xl border-2 border-red-500/40 hover:border-red-500 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20"
              >
                <div className="text-red-500 bg-red-950/50 p-3 rounded-lg">
                  {business.icon}
                </div>
                <h4 className="font-bold text-white flex-1">
                  {business.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
