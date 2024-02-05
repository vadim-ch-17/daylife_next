import { useEffect } from 'react';
import { useRouter } from 'next/router'

import Image from 'next/image';
import Button from '../Button';

const Logo = ({ src, classLogoTitle, classContainer, classImg, ...props }) => {
    const { asPath, defaultLocale, locale } = useRouter()
    let path = defaultLocale === locale ? '/' : '/' + locale

    useEffect(() => {
        path = defaultLocale === locale ? '/' : '/' + locale
    }, [asPath, defaultLocale, locale])

    return (
        <div className={`logo ${classContainer ? classContainer : ''}`}>
            <Button href={path} classes={`logo ${classContainer ? classContainer : ''}`}>
                <Image src={src} width={64} height={64} className={classImg ? classImg : ''} alt='Logo DayLife' />
                <span className={`flex items-center font-bold font-reem-kufi text-xl md:font-extrabold md:text-26 ${classLogoTitle ? classLogoTitle : ''}`}>
                    DayLife</span>
            </Button>
        </div>
    );
}

export default Logo;