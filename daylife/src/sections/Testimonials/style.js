import styled from "styled-components";

export const TestimonialsStyles = styled.div`

  .testimonials-container.container {
    @media screen and (max-width: 992px) {
      padding-right: 0;
    }
    @media screen and (max-width: 578px) {
      padding-left: 0;
    }
  }
  .slick-list {
    width: calc(100vw - (100vw - 100%) / 2);
    padding: 0 20% 0 0 !important;
    @media screen and (max-width: 992px) {
      padding: 0 10% 0 0 !important;
      width: calc(96vw - (100vw - 100%) / 2);
    }
  }
  .slick-slider {
    margin: 0 0 0 0;
    @media screen and (min-width: 578px) {
      margin: 0 0 0 -25px;
    }
  }
  .slick-slide {
    margin: 0 15px;
  }
  .slick-track {
    display: flex;
    padding: 35px 0;
  }
`;
