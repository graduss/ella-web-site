import { PrivacyRU, Privacy } from "@/components/Privacy";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleConfig } from "@/i18n";

type TParams = { params: Promise<{ locale: typeof LocaleConfig.locales[number] }> };

export async function generateMetadata({ params }: TParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('title-privacy'),
    description: t('ConstMax_desc'),
  }
}

export default async function PrivacyPage({ params }: TParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return (<>
    <div className="pageTitle">
      <div className="title">
        <h1>{t('title')}</h1>
      </div>
    </div>
    <main className="page">
      {{
        ru: <PrivacyRU />
      }[locale] || <Privacy />}
    </main>
  </>);
}
