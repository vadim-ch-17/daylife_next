import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cookies from "js-cookie";
import { useEffect } from "react";
import wow from "@/libs/wow";
import rellax from "@/libs/rellax";
import Sections from "@/sections";
import Layout from "@/components/Layout";

export default function Home() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      wow();
      rellax();
    }
  }, []);
  return (
    <Layout>
      <Sections />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const selectedLanguage = Cookies.selectedLanguage || locale;

  return {
    props: {
      ...(await serverSideTranslations(selectedLanguage, [
        "navigation",
        "button",
        "banner",
        "advantages",
        "action-sections",
        "product",
        "testimonials",
        "popups",
        "privacy",
      ]))
    },
  };
}

