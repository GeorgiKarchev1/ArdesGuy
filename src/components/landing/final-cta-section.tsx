"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { PlayCircle, Star, ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-400" />
              <Star className="w-6 h-6 text-yellow-400" />
              <Star className="w-6 h-6 text-yellow-400" />
              <Star className="w-6 h-6 text-yellow-400" />
              <Star className="w-6 h-6 text-yellow-400" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ако искаш да бъдеш зрител, не се записвай
            </h2>

            <p className="text-2xl md:text-3xl mb-12 opacity-90 leading-relaxed">
              Но ако искаш да промениш нещо и да разбереш своята аудитория,
              <span className="block mt-2 font-bold text-yellow-400">стани създател...</span>
            </p>

            <div className="mb-12">
              <CTAButton
                size="xl"
                variant="secondary"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold shadow-2xl text-xl px-12 py-6"
              >
                <PlayCircle className="w-6 h-6 mr-2" />
                Запази своята безплатна консултация сега
                <ArrowRight className="w-6 h-6 ml-2" />
              </CTAButton>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className="text-3xl font-bold mb-2 text-yellow-400">25 минути</div>
                <div className="text-lg opacity-90">Безплатна консултация</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className="text-3xl font-bold mb-2 text-yellow-400">0 лв.</div>
                <div className="text-lg opacity-90">Вместо 68 лв.</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className="text-3xl font-bold mb-2 text-yellow-400">50</div>
                <div className="text-lg opacity-90">Първи записали се</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">
                Последният ти шанс да се промениш от консуматор в създател
              </h3>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                Хиляди хора ще продължат да скролват безцелно. Стотиците ще видят тази страница.
                Десетките ще се запишат. Единиците ще предприемат действие.
              </p>
              <p className="text-xl font-bold text-yellow-400">
                От коя група искаш да бъдеш?
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12"
            >
              <p className="text-sm opacity-75 mb-4">
                * Ограничена оферта за първите 50 души
              </p>
              <p className="text-sm opacity-75">
                ** 100% гаранция за възстановяване на парите
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}