import dynamic from "next/dynamic";
import { useAppContext } from "@/utils/context";
import Header from "../Header";
import Footer from "../Footer";
import Modal from "../Modal";

const Layout = ({ children, emptyNav = false }) => {
    const { modalBody, acceptCookies } = useAppContext();
    const DynamicModalComponent = modalBody
        ? dynamic(() => import("@/components/" + modalBody))
        : null;
    const DynamicCookies = !acceptCookies
        ? dynamic(() => import("@/sections/CookiesMsg"))
        : null;

    return (
        <>
            <Header emptyNav={emptyNav} />
            <main className={`main`}>
                {children}
            </main>
            <Footer emptyNav={emptyNav} />
            <Modal>
                {DynamicModalComponent && <DynamicModalComponent />}
            </Modal>
            {DynamicCookies && <DynamicCookies />}
        </>
    )
}

export default Layout;

