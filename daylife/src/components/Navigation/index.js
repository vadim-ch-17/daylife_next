import navList from './navList';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Navigation = () => {
    const { t } = useTranslation('navigation');

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        {t('testimonials')}
                    </Link>
                </li>
                {navList.length && navList.map((item) => {
                    return item.active ? (
                        <li key={item.name}>
                            <Link href={item.path}>
                                {t(item.name)}
                            </Link>
                        </li>
                    ) : null;
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
