import Head from 'next/head'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";
import wow from "@/libs/wow";
import rellax from "@/libs/rellax";
import Sections from "@/sections";
import Layout from "@/components/Layout";


export default function Home() {
  const { t } = useTranslation("meta");

  useEffect(() => {
    if (typeof window !== "undefined") {
      wow();
      rellax();
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="keywords" content={t('keywords')} />
      </Head>
      <Sections />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const selectedLanguage = Cookies.selectedLanguage || locale;

  return {
    props: {
      ...(await serverSideTranslations(selectedLanguage, [
        "meta",
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

