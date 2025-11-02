"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Lightbulb, Video, Camera, MessageSquare, BarChart, Users, GraduationCap, Settings, UserCog } from "lucide-react";

export function ServicesSection() {
  const mainServices = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Бранд стратегии, идентичност",
      description: "Изграждаме уникална идентичност на вашия бранд, която се отличава в дигиталното пространство"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Продукция за социалните мрежи",
      description: "TikTok, YouTube, Facebook, Instagram - професионално съдържание за всички платформи"
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Заснемане на видео продукция",
      description: "С професионална техника и екип от опитни специалисти"
    }
  ];

  const additionalServices = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Marketing консултации"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Анализ на профила, KPI"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Инфлуенсър маркетинг"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Курсове на тема социални мрежи"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Менажиране на акаунти"
    },
    {
      icon: <UserCog className="w-6 h-6" />,
      title: "Лични обучения и менторство за вашия бизнес"
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0000] via-black to-[#0a0a0a]" />

        {/* Multiple Glowing Orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, transparent 60%)',
          }}
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(185, 28, 28, 0.15) 0%, transparent 65%)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Какво предлагаме"
            subtitle="Професионални услуги за изграждане на вашето дигитално присъствие"
            theme="dark"
          />

          {/* Main Services - 3 Large */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative bg-gradient-to-br from-black/90 via-red-950/20 to-black/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-red-500/60 hover:border-red-400 transition-all duration-300 shadow-2xl shadow-red-500/20 hover:shadow-red-500/40 overflow-hidden group"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.15)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="text-red-500 mb-6 relative z-10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Services - 6 Small */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-950/10 to-black/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-red-500/30 shadow-xl"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-red-500/30 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                >
                  <div className="text-red-500">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-white">
                    {service.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
