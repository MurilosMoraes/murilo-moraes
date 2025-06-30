import { getRequestConfig } from "next-intl/server";

const locales = ["pt", "en", "es"];

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || "pt";

  if (!locales.includes(currentLocale as any)) {
    console.error(`Invalid locale: ${currentLocale}, using default 'pt'`);
    return {
      locale: "pt",
      messages: (await import(`../../messages/pt.json`)).default,
    };
  }

  try {
    const messages = (await import(`../../messages/${currentLocale}.json`))
      .default;
    return {
      locale: currentLocale as string,
      messages,
    };
  } catch (error) {
    console.error(`Error loading messages for locale ${currentLocale}:`, error);
    return {
      locale: "pt",
      messages: (await import(`../../messages/pt.json`)).default,
    };
  }
});

export { locales };
