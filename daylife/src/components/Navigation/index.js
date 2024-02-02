import navList from "./navList";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useAppContext } from "@/utils/context";

const Navigation = ({
  classContainer,
  typeLinks,
  classItem,
  classLink,
  ...props
}) => {
  const { t } = useTranslation("navigation");
  const { setIsOpenModal, setModalBody } = useAppContext();

  const styleItems = {
    dark: " visited:text-primary text-primary hover:text-active active:text-active",
    light:
      " visited:text-white text-white hover:text-active active:text-active",
  };

  const toAnchor = (e) => {
    e.preventDefault();
    const href = e.target.dataset.anchor;
    const element = document.querySelector("#" + href);

    if (element) {
      const top = element.offsetTop;
      window.scrollTo({
        top: top - 120,
        behavior: "smooth",
      });
    } else {
      console.error(`Element with selector "${href}" not found`);
    }
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
                onClick={item?.modal ? openModal : toAnchor}
                data-anchor={item?.path}
                className={`nav-link link flex h-full items-center text-base uppercase transition-colors focus:outline-none ${typeLinks && styleItems[typeLinks] ? styleItems[typeLinks] : ""} ${classLink ? classLink : ""}`}
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
