"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { MapPin, Handshake, FileText, Lightbulb, Rocket } from "lucide-react";

export function StepsSection() {
  const steps = [
    {
      icon: <MapPin className="w-7 h-7" />,
      number: "1.",
      title: "Вие сте тук",
      description: "Имате интерес за съвместна работа",
      color: "from-red-600 to-red-700",
      textColor: "text-red-50",
      iconBg: "bg-red-700",
      borderColor: "border-red-500"
    },
    {
      icon: <Handshake className="w-7 h-7" />,
      number: "2.",
      title: "Среща за опознаване",
      description: "Среща за опознаване на бранда, анализ на текущата ситуация и вашите цели",
      color: "from-red-700 to-red-800",
      textColor: "text-red-50",
      iconBg: "bg-red-800",
      borderColor: "border-red-600"
    },
    {
      icon: <FileText className="w-7 h-7" />,
      number: "3.",
      title: "Избор на пакет",
      description: "Избор на подходящ за вас пакет и подписване на договор",
      color: "from-red-800 to-red-900",
      textColor: "text-red-50",
      iconBg: "bg-red-900",
      borderColor: "border-red-700"
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      number: "4.",
      title: "Създаване на стратегия",
      description: "Създаване на стратегия според вашата цел",
      color: "from-red-900 to-red-950",
      textColor: "text-red-50",
      iconBg: "bg-red-950",
      borderColor: "border-red-800"
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      number: "5.",
      title: "Стартиране на работа",
      description: "Стартиране на съвместна работа",
      color: "from-red-950 to-black",
      textColor: "text-red-50",
      iconBg: "bg-black",
      borderColor: "border-red-900"
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background with subtle red glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0000] to-[#1a0000]" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.12) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          title="Пътят към успеха"
          subtitle="Следвайте тези стъпки,  за да започнем съвместната ни работа"
          theme="dark"
        />

        <div className="max-w-4xl mx-auto mt-16">
          {/* Ladder/Staircase Visualization */}
          <div className="relative flex flex-col items-center gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="w-full"
                style={{
                  maxWidth: `${600 - (index * 50)}px`,
                }}
              >
                {/* Step Bar */}
                <div className={`relative group`}>
                  <div className={`
                    bg-gradient-to-r ${step.color}
                    border-2 ${step.borderColor}
                    rounded-2xl p-6 md:p-7
                    shadow-xl shadow-red-950/50
                    hover:shadow-2xl hover:shadow-red-900/60
                    transition-all duration-300
                    hover:scale-[1.02]
                    overflow-hidden
                  `}>
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center gap-5 relative z-10">
                      {/* Icon */}
                      <div className={`${step.iconBg} ${step.textColor} p-4 rounded-xl border-2 ${step.borderColor} shadow-lg flex-shrink-0`}>
                        {step.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className={`text-2xl font-bold ${step.textColor}`}>
                            {step.number}
                          </span>
                          <h3 className={`text-xl md:text-2xl font-bold ${step.textColor}`}>
                            {step.title}
                          </h3>
                        </div>
                        <p className={`${step.textColor} text-sm md:text-base opacity-90`}>
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-50" />
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="flex justify-center my-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      className="text-red-500"
                    >
                      <path
                        d="M20 5 L20 30 M20 30 L13 23 M20 30 L27 23"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Success Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 border-2 border-red-500 rounded-full px-8 py-4 shadow-2xl shadow-red-500/50">
              <Rocket className="w-6 h-6 text-red-50" />
              <span className="text-xl font-bold text-red-50">
                Успех!
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
