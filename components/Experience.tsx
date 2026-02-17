"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Team Supervisor",
    company: "Chartwell Home Care",
    location: "Ottawa, ON",
    period: "May 2024 – April 2025",
    description: [
      "Oversee daily operations and supervise support staff ensuring health and safety compliance",
      "Coordinate schedules, assign responsibilities, and conduct quality assurance reviews",
      "Facilitate communication between families, residents, and team for consistent care delivery",
      "Lead team of support staff while maintaining high standards of service quality"
    ],
  },
  {
    title: "Customer Service Representative",
    company: "Majorel (formerly Arvato)",
    location: "Rabat, Morocco",
    period: "June 2021 – February 2022",
    description: [
      "Handled 70–90 inbound calls daily for French energy provider (Total Energies)",
      "Maintained customer satisfaction score (CSAT) of 92% and first-call resolution rate of 88%",
      "Identified upselling opportunities generating €3,500/month in additional revenue",
      "Resolved escalated complaints professionally, reducing churn rate by 12%"
    ],
  },
  {
    title: "Sales Advisor – Outbound",
    company: "Intelcia Group",
    location: "Casablanca, Morocco",
    period: "March 2019 – August 2020",
    description: [
      "Conducted 80–120 outbound calls daily for French telecom clients (Orange, SFR)",
      "Exceeded monthly sales targets by 115–130%, ranking in top 10% of team",
      "Improved closing rate from 18% to 27% through coaching and feedback",
      "Consistently achieved highest conversion rates in the sales department"
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-gray-50 dark:bg-gray-900">
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
              Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold font-display mt-4"
            >
              Work{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Experience
              </span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 hidden md:block" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Left Content (or Right on odd items) */}
                  <div className={index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                      {exp.location}
                    </p>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-900 -translate-x-[7px] md:-translate-x-1/2 hidden md:block" />

                  {/* Right Content (or Left on odd items) */}
                  <div className={index % 2 === 0 ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:pr-12"}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start gap-3 mb-4">
                        <Briefcase className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-sm leading-relaxed">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
