import React from 'react'
import './categories.css'

const CategoryElements = ({categories, setProduct}) => {
    return (
        categories.map((e, i) => (
            <li key={i} className="CategoryListElement">
                <button onClick={() => setProduct(e.productType)}>
                    {e.displayname}
                </button>
            </li>
        ))
    )
}

const CategoryHeader = ({categories, setProduct}) => {
    return (
        <ul className="CategoryList">
            <CategoryElements 
                categories={categories}
                setProduct={setProduct}
            />
        </ul>
    )
}

export default CategoryHeader
