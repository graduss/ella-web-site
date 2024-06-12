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
            <h2>Направление</h2>
          </div>

          <ServiceList />
        </section>

        <section className={style.areas}>
          <article className={style.areaItem}>
            <div id="product_search" className="title">
              <h2>Поиск товарной категории</h2>
            </div>
            <label>Экспорт-менеджер парфюмерно-косметического направления</label>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Биологически активные добавки</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Косметика</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Парфюмерия</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>СТМ</Li>
            </ul>

            <label>Экспорт-менеджер медицинско-фармацевтического направления</label>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Изделия медицинского назначения</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Лекарственные средства</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Эстетическая медицина</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Биологически активные добавки</Li>
            </ul>
          </article>

          <article className={style.areaItem}>
            <div id="marketing_analytics" className="title">
              <h2>Маркетолог-аналитик</h2>
            </div>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Анализ по товарной категории</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Бизнес-модель по выбранной товарной категории</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>История продаж на рынке производителя</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>АВС анализ товарной категории</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Стратегия продаж</Li>
            </ul>
          </article>

          <article className={style.areaItem}>
            <div id="registration_certification" className="title">
              <h2>Регистрация Сертификация</h2>
            </div>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Оформление заявки с пакетом сопутствующих документов</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Оформление платежной документации</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Выборка образов продукции для лабораторных испытаний</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Проведение лабораторных испытаний</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Анализ производства в случае сертификации серии продукции</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Предоставление сертификата</Li>
            </ul>
          </article>

          <article className={style.areaItem}>
            <div id="logistics" className="title">
              <h2>Логистика</h2>
            </div>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Поиск транспортной компании в выбранном направлении</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Предложение по сборному грузу</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Расчет стоимости логистики</Li>
            </ul>
          </article>

          <article className={style.areaItem}>
            <div id="documentation" className="title">
              <h2>Документы</h2>
            </div>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Экспортная накладная</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Таможенная декларация</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>MSDS</Li>
            </ul>
          </article>
        </section>

        <section className={style.contacts}>
          <div id="contacts" className="title">
            <h2>Наши контакты</h2>
          </div>

          <MapSection address="ul. Szosa Chełmińska 105, 87-100 Toruń, Polska" />

          <Contacts className="mt-8" />
        </section>
      </main>
    </>
  );
}
