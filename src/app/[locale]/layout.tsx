import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/request";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollEffect from "@/components/ScrollEffect";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL("https://murilomoraes.dev"),
    title: {
      default: t("title"),
      template: "%s | Murilo Moraes",
    },
    description: t("description"),
    keywords: [
      "desenvolvedor",
      "front-end",
      "react",
      "react native",
      "nextjs",
      "typescript",
      "tailwind css",
      "murilo moraes",
      "itapema",
    ],
    authors: [{ name: "Murilo Silva Moraes" }],
    creator: "Murilo Silva Moraes",
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : locale === "en" ? "en_US" : "es_ES",
      url: "https://murilomoraes.dev",
      title: t("title"),
      description: t("description"),
      siteName: "Murilo Moraes",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Portfólio - Desenvolvedor Front-end",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "google-site-verification-code",
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  if (!locales.includes(locale as any)) notFound();

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <ScrollEffect />
        <div className="min-h-screen flex flex-col relative z-10">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
