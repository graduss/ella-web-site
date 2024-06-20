import { sendGAEvent } from "@next/third-parties/google";

export type TCookieConsent = 'granted' | 'denied';
const COOCKI_CONSENT = 'cookie_consent';

export function getCookieConsent(): TCookieConsent | null {
  return localStorage.getItem(COOCKI_CONSENT) as TCookieConsent | null;
}

export function setGtadAnalyticsStorage(analytics_storage: TCookieConsent) {
  sendGAEvent("consent", "update", { analytics_storage });
  //window.gtag("consent", "update", { analytics_storage });
}