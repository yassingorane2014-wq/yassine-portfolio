"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, TrendingUp, Users, Award, Target, Languages } from "lucide-react";

const skills = [
  {
    category: "Customer Service Excellence",
    icon: Phone,
    items: ["High-Volume Call Handling (70-120 calls/day)", "CSAT Score 92%", "First-Call Resolution 88%", "Escalation Management"],
  },
  {
    category: "Sales & Business Development",
    icon: TrendingUp,
    items: ["Consultative Selling", "Outbound & Inbound Sales", "Upselling & Cross-selling", "Revenue Generation"],
  },
  {
    category: "Team Leadership",
    icon: Users,
    items: ["Team Supervision", "Staff Coordination", "Quality Assurance", "Performance Coaching"],
  },
  {
    category: "Technical Skills",
    icon: Target,
    items: ["Salesforce CRM", "Call Center Software", "CRM Management", "Performance Analytics"],
  },
  {
    category: "Key Achievements",
    icon: Award,
    items: ["115-130% Sales Target Achievement", "Top 10% Performer", "27% Closing Rate", "12% Churn Reduction"],
  },
  {
    category: "Languages",
    icon: Languages,
    items: ["English (Advanced - C2)", "French (Fluent - C1)", "Arabic (Native)"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-white dark:bg-black">
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
              Skills & Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold font-display mt-4"
            >
              Professional{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Capabilities
              </span>
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold font-display">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
