import React from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'
import './categories.css'

const categories = [
    {"productType": "cpu", "displayname": "Prosessor"},
    {"productType": "gpu", "displayname": "Skjermkort"},
    {"productType": "motherboard", "displayname": "Hovedkort"},
    {"productType": "memory", "displayname": "Minne"},
    {"productType": "disks", "displayname": "Harddisk"},
    {"productType": "accessories", "displayname": "Tilbehør"}
]

const CategoryElements = (props) => {
    const match = useLocation
    console.log(match)
    
    return (
        categories.map(e => (
            <li className="CategoryListElement">
                <button onClick={() => props.setProduct(e.productType)}>
                    {e.displayname}
                </button>
            </li>
            
        ))
    )
}


const CategoryHeader = () => {
    return (
        <ul className="CategoryList">
            <CategoryElements />
        </ul>
    )
}

export default CategoryHeader
