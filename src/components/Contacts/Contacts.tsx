import { FC } from "react";
import { Li } from "../Common";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import cm from "classnames"

import style from "./style.module.css"

type TProps = {
  className?:string
  children?: React.ReactNode
}

const Contacts:FC<TProps> = ({className, children}) => (
  <ul className={cm(className, style.contacts)}>
    <Li icon={"fa-solid fa-at" as IconProp}><Link href="mailto:alesia.trezkova@gmail.com">alesia.trezkova@gmail.com</Link></Li>
    <Li icon={"fa-solid fa-phone" as IconProp}><Link href="tel:+48734029305">(+48) 734-029-305</Link></Li>
    <Li icon={"fa-solid fa-location-dot" as IconProp}>ul. Szosa Chełmińska 105, 87-100 Toruń, Polska</Li>
    { children }
  </ul>
)

export default Contacts;