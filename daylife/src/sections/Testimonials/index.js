import React, { useRef } from "react";

import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Side from "@/components/Slide";
import { TestimonialsStyles } from "./style";
import Button from "@/components/Button";

const Testimonials = () => {
  const { t } = useTranslation("testimonials");
  const rewiews = t("reviews", { returnObjects: true });

  const sliderRef = useRef();

  const slickNext = () => {
    sliderRef.current.slickNext();
  };

  const slickPrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 758,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <TestimonialsStyles
      id="testimonials"
      className="testimonials  mb-[0rem] pr-0 lg:mb-[5.675rem] "
    >
      <div className="container relative text-center lg:text-left">
        <p
          className="wow fadeIn text-base font-medium text-metal"
          data-wow-delay="0s"
        >
          {t("title")}
        </p>
        <p
          className="wow fadeIn mb-[1.25rem] text-28 font-bold text-primary lg:mb-[2rem] lg:text-40"
          data-wow-delay="0.5s"
        >
          {t("description")}
        </p>
        <div className="slider-arrows absolute right-0 top-[15%] hidden px-3 lg:flex">
          <div style={{ textAlign: "center" }}>
            {Array.from({ length: 2 }).map((_, idx) => (
              <Button
                key={idx}
                onClick={idx === 0 ? slickPrev : slickNext}
                label={idx === 0 ? "prev" : "next"}
                classes="testimonials-btn button-prev color-primary hover:color-white group relative mr-[2.188rem] h-[3.875rem] w-[3.875rem] rounded-full border-2 border-primary bg-white visited:!border-primary hover:border-primaryhover hover:bg-primary active:!border-primary"
              >
                <FaArrowRightLong className={` icon-arrow absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 ${idx === 0 && '!rotate-180'} text-[1.563rem] text-xl text-primary group-hover:text-white`} />
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="testimonials-container container">
        <Slider {...settings} ref={sliderRef}>
          {rewiews.length &&
            rewiews.map((testimonial, idx) => (
              <Side key={idx} testimonial={testimonial} />
            ))}
        </Slider>
      </div>
    </TestimonialsStyles>
  );
};

export default Testimonials;
