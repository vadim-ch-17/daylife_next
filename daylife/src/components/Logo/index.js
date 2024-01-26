import Image from 'next/image';
import Button from '../Button';
const Logo = ({ src, classLogoTitle, classContainer, classImg, ...props }) => {
    return (
        <div className={`logo ${classContainer ? classContainer : ''}`}>
            <Button href="/"><Image src={src} width={64} height={64} className={classImg ? classImg : ''} alt='Logo dayLife' /></Button>
            <p className={`flex items-center font-bold font-reem-kufi text-xl md:font-extrabold md:text-26 ${classLogoTitle ? classLogoTitle : ''}`}>
                DayLife</p>
        </div>
    );
}

export default Logo;