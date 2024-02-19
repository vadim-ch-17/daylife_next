import Button from "@/components/Button";
import Image from "next/image";

const StoreButtons = ({ type, classes, fontSize }) => {
  const font = {
    fontBig: {
      appStore: "text-btn-24",
      googlePlay: "text-btn-20",
    },
    fontMeduim: {
      appStore: "text-btn-20",
      googlePlay: "text-btn-18",
    },
  }
  return (
    <>
      <Button href="https://www.apple.com/app-store/" classes={classes} type={type} hoverAnimation label='App Store'>
        <Image
          className="mr-2 max-h-[36px]"
          src="/assets/images/icons/apple_icon.png"
          alt="App Store"
          height={32}
          width={28}
        />
        <div className="pb-[4px]">
          <p className={`text-xs font-light normal-case text-white`}>
            Download on the
          </p>
          <p className={`name-apple font-light ${font[fontSize] ? font[fontSize].appStore : 'text-btn-24'} text-white`}>
            App Store
          </p>
        </div>
        <span></span>
      </Button>
      <Button href="https://play.google.com/store/games?pli=1" classes={classes} type={type} hoverAnimation label='Google Play'>
        <Image
          className="mr-2 max-h-[36px]"
          src="/assets/images/icons/Google_Play_logo.png"
          alt="Google Play"
          height={32}
          width={32}
        />
        <div>
          <p className={`text-xs font-light uppercase text-white`}>Get it on</p>
          <p className={`name-google font-light ${font[fontSize] ? font[fontSize].googlePlay : 'text-btn-20'} text-white`}>
            Google Play
          </p>
        </div>
        <span></span>
      </Button>
    </>
  );
};

export default StoreButtons;
