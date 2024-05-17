import { TLinkHref } from "@/locales";

export type Menu = {
  id: number;
  title: string;
  path?: TLinkHref;
  newTab: boolean;
  submenu?: Menu[];
};
