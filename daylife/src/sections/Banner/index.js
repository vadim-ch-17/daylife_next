import { useTranslation } from "next-i18next";
import React from "react";
import useIntersectionObserver from "@/hooks/intersectionObserver";
import Star from "@/components/Star";
import Arrow from "@/components/Arrow";
import { BannerStyles, FigureStyles, CircleStyles } from "./style";
import StoreButtons from "@/components/StoreButtons";
import theme from "@/styles/theme";

const Banner = () => {
  const { t } = useTranslation("banner");
  const [ref, inView] = useIntersectionObserver({
    rootMargin: "5px",
    threshold: 1,
  });

  return (
    <BannerStyles>
      <div className="container relative  mx-auto mb-[2.313rem] grid grid-cols-1 px-[1.563rem] pb-[1.875rem] pt-[2.513rem] md:mb-[5.75rem] md:pt-[8.813rem] lg:grid-cols-[700px_1fr] lg:px-3">
        <div className="mb-[2.813rem]">
          <h1
            className="wow fadeIn mb-[1.313rem] max-w-full text-[100px] text-xll font-extrabold text-primary md:text-[50px] lg:max-w-[600px] lg:text-60 xl:max-w-full"
            data-wow-delay="0s"
          >
            {t("title")}
          </h1>
          <p
            className="wow fadeIn mb-[2.825rem] text-sm font-medium text-metal lg:mb-[3.75rem]  lg:max-w-[464px] lg:text-base"
            data-wow-delay="0.5s"
          >
            {t("description")}
          </p>
          <div
            className="banner-buttons item-center wow fadeIn flex flex-wrap justify-center gap-5 lg:justify-start"
            data-wow-delay="0.5s"
          >
            <StoreButtons type={"primary"} classes={'min-w-[205px] min-h-[61px]'} fontSize={'fontBig'} />
          </div>
          <div className="block-arrow relative hidden max-w-[90%] pt-[3.75rem] text-right lg:block">
            <Arrow
              classContainer="arrow-container absolute w-[258px] h-full z-under -bottom-[56%] right-[20%]"
              type={"banner"}
              svgStyles={{
                "--fill": "none",
                "--stroke": "#494B7D",
                "--stroke-miterlimit": "10",
              }}
              part1Styles={{
                "--stroke-width": "9px",
                "--transition": "0.7s",
                "--stroke-dashoffset": "60px",
                "--stroke-dasharray": "60px",
                "--stroke-dasharray-active": "0px",
                "--fill": "none",
              }}
              partD1={
                "M5,34.9A4,4,0,0,1,4.3,33c-.9-6.1.7-12.8-2-18.4a4.79,4.79,0,0,1-.7-2A4.53,4.53,0,0,1,1.9,11,38.63,38.63,0,0,1,4,5l6.9,8.1A25.43,25.43,0,0,0,13.7,16c3.1,2.6,7.5,3.7,10.1,6.9"
              }
              part2Styles={{
                "--stroke-width": "5px",
                "--transition": "0s",
                "--stroke-dashoffset": "384px",
                "--stroke-dasharray": "384px",
                "--stroke-dasharray-active": "0px",
                "--fill": "none",
              }}
              partD2={
                "M247.71,59.44A78.41,78.41,0,0,1,186,94.3c-16.27.6-32.43-4-47-11.32-10.76-5.42-21-12.6-27.52-22.74s-8.63-23.65-3.1-34.35c7-3.44,15.85,3,17.13,10.72s-3,15.37-8.35,21A52.7,52.7,0,0,1,70.85,73C56.62,70.49,44,62.14,33.54,52.17A127.81,127.81,0,0,1,19.69,36.62C14.56,29.8,10.07,22.39,7.42,14.27"
              }
              width={"250"}
              height={"100"}
              viewBox={"0 0 246.6 98.2"}
            />
            <span
              className="wow fadeIn absolute right-[25px]  text-base text-primary"
              data-wow-delay="0.5s"
            >
              {t("recomend")}
            </span>
          </div>
        </div>
        <div className=" relative">
          <div
            className="wow zoomIn absolute -left-[50px] -top-[55px] hidden lg:block"
            data-wow-delay="0.5s"
            data-wow-duration="0.5s"
          >
            <Star
              color={"trasparent"}
              border={theme.colors.primary}
              width={42}
              height={42}
            />
          </div>
          <FigureStyles>
            <CircleStyles>
              <picture>
                <source
                  media="(max-width: 700px)"
                  srcSet={`${t("image.src")}_700.webp`}
                />
                <source
                  media="(max-width: 1000px)"
                  srcSet={`${t("image.src")}_1000.webp`}
                />
                <img
                  className="image absolute -bottom-[30px] right-[14%] max-h-[29.75rem] w-auto sm:right-[15%] sm:max-h-[25rem] md:right-[10%] md:max-h-[40rem] 2xl:right-[2%] 2xl:max-h-[46rem]"
                  data-rellax-speed="1"
                  data-rellax-min="5"
                  src={`${t("image.src")}_1000.webp`}
                  alt={t("image.alt")}
                />
              </picture>
            </CircleStyles>
          </FigureStyles>
          <div
            className="wow zoomIn absolute right-[30%] top-[20%] hidden lg:block xl:right-[6%]"
            data-wow-delay="0.7s"
            data-wow-duration="0.5s"
          >
            <Star width={29} height={29} color={theme.colors.primary} />
          </div>
        </div>
      </div>
    </BannerStyles>
  );
};

export default Banner;
