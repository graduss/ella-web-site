"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
// import ScrollToTop from "@/components/ScrollToTop";
import { Roboto, Playfair_Display } from "next/font/google";
import "../styles/index.css";

const roboto = Roboto({ weight: ["700", "400", "500"], style: ["normal", "italic"], subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"], variable: "--playfair-display" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
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
          {/* <ScrollToTop /> */}
      </body>
    </html>
  );
}
