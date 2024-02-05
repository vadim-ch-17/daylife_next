import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Star from "../Star";
import Button from "../Button";
const Side = ({ testimonial }) => {
  const { t } = useTranslation("testimonials");
  const [readMore, setReadMore] = useState(false);

  const readMoreHundler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="flex-auto rounded-mediun bg-primary pb-[3.125rem] pl-[1.75rem] pr-[2.125rem] pt-[2.375rem] shadow-3xl">
      <div className="header mb-[1.25rem] flex w-full flex-col justify-between xl:flex-row">
        <div className="user mb-[0.875rem] flex w-full xl:mb-[0rem] xl:flex-row">
          <div className="image mr-[1.375rem] h-[4.125rem] w-[4.125rem]">
            {testimonial.user_avatar && (
              <img
                className="img-testimonial h-auto w-full rounded-small"
                src={testimonial.user_avatar}
                alt={testimonial.name}
              />
            )}
          </div>

          <div className="name flex w-full flex-col justify-between xl:flex-row">
            <div className="flex flex-col justify-center">
              <p className="mb-1 text-xl font-bold text-white">
                {testimonial.name}
              </p>
              <p className="text-base font-semibold text-metallight">
                {testimonial.diabetes_type}
              </p>
            </div>
            <div className="stars hidden flex-row items-center gap-x-2 xl:flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  type={"rating"}
                  height={24}
                  width={24}
                  color={`${testimonial.rating > i ? "#FAC250" : "transparent"}`}
                  border={"#FAC250"}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="stars flex flex-row items-center gap-x-2 xl:hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              type={"rating"}
              height={24}
              width={24}
              color={`${testimonial.rating > i ? "#FAC250" : "transparent"}`}
              border={"#FAC250"}
            />
          ))}
        </div>
      </div>
      <div
        className={`body grid overflow-hidden transition-gridRows duration-500 ${readMore ? "grid-rows-[1fr]" : "!grid-rows-[0.25fr] "}`}
      >
        <p
          className={`review ${readMore ? "" : "active"} font-base mb-3 min-h-[125px] overflow-hidden font-medium leading-[1.875rem] text-white`}
        >
          {testimonial.review}
        </p>
      </div>
      <Button classes="!text-gold visited:!text-gold" onClick={readMoreHundler}>
        {t("read_more")}
      </Button>
    </div>
  );
};

export default Side;
