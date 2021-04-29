import React, { useState, useEffect } from 'react'
import CategoryDisplaySettings from './categorydisplaysettings'
import CategoryHeader from './categoryheader'
import CategorySidebar from './categorysidebar'
import ProductFilterProvider, { useProductFilterContext } from './hooks/useProductFilter'
import CategoryFilterResults from './resultscomponents/categoryfilterresults'
import useFirestoreCategories from '../firebase/useFirestoreCategories'

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
        resetFilters
    } = useProductFilterContext()
    const [products, setProducts] = useFirestoreCategories(urlFilterParameter)
    const [isGrid, setIsGrid] = useState(true)
    const [isSortedByDesc, setIsSortedByDesc] = useState(false)
    const [isSortedByAsc, setIsSortedByAsc] = useState(false)

    const sortResults = () => {
        if (isSortedByDesc) {
            setProducts(prev => {
                let newArray = [...prev]
                return sortByDesc(newArray)
            })
        }
        else if (isSortedByAsc) {
            setProducts(prev => {
                let newArray = [...prev]
                return sortByAsc(newArray)
            })
        }
    }

    const sortByDesc = (array) => {
        let needNextPass = true

        for (let k = 1; k < array.length && needNextPass; k++) {
            needNextPass = false;
            for (let i = 0; i < array.length - k; i++) {
                if (array[i].Pris > array[i + 1].Pris) {
                    let temp = array[i]
                    array[i] = array[i + 1]
                    array[i + 1] = temp

                    needNextPass = true
                }
            }
        }
        return array
    }
    
    const sortByAsc = (array) => {
        let needNextPass = true

        for (let k = array.length; k > 1 && needNextPass; k--) {
            needNextPass = false;
            for (let i = array.length-1; i > 0; i--) {
                if (array[i].Pris > array[i - 1].Pris) {
                    let temp = array[i]
                    array[i] = array[i - 1]
                    array[i - 1] = temp

                    needNextPass = true
                }
            }
        }
        return array
    }

    useEffect(() => {
        sortResults()
    }, [isSortedByDesc, isSortedByDesc])

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
                        {console.log(urlFilterParameter)}
                        <CategoryDisplaySettings 
                            isGrid={isGrid} setIsGrid={setIsGrid}
                            isSortedByDesc={isSortedByDesc}
                            isSortedByAsc={isSortedByAsc}
                            setIsSortedByDesc={setIsSortedByDesc}
                            setIsSortedByAsc={setIsSortedByAsc}
                        />
                        <CategoryFilterResults isGrid={isGrid} products={products}/>
                    </div>
                </div>
            </div>
    )
}

export default CategoryPage