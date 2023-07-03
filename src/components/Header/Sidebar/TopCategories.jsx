import React from 'react'
import { TopCategoriesContainer } from '../HeaderStyle'
import { SidebarImages } from '../HeaderImages'
import Hardware from './Hardware'
import Sanitaryware from './Sanitaryware'
import Appliances from './Appliances'
import Laminates from './Laminates'

const TopCategories = () => {
    return (
        <TopCategoriesContainer>
            <div class="accordion p-0 accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <span className='hardware-items'>
                                <img src={SidebarImages.Hardware} alt="..." />
                            </span>
                            Hardware
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <Hardware/>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <span className= 'bath-items'>
                                <img src={SidebarImages.Bath} alt="..." />
                            </span>
                            Sanitaryware & Bath
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <Sanitaryware/>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <span className='appliances-items'>
                                <img src={SidebarImages.Appliances} alt="..." />
                            </span>
                            Home Appliances
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <Appliances/>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            <span className='laminates-items'>
                                <img src={SidebarImages.Laminates} alt="..." />
                            </span>
                            Laminate and Mica
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <Laminates/>
                        </div>
                    </div>
                </div>
            </div>
        </TopCategoriesContainer>
    )
}

export default TopCategories