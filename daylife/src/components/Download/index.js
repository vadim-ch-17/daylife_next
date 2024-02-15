import { useTranslation } from "next-i18next";
import StoreButtons from "@/components/StoreButtons";
import ResponsiveImage from "../ResponsiveImage";
const Download = () => {
  const { t } = useTranslation("popups");
  const images = t("download.images", { returnObjects: true });

  return (
    <div className="content">
      <div className="title mb-6 px-8 text-center lg:px-16">
        <span className="text-2xl font-semibold text-primary lg:text-4xl lg:font-bold">
          {t("download.title")}
        </span>
      </div>
      <div className="download  px-8 pb-[3.125rem] lg:px-16 lg:pb-[0]">
        <div className="qr mb-5 flex flex-col items-center justify-center gap-3 lg:mb-12 lg:flex-row lg:gap-8">
          {images.length &&
            images.map((image, index) => (
              <ResponsiveImage
                key={index}
                classes={"lazy w-[50%] shadow-2xl lg:w-auto"}
                loadImg={"lazy"}
                src={image.src}
                alt={image.alt} />
            ))}
        </div>
        <div className="item-center flex flex-wrap justify-center gap-5 lg:gap-14">
          <StoreButtons type={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default Download;
