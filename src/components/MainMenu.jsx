import React, { useState, createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircleUser, faBoxOpen, faTag, faCouch, faEye, faHeart, faCreditCard, faCommentsDollar, faGift, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import Offcanvas from 'react-bootstrap/Offcanvas';
import hamburger from '../assets/icons/hamburger.webp';
import frikly from '../assets/icons/frikly.webp';

// importing departments 
import Arrivals from './Departments/Arrivals';

let Department = (props) => {

  let departmentOpen = (event) => {
    props.departmentClose()
    props.mainClose()
    props.setDepartmentText(event.target.innerText )
  }

  return (
    <>
      <hr />
      <p className='fw-bold' style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => {
        props.departmentClose()
        props.mainOpen()
      }}>
        <FontAwesomeIcon icon={faArrowLeft} className='me-2' /> Back to Main Menu
      </p>
      <hr />
      <h3 className='mb-4 fw-bold' >Departments</h3>
      <p className='fw-normal fs-5 canvas-hover' style={{ cursor: 'pointer' }} onClick={departmentOpen}>New Arrivals</p>
      <p className='fw-normal fs-5 canvas-hover' style={{ cursor: 'pointer' }} onClick={departmentOpen}>Chairs</p>
      <p className='fw-normal fs-5 canvas-hover' style={{ cursor: 'pointer' }} onClick={departmentOpen}>Sofas</p>
      <p className='fw-normal fs-5 canvas-hover' style={{ cursor: 'pointer' }} onClick={departmentOpen}>Tables</p>
      <p className='fw-normal fs-5 canvas-hover' style={{ cursor: 'pointer' }} onClick={departmentOpen}>Beds</p>
      <p className='fw-normal fs-5 canvas-hover' style={{ cursor: 'pointer' }} onClick={departmentOpen}>Storage</p>
      <p className='fw-normal fs-5 canvas-hover' style={{ cursor: 'pointer' }} onClick={departmentOpen}>Decor</p>
      <p className='fw-normal fs-5 canvas-hover' style={{ cursor: 'pointer' }} onClick={departmentOpen}>Kitchen</p>
      <p className='fw-normal fs-5 canvas-hover' style={{ cursor: 'pointer' }} onClick={departmentOpen}>Garden</p>
    </>
  )
}

let MainSection = (props) => {
  return (
    <>
      <p className='fw-bold fs-5 department-heading canvas-hover' onClick={
        () => {
          props.departmentOpen();
          props.setShowMain(true);
        }
      }><FontAwesomeIcon icon={faCouch} className='me-2'/> Departments</p>
      <p className='fw-bold fs-5 canvas-hover ' style={{ color: '#D61355', height: '50px' }}><FontAwesomeIcon icon={faTag}  className='me-3'/> Sales</p>
      <hr />
      <p className='fw-normal canvas-hover' style={{ height: '50px' }}><FontAwesomeIcon className='me-2' size='lg' icon={faCircleUser}  /> My Account</p>
      <p className='fw-normal canvas-hover' style={{ height: '50px' }}><FontAwesomeIcon className='me-2' icon={faBoxOpen} /> My Orders</p>
      <hr />
      <p className='fw-normal  canvas-hover' style={{ height: '50px' }}><FontAwesomeIcon className='me-2' icon={faEye}  /> Recently Viewed</p>
      <p className='fw-normal  canvas-hover' style={{ height: '50px' }}><FontAwesomeIcon className='me-2' icon={faHeart}  /> Lists</p>
      <p className='fw-normal  canvas-hover' style={{ height: '50px' }}><FontAwesomeIcon className='me-2' icon={faCreditCard}  /> Frikly Credit Card</p>
      <p className='fw-normal  canvas-hover' style={{ height: '50px' }}><FontAwesomeIcon className='me-2' icon={faCommentsDollar}  /> Frikly Financing</p>
      <p className='fw-normal  canvas-hover' style={{ height: '50px' }}><FontAwesomeIcon className='me-2' icon={faGift}  /> Gift Card</p>
      <p className='fw-normal  canvas-hover' style={{ height: '50px' }}><FontAwesomeIcon className='me-2' icon={faCircleInfo}  /> Help and Contact</p>
    </>
  )
}

const departmentContext = createContext();

function MainMenu(props) {
  const [show, setShow] = useState(false); // to handle offcanvas
  const [showDepartment, setShowDepartment] = useState(false); // to handle departement section
  const [showArrivals, setShowArrivals] = useState(false) // to handle Arrivals section
  const [showMain, setShowMain] = useState(true); // to handle Main section
  const [departementText,setDepartmentText] = useState("");

  // creating state context 
  let states = [setShow, setShowDepartment, setShowArrivals, setShowMain,setDepartmentText];


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const departmentOpen = () => { setShowDepartment(true) };
  const departmentClose = () => { setShowDepartment(false) };

  const mainOpen = () => { setShowMain(true) };
  const mainClose = () => { setShowMain(false) };

  return (
    <>
      <a href='#/' className=' offcanvas-trigger' onClick={handleShow}>
        <img src={hamburger} alt="hamburger" style={{ backgroundColor: 'white', height: '25px' }} />
      </a>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >
            <img src={frikly} alt="frikly" style={{ height: "2.5rem" }} />
            {/* <hr /> */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <departmentContext.Provider value={states}>
            {
              // conditional rendering of different components in offcanvas
              showDepartment
                ? (<Department setDepartmentText={setDepartmentText} setShowMain={setShowMain} mainOpen={mainOpen} mainClose={mainClose} departmentClose={departmentClose} />)
                : (showMain
                  ? (<MainSection setShowMain={setShowMain} showMainstate={show} departmentOpen={departmentOpen} />)
                  : (<Arrivals text={departementText}/>)
                )
            }
          </departmentContext.Provider>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MainMenu;
export { departmentContext }