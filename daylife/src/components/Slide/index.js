import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Star from "../Star";
import Button from "../Button";
import ResponsiveImage from "../ResponsiveImage";
const Side = ({ testimonial }) => {
  const { t } = useTranslation("testimonials");
  const [readMore, setReadMore] = useState(false);
  const [trimmedReview, setTrimmedReview] = useState('');

  const setTrimWords = (str, n) => {
    !readMore ? setTrimmedReview(str)
      : setTimeout(() => {
        setTrimmedReview(str.substring(0, n) + '...');
      }, 500);
  }

  const readMoreHundler = () => {
    setReadMore(!readMore);
    setTrimWords(testimonial.review, 200)
  };

  useEffect(() => {
    setTrimmedReview(testimonial.review.substring(0, 200) + '...');
  }, [testimonial]);

  return (
    <div className="flex-auto rounded-mediun bg-primary pb-[3.125rem] pl-[1.75rem] pr-[2.125rem] pt-[2.375rem] shadow-3xl">
      <div className="header mb-[1.25rem] flex w-full flex-col justify-between xl:flex-row">
        <div className="user mb-[0.875rem] flex w-full xl:mb-[0rem] xl:flex-row">
          <div className="image mr-[1.375rem] h-[4.125rem] w-[4.125rem]">
            {testimonial.user_avatar && (
              <ResponsiveImage
                src={testimonial.user_avatar}
                alt={testimonial.name}
                classes="img-testimonial h-auto w-full rounded-small"
                loadImg='lazy'
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
        className={`body grid overflow-hidden transition-all duration-500 ${readMore ? "grid-rows-[1fr]" : "!grid-rows-[0.25fr] "}`}
      >
        <p
          className={`review font-base mb-3 min-h-[125px] overflow-hidden font-medium leading-[1.875rem] text-white`}
        >
          {trimmedReview}
        </p>
      </div>
      <Button
        label="read more"
        classes="text-gold visited:!text-gold relative after:content-[''] after:absolute after:w-full after:h-[0.05em] after:bg-gold after:rounded-[5px] after:left-0 after:bottom-0 after:scale-0 after:transform after:origin-bottom-right after:transition-transform after:duration-500 after:ease-out hover:after:scale-100 hover:after:origin-bottom-left"
        onClick={readMoreHundler}>
        {t("read_more")}
      </Button>
    </div>
  );
};

export default Side;
