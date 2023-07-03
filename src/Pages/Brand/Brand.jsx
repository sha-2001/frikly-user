import React, { useEffect } from "react";
import { BrandBanner, BrandContainer, ExploreCategories } from "./BrandStyles";
import ExploreCategoriesContainer from "./ExploreCategoriesContainer";
import { BrandImages } from "./BrandImages";
import BrowseCatalogue from "./BrowseCatalogue";
import Products from "../Product/Products";

const Brand = () => {
  

  return (
    <>
      <BrandContainer>
        <BrandBanner>
          <div className="banner-img1">
            <img src={BrandImages.BannerMan} alt=".." />
          </div>
          <div className="banner-text">
            Innovations for every <br /> furniture environment
          </div>
          <div className="scroll-down">Scroll Down</div>
        </BrandBanner>
        <ExploreCategoriesContainer/>
        <BrowseCatalogue/>
      </BrandContainer>
      <Products/>
    </>
  );
};

export default Brand;
