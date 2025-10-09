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
      followers: "200К последователи"
    },
    {
      year: "2025",
      views: "16 млн.",
      description: "първо международно видео",
      followers: "400+ млн. общо гледания"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Историята зад успеха"
          subtitle="От нула до над 400 милиона гледания - вижте какво постигнахме през годините"
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
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-gray-100 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <span className="text-2xl font-bold text-gray-900">{item.year}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {item.views}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {item.description}
                    </div>
                    {item.followers && (
                      <div className="text-sm text-gray-600 mt-2">
                        {item.followers}
                      </div>
                    )}
                  </div>
                </div>

                {index < timelineData.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Резултати: Над 1 млрд. гледаемост от всички акаунти, които поддържаме
            </h3>
            <p className="text-lg opacity-90">
              Доказано работещи стратегии за растеж в социалните мрежи
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}