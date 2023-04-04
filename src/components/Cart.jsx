import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import React from 'react'

function Cart(props) {

    return (
        <>
            <Offcanvas placement='end' show={props.show} onHide={props.showClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='mt-3'>
                        Your Shopping Cart is Empty
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className='fs-6'>Let's get it rolling</p>
                    <p className='fs-6'>View your saved item in <span className='text-info-emphasis'>Cart</span> </p>
                    <p className='fs-6'>Start saving with  <span className='text-info-emphasis'>Daily Sales</span> </p>
                    <Link to='/payment'>
                        <button className='btn btn-primary' onClick={()=>{
                            props.cartClose()
                        }}>Pay</button>
                    </Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart