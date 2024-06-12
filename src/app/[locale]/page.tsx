import { useTranslations } from "next-intl";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Li } from "@/components/Common";
import MapSection from "@/components/MapSection/MapSection";
import Contacts from "@/components/Contacts/Contacts";


import ServiceList from "@/components/servicies/ServicieList";

import style from "./style.module.css";

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      <div className="pageTitle">
        <div id="about" className="title">
          <h1>{t('About')}</h1>
        </div>
      </div>
      <main className="page">
        <section>
          <article>
            <strong>{t('ConstMax_desc')}</strong><br />
            {t.rich('15_years', { s: (ch) => <strong>{ch}</strong> })}
          </article>

          <section className={style.aboutArticals}>

            <article className={style.aboutArticalItem}>
              <div className="title">
                <h2>{t('Our professionals')}</h2>
              </div>

              <ul>
                <Li>{t('Manager of Perfume and Cosmetics Export')}</Li>
                <Li>{t('Manager of Medical and Pharmaceutical Export')}</Li>
                <Li>{t('Customs Agent')}</Li>
                <Li>{t('Expert in Registration and Certification')}</Li>
                <Li>{t('Export Legal Counsel')}</Li>
                <Li>{t('Marketing and Analytics Specialist')}</Li>
                <Li>{t('Logistics Expeditor')}</Li>
              </ul>
            </article>

            <article className={style.aboutArticalItem}>
              <div className="title">
                <h2>{t('Why us')}</h2>
              </div>

              <ul>
                <Li>{t('Quick Product Category Search')}</Li>
                <Li>{t('Negotiation Conduct on Your Terms')}</Li>
                <Li>{t('Negotiating in the Native Speakers Language')}</Li>
                <Li>{t('Document Preparation')}</Li>
                <Li>{t('Finding a Logistics Company at a Competitive Price')}</Li>
                <Li>{t('Supply Monitoring at All Stages')}</Li>
                <Li>{t('Certification and Registration Conduct')}</Li>
              </ul>
            </article>

            <article className={style.aboutArticalItem}>
              <div className="title">
                <h2>{t('Business Model')}</h2>
              </div>

              <ul>
                <Li>{t('Signing a contract')}</Li>
                <Li>{t('Based on your request, we will prepare a preliminary proposal for you')}</Li>
                <Li>{t('Conducting Negotiations')}</Li>
                <Li>{t('Agreement on Collaboration Terms')}</Li>
                <Li>{t('Document Preparation')}</Li>
                <Li>{t('Arranging Transport Services')}</Li>
                <Li>{t('Quality and Delivery Monitoring')}</Li>
              </ul>
            </article>

          </section>
        </section>
        
        <section>
          <div className="title">
            <h2>{t('Direction')}</h2>
          </div>

          <ServiceList />
        </section>

        <section className={style.areas}>
          <article className={style.areaItem}>
            <div id="product_search" className="title">
              <h2>{t('Product Category Search')}</h2>
            </div>
            <label>{t('Manager of Perfume and Cosmetics Export')}</label>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Biologically Active Supplements (BAS)')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Cosmetics')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Perfumery')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('CTM')}</Li>
            </ul>

            <label>{t('Manager of Medical and Pharmaceutical Export')}</label>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Medical Equipment')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Medicinal Products')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Aesthetic Medicine')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Biologically Active Supplements (BAS)')}</Li>
            </ul>
          </article>

          <article className={style.areaItem}>
            <div id="marketing_analytics" className="title">
              <h2>{t('Marketing and Analytics Specialist')}</h2>
            </div>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Category Product Analysis')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Business Model for the Selected Product Category')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Manufacturer Market Sales History')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('ABC Analysis of Product Category')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Sales Strategy')}</Li>
            </ul>
          </article>

          <article className={style.areaItem}>
            <div id="registration_certification" className="title">
              <h2>{t('Registration and Certification')}</h2>
            </div>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Application Submission with a Package of Supporting Documents')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Preparation of Payment Documentation')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Selection of Product Samples for Laboratory Testing')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Conducting Laboratory Tests')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Production Analysis of Product Line Certification')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Certificate Issuance')}</Li>
            </ul>
          </article>

          <article className={style.areaItem}>
            <div id="logistics" className="title">
              <h2>{t('Logistics')}</h2>
            </div>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Search for a Transportation Company in the Chosen Direction')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('LCL (Less than Container Load) Proposal')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Logistics Cost Calculation')}</Li>
            </ul>
          </article>

          <article className={style.areaItem}>
            <div id="documentation" className="title">
              <h2>{t('Documents')}</h2>
            </div>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Export Invoice')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('Customs Declaration')}</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>{t('MSDS')}</Li>
            </ul>
          </article>
        </section>

        <section className={style.contacts}>
          <div id="contacts" className="title">
            <h2>{t('Our Contact Information')}</h2>
          </div>

          <MapSection address="ul. Szosa Chełmińska 105, 87-100 Toruń, Polska" />

          <Contacts className="mt-8" />
        </section>
      </main>
    </>
  );
}
