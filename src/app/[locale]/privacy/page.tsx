import { PrivacyRU, Privacy } from "@/components/Privacy";
import { useTranslations } from "next-intl";
import { LocaleConfig } from "@/locales"

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
