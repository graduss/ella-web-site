import createMiddleware from "next-intl/middleware";

import { LocaleConfig } from "./locales";

export default createMiddleware(LocaleConfig);

export const config = {
  matcher: ["/", "/(de|en|cs|fr)/:path*"],
};