import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  title: 'DayLife',
  description: '...',
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Reem+Kufi:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="relative font-manrope">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
