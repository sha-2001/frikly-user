import React, { useState } from 'react'
import './sidebar.css'

import SidebarHeader from './SidebarHeader';
import SidebarOptions from './SidebarOptions';
import SidebarContent from './SidebarContent';

function Sidebar({ sidebarStatus, toggleSidebar }) {

    const[selectedOption, setSelectedOption] = useState(null);
    const[showOptions, setShowOptions] = useState(true);
    const [sidebarHome, setSidebarHome] = useState(true);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
    }

    const handleContentClick = () => {
        setShowOptions(true);
    }

    return (
        <div className={sidebarStatus ? "sidebar sidebar--open  d-xl-none" : "sidebar d-md-none"}>
            <SidebarHeader toggleSidebar={toggleSidebar} setShowOptions={setShowOptions} sidebarHome={sidebarHome} setSidebarHome={setSidebarHome}/>
            {showOptions && <SidebarOptions handleOptionClick={handleOptionClick} setSidebarHome={setSidebarHome}/>}
            {!showOptions && <SidebarContent selectedOption={selectedOption} handleContentClick={handleContentClick}/>}    
        </div>
    )
}

export default Sidebar