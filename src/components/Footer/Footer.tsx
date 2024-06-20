import { FC } from "react";
import { Link } from "@/locales";
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl";

import { TFLinks, usefulLinks } from './footerMenuData';
import { version } from "@/servicies";

import style from "./style.module.css";
import Logo from "../Logo/Logo";
import Contacts from "../Contacts/Contacts";
import CookiePreferences from "../CookiePreferences/CookiePreferences";
import { pick } from "lodash";

type TLinksSection = {
  className?: string;
  title?: string;
  links: TFLinks[];
}
const FooterLinksSection: FC<TLinksSection> = ({ className, title, links }) => {
  const t = useTranslations('header');
  return (
    <div className={className}>
      <div className="">
        {title && (<h2 className={style.links_title}>{title}</h2>)}
        <ul>
          {links.map((item, ind) => (
            <li key={ind}>
              <Link className={style.links} href={item.href}>{t(item.label)}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

type TFooterContacs = {
  className?: string,
  title?: string
}

const FooterContacs: FC<TFooterContacs> = ({ className, title }) => {
  const t = useTranslations('privacy');
  return (
    <div className={className}>
      <div className="">
        {title && (<h2 className={style.links_title}>{title}</h2>)}
        <Contacts>
          <>
            <li><Link href={"/privacy"}>{t('link')}</Link></li>
          </>
        </Contacts>
      </div>
    </div>
  );
}

const Footer = () => {
  const t = useTranslations('header');
  const messages = useMessages();

  return (
    <>
      <footer className={style.footer}>
        <div className="container">
          <div className="flex flex-wrap gap-8 mb-8 lg:gap-12 lg:mb-12 lg:flex-nowrap">
            <div className="grow">
              <div className="max-w-[360px]">
                <Link href="/" className="mb-8 inline-block">
                  <Logo />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-white dark:text-body-color-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <FooterLinksSection className={style.servicies} title={t('Services')} links={usefulLinks} />
            <FooterContacs className={style.contacts} title={t('Contacts')} />
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className={style.copy}>
              <span>&copy; ConstMax 2024.</span>
              <NextIntlClientProvider messages={pick(messages, 'cookie-preferences')}>
                <CookiePreferences />
              </NextIntlClientProvider>
              <em className="text-gray-400 text-nowrap">
                {t('Devloped by')}&nbsp;
                <Link target="_blank"  href={"https://www.linkedin.com/in/azhyburtovich/"}>Aliaksandr Zhyburtovich</Link>
                &nbsp;v{version}
              </em>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;