import ServiceList from "@/components/servicies/ServicieList";

export default function ProductSearchPage() {
    return (
        <>
            <div className="page-title">
                <div className="title">
                    <h1>Документы</h1>
                </div>
            </div>

            <main className="page">
                <p>
                    Наши специалисты таможенного сектора подготовят необходимые экспортные документы.
                    Проведут таможенную очистку и сопроводительные транспортные документы
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