import React from 'react'
import Accessories from './sidebaroptions/accessories'
import Cpu from './sidebaroptions/cpu'
import Disks from './sidebaroptions/disks'
import Gpu from './sidebaroptions/gpu'
import Motherboard from './sidebaroptions/motherboard'
import Memory from './sidebaroptions/memory'
import PriceSlider from './sidebaroptions/priceslider'

const CategorySidebar = ({product}) => {

    const sidebar = () => {
        switch (product) {
            case "cpu":
                return <Cpu />
            case "gpu":
                return <Gpu />
            case "disks":
                return <Disks />
            case "motherboard":
                return <Motherboard />
            case "memory":
                return <Memory />
            case "accessories":
                return <Accessories />
            default:
                break;
        }
    }
    
    return (
        <div className="CategorySidebar">
            {sidebar()}
            <PriceSlider min={0} max={20000}/>
        </div>
    )      
}

export default CategorySidebar
