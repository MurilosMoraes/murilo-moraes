"use client";

import { useParams, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { projects, getTranslatedProject } from "@/data/projects";
import PortfolioPreview from "@/components/PortfolioPreview";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("projects");

  const project = projects.find((p) => p.id === params.id);
  const translatedProject = project ? getTranslatedProject(project, t) : null;

  if (!project || !translatedProject) {
    router.push(`/${locale}/projects`);
    return null;
  }

  const lighthouseMetrics = [
    {
      label: t("lighthouse.performance"),
      value: translatedProject.lighthouse.performance,
      color: "bg-green-500",
    },
    {
      label: t("lighthouse.accessibility"),
      value: translatedProject.lighthouse.accessibility,
      color: "bg-blue-500",
    },
    {
      label: t("lighthouse.bestPractices"),
      value: translatedProject.lighthouse.bestPractices,
      color: "bg-purple-500",
    },
    {
      label: t("lighthouse.seo"),
      value: translatedProject.lighthouse.seo,
      color: "bg-orange-500",
    },
  ];

  const isPerfectScore = lighthouseMetrics.every(
    (metric) => metric.value === 100
  );

  return (
    <div className="py-16 lg:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors mb-6"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            {t("backToProjects")}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {translatedProject.image === "portfolio-preview" ? (
                <div className="h-64 md:h-80">
                  <PortfolioPreview />
                </div>
              ) : (
                <Image
                  src={translatedProject.image}
                  alt={translatedProject.title}
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover"
                />
              )}

              {translatedProject.featured && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                  <StarIcon className="w-4 h-4" />
                  {t("featured")}
                </div>
              )}

              {isPerfectScore && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                  <ChartBarIcon className="w-4 h-4" />
                  {t("lighthouse.badge")}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {translatedProject.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {translatedProject.longDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {translatedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm rounded-lg font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href={translatedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <CodeBracketIcon className="w-5 h-5 mr-2" />
                {t("viewCode")}
              </a>
              <a
                href={translatedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                {t("viewDemo")}
              </a>
            </div>
          </motion.div>
        </div>

        {isPerfectScore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 mb-12"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full mb-4">
                <ChartBarIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("lighthouse.perfectScore")}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                {t("lighthouse.description")}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {lighthouseMetrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div
                      className={`w-16 h-16 ${metric.color} rounded-full mx-auto mb-2 flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-xl">
                        {metric.value}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t("sections.features")}
              </h3>
            </div>
            <ul className="space-y-2">
              {Array.isArray(translatedProject.features) &&
              translatedProject.features.length > 0 ? (
                translatedProject.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-gray-600 dark:text-gray-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 dark:text-gray-400 text-sm italic">
                  {t("fallbacks.featuresNotAvailable")}
                </li>
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <ExclamationTriangleIcon className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t("sections.challenges")}
              </h3>
            </div>
            <ul className="space-y-2">
              {Array.isArray(translatedProject.challenges) &&
              translatedProject.challenges.length > 0 ? (
                translatedProject.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-gray-600 dark:text-gray-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 dark:text-gray-400 text-sm italic">
                  {t("fallbacks.challengesNotAvailable")}
                </li>
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <LightBulbIcon className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t("sections.learnings")}
              </h3>
            </div>
            <ul className="space-y-2">
              {Array.isArray(translatedProject.learnings) &&
              translatedProject.learnings.length > 0 ? (
                translatedProject.learnings.map((learning, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-gray-600 dark:text-gray-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{learning}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 dark:text-gray-400 text-sm italic">
                  {t("fallbacks.learningsNotAvailable")}
                </li>
              )}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="btn-primary inline-flex items-center justify-center"
              >
                {t("cta.contact")}
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="btn-secondary inline-flex items-center justify-center"
              >
                {t("cta.viewOthers")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
