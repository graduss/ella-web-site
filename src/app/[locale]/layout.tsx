import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Roboto, Playfair_Display } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faVialCircleCheck,
  faMagnifyingGlass,
  faChartPie,
  faTruckFast,
  faFileSignature,
  faCircleCheck,
  faRightLong,
  faAt,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faVialCircleCheck,
  faMagnifyingGlass,
  faChartPie,
  faTruckFast,
  faFileSignature,
  faCircleCheck,
  faRightLong,
  faAt,
  faPhone,
  faLocationDot
);

import "@/styles/index.css";


const roboto = Roboto({ weight: ["700", "400", "500"], style: ["normal", "italic"], subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"], variable: "--playfair-display" });

export function generateStaticParams() {
  return [
    { locale: 'ru' },
    { locale: 'en' },
    { locale: 'pl' },
  ];
}

export async function generateMetadata({params}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'meta'});

  return {
    title: "ConstMax",
    description: t('ConstMax_desc'),
  }
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head />
        <body className={`${roboto.className} ${playfairDisplay.variable}`}>
          <NextIntlClientProvider>
            <Header />
          
          

            <div className="content-bg">
              <div className="content-wrap">
                <div className="container">
                  {children}
                </div>
              </div>
            </div>
              
            <Footer />
          </NextIntlClientProvider>
        </body>
        { process.env.GOOGLE_ID && <GoogleAnalytics gaId={process.env.GOOGLE_ID} /> }
    </html>
  );
}
