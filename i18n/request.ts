import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;

  const currentLocale =
    requestedLocale && routing.locales.includes(requestedLocale as "en" | "id")
      ? requestedLocale
      : routing.defaultLocale;

  return {
    locale: currentLocale,

    messages: {
      common: (await import(`./messages/${currentLocale}/common`)).default,

      home: (await import(`./messages/${currentLocale}/home`)).default,
    },
  };
});
