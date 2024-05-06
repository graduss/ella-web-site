import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Roboto, Playfair_Display } from "next/font/google";
import { redirect } from 'next/navigation';

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleConfig } from "@/locales";

import "@/styles/index.css";



const roboto = Roboto({ weight: ["700", "400", "500"], style: ["normal", "italic"], subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"], variable: "--playfair-display" })

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: { locale: string }
}) {
  if (!LocaleConfig.locales.includes(locale)) {
    redirect(`/${LocaleConfig.defaultLocale}`)
  }

  const messages = useMessages();

  return (  
    <html lang={locale}>
      <head />
        <body className={`${roboto.className} ${playfairDisplay.variable}`}>
        <NextIntlClientProvider messages={pick(messages, 'header')}>
          <Header />
        </NextIntlClientProvider>
          

          <div className="content-bg">
            <div className="content-wrap">
              <div className="container">
                {children}
              </div>
            </div>
          </div>
            
          <Footer />
        </body>
    </html>
  );
}
