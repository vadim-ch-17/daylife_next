import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import wow from "@/libs/wow";
import rellax from "@/libs/rellax";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/sections/Banner";
import Advantages from "@/sections/Advantages";
import TopSection from "@/sections/CallToActionSections/TopSection";
import Product from "@/sections/Product";
import BottomSection from "@/sections/CallToActionSections/BottomSection";
import Testimonials from "@/sections/Testimonials";
import Modal from "@/components/Modal";
import { useModal } from "@/utils/context";

export default function Home() {
  const { modalBody } = useModal();
  const DynamicComponent = modalBody
    ? dynamic(() => import("@/components/" + modalBody))
    : null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      wow();
      rellax();
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
        <Testimonials />
      </main>
      <Footer />
      {/* modal */}
      <Modal>
        {DynamicComponent && <DynamicComponent />}
      </Modal>
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
        "testimonials",
        "popups",
      ])),
    },
  };
}
