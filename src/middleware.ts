import createMiddleware from "next-intl/middleware";

import { LocaleConfig } from "@/locales";

export default createMiddleware(LocaleConfig);

export const config = {
  matcher: ["/", "/(ru|pl|en)/:path*"],
};