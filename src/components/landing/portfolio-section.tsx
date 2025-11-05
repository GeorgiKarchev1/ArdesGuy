"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { ExternalLink, Play } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      name: "Anelia MakeUP",
      followers: "15К последователи",
      tiktokUrl: "https://vm.tiktok.com/ZNdTRU37e/",
      facebookUrl: "http://facebook.com/reel/619960887662534",
      thumbnail: "/thumbnails/AneliaTIKTOK.jpg",
      objectPosition: "center 50%"
    },
    {
      name: "Ardes.bg",
      followers: "200К+ последователи",
      tiktokUrl: "https://vm.tiktok.com/ZNdT82wJS/",
      facebookUrl: "https://www.facebook.com/share/r/17kbfdBucw/?mibextid=wwXIfr",
      thumbnail: "/thumbnails/ArdesTIKTOK.jpg",
      objectPosition: "center 30%"
    },
    {
      name: "Раена Хаджиева",
      followers: "Фотограф",
      tiktokUrl: "https://vm.tiktok.com/ZNdTR21r2/",
      facebookUrl: "https://www.facebook.com/share/r/1CyJVTCBVg/?mibextid=wwXIfr",
      thumbnail: "/thumbnails/RaenaTIKTOK.jpg",
      objectPosition: "center 60%"
    },
    {
      name: "Magia",
      followers: "Моден бранд",
      tiktokUrl: "https://vm.tiktok.com/ZNdTR1k34/",
      facebookUrl: "https://www.facebook.com/share/r/1aZ5CU2Wu1/?mibextid=wwXIfr",
      thumbnail: "/thumbnails/MagiaTIKTOK.jpg",
      objectPosition: "center 25%"
    },
    {
      name: "EcoCleaner.bg",
      followers: "Екологично почистване",
      tiktokUrl: "https://www.tiktok.com/@ecocleanerbg/video/7340705149565832480?_r=1&_t=ZN-913hDtf0uJi",
      facebookUrl: "#",
      thumbnail: "/thumbnails/EcoClean.jpg",
      objectPosition: "center 30%"
    },
    {
      name: "Technohit",
      followers: "Технологична компания",
      tiktokUrl: "https://www.tiktok.com/@technohit.bg/video/7277612621853969697?_r=1&_t=ZN-913hMIZmeGc",
      facebookUrl: "#",
      thumbnail: "/thumbnails/Tehnohit.jpg",
      objectPosition: "100% 100%"
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0000] to-[#1a0000]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          title="Част от портфолио"
          subtitle="Реални клиенти, реални резултати"
          theme="dark"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-black/80 via-red-950/20 to-black/80 backdrop-blur-sm rounded-2xl border-2 border-red-500/40 hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 overflow-hidden group"
              >
                {/* Video Thumbnail */}
                <div
                  className="relative bg-gray-900 h-64 flex items-center justify-center cursor-pointer overflow-hidden"
                  onClick={() => window.open(project.tiktokUrl, '_blank', 'noopener,noreferrer')}
                >
                  {project.thumbnail && (
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: project.objectPosition }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-black/50 group-hover:from-red-500/30 group-hover:to-black/40 transition-all duration-300" />
                  <Play className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="text-white text-sm">Кликнете върху видеото, за да работи</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-red-400 font-semibold mb-2">
                    {project.followers}
                  </p>
                  

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.tiktokUrl !== "#" && (
                      <a
                        href={project.tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-medium transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        TikTok
                      </a>
                    )}
                    {project.facebookUrl !== "#" && (
                      <a
                        href={project.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Facebook
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
