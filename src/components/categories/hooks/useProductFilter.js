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
            case "motherboard":
                return Categories.motherboard 
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
        try{ 
            return convertToFilterArray(categoryImport())
        } catch {
            console.log("Filter operation failed")
        }
    }

    useEffect(() => {
        try{
            resetFilters()
        } catch {
            console.log("Reset filter operation failed")
        } finally {
            setFilters(categoryFilters())
        }
    }, [])

    useEffect(() => {
        try{
            resetFilters()
        } catch {
            console.log("Reset filter operation failed")
        } finally {
            setFilters(categoryFilters())
        }
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
        let string = `${productCategory}`
        if (filters != undefined && filters.length > 0) {
            filters.forEach(filter => {
                if (filter.active)
                    string += `&${filter.name}`
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
            setProductCategory, updateValues, toggle, resetFilters
        }}>
            {children}
        </Provider>
    )
}

export default ProductFilterProvider