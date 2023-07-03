import React from 'react'

import {BiCategoryAlt,BiSupport} from 'react-icons/bi';
import {FaBook,FaRegHandshake} from 'react-icons/fa';
import {HiOutlineBadgeCheck} from 'react-icons/hi';
import {TbHeartPlus} from 'react-icons/tb';
import {AiOutlineShoppingCart, AiOutlineLogin,AiOutlineInfoCircle} from 'react-icons/ai';

const SidebarHome = ({toggleHome}) => {
    return (
        <>
            <div className="sidebar-home mt-3">
                <div className="home-section1">
                    <div className="row">
                        <div className="col-3"><BiCategoryAlt size={24} /></div>
                        <div className="col-8 home-text" 
                            onClick={()=>(toggleHome('topCategories'))}
                        >Top Categories</div>
                    </div>
                    <div className="row">
                        <div className="col-3"><HiOutlineBadgeCheck size={24} /></div>
                        <div className="col-8 home-text">Search by Brands</div>
                    </div>
                    <div className="row">
                        <div className="col-3"><FaBook size={22} /></div>
                        <div className="col-8 home-text">Catalogue</div>
                    </div>
                </div>
                <div className="home-section2">
                    <div className="row">
                        <div className="col-3"><TbHeartPlus size={24} /></div>
                        <div className="col-8 home-text">Your Wishlist</div>
                    </div>
                    <div className="row">
                        <div className="col-3"><AiOutlineShoppingCart size={24} /></div>
                        <div className="col-8 home-text">Your Cart</div>
                    </div>
                </div>
                <div className="home-section3">
                    <div className="row">
                        <div className="col-3"><AiOutlineLogin size={24} /></div>
                        <div className="col-8 home-text">Professional Login</div>
                    </div>
                    <div className="row">
                        <div className="col-3"><FaRegHandshake size={24} /></div>
                        <div className="col-8 home-text">Become a seller</div>
                    </div>
                </div>
                <div className="home-section4">
                    <div className="row">
                        <div className="col-3"><AiOutlineInfoCircle size={24} /></div>
                        <div className="col-8 home-text">About Us</div>
                    </div>
                    <div className="row">
                        <div className="col-3"><BiSupport size={24} /></div>
                        <div className="col-8 home-text">Support</div>
                    </div>
                    <div className="row sidebar-signin">
                        <button >Sign in</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarHome