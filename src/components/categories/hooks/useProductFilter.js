import React, { createContext, useEffect, useState, useContext, useReducer } from 'react'
import IntelCategories from '../testcategories.json'

let ProductFilterContext
let { Provider } = (ProductFilterContext = createContext())
export const useProductFilterContext = () => useContext(ProductFilterContext)

const ProductFilterProvider = ({ children }) => {
    const [productCategory, setProductCategory] = useState("cpu")
    const [priceRange, setPriceRange] = useState([0, 20000])
    const [urlFilterParameter, seturlFilterParameter] = useState("")

    const categoryImport = () => {
        switch (productCategory) {
            case "cpu":
                return IntelCategories        
            default:
                return null
        }
    }

    const convertToFilterArray = (array) => {
        const a = []
        array.forEach(e => {
            e.options.forEach(option => {
                a.push(option)
            })
        })
        return a
    }

    const reducer = (filters, action) => {
        if (action.type == 'toggle') {
            return filters.map(filter => {
                if(filter.name == action.payload) {
                    filter.active = !filter.active
                }
                return filter
            })
        }
    }

    const [filters, dispatch] = useReducer(reducer, convertToFilterArray(categoryImport().categories))

    useEffect(() => {
        seturlFilterParameter(urlFilterParameterGen())
    }, [productCategory, filters, priceRange])

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
            setProductCategory, updateValues, dispatch
        }}>
            {children}
        </Provider>
    )
}

export default ProductFilterProvider