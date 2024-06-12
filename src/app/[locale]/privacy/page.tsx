import { PrivacyRU, Privacy } from "@/components/Privacy";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { LocaleConfig } from "@/locales"

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'meta'});

  return {
    title: t('title-privacy'),
    description: t('ConstMax_desc'),
  }
}

type TPrivacyPage = {
  params: { locale: typeof LocaleConfig.locales[number] }
};

export default function PrivacyPage ({params: {locale}}: TPrivacyPage) {
  const t = useTranslations('privacy');

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
