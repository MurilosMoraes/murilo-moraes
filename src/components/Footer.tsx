"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./icons";
import { footerSocialLinks } from "@/data/contact";

export default function Footer() {
  const t = useTranslations("footer");
  const tHeader = useTranslations("header");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GitHubIcon />;
      case "linkedin":
        return <LinkedInIcon />;
      case "whatsapp":
        return <WhatsAppIcon />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-slate-900 font-bold text-xs">
                  &lt;/&gt;
                </span>
              </div>
              <span className="text-xl font-bold gradient-text">
                Murilo Moraes
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t("description")}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {t("quickLinks")}
            </h2>
            <div className="space-y-2">
              <Link
                href={`/${locale}/projects`}
                className="block text-gray-600 dark:text-gray-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors text-sm"
              >
                {tHeader("projects")}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="block text-gray-600 dark:text-gray-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors text-sm"
              >
                {tHeader("about")}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="block text-gray-600 dark:text-gray-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors text-sm"
              >
                {tHeader("contact")}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {t("contact")}
            </h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                <EnvelopeIcon className="w-4 h-4" />
                <span>murilosilvamoraes@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                <MapPinIcon className="w-4 h-4" />
                <span>Itapema, SC - Brasil</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-2">
              {footerSocialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                  aria-label={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Murilo Silva Moraes. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
 