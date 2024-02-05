import { useRouter } from 'next/router'
import AfterFooter from "../AfterFooter";
import Logo from "../Logo";
import Navigation from "../Navigation";

const Footer = ({ emptyNav }) => {
  // const { asPath, defaultLocale, locale } = useRouter()

  return (
    <footer className="site-footer bg-darkprimary">
      <div className={`container mx-auto flex flex-col ${emptyNav ? 'justify-center' : 'justify-between'} px-3 pb-6 pt-10 text-center md:pb-14 md:pt-14 lg:flex-row lg:text-left`}>
        <Logo
          src={"/assets/images/logo_footer.webp"}
          classImg={"mb-2 md:mb-4"}
          classLogoTitle={"text-white"}
          classContainer={
            `flex justify-center items-center flex-col ${emptyNav ? 'mb-0' : 'mb-6'} lg:mb-0`
          }
        />
        {!emptyNav && <Navigation
          classContainer={
            "lg:flex flex-col w-full justify-center lg:flex-row columns-1 md:columns-2"
          }
          classItem={"p-2 "}
          typeLinks={"light"}
        />}
      </div>
      <AfterFooter />
    </footer>
  );
};

export default Footer;
