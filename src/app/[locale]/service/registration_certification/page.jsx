import ServiceList from "@/components/servicies/ServicieList";

export default function ProductSearchPage() {
    return (
        <>
            <div className="page-title">
                <div className="title">
                    <h1>Регистрация сертификация</h1>
                </div>
            </div>

            <main className="page">
                <p>
                 В нашей команде есть специалисты по сертификации и регистрации, Мы подберем компанию,
                 проведем контроль сертификации продукции на всех этапах. Своевременно подготовим документы 
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