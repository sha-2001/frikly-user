import { Fragment } from "react"
import { HeaderSecondContainer } from "./HeaderStyle"
import { HeaderSecondImages } from "./HeaderImages"

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
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Brand</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Get Quote</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control" type="search" placeholder="Search on frikly" aria-label="Search" />
                <button class="btn" type="submit">
                  <img className="search-icon" src={HeaderSecondImages.SearchIcon} alt="..." />
                </button>
              </form>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Catalogue</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Cart</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Wishlist</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Account</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </HeaderSecondContainer>
    </Fragment>
  )
}

export default HeaderSecond