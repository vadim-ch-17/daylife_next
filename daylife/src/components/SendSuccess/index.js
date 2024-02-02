import { useTranslation } from "next-i18next";
import { useAppContext } from "@/utils/context";
import Button from "../Button";
const SendSuccess = () => {
    const { t } = useTranslation("popups");
    const { setIsOpenModal } = useAppContext();
    return (
        <div className="content">
            <div className="image md-7 lg:mb-14">
                <img className="h-52 lg:h-auto mx-auto lazy" loading="lazy" src={t("success.image.src")} alt={t("success.image.alt")} />
            </div>
            <div className="title text-center px-8 lg:px-16 mb-6">
                <span className="text-primary font-semibold lg:font-bold text-xl lg:text-4xl">{t('success.title')}</span>
            </div>
            <div className="title text-center px-8 lg:px-16 mb-6 lg:mb-14">
                <span className="text-primary font-semibold lg:font-bold text-lg lg:text-xl">{t("success.subtitle")}</span>
            </div>
            <div className="text-center mb-10 lg:mb-20">
                <Button hoverAnimation classes="text-white min-w-[193px] h-[3.625rem] bg-visited rounded-[0.625rem] hover:cursor-pointer hover:bg-white border-[1px] hover:text-visited border-visited transition duration-300 mx-auto" onClick={() => setIsOpenModal(false)}>{t("success.button")}</Button>
            </div>
        </div>
    )
};

export default SendSuccess;