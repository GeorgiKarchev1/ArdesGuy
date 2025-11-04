"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* AI Marketing Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <img
              src="/ai-marketing-logo_02.png"
              alt="AI Marketing"
              className="mx-auto w-48 md:w-56 h-auto"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Свържете се с нас
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="flex flex-col items-center gap-3 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500 transition-colors duration-300">
              <Mail className="w-8 h-8 text-red-500" />
              <h3 className="font-semibold text-lg">Email</h3>
              <a href="mailto:info@aimarketing.bg" className="text-gray-400 hover:text-red-500 transition-colors">
              Aimbg.sales@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500 transition-colors duration-300">
              <Phone className="w-8 h-8 text-red-500" />
              <h3 className="font-semibold text-lg">Телефон</h3>
              <a href="tel:+359888888888" className="text-gray-400 hover:text-red-500 transition-colors">
              +359 88 490 4668
              </a>
            </div>

            <a
              href="https://www.instagram.com/aimarketing_bg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500 transition-colors duration-300 cursor-pointer"
            >
              <Instagram className="w-8 h-13 text-red-500" />
              <h3 className="font-semibold text-lg">@aimarketing_bg</h3>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-sm"
          >
            <p>&copy; 2025 AI Marketing. Всички права са запазени.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
