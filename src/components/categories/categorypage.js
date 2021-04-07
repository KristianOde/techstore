import React, { useState } from 'react'
import CategoryHeader from './categoryheader'
import CategorySidebar from './categorysidebar'

const CategoryPage = () => {
    const [product, setProduct] = useState("")

    return (
        <div>
            <CategoryHeader setProduct={setProduct}/>
            <CategorySidebar />
            {product}
        </div>
    )
}

export default CategoryPage
