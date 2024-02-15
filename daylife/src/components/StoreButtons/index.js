import Button from "@/components/Button";
import Image from "next/image";

const StoreButtons = ({ type }) => {
  return (
    <>
      <Button href="https://www.apple.com/app-store/" type={type} hoverAnimation label='App Store'>
        <Image
          className="mr-2 max-h-[36px]"
          src="/assets/images/icons/apple_icon.png"
          alt="App Store"
          height={32}
          width={28}
        />
        <div className="pb-[4px]">
          <p className="text-xs font-light normal-case text-white">
            Download on the
          </p>
          <p className="name-apple text-btn-22 font-light text-white">
            App Store
          </p>
        </div>
        <span></span>
      </Button>
      <Button href="https://play.google.com/store/games?pli=1" type={type} hoverAnimation label='Google Play'>
        <Image
          className="mr-2 max-h-[36px]"
          src="/assets/images/icons/Google_Play_logo.png"
          alt="Google Play"
          height={32}
          width={32}
        />
        <div>
          <p className="text-xs font-light uppercase text-white">Get it on</p>
          <p className="name-google text-btn-18 font-light text-white">
            Google Play
          </p>
        </div>
        <span></span>
      </Button>
    </>
  );
};

export default StoreButtons;
