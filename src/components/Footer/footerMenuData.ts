import { TLinkHref } from "@/locales";
import { serviceLirt } from "@/servicies";

export type TFLinks = {
    id: number
    label: string;
    href: TLinkHref;
};

export const usefulLinks:TFLinks[] = serviceLirt.map(item => ({
    id: item.id,
    label: item.title,
    href: item.path
}));

// export const terms:TFLinks[] = [
//     {
//         label: "TOS",
//         href: "/"
//     },
//     {
//         label: "Privacy Policy",
//         href: "/"
//     },
//     {
//         label: "Refund Policy",
//         href: "/"
//     }
// ];