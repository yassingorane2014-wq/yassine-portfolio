"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Trophy } from "lucide-react";

const projects = [
  {
    title: "AEC – Finance and Insurance",
    category: "Education",
    description: "Studied financial services, insurance products, client relations, and advisory techniques. Completed comprehensive training in customer management and insurance advisory.",
    institution: "Collège Universel, Gatineau, QC",
    period: "Jan 2024 – Mar 2025",
    tags: ["Finance", "Insurance", "Client Relations"],
    icon: GraduationCap,
  },
  {
    title: "Bachelor's Degree in Private Law",
    category: "Education",
    description: "Specialized in civil, business, and contract law. Developed strong critical thinking, analytical skills, and legal fundamentals.",
    institution: "FSJESM, Morocco",
    period: "Oct 2018 – Jul 2021",
    tags: ["Legal Studies", "Business Law", "Contract Law"],
    icon: GraduationCap,
  },
  {
    title: "Top Sales Performer",
    category: "Achievement",
    description: "Exceeded monthly sales targets by 115-130% consistently at Intelcia Group, ranking in top 10% of team. Improved closing rate from 18% to 27% through strategic selling.",
    institution: "Intelcia Group",
    period: "2019 – 2020",
    tags: ["Sales Excellence", "Top Performer", "Achievement"],
    icon: Trophy,
  },
  {
    title: "Customer Satisfaction Champion",
    category: "Achievement",
    description: "Maintained 92% CSAT score and 88% first-call resolution rate at Majorel. Generated €3,500/month in additional revenue through upselling and reduced churn by 12%.",
    institution: "Majorel (Arvato)",
    period: "2021 – 2022",
    tags: ["Customer Service", "Quality", "Revenue Growth"],
    icon: Award,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-gray-900">
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
              Education & Achievements
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold font-display mt-4"
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Highlights
              </span>
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300"
                >
                  {/* Top Section with Icon */}
                  <div className="p-8 pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                      <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-500 dark:text-gray-500">
                      <p className="font-medium">{project.institution}</p>
                      <p>{project.period}</p>
                    </div>
                  </div>

                  {/* Bottom Section with Tags */}
                  <div className="px-8 py-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white dark:bg-gray-800 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
