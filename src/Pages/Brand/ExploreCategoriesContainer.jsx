import React, { useEffect } from "react";
import {ExploreCategories } from "./BrandStyles";
import { BrandImages } from "./BrandImages";
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs';

const ExploreCategoriesContainer = () => {
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
    <ExploreCategories>
      <p className="categories-heading">Explore Categories</p>
      <div className="container">
        <div className="slider" data-slider>
          <ul className="slider__track" data-slider-track>
            <li>
              <div className="slide">
                <img src={BrandImages.ChannelAndHinges} alt="..." />
              </div>
              <p className="categories-label">Channel & Hinges</p>
            </li>
            <li>
              <div className="slide">
                <img src={BrandImages.Locks} alt="..." />
              </div>
              <p className="categories-label">Locks</p>
            </li>
            <li>
              <div className="slide">
                <img src={BrandImages.DoorHardware} alt="..." />
              </div>
              <p className="categories-label">Door Hardware</p>
            </li>
            <li>
              <div className="slide">
                <img src={BrandImages.GlassFittings} alt="..." />
              </div>
              <p className="categories-label">Glass Fittings & Hardware</p>
            </li>
            <li>
              <div className="slide">
                <img src={BrandImages.Fastners} alt="..." />
              </div>
              <p className="categories-label">Fastners</p>
            </li>
            <li>
              <div className="slide">6</div>
            </li>
            <li>
              <div className="slide">7</div>
            </li>
          </ul>
          <div className="slider__buttons">
            <button className="slider__button btn1" data-slider-prev disabled>
              <BsChevronLeft size={18} color="white" />
            </button>
            <button className="slider__button btn2" data-slider-next>
              <BsChevronRight size={18} color="white" />
            </button>
          </div>
        </div>
      </div>
    </ExploreCategories>
  );
};

export default ExploreCategoriesContainer;
