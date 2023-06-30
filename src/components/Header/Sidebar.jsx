import React from 'react'
import { SidebarContainer } from './HeaderStyle'

import {BsArrowLeft} from 'react-icons/bs';
import {BiCategoryAlt,BiSupport} from 'react-icons/bi';
import {FaBook,FaRegHandshake} from 'react-icons/fa';
import {HiOutlineBadgeCheck} from 'react-icons/hi';
import {TbHeartPlus} from 'react-icons/tb';
import {AiOutlineShoppingCart, AiOutlineLogin,AiOutlineInfoCircle} from 'react-icons/ai';
import {GrDocumentText} from 'react-icons/gr';

import { SidebarImages } from './HeaderImages';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="sidebar-header">
        <div className="row p-0 logo-portion">
          <div className="col-2 p-0 ps-4 d-flex justify-content-center align-items-center"><BsArrowLeft size={30} color='white'/></div>
          <div className="col-8 p-0 d-flex justify-content-center align-items-center">
            <img src={SidebarImages.FriklyWhite} alt="..." />
          </div>
        </div>
        <div className="row p-0 cheapest-quote">
          <div className="col-3 d-flex justify-content-center align-items-center">
            <div className="img-container"><GrDocumentText size={22}/></div>
          </div>
          <div className="col-7">
            <p className="cheapest-quote-text1">Get the cheapest quote</p>
            <p className="cheapest-quote-text2">Extra upto 10% off </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="sidebar-home">
        <div className="home-section1">
          <div className="row">
            <div className="col-3"><BiCategoryAlt size={24}/></div>
            <div className="col-8 home-text">Top Categories</div>
          </div>
          <div className="row">
            <div className="col-3"><HiOutlineBadgeCheck size={24}/></div>
            <div className="col-8 home-text">Search by Brands</div>
          </div>
          <div className="row">
            <div className="col-3"><FaBook size={22}/></div>
            <div className="col-8 home-text">Catalogue</div>
          </div>
        </div>
        <div className="home-section2">
          <div className="row">
            <div className="col-3"><TbHeartPlus size={24}/></div>
            <div className="col-8 home-text">Your Wishlist</div>
          </div>
          <div className="row">
            <div className="col-3"><AiOutlineShoppingCart size={24}/></div>
            <div className="col-8 home-text">Your Cart</div>
          </div>
        </div>
        <div className="home-section3">
          <div className="row">
            <div className="col-3"><AiOutlineLogin size={24}/></div>
            <div className="col-8 home-text">Professional Login</div>
          </div>
          <div className="row">
            <div className="col-3"><FaRegHandshake size={24}/></div>
            <div className="col-8 home-text">Become a seller</div>
          </div>
        </div>
        <div className="home-section4">
          <div className="row">
            <div className="col-3"><AiOutlineInfoCircle size={24}/></div>
            <div className="col-8 home-text">About Us</div>
          </div>
          <div className="row">
            <div className="col-3"><BiSupport size={24}/></div>
            <div className="col-8 home-text">Support</div>
          </div>
          <div className="row sidebar-signin">
            <button >Sign in</button>
          </div>
        </div>
      </div>
    </SidebarContainer>
  )
}

export default Sidebar