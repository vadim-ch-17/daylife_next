import { useTranslation } from 'next-i18next';
import Button from '@/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
import { useAppContext } from '@/utils/context';

const CookiesMsg = () => {
    const router = useRouter();
    const { setAcceptCookies } = useAppContext();
    const { t } = useTranslation("cookies");
    const buttons = t("buttons", { returnObjects: true });

    const setAcceptPrivacy = () => {
        const date = new Date();
        date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        Cookies.set('privacy', 'accepted', { expires: +date.toUTCString() });

        setAcceptCookies(true);
    }
    return (
        <div className={`block md:flex justify-between  max-w-[1900px] mx-auto fixed bottom-0 z-100 bg-primary p-4 md:p-5 shadow-cookies`}>
            <p className="text-sm lg:text-base text-center md:text-left text-white font-semibold mb-4 md:mb-0 pr-0 md:pr-4">
                {t("content")}
            </p>
            <div className="flex justify-center flex-wrap gap-2 md:block">
                <Button
                    onClick={setAcceptPrivacy}
                    type={"light"}
                    label={buttons[0].title}
                    classes="min-w-[130px] md:!w-full !text-sm md:!text-base mb-0 md:mb-2 mr-2 md:mr-0 !justify-center md:justify-start">{buttons[0].title}</Button>
                <Link aria-label="Page privacy" className={`group bg-primary overflow-hidden relative z-[1] shadow-2xl border-[1px] border-white text-white ${router.pathname.includes('privacy-policy') ? 'hidden' : 'flex'} items-center px-[20px] min-h-[57px] rounded-[50px] hover:bg-hover active:bg-active  min-w-[130px] !bg-transparent small !text-sm md:!text-base !justify-center md:justify-start`} href={`/privacy-policy/`}>{buttons[1].title}</Link>
            </div>
        </div>
    )

}

export default CookiesMsg;