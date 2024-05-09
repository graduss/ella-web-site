export type TServiseItem = {
    id: number;
    title: string;
    path:  string;
    icon: string;
};
export const serviceLirt: TServiseItem[] = [
    {
        id: 1,
        title: "Поиск товарной категории",
        path: "/service/product_search",
        icon: "fa-solid fa-magnifying-glass",
    },
    {
        id: 2,
        title: "Маркетинг аналитика",
        path: "/service/marketing_analytics",
        icon: "fa-solid fa-chart-pie",
    },
    {
        id: 3,
        title: "Логистика",
        path: "/service/logistics",
        icon: "fa-solid fa-truck-fast",
    },
    {
        id: 4,
        title: "Регистрация сертификация",
        path: "/service/registration_certification",
        icon: "fa-solid fa-vial-circle-check",
    },
    {
        id: 5,
        title: "Документы",
        path: "/service/documentation",
        icon: "fa-solid fa-file-signature",
    }
];