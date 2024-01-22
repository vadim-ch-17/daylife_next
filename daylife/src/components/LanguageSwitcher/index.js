// import React from 'react'
import { useTranslation } from 'next-i18next';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const router = useRouter();
    const changeLanguage = async (language) => {
        i18n.changeLanguage(language);
        Cookies.set('selectedLanguage', language);
        router.push(router.asPath, router.asPath, { locale: language });
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('uk')}>Українська</button>
            <button onClick={() => changeLanguage('ru')}>Русский</button>
        </div>
    );
};

export default LanguageSwitcher;