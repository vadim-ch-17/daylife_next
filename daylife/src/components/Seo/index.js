import { NextSeo } from "next-seo";

const Seo = ({ seo }) => {
    const { title, description, keywords } = seo;
    const locale = typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';

    return (
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                title: title,
                description: description,
                images: [
                    {
                        url: `${locale}/assets/images/dayLife.png`,
                        width: 700,
                        height: 400,
                        alt: 'Codevery Daily Life',
                    }
                ],
                site_name: title,
            }}
            robotsProps={{
                noindex: true,
                nofollow: true,
            }}
            noindex={true}
            nofollow={true}
            additionalMetaTags={[
                {
                    name: 'keywords',
                    content: keywords,
                },
                {
                    name: 'google-site-verification',
                    content: 'XFY7pAotdD7XshwMSCUHInssfXnPv-1f6656NXIERfc'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                }
            ]}
        />
    );
}

export default Seo;