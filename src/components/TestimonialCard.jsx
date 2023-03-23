import React from 'react'

function TestimonialCard() {
    return (
        <div className='testimonial-card' >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed, totam facilis veniam quibusdam id. Minima saepe harum quis, sit necessitatibus iusto delectus exercitationem officia earum hic quos quaerat odit?</p>
            <div style={{display:"flex"}}>
                <div style={{width:'44px',height:'44px',backgroundColor:'#D9D9D9',marginRight:'10px'}}></div>
                <div>
                    <h6>Rohan Kapoor</h6>
                    <p>SDE Amazon</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard