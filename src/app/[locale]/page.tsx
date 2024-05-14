import { Metadata } from "next";
import { FC } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ServiceList from "@/components/servicies/ServicieList";

import style from "./style.module.css"
import Link from "next/link";
import MapSection from "@/components/MapSection/MapSection";


export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
};

const Li:FC<{children: React.ReactNode, icon?: IconProp}> = ({children, icon}) => (
  <li><FontAwesomeIcon icon={ icon } /> {children}</li>
);

Li.defaultProps = {
  icon: "fa-solid fa-circle-check" as IconProp
}

export default function Home() {

  return (
    <>
      <div className={style.pageTitle}>
        <div className={style.title}>
          <h1>О нас</h1>
        </div>
      </div>
      <main className="page">
        <section>
          <article>
            <strong>
              ConstMax – это профессиональная В2В платформа, для развития экспортного бизнеса,
              между Западной и Восточной Европой.
            </strong><br />
            <strong>Специалисты ConstMax более 15 лет успешно </strong>
            занимается экспортным бизнесом, Мы объединились и создали сообщество профессионалов в своей области.
            Наша  команда, сделают свою работу на высоком уровне для Вашего спокойствия и развития бизнеса.
          </article>

          <section className={style.aboutArticals}>

            <article className={style.aboutArticalItem}>
              <div className={style.title}>
                <h2>Наши профессионалы:</h2>
              </div>

              <ul>
                <Li>Экспорт-менеджер парфюмерно-косметического направления</Li>
                <Li>Экспорт-менеджер медицинско-фармацевтического направления</Li>
                <Li>Таможенный агент</Li>
                <Li>Эксперт по регистрации и сертификации</Li>
                <Li>Юрист по экспорту</Li>
                <Li>Маркетолог-аналитик</Li>
                <Li>Экспедитор логистики</Li>
              </ul>
            </article>

            <article className={style.aboutArticalItem}>
              <div className={style.title}>
                <h2>Почему мы:</h2>
              </div>

              <ul>
                <Li>Быстрый поиск товарной категории</Li>
                <Li>Проведение переговоров на Ваших условиях</Li>
                <Li>Проведение переговоров на языке носителя</Li>
                <Li>Подготовка документов</Li>
                <Li>Поиск логистической компании по выгодной цене</Li>
                <Li>Контроль поставки на всех этапах</Li>
                <Li>Проведение сертификации и регистрации</Li>
              </ul>
            </article>

            <article className={style.aboutArticalItem}>
              <div className={style.title}>
                <h2>Модель бизнеса:</h2>
              </div>

              <ul>
                <Li>Мы заключаем договор</Li>
                <Li>На основе Вашей заявки Мы подготовим для Вас предварительное предложение</Li>
                <Li>Проведение переговоров</Li>
                <Li>Согласование условий  сотрудничества</Li>
                <Li>Подготовка документов</Li>
                <Li>Заказ транспорта</Li>
                <Li>Контроль качества и поставки товара</Li>
              </ul>
            </article>

          </section>
        </section>
        
        <section>
          <div className={style.title}>
            <h2>Направление</h2>
          </div>

          <ServiceList />
        </section>

        <section className={style.areas}>
          <article className={style.areaItem}>
            <div className={style.title}>
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
            <div className={style.title}>
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
            <div className={style.title}>
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
            <div className={style.title}>
              <h2>Логистика</h2>
            </div>
            <ul>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Поиск транспортной компании в выбранном направлении</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Предложение по сборному грузу</Li>
              <Li icon={ "fa-solid fa-right-long" as IconProp }>Расчет стоимости логистики</Li>
            </ul>
          </article>

          <article className={style.areaItem}>
            <div className={style.title}>
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
          <div className={style.title}>
            <h2>Нашы контакты</h2>
          </div>

          <MapSection address="ul. Szosa Chełmińska 105, 87-100 Toruń, Polska" />

          <ul className="mt-8">
            <Li icon={"fa-solid fa-at" as IconProp}><Link href="mailto:const-max@gmail.com">const-max@gmail.com</Link></Li>
            <Li icon={"fa-solid fa-phone" as IconProp}><Link href="tel:+48734029305">(+48) 734-029-305</Link></Li>
            <Li icon={"fa-solid fa-location-dot" as IconProp}>ul. Szosa Chełmińska 105, 87-100 Toruń, Polska</Li>
          </ul>
        </section>
      </main>
    </>
  );
}
