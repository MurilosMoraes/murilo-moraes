"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
  ChartBarIcon,
  InformationCircleIcon,
  WrenchScrewdriverIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  projects,
  ndaNotice,
  projectsStatus,
  getTranslatedProject,
} from "@/data/projects";
import PortfolioPreview from "@/components/PortfolioPreview";

export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();

  const currentNdaNotice =
    ndaNotice[locale as keyof typeof ndaNotice] || ndaNotice.pt;
  const currentProjectsStatus =
    projectsStatus[locale as keyof typeof projectsStatus] || projectsStatus.pt;

  return (
    <div className="py-16 lg:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <InformationCircleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  {t("enterpriseProjects")}
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                  {currentNdaNotice}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <WrenchScrewdriverIcon className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  {t("portfolioInProgress")}
                </h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
                  {currentProjectsStatus}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const translatedProject = getTranslatedProject(project, t);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  {project.image === "portfolio-preview" ? (
                    <PortfolioPreview />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}

                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <StarIcon className="w-3 h-3" />
                      {t("featured")}
                    </div>
                  )}

                  {project.lighthouse.performance === 100 && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <ChartBarIcon className="w-3 h-3" />
                      100% Lighthouse
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {translatedProject.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {translatedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-xs rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                        title={t("viewCodeTitle")}
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                        title={t("viewProjectTitle")}
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </a>
                    </div>

                    <Link
                      href={`/${locale}/projects/${project.id}`}
                      className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors inline-flex items-center gap-1"
                    >
                      {t("viewDetails")}
                      <ChevronRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t("moreProjectsSoon")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t("addingProjects")}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="btn-primary inline-flex items-center"
            >
              {t("getInTouch")}
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
