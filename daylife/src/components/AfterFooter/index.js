import Link from "next/link"
import { useTranslation } from "next-i18next"
const AfterFooter = () => {
    const { t } = useTranslation("privacy")
    return (
        <div className="border-t-1 border-gray">
            <div className="container relative flex-col md:flex-row flex mx-auto px-3 py-4 text-center lg:text-left">
                <span className=" text-lightgray w-full text-xs mb-2 md:mb-0 flex md:w-[115px] justify-center items-center">©
                    DayLife, {new Date().getFullYear()}</span>
                <Link aria-label="Privacy policy button" href={`/privacy-policy/`} className="flex items-center justify-center relative md:absolute left-2/4 -translate-x-2/4 transition-colors w-full text-xs !text-lightgray underline hover:!text-active active:!text-active">{t('title')}</Link>
            </div>
        </div>
    )
}

export default AfterFooter