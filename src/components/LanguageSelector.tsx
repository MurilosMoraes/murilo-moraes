"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "@/components/LazyMotion";

const languages = [
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split("/").filter((segment) => segment);
    if (segments.length > 0 && ["pt", "en", "es"].includes(segments[0])) {
      segments.shift();
    }
    const pathWithoutLocale =
      segments.length > 0 ? `/${segments.join("/")}` : "";
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        aria-label="Select language"
      >
        <GlobeAltIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
        <ChevronDownIcon
          className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                    locale === lang.code
                      ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {locale === lang.code && (
                    <div className="ml-auto w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
