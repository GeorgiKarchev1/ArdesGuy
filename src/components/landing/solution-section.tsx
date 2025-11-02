"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { CTAButton } from "./cta-button";
import { CheckCircle, Target, Video, DollarSign } from "lucide-react";

export function SolutionSection() {
  const steps = [
    {
      number: "1",
      title: "Как да привлечеш аудитория, която да те следва",
      description: "Научи се на доказаните стратегии за изграждане на лоялна аудитория"
    },
    {
      number: "2",
      title: "Как да снимаш и обработваш видеа",
      description: "Всички техники за създаване на качествено съдържание"
    },
    {
      number: "3",
      title: "Как да качиш и монетизираш",
      description: "Превърни последователите си в реални приходи"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12 rounded-2xl border-2 border-green-200 mb-16"
          >
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
              <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Запази безплатна консултация за 25 мин. сега
              </h2>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 mb-3">
                <span className="text-lg md:text-2xl text-red-500 line-through">68 лв.</span>
                <span className="text-2xl md:text-3xl font-bold text-green-600">БЕЗПЛАТНО</span>
              </div>
              <p className="text-gray-600 text-base md:text-lg text-center md:text-left">Отстъпка намалено от 68 лв. на безплатно</p>
            </div>

            <div className="mb-8">
              <CTAButton
                size="xl"
                className="mb-4"
                href="https://calendly.com/danieldimitrov/30min"
              >
                Запази безплатна консултация
              </CTAButton>
              <p className="text-sm text-gray-500">Само за първите 50 записали се</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Практическо обучение + личен асистент
              </h3>
              <p className="text-gray-600 mb-4">
                Няма празни лекции, а реален процес. Ще имаш личен асистент, който практически
                поддържа видеа в социалните мрежи за бизнеси и трупа милиони гледания за клиентите си.
              </p>
            </div>
          </motion.div>

          <SectionHeader
            title="Ясни стъпки към успеха"
            subtitle="Получаваш точен план за действие, не теория"
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="text-sm text-gray-500">СТЪПКА</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12 rounded-2xl border-2 border-purple-200"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Какво получаваш?
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Доказани практики</h4>
                    <p className="text-gray-600">Как се създава видео, което да стане viral от всички примери с над млн. гледания</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Video className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Реални инструменти</h4>
                    <p className="text-gray-600">Кои обработчици да вземеш, кои оператори да използваш</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Как да продадеш идеята си</h4>
                    <p className="text-gray-600">На клиента и да те вземе реално при теб</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Гарантирана работа</h4>
                    <p className="text-gray-600">Ардес ще плащат за видеата веднага, след като си минал обучението</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-purple-200 text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Защото от тук ще си тръгнеш с конкретен план за действие
              </h4>
              <p className="text-gray-600">
                Не само теория, а реални стъпки, които можеш да приложиш веднага
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}