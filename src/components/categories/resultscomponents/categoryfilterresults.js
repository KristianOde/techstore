import React from 'react'
import useProducts from '../../firebase/useProducts'
import ProductBox from '../../product/productbox'
import './categoryresults.css'

const CategoryFilterResults = () => {
    {/** For testing */}
    const [products] = useProducts("all")

    return (
        <div className="CategoryResults">
            {/* sort bar */}
            {products.map((product, i) => {
                return (
                    <ProductBox key={i} product={product}/>
                )
            })}
        </div>
    )
}

export default CategoryFilterResults
