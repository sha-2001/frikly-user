import React from 'react'

function DealsCard(props) {

    let amount = (label, amount) => {
        if (label === 'up to') {
            return (
                <>
                    <div className='col-4 offset-1 deals-amount-number' >
                        {amount}
                    </div>
                    <div className='col' >
                        <div className='row'>
                            <div className="col-6 text-center deals-amount-text">% OFF</div>
                        </div>
                    </div>
                </>
            );
        }
        else {
            return (
                <>
                    <div className="col  text-center deals-amount-number">
                        {`Rs.${amount}`}
                    </div>
                </>
            )
        }
    }



    return (
        <div className='container-fluid deals-card' >
            <div className='row' >
                <div className='col text-center h5 deals-title'>{props.card.title}</div>
            </div>
            <div className='row'>
                <div className='col text-center deals-label'>{props.card.label}</div>
            </div>
            <div className='row'>
                {
                    amount(props.card.label, props.card.amount)
                }
            </div>

        </div>
    )
}

export default DealsCard