import React from "react";
import useIntersectionObserver from "@/hooks/intersectionObserver";
import arrowsType from "./const";
const Arrow = ({
  classContainer,
  type,
  svgStyles,
  part1Styles,
  part2Styles,
  partD1,
  partD2,
  width,
  height,
  viewBox,
}) => {
  const [ref, inView] = useIntersectionObserver({
    rootMargin: "5px",
    threshold: 1,
  });

  return (
    <div className={classContainer}>
      <div className="arrow-under absolute">
        <svg
          ref={ref}
          className={`svg bottom ${inView ? "active" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          width={width}
          height={height}
          style={svgStyles}
        >
          <path
            className="cls-1 svg-elem-1"
            style={part1Styles}
            d={partD1}
          ></path>
          <path
            className="cls-1 svg-elem-2"
            style={part2Styles}
            d={partD2}
          ></path>
        </svg>
      </div>
      <div
        className="arrow absolute"
        dangerouslySetInnerHTML={{ __html: arrowsType[type] }}
      ></div>
    </div>
  );
};

export default Arrow;
