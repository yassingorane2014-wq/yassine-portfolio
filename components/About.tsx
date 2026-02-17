"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, MapPin, Briefcase } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold font-display mt-4"
            >
              Delivering exceptional service through
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                communication & expertise
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Yassine Naimi - Customer Service Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="text-indigo-600" size={24} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Based in</p>
                    <p className="font-semibold">Ottawa, Canada</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Bilingual (French/English/Arabic) customer service and sales professional with <strong>4+ years 
                of experience</strong> in high-volume call centers and sales environments. Proven track record of 
                <strong> exceeding sales targets</strong>, resolving customer issues efficiently, and maintaining 
                high customer satisfaction scores.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently based in <strong>Ottawa, Canada</strong>, I specialize in consultative selling, 
                team leadership, and quality assurance. Seeking to leverage multilingual abilities and 
                strong communication skills in customer service and sales center roles.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-indigo-600" size={20} />
                    <p className="text-3xl font-bold font-display">4+</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Years Experience</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="text-indigo-600" size={20} />
                    <p className="text-3xl font-bold font-display">92%</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Customer Satisfaction</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <a
                  href="/YASSINE.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
