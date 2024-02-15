import navList from "./navList";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useAppContext } from "@/utils/context";
import { toAnchor } from "./componentUtils";

const Navigation = ({
  classContainer,
  typeLinks,
  classItem,
  classLink,
  isOpenNav,
  setIsOpenNav,
  ...props
}) => {
  const { t } = useTranslation("navigation");
  const { setIsOpenModal, setModalBody } = useAppContext();

  const styleItems = {
    dark: " visited:text-primary text-primary hover:text-active active:text-active",
    light:
      " visited:text-white text-white hover:text-active active:text-active",
  };

  const openModal = (e) => {
    e.preventDefault();
    setModalBody("Form");
    setIsOpenModal(true);
  };

  return (
    <ul className={classContainer}>
      {navList.length &&
        navList.map((item) => {
          return item.active ? (
            <li
              key={item.name}
              className={`ml-0 flex items-center justify-center lg:ml-4 xl:ml-10 ${classItem ? classItem : ""}`}
            >
              <Link
                href={item.path}
                onClick={item?.modal ? openModal : (e) => toAnchor(isOpenNav, setIsOpenNav, e)}
                data-anchor={item?.path}
                className={`nav-link link flex h-full items-center text-base uppercase transition-colors focus:outline-none ${typeLinks && styleItems[typeLinks] ? styleItems[typeLinks] : ""} ${classLink ? classLink : ""}`}
                aria-label={t(item.name)}
              >
                {t(item.name)}
              </Link>
            </li>
          ) : null;
        })}
    </ul>
  );
};

export default Navigation;
