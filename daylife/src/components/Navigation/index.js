import navList from './navList';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Navigation = ({ classContainer, typeLinks, classItem, classLink, ...props }) => {
    const { t } = useTranslation('navigation');
    const styleItems = {
        dark: ' visited:text-primary text-primary hover:text-active active:text-active',
        light: ' visited:text-white text-white hover:text-active active:text-active',
    }
    return (
        <ul className={classContainer}>
            {navList.length && navList.map((item) => {
                return item.active ? (
                    <li key={item.name} className={`flex justify-center items-center ml-0 lg:ml-4 xl:ml-10 ${classItem ? classItem : ''}`}>
                        <Link href={item.path} className={`nav-link link flex items-center h-full text-base focus:outline-none transition-colors uppercase ${typeLinks && styleItems[typeLinks] ? styleItems[typeLinks] : ''} ${classLink ? classLink : ''}`}>
                            {t(item.name)}
                        </Link>
                    </li>
                ) : null;
            })}
        </ul>
    );
};

export default Navigation;
