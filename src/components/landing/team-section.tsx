"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { PlayCircle } from "lucide-react";

export function TeamSection() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Dark Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0000] to-[#1a0000]" />

        {/* Spotlight Effect */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          title="Кои сме ние?"
          subtitle="AI Marketing — The People Behind the Vision"
          theme="dark"
        />

        <div className="max-w-6xl mx-auto">
          {/* Main Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black h-[500px] w-full rounded-2xl flex flex-col items-center justify-center shadow-2xl border-4 border-red-500">
              <PlayCircle className="w-24 h-24 text-red-500 mb-6" />
              <span className="text-gray-400 text-xl text-center px-4">
                Видео: Лора и Дани - Кои сме ние<br/>
                <span className="text-sm">B-roll: Светлина се включва, леща на камера се фокусира...</span>
              </span>
            </div>
          </motion.div>

          {/* Team Members Scripts */}
          <div className="space-y-12">
            {/* Daniel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-black/80 via-red-950/20 to-black/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border-2 border-red-500/30 shadow-xl shadow-red-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  Д
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Даниел Димитров</h3>
                  <p className="text-red-400 font-medium">Marketing & Video Strategist | Лектор и бизнес ментор</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong>От 2013 г.</strong> изучавам социалните мрежи, още когато създадох страница за вицове,
                  която генерира 24000 последователи.
                </p>
                <p>
                  <strong>От 2021 г.</strong> се фокусирам върху кратките видеа и психологията на вниманието.
                </p>
                <p>
                  През годините съм водил индивидуални обучения за компании и лични брандове, като моята роля е
                  да изградя стратегията, чрез която брандът да говори в социалните мрежи.
                </p>
                <p>
                  <strong>Лектор съм на събития, конференции и курсове</strong> и вече над 60 компании са преминали
                  през процеса на AI Marketing от идея до завършен образ в социалните мрежи.
                </p>
              </div>
            </motion.div>

            {/* Lora */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-red-950/30 via-black/80 to-black/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border-2 border-red-500/40 shadow-xl shadow-red-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  Л
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Лора Тодорова</h3>
                  <p className="text-red-400 font-medium">Creative Producer & Video Director</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong>Аз съм Лора</strong> и моята работа е да изградя вашата история, така че всеки кадър да носи послание.
                </p>
                <p>
                  <strong>Какво правя за бизнеса ви?</strong> Пиша сценария, режисирам и водя снимачния процес от
                  идеята до крайния резултат - наистина крайния резултат!
                </p>
                <p>
                  <strong>Актриса с опит</strong> в късометражни филми, лице на реклами, музикални видеа и театрални постановки.
                </p>
                <p>
                  Била съм пред камерата в най-различни роли - днес използвам този опит, за да помагам на хората
                  да застанат пред нея уверено и с присъствие.
                </p>
              </div>
            </motion.div>

            {/* Presian - The Visual Architect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-black to-gray-900 p-8 md:p-12 rounded-2xl border-2 border-red-500 text-white"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">ПРЕСИАН — ВИЗУАЛНИЯТ АРХИТЕКТ</h3>
                <p className="text-red-400 italic">Човекът, който вижда кадъра още преди да бъде заснет</p>
              </div>

              {/* Dramatic Video Placeholder */}
              <div className="bg-gray-800 h-64 w-full rounded-xl flex items-center justify-center mb-8 border-2 border-red-500">
                <div className="text-center">
                  <PlayCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <span className="text-gray-400 text-sm">
                    Dramatic intro: Камера се доближава към режисьорски стол &quot;Director&quot;<br/>
                    Sound: Clicks, обектив, камера ON
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  А кой стои от другата страна на обектива? А кой е човекът, който вижда кадъра още преди да бъде заснет?
                </p>
                <p className="text-xl font-semibold text-white">
                  Това е Пресиан, човекът, който има 11 години опит в заснемането и обработката и реализира
                  вашите идеи до последния детайл.
                </p>
                <p className="text-lg text-red-400">
                  Неговия поглед е определящ за финалния резултат.
                </p>
              </div>
            </motion.div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative bg-gradient-to-r from-red-900/50 via-black to-red-900/50 p-8 md:p-12 rounded-2xl text-white text-center border-2 border-red-500/50 shadow-2xl shadow-red-500/20 overflow-hidden backdrop-blur-sm"
            >
              <p className="text-2xl mb-4">
                <strong>Лора:</strong> Вярваме, че успехът в дигиталния свят не идва от това да следваш трендове,
                а от това да ги създаваш.
              </p>
              <p className="text-2xl mb-4">
                <strong>Дани:</strong> Точно това е и мисията ни в AI Marketing — да помагаме на хора и компании
                да разказват лични и вдъхновяващи истории чрез видеа, които имат стойност и оставят следа.
              </p>
              <p className="text-xl italic mb-4">
                <strong>Лора:</strong> Зад всеки човек и всеки бранд стои история, която чака да бъде разказана
              </p>
              <p className="text-xl font-bold">
                <strong>Дани:</strong> Може би следващата започва тук. Свържи се с нас.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
