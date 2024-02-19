import { useTranslation } from "next-i18next";
import { useState } from "react";
import Navigation from "../Navigation";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useAppContext } from "@/utils/context";
import LanguageSwitcher from "../LanguageSwitcher";
import Logo from "../Logo";
import { SpanStyle } from "./style";

const Header = ({ emptyNav }) => {
  const { t } = useTranslation("button");
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { setIsOpenModal, setModalBody } = useAppContext();

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
            animate
          />

          <Button
            onClick={eventHundler}
            classes={`block lg:hidden h-[17px] w-[22px] relative`}
            label="burger"
          >
            {Array.from({ length: 3 }).map((_, idx) => (
              <SpanStyle key={idx} $top={idx} open={isOpenNav}></SpanStyle>
            ))}
          </Button>
        </div>
        <div
          className={`grid overflow-hidden lg:flex lg:items-center lg:overflow-visible ${isOpenNav ? "grid-rows-[1fr]" : "!grid-rows-[0fr]"} transition-all !duration-700}`}
        >
          <div className="flex min-h-0 flex-col  justify-self-center lg:flex-row">
            {!emptyNav && <Navigation
              classContainer={"flex flex-end flex-col lg:flex-row mr-0 lg:mr-6"}
              classItem={"mb-4 lg:mb-0"}
              classLink={" font-extrabold"}
              typeLinks={"dark"}
              isOpenNav={isOpenNav}
              setIsOpenNav={setIsOpenNav}
            />}
            <LanguageSwitcher />
            <Button
              classes="flex justify-center items-center mb-3 lg:mb-0 ml-0 lg:ml-6 min-w-[182px] tracking-[.03em]"
              type={"primary"}
              onClick={openModal}
              hoverAnimation
              label="download app"
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
