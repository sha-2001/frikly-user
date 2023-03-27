import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import frikly from '../assets/icons/frikly.webp'

function OffcanvasMenu(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className='btn offcanvas-trigger'  onClick={handleShow}>
        {props.text}
      </a>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >
            <img src={frikly} alt="frickly" style={{height:"3rem"}}/>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <hr />
          <h4>{props.text}</h4>
          <hr />
          <p>{props.text} Subcat1</p>
          <p>{props.text} Subcat2</p>
          <p>{props.text} Subcat3</p>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasMenu;