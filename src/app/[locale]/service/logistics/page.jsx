import ServiceList from "@/components/servicies/ServicieList";

export default function ProductSearchPage() {
    return (
        <>
            <div className="page-title">
                <div className="title">
                    <h1>Логистика</h1>
                </div>
            </div>

            <main className="page">
                <p>
                    Услуги по поиску логистической компании:<br />
                    Наши специалисты проанализирует все компании (а это более 45 компаний) и  подберут наиболее выгодные условия.
                    Мы можем сформировать сборный груз, что значительно снизит цену логистики
                    Мы каждый день, получаем предложения по сборному грузу в разных направлениях.
                </p>


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