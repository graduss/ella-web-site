import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {

  return (
    <>
      <div className="page-title">
        <div className="title">
          <h1>Home</h1>
          <h3>sub title</h3>
        </div>
      </div>
      <main>
        <p>
          Mariusz Mosiołek i Partnerzy Kancelaria Adwokatów i Radców Prawnych SKA jest jedną z wiodących kancelarii prawnych w Warszawie świadczących usługi doradztwa prawnego. Jesteśmy dynamicznie rozwijającą się kancelarią wyspecjalizowaną w zakresie pełnej i kompleksowej obsługi prawnej podmiotów gospodarczych polskich i zagranicznych. Swoją działalność opieramy przede wszystkim na specjalizacji prawników wchodzących w skład naszego zespołu, który chętnie podejmuje się prowadzenia spraw o charakterze nowatorskim, wymagających podejścia strategicznego w szczególnym wymiarze, tych uznawanych za trudne, wymagających wiedzy interdyscyplinarnej.
        </p><p>
          Zespół Kancelarii to nie tylko specjaliści w określonych dziedzinach prawa, ale również doradcy wspomagający złożone procesy gospodarcze, posiadający kompleksową wiedzę fachową oraz duże doświadczenie praktyczne. Dzięki temu, świadczone przez Nas usługi łączą najwyższej jakości wiedzę prawniczą przy jednoczesnej znajomości potrzeb biznesu. Klienci doceniają nasze doświadczenie, odpowiedzialność oraz profesjonalizm. Śmiało wychodzimy poza utarte schematy, co umożliwia skuteczne i kreatywne rozwiązywanie nietypowych problemów.

Posiadamy doświadczenie zawodowe w pracy zarówno z dużymi spółkami – liderami w swojej branży, w tym ze spółkami Skarbu Państwa, z instytucjami samorządowymi, jak i ze średnimi i małymi firmami oraz indywidualnymi przedsiębiorcami. Duże doświadczenie w prowadzeniu sporów sądowych i reprezentacji Klientów przed Krajową Izbą Odwoławczą ugruntowało pozycję Kancelarii na rynku usług prawniczych.

Kancelaria świadczy usługi w języku polskim oraz w języku angielskim.

Biuro kancelarii mieści się na Żoliborzu w Warszawie.
        </p>
      </main>
      {/* <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}
