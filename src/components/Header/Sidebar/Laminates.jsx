import React from 'react'
import { LaminatesDropContainer } from '../HeaderStyle'

const Laminates = () => {
    return (
        <>
            <LaminatesDropContainer>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOneLaminates" aria-expanded="false" aria-controls="flush-collapseOneLaminates">
                                Laminates And Sunmica
                            </button>
                        </h3>
                        <div id="flush-collapseOneLaminates" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoLaminates" aria-expanded="false" aria-controls="flush-collapseTwoLaminates">
                                PVC Laminates
                            </button>
                        </h3>
                        <div id="flush-collapseTwoLaminates" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreeLaminates" aria-expanded="false" aria-controls="flush-collapseThreeLaminates">
                                Acrylic Laminates
                            </button>
                        </h3>
                        <div id="flush-collapseThreeLaminates" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourLaminates" aria-expanded="false" aria-controls="flush-collapseFourLaminates">
                                Inner Mica
                            </button>
                        </h3>
                        <div id="flush-collapseFourLaminates" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>
            </LaminatesDropContainer>
        </>
    )
}

export default Laminates