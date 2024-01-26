import "@/styles/globals.css";
// import "animate.css/animate.min.css";
import { appWithTranslation } from "next-i18next";
function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default appWithTranslation(App);
