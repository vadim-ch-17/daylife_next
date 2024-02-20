// import React from 'react'
import { useTranslation } from 'next-i18next';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Button from '../Button';
import { FaChevronDown } from "react-icons/fa6";

const LanguageSwitcher = ({ classContainer, ...props }) => {
    const { i18n } = useTranslation();
    const router = useRouter();
    const languages = {
        en: 'English',
        ua: 'Українська',
        ru: 'Русский',
    }

    const changeLanguage = async (language) => {
        i18n.changeLanguage(language);
        Cookies.set('selectedLanguage', language);
        router.push(router.asPath, router.asPath, { locale: language });
    };

    return (
        <div className={`group hover:cursor-pointer flex justify-center relative ${classContainer ? classContainer : ''}`}>
            <p className='uppercase hidden lg:flex flex-nowrap items-center'>
                <span className='mr-[3px] text-base transition-colors font-extrabold uppercase  text-primary group-hover:text-active '>{i18n.language}</span> <FaChevronDown className='transition-all h-[14px] text-primary duration-300 group-hover:rotate-180 group-hover:text-active' />
            </p>
            <ul className='flex lg:flex-col flex-row relative lg:absolute opacity-100 lg:opacity-0 lg:invisible lg:left-2/4 lg:-translate-x-2/4 lg:translate-y-12 lg:py-4 px-2 lg:shadow-3xl lg:bg-white lg:rounded-md group-hover:visible group-hover:opacity-100'>
                {Object.keys(languages).map((language) => (
                    <li
                        key={language}
                        className=' mb-[10px]'
                    >
                        <Button
                            onClick={() => changeLanguage(language)}
                            classes={`text-left px-[10px] py-1 rounded-[3px] hover:bg-lightprimaryactive h-full w-full text-sm ${language === i18n.language ? 'font-extrabold' : 'font-medium'} text-primary`}
                            label='language-switcher'
                        ><span className='hidden lg:block'>{languages[language]}</span><span className='lg:hidden block'>{language}</span></Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageSwitcher;