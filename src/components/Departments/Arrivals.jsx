import React from 'react'

import { useContext } from 'react';
import {departmentContext} from '../MainMenu';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';

function Arrivals(props) {

  let [setShow,setShowDepartment] = useContext(departmentContext);
  let categoryClick = () => {
    setShow(false)
  }

  return (
    <div>
      <hr />
      <p className='fw-bold me-2' style={{textDecoration:'underline',cursor: 'pointer'}}  onClick={
        ()=>{
          setShowDepartment(true);
        }
      }>
        <FontAwesomeIcon icon={faArrowLeft}/> Back To Departments</p>
      <hr />
      <h3>{props.text}</h3>
      <p><Link to='/products' onClick={categoryClick}>Category 1</Link></p>
      <p>Category 2</p>
    </div>
  )
}

export default Arrivals