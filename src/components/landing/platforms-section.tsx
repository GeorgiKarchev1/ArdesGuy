"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Video } from "lucide-react";

const TikTokLogo = () => (
  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="white">
    <path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z"/>
  </svg>
);

const InstagramLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
    <rect x="2" y="2" width="20" height="20" rx="4.5" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="12" cy="12" r="3.5" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="17" cy="7" r="1" fill="white"/>
  </svg>
);

const FacebookLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export function PlatformsSection() {
  const getIcon = (platformName: string) => {
    switch (platformName) {
      case "TikTok":
        return <TikTokLogo />;
      case "Instagram Shorts":
        return <InstagramLogo />;
      case "Facebook Reels":
        return <FacebookLogo />;
      case "YouTube Shorts":
        return <YoutubeLogo />;
      default:
        return <Video className="w-8 h-8 text-white" />;
    }
  };

  const platforms = [
    {
      name: "TikTok",
      description: "Viral съдържание и милиони гледания"
    },
    {
      name: "Instagram Shorts",
      description: "Reels за максимален ангажимент"
    },
    {
      name: "Facebook Reels",
      description: "Достигане до широка аудитория"
    },
    {
      name: "YouTube Shorts",
      description: "Кратко видео за дългосрочен растеж"
    },
    {
      name: "Рекламни видеа",
      description: "За всички социални мрежи"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Платформите, с които работим"
          subtitle="Създаваме съдържание, оптимизирано за всяка платформа"
          theme="dark"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border-2 border-red-500 hover:border-red-400 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="bg-red-500 p-4 rounded-xl">
                    {getIcon(platform.name)}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {platform.description}
                </p>


               
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
