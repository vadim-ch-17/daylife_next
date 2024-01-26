import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
// import WOW from "wowjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/sections/Banner";
import Advantages from "@/sections/Advantages";
import TopSection from "@/sections/CallToActionSections/TopSection";
import Product from "@/sections/Product";
import BottomSection from "@/sections/CallToActionSections/BottomSection";

export default function Home() {
  const [WOW, setWOW] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wowjs").then((wowjs) => {
        setWOW(wowjs);
        new wowjs.WOW({
          boxClass: "wow",
          offset: 100,
          mobile: false,
          live: true,
          callback: function (box) {},
          scrollContainer: null,
          resetAnimation: true,
        }).init();
      });
    }
  }, []);
  return (
    <>
      <Header />
      <main className={`main`}>
        <Banner />
        <Advantages />
        <TopSection />
        <Product />
        <BottomSection />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const selectedLanguage = Cookies.selectedLanguage || locale;

  return {
    props: {
      ...(await serverSideTranslations(selectedLanguage, [
        "common",
        "navigation",
        "button",
        "banner",
        "advantages",
        "action-sections",
        "product",
      ])),
    },
  };
}
