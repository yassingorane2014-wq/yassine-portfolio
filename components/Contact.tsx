"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Linkedin, Github, Download } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold font-display mt-4"
            >
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Connect
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto"
            >
              I&apos;m currently available for new opportunities. Whether you have a question or just want to say hi, 
              feel free to reach out!
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:yassinenaimi343@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      yassinenaimi343@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:613-410-5524"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      613-410-5524
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium">341 Gloucester Street, Ottawa, ON</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://linkedin.com/in/yassine-naimi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/yassinenaimi343-netizen"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Download Resume Button */}
              <motion.a
                href="/YASSINE.pdf"
                download
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-transform"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 p-12 rounded-2xl text-white"
            >
              <h3 className="text-3xl font-bold font-display mb-4">
                Ready to work together?
              </h3>
              <p className="text-indigo-100 mb-8 leading-relaxed">
                I bring dedication, practical experience, and strong work ethic to every role. 
                Let&apos;s discuss how I can contribute to your team&apos;s success.
              </p>
              <motion.a
                href="mailto:yassinenaimi343@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-medium hover:shadow-xl transition-all"
              >
                <Mail size={20} />
                Send a message
              </motion.a>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-800 text-center"
          >
            <p className="text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Yassine Naimi. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
              Built with Next.js, React, Three.js, and Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
