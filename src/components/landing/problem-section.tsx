"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { AlertTriangle, Clock, Eye, Users } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="97% са консуматори, 3% са създатели"
          subtitle="Ти избираш от кои да бъдеш"
        />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12"
          >
            <div className="text-center mb-8">
              <div className="text-6xl md:text-8xl font-bold text-red-500 mb-4">97%</div>
              <p className="text-xl text-gray-600 mb-6">
                от всички потребители са консуматори и само <span className="font-bold text-blue-600">3%</span> произвеждат съдържание
              </p>
              <p className="text-2xl font-bold text-gray-900">
                Ти избираш от кои да бъдеш.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 p-8 md:p-12 rounded-2xl border-2 border-red-200 mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-bold text-gray-900">Проблемите на консуматора</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Губиш време като пясък между пръстите</h4>
                    <p className="text-gray-600">15 часа седмично, 60 часа месечно, 720 часа годишно в социалните мрежи</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Не запомняш нищо</h4>
                    <p className="text-gray-600">Помниш само 1% от видеата, които си изгледал през деня</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Не ми вярваш?</h4>
                  <p className="text-gray-600 mb-2">Изброй ми 3 полезни видеа, които си изгледал тази седмица.</p>
                  <p className="text-gray-600">И сега ми изброй колко от тях приложи.</p>
                </div>

                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Демотивация и протакране</p>
                  <p>• Отлагане да свършим нещо важно</p>
                  <p>• Хиперактивност и нежелание за действие</p>
                  <p>• Проблеми със съня и тренировките</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-red-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">И проблемите не свършват до тук...</h4>
              <p className="text-gray-600 leading-relaxed">
                След 6 месеца виждаш някой, който си се смял колко е глупав с това съдържание, което пуска,
                как е натрупал повече аудитория, която го следва, говори свободно пред камерата и има хиляди
                гледания всеки месец. И така ти си казваш &quot;малее, как го направи! Сигурно е много трудно&quot;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-green-50 p-8 md:p-12 rounded-2xl border-2 border-blue-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">3% от хората са създатели</h3>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Те сякаш контролират социалните мрежи, винаги знаят какво да качат и какво да кажат.
              Те трупат аудитория, която след това лесно продава и създават видеа, които после ти гледаш.
              Защото те живеят друг живот.
            </p>

            <div className="bg-white p-6 rounded-xl border border-blue-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Истината е, че е много лесно и само с един човек, който да покаже пътя, може да направиш всичко това за 3 месеца.
              </h4>
              <p className="text-gray-600">
                Разбери как само с 30 мин. на ден можеш да станеш разпознаваем и да разбереш най-новите
                тенденции на 21 век и как да грабнеш вниманието на младото поколение.
              </p>
            </div>

            <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-200">
              <p className="text-gray-700 text-center font-medium">
                <strong>Това работи дори никога да не си се занимавал през живота си със социални мрежи,
                не изглеждаш добре пред камера или нямаш никакъв опит.</strong>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <div className="bg-gray-200 h-64 w-full max-w-3xl mx-auto flex items-center justify-center rounded-2xl shadow-lg">
              <span className="text-gray-500 text-lg text-center">
                Видео Placeholder:<br/>
                Кой съм, с какво се занимавам и какво съм изградил + Лора
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}