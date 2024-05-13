"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { TFLinks, terms, usefulLinks } from './footerMenuData';

import style from "./style.module.css";

type TLinksSection = {
  className: string;
  title?: string;
  links: TFLinks[];
}
const FooterLinksSection:FC<TLinksSection> = ({ className, title, links }) => {
  return (
    <div className={className}>
      <div className="mb-12 lg:mb-16">
        {title && (<h2 className={style.links_title}>{title}</h2>)}
        <ul>
          {links.map((item, ind) => (
            <li key={ind}>
              <Link className={style.links} href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className="container">
          <div className="flex flex-wrap gap-12">
            <div className="w-full lg:w-1/2">
              <div className="mb-8 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo4.png"
                    alt="logo"
                    className=" w-full"
                    width={379}
                    height={126}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-white dark:text-body-color-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lobortis.
                </p>
              </div>
            </div>

            <FooterLinksSection className="" title="Useful Links" links={ usefulLinks } />

            <FooterLinksSection className="" title="Terms" links={ terms } />
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-white">
              &copy; Aliaksandr Zhyburtovich 2024
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;