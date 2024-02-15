import { useEffect } from 'react';
import { useRouter } from 'next/router'

import Image from 'next/image';
import Button from '../Button';
import ResponsiveImage from '../ResponsiveImage';

const Logo = ({ src, classLogoTitle, classContainer, classImg, animate, ...props }) => {
    const { asPath, defaultLocale, locale } = useRouter()
    let path = defaultLocale === locale ? '/' : '/' + locale

    useEffect(() => {
        path = defaultLocale === locale ? '/' : '/' + locale
    }, [asPath, defaultLocale, locale])

    return (<div className={`logo ${classContainer ? classContainer : ''}`}>
        <Button href={path} classes={`logo ${classContainer ? classContainer : ''}`} label='Logo site'>
            {animate ?
                <div className="circle-logo relative overflow-hidden rounded-full h-[64px] w-[64px] border-2 border-primary bg-secondary">
                    <ResponsiveImage
                        src="/assets/images/logo-one.webp"
                        alt="Logo DayLife"
                        classes="logo absolute h-[64px] w-auto z-z4 animate-show-bottom"
                    />
                    <ResponsiveImage
                        src="/assets/images/logo-two.webp"
                        alt="Logo DayLife"
                        classes="logo absolute h-[64px] w-auto z-under animate-zIndex"
                    />
                </div>
                : <ResponsiveImage
                    src={src}
                    alt="Logo DayLife"
                    classes={classImg ? classImg : ''}
                />}
            <span className={`flex items-center font-bold font-reem-kufi text-xl md:font-extrabold md:text-26 ${classLogoTitle ? classLogoTitle : ''}`}>
                DayLife</span>
        </Button>
    </div>);
}

export default Logo;