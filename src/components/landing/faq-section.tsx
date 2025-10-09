"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Ако нямам камера, мога ли да участвам?",
      answer: "Да! Работи и с телефон. Ще ти покажем как да създаваш качествено съдържание със средствата, които имаш."
    },
    {
      question: "Колко време трябва да отделям дневно?",
      answer: "Само 30 минути на ден са достатъчни за да видиш реални резултати и да изградиш своя личен бранд."
    },
    {
      question: "Нужен ли ми е предишен опит?",
      answer: "Не! Нашата програма е създадена за абсолютни начинаещи. Ще те научим на всичко стъпка по стъпка."
    },
    {
      question: "Какво се случва ако не съм доволен?",
      answer: "Имаш 100% гаранция за възстановяване на парите в рамките на 3 месеца, ако не си доволен от резултатите."
    },
    {
      question: "Кога ще видя първите резултати?",
      answer: "Повечето от нашите клиенти виждат първи резултати още от първата седмица след прилагане на стратегиите."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Често задавани въпроси"
          subtitle="Отговори на най-важните ти въпроси"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-colors duration-300"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}