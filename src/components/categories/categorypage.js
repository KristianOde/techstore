import React, { useState, useEffect } from 'react'
import CategoryHeader from './categoryheader'
import CategorySidebar from './categorysidebar'
import ProductFilterProvider, { useProductFilterContext } from './hooks/useProductFilter'

/** eksempel på filter-parametre, fra komplett.no
prosessorer?
    nlevel=10000§28003§11204 //???
    &manufacturer=Intel // valgt produsent
    &manufacturer=AMD
    &cnet-A00040-queryfacet=[2000000000 TO 2490000000] // valgt clock speeds
    &cnet-A00040-queryfacet=[2500000000 TO 2990000000]
    &cnet=Type_A00035%20 §Core i9 // valgt type prosessor
    &pricegross.min=4419 // valgt pris-range
    &pricegross.max=5156
    &pricegross.omin=4290
    &pricegross.omax=5279
*/

const CategoryPage = () => {
    const [categories, setCategories] = useState([
        {"productType": "cpu", "displayname": "Prosessor"},
        {"productType": "gpu", "displayname": "Skjermkort"},
        {"productType": "motherboard", "displayname": "Hovedkort"},
        {"productType": "memory", "displayname": "Minne"},
        {"productType": "disks", "displayname": "Harddisk"},
        {"productType": "accessories", "displayname": "Tilbehør"}
    ])
    const {
        productCategory: product,
        setProductCategory: setProduct, 
        urlFilterParameter, 
        filters,
    } = useProductFilterContext()
    //const [values, setValues] = useCategories(0, 20000)

    return (
            <div>
                <CategoryHeader 
                    categories={categories}
                    setProduct={setProduct}
                />
                <div className="CategoryMainView">
                    <CategorySidebar 
                        product={product}
                    />
                    <div>
                        {product}
                        <br/>
                        {urlFilterParameter}
                    </div>
                </div>
            </div>
    )
}

export default CategoryPage
