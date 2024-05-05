import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Roboto, Playfair_Display } from "next/font/google";
import "@/styles/index.css";
import { LocaleConfig } from "@/locales";
import { redirect } from 'next/navigation';

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
  return (  
    <html lang={locale}>
      <head />
        <body className={`${roboto.className} ${playfairDisplay.variable}`}>
          <Header />

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

export function generateStaticParams() {
  return LocaleConfig.locales.map((locale) => ({locale}));
}
