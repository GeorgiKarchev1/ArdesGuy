"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { CTAButton } from "./cta-button";
import { Shield, Users, Briefcase, UserCheck } from "lucide-react";

export function OfferSection() {
  const targetAudience = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Хора без опит",
      description: "За хора, които нямат никакво понятие как да изграждат личен бранд и да правят видеа"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Хора с профили",
      description: "За хора, които вече поддържат профилите си и искат още по-добри резултати във видеата си"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Собственици на бизнес",
      description: "Които искат да разберат как работят социалните мрежи и да имат поддръжка на профил"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Създатели на видеа",
      description: "Всеки, който иска да се занимава с изработка на видеа и да стартира качване на видеа в социалните мрежи"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-blue-600 text-white p-8 md:p-12 rounded-xl shadow-lg border-2 border-blue-700 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Запази безплатна консултация за 25 минути
              </h2>

              <div className="flex justify-center items-center gap-4 mb-8">
                <span className="text-2xl line-through opacity-75">От 68 лв.</span>
                <span className="text-4xl font-bold">→ 0 лв.</span>
              </div>

              <CTAButton
                variant="secondary"
                size="xl"
                className="bg-white text-blue-600 hover:bg-gray-100 mb-4"
                href="https://calendly.com/danieldimitrov/30min"
              >
                Запази своята безплатна консултация сега
              </CTAButton>

              <p className="text-lg opacity-90">
                Само за първите 50 записали се
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-red-50 border-4 border-red-500 p-8 md:p-12 rounded-2xl mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                100% гаранция за възстановяване на парите
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-red-200">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Гаранция за 100% удовлетвореност или парите обратно
              </h4>
              <p className="text-gray-600 text-lg">
                Ако до 3 месеца ти нямаш никакви резултати след работата ни,
                ще ти възстановим цялата сума. Не ти харесва? Връщаме ти парите.
              </p>
            </div>
          </motion.div>

          <SectionHeader
            title="За кого е подходящо?"
            subtitle="Независимо от опита ти, ще намериш своето място"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  {item.icon}
                  <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 md:p-12 rounded-xl border-2 border-gray-200"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              С какво сме по-различни от всички останали?
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-green-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Реален опит</h4>
                  <p className="text-gray-600">
                    Зад гърба си имам над 40 различни бизнеса и лични профили, които съм
                    поддържал през последните години и съм натрупал над 1 млрд. гледаемост общо.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-green-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">100% практическа насоченост</h4>
                  <p className="text-gray-600">
                    Прилагане на практика наученото с реални резултати от реални хора.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-green-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Гарантирани резултати</h4>
                  <p className="text-gray-600">
                    Реални резултати с реални хора и техния опит и какво са направили те,
                    което може да направите и вие.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-green-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Пълна гаранция</h4>
                  <p className="text-gray-600">
                    Гаранция за удовлетвореност - не ти харесва? Връщаме ти парите.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <CTAButton
                size="xl"
                href="https://calendly.com/danieldimitrov/30min"
              >
                Започни своята трансформация сега
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}