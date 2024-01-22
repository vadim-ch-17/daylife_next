import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Cookies from 'js-cookie';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {

  const { t } = useTranslation('common')
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <LanguageSwitcher />
        <h1 className="text-4xl font-bold text-center">{t('title')}</h1>
      </main>
    </>

  );
}

export async function getStaticProps({ locale }) {
  const selectedLanguage = Cookies.selectedLanguage || locale;

  return {
    props: {
      ...(await serverSideTranslations(selectedLanguage, ['common', 'navigation'])),
    },
  };
}