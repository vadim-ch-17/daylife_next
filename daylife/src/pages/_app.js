import "@/styles/globals.css";
import { AppProvider } from "@/utils/context";
import { appWithTranslation } from "next-i18next";
function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
export default appWithTranslation(App);
