'use client';

import { Link } from "@/locales";
import { useTranslations } from "next-intl";
import cm from 'classnames';

import style from './coocki-baner.module.css';
import { useEffect, useState } from "react";

type TCookieConsent = 'granted' | 'denied';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<TCookieConsent>('denied');
  const [isShow, setIsShow] = useState<boolean>(false);
  const t = useTranslations('cookie-banner');

  const handeleAllow = () => {
    setCookieConsent('granted');
    localStorage.setItem('cookie_consent', 'granted');
  };

  const handleDecline = () => {
    setCookieConsent('denied');
    localStorage.setItem('cookie_consent', 'denied');
  };

  useEffect(() => {
    if (window.gtag && cookieConsent) {
      window.gtag("consent", "update", {
        analytics_storage: cookieConsent,
      });
    }
  }, [cookieConsent]);

  useEffect(() => {
    const value = localStorage.getItem('cookie_consent') as TCookieConsent|null;
    setCookieConsent(value);
  }, []);

  return (
    <section className={cm(style.coockiBaner, { [style.hide]: cookieConsent })}>
      <article>
        {t.rich(
          'content',
          { link: (ch) => <Link href={'/privacy'} >{ch}</Link> }
        )}
      </article>
      <p className={style.bootons}>
        <button onClick={handleDecline} className={style.btn} type="button">{t('Decline')}</button>
        <button onClick={handeleAllow} className={cm(style.btn, style.btnPrimary)} type="button">{t('Allow Cookies')}</button>
      </p>
    </section>
  )
}