import React from 'react'

function OnTheWayCard(props) {
    return (
        <div className='on-the-way-card' >
            <img src={props.card.image} alt='on the way'></img>
            <p>{props.card.text}</p>
        </div>
    )
}

export default OnTheWayCard