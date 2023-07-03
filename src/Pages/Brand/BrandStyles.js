import styled from "styled-components";
import BgImage from "../../assets/Brands/banner-bg.webp";

export const BrandContainer = styled.div`
  margin: 1rem 0rem;
`;

export const BrandBanner = styled.div`
  background: url(${BgImage}) center/cover no-repeat;
  height: 60vh;
  margin: 1% 5.4%;
  position: relative;

  .banner-img1 {
    width: 40%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    left: 60%;
  }
  .banner-img1 img {
    width: 100%;
    height: 100%;
  }
  .banner-text {
    width: 50%;
    height: 40%;
    background-color: transparent;
    position: absolute;
    top: 15%;
    left: 5%;
    font-weight: 600;
    font-size: 54px;
    color: white;
    font-family: Playfair Display;
    text-align: left;
  }
  .scroll-down {
    width: 12%;
    height: 12%;
    background-color: #eae0d5;
    position: absolute;
    top: 65%;
    left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    border-radius: 2px;
  }

  @media (max-width: 1100px) {
    height: 40vh;
    .banner-text {
      font-size: 35px;
      width: 50%;
      top: 25%;
    }
    .scroll-down {
      font-size: 18px;
      width: 20%;
      height: 15%;
      top: 50%;
    }
    .banner-img1 {
      width: 50%;
      left: 55%;
    }
  }
  @media (max-width: 800px) {
    height: 35vh;
    .banner-text {
      font-size: 30px;
    }
    .scroll-down {
      font-size: 16px;
      width: 25%;
      height: 12%;
    }
  }
  @media (max-width: 650px) {
    height: 25vh;
    .banner-text {
      font-size: 20px;
    }
    .scroll-down {
      font-size: 10px;
      width: 18%;
      height: 15%;
    }
  }
  @media (max-width: 460px) {
    height: 20vh;
    .banner-text {
      font-size: 16px;
      width: 50%;
    }
    .scroll-down {
      font-size: 10px;
      width: 22%;
      height: 15%;
    }
    .banner-img1 {
      width: 40%;
      left: 60%;
    }
  }
`;
export const ExploreCategories = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 2 rem;

  img {
    height: 100%;
    width: 100%;
  }

  .categories-heading {
    color: #001c30;
    text-align: center;
    font-size: 1.625rem;
    font-weight: 600;
  }
  .categories-label {
    color: #001c30;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }

  .slider {
    --slider-padding: 1rem;
    --slider-column-gap: 1rem;
    --slide-width: 19%;
    --slide-min-width: 15rem;

    position: relative;
    overflow: hidden;

    &__track {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-inline: var(--slider-padding);
      scroll-behavior: smooth;

      list-style-type: none;
      padding: 0;
      margin-right: calc(--var(slider-column-gap) * -1);

      > * {
        flex: 0 0 var(--slide-width);
        min-width: var(--slide-min-width);
        scroll-snap-align: start;
        scroll-snap-stop: always;
        padding-right: var(--slider-column-gap);
      }

      // hide scrollbar
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__buttons {
      margin-top: 1rem;

      [disabled] {
        opacity: 0.5;
      }
    }
  }

  .slide {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    font-size: 3rem;
    font-weight: 700;
  }

  .container {
    padding: 0% 5.5% 1% 5.3%;
    max-width: 100%;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  .btn2,
  .btn1 {
    position: absolute;
    top: 32%;
    right: 1%;
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 3.125rem;
    background: #22333b;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn1 {
    position: absolute;
    top: 30%;
    left: 1%;
  }
`;
export const BrowseCatalogueContainer = styled(ExploreCategories)`
  .slider {
    --slider-padding: 1rem;
    --slider-column-gap: 4rem;
    --slide-width: 25.8%;
    --slide-min-width: 15rem;
  }
  .container {
    padding: 0% 4.5% 1% 5.3%;
  }
   li div {
    border-radius: 0.25rem;
    border: 1px solid #d3d3d3;
    padding: 5%;
    background-color: white;
  }
  img{
    height: 130%;
  }
`;
