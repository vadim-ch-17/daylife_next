import { useTranslation } from "next-i18next";
import { useState } from "react";
import Navigation from "../Navigation";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useModal } from "@/utils/context";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./Header.module.css";
import Logo from "../Logo";

const Header = () => {
  const { t } = useTranslation("button");
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { setIsOpenModal, setModalBody } = useModal();
  const eventHundler = () => {
    setIsOpenNav(!isOpenNav);
  };
  const openModal = () => {
    setModalBody("Download");
    setIsOpenModal(true);
  };
  return (
    <header className="sticky top-0 z-30 bg-white shadow-3xl">
      <nav className="container h-full justify-between py-0 lg:flex lg:py-5">
        <div className="flex items-center justify-between py-4 lg:py-0">
          <Logo
            src={"/assets/images/logo.webp"}
            classLogoTitle={"text-primary ml-2.5"}
            classContainer={"flex"}
          />

          <Button
            onClick={eventHundler}
            classes={`block lg:hidden h-[17px] w-[22px] relative ${styles.burger} ${isOpenNav ? styles.open : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </Button>
        </div>
        <div
          className={`grid overflow-hidden lg:block lg:overflow-visible ${isOpenNav ? "" : "!grid-rows-[0fr]"} ${styles.transitionRows}`}
        >
          <div className="flex min-h-0 flex-col self-center justify-self-center lg:flex-row">
            <Navigation
              classContainer={"flex flex-end flex-col lg:flex-row mr-0 lg:mr-6"}
              classItem={"mb-4 lg:mb-0"}
              classLink={" font-extrabold"}
              typeLinks={"dark"}
            />
            <LanguageSwitcher />
            <Button
              classes="flex justify-center items-center mb-3 lg:mb-0 ml-0 lg:ml-6 "
              type={"primary"}
              onClick={openModal}
            >
              {t("download_now")} <FaArrowRightLong className="ml-2.5" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
