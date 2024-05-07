import ServiceList from "@/components/servicies/ServicieList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {

  return (
    <>
      <div className="page-title">
        <div className="title">
          <h1>О нас</h1>
        </div>
      </div>
      <main className="page">
        <p>
          Наша команда уже более 15 лет занимается экспортным бизнесом между западом и востоком,
          Мы объединились и создали сообщество профессионалов в своей области.
          Команда менеджеров, юристов и логистов, сделают свою работу на высоком уровне для Вашего спокойствия и развития бизнеса.
        </p>
        Наша команда это:
        <ul>
          <li>Экспорт-менеджер по парфюмерно-косметической продукции</li>
          <li>Экспорт-менеджер медицинско-фармацевтической отрасли</li>
          <li>Юрист</li>
          <li>Таможенный брокер</li>
          <li>Логист</li>
          <li>Специалист по сертификации и документации</li>
          <li>Маркетолог–аналитик</li>
        </ul>
        <p>
          Компания КМ работает  на формировании бизнес- сообщества между Западным и Восточным рынкам.
        </p>
        Наша специализация:
        <ul>
          <li>Изделия медицинского назначения</li>
          <li>Лекарственные средства</li>
          <li>Эстетическая медицина</li>
          <li>Биологически активные добавки</li>
          <li>Косметика</li>
          <li>Парфюмерия</li>
          <li>СТМ</li>
        </ul>

        <section>
          <div className="title text-center">
            <h2>Направление</h2>
          </div>

          <ServiceList />
        </section>
      </main>
    </>
  );
}
