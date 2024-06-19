import { useTranslations } from "next-intl";

export default function CookiePreferences() {
  const t = useTranslations('cookie-preferences');
  return (<span>{t('Cookie Preferences')}</span>);
};