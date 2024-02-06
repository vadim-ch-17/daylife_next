import { useEffect } from 'react';
import { useRouter } from 'next/router'

import Image from 'next/image';
import Button from '../Button';

const Logo = ({ src, classLogoTitle, classContainer, classImg, animate, ...props }) => {
    const { asPath, defaultLocale, locale } = useRouter()
    let path = defaultLocale === locale ? '/' : '/' + locale

    useEffect(() => {
        path = defaultLocale === locale ? '/' : '/' + locale
    }, [asPath, defaultLocale, locale])

    return (<div className={`logo ${classContainer ? classContainer : ''}`}>
        <Button href={path} classes={`logo ${classContainer ? classContainer : ''}`}>
            {animate ?
                <div className="circle-logo relative overflow-hidden rounded-full h-[64px] w-[64px] border-2 border-primary bg-secondary">
                    <img className="logo absolute h-[64px] w-auto z-under animate-zIndex" src="/assets/images/logo-two.png" alt="Logo DayLife" />
                    <img className="logo absolute h-[64px] w-auto z-z4 animate-show-bottom" src="/assets/images/logo-one.png" alt="Logo DayLife" />
                </div>
                : <Image src={src} width={64} height={64} className={classImg ? classImg : ''} alt='Logo DayLife' />}
            <span className={`flex items-center font-bold font-reem-kufi text-xl md:font-extrabold md:text-26 ${classLogoTitle ? classLogoTitle : ''}`}>
                DayLife</span>
        </Button>
    </div>);
}

export default Logo;