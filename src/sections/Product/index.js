import Star from "@/components/Star";
import { useTranslation } from "next-i18next";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "@/components/Button";
import { useAppContext } from "@/utils/context";

const Product = () => {
  const { t } = useTranslation(["product", "button"]);
  const cards = t("cards", { returnObjects: true });
  const { setModalBody, setIsOpenModal } = useAppContext();

  const handleOpenModal = () => {
    setModalBody("Download");
    setIsOpenModal(true);
  };

  return (
    <div id="product" className="container mb-[5rem]">
      <div className="mb-[3.875rem] text-center">
        <h2
          className="wow fadeIn text-base font-medium text-metal"
          data-wow-delay="0s"
        >
          {t("title")}
        </h2>
        <p
          className="wow fadeIn mb-[1.25rem] text-28 font-bold text-primary lg:mb-[2rem] lg:text-40"
          data-wow-delay="0.5s"
        >
          {t("subtitle")}
        </p>
        <p
          className="wow fadeIn mx-auto max-w-[709px] px-[1.25rem] text-sm font-light text-metal md:px-[0.25rem] md:text-xl"
          data-wow-delay="0.5s"
        >
          {t("description")}
        </p>
      </div>
      <div className="app-structure">
        <div
          className="img-parallax transition-transform duration-[6000ms] ease-[cubic-bezier(0, 1, 0.5, 1)] mx-auto mb-[3.55rem] md:mb-[10.125rem] "
          data-rellax-min="-5"
          data-rellax-max="50"
        >
          <picture>
            <source
              media="(max-width: 700px)"
              srcSet={`${t("image.src")}500.webp`}
            />
            <source
              media="(max-width: 1000px)"
              srcSet={`${t("image.src")}1000.webp`}
            />
            <img
              className="mx-auto"
              loading="lazy"
              src={`${t("image.src")}1400.webp`}
              alt={t("image.alt")}
            />
          </picture>
        </div>
      </div>
      <div className="app-functions">
        {cards &&
          cards.map((card, idx) => (
            <div
              key={idx}
              className="functions mb-[4.625rem] grid grid-cols-1 gap-x-16 md:mb-[9.563rem] md:grid-cols-2"
            >
              <div
                className={`images relative ${idx % 2 === 0 ? "order-2  md:order-1" : "order-2  md:order-2"}`}
              >
                <div
                  className="img-parallax transition-transform duration-[6000ms] ease-[cubic-bezier(0, 1, 0.5, 1)] wow animated"
                  data-rellax-min="-60"
                  data-rellax-max="40"
                >
                  <div
                    className="wow zoomIn absolute right-[4.25rem] top-[2rem] sm:right-[6.25rem] sm:top-0"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.5s"
                  >
                    <Star height={42} width={42} border={"#494B7D"} />
                  </div>
                  <div
                    className="wow zoomIn absolute -bottom-[20px] left-[11.875rem] hidden xl:block"
                    data-wow-delay="0.8s"
                    data-wow-duration="0.5s"
                  >
                    <Star height={29} width={29} color={"#494B7D"} />
                  </div>
                  <div
                    className="wow fadeIn absolute bottom-[4.938rem] left-[0.875rem]"
                    data-wow-delay="1s"
                    data-wow-duration="0.5s"
                  >
                    <svg
                      className="line"
                      width="110"
                      height="98"
                      viewBox="0 0 110 98"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M47.6877 61.0474C45.4414 61.0519 43.2009 60.8335 40.9991 60.3953C35.9369 59.323 31.1106 57.3512 26.749 54.5736C20.7609 50.8127 15.4807 46.0296 11.1477 40.4413C6.77451 34.9303 3.88029 28.3912 2.73809 21.441C2.41485 19.1012 2.28265 16.7383 2.34278 14.3759C2.3669 12.0151 2.62921 9.66198 3.12574 7.35242L4.4773 2.55519L5.25807 0.469623L5.19993 0.418311C5.22011 0.423788 5.24121 0.425122 5.26194 0.422237C5.28268 0.419353 5.30262 0.412335 5.32059 0.401551C5.33856 0.390767 5.35418 0.376451 5.3665 0.359495C5.37883 0.342539 5.3876 0.323271 5.39231 0.302858L5.02055 0.182211C4.69276 0.343874 4.41162 0.586794 4.20399 0.887752C3.92741 1.29225 3.682 1.71717 3.46993 2.15881C3.14961 2.77073 2.84382 3.39545 2.57995 4.03127C2.18286 5.00437 1.83704 5.9975 1.5439 7.00654C0.858246 9.40125 0.452115 11.8665 0.333641 14.353C0.231493 16.833 0.37331 19.3163 0.757057 21.7671C1.97326 29.0367 5.0304 35.868 9.63737 41.6107C14.1199 47.3511 19.5805 52.2539 25.7688 56.0942C30.3181 58.9669 35.3425 61.0089 40.6093 62.1258C42.9025 62.5926 45.2361 62.8372 47.5777 62.8563C47.491 76.3548 56.174 86.9613 68.38 92.6386C74.8127 95.6419 81.8321 97.1889 88.9393 97.1697C95.9938 97.0942 102.946 95.4371 109.286 92.3204C109.381 92.2746 109.455 92.1946 109.494 92.0965C109.532 91.9983 109.532 91.8893 109.494 91.7913C109.451 91.696 109.372 91.6215 109.275 91.584C109.177 91.5464 109.069 91.5489 108.973 91.5907C102.589 93.9612 95.7872 94.9861 88.9962 94.6009C82.2789 94.3835 75.6765 92.8277 69.5756 90.0245C58.4098 84.7208 50.3228 75.094 50.4174 62.7435C52.5263 62.5709 54.6112 62.1725 56.6365 61.555C59.4578 60.687 63.0781 58.8256 65.161 56.2167C65.9822 55.2813 66.5448 54.1477 66.7928 52.9289C67.0407 51.71 66.9654 50.4485 66.5743 49.2698C66.2164 48.0791 65.5468 47.0065 64.6349 46.1629C63.723 45.3193 62.6017 44.7353 61.3869 44.4711C60.1928 44.2132 58.9567 44.2126 57.7607 44.4692C56.5648 44.7259 55.4363 45.2341 54.4503 45.9599C52.5244 47.4187 50.9833 49.3258 49.9614 51.5148C48.9755 53.6336 48.2973 55.8816 47.9471 58.1906C47.8514 59.1045 47.7526 60.0805 47.6877 61.0474ZM50.5934 60.8892C52.4874 60.6926 54.3574 60.3058 56.1751 59.7346C58.6782 58.9487 61.9348 57.3238 63.745 54.9799C64.3325 54.2855 64.7285 53.4499 64.8937 52.5562C65.0589 51.6624 64.9875 50.7418 64.6865 49.8856C64.419 49.0635 63.9364 48.3286 63.2887 47.7569C62.641 47.1853 61.8517 46.7978 61.0027 46.6344C60.1363 46.4733 59.2448 46.5 58.3884 46.7125C57.5319 46.925 56.7304 47.3185 56.0377 47.8665C54.5115 49.1261 53.3098 50.7338 52.5342 52.5538C51.7101 54.439 51.1576 56.4309 50.8932 58.4699C50.7394 59.3325 50.6563 60.1149 50.5934 60.8892Z"
                        fill="#494B7D"
                      ></path>
                    </svg>
                  </div>
                  <img
                    className="img lazy"
                    loading="lazy"
                    src={card.image.src}
                    alt={card.image.alt}
                  />
                </div>
              </div>
              <div
                className={`content flex flex-col justify-center text-center md:text-left ${idx % 2 === 0 ? "order-1  md:order-1" : "order-1  md:order-1"}`}
              >
                <p
                  className="wow fadeIn mb-[1.063rem] text-2xl font-bold  text-primary lg:text-3xl"
                  data-wow-delay="0s"
                >
                  {card.title}
                </p>
                <p
                  className="lg:md-[3.125rem] wow fadeIn mb-[1.875rem] px-[0.5rem] text-sm font-light text-metal md:max-w-460  md:px-[0rem] lg:text-xl"
                  data-wow-delay="0.5s"
                >
                  {card.description}
                </p>
                <div
                  className="button lg:md-[0rem] wow fadeIn mx-auto mb-[2.825rem] md:mx-0"
                  data-wow-delay="0.5s"
                >
                  <Button
                    onClick={handleOpenModal}
                    classes="btn download-app large dark h-[3.125rem] !px-[1.4rem] text-white transition-colors md:h-[4.125rem] md:!px-[2rem]"
                    type={"primary"}
                    hoverAnimation
                  >
                    {t("button:download_app")}
                    <FaArrowRightLong className="icon-arrow ml-2.5" />
                    <span></span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
