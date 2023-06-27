import { useState, Fragment } from "react";
import { HeaderThirdContainer } from "./HeaderStyle";
import { Categories } from "./Category";

import Hardware from "./CategoryComponents/Hardware";
import Sanitaryware from "./CategoryComponents/Sanitaryware";
import HomeAppliances from "./CategoryComponents/HomeAppliances";
import Laminates from "./CategoryComponents/Laminates";
import Beds from "./CategoryComponents/Beds";
import Storage from "./CategoryComponents/Storage";
import Decor from "./CategoryComponents/Decor";
import Kitchen from "./CategoryComponents/Kitchen";

const HeaderThird = () => {
  const [categoryToShow, setCategoryToShow] = useState(null);

  const decideHoveringComponent = (category) => {
    switch (category) {
      case 'Hardware':
        return <Hardware subcat={Categories[0]['subcat']} />;
      case 'Sanitaryware & Bath':
        return <Sanitaryware subcat={Categories[1]['subcat']} />;
      case 'Home Appliances':
        return <HomeAppliances subcat={Categories[2]['subcat']} />;
      case 'Laminates And Mica':
        return <Laminates subcat={Categories[3]['subcat']} />;
      case 'Beds':
        return <Beds />;
      case 'Storage':
        return <Storage />;
      case 'Decor':
        return <Decor />;
      case 'Kitchen':
        return <Kitchen />;
      default:
        return null;
    }
  };

  const handleMouseEnter = (category) => {
    setCategoryToShow(category);
  };

  return (
    <Fragment>
      <HeaderThirdContainer>
        {Categories.map((category, index) => (
          <div
            className="category-main"
            onMouseEnter={() => handleMouseEnter(category.name)}
            key={index}
          >
            <a>{category.name}</a>
            <div className="mega-menu">
              {categoryToShow === category.name && decideHoveringComponent(category.name)}
            </div>
          </div>
        ))}
      </HeaderThirdContainer>
    </Fragment>
  );
};

export default HeaderThird;
