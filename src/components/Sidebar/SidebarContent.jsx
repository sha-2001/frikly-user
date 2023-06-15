import React from 'react'
import TopCategories from './Options/TopCategories'

const SidebarContent = ({ selectedOption, handleContentClick }) => {

    

    const optionComponents = {
        'TopCategories' : <TopCategories/>,
        'SearchByBrands' : '',
        'YourWishlist' : '',
        'YourCart' : '',
        'ProfessionalLogin' : '',
        'BecomeASeller' : '',
        'AboutUs' : '',
        'Support' : ''
    }

    return (
        <div className='sidebar-content' >
            {selectedOption && optionComponents[selectedOption]}
        </div>
    )
}

export default SidebarContent