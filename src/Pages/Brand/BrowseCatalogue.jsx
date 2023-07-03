import React, { useEffect } from "react";
import { BrowseCatalogueContainer } from "./BrandStyles";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { CatalogeImages } from "./BrandImages";

const BrowseCatalogue = () => {
  useEffect(() => {
    const slider = document.querySelector("[data-slider]");
    const track = slider.querySelector("[data-slider-track]");
    const prev = slider.querySelector("[data-slider-prev]");
    const next = slider.querySelector("[data-slider-next]");

    if (track && prev && next) {
      const slideWidth = track.firstElementChild.offsetWidth;

      prev.addEventListener("click", () => {
        next.removeAttribute("disabled");

        track.scrollTo({
          left: track.scrollLeft - slideWidth,
          behavior: "smooth",
        });
      });

      next.addEventListener("click", () => {
        prev.removeAttribute("disabled");

        track.scrollTo({
          left: track.scrollLeft + slideWidth,
          behavior: "smooth",
        });
      });

      track.addEventListener("scroll", () => {
        const trackScrollWidth = track.scrollWidth;
        const trackOuterWidth = track.clientWidth;

        prev.removeAttribute("disabled");
        next.removeAttribute("disabled");

        if (track.scrollLeft <= 0) {
          prev.setAttribute("disabled", "");
        }

        if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
          next.setAttribute("disabled", "");
        }
      });
    }
  }, []);
  return (
    <>
      <BrowseCatalogueContainer>
        <p className="categories-heading"> Browse Catalogue</p>
        <div class="container">
          <div class="slider" data-slider>
            <ul class="slider__track" data-slider-track>
              <li>
                <div class="slide">
                  <img src={CatalogeImages.Cataloge1} alt=".." />
                </div>
                <p className="categories-label">Cataloge1</p>
              </li>
              <li>
                <div class="slide">
                  <img src={CatalogeImages.Cataloge2} alt=".." />
                </div>
                <p className="categories-label">Cataloge2</p>
              </li>
              <li>
                <div class="slide">
                  <img src={CatalogeImages.Cataloge3} alt=".." />
                </div>
                <p className="categories-label">Cataloge3</p>
              </li>
              <li>
                <div class="slide">
                  <img src={CatalogeImages.Cataloge4} alt=".." />
                </div>
                <p className="categories-label">Cataloge4</p>
              </li>
              <li>
                <div class="slide">5</div>
              </li>
              <li>
                <div class="slide">6</div>
              </li>
              <li>
                <div class="slide">7</div>
              </li>
            </ul>
            <div className="slider__buttons d-lg-none">
              <button className="slider__button btn1" data-slider-prev disabled>
                <BsChevronLeft size={18} color="white" />
              </button>
              <button className="slider__button btn2" data-slider-next>
                <BsChevronRight size={18} color="white" />
              </button>
            </div>
          </div>
        </div>
      </BrowseCatalogueContainer>
    </>
  );
};

export default BrowseCatalogue;
