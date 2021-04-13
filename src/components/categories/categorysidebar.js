import React from 'react'
import PriceSlider from './sidebaroptions/priceslider'
import SidebarFilters from './sidebaroptions/sidebarfilters'

const CategorySidebar = ({product}) => {
    
    return (
        <div className="CategorySidebar">
            <SidebarFilters />
            <PriceSlider min={0} max={20000}/>
        </div>
    )      
}

export default CategorySidebar
