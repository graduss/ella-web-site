import { Menu } from "@/types/menu";
import { serviceLirt } from "@/servicies";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "servicies",
    newTab: false,
    submenu: serviceLirt.map(item => ({...item, newTab: false})),
  },
];
export default menuData;
