import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { useEffect } from "react";
import wow from "@/libs/wow";
import rellax from "@/libs/rellax";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Sections from "@/sections";
import { useModal } from "@/utils/context"




export default function Home() {
  const { modalBody } = useModal();
  const DynamicModalComponent = modalBody
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
        <Sections />
      </main>
      <Footer />
      {/* modal */}
      <Modal>
        {DynamicModalComponent && <DynamicModalComponent />}
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
      ]))
    },
  };
}

