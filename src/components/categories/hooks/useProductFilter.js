import React, { createContext, useEffect, useState, useContext, useReducer, useMemo, useCallback, useLayoutEffect } from 'react'
import Categories from '../categories.json'

let ProductFilterContext
let { Provider } = (ProductFilterContext = createContext())
export const useProductFilterContext = () => useContext(ProductFilterContext)

const ProductFilterProvider = ({ children }) => {
    const [productCategory, setProductCategory] = useState("cpu")
    const [priceRange, setPriceRange] = useState([0, 20000])
    const [urlFilterParameter, setUrlFilterParameter] = useState("")
    const [filters, setFilters] = useState([])

    const categoryImport = () => {
        switch (productCategory) {
            case "cpu":
                return Categories.cpu   
            case "gpu":
                return Categories.gpu     
            default:
                return null
        }
    }

    /** For å gjøre et array simplere å oppdatere state i */
    const convertToFilterArray = (array) => {
        const a = []
        array.forEach(e => {
            e.options.forEach(option => {
                a.push(option)
            })
        })
        return a
    }

    const categoryFilters = () => {
        return convertToFilterArray(categoryImport())
    }

    useEffect(() => {
        setFilters(categoryFilters())
    }, [])

    useEffect(() => {
        resetFilters()
        setFilters(categoryFilters())
    }, [productCategory])

    useEffect(() => {
        setUrlFilterParameter(urlFilterParameterGen())
    }, [productCategory, filters, priceRange])

    const toggle = (objectName) => {
        let newArray = [...filters]
        newArray.forEach(e => {
            if (e.name === objectName)
                e.active = !e.active
        })
        setFilters(newArray)
        console.log(filters)
    }

    const resetFilters = () => {
        let newArray = [...filters]
        newArray.forEach(e => {
            if (e.active)
                e.active = false
        })
        setFilters(newArray)
    }

    const urlFilterParameterGen = () => {
        let string = `p=${productCategory}`
        if (filters.length > 0) {
            filters.forEach(filter => {
                if (filter.active)
                    string += `&${filter.category}=${filter.name}`
            })
        }
        string += `&price.min=${priceRange[0]}&price.max=${priceRange[1]}`
        return string
    }

    const updateValues = (values) => {
        setPriceRange(values)
    }

    return (
        <Provider value={{
            productCategory, filters, priceRange, urlFilterParameter,
            setProductCategory, updateValues, toggle
        }}>
            {children}
        </Provider>
    )
}

export default ProductFilterProvider