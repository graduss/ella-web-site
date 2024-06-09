import Privacy from "@/components/Privacy/Privacy";
import { useTranslations } from "next-intl";
import { FC } from "react";

const PrivacyPage: FC = () => {
  const t = useTranslations('privacy');
  return (<>
    <div className="pageTitle">
      <div className="title">
        <h1>{t('title')}</h1>
      </div>
    </div>
    <main className="page">
      <Privacy />
    </main>
  </>);
}

export default PrivacyPage;