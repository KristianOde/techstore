import React from 'react'
import PriceSlider from './sidebarcomponents/priceslider'
import SidebarFilters from './sidebarcomponents/sidebarfilters'

const CategorySidebar = ({product}) => {
    
    return (
        <div className="CategorySidebar">
            <SidebarFilters />
            <PriceSlider min={0} max={20000}/>
        </div>
    )      
}

export default CategorySidebar
