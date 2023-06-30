import React from 'react'

import {BsArrowLeft} from 'react-icons/bs';
import {GrDocumentText} from 'react-icons/gr';
import { SidebarImages } from '../HeaderImages';

const SidebarHeader = () => {
    return (
        <>
            <div className="sidebar-header">
                <div className="row p-0 logo-portion">
                    <div className="col-2 p-0 ps-4 d-flex justify-content-center align-items-center" data-bs-dismiss="offcanvas" aria-label="Close"><BsArrowLeft size={30} color='white' /></div>
                    <div className="col-8 p-0 d-flex justify-content-center align-items-center">
                        <img src={SidebarImages.FriklyWhite} alt="..." />
                    </div>
                </div>
                <div className="row p-0 cheapest-quote">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <div className="img-container"><GrDocumentText size={22} /></div>
                    </div>
                    <div className="col-7">
                        <p className="cheapest-quote-text1">Get the cheapest quote</p>
                        <p className="cheapest-quote-text2">Extra upto 10% off </p>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
    )
}

export default SidebarHeader