import { Fragment } from "react"
import { HeaderSecondContainer, HeaderSecondMobileContainer } from "./HeaderStyle"
import { HeaderSecondImages } from "./HeaderImages"
import {AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'
import {RiAccountCircleLine} from 'react-icons/ri'

const HeaderSecond = () => {
  return (
    <Fragment>
      <HeaderSecondContainer>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img className="frikly-logo" src={HeaderSecondImages.Frikly} alt="..." />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item ">
                  <a class="nav-link" aria-current="page" href="#">Brands</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Get Quote</a>
                </li>
              </ul>
              <form class="d-flex " role="search">
                <input class="form-control" type="search" placeholder="Search on frikly" aria-label="Search" />
                <button class="btn" type="submit">
                  <img className="search-icon" src={HeaderSecondImages.SearchIcon} alt="..." />
                </button>
              </form>
              <ul class="navbar-nav pt-2 mb-2 mb-lg-0 ccwa">
                <li class="nav-item catalogue">
                  <img src={HeaderSecondImages.Catalogue} alt=".." />
                  <a class="nav-link" aria-current="page" href="#">Catalogue</a>
                </li>
                <li class="nav-item cart">
                  <AiOutlineShoppingCart size={22}/>
                  <a class="nav-link" href="#">Cart</a>
                </li>
                <li class="nav-item wishlist">
                  <AiOutlineHeart size={23}/>
                  <a class="nav-link">Wishlist</a>
                </li>
                <li class="nav-item account" >
                  <RiAccountCircleLine size={22}/>
                  <a class="nav-link">Account</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </HeaderSecondContainer>
      <HeaderSecondMobileContainer>
        <div className="htmc-row1">
          <div className="htmc-item1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <img src={HeaderSecondImages.Hamburger} alt="..." />
          </div>
          <div class="offcanvas offcanvas-start w-100" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

          </div>
          <div className="htmc-item2">
            <img src={HeaderSecondImages.Frikly} alt="" />
          </div>
          <div className="htmc-item3">
            <img src={HeaderSecondImages.CatalogueMobile} alt="" />
          </div>
        </div>
        <div className="htmc-row2">
          <form class="d-flex" role="search">
            <input class="form-control" type="search" placeholder="Search on frikly" aria-label="Search" />
            <button class="btn" type="submit">
              <img className="search-icon" src={HeaderSecondImages.SearchIcon} alt="..." />
            </button>
          </form>
        </div>
      </HeaderSecondMobileContainer>
    </Fragment>
  )
}

export default HeaderSecond