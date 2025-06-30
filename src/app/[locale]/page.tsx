"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  ChevronRightIcon,
  CodeBracketIcon,
  StarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { projects, getTranslatedProject } from "@/data/projects";
import PortfolioPreview from "@/components/PortfolioPreview";

export default function Home() {
  const t = useTranslations("home");
  const tp = useTranslations("projects");
  const locale = useLocale();

  const featuredProject = projects.find((project) => project.featured);
  const translatedFeaturedProject = featuredProject
    ? getTranslatedProject(featuredProject, tp)
    : null;

  const stats = [
    { label: t("stats.projects"), value: "50+" },
    { label: t("stats.experience"), value: "5+" },
    { label: t("stats.technologies"), value: "20+" },
    { label: t("stats.companies"), value: "30+" },
  ];

  const skills = [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Angular",
    "Vue.js",
    "Firebase",
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative py-16 lg:py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gray-200/20 dark:bg-gray-700/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gray-300/20 dark:bg-gray-600/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  {t("greeting")}{" "}
                  <span className="gradient-text">{t("name")}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
                >
                  {t("description")}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href={`/${locale}/projects`}
                  className="btn-primary inline-flex items-center justify-center"
                >
                  {t("viewProjects")}
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  {t("contact")}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {t("techTitle")}
                </p>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-1 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-50/90 to-white dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_70%)]" />
                    <CodeBracketIcon className="w-32 h-32 text-slate-700 dark:text-slate-300 relative z-10" />
                    <div className="absolute top-20 left-20 w-1.5 h-1.5 bg-slate-400/30 dark:bg-slate-500/30 rounded-full" />
                    <div className="absolute bottom-24 right-24 w-1 h-1 bg-slate-400/20 dark:bg-slate-500/20 rounded-full" />
                    <div className="absolute top-32 right-16 w-1.2 h-1.2 bg-slate-400/40 dark:bg-slate-500/40 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {translatedFeaturedProject && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {tp("featuredProject")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {tp("featuredProjectDesc")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="card p-8 group hover:-translate-y-2 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative overflow-hidden rounded-xl">
                    {translatedFeaturedProject.image === "portfolio-preview" ? (
                      <PortfolioPreview />
                    ) : (
                      <Image
                        src={translatedFeaturedProject.image}
                        alt={translatedFeaturedProject.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}

                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <StarIcon className="w-3 h-3" />
                      {tp("featured")}
                    </div>

                    <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <ChartBarIcon className="w-3 h-3" />
                      100% Lighthouse
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {translatedFeaturedProject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {translatedFeaturedProject.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {translatedFeaturedProject.tags.slice(0, 6).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm rounded font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/${locale}/projects/${translatedFeaturedProject.id}`}
                        className="btn-primary inline-flex items-center justify-center"
                      >
                        {tp("viewDetails")}
                        <ChevronRightIcon className="w-5 h-5 ml-2" />
                      </Link>
                      <a
                        href={translatedFeaturedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center justify-center"
                        title={tp("viewCodeTitle")}
                      >
                        <CodeBracketIcon className="w-5 h-5 mr-2" />
                        {tp("viewCode")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
