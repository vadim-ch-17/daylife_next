import { useTranslation } from "next-i18next";
import Arrow from "@/components/Arrow";
import Star from "@/components/Star";
import StoreButtons from "@/components/StoreButtons";

const CallToActionBottom = () => {
  const { t } = useTranslation("action-sections");
  return (
    <div className="mb-[2.875rem] bg-secondary pb-[1.375rem] pt-[2.813rem] lg:mb-[6.125rem] xl:pb-[7.063rem] xl:pt-[7.063rem]">
      <div className="container relative mx-auto flex grid-cols-3 flex-col items-center px-3 lg:grid">
        <div className=" relative order-3 lg:order-1">
          <picture>
            <source
              media="(max-width: 992px)"
              srcSet={`${t("bottomSection.image.src")}mob.webp`}
            />
            <img
              className="mx-auto lg:absolute lg:right-0 lg:top-1/2 lg:max-h-[360px] lg:-translate-y-[55%] "
              loading="lazy"
              src={`${t("bottomSection.image.src")}desk.webp`}
              alt={t("bottomSection.image.alt")}
            />
          </picture>
        </div>
        <div
          className="wow fadeIn relative order-1 xl:order-2"
          data-wow-delay="0s"
        >
          <div
            className="wow zoomIn absolute -top-[40%] hidden xl:block"
            data-wow-delay="0.5s"
            data-wow-duration="0.5s"
          >
            <Star height={42} width={42} border={"#494B7D"} />
          </div>
          <div
            className="wow zoomIn absolute left-[49%] hidden lg:-bottom-[10%] lg:block xl:-bottom-[65%]"
            data-wow-delay="0.8s"
            data-wow-duration="0.5s"
          >
            <Star height={29} width={29} color={"#494B7D"} />
          </div>
          <p className="relative z-10 mx-auto mb-[1.563rem] w-10/12 text-center text-26 font-extrabold text-primary md:text-4xl lg:w-full xl:mb-[0]">
            {t("bottomSection.title")}
          </p>
          <Arrow
            classContainer="arrow-container absolute right-[15%] z-0 hidden lg:bottom-[25%] lg:block xl:bottom-[15%]"
            type={"bottomSection"}
            viewBox={"0 0 115.52 61.86"}
            width={"115"}
            height={"61"}
            svgStyles={{
              "--fill": "none",
              "--stroke": "#494B7D",
              "--stroke-miterlimit": "10",
              "--stroke-width": "4px;",
            }}
            part1Styles={{
              "--transition": "0s",
              "--stroke-dashoffset": "235px",
              "--stroke-dasharray": "235px",
              "--stroke-dasharray-active": "0px",
              "--fill": "none",
            }}
            partD1={
              "M2.79,17c-.48,2.64,1,5.2,2.17,7.58,1,2,1.93,4.08,3.06,6A32.26,32.26,0,0,0,36.2,46.44,32.24,32.24,0,0,0,63.5,29.18a19.22,19.22,0,0,0,2.39-9.46,22.09,22.09,0,0,0-.92-5c-1.19-4.16-3.15-8.44-6.9-10.61C54,1.72,48.45,2.62,44.78,5.64s-5.59,7.79-5.87,12.53A32.92,32.92,0,0,0,41.61,32a26.56,26.56,0,0,0,4.1,7.36c2.77,3.28,6.66,5.38,10.45,7.4,1.63.87,3.26,1.74,5,2.5a40.68,40.68,0,0,0,31,.76c6.63-2.57,12.44-6.85,18.16-11.08"
            }
            part2Styles={{
              "--transition": "0.7s",
              "--stroke-dashoffset": "53px",
              "--stroke-dasharray": "53px",
              "--stroke-dasharray-active": "0px",
              "--fill": "none",
            }}
            partD2={
              "M98,60.9l4.46-8.13a28.3,28.3,0,0,1,1.51-2.54c.65-.93,1.4-1.77,2-2.69a31.6,31.6,0,0,0,1.71-2.85l3.35-6.1-10.11,1.67-7.37,1.21-6.33,1a3.49,3.49,0,0,1-.43.07,2.63,2.63,0,0,0-.63.15"
            }
          />
        </div>
        <div
          className="lg:md-[0] item-center wow fadeIn relative order-2 mb-[0.938rem] flex flex-wrap justify-center gap-5 lg:order-3 lg:justify-start"
          data-wow-delay="0.5s"
        >
          <StoreButtons type={"light"} />
          <div
            className="xxl:-top-[100%] wow zoomIn absolute left-[30%] hidden lg:-top-[40%] lg:block xl:-top-[80%]"
            data-wow-delay="1s"
            data-wow-duration="0.5s"
          >
            <Star height={29} width={29} color={"#494B7D"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBottom;
