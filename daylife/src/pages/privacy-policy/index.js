import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Cookies from "js-cookie";
import Layout from "@/components/Layout"
import { createElement } from "react";
import { TitleStyles, ParagraphStyles } from "../../styles/inc/pages/privacy_style";

export default function PrivacyPolicy() {
    const { t } = useTranslation("privacy");
    const content = t("content", { returnObjects: true });
    const tag = {
        title: TitleStyles,
        paragraph: ParagraphStyles,
        span: 'span'
    }

    return (
        <Layout emptyNav={true}>
            <h1 className="entry-title text-3xl font-extrabold md:text-5xl text-center !text-primary font-manrope pt-8 md:pt-12 my-6 md:my-14">{t("title")}</h1>
            <div className="container text-metal text-lg md:text-xl mb-16 md:mb-24">
                {
                    content.map((item, index) => {
                        const tagNode = tag[item.type] || 'span';
                        return (

                            createElement(
                                tagNode,
                                {
                                    key: index,
                                    dangerouslySetInnerHTML: { __html: item.content },
                                    className: item.class,
                                    ...(item.class === 'mb-0' && { $marginBottom: '0px' })
                                },
                            )

                        )
                    })
                }
            </div>
        </Layout>
    )
}


export async function getStaticProps({ locale }) {
    const selectedLanguage = Cookies.selectedLanguage || locale;

    return {
        props: {
            ...(await serverSideTranslations(selectedLanguage, [
                "navigation",
                "button",
                "popups",
                "privacy",
            ]))
        },
    };
}