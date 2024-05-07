import ServiceList from "@/components/servicies/ServicieList";

export default function ProductSearchPage() {
    return (
        <>
            <div className="page-title">
                <div className="title">
                    <h1>Маркетинг аналитика</h1>
                </div>
            </div>

            <main className="page">
                <p>
                    Наши аналитики – маркетологи подготовят для Вас аналитику по Вашему продукту,
                    что позволит своевременно принять грамотное  управленческое решение. 
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