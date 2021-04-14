import React from 'react'
import { useProductFilterContext } from './hooks/useProductFilter'
import PriceSlider from './sidebarcomponents/priceslider'
import SidebarFilters from './sidebarcomponents/sidebarfilters'

const CategorySidebar = ({product}) => {

    const {filters} = useProductFilterContext()

    if (filters == undefined || filters.length < 1) {
        return (
            <div>
                Under construction
            </div>
        )
    }
    
    return (
        <div className="CategorySidebar">
            <SidebarFilters />
            <PriceSlider min={0} max={20000}/>
        </div>
    )      
}

export default CategorySidebar
