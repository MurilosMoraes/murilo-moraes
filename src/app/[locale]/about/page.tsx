"use client";

import { motion } from "@/components/LazyMotion";
import { useTranslations } from "next-intl";
import {
  CodeBracketIcon,
  BriefcaseIcon,
  SparklesIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { experiences } from "@/data/experiences";
import { skills } from "@/data/skills";
import { interests } from "@/data/interests";

export default function AboutPage() {
  const t = useTranslations("about");

  const experiencesData = experiences.map((exp, index) => ({
    title: t(`experience${index + 1}.title`) || exp.title,
    company: exp.company,
    period: t(`experience${index + 1}.period`) || exp.period,
    description: t(`experience${index + 1}.description`) || exp.description,
    technologies: exp.technologies,
  }));

  const interestsData = interests.map((interest, index) => {
    if (index >= 3) {
      return t(`interest${index - 2}`) || interest;
    }
    return interest;
  });

  return (
    <div className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 p-1">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <CodeBracketIcon className="w-16 h-16 text-slate-600 dark:text-slate-400" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t("name")}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">
                {t("role")}
              </p>

              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <span>📍</span>
                  <span>{t("location")}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>💼</span>
                  <span>{t("availability")}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>🎓</span>
                  <span>{t("education")}</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6 mt-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <HeartIcon className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("interests")}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interestsData.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="card p-8">
              <div className="flex items-center space-x-2 mb-6">
                <SparklesIcon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t("myStory")}
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>{t("bio.paragraph1")}</p>
                <p>{t("bio.paragraph2")}</p>
                <p>{t("bio.paragraph3")}</p>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center space-x-2 mb-6">
                <BriefcaseIcon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t("experience")}
                </h2>
              </div>

              <div className="space-y-6">
                {experiencesData.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-l-4 border-slate-300 dark:border-slate-600 pl-6 pb-6 last:pb-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center space-x-2 mb-6">
                <CodeBracketIcon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t("skills")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                    <div className="space-y-3">
                      {category.technologies.map((tech) => (
                        <div key={tech.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {tech.name}
                            </span>
                            <span className="text-xs text-slate-600 dark:text-slate-400">
                              {tech.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.level}%` }}
                              transition={{
                                duration: 1,
                                delay: categoryIndex * 0.1,
                              }}
                              className="bg-slate-600 dark:bg-slate-400 h-2 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
