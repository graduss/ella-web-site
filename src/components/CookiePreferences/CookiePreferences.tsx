'use client';
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import style from './coocki.module.css'
import { getCookieConsent, setGtadAnalyticsStorage } from "./coocki.service";
import CookieBanner from "./CookieBanner";

export default function CookiePreferences() {
  const t = useTranslations('cookie-preferences');
  const [isShowBaner, setIsSowBner] = useState<boolean>(false);

  useEffect(() => {
    const coockiConsent = getCookieConsent();
    if (coockiConsent === 'granted') setGtadAnalyticsStorage(coockiConsent);
    else setGtadAnalyticsStorage('denied');

    if (coockiConsent === null) setIsSowBner(true);
  }, []);

  return (
    <>
      <span onClick={() => setIsSowBner(true)} className={style.cookiePref}>{t('Cookie Preferences')}</span>
      {/* { isShowBaner && <CookieBanner /> } */}
    </>
  );
};