import React from 'react'



import { MdOutlineCategory } from 'react-icons/md';
import { AiOutlineTags } from 'react-icons/ai';
import {TbHeartPlus} from 'react-icons/tb';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BiInfoCircle} from 'react-icons/bi';
import {BiSupport} from 'react-icons/bi';
import {FaRegHandshake} from 'react-icons/fa';
import {IoIosLogIn} from 'react-icons/io';



const SidebarOptions = ({handleOptionClick,setSidebarHome}) => {
    return (
        <div>
            <div className="container-fluid brand-cat" >
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-4">
                        <MdOutlineCategory className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-4 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }} onClick={()=>{
                        handleOptionClick('TopCategories');
                        setSidebarHome(false);
                    }}>
                        Top Categories
                    </div>
                </div>
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-2">
                        <AiOutlineTags className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-2 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Search by Brands
                    </div>
                </div>
            </div>
            <div className="container-fluid wishlist-cart">
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-4">
                        <TbHeartPlus className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-4 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Your Wishlist
                    </div>
                </div>
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-2">
                        <AiOutlineShoppingCart className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-2 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Your Cart
                    </div>
                </div>
            </div>
            <div className="container-fluid login-seller">
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-4">
                        <IoIosLogIn className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-4 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Professional Login
                    </div>
                </div>
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-2">
                        <FaRegHandshake className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-2 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Become a seller
                    </div>
                </div>
            </div>
            <div className="container-fluid about-support">
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-4">
                        <BiInfoCircle className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-4 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        About Us
                    </div>
                </div>
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-2">
                        <BiSupport className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-2 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Support
                    </div>
                </div>
            </div>
            <button className='btn sidebar-signin'>Sign In</button>
        </div>
    )
}

export default SidebarOptions