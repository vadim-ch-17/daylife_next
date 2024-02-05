import { useTranslation } from "next-i18next";
import Star from "@/components/Star";
import Arrow from "@/components/Arrow";
import StoreButtons from "@/components/StoreButtons";

const CallToActionTop = () => {
  const { t } = useTranslation("action-sections");

  return (
    <div className="mb-[2.875rem] bg-primary pb-0 pt-9 md:pt-16 lg:mb-[169px] lg:pb-20">
      <div className="container mx-auto block grid-cols-[1fr_2fr] gap-x-2 px-3 lg:grid">
        <div className="relative mb-11 lg:mb-0">
          <p
            className="wow fadeIn mx-auto mb-9 w-9/12 text-center text-26 font-semibold text-white md:mb-14 md:text-4xl lg:w-full lg:text-left"
            data-wow-delay="0s"
          >
            {t("topSection.title")}
          </p>
          <div
            className="wow fadeIn flex flex-col items-center justify-center gap-5 md:flex-row lg:justify-start"
            data-wow-delay="0s"
          >
            <StoreButtons type={"light"} />
          </div>
          <Arrow
            classContainer={
              "arrow-container absolute -right-7 top-1/3 hidden h-20 max-w-[90%] text-right lg:block"
            }
            type={"topSection"}
            viewBox={"0 0 66.5 111.23"}
            width={"59.78"}
            height={"100"}
            svgStyles={{
              "--fill": "none",
              "--stroke": "#ffffff",
              "--stroke-miterlimit": 10,
              "--stroke-width": "3px",
            }}
            part1Styles={{
              "--transition": "0.5s",
              "--stroke-dashoffset": "52px",
              "--stroke-dasharray": "52px",
              "--stroke-dasharray-active": "105px",
              "--fill": "none",
            }}
            part2Styles={{
              "--transition": "0.5s",
              "--stroke-dashoffset": "232px",
              "--stroke-dasharray": "232px",
              "--stroke-dasharray-active": "465px",
              "--fill": "none",
            }}
            partD1={
              "M64.22,93.29c-.65.25-1.64.72-1.85,1.38-.54,1.72-2.53,2.43-4.17,3.2-3.7,1.76-6.58,4.95-10.31,6.63-1.86.85-4,1.35-5.37,2.85,1-5.08.07-10.39.89-15.51.35-2.25,1.06-4.52.64-6.76-.1-.56.22-1.07.22-1.65"
            }
            partD2={
              "M43,105.91A44.3,44.3,0,0,0,52.2,63.56a38.94,38.94,0,0,0-2.48-6.06,36.87,36.87,0,0,0-9.79-12C32.47,39.58,22.09,36.74,13.12,40a16.63,16.63,0,0,0-8.83,6.87A10.89,10.89,0,0,0,4,57.72,18.42,18.42,0,0,0,7,61.27a14.88,14.88,0,0,0,4.28,3.26c2.52,1.1,5.42.72,8.14.3,4.27-.65,8.69-1.42,12.25-3.86,3.85-2.63,6.22-6.88,8.46-11a33.89,33.89,0,0,0,3.12-6.86,25.42,25.42,0,0,0,.79-7.92C43.73,25.17,39.69,14.7,31.32,9.11A46.7,46.7,0,0,0,23.59,5.2C20.87,4,18.15,2.36,15.19,2.41l-1.65,0-1.75,0"
            }
          />
        </div>
        <div className="wow fadeIn relative" data-wow-delay="0s">
          <div
            className="wow zoomIn absolute bottom-0 left-1/2 hidden lg:block"
            data-wow-delay="0.5s"
            data-wow-duration="0.5s"
          >
            <Star
              color={"transparent"}
              border={"#ffffff"}
              height={42}
              width={42}
            />
          </div>
          <div
            className="wow zoomIn absolute left-1/1 top-0 hidden lg:block"
            data-wow-delay="0.8s"
            data-wow-duration="0.5s"
          >
            <Star
              color={"transparent"}
              border={"#ffffff"}
              height={28}
              width={27}
            />
          </div>
          <div className="h-full w-full overflow-hidden lg:overflow-visible">
            <div
              className="phones img-parallax transition-transform duration-[6000ms] ease-[cubic-bezier(0, 1, 0.5, 1)] relative h-40 w-full lg:h-full "
              data-rellax-speed="1"
              data-rellax-percentage="0.5"
              data-rellax-min="0"
            >
              <img
                className="lazy absolute top-0 max-h-[485px] lg:-top-[9rem] lg:right-0 lg:translate-x-0 xl:-top-2/6"
                loading="lazy"
                src={t("topSection.image.src")}
                alt={t("topSection.image.alt")}
              />
            </div>
          </div>

          <div
            className="wow zoomIn absolute right-0 hidden lg:block"
            data-wow-delay="1s"
            data-wow-duration="0.5s"
          >
            <Star
              color={"transparent"}
              border={"#ffffff"}
              height={29}
              width={29}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionTop;
