'use client';

import { Link } from "@/locales";
import { useTranslations } from "next-intl";
import CookieConsent from "./coocki.service";
import style from './coocki.module.css';
import { useMemo, useState } from "react";

type TCookieConsent = 'granted' | 'denied';

export default function CookieBanner(
  { onHide = Function.prototype as () => void }:
  { onHide?: () => void }
) {
  const t = useTranslations('cookie-preferences');
  const cc = useMemo(() => CookieConsent.init(), []);

  const handleDecline = () => {
    cc.rejectAll();
    cc.applyUpdate();
    onHide();
  };

  const handeleAllow = () => {
    cc.acceptAll();
    cc.applyUpdate();
    onHide();
  }

  return (
    <section className={style.coockiBaner}>
      <article>
        {t.rich(
          'content',
          { link: (ch) => <Link href={'/privacy'} >{ch}</Link> }
        )}
      </article>
      <p className={style.bootons}>
        <button onClick={handleDecline} className={ style.btn } type="button">{t('Decline')}</button>
        <button onClick={handeleAllow} className={ style.btn } type="button">{t('Allow Cookies')}</button>
      </p>
    </section>
  )
}