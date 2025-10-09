"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { TestimonialCard } from "./testimonial-card";
import { TrendingUp, Users, Award } from "lucide-react";

export function SocialProofSection() {
  const caseStudies = [
    {
      name: "Анелия Петрова",
      result: "0 → 13К последователи",
      description: "Гримьор, който реши да започне работа с нас и изградихме нейния личен бранд от нула."
    },
    {
      name: "Ardes.bg",
      result: "0 → 200К последователи",
      description: "Които ни се довериха и създадохме акаунта им с невероятни резултати."
    },
    {
      name: "Раена Хаджиева",
      result: "1000+ последователи и първи клиенти от ден 1",
      description: "Която ни се довери и направихме видеа за социалните й мрежи с моментални резултати."
    },
    {
      name: "Zahir",
      result: "0 → 10,000 последователи",
      description: "Изграден силен личен бранд с висока ангажираност."
    },
    {
      name: "EcoCleaner.bg",
      result: "0 → 5,000 последователи",
      description: "Бизнес профил с стабилен растеж и нови клиенти."
    },
    {
      name: "Technohit",
      result: "0 → 5,000 последователи",
      description: "Технологична компания с успешно дигитално присъствие."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Социално доказателство"
          subtitle="Реални клиенти, реални резултати"
        />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-12 rounded-2xl shadow-2xl mb-16 text-center"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="text-4xl font-bold mb-2">1 млрд.+</div>
                <div className="text-lg opacity-90">Общи гледания</div>
              </div>
              <div>
                <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="text-4xl font-bold mb-2">40+</div>
                <div className="text-lg opacity-90">Различни бранда</div>
              </div>
              <div>
                <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="text-4xl font-bold mb-2">400 млн.+</div>
                <div className="text-lg opacity-90">Гледания само за Ardes.bg</div>
              </div>
            </div>
            <p className="text-xl opacity-90">
              Доказани резултати с измерими числа
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <TestimonialCard
                  name={study.name}
                  result={study.result}
                  description={study.description}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12 rounded-2xl border-2 border-green-200"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Те с нищо не са по-различни от вас
            </h3>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6 text-center leading-relaxed">
                Такъв пример е Анелия Петрова - гримьор, който реши да започне работа с нас и
                изградихме нейния личен бранд от 0 до 13000 последователи.
              </p>

              <p className="text-lg text-gray-600 mb-6 text-center leading-relaxed">
                Такъв пример е Ardes.bg, които ни се довериха и създадохме акаунта им с 200 хил. последователи.
              </p>

              <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
                Пример е Раена Хаджиева, която ни се довери и направихме видеа за социалните й мрежи
                и над 1000 последователи и първите й клиенти още от старта.
              </p>

              <div className="bg-white p-6 rounded-xl border-2 border-green-200 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Те просто се доверяват на процеса и следват експертите
                </h4>
                <p className="text-gray-600">
                  Никакви суперсили, никакъв специален талант - просто правилната стратегия и експертно ръководство
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-gray-100 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Топ 3% от хората правят видеа, които 97% от хората гледат
            </h3>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-600 mb-6">
                И тук не говорим само за инфлуенсъри, а за нормални хора, които просто решиха
                да създадат свой личен бранд.
              </p>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Статистиката показва, че на ден човек прекарва:
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• 15 часа на седмица в социалните мрежи</li>
                  <li>• 60 часа на месец</li>
                  <li>• 720 часа (30 дни) в годината сумарно</li>
                </ul>
                <p className="text-gray-600 mt-4 font-medium">
                  И това се засили с навлизането на Short видеата през 2019 г. и ще се увеличава.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}