import { TLinkHref } from "@/locales";

export type TServiseItem = {
    id: number;
    title: string;
    path:  TLinkHref;
    icon: string;
};

export const serviceLirt: TServiseItem[] = [
    {
        id: 1,
        title: "Search for a product category",
        path: "/#product_search",
        icon: "fa-solid fa-magnifying-glass",
    },
    {
        id: 2,
        title: "Marketing analytics",
        path: "/#marketing_analytics",
        icon: "fa-solid fa-chart-pie",
    },
    {
        id: 3,
        title: "Logistics",
        path: "/#logistics",
        icon: "fa-solid fa-truck-fast",
    },
    {
        id: 4,
        title: "Registration certification",
        path: "/#registration_certification",
        icon: "fa-solid fa-vial-circle-check",
    },
    {
        id: 5,
        title: "Documentation",
        path: "/#documentation",
        icon: "fa-solid fa-file-signature",
    }
];