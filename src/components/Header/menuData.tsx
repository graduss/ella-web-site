import { Menu } from "@/types/menu";
import { serviceLirt } from "@/servicies";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About",
    path: "/#about",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu: serviceLirt.map(item => ({ ...item, newTab: false })),
  },
  {
    id: 3,
    title: "Contacts",
    newTab: false,
    path: "/#contacts"
  }
];
export default menuData;
