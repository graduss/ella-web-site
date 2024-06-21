'use client';
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import CookieBanner from "./CookieBanner";
import CookieConsent from './coocki.service';

import style from './coocki.module.css';

export default function CookiePreferences() {
  const t = useTranslations('cookie-preferences');
  const [isShowBaner, setIsSowBner] = useState<boolean>(false);
  const cc = useMemo(() => CookieConsent.init(), []);

  useEffect(() => {
    if (CookieConsent.userConsentExist() === false) setIsSowBner(true);
  }, [])

  return (
    <>
      <span onClick={() => setIsSowBner(true)} className={style.cookiePref}>{t('Cookie Preferences')}</span>
      { isShowBaner && <CookieBanner onHide={() => setIsSowBner(false)} /> }
    </>
  );
};