import Head from 'next/head'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";
import wow from "@/libs/wow";
import rellax from "@/libs/rellax";
import Sections from "@/sections";
import Layout from "@/components/Layout";
import { useAppContext } from "@/utils/context";


export default function Home({ privacy }) {
  const { t } = useTranslation(["meta", "navigation"]);
  const { setAcceptCookies } = useAppContext();
  const navItems = t("navigation:items", { returnObjects: true });
  const activeNavItems = navItems.filter(item => !item.active).map((item) => item.url);

  useEffect(() => {
    if (privacy) {
      setAcceptCookies(privacy);
    }
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
      <Sections activeSection={activeNavItems} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const selectedLanguage = Cookies.selectedLanguage || locale;
  const privacy = Cookies.get("privacy");
  const cacheControl = 'public, max-age=3600';
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
        "cookies"
      ])),
      privacy: privacy === "accepted",
    },
    revalidate: 3600,
  };
}

