import React from 'react'
import { Route, useMatch } from 'react-router-dom'
import Accessories from './sidebaroptions/accessories'
import Cpu from './sidebaroptions/cpu'
import Disks from './sidebaroptions/disks'
import Gpu from './sidebaroptions/gpu'
import Motherboard from './sidebaroptions/motherboard'
import Memory from './sidebaroptions/memory'



const CategorySidebar = ({product}) => {
    const match = useMatch

    const sidebar = () => {
        switch (product) {
            case "cpu":
                return <Cpu />
                break;
            case "gpu":
                return <Gpu />
                break;
            case "disks":
                return <Disks />
                break;
            case "motherboard":
                return <Motherboard />
                break;
            case "memory":
                return <Memory />
                break;
            case "accessories":
                return <Accessories />
                break;
            default:
                break;
        }
    }
    

    return (
        <div className="CategorySidebar">
            {sidebar}
        </div>
    )      
}

export default CategorySidebar
