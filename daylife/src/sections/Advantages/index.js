import ResponsiveImage from "@/components/ResponsiveImage";
import { useTranslation } from "next-i18next";
const Advantages = () => {
  const { t } = useTranslation("advantages");
  const cards = t("cards", { returnObjects: true });

  return (
    <div id="features">
      <div className="container mb-[4.563rem] lg:mb-[204px]">
        <p
          className="title wow fadeIn text-center text-base font-medium text-metal"
          data-wow-delay="0s"
        >
          {t("title")}
        </p>
        <p
          className="subtitle wow fadeIn  mb-10 text-center text-28 font-bold text-primary lg:mb-16 lg:text-40"
          data-wow-delay="0.5s"
        >
          {t("description")}
        </p>
        <div className="cards flex flex-wrap justify-center gap-7 md:gap-8 lg:gap-14">
          {cards &&
            cards.map((card, idx) => (
              <div
                key={idx}
                className="card wow fadeInUp min-w-none flex w-[296px] flex-col justify-between rounded-large bg-white pb-[2.513rem] pt-[1.563rem]  shadow-3xl md:min-h-438 md:w-auto md:min-w-[18.5rem] lg:min-w-342 lg:pb-[3.125rem]"
                data-wow-delay={`${idx * 0.2}s`}
              >
                <ResponsiveImage
                  classes="lg:max-w-auto mx-auto mb-8 max-h-[288px] md:mb-0"
                  loadImg="lazy"
                  src={card.image.src}
                  alt={card.image.alt} />
                <p className="text-center text-xl font-bold text-primary">
                  {card.title}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
