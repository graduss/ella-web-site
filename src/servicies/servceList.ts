import { UrlObject } from "url";

export type TServiseItem = {
    id: number;
    title: string;
    path:  string;
    imageSrc: string;
};
export const serviceLirt: TServiseItem[] = [
    {
        id: 1,
        title: "Поиск товарной категории",
        path: "/service/product_search",
        imageSrc: "/images/servicies/search.png",
    },
    {
        id: 2,
        title: "Маркетинг аналитика",
        path: "/service/marketing_analytics",
        imageSrc: "/images/servicies/analitics.png",
    },
    {
        id: 3,
        title: "Логистика",
        path: "/service/logistics",
        imageSrc: "/images/servicies/ligistics.png",
    },
    {
        id: 4,
        title: "Регистрация сертификация",
        path: "/service/registration_certification",
        imageSrc: "/images/servicies/registration.png",
    },
    {
        id: 5,
        title: "Документы",
        path: "/service/documentation",
        imageSrc: "/images/servicies/documents.png",
    }
];