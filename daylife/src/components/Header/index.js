
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Navigation from '../Navigation';
import Button from '../Button';
import { FaArrowRightLong } from "react-icons/fa6";
import LanguageSwitcher from '../LanguageSwitcher';
import styles from './Header.module.css';
import Logo from '../Logo';

const Header = () => {
    const { t } = useTranslation('button')
    const [isOpen, setIsOpen] = useState(false);
    const eventHundler = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className='bg-white sticky top-0 shadow-3xl z-30'>
            <nav className='lg:flex justify-between py-0 lg:py-5 container h-full'>
                <div className='flex justify-between items-center py-4 lg:py-0'>
                    <Logo src={'/assets/images/logo.webp'} classLogoTitle={'text-primary ml-2.5'} classContainer={'flex'} />

                    <Button onClick={eventHundler} classes={`block lg:hidden h-[17px] w-[22px] relative ${styles.burger} ${isOpen ? styles.open : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Button>
                </div>
                <div className={`grid lg:block overflow-hidden lg:overflow-visible ${isOpen ? '' : '!grid-rows-[0fr]'} ${styles.transitionRows}`}>
                    <div className='flex self-center justify-self-center flex-col lg:flex-row min-h-0'>
                        <Navigation classContainer={'flex flex-end flex-col lg:flex-row mr-0 lg:mr-6'} classItem={'mb-4 lg:mb-0'} classLink={' font-extrabold'} typeLinks={'dark'} />
                        <LanguageSwitcher />
                        <Button classes="flex justify-center items-center mb-3 lg:mb-0 ml-0 lg:ml-6 " type={'primary'}>{t('download_now')} <FaArrowRightLong className='ml-2.5' /></Button>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Header;