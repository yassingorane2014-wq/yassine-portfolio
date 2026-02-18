"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Scene3D from "./Scene3D";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      
      if (heroRef.current) {
        heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center" ref={heroRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight">
            <span className="block">Yassine</span>
            <span className="block bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Naimi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
            Customer Service & Sales Professional
          </p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Bilingual (French/English/Arabic) customer service and sales professional with 4+ years 
            of experience in high-volume call centers. Proven track record of exceeding sales targets, 
            resolving customer issues efficiently, and maintaining high customer satisfaction scores.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-black dark:border-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              View work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <span className="text-sm font-medium">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
