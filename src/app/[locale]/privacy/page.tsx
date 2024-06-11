import { PrivacyRU } from "@/components/Privacy";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { LocaleConfig } from "@/locales"

const PrivacyPage: FC<{
  params: { locale: typeof LocaleConfig.locales[number] }
}> = ({params: {locale}}) => {
  console.log(locale);
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
      }[locale]}
    </main>
  </>);
}

export default PrivacyPage;